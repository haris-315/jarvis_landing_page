import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-mockup'));

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-background to-blue-900/20 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-b from-primary/30 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-80" />
      </div>

      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-4 text-center lg:grid-cols-2 lg:text-left">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            New Features Available
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Your Personal AI, Reimagined with{' '}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Jarvis</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl md:text-2xl lg:mx-0">
            From project management and real-time web access to voice chats, take full control of your tasks.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 justify-center lg:justify-start">
            {/* <Button size="lg" asChild className="group bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              <Link href="/ai-demo">
                Try The AI <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button> */}
            <Button size="lg" asChild variant="outline" className="group border-primary/20 hover:bg-primary/10 transition-all duration-300">
              <Link href="#features">
                Explore Features <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center">
          {heroImages.map((image, index) => {
            const transforms = [
              'lg:translate-x-[-75%] lg:translate-y-[5%] lg:rotate-[-15deg] sm:translate-x-[-25%] sm:translate-y-[5%] sm:rotate-[-8deg]', // left phone
              'lg:translate-x-[0%] lg:translate-y-[0%] sm:translate-x-[25%] sm:translate-y-[0%]', // center phone
              'lg:translate-x-[75%] lg:translate-y-[5%] lg:rotate-[15deg] sm:translate-x-[75%] sm:translate-y-[5%] sm:rotate-[8deg]', // right phone
            ];
            const zIndexes = ['z-10', 'z-30', 'z-10'];
            const opacities = ['opacity-60', 'opacity-100', 'opacity-60'];
            const animations = [
              'animate-float-slow',
              'animate-float',
              'animate-float-slower',
            ];

            return (
              <div
                key={image.id}
                className={`absolute w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] ${zIndexes[index]} ${opacities[index]} ${animations[index]} transition-all duration-700 ease-out transform ${transforms[index]}`}
                style={{
                  animationDelay: `${index * 250}ms`
                }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    priority={index < 2}
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
