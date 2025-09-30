'use client';

import { textToSpeech } from '@/ai/flows/text-to-speech';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Bot, History, Mic, Square, Trash2, User } from 'lucide-react';
import { useRef, useState } from 'react';

type Status = 'disconnected' | 'recording' | 'processing';
type ConversationItem = {
  speaker: 'user' | 'assistant';
  text: string;
};

export function VoiceAssistant() {
  const [status, setStatus] = useState<Status>('disconnected');
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [conversationHistory, setConversationHistory] = useState<ConversationItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  // MOCK FUNCTIONS - Replace with actual implementation
  const startRecording = () => {
    setStatus('recording');
    setTranscript('User speaking: Hello, how can you assist me today?');
    // Simulate thinking and then responding
    setTimeout(() => {
      handleMockResponse('User speaking: Hello, how can you assist me today?');
    }, 2000);
  };

  const stopRecording = () => {
    setStatus('disconnected');
  };

  const handleMockResponse = async (text: string) => {
    setStatus('processing');
    setIsProcessing(true);
    setResponse('');

    // Simulate receiving a response
    const mockResponseText = "Of course. I can help with a variety of tasks, including managing your projects, accessing real-time web information, and conducting voice chats. What would you like to do?";

    let currentText = '';
    const interval = setInterval(() => {
      currentText = mockResponseText.substring(0, currentText.length + 1);
      setResponse(currentText);
      if (currentText.length === mockResponseText.length) {
        clearInterval(interval);
        setIsProcessing(false);
        setStatus('disconnected');
        setConversationHistory(prev => [
          ...prev,
          { speaker: 'user', text: text },
          { speaker: 'assistant', text: mockResponseText },
        ]);

        // Generate and play audio
        generateAndPlayAudio(mockResponseText);
      }
    }, 50);
  };

  const generateAndPlayAudio = async (text: string) => {
    try {
      const audioData = await textToSpeech(text);
      if (audioRef.current && audioData.media) {
        audioRef.current.src = audioData.media;
        audioRef.current.play();
      }
    } catch (error) {
      console.error("Error with TTS:", error);
    }
  }


  const clearConversation = () => {
    setConversationHistory([]);
    setTranscript('');
    setResponse('');
  };

  const StatusIndicator = () => {
    const statusConfig = {
      disconnected: { text: 'Disconnected', color: 'bg-red-500' },
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
      <audio ref={audioRef} hidden />
      <StatusIndicator />
      <div className="flex justify-center gap-4 mb-6">
        <Button
          onClick={startRecording}
          disabled={status !== 'disconnected'}
          className="bg-[--success-gradient] text-white rounded-full px-6 py-3 font-bold hover:scale-105 transition-transform"
        >
          <Mic className="mr-2" />
          Start Recording
        </Button>
        <Button
          onClick={stopRecording}
          disabled={status === 'disconnected'}
          className="bg-[--secondary-gradient] text-white rounded-full px-6 py-3 font-bold hover:scale-105 transition-transform"
        >
          <Square className="mr-2" />
          Stop
        </Button>
        <Button
          onClick={clearConversation}
          variant="ghost"
          className="text-white rounded-full px-6 py-3 font-bold hover:bg-white/10"
        >
          <Trash2 className="mr-2" />
          Clear
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card className="glass-card rounded-xl p-4 border-sky-400/50">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}><Mic /> Current Transcript</h3>
          <p className="italic min-h-[4rem]" style={{ color: '#00f2fe' }}>{transcript || 'Listening...'}</p>
        </Card>
        <Card className="glass-card rounded-xl p-4 border-indigo-400/50">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}><Bot /> Assistant Response</h3>
          <p className={cn("min-h-[4rem] whitespace-pre-wrap", { 'typing-indicator': isProcessing })} style={{ color: 'var(--text-primary)' }}>
            {response || 'No response yet'}
          </p>
        </Card>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}><History /> Conversation History</h3>
        <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
          {conversationHistory.length > 0 ? conversationHistory.map((item, index) => (
            <div
              key={index}
              className={cn('p-3 rounded-lg glass-card', {
                'border-l-4 border-sky-400': item.speaker === 'user',
                'border-l-4 border-indigo-400': item.speaker === 'assistant',
              })}
            >
              <div className="flex items-center gap-2 font-bold mb-1 text-sm" style={{ color: 'var(--text-primary)' }}>
                {item.speaker === 'user' ? <User /> : <Bot />}
                {item.speaker === 'user' ? 'You' : 'Assistant'}
              </div>
              <p className="text-sm" style={{ color: item.speaker === 'user' ? '#00f2fe' : 'var(--text-primary)' }}>{item.text}</p>
            </div>
          )) : <p className="text-center text-sm" style={{ color: 'var(--text-secondary)' }}>No conversation yet.</p>}
        </div>
      </div>
    </Card>
  );
}
