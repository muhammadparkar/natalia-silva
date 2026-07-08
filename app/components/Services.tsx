'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Speech, Sparkle, Award, MessageSquare, Presentation } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/content';

export default function Services() {
  const getIcon = (category: ServiceItem['category']) => {
    switch (category) {
      case 'storytelling':
        return <Speech className="h-5 w-5 text-slate-blue" />;
      case 'image':
        return <Sparkle className="h-5 w-5 text-slate-blue" />;
      case 'voice':
        return <Presentation className="h-5 w-5 text-slate-blue" />;
      case 'branding':
        return <Award className="h-5 w-5 text-slate-blue" />;
      default:
        return <ShieldCheck className="h-5 w-5 text-slate-blue" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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

  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#booking');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-ice-blue/30 overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-powder-blue/30 liquid-glow" />
      <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-sky-blue/20 liquid-glow" />

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
            <Sparkles className="h-4 w-4 text-slate-blue" />
            <span className="text-xs uppercase tracking-[0.25em] text-slate-blue font-semibold">Offerings</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-charcoal"
          >
            Signature <span className="italic font-normal text-slate-blue">Coaching Programs</span>
          </motion.h2>
          <div className="h-[1px] w-24 bg-slate-200 mx-auto mt-6" />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="glass-card hover:bg-white flex flex-col justify-between p-8 rounded-[2rem] border border-slate-200/50 hover:border-slate-300 hover:shadow-xl group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Row: Icon and Category Tag */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="h-10 w-10 rounded-2xl bg-sky-blue flex items-center justify-center border border-white">
                    {getIcon(service.category)}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-slate-blue font-semibold uppercase tracking-widest bg-white/60 px-2.5 py-1 rounded-full border border-slate-200/30">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-serif text-charcoal mb-4 group-hover:text-slate-blue transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs md:text-sm text-charcoal/80 leading-relaxed font-sans mb-8">
                  {service.description}
                </p>

                {/* Detailed bullet points */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-charcoal/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-blue shrink-0 mt-1.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Row: Price and Link */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-slate-blue font-medium">Investment</span>
                  <span className="text-sm font-semibold text-charcoal font-sans">{service.price}</span>
                </div>
                <a
                  href="#booking"
                  onClick={handleScrollToBooking}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-charcoal group-hover:text-slate-blue transition-colors"
                >
                  <span>Select</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
