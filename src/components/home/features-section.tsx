import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Mic, GanttChart, Globe } from 'lucide-react';

const features = [
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: 'Real-time Voice Chats',
    description:
      'Engage in natural, real-time voice conversations with your AI assistant for hands-free control.',
  },
  {
    icon: <GanttChart className="h-8 w-8 text-primary" />,
    title: 'Advanced Project Management',
    description:
      'Let your AI manage tasks, track progress, and organize projects with powerful, integrated tools.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Real-time Web Information',
    description:
      'Access up-to-the-minute information from the web to inform your decisions and power your tasks.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-card">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              A Quantum Leap in Productivity
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Our AI Assistant is equipped with cutting-edge features to redefine your workflow and amplify your effectiveness.
            </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} className="flex flex-col transition-all hover:scale-105 hover:shadow-lg dark:hover:shadow-primary/20 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader className="flex flex-col items-center text-center p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col items-center text-center p-6 pt-0">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
