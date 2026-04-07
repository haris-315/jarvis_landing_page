import { navLinks } from '@/lib/links';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        borderColor: 'rgba(129,140,248,0.12)',
        background: 'linear-gradient(180deg, hsl(230,25%,5%) 0%, hsl(230,28%,4%) 100%)',
      }}
    >
      {/* Subtle glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.4), transparent)',
        }}
      />
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-[80px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div
                className="w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 shadow-lg"
                style={{ boxShadow: '0 0 20px rgba(129,140,248,0.3)' }}
              >
                <Image
                  src="/icon.png"
                  alt="Jarvis Icon"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Empowering businesses with AI for smarter workflows.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:border-indigo-400/40 hover:bg-indigo-400/10"
                  style={{
                    border: '1px solid rgba(129,140,248,0.2)',
                    background: 'rgba(129,140,248,0.05)',
                  }}
                >
                  <Icon className="h-4 w-4 text-white/40 group-hover:text-indigo-400 transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {/* Quick Links */}
              <div>
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: '#818cf8' }}
                >
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {navLinks
                    .filter((l) =>
                      ['/', '/#about', '/#features', '/#contact', '/ai-demo'].includes(l.href)
                    )
                    .map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm transition-colors duration-200 hover:text-white"
                          style={{ color: 'rgba(255,255,255,0.5)' }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: '#818cf8' }}
                >
                  Legal
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: '#818cf8' }}
                >
                  Contact
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      Get in Touch
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:support@jarvis.ai"
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      support@jarvis.ai
                    </a>
                  </li>
                </ul>
              </div>

              {/* Download — Official Store Badges */}
              <div className="col-span-2 sm:col-span-1">
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: '#818cf8' }}
                >
                  Download
                </h3>
                <div className="flex flex-col gap-3">

                  {/* Apple App Store — Official Badge */}
                  <a
                    href="YOUR_APP_STORE_LINK_HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:scale-[1.04] hover:opacity-90 inline-block"
                    aria-label="Download on the App Store"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="Download on the App Store"
                      width={140}
                      height={42}
                      style={{ display: 'block' }}
                    />
                  </a>

                  {/* Google Play — Official Badge */}
                  <a
                    href="YOUR_PLAY_STORE_LINK_HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:scale-[1.04] hover:opacity-90 inline-block"
                    aria-label="Get it on Google Play"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      width={158}
                      height={47}
                      style={{ display: 'block', marginLeft: '-9px' }}
                    />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: '1px solid rgba(129,140,248,0.1)',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          <p>&copy; {new Date().getFullYear()} Jarvis AI. All rights reserved.</p>
          <p>
            Built with{' '}
            <span style={{ color: '#818cf8' }}>♥</span>{' '}
            for smarter productivity
          </p>
        </div>
      </div>
    </footer>
  );
}