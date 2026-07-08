'use client';

import { motion, Variants } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Speech, Sparkle, Award, Presentation } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/content';

export default function Services() {
  const getIcon = (category: ServiceItem['category']) => {
    switch (category) {
      case 'storytelling':
        return <Speech className="h-5 w-5 text-[#E75480]" />;
      case 'image':
        return <Sparkle className="h-5 w-5 text-[#E75480]" />;
      case 'voice':
        return <Presentation className="h-5 w-5 text-[#E75480]" />;
      case 'branding':
        return <Award className="h-5 w-5 text-[#E75480]" />;
      default:
        return <ShieldCheck className="h-5 w-5 text-[#E75480]" />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
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
    <section id="services" className="relative py-24 md:py-32 bg-[#0B1E36] text-white overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#A1045A]/10 liquid-glow" />
      <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-[#E75480]/10 liquid-glow" />

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
            <Sparkles className="h-4 w-4 text-[#E75480]" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/70 font-semibold font-sans">Offerings</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Signature <span className="italic font-normal text-[#E75480]">Coaching Programs</span>
          </motion.h2>
          <div className="h-px w-24 bg-white/20 mx-auto mt-6" />
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
              className="bg-white/5 backdrop-blur-md flex flex-col justify-between p-8 rounded-4xl border border-white/10 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Row: Icon and Category Tag */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="h-10 w-10 rounded-2xl bg-white/10 flex items-center justify-center border border-white/15">
                    {getIcon(service.category)}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-white font-semibold uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-[#E75480] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs md:text-sm text-white/80 leading-relaxed font-sans mb-8">
                  {service.description}
                </p>

                {/* Detailed bullet points */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-white/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E75480] shrink-0 mt-1.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Row: Price and Link */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 font-medium">Investment</span>
                  <span className="text-sm font-semibold text-[#E75480] font-sans">{service.price}</span>
                </div>
                <a
                  href="#booking"
                  onClick={handleScrollToBooking}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white group-hover:text-[#E75480] transition-colors"
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
