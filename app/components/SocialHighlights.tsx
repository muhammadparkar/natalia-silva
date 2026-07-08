'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, MessageCircle, Play, Pause, X, ExternalLink } from 'lucide-react';
import { socialFeedData, SocialHighlightItem } from '../data/content';

export default function SocialHighlights() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  
  // Interactive stats simulation
  const [likesState, setLikesState] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    socialFeedData.forEach(item => {
      initial[item.id] = item.likes;
    });
    return initial;
  });
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});

  // Active Reel Modal Simulation
  const [activeReel, setActiveReel] = useState<SocialHighlightItem | null>(null);
  const [modalPlaying, setModalPlaying] = useState(false);

  // Categories list matching requested categories
  const categories = [
    { label: 'All highlights', value: 'all' },
    { label: 'Luxury', value: 'luxury' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Executive Presence', value: 'executive' },
    { label: 'Image Coaching', value: 'image' },
    { label: 'Workshops', value: 'workshops' },
    { label: 'Public Speaking', value: 'speaking' },
  ];

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasLiked[id]) {
      setLikesState(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setHasLiked(prev => ({ ...prev, [id]: false }));
    } else {
      setLikesState(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setHasLiked(prev => ({ ...prev, [id]: true }));
    }
  };

  const filteredFeed = activeCategory === 'all'
    ? socialFeedData
    : socialFeedData.filter(item => item.category === activeCategory);

  const featuredReel = socialFeedData.find(item => item.id === 'social-1') || socialFeedData[0];

  return (
    <section id="highlights" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background element */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-sky-blue/20 liquid-glow" />

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
            <Sparkles className="h-4 w-4 text-slate-blue" />
            <span className="text-xs uppercase tracking-[0.25em] text-slate-blue font-semibold">Visual Presence</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-charcoal"
          >
            Social Media <span className="italic font-normal text-slate-blue">Highlights</span>
          </motion.h2>
          <div className="h-[1px] w-24 bg-slate-200 mx-auto mt-6" />
        </div>

        {/* Large Featured Reel at the Top */}
        <div className="mb-20">
          <div className="text-center lg:text-left mb-6">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-blue">Featured Reel</span>
            <h3 className="text-2xl font-serif text-charcoal mt-1">Vocal Command & Luxury Tone</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-sky-blue/30 border border-slate-200/40 rounded-[3rem] p-6 md:p-8">
            {/* Visual Box */}
            <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
              {featuredReel.videoUrl ? (
                <video
                  src={featuredReel.videoUrl}
                  poster={featuredReel.imageUrl}
                  controls
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={featuredReel.imageUrl}
                  alt={featuredReel.title}
                  className="h-full w-full object-cover"
                />
              )}
              {/* Luxury Tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content Box */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-5 p-4">
              <span className="text-[9px] uppercase tracking-widest font-bold text-slate-blue px-2.5 py-1 bg-white/70 border border-slate-200/40 rounded-full w-fit">
                {featuredReel.category.toUpperCase()}
              </span>
              
              <h4 className="text-xl md:text-2xl font-serif text-charcoal leading-snug">
                "{featuredReel.title}"
              </h4>
              
              <p className="text-xs md:text-sm text-charcoal/80 leading-relaxed font-sans">
                Watch Natalia explain the three keys to speaking with quiet authority. Master tone, cadence, and visual alignment to command any high-end professional environment.
              </p>

              {/* Engagement Stats */}
              <div className="flex items-center gap-6 mt-2">
                <button 
                  onClick={(e) => handleLike(featuredReel.id, e)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-charcoal/85 hover:text-red-500 transition-colors"
                >
                  <Heart className={`h-4.5 w-4.5 ${hasLiked[featuredReel.id] ? 'fill-red-500 text-red-500' : ''}`} />
                  <span>{likesState[featuredReel.id]?.toLocaleString()}</span>
                </button>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-charcoal/85">
                  <MessageCircle className="h-4.5 w-4.5 text-slate-blue" />
                  <span>{featuredReel.comments}</span>
                </div>
                {featuredReel.views && (
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-blue">
                    {featuredReel.views.toLocaleString()} Views
                  </div>
                )}
              </div>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 group flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-charcoal shadow-sm hover:shadow-md hover:bg-sky-blue/30 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-slate-blue">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Watch on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`text-[10px] md:text-xs font-semibold uppercase tracking-widest py-2.5 px-5 rounded-full border transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-white/50 border-slate-200/50 hover:bg-sky-blue/40 text-charcoal hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredFeed.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  if (item.videoUrl) {
                    setActiveReel(item);
                    setModalPlaying(true);
                  }
                }}
                className={`relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-md border border-slate-200/40 cursor-pointer group`}
                onMouseEnter={() => setHoveredCardId(item.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                {/* Media Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Ambient Blue Luxury Overlay */}
                <div className="absolute inset-0 bg-sky-blue/10 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Visual Icon (Play overlay for video/reel) */}
                {(item.type === 'reel' || item.type === 'video') && (
                  <div className="absolute top-4 right-4 z-20 h-8 w-8 rounded-full glass-card flex items-center justify-center text-charcoal shadow-md">
                    <Play className="h-3.5 w-3.5 fill-charcoal" />
                  </div>
                )}

                {/* Dark Hover Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] uppercase tracking-widest font-semibold text-powder-blue mb-2.5">
                    {item.type.toUpperCase()} / {item.category}
                  </span>
                  
                  <p className="text-xs text-white leading-relaxed font-sans font-medium mb-6">
                    {item.title}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={(e) => handleLike(item.id, e)}
                        className="flex items-center gap-1 text-[11px] font-semibold text-white/90 hover:text-red-400 transition-colors"
                      >
                        <Heart className={`h-4 w-4 ${hasLiked[item.id] ? 'fill-red-500 text-red-500' : ''}`} />
                        <span>{likesState[item.id]}</span>
                      </button>
                      
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-white/90">
                        <MessageCircle className="h-4 w-4" />
                        <span>{item.comments}</span>
                      </div>
                    </div>
                    
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-powder-blue flex items-center gap-1">
                      <span>View</span>
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global CTA button */}
        <div className="flex justify-center mt-16">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full bg-charcoal px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-md hover:bg-slate-blue hover:shadow-lg transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5 group-hover:scale-110 transition-transform">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>Visit Instagram Profile</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>

      {/* Video reel playback overlay modal */}
      <AnimatePresence>
        {activeReel && activeReel.videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm bg-black rounded-[2.5rem] overflow-hidden aspect-[9/16] shadow-2xl border border-white/10"
            >
              <video
                src={activeReel.videoUrl}
                autoPlay
                loop
                muted={!modalPlaying}
                className="h-full w-full object-cover"
              />

              {/* Top Controls Overlay */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                  {activeReel.category.toUpperCase()} REEL
                </span>
                <button
                  onClick={() => setActiveReel(null)}
                  className="h-8 w-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Bottom Information overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col gap-3">
                <p className="text-xs text-white/95 leading-relaxed font-sans font-medium">
                  {activeReel.title}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => handleLike(activeReel.id, e)}
                      className="flex items-center gap-1.5 text-xs text-white font-semibold hover:text-red-400"
                    >
                      <Heart className={`h-4.5 w-4.5 ${hasLiked[activeReel.id] ? 'fill-red-500 text-red-500' : ''}`} />
                      <span>{likesState[activeReel.id]}</span>
                    </button>
                    <div className="flex items-center gap-1.5 text-xs text-white font-semibold">
                      <MessageCircle className="h-4.5 w-4.5" />
                      <span>{activeReel.comments}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setModalPlaying(!modalPlaying)}
                    className="text-[10px] uppercase font-bold tracking-widest text-white/90 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 hover:bg-white/20 transition-all"
                  >
                    {modalPlaying ? 'Mute' : 'Unmute'}
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
