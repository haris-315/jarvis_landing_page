"use client";

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Clock, Star, Users, Zap } from 'lucide-react';

const stats = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    value: '1,000+',
    label: 'Emails Processed per Week',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    value: '5h',
    label: 'Saved per User Weekly',
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    value: '98%',
    label: 'AI Accuracy Rate',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: '4.8/5',
    label: 'User Satisfaction',
  },
];

export function StatsSection() {
  return (
    <section
      id="stats"
      className="w-full py-16 md:py-28 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-y-1/2" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Trusted by Professionals Worldwide
          </h2>
          <p className="mt-6 text-muted-foreground md:text-xl leading-relaxed">
            Our numbers don’t just sit still — they keep moving, just like the teams
            who rely on us every day.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

              <Card className="relative h-full text-center border-primary/10 bg-card/50 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

                <CardHeader className="flex flex-col items-center pt-10 pb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {stat.icon}
                  </div>
                </CardHeader>
                <CardContent className="pb-10">
                  <p className="text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-muted-foreground font-medium text-lg leading-tight px-4">
                    {stat.label}
                  </p>
                </CardContent>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
