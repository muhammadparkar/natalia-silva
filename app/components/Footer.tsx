'use client';

import { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { contactDetails } from '../data/content';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-charcoal text-white pt-20 pb-12 overflow-hidden font-sans">
      {/* Subtle styling element */}
      <div className="absolute top-0 right-0 h-[250px] w-[250px] rounded-full bg-slate-blue/10 liquid-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          
          {/* Col 1: Branding (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <a 
              href="#hero"
              onClick={(e) => handleScrollTo(e, '#hero')}
              className="font-serif text-xl font-semibold tracking-[0.25em] text-white hover:opacity-80 transition-opacity"
            >
              NATALIA SILVA
            </a>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm tracking-wide">
              Luxury Brand Storytelling, Image & Voice Coaching. Curating executive presence and communicative elegance for global business leaders.
            </p>
            
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={contactDetails.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full border border-white/10 text-white flex items-center justify-center transition-all bg-white/5 hover:bg-white/20 hover:scale-105"
                aria-label="Instagram Profile"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full border border-white/10 text-white flex items-center justify-center transition-all bg-white/5 hover:bg-white/20 hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full border border-white/10 text-white flex items-center justify-center transition-all bg-white/5 hover:bg-white/20 hover:scale-105"
                aria-label="WhatsApp Channel"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-blue">Navigation</span>
            <div className="flex flex-col gap-2.5 text-xs text-white/75">
              <a 
                href="#about" 
                onClick={(e) => handleScrollTo(e, '#about')}
                className="hover:text-white transition-colors"
              >
                About Natalia
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleScrollTo(e, '#services')}
                className="hover:text-white transition-colors"
              >
                Signature Services
              </a>
              <a 
                href="#workshops" 
                onClick={(e) => handleScrollTo(e, '#workshops')}
                className="hover:text-white transition-colors"
              >
                Editorial Workshops
              </a>
              <a 
                href="#highlights" 
                onClick={(e) => handleScrollTo(e, '#highlights')}
                className="hover:text-white transition-colors"
              >
                Reels & Feed Highlights
              </a>
              <a 
                href="#booking" 
                onClick={(e) => handleScrollTo(e, '#booking')}
                className="hover:text-white transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Col 3: Newsletter signup (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-blue">Newsletter</span>
            <p className="text-xs text-white/70 leading-relaxed max-w-xs mb-1">
              Subscribe to receive Natalia's quarterly dispatch on luxury codes, verbal composure, and aesthetic presence.
            </p>

            <form onSubmit={handleSubscribe} className="relative flex w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correspondence Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/40 focus:bg-white/10 focus:border-white/30 focus:outline-none transition-all pr-12"
              />
              <button
                type="submit"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg bg-white text-charcoal flex items-center justify-center hover:bg-slate-blue hover:text-white transition-colors"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <span className="text-[10px] font-semibold text-sky-blue">
                ✓ Subscription accepted. Welcome to the dispatch list.
              </span>
            )}
          </div>

        </div>

        {/* Bottom Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] tracking-wider text-white/50 uppercase font-semibold gap-4">
          <span>© {new Date().getFullYear()} NATALIA SILVA. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
