'use client';

import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, Sparkles } from 'lucide-react';
import { contactDetails } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000); // clear banner after 5s
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0B1E36] text-white overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-[#0047AB]/10 liquid-glow" />
      <div className="absolute top-10 right-10 h-[300px] w-[300px] rounded-full bg-[#A1045A]/10 liquid-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: General contact info */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-center lg:text-left">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-[#E75480] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] text-white/70 font-semibold font-sans">Correspondence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Cultivate Your <br />
                <span className="italic font-normal text-[#E75480]">Executive Signature</span>
              </h2>
              <div className="h-px w-24 bg-white/20 mt-6 hidden lg:block" />
            </div>

            <p className="text-xs md:text-sm text-white/80 leading-relaxed font-sans">
              For corporate engagements, guest lectures, retail consulting, or private advisory arrangements, reach out directly or submit the inquiry form.
            </p>

            {/* Direct Links */}
            <div className="flex flex-col gap-4 font-sans text-xs md:text-sm mt-2">
              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E75480] transition-colors w-full lg:w-fit"
              >
                <Mail className="h-5 w-5 text-[#E75480] shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-widest text-white/60 font-semibold">Email</span>
                  <span className="font-semibold text-white">{contactDetails.email}</span>
                </div>
              </a>

              <a
                href={`tel:${contactDetails.phone}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E75480] transition-colors w-full lg:w-fit"
              >
                <Phone className="h-5 w-5 text-[#E75480] shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-widest text-white/60 font-semibold">Direct Dial</span>
                  <span className="font-semibold text-white">{contactDetails.phone}</span>
                </div>
              </a>
            </div>

            {/* Social channels */}
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-white/70">Digital Channels</span>
              <div className="flex items-center gap-4">
                <a
                  href={contactDetails.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:border-[#E75480] text-white flex items-center justify-center transition-all hover:bg-white/10 hover:scale-105"
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
                  className="h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:border-[#E75480] text-white flex items-center justify-center transition-all hover:bg-white/10 hover:scale-105"
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
                  className="h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:border-[#E75480] text-white flex items-center justify-center transition-all hover:bg-white/10 hover:scale-105"
                  aria-label="WhatsApp Channel"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 p-8 shadow-2xl relative">
              <h3 className="text-xl font-serif text-white mb-6">Send an Inquiry</h3>

              {isSent && (
                <div className="mb-6 p-4 rounded-xl bg-[#0047AB]/30 border border-[#0047AB]/40 text-xs font-semibold text-white flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#E75480] animate-spin" />
                  <span>Message delivered successfully. We will reply within 24 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inquiry-name" className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Your Name *</label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Genevieve Moreau"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs md:text-sm text-white placeholder-white/30 focus:border-[#E75480] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inquiry-email" className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Your Email *</label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="genevieve@beautycorp.com"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs md:text-sm text-white placeholder-white/30 focus:border-[#E75480] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="inquiry-subject" className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Subject *</label>
                  <input
                    id="inquiry-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Charisma Diagnostics Audit"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs md:text-sm text-white placeholder-white/30 focus:border-[#E75480] focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="inquiry-message" className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Message *</label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your goals, timeline, and requested coaching program..."
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs md:text-sm text-white placeholder-white/30 focus:border-[#E75480] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#E75480] text-white hover:bg-[#A1045A] py-4 text-xs font-semibold uppercase tracking-widest shadow-md transition-all duration-300 disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <span>Send Correspondence</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
