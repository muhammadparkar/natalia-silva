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
        {/* Brand Name */}
        <a 
          href="#hero" 
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="font-serif text-lg md:text-xl font-semibold tracking-[0.2em] text-charcoal hover:opacity-80 transition-opacity"
        >
          NATALIA SILVA
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
