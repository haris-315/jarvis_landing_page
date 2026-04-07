"use client";

import { Card } from '@/components/ui/card';
import { Mail, MessageCircle, Mic, Star, Zap, Calendar } from 'lucide-react';
import { useState } from 'react';

const steps = [
  {
    icon: <Zap className="h-10 w-10" />,
    title: 'Connect Outlook',
    description:
      'With just one click, securely link your Outlook account. No complicated setup, no manual syncing. All of your emails, folders, and contacts flow directly into the platform so you can start instantly.',
  },
  {
    icon: <Mail className="h-10 w-10" />,
    title: 'Get Summaries',
    description:
      'Tired of scrolling through endless threads? Our AI automatically condenses conversations into clear, human-friendly summaries. You’ll know exactly what was discussed and what requires your attention.',
  },
  {
    icon: <MessageCircle className="h-10 w-10" />,
    title: 'Use AI Chat',
    description:
      'Ask questions about your inbox, draft professional replies in seconds, or brainstorm ideas. The AI assistant is context-aware, meaning its responses are relevant and tailored to your workflow.',
  },
  {
    icon: <Mic className="h-10 w-10" />,
    title: 'Record Meetings',
    description:
      'Never worry about missing details. Record your meetings with one click and receive both transcripts and AI-generated key takeaways. Focus on the conversation while we handle the note-taking.',
  },
  {
    icon: <Star className="h-10 w-10" />,
    title: 'Stay Organized',
    description:
      'Everything—summaries, chats, transcripts—is neatly categorized and fully searchable. No more digging through endless messages. Your workspace stays clean, clear, and under control.',
  },
  {
    icon: <Calendar className="h-10 w-10" />,
    title: 'Sync Microsoft Calendar',
    description:
      'Seamlessly integrate your Microsoft Calendar to manage appointments, set reminders, and stay on top of your schedule with AI-powered insights.',
  },
];

function AnimatedDescription({ text, active }: { text: string; active: boolean }) {
  const words = text.split(" ");
  return (
    <p className="mt-3 text-muted-foreground leading-relaxed text-lg flex flex-wrap gap-1">
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-300 ${active ? "opacity-100 translate-y-0" : "opacity-30 translate-y-1"
            }`}
          style={{
            transitionDelay: active ? `${i * 60}ms` : "0ms",
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export function HowItWorksSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="w-full py-16 md:py-28 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Get Started in Minutes
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl leading-relaxed">
            Follow these simple steps and unlock a smarter, more productive workflow.
          </p>
        </div>

        <div className="relative">
          {/* Vertical lines */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />
          <div className="md:hidden absolute left-7 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  } md:py-16 group`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Content Side */}
                <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} px-4 md:px-16`}>
                  <Card className="w-full max-w-lg p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 border-primary/10 bg-card/50 backdrop-blur-sm">
                    <div className="md:hidden mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 transition-colors group-hover:text-primary">
                      {step.title}
                    </h3>
                    <AnimatedDescription text={step.description} active={hovered === index} />
                  </Card>
                </div>

                {/* Center Icon (Desktop only) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl border-4 border-background transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/20">
                  {step.icon}
                </div>

                {/* Empty Side (Desktop only) */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
