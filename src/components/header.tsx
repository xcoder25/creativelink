'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Logo from './logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} passHref>
        <span
          className={cn(
            'block w-full text-left md:text-center md:w-auto md:inline-block relative font-medium text-muted-foreground transition-colors hover:text-foreground md:text-base py-2 md:py-0 text-base',
            isActive && 'text-foreground',
            'md:after:absolute md:after:bottom-[-4px] md:after:left-0 md:after:h-[2px] md:after:w-full md:after:bg-primary md:after:scale-x-0 md:after:transition-transform md:after:duration-300 md:after:ease-in-out md:after:origin-center',
            isActive && 'md:after:scale-x-100'
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Logo />

        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile dropdown menu */}
      <div 
        className={cn(
          "absolute left-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? 'max-h-96 border-t' : 'max-h-0 border-t-0'
        )}
      >
        <nav className="flex flex-col px-4">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
      </div>
    </header>
  );
}
