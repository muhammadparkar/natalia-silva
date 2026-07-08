export interface HeroData {
  headline: string;
  subheading: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  portraitUrl: string;
  instagramUrl: string;
}

export interface AboutItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  imageUrl: string;
  alignLeft: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
  price: string;
  category: 'storytelling' | 'image' | 'voice' | 'branding';
}

export interface WorkshopTimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  image: string;
}

export interface SocialHighlightItem {
  id: string;
  type: 'post' | 'reel' | 'video';
  category: 'luxury' | 'fashion' | 'executive' | 'image' | 'workshops' | 'speaking';
  imageUrl: string;
  videoUrl?: string; // Simulation
  title: string;
  likes: number;
  comments: number;
  views?: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  avatarUrl: string;
}

export interface StatisticItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const heroData: HeroData = {
  headline: "Speak with Confidence.\nBuild a Luxury Presence.",
  subheading: "Luxury Brand Storytelling, Image & Voice Coaching for professionals, executives, entrepreneurs, and aspiring leaders.",
  primaryCtaText: "Book an Appointment",
  secondaryCtaText: "View Instagram",
  portraitUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
  instagramUrl: "https://instagram.com"
};

export const aboutData: AboutItem[] = [
  {
    id: "storytelling-coach",
    title: "Luxury Brand Storyteller & Communication Advisor",
    description: "Natalia Silva helps high-caliber professionals and brands unlock the power of premium messaging. By weaving the codes of luxury—heritage, elegance, exclusivity, and subtlety—into your personal narrative, you transform how the world perceives your leadership.",
    bullets: [
      "Mastery of luxury communication codes (verbal & non-verbal)",
      "Narrative design for high-ticket brand launches",
      "Executive alignment with corporate identity structures",
      "Sophisticated articulation for multi-million dollar deals"
    ],
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    alignLeft: true
  },
  {
    id: "image-voice-expert",
    title: "Refining Your Aesthetic Signature & Vocal Command",
    description: "Your voice is an instrument; your image is your gallery. Natalia's coaching marries visual aesthetics with physiological vocal control to project authority, poise, and warmth simultaneously.",
    bullets: [
      "Vocal resonance and tonality shaping for boardrooms",
      "Aura, posture, and presence styling for high-profile speaking",
      "Wardrobe curations aligned with professional goals",
      "Media interview preparation and crisis composure coaching"
    ],
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    alignLeft: false
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "luxury-storytelling",
    title: "Luxury Brand Storytelling",
    description: "Align your brand narrative with the standards of Hermès and Chanel. Craft an editorial voice that engages high-net-worth audiences.",
    details: [
      "Luxury narrative positioning matrix",
      "Editorial tone-of-voice guide",
      "3-hour high-level brand strategy audit",
      "Copywriting templates for prestige products"
    ],
    duration: "4 Weeks",
    price: "Custom Quote",
    category: "storytelling"
  },
  {
    id: "image-coaching",
    title: "Executive Image Coaching",
    description: "Curate a styling and presence signature that projects effortless authority and cultural sensitivity.",
    details: [
      "Personal color, silhouette & archetype analysis",
      "Luxury dress codes and editorial capsule styling",
      "Executive posture, walking & body language coaching",
      "Private styling suite & premium brand directory"
    ],
    duration: "6 Weeks",
    price: "$3,500",
    category: "image"
  },
  {
    id: "voice-coaching",
    title: "Voice & Vocal Resonance Coaching",
    description: "Develop a deep, calm, and commanding speaking voice. Eliminate vocal fatigue and master intentional pauses.",
    details: [
      "Vocal range, pitch, and projection optimization",
      "Breathing mastery and nervous system pacing",
      "Articulating complex ideas with clarity & rhythm",
      "Speech delivery and presentation coaching"
    ],
    duration: "4 Weeks",
    price: "$2,800",
    category: "voice"
  },
  {
    id: "executive-presence",
    title: "Executive Presence Mastery",
    description: "The ultimate dual coaching package. Blends Storytelling, Voice, and Visual Image for complete professional transformation.",
    details: [
      "Full communication & aura diagnosis",
      "Custom voice training & style blueprint",
      "Public speaking simulator and video playback analysis",
      "Ongoing elite messaging advisory & WhatsApp support"
    ],
    duration: "3 Months",
    price: "$7,500",
    category: "branding"
  },
  {
    id: "public-speaking",
    title: "Keynotes & Public Speaking Advisor",
    description: "Prepare for mainstage keynotes, TED-style presentations, or panel discussions with absolute confidence.",
    details: [
      "Speech scripting, editing, and structure design",
      "Vocal choreography (inflections, timing)",
      "Stage movement and spatial awareness coaching",
      "Virtual event presentation techniques"
    ],
    duration: "Single Project",
    price: "$1,800",
    category: "voice"
  },
  {
    id: "luxury-communication",
    title: "Luxury Retail Communication Training",
    description: "Train boutique ambassadors, client advisors, and hospitality managers on prestige communication etiquette.",
    details: [
      "The language of luxury & client interaction scripts",
      "Conflict diplomacy & handling premium objections",
      "Sensory storytelling and physical sales floor poise",
      "On-site mystery shopper assessment"
    ],
    duration: "2-Day Workshop",
    price: "On Request",
    category: "storytelling"
  }
];

export const workshopsData: WorkshopTimelineItem[] = [
  {
    id: "edu-presence",
    date: "Sep 2026",
    title: "Educational Workshop: Modern Executive Presence",
    subtitle: "For Tech & Finance Leaders",
    description: "A masterclass designed to shift leaders from technical experts to strategic influencers. Focuses on minimal styling, vocal projection, and structuring high-stakes pitches.",
    location: "Virtual & On-site",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cult-codes",
    date: "Nov 2026",
    title: "Cultural Workshop: Deciphering Luxury Codes",
    subtitle: "For Brand Strategy Executives",
    description: "An intensive editorial exploration into the history of high fashion, watchmaking, and hospitality. Understand the symbolic values and etiquette of global prestige.",
    location: "Geneva, Switzerland",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "retail-edu",
    date: "Jan 2027",
    title: "Luxury Retail Education: High-End Clienteling",
    subtitle: "For Flagship Boutique Staff",
    description: "A practical training program covering body posture, sensory description, and vocal pacing to create an unforgettable retail experience in luxury boutiques.",
    location: "Milan, Italy",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600"
  }
];

export const videosData = [
  {
    id: "vid-1",
    title: "The Art of Slow Speaking: Sounding Authoritative",
    category: "Voice Training",
    thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600",
    duration: "4:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "vid-2",
    title: "Editorial Dressing: Codes of Quiet Luxury",
    category: "Image Strategy",
    thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600",
    duration: "6:42",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "vid-3",
    title: "How to Open a Keynote Presentation",
    category: "Storytelling",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600",
    duration: "5:08",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Genevieve Moreau",
    role: "VP of Product Strategy",
    company: "Prestige Beauty Corp",
    rating: 5,
    quote: "Natalia's coaching completely redefined my voice in board meetings. She taught me that true power is quiet and paced. The investment returned immediate career dividends.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t-2",
    name: "Marcus Vance",
    role: "Founder & Creative Director",
    company: "Vance Atelier",
    rating: 5,
    quote: "As a designer, I struggled to articulate my story to investors. Natalia extracted the DNA of my brand and shaped a luxury narrative that secured our Series A. Phenomenal strategist.",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t-3",
    name: "Dr. Elena Rostov",
    role: "Chief Surgical Resident & Keynote Speaker",
    company: "Metro Medical Center",
    rating: 5,
    quote: "The combination of vocal presence and aesthetic refinement gave me the confidence to host international symposiums. Her feedback is sharp, editorial, and life-changing.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  }
];

export const statisticsData: StatisticItem[] = [
  { id: "stat-1", value: 850, suffix: "+", label: "Executives Coached" },
  { id: "stat-2", value: 120, suffix: "+", label: "Workshops Conducted" },
  { id: "stat-3", value: 15, suffix: "", label: "Years of Luxury Advisory" },
  { id: "stat-4", value: 34, suffix: "", label: "Countries Reached" },
  { id: "stat-5", value: 65, suffix: "+", label: "Speaking Keynotes" }
];

export const socialFeedData: SocialHighlightItem[] = [
  {
    id: "social-1",
    type: "reel",
    category: "luxury",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-woman-posing-with-a-blue-dress-40348-large.mp4",
    title: "Speaking the Language of Luxury: The Three Vocal Pillars.",
    likes: 4210,
    comments: 184,
    views: 89300
  },
  {
    id: "social-2",
    type: "post",
    category: "fashion",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600",
    title: "An editorial lookbook for the high-impact board presentation. Minimalist styling, sky-blue accessories.",
    likes: 1250,
    comments: 64
  },
  {
    id: "social-3",
    type: "video",
    category: "executive",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-business-woman-explaining-a-strategy-40916-large.mp4",
    title: "Executive Presence Mock Session: Posture and Pitch Alignment.",
    likes: 3105,
    comments: 92,
    views: 45200
  },
  {
    id: "social-4",
    type: "post",
    category: "workshops",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    title: "Reflecting on our Masterclass in Milan. Cultivating trust through vocal warmth.",
    likes: 980,
    comments: 42
  },
  {
    id: "social-5",
    type: "reel",
    category: "image",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-beautiful-businesswoman-40918-large.mp4",
    title: "How your styling affects credibility within 7 seconds of entering a room.",
    likes: 5410,
    comments: 290,
    views: 124000
  },
  {
    id: "social-6",
    type: "post",
    category: "speaking",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600",
    title: "Behind the scenes at the European Business Summit. Finding quiet authority before taking the stage.",
    likes: 1832,
    comments: 78
  }
];

export const bookingAvailableTimes = [
  "09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"
];

export const contactDetails = {
  email: "Natalia@advideragroup.com",
  phone: "+44 20 7946 0912",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  whatsapp: "https://wa.me/442079460912"
};
