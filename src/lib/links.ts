export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/ai-demo', label: 'AI Demo' },
  { href: '/#about', label: 'About Us' },
  { href: '/#contact', label: 'Contact Us' },
  // { href: '/privacy', label: 'Privacy Policy' },
  // { href: '/terms', 'label': 'Terms & Conditions' },
];
