'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, X, Clock, Video } from 'lucide-react';
import { videosData } from '../data/content';

export default function FeaturedVideos() {
  const [activeVideo, setActiveVideo] = useState<typeof videosData[0] | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-ice-blue/30 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-powder-blue/20 liquid-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Video className="h-4 w-4 text-slate-blue" />
            <span className="text-xs uppercase tracking-[0.25em] text-slate-blue font-semibold">Video Guides</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-charcoal"
          >
            Featured <span className="italic font-normal text-slate-blue">Insights & Masterclasses</span>
          </motion.h2>
          <div className="h-[1px] w-24 bg-slate-200 mx-auto mt-6" />
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videosData.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveVideo(video)}
              className="glass-card hover:bg-white rounded-[2.5rem] p-5 border border-slate-200/50 hover:border-slate-300 hover:shadow-xl group transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full glass-card border border-white/60 flex items-center justify-center text-charcoal shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-4 w-4 fill-charcoal translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm border border-white/10 text-[10px] text-white px-2 py-0.5 rounded-md font-semibold flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{video.duration}</span>
                </div>
              </div>

              {/* Text Container */}
              <div>
                <span className="text-[9px] uppercase tracking-widest font-semibold text-slate-blue block mb-2">
                  {video.category}
                </span>
                <h3 className="text-lg font-serif text-charcoal leading-snug group-hover:text-slate-blue transition-colors">
                  {video.title}
                </h3>
              </div>

              {/* Bottom detail action */}
              <div className="mt-6 pt-4 border-t border-slate-100/60 flex items-center text-xs font-semibold uppercase tracking-widest text-slate-blue">
                <span>Play Masterclass</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close video player"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Embedded Player */}
              <div className="relative aspect-video w-full">
                <iframe
                  src={activeVideo.videoUrl}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>

              {/* Video Title bar */}
              <div className="bg-charcoal px-6 py-4 flex flex-col gap-1 font-sans text-xs md:text-sm text-white">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-powder-blue">
                  {activeVideo.category}
                </span>
                <span className="font-serif text-lg font-medium text-white">
                  {activeVideo.title}
                </span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
