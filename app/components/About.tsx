'use client';

import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { aboutData } from '../data/content';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Dynamic Background Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-sky-blue/20 liquid-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Sparkles className="h-4 w-4 text-slate-blue" />
            <span className="text-xs uppercase tracking-[0.25em] text-slate-blue font-semibold">The Visionary</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-charcoal"
          >
            Meet <span className="italic font-normal text-slate-blue">Natalia Silva</span>
          </motion.h2>
          <div className="h-[1px] w-24 bg-slate-200 mx-auto mt-6" />
        </div>

        {/* Alternating Content Rows */}
        <div className="flex flex-col gap-24 md:gap-32">
          {aboutData.map((section, idx) => (
            <div
              key={section.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
            >
              {/* Image Column */}
              <div 
                className={`lg:col-span-5 relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 ${
                  section.alignLeft ? 'lg:order-1' : 'lg:order-2 lg:col-start-8'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8 }}
                  className="h-full w-full"
                >
                  <img
                    src={section.imageUrl}
                    alt={section.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-sky-blue/5 pointer-events-none mix-blend-color" />
                </motion.div>
              </div>

              {/* Text Column */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className={`lg:col-span-6 flex flex-col justify-center ${
                  section.alignLeft 
                    ? 'lg:order-2 lg:col-start-7' 
                    : 'lg:order-1 lg:col-start-1'
                }`}
              >
                {/* Section Counter */}
                <motion.span 
                  variants={itemVariants}
                  className="text-xs font-serif italic text-slate-blue mb-2 font-medium"
                >
                  Chapter {idx + 1}
                </motion.span>
                
                {/* Title */}
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-serif text-charcoal mb-6 leading-snug"
                >
                  {section.title}
                </motion.h3>
                
                {/* Description */}
                <motion.p 
                  variants={itemVariants}
                  className="text-charcoal/80 leading-relaxed tracking-wide font-sans mb-8 text-sm md:text-base"
                >
                  {section.description}
                </motion.p>
                
                {/* Bullet Points */}
                <motion.ul 
                  variants={containerVariants}
                  className="grid grid-cols-1 gap-3.5"
                >
                  {section.bullets.map((bullet, bIdx) => (
                    <motion.li
                      variants={itemVariants}
                      key={bIdx}
                      className="flex items-start gap-3 text-xs md:text-sm text-charcoal/90"
                    >
                      <CheckCircle2 className="h-4 w-4 text-slate-blue shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
