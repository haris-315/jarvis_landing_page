import { AiSummarySection } from '@/components/home/ai-summary-section';
import { VoiceAssistant } from '@/components/ai-demo/voice-assistant';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Mic } from 'lucide-react';

export default function AiDemoPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:py-20">
      <Breadcrumbs />
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          AI Playground
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Experience the power of our AI capabilities firsthand.
        </p>
      </header>
      <div className="mt-12">
        <Tabs defaultValue="voice-assistant" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="voice-assistant">
              <Mic className="mr-2" />
              Voice Assistant
            </TabsTrigger>
            <TabsTrigger value="email-summary">
              <Mail className="mr-2" />
              Email Summarization
            </TabsTrigger>
          </TabsList>
          <TabsContent value="voice-assistant">
            <VoiceAssistant />
          </TabsContent>
          <TabsContent value="email-summary">
            <AiSummarySection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
