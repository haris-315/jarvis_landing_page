import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/links';
import { Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-17 h-17 mt-[5px] mb-[8px] bg-white rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/icon.png"
                  alt="Jarvis Icon"
                  width={140}
                  height={140}
                  className="object-cover"
                />
              </div>



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
