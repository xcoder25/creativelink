import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:text-left md:gap-16">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              A creative design portfolio focused on innovation, connection, and inspiration.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:ml-auto">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-headline text-lg font-semibold">Connect</h3>
              <p className="mt-2 text-sm text-muted-foreground">hello@creativelink.com</p>
              <div className="mt-2 flex items-center gap-1">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="Facebook">
                    <Facebook />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="Instagram">
                    <Instagram />
                  </Link>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="WhatsApp">
                    <WhatsAppIcon />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Creativelink. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
