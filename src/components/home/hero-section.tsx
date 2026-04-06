import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const heroPhones = [
  { id: 'phone-two', src: '/two.png', alt: 'Jarvis AI feature two' },
  { id: 'phone-three', src: '/three.png', alt: 'Jarvis AI feature three' },
  { id: 'phone-one', src: '/one.png', alt: 'Jarvis AI feature one' },
];

const phoneConfigs = [
  { ...heroPhones[0], w: 240, h: 480, rotate: 'rotateY(18deg) rotateZ(-5deg)', opacity: 0.85, marginRight: '-60px', animClass: 'animate-float-slow', delay: '0ms', zIndex: 10 },
  { ...heroPhones[2], w: 280, h: 560, rotate: 'rotateY(0deg)', opacity: 1, marginRight: '-60px', animClass: 'animate-float', delay: '250ms', zIndex: 20 },
  { ...heroPhones[1], w: 240, h: 480, rotate: 'rotateY(-18deg) rotateZ(5deg)', opacity: 0.85, marginRight: '0', animClass: 'animate-float-slower', delay: '500ms', zIndex: 10 },
];

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-20 pb-20 flex items-center"
      style={{ background: 'hsl(230, 25%, 5%)' }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, #6d28d9 50%, transparent 70%)' }}
        />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(129,140,248,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(129,140,248,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container relative z-10 grid grid-cols-1 items-center gap-20 px-4 md:px-6 text-center lg:grid-cols-2 lg:text-left">
        {/* Left: Copy */}
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm backdrop-blur-sm"
            style={{ borderColor: 'rgba(129,140,248,0.3)', background: 'rgba(129,140,248,0.1)', color: '#a5b4fc' }}
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
            </span>
            New Features Available
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your Personal AI,{' '}
            <span className="inline-block" style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #e879f9 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Reimagined
            </span>{' '}
            with Jarvis
          </h1>

          <p className="mx-auto max-w-xl text-lg lg:mx-0" style={{ color: 'rgba(255,255,255,0.55)' }}>
            From project management and real-time web access to voice chats, take full control of your tasks.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild className="group relative overflow-hidden border-0 text-white font-semibold transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
            >
              <Link href="#features">
                Explore Features <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button size="lg" asChild variant="outline" className="group transition-all duration-300"
              style={{ borderColor: 'rgba(129,140,248,0.3)', background: 'rgba(129,140,248,0.05)', color: '#a5b4fc' }}
            >
              <Link href="/#contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5 opacity-70 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        
        {/* Right: Images directly */}
        <div 
          className="flex items-center justify-center lg:justify-end overflow-visible lg:pr-4" 
          style={{ perspective: '1100px' }}
        >
          {phoneConfigs.map((phone) => (
            <div
              key={phone.id}
              className={`flex-shrink-0 ${phone.animClass}`}
              style={{
                width: phone.w,
                height: phone.h,
                marginRight: phone.marginRight,
                animationDelay: phone.delay,
                transform: phone.rotate,
                opacity: phone.opacity,
                zIndex: phone.zIndex,
                transition: 'transform 0.6s ease',
                position: 'relative',
              }}
            >
              <Image
                src={phone.src}
                alt={phone.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 180px, 290px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, hsl(230,25%,5%), transparent)' }}
      />
    </section>
  );
}