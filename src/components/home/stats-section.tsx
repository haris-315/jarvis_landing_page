"use client";

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Clock, Star, Users, Zap } from 'lucide-react';

const stats = [
  {
    icon: <Zap className="h-8 w-8 text-primary animate-pulse" />,
    value: '1,000+',
    label: 'Emails Processed per Week',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary animate-spin-slow" />,
    value: '5h',
    label: 'Saved per User Weekly',
  },
  {
    icon: <Star className="h-8 w-8 text-primary animate-pulse" />,
    value: '98%',
    label: 'AI Accuracy Rate',
  },
  {
    icon: <Users className="h-8 w-8 text-primary animate-bounce" />,
    value: '4.8/5',
    label: 'User Satisfaction',
  },
];

export function StatsSection() {
  return (
    <section
      id="stats"
      className="w-full py-16 md:py-28 lg:py-32 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Trusted by Professionals Worldwide
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl leading-relaxed">
            Our numbers don’t just sit still — they keep moving, just like the teams
            who rely on us every day.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Card
              key={stat.label}
              className="text-center transform transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              {/* Animated background shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer" />

              <CardHeader className="flex flex-col items-center space-y-4 relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary animate-float">
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-4xl font-extrabold text-primary animate-text-glow">
                  {stat.value}
                </p>
                <p className="mt-2 text-muted-foreground text-lg">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
