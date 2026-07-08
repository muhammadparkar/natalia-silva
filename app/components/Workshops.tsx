'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, GraduationCap } from 'lucide-react';
import { workshopsData } from '../data/content';

export default function Workshops() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: (isLeft: boolean) => ({
      opacity: 0,
      x: isLeft ? -50 : 50,
      y: 20
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="workshops" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-sky-blue/20 liquid-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <GraduationCap className="h-4 w-4 text-slate-blue" />
            <span className="text-xs uppercase tracking-[0.25em] text-slate-blue font-semibold">Timeline</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-charcoal"
          >
            Editorial <span className="italic font-normal text-slate-blue">Workshops</span>
          </motion.h2>
          <div className="h-[1px] w-24 bg-slate-200 mx-auto mt-6" />
        </div>

        {/* Timeline Layout */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical connecting line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 -translate-x-1/2" />

          {/* Timeline Entries */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-16 md:gap-24"
          >
            {workshopsData.map((workshop, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={workshop.id}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start`}
                >
                  {/* Circle timeline node */}
                  <div className="absolute left-4 md:left-1/2 top-2 h-4.5 w-4.5 rounded-full border-2 border-slate-blue bg-white -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-blue" />
                  </div>

                  {/* Left Side Content (If Even, shows content on left, else spacer) */}
                  <motion.div
                    custom={true}
                    variants={cardVariants}
                    className={`pl-12 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}
                  >
                    {/* Date badge */}
                    <div className={`flex items-center gap-2 mb-3 text-xs font-semibold text-slate-blue tracking-wide justify-start ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{workshop.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-serif text-charcoal mb-1">
                      {workshop.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-blue/80 block mb-4">
                      {workshop.subtitle}
                    </span>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-charcoal/80 leading-relaxed font-sans mb-4">
                      {workshop.description}
                    </p>

                    {/* Location */}
                    <div className={`flex items-center gap-1.5 text-xs text-charcoal/90 font-medium justify-start ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <MapPin className="h-3.5 w-3.5 text-slate-blue" />
                      <span>{workshop.location}</span>
                    </div>
                  </motion.div>

                  {/* Right Side Content (Image Box for even/odd placement) */}
                  <motion.div
                    custom={false}
                    variants={cardVariants}
                    className={`pl-12 md:pl-0 ${isEven ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12'}`}
                  >
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200/40 shadow-md">
                      <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-sky-blue/10 mix-blend-color pointer-events-none" />
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
