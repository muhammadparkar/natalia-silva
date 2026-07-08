'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Reels & Feed', href: '#highlights' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl rounded-full transition-all duration-500 ${
        scrolled 
          ? 'glass-nav py-3 px-6 shadow-sm border border-slate-200/40' 
          : 'bg-transparent py-5 px-6 border border-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Brand Name & Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="flex items-center gap-2.5 font-serif text-sm md:text-base lg:text-lg font-semibold tracking-[0.2em] text-charcoal hover:opacity-80 transition-opacity"
        >
          <svg viewBox="0 0 100 100" className="h-7 w-7 shrink-0">
            <defs>
              <linearGradient id="logoGradNav" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0047AB" />
                <stop offset="50%" stopColor="#A1045A" />
                <stop offset="100%" stopColor="#E75480" />
              </linearGradient>
            </defs>
            <path d="M50 15 C55 25 65 35 50 60 C35 35 45 25 50 15 Z" fill="url(#logoGradNav)" />
            <path d="M50 25 C62 32 70 45 62 60 C50 55 50 35 50 25 Z" fill="url(#logoGradNav)" opacity="0.9" />
            <path d="M50 25 C38 32 30 45 38 60 C50 55 50 35 50 25 Z" fill="url(#logoGradNav)" opacity="0.9" />
            <path d="M50 35 C70 40 75 52 70 65 C55 60 50 45 50 35 Z" fill="url(#logoGradNav)" opacity="0.8" />
            <path d="M50 35 C30 40 25 52 30 65 C45 60 50 45 50 35 Z" fill="url(#logoGradNav)" opacity="0.8" />
          </svg>
          <span className="hidden sm:inline">NATALIYA SIEVERINA</span>
          <span className="sm:hidden">N. SIEVERINA</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs uppercase tracking-[0.15em] text-charcoal/80 hover:text-charcoal transition-colors duration-300 font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-charcoal hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#booking"
            onClick={(e) => handleScrollTo(e, '#booking')}
            className="group flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-slate-blue hover:shadow-lg"
          >
            <span>Book Consultation</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-full p-2 text-charcoal hover:bg-white/40 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-40 mt-2 flex flex-col gap-4 rounded-3xl border border-slate-200/50 bg-white/95 p-6 shadow-xl backdrop-blur-md animate-fade-in md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="border-b border-slate-100 py-2 text-sm font-medium uppercase tracking-widest text-charcoal hover:text-slate-blue"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => handleScrollTo(e, '#booking')}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-charcoal py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-slate-blue"
          >
            <span>Book Consultation</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </nav>
  );
}
