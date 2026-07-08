'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroData } from '../data/content';

export default function Hero() {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#booking');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-ice-blue via-sky-blue/30 to-white pt-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative ambient glowing background circles */}
      <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-powder-blue/40 liquid-glow" />
      <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-sky-blue/30 liquid-glow" />

      {/* Main Grid Container */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center py-12 md:py-20">
        
        {/* Left Column: Headline, subtext, call to action */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          
          {/* Subtle Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-blue"
          >
            L'Éloquence et l'Image
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-light tracking-tight text-charcoal sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6"
          >
            Speak with <span className="italic font-normal text-slate-blue">Confidence.</span>
            <br />
            Build a <span className="italic font-normal">Luxury Presence.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto lg:mx-0 max-w-lg text-base md:text-lg leading-relaxed text-charcoal/80 font-sans tracking-wide mb-10"
          >
            {heroData.subheading}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#booking"
              onClick={handleScrollToBooking}
              className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-charcoal px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-all duration-300 hover:bg-slate-blue hover:shadow-lg hover:translate-y-[-1px]"
            >
              <span>{heroData.primaryCtaText}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={heroData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-slate-200 bg-white/40 backdrop-blur-sm px-8 py-4 text-xs font-semibold uppercase tracking-widest text-charcoal shadow-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md hover:border-slate-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-slate-blue group-hover:scale-110 transition-transform duration-300">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>{heroData.secondaryCtaText}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Premium Portrait Frame with float effect */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[380px] lg:max-w-none aspect-[3/4] flex justify-center items-center"
          >
            {/* Outer editorial silver framing */}
            <div className="absolute inset-2 border border-slate-200/50 rounded-[4rem] scale-105 pointer-events-none" />
            <div className="absolute inset-4 border border-slate-200/30 rounded-[3.8rem] scale-[1.09] pointer-events-none" />
            
            {/* Floating Portrait Container */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-[90%] h-[95%] overflow-hidden rounded-[3.5rem] shadow-2xl border border-white"
            >
              {/* Luxury Tint Layer */}
              <div className="absolute inset-0 bg-sky-blue/10 mix-blend-color z-10" />
              
              <img
                src={heroData.portraitUrl}
                alt="Natalia Silva"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Floating Silver Accent Details */}
              <div className="absolute bottom-6 left-6 z-20 glass-card px-4 py-2.5 rounded-2xl flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-blue">Founder</span>
                <span className="text-xs uppercase tracking-widest font-serif font-semibold text-charcoal">Natalia Silva</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Downward Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 opacity-70">
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-slate-blue">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-slate-300 flex justify-center p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-slate-blue" />
        </motion.div>
      </div>

    </section>
  );
}
