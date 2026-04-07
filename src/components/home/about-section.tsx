import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', imageId: 'team-member-1' },
  { name: 'Jane Smith', role: 'Lead Engineer', imageId: 'team-member-2' },
  { name: 'Samuel Green', role: 'AI Specialist', imageId: 'team-member-3' },
  { name: 'Lisa Ray', role: 'Product Designer', imageId: 'team-member-4' },
];

const techStack = ['ChatGPT', 'Assembly AI', 'Agentic AI', 'Generative AI', 'Langchain', 'Langgraph', "Google's TTS", "Outlook"];

const timeline = [
  { year: '2023', event: 'Launch of AI Assistant v1 with email summarization.' },
  { year: '2024', event: 'Introduced AI Chat and enhanced Outlook integration.' },
  { year: '2025', event: 'Launched V2 with meeting assistance and transcription services.' },
];

export function AboutSection() {
  const missionImage = PlaceHolderImages.find(img => img.id === 'mission-image');
  return (
    <div className="container mx-auto px-4 py-16 md:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <header className="text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wider uppercase">
          Our Story
        </div>
        <h2 className="text-4xl font-black tracking-tighter sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          About Jarvis
        </h2>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
          Empowering businesses with AI for smarter workflows. We're building the future of productivity.
        </p>
      </header>

      <section className="mt-24 grid grid-cols-1 items-center gap-16 md:grid-cols-2 relative z-10">
        <div className="relative">
          <div className="absolute -top-12 -left-4 text-primary/10 font-black text-9xl select-none">WHY</div>
          <h3 className="text-4xl font-bold tracking-tight relative z-10">Our Mission</h3>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed relative z-10">
            Our mission is to build the most intuitive and powerful productivity suite that helps professionals reclaim their time and focus on what matters most.
            <br /><br />
            We believe in the power of AI to augment human intelligence, not replace it, creating a seamless partnership between technology and user.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <div className="h-1 w-4 bg-primary/30 rounded-full" />
            <div className="h-1 w-2 bg-primary/10 rounded-full" />
          </div>
        </div>
        {missionImage && (
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
            <div className="relative h-[400px] w-full overflow-hidden rounded-[2rem] border border-primary/10 shadow-2xl">
              <Image
                src={missionImage.imageUrl}
                alt={missionImage.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={missionImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        )}
      </section>

      <section className="mt-32 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Meet the Team
          </h3>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            The brilliant minds behind Jarvis, dedicated to revolutionizing your workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === member.imageId
            );
            return (
              <div key={member.name} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 to-primary/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                <Card className="relative h-full overflow-hidden border-primary/10 bg-card/50 backdrop-blur-xl transition-all duration-300 ease-out group-hover:-translate-y-1.5 max-w-[280px] mx-auto">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="relative">
                      <div className="h-24 w-24 rounded-2xl overflow-hidden border-2 border-primary/20 p-1 transition-all duration-300 ease-out group-hover:scale-105">
                        <Avatar className="h-full w-full rounded-xl">
                          {image && (
                            <AvatarImage
                              src={image.imageUrl}
                              alt={member.name}
                              className="object-cover"
                            />
                          )}
                          <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                            {member.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="absolute -bottom-2 -right-2 h-7 w-7 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-lg transform transition-all duration-300 ease-out group-hover:scale-110">
                        <Star className="h-3.5 w-3.5 fill-current" />
                      </div>
                    </div>

                    <h4 className="mt-6 text-lg font-bold transition-colors duration-300 group-hover:text-primary">
                      {member.name}
                    </h4>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
                      {member.role}
                    </p>

                    <div className="mt-5 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                      <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
                        <span className="text-[10px] font-bold text-inherit">in</span>
                      </div>
                      <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
                        <span className="text-[10px] font-bold text-inherit">tw</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-40 grid gap-20 lg:grid-cols-2 relative z-10">
        {/* Our Journey */}
        <div className="relative">
          <div className="absolute -top-12 left-0 text-primary/10 font-black text-8xl select-none">STORY</div>
          <h3 className="text-4xl font-bold tracking-tight mb-12 relative z-10">Our Journey</h3>
          <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-transparent">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-12 group">
                <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-background bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)] transition-transform duration-300 group-hover:scale-125"></div>
                <div className="p-6 rounded-2xl border border-primary/10 bg-card/30 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/50">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                    {item.year}
                  </span>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our TechStack */}
        <div className="relative">
          <div className="absolute -top-12 right-0 text-primary/10 font-black text-8xl select-none text-right">STACK</div>
          <h3 className="text-4xl font-bold tracking-tight mb-12 relative z-10">Our TechStack</h3>
          <div className="grid grid-cols-2 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/50 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 -mr-4 -mt-4 h-16 w-16 bg-primary/5 rounded-full blur-2xl transition-colors group-hover:bg-primary/10" />
                <div className="relative flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-bold tracking-tight group-hover:text-primary transition-colors">
                    {tech}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
