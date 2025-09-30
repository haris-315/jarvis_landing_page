import { Zap, Mail, MessageCircle, Mic, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const steps = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Connect Outlook',
    description: 'Instantly sync your email account with one click to get started.',
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: 'Get Summaries',
    description: 'Let our AI read through long threads and give you the gist in seconds.',
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: 'Use AI Chat',
    description: 'Ask questions, draft replies, and get help from our powerful AI assistant.',
  },
  {
    icon: <Mic className="h-8 w-8" />,
    title: 'Record Meetings',
    description: 'Capture every detail of your calls with our integrated meeting recorder.',
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: 'Stay Organized',
    description: 'All your summaries, chats, and transcripts are neatly organized and searchable.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get Started in Minutes
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            A simple, intuitive workflow to supercharge your productivity.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-10 hidden h-full w-px -translate-x-1/2 bg-border md:block"></div>
          <div className="grid gap-8 md:grid-cols-1">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center gap-4 md:flex-row md:gap-8"
              >
                <div
                  className={`flex w-full items-center gap-4 md:w-1/2 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <Card className="flex w-full flex-col p-6 text-left transition-shadow hover:shadow-md">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {step.description}
                    </p>
                  </Card>
                </div>

                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {step.icon}
                  <div className="absolute hidden h-px w-8 bg-border md:block"
                    style={index % 2 === 0 ? { left: '100%' } : { right: '100%' }}
                  ></div>
                </div>

                <div className="hidden w-1/2 md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
