'use client';

import { ArrowRight, BrainCircuit, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks, type NavLink } from '@/lib/links';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      setIsSheetOpen(false);
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (pathname === '/') {
        targetElement?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    } else {
      setIsSheetOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="font-bold">Jarvis</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  (pathname === link.href || (pathname === '/' && link.href.startsWith('/#'))) ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b px-6 py-4">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
                    <BrainCircuit className="h-6 w-6 text-primary" />
                    <span className="font-bold">Jarvis</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="mt-8 flex flex-col gap-2 px-4">
                  {navLinks.map((link: NavLink) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={cn(
                        'rounded-md px-4 py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-primary',
                        (pathname === link.href || (pathname === '/' && link.href.startsWith('/#'))) ? 'bg-accent text-primary' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto border-t p-4">
                  <Button asChild className="w-full group">
                    <Link href="/ai-demo">
                      Try The AI
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden md:flex items-center gap-2">
            <Button asChild className="group">
              <Link href="/ai-demo">
                Try The AI
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
