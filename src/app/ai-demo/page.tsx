import { VoiceAssistant } from '@/components/ai-demo/voice-assistant';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export default function AiDemoPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-b from-primary/30 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-80" />
      </div>
      <div className="container relative z-10 mx-auto max-w-5xl px-4 py-12 md:py-20">
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
          <VoiceAssistant />
        </div>
      </div>
    </div>
  );
}
