'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data/content';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonialsData[activeIndex];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-sky-blue/20 liquid-glow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-slate-blue" />
            <span className="text-xs uppercase tracking-[0.25em] text-slate-blue font-semibold">Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal">
            Client <span className="italic font-normal text-slate-blue">Endorsements</span>
          </h2>
          <div className="h-[1px] w-24 bg-slate-200 mx-auto mt-6" />
        </div>

        {/* Carousel Box */}
        <div className="relative rounded-[3rem] glass-card p-8 md:p-16 border border-slate-200/50 shadow-2xl flex flex-col items-center">
          
          {/* Quote Sign */}
          <div className="absolute top-6 left-8 text-slate-blue/10">
            <Quote className="h-20 w-20 fill-current rotate-180" />
          </div>

          <div className="min-h-[220px] flex flex-col items-center text-center">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="h-4.5 w-4.5 text-slate-blue fill-slate-blue" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-base md:text-xl font-serif text-charcoal leading-relaxed tracking-wide italic mb-8 max-w-2xl">
              "{current.quote}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center gap-4 text-left">
              <img
                src={current.avatarUrl}
                alt={current.name}
                className="h-12 w-12 rounded-full border border-slate-200 shadow-sm object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-charcoal">{current.name}</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-blue font-medium mt-0.5">
                  {current.role}, <span className="font-semibold">{current.company}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white hover:bg-sky-blue/40 border border-slate-200/40 text-charcoal hover:text-slate-blue transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-slate-blue' : 'w-1.5 bg-slate-200'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white hover:bg-sky-blue/40 border border-slate-200/40 text-charcoal hover:text-slate-blue transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
