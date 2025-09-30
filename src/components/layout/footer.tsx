import Link from 'next/link';
import { BrainCircuit, Linkedin, Twitter } from 'lucide-react';
import { navLinks } from '@/lib/links';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <BrainCircuit className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">AI Assistant</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Empowering businesses with AI for smarter workflows.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-semibold text-white">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                  {navLinks.filter(l => ['/', '/#about', '/#contact', '/ai-demo'].includes(l.href)).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white">Legal</h3>
                <ul className="mt-4 space-y-2">
                   <li>
                    <Link href="/privacy" className="text-sm text-gray-300 hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm text-gray-300 hover:text-white">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white">Follow Us</h3>
                <div className="mt-4 flex space-x-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="Twitter">
                      <Twitter className="h-5 w-5 text-gray-300 hover:text-white" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
