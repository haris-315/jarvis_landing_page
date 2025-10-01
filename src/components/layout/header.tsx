'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
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
  const [isScrolled, setIsScrolled] = React.useState(false);

  // track scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Adjusted threshold for better transparency detection
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ensure the initial state is set correctly
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-300',
        isScrolled
          ? 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="container flex h-16 items-center px-4">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 mt-[5px] mb-[8px] bg-white rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/icon.png"
                alt="Jarvis Icon"
                width={140}
                height={140}
                className="object-cover"
              />
            </div>



          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                (pathname === link.href || (pathname === '/' && link.href.startsWith('/#')))
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1 flex justify-end items-center gap-2">
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
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="w-12 h-12 mt-[5px] mb-[8px] bg-white rounded-full overflow-hidden flex items-center justify-center">
                      <Image
                        src="/icon.png"
                        alt="Jarvis Icon"
                        width={140}
                        height={140}
                        className="object-cover"
                      />
                    </div>



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
                        (pathname === link.href || (pathname === '/' && link.href.startsWith('/#')))
                          ? 'bg-accent text-primary'
                          : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}
