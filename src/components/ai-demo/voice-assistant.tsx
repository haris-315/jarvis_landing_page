'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Bot, Mic, Square, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Status = 'disconnected' | 'recording' | 'processing' | 'connected';

export function VoiceAssistant() {
  const [status, setStatus] = useState<Status>('disconnected');
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const socket = useRef<WebSocket | null>(null);
  const audioContext = useRef<AudioContext | null>(null);
  const processor = useRef<ScriptProcessorNode | null>(null);
  const mediaStreamSource = useRef<MediaStreamAudioSourceNode | null>(null);
  const isRecording = useRef(false);
  const currentTranscriptRef = useRef('');
  const currentResponseRef = useRef('');

  useEffect(() => {
    currentTranscriptRef.current = transcript;
    currentResponseRef.current = response;
  }, [transcript, response]);

  const float32ToInt16 = (float32Array: Float32Array) => {
    const int16Array = new Int16Array(float32Array.length);
    for (let i = 0; i < float32Array.length; i++) {
      const clampedValue = Math.max(-1, Math.min(1, float32Array[i]));
      int16Array[i] = clampedValue * 0x7FFF;
    }
    return int16Array;
  }

  const resampleTo16kHz = (audioBuffer: Float32Array, sourceSampleRate: number) => {
    if (sourceSampleRate === 16000) {
      return audioBuffer;
    }

    const ratio = sourceSampleRate / 16000;
    const newLength = Math.round(audioBuffer.length / ratio);
    const result = new Float32Array(newLength);

    for (let i = 0; i < newLength; i++) {
      const sourceIndex = i * ratio;
      const index = Math.floor(sourceIndex);
      const fraction = sourceIndex - index;

      if (index + 1 < audioBuffer.length) {
        result[i] = audioBuffer[index] * (1 - fraction) + audioBuffer[index + 1] * fraction;
      } else {
        result[i] = audioBuffer[index];
      }
    }

    return result;
  }

  const speakText = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => voice.name.includes('Google US English')) || voices[0];
    utterance.voice = preferredVoice;

    window.speechSynthesis.speak(utterance);
  }

  const startRecording = async () => {
    try {
      setStatus('recording');
      setTranscript('Listening...');
      setResponse('');
      currentResponseRef.current = '';

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      audioContext.current = new ((window as any).AudioContext || (window as any).webkitAudioContext)();

      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoazMxNS5pbkBvdXRsb29rLmNvbSJ9.p9WRxtr-dIyH0ZXJqtlD_2Vg6XCeO_IMyx5690L_PjU";
      const isLocal = window.location.hostname.includes("localhost");
      let wsUrl;

      if (isLocal) {
        wsUrl = `ws://localhost:12000/agent/jarvis/ws?token=${token}`;
      } else {
        wsUrl = `wss://assitant.trylenoxinstruments.com/agent/jarvis/ws?token=${token}`;
      }

      socket.current = new WebSocket(wsUrl);

      socket.current.onopen = () => {
        console.log("WebSocket connected");
        setStatus('connected');

        const authMessage = JSON.stringify({
          "authToken": token,
          "projects": ["Project(id: 2, name: My Project)"],
          "tasks": [{ "name": "this is task" }]
        });

        socket.current?.send(authMessage);

        isRecording.current = true;

        mediaStreamSource.current = audioContext.current!.createMediaStreamSource(stream);
        processor.current = audioContext.current!.createScriptProcessor(2048, 1, 1);

        processor.current.onaudioprocess = (event) => {
          if (!isRecording.current || socket.current?.readyState !== WebSocket.OPEN) {
            return;
          }

          const inputBuffer = event.inputBuffer;
          const inputData = inputBuffer.getChannelData(0);

          const resampledData = resampleTo16kHz(inputData, inputBuffer.sampleRate);
          const pcmData = float32ToInt16(resampledData);

          socket.current?.send(pcmData.buffer);
        };

        const gainNode = audioContext.current!.createGain();
        gainNode.gain.value = 0;

        mediaStreamSource.current.connect(processor.current);
        processor.current.connect(gainNode);
        gainNode.connect(audioContext.current!.destination);
      };

      socket.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          switch (data.type) {
            case 'start':
              console.log("Processing started for:", data.transcript);
              setTranscript(data.transcript);
              setStatus('processing');
              setResponse('');
              currentResponseRef.current = '';
              setIsProcessing(true);
              break;

            case 'chunk':
              console.log("Received chunk:", data.text);
              currentResponseRef.current += data.text;
              setResponse(currentResponseRef.current);
              speakText(data.text);
              break;

            case 'end':
              console.log("Response completed");
              setStatus('connected');
              setIsProcessing(false);
              setTranscript('Listening...');
              break;

            case 'error':
              console.error("Server error:", data.text);
              setStatus('connected');
              setTranscript('Listening...');
              break;

            default:
              console.log("Received legacy response:", event.data);
              setResponse(event.data);
              if (currentTranscriptRef.current && currentTranscriptRef.current !== 'Listening...' && event.data) {
                speakText(event.data);
              }
              break;
          }
        } catch (error) {
          console.log("Received non-JSON response:", event.data);
          setResponse(event.data);
          if (currentTranscriptRef.current && currentTranscriptRef.current !== 'Listening...' && event.data) {
            speakText(event.data);
          }
        }
      };

      socket.current.onerror = (error) => {
        console.error("WebSocket error:", error);
        setStatus('disconnected');
        stopRecording();
      };

      socket.current.onclose = () => {
        console.log("WebSocket closed");
        setStatus('disconnected');
        stopRecording();
      };

    } catch (error) {
      console.error("Error starting recording:", error);
      // Add a more descriptive error message for the user
      if (error instanceof DOMException && error.name === "NotAllowedError") {
        alert("Microphone permission denied. Please allow microphone access in your browser settings.");
      } else {
        alert("Could not start audio source. Please check if your microphone is connected and not in use by another application.");
      }
      setStatus('disconnected');
    }
  }

  const stopRecording = () => {
    isRecording.current = false;
    setIsProcessing(false);

    if (processor.current) {
      processor.current.disconnect();
      processor.current = null;
    }

    if (mediaStreamSource.current) {
      mediaStreamSource.current.disconnect();
      mediaStreamSource.current.mediaStream.getTracks().forEach(track => track.stop());
      mediaStreamSource.current = null;
    }

    if (audioContext.current) {
      audioContext.current.close();
      audioContext.current = null;
    }

    if (socket.current) {
      socket.current.close();
      socket.current = null;
    }

    setStatus('disconnected');
    setTranscript('Listening...');
    window.speechSynthesis.cancel();
    console.log("Recording stopped");
  }

  useEffect(() => {
    return () => {
      stopRecording();
    };
  }, []);


  const StatusIndicator = () => {
    const statusConfig = {
      disconnected: { text: 'Disconnected', color: 'bg-red-500' },
      connected: { text: 'Connected', color: 'bg-green-500' },
      recording: { text: 'Recording', color: 'bg-yellow-500' },
      processing: { text: 'Processing', color: 'bg-purple-500' },
    };
    const { text, color } = statusConfig[status];
    return (
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className={cn('w-3 h-3 rounded-full animate-pulse-status', color)}></div>
        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{text}</span>
      </div>
    );
  };

  return (
    <Card className="w-full glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl">
      <StatusIndicator />
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <Button
          onClick={startRecording}
          disabled={isRecording.current}
          className="bg-[--success-gradient] text-white rounded-full px-6 py-3 font-bold hover:scale-105 transition-transform"
        >
          <Mic className="mr-2" />
          Start Recording
        </Button>
        <Button
          onClick={stopRecording}
          disabled={!isRecording.current}
          className="bg-[--secondary-gradient] text-white rounded-full px-6 py-3 font-bold hover:scale-105 transition-transform"
        >
          <Square className="mr-2" />
          Stop
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card className="glass-card rounded-xl p-4 border-sky-400/50">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}><User /> Your Request</h3>
          <p className="italic min-h-[4rem]" style={{ color: '#00f2fe' }}>{transcript || 'Listening...'}</p>
        </Card>
        <Card className="glass-card rounded-xl p-4 border-indigo-400/50">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}><Bot /> Assistant Response</h3>
          <p className={cn("min-h-[4rem] whitespace-pre-wrap", { 'typing-indicator': isProcessing })} style={{ color: 'var(--text-primary)' }}>
            {response || 'No response yet'}
          </p>
        </Card>
      </div>
    </Card>
  );
}
