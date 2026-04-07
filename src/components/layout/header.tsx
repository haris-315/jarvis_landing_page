'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { navLinks, type NavLink } from '@/lib/links';

// Twinkling star positions baked in (pure CSS animation via inline style)
const STARS = [
  { top: '25%', left: '12%',  delay: '0s',    duration: '2.5s' },
  { top: '65%', left: '22%',  delay: '0.9s',  duration: '3.1s' },
  { top: '30%', left: '82%',  delay: '0.4s',  duration: '2.0s' },
  { top: '72%', left: '90%',  delay: '1.3s',  duration: '3.4s' },
  { top: '18%', left: '53%',  delay: '0.7s',  duration: '2.8s' },
  { top: '80%', left: '42%',  delay: '1.6s',  duration: '2.2s' },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [logoHovered, setLogoHovered] = React.useState(false);
  const [activeHash, setActiveHash] = React.useState('');

  React.useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    handleHashChange();

    // Intersection Observer to track sections on scroll
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the top-ish part
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'about' || id === 'contact') {
            setActiveHash(`#${id}`);
            window.history.replaceState(null, '', `#${id}`);
          } else if (entry.target.tagName === 'SECTION' && !id) {
            // This is likely the Hero section or another top-level section
            if (window.scrollY < 400) {
              setActiveHash('');
              window.history.replaceState(null, '', window.location.pathname);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Track sections
    const sections = ['about', 'contact'].map(id => document.getElementById(id)).filter(Boolean);
    sections.forEach(section => observer.observe(section!));

    // Also track the first section (Hero) to reset to 'Home'
    const firstSection = document.querySelector('section');
    if (firstSection) observer.observe(firstSection);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
      observer.disconnect();
    };
  }, [pathname]); // Re-run/reset when pathname changes

  // Reset active hash when leaving home page
  React.useEffect(() => {
    if (pathname !== '/') {
      setActiveHash('');
    }
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      setIsMenuOpen(false);
      const targetId = href.substring(2);
      const el = document.getElementById(targetId);
      if (pathname === '/') {
        el?.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
        // Manually trigger hash update since pushState doesn't fire events
        setActiveHash(href.substring(1));
      } else {
        window.location.href = href;
      }
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* ═══════════════ MAIN HEADER ═══════════════ */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 68,
          backdropFilter: isScrolled ? 'blur(30px)' : 'blur(20px)',
          WebkitBackdropFilter: isScrolled ? 'blur(30px)' : 'blur(20px)',
          background: isScrolled
            ? 'rgba(10,10,22,0.88)'
            : 'rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 8px 32px rgba(79,70,229,0.15)',
          transition: 'backdrop-filter 0.4s ease, background 0.4s ease',
          overflow: 'hidden',
        }}
      >
        {/* Twinkling stars */}
        {STARS.map((s, i) => (
          <span
            key={i}
            aria-hidden
            style={{
              position: 'absolute',
              top: s.top,
              left: s.left,
              width: 2,
              height: 2,
              borderRadius: '50%',
              background: 'white',
              pointerEvents: 'none',
              animation: `twinkle ${s.duration} ${s.delay} ease-in-out infinite`,
            }}
          />
        ))}

        {/* ── Content row ── */}
        <div
          className="container mx-auto px-4 md:px-6"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* LEFT: Logo + brand name */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            {/* Logo ring — spins on hover */}
            <div
              style={{
                position: 'relative',
                width: 44,
                height: 44,
                borderRadius: '50%',
                padding: 2,
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
                boxShadow: logoHovered ? '0 0 15px rgba(129,140,248,0.3)' : 'none',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: 'white',
                }}
              >
                <Image
                  src="/icon.png"
                  alt="Jarvis Icon"
                  width={40}
                  height={40}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>

          </Link>

          {/* CENTER: Nav links (desktop only) */}
          <nav className="hidden md:flex items-center" style={{ gap: 36 }}>
            {navLinks.map((link: NavLink) => {
              const isHome = link.href === '/';
              const isHash = link.href.startsWith('/#');
              const linkHash = isHash ? link.href.substring(1) : '';

              const isActive = isHome 
                ? (pathname === '/' && !activeHash)
                : (activeHash === linkHash);

              return (
                <NavLinkItem
                  key={link.href}
                  link={link}
                  isActive={isActive}
                  onClick={handleLinkClick}
                />
              );
            })}
          </nav>

          {/* RIGHT: CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Install Now (desktop) */}
            <GetStartedButton 
              className="hidden md:inline-flex" 
              onClick={(e) => handleLinkClick(e, '/#contact')}
            />

            {/* Hamburger (mobile) */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'white',
                padding: 4,
                lineHeight: 0,
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════ MOBILE FULLSCREEN OVERLAY ═══════════════ */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          background: 'rgba(8,8,20,0.97)',
          opacity: isMenuOpen ? 1 : 0,
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-16px)',
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease, transform 0.35s ease',
        }}
      >
        {navLinks.map((link: NavLink) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 24,
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'color 0.2s ease',
            }}
          >
            {link.label}
          </Link>
        ))}

        <GetStartedButton
          style={{ marginTop: 8, padding: '14px 40px', fontSize: 16 }}
          onClick={(e) => handleLinkClick(e, '/#contact')}
        />
      </div>

      {/* Spacer so page content starts below fixed header */}
      <div style={{ height: 68 }} />
    </>
  );
}

/* ─── Sub-components ─────────────────────────────────────── */

function NavLinkItem({
  link,
  isActive,
  onClick,
}: {
  link: NavLink;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link
      href={link.href}
      onClick={(e) => onClick(e, link.href)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        paddingBottom: 6,
        color: isActive || hovered ? 'white' : 'rgba(255,255,255,0.6)',
        fontWeight: isActive || hovered ? 500 : 400,
        fontSize: 14,
        textDecoration: 'none',
        transition: 'color 0.3s cubic-bezier(0.4,0,0.2,1), font-weight 0.3s ease',
      }}
    >
      {link.label}

      {/* Glowing dot for active page */}
      {isActive && (
        <span
          style={{
            position: 'absolute',
            bottom: -2,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: '#818CF8',
            boxShadow: '0 0 8px #818CF8, 0 0 16px rgba(129,140,248,0.4)',
          }}
        />
      )}

      {/* Slide-in underline */}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          borderRadius: 1,
          background: 'linear-gradient(90deg, #4F46E5, #7C3AED)',
          transform: isActive || hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      />
    </Link>
  );
}

function GetStartedButton({
  className = '',
  style = {},
  onClick,
}: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link
      href="/#contact"
      className={`items-center justify-center ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
        color: 'white',
        borderRadius: 8,
        padding: '10px 22px',
        fontSize: 14,
        fontWeight: 600,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transform: hovered ? 'scale(1.04)' : 'scale(1)',
        boxShadow: hovered ? '0 0 24px rgba(124,58,237,0.55)' : 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        ...style,
      }}
    >
      Install Now
    </Link>
  );
}
