import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Lock, Database } from 'lucide-react';

const securityFeatures = [
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: 'Local-First Storage',
    description: 'Your sensitive data is stored locally on your device using secure Hive storage, not on our servers.',
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: 'End-to-End Encryption',
    description: 'All communication and synchronization with your Outlook account are fully encrypted.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: 'Privacy-Focused AI',
    description: 'We do not use your data to train our AI models without your explicit consent. You are in control.',
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Enterprise-Grade Security & Privacy
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              We take your data security seriously. Our platform is built with
              privacy at its core, ensuring your information remains confidential
              and protected.
            </p>
            <Button asChild variant="outline">
              <Link href="/privacy">Read Our Privacy Policy</Link>
            </Button>
          </div>
          <div className="space-y-8">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
