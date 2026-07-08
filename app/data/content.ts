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
  headline: "Unlock Your Potential.\nCultivate Your Charisma.",
  subheading: "Personality Development & Presence Coaching for professionals, executives, entrepreneurs, and aspiring leaders.",
  primaryCtaText: "Book an Appointment",
  secondaryCtaText: "View Instagram",
  portraitUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
  instagramUrl: "https://instagram.com"
};

export const aboutData: AboutItem[] = [
  {
    id: "charisma-coach",
    title: "Empowering Your Brand & Personal Presence",
    description: "Nataliya Sieverina helps high-potential individuals master verbal authority, social styling, and emotional alignment. By combining strategic self-image design with impactful voice coaching, you build a charismatic signature that commands attention in any environment.",
    bullets: [
      "Mastery of high-impact body language and social poise",
      "Executive mindset development and mental composure",
      "Sophisticated presence curation for public speakers and CEOs",
      "Dynamic negotiation and relationship diplomacy"
    ],
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    alignLeft: true
  },
  {
    id: "insight-radiance",
    title: "Insightful Diagnostics & Radiant Transformation",
    description: "Personal growth is both psychological and aesthetic. Nataliya's signature programs combine styling blueprinting with speech orchestration, guiding you to project credibility, warmth, and absolute confidence.",
    bullets: [
      "Vocal acoustics, pitch adjustment, and speech composure",
      "Professional styling analysis, color codes, and wardrobe curations",
      "Handling public scrutiny and executive stress management",
      "Interactive roleplay simulations and video feedback analysis"
    ],
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    alignLeft: false
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "presence-coaching",
    title: "Executive Presence Curation",
    description: "Refine your posture, voice, and styling structure to command authority. Align your professional aura with your corporate status.",
    details: [
      "Personal style and posture alignment analysis",
      "Vocal projection and tonality diagnostics",
      "3-hour intensive video-feedback assessment",
      "Custom communication blueprints"
    ],
    duration: "4 Weeks",
    price: "$2,900",
    category: "storytelling"
  },
  {
    id: "personality-styling",
    title: "Charisma & Mindset Styling",
    description: "Develop a resilient, radiant self-image. Master conversational grace, emotional composure, and executive networking codes.",
    details: [
      "Emotional intelligence and mindset training",
      "Wardrobe color diagnostics & premium capsule styling",
      "Social diplomacy and confidence exercises",
      "Private coaching sessions with Nataliya"
    ],
    duration: "6 Weeks",
    price: "$3,800",
    category: "image"
  },
  {
    id: "voice-orchestration",
    title: "Voice & Vocal Resonance Coaching",
    description: "Shape a calm, reassuring, and persuasive voice. Eliminate verbal pauses and master professional speaking rhythms.",
    details: [
      "Breathing mechanics and vocal stamina",
      "Eliminating vocal fry and stutter triggers",
      "Pacing, inflection, and story-telling cadences",
      "Speech delivery and podcast hosting preparation"
    ],
    duration: "4 Weeks",
    price: "$2,500",
    category: "voice"
  },
  {
    id: "mastery-presence",
    title: "Elite Personality Mastery",
    description: "The ultimate program. A complete overhaul combining voice coaching, wardrobe curation, mental diagnostics, and strategic branding.",
    details: [
      "Full behavioral diagnostics & charisma signature",
      "Vocal coaching, styling curation & wardrobe shopping suite",
      "Mock boardroom presentations and public speaking simulations",
      "12 months ongoing elite messaging support & advice"
    ],
    duration: "3 Months",
    price: "$7,900",
    category: "branding"
  },
  {
    id: "speaking-masterclass",
    title: "Public Speaking & Keynote Advisory",
    description: "Prepare for high-stakes keynotes, panels, and media appearances with absolute confidence and elegance.",
    details: [
      "Speech scripting, structure, and editing support",
      "Vocal dynamics, pauses, and projection training",
      "Stage movement, gestures, and microphone mastery",
      "Handling Q&A sessions under pressure"
    ],
    duration: "Single Project",
    price: "$1,800",
    category: "voice"
  },
  {
    id: "corporate-diplomacy",
    title: "Corporate Diplomacy Training",
    description: "Train executive teams on client service codes, communication etiquette, and professional presence dynamics.",
    details: [
      "Prestige customer relationship scripts",
      "Conflict diplomacy and composure templates",
      "Team presence styling guidelines",
      "Internal leadership diagnostics"
    ],
    duration: "2-Day Workshop",
    price: "Custom Quote",
    category: "storytelling"
  }
];

export const workshopsData: WorkshopTimelineItem[] = [
  {
    id: "edu-presence",
    date: "Sep 2026",
    title: "Educational Workshop: Charisma in Action",
    subtitle: "For Tech & Creative Leaders",
    description: "A practical masterclass focusing on high-impact body language, active listening techniques, and managing mental blocks before public speaking.",
    location: "Virtual & On-site",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cult-codes",
    date: "Nov 2026",
    title: "Cultural Workshop: Curation & Aesthetic Codes",
    subtitle: "For Aspiring Directors",
    description: "An editorial exploration of global style archetypes, dress code etiquette, and developing a unique visual signature that communicates status.",
    location: "Geneva, Switzerland",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "retail-edu",
    date: "Jan 2027",
    title: "Executive Sessions: Public Speaking Mastery",
    subtitle: "For Keynote Presenters",
    description: "On-site intensive coaching covering vocal placement, stage presence, crowd interaction, and maintaining physical composure.",
    location: "Milan, Italy",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600"
  }
];

export const videosData = [
  {
    id: "vid-1",
    title: "Building Real Confidence: Beyond the Handshake",
    category: "Mindset Strategy",
    thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600",
    duration: "4:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "vid-2",
    title: "Visual Signature: Finding Your Style Archetype",
    category: "Styling Codes",
    thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600",
    duration: "6:42",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "vid-3",
    title: "Vocal Composition for High-Stakes Negotiations",
    category: "Speech Training",
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
    quote: "Nataliya's charisma diagnostics transformed how I coordinate global product launches. She helped me align my visual cues with my message of innovation.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t-2",
    name: "Marcus Vance",
    role: "Founder & Creative Director",
    company: "Vance Atelier",
    rating: 5,
    quote: "Securing capital requires presence. Nataliya helped me find a commanding vocal tone and visual stature. Our Series A pitch was a massive success.",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t-3",
    name: "Dr. Elena Rostov",
    role: "Chief Surgical Resident & Keynote Speaker",
    company: "Metro Medical Center",
    rating: 5,
    quote: "The combination of styling authority and speech composition gave me complete composure on the international stage. An exceptional coach.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  }
];

export const statisticsData: StatisticItem[] = [
  { id: "stat-1", value: 850, suffix: "+", label: "Professionals Coached" },
  { id: "stat-2", value: 120, suffix: "+", label: "Workshops Conducted" },
  { id: "stat-3", value: 15, suffix: "", label: "Years of Curation" },
  { id: "stat-4", value: 34, suffix: "", label: "Countries Reached" },
  { id: "stat-5", value: 65, suffix: "+", label: "Speaking Engagements" }
];

export const socialFeedData: SocialHighlightItem[] = [
  {
    id: "social-1",
    type: "reel",
    category: "luxury",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-woman-posing-with-a-blue-dress-40348-large.mp4",
    title: "Speaking with Quiet Authority: The Key Pillars of Self-Possession.",
    likes: 4210,
    comments: 184,
    views: 89300
  },
  {
    id: "social-2",
    type: "post",
    category: "fashion",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600",
    title: "Curating a visual signature: slate tones, teal accents, and editorial profiles.",
    likes: 1250,
    comments: 64
  },
  {
    id: "social-3",
    type: "video",
    category: "executive",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-business-woman-explaining-a-strategy-40916-large.mp4",
    title: "Diagnostic Simulation: Pacing, Body Gestures, and Vocal Alignment.",
    likes: 3105,
    comments: 92,
    views: 45200
  },
  {
    id: "social-4",
    type: "post",
    category: "workshops",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    title: "Behind the scenes at our Geneva Masterclass: Radiating trust through verbal grace.",
    likes: 980,
    comments: 42
  },
  {
    id: "social-5",
    type: "reel",
    category: "image",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-beautiful-businesswoman-40918-large.mp4",
    title: "Developing your visual signature: visual codes that signal composure.",
    likes: 5410,
    comments: 290,
    views: 124000
  },
  {
    id: "social-6",
    type: "post",
    category: "speaking",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600",
    title: "Speaking on the European Leadership Stage. Composure in front of thousands.",
    likes: 1832,
    comments: 78
  }
];

export const bookingAvailableTimes = [
  "09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"
];

export const contactDetails = {
  email: "Nataliya@advideragroup.com", // Updated email name
  phone: "+44 20 7946 0912",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  whatsapp: "https://wa.me/442079460912"
};
