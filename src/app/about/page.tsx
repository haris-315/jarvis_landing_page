import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', imageId: 'team-member-1' },
  { name: 'Jane Smith', role: 'Lead Engineer', imageId: 'team-member-2' },
  { name: 'Samuel Green', role: 'AI Specialist', imageId: 'team-member-3' },
  { name: 'Lisa Ray', role: 'Product Designer', imageId: 'team-member-4' },
];

const techStack = ['OpenAI', 'Assembly AI', 'Flutter', 'Next.js', 'Firebase', 'Tailwind CSS'];

const timeline = [
  { year: '2023', event: 'Launch of AI Assistant v1 with email summarization.' },
  { year: '2024', event: 'Introduced AI Chat and enhanced Outlook integration.' },
  { year: '2025', event: 'Launched V2 with meeting assistance and transcription services.' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:py-20">
      <Breadcrumbs />
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          About AI Assistant
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Empowering businesses with AI for smarter workflows.
        </p>
      </header>

      <section className="mt-16">
        <h2 className="text-center text-3xl font-bold tracking-tight">Our Mission</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
          Our mission is to build the most intuitive and powerful productivity suite that helps professionals reclaim their time and focus on what matters most. We believe in the power of AI to augment human intelligence, not replace it, creating a seamless partnership between technology and user.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-center text-3xl font-bold tracking-tight">Meet the Team</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => {
            const image = PlaceHolderImages.find(img => img.id === member.imageId);
            return (
              <Card key={member.name} className="text-center">
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="h-24 w-24">
                    {image && <AvatarImage src={image.imageUrl} alt={member.name} data-ai-hint={image.imageHint} />}
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight mb-8">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-10 pb-8">
                <div className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 transform rounded-full bg-primary"></div>
                <p className="font-semibold">{item.year}</p>
                <p className="text-muted-foreground">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight mb-8">Our Technology</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div key={tech} className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
