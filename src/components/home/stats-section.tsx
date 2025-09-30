import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Clock, Star, Users } from 'lucide-react';

const stats = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    value: '1,000+',
    label: 'Emails Processed per Week',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    value: '5 Hours',
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
    <section id="stats" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Trusted by Professionals Worldwide
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Our numbers speak for themselves. Join the growing community of productive teams.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardHeader className="flex flex-col items-center">
                {stat.icon}
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
