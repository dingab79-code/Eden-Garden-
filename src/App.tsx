import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  MapPin, 
  Clock, 
  ChevronRight,
  ArrowRight,
  Utensils,
  TreePine,
  Calendar,
  Image as ImageIcon,
  Star,
  Plus,
  Users,
  Briefcase,
  Heart,
  Quote,
  ExternalLink,
  Navigation
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'about' | 'braailife' | 'edengarden' | 'bookings' | 'gallery' | 'contact' | 'tiktok';

// --- Sub-components ---

const TikTokPage: React.FC = () => (
    <div className="pt-40 pb-24 container mx-auto px-10 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
            <div className="lg:w-1/2">
                <SectionHeading 
                    label="Social Viral" 
                    title="The Farm, Unfiltered." 
                    subtitle="Catch the latest highlights, behind-the-scenes grill action, and garden vibes on our official TikTok channel."
                />
                <Button 
                    variant="braai" 
                    className="!py-6 !px-12" 
                    onClick={() => window.open('https://www.tiktok.com/@braailife.zw?_r=1&_t=ZS-96BkJ2Ggojq', '_blank')}
                    icon={ExternalLink}
                >
                    Follow @braailife.zw
                </Button>
            </div>
            <div className="lg:w-1/2 relative">
                <div className="aspect-[9/16] max-w-[350px] mx-auto rounded-[40px] overflow-hidden border-[12px] border-brand-editorial-dark shadow-2xl relative group">
                    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800" className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-[5s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2">Recent Viral</p>
                        <h4 className="text-2xl font-serif italic">Sunday Grills in the Valley</h4>
                    </div>
                </div>
                {/* Decorative floating elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-braai-primary rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-eden-primary rounded-full blur-3xl opacity-20"></div>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3,4].map(i => (
                <div key={i} className="aspect-[9/16] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group relative cursor-pointer" onClick={() => window.open('https://www.tiktok.com/@braailife.zw')}>
                    <img src={`https://images.unsplash.com/photo-${1550000000000 + i * 2222222}?auto=format&fit=crop&w=600&q=80`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                    <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <MessageCircle size={20} />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const StickyMobileCTA = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="lg:hidden fixed bottom-0 left-0 w-full z-[120] bg-white border-t border-brand-editorial-border p-3 grid grid-cols-3 gap-2 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
    <a 
      href="https://wa.me/263771234567" 
      target="_blank" 
      rel="noreferrer"
      className="flex flex-col items-center justify-center gap-1 py-1 rounded-xl bg-[#25D366]/10 text-[#25D366] transition-active"
    >
      <MessageCircle size={18} />
      <span className="text-[9px] font-bold uppercase tracking-widest">WhatsApp</span>
    </a>
    <a 
      href="tel:+263771234567" 
      className="flex flex-col items-center justify-center gap-1 py-1 rounded-xl bg-brand-braai-primary/10 text-brand-braai-primary transition-active"
    >
      <Phone size={18} />
      <span className="text-[9px] font-bold uppercase tracking-widest">Call Now</span>
    </a>
    <button 
      onClick={() => setPage('bookings')}
      className="flex flex-col items-center justify-center gap-1 py-1 rounded-xl bg-brand-editorial-dark text-white shadow-lg transition-active"
    >
      <Calendar size={18} />
      <span className="text-[9px] font-bold uppercase tracking-widest">Book Now</span>
    </button>
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  icon: Icon
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'eden' | 'braai' | 'outline' | 'ghost' | 'white'; 
  className?: string; 
  onClick?: () => void;
  icon?: any;
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-[11px] sm:text-[13px] uppercase tracking-widest cursor-pointer group whitespace-nowrap active:scale-95";
  const variants = {
    primary: "bg-brand-editorial-dark text-white hover:opacity-90 shadow-sm hover:shadow-lg",
    secondary: "bg-white text-brand-editorial-dark border border-brand-editorial-border hover:bg-gray-50",
    eden: "bg-brand-eden-primary text-white hover:opacity-90 shadow-md",
    braai: "bg-brand-braai-primary text-white hover:opacity-90 shadow-md",
    outline: "border-2 border-current hover:bg-brand-editorial-dark hover:text-white",
    ghost: "text-gray-600 hover:text-brand-editorial-dark hover:bg-gray-100/50",
    white: "bg-white text-brand-editorial-dark hover:bg-brand-editorial-bg"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon size={16} className="transition-transform group-hover:translate-x-1" />}
    </button>
  );
};

const SectionHeading = ({ 
  label, 
  title, 
  subtitle, 
  centered = false,
  dark = false,
  brand = 'default'
}: { 
  label?: string; 
  title: string; 
  subtitle?: string; 
  centered?: boolean;
  dark?: boolean;
  brand?: 'default' | 'braai' | 'eden';
}) => {
  const labelColors = {
    default: 'opacity-60',
    braai: 'text-brand-braai-primary',
    eden: 'text-brand-eden-accent'
  };

  return (
    <div className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : ''} ${dark ? 'text-white' : 'text-brand-editorial-dark'}`}>
      {label && (
        <span className={`text-[10px] font-bold tracking-[0.25em] uppercase mb-5 block ${labelColors[brand]}`}>
          {label}
        </span>
      )}
      <h2 className="text-5xl md:text-6xl lg:text-8xl mb-8 font-serif leading-[0.85] tracking-tighter">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl opacity-80 leading-tight font-medium max-w-2xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// --- Sections ---

const PerfectForSection = () => (
  <section className="py-32 bg-white border-b border-brand-editorial-border">
    <div className="container mx-auto px-10">
      <SectionHeading 
        label="Targeted Experiences"
        centered
        title="Designed for Your Moment"
        subtitle="Whether it's a high-stakes business lunch or a quiet romantic retreat, our farm offers two worlds in one destination."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        {[
          { 
            icon: Briefcase, 
            title: "Corporate & Teams", 
            desc: "The 'Social Lunch' by Braai Life is built for business. Fast Wi-Fi, high-energy vibes, and plates designed for efficient networking.",
            action: "Book Corporate"
          },
          { 
            icon: Heart, 
            title: "Couples & Dates", 
            desc: "Eden Garden's private picnic nooks offer the intimacy and soft luxury you won't find anywhere else in Harare.",
            action: "Plan Date"
          },
          { 
            icon: Users, 
            title: "Family & Friends", 
            desc: "Festival-style seating, boards to share, and plenty of room for kids to wander safely in the Pleasant Valley sunshine.",
            action: "Reserve Large Table"
          }
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-[40px] border border-brand-editorial-border hover:bg-brand-editorial-bg transition-all group active:scale-[0.98]">
            <div className="w-16 h-16 rounded-3xl bg-brand-editorial-dark text-white flex items-center justify-center mb-10 group-hover:bg-brand-braai-primary transition-colors">
              <item.icon size={28} />
            </div>
            <h3 className="text-3xl font-serif mb-4">{item.title}</h3>
            <p className="text-gray-500 font-medium leading-tight mb-8">{item.desc}</p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-brand-editorial-dark border-b-2 border-brand-editorial-dark pb-1 hover:text-brand-braai-primary hover:border-brand-braai-primary transition-all">
              {item.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="py-24 bg-brand-editorial-bg border-b border-brand-editorial-border overflow-hidden">
    <div className="container mx-auto px-10">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/3">
          <SectionHeading 
            label="Verified Love"
            title="What the Community says"
            subtitle="Local reviews from Harare foodies, event planners, and weekend explorers."
          />
          <div className="flex gap-2 mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-brand-eden-accent" />)}
            <span className="text-xs font-bold uppercase tracking-widest ml-2 opacity-50">4.9/5 from 200+ Reviews</span>
          </div>
        </div>
        <div className="lg:w-2/3 flex gap-6 animate-scroll-x hover:[animation-play-state:paused] cursor-grab">
           {[
             { name: "Taps M.", text: "Braai Life is the absolute best lunch spot in Tynwald. The social board is unmatched.", tag: "Braai Life" },
             { name: "Sarah G.", text: "We booked the bespoke picnic for my baby shower. Eden Garden made it look effortless and luxury.", tag: "Eden Garden" },
             { name: "Farai Z.", text: "Finally, a place in Harare that understands service and atmosphere. Premium but feels like home.", tag: "PV Farm" },
             { name: "Taps M.", text: "Braai Life is the absolute best lunch spot in Tynwald. The social board is unmatched.", tag: "Braai Life" },
             { name: "Sarah G.", text: "We booked the bespoke picnic for my baby shower. Eden Garden made it look effortless and luxury.", tag: "Eden Garden" }
           ].map((r, i) => (
             <div key={i} className="min-w-[320px] md:min-w-[400px] p-10 bg-white border border-brand-editorial-border rounded-[40px] shadow-sm">
                <Quote className="text-brand-braai-primary mb-6 opacity-20" size={32} />
                <p className="text-lg font-medium leading-tight mb-8 italic">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest">{r.name}</span>
                  <span className="text-[9px] font-bold bg-brand-editorial-bg px-3 py-1 rounded-full uppercase opacity-50 tracking-widest">{r.tag}</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  </section>
);

const FeaturedGallerySection = () => (
  <section className="py-32 bg-white">
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[800px]">
        <div className="md:col-span-5 relative rounded-[40px] overflow-hidden shadow-2xl group min-h-[400px]">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000" className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-braai-primary px-3 py-1 mb-2 inline-block">The Atmosphere</span>
            <h4 className="text-4xl font-serif italic">Harare's Social Hub</h4>
          </div>
        </div>
        <div className="md:col-span-7 grid grid-rows-2 gap-6 h-full">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl group min-h-[200px]">
             <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-black/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full min-h-[200px]">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl group">
               <img src="https://images.unsplash.com/photo-1528605248644-14dd04cb21c7?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl group bg-brand-editorial-dark flex flex-col items-center justify-center text-white p-10 text-center">
              <Instagram size={40} className="mb-6 opacity-30" />
              <h5 className="text-2xl font-serif italic mb-4 font-light leading-tight">Join the conversation on Social</h5>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">Follow Us</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LocationSection = () => (
  <section className="py-32 bg-brand-editorial-dark text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 opacity-50"></div>
    <div className="container mx-auto px-10 relative z-10">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <SectionHeading 
            dark
            label="Visit the Farm"
            title="Your Table is in Pleasant Valley"
            subtitle="Located just 15 minutes from Harare CBD in Tynwald. A quiet escape that feels worlds away."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-brand-braai-primary flex items-center justify-center text-white"><Clock size={14} /></div>
                 <h5 className="text-xs font-bold uppercase tracking-widest text-white/50">Opening Hours</h5>
              </div>
              <p className="text-lg font-medium">Tue – Fri: 11am – 8pm</p>
              <p className="text-lg font-medium">Sat – Sun: 10am – 9pm</p>
              <p className="text-xs uppercase tracking-widest text-white/30 font-bold italic">Closed on Mondays</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-brand-eden-primary flex items-center justify-center text-white"><MapPin size={14} /></div>
                 <h5 className="text-xs font-bold uppercase tracking-widest text-white/50">Main Address</h5>
              </div>
              <p className="text-lg font-medium">Pleasant Valley Farm, Tynwald North, Harare, Zimbabwe</p>
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group">
                 <Navigation size={12} className="group-hover:translate-x-1 transition-transform" /> Get Directions
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="braai" icon={Phone} onClick={() => window.location.href = "tel:+263771234567"}>Call Concierge</Button>
            <Button variant="outline" className="border-white !bg-transparent text-white" icon={ExternalLink}>Open in Maps</Button>
          </div>
        </div>
        <div className="lg:w-1/2 rounded-[40px] overflow-hidden h-[400px] lg:h-[600px] opacity-80 border border-white/10 group grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 shadow-2xl">
           <img 
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" 
              alt="Map view placeholder" 
           />
        </div>
      </div>
    </div>
  </section>
);

// --- Pages ---

const HomePage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover grayscale-[0.2] brightness-[0.4]"
            referrerPolicy="no-referrer"
            alt="Pleasant Valley Farm"
          />
        </div>
        
        <div className="container mx-auto px-10 relative z-10 text-white flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] sm:text-[12px] font-bold tracking-[0.4em] uppercase mb-8 opacity-70"
          >
            Pleasant Valley Farm • Harare, Zimbabwe
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif italic font-light mb-12 leading-[0.85] tracking-tight"
          >
            Sisters in<br />Hospitality.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button variant="braai" onClick={() => setPage('braailife')} icon={ChevronRight}>
              Explore Braai Life
            </Button>
            <Button variant="eden" onClick={() => setPage('edengarden')} icon={ChevronRight}>
              Explore Eden Garden
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white">Scroll</span>
          <div className="w-px h-12 bg-white"></div>
        </div>
      </section>

      {/* Trust Message Section */}
      <section className="bg-brand-editorial-bg py-24 border-b border-brand-editorial-border">
          <div className="container mx-auto px-10 text-center">
              <Quote className="mx-auto text-brand-eden-primary mb-8 opacity-20" size={48} />
              <h2 className="text-3xl md:text-5xl font-serif italic max-w-4xl mx-auto leading-tight mb-8">
                "Our philosophy is simple: Premium hospitality shouldn't be reserved for hotels. We bring high-end flavor and curated nature to the farm."
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">The PV Farm Promise</p>
          </div>
      </section>

      {/* Dual Experience Split Branding */}
      <section className="flex flex-col lg:flex-row h-auto lg:h-screen border-b border-brand-editorial-border relative">
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full z-30 shadow-2xl items-center justify-center border-[12px] border-brand-editorial-bg">
          <span className="text-[10px] font-bold uppercase text-center leading-none tracking-tighter">ONE<br/>FARM</span>
        </div>

        <div className="lg:w-1/2 relative h-[600px] lg:h-full bg-brand-braai-primary p-12 lg:p-24 flex flex-col justify-end group overflow-hidden border-b lg:border-b-0 lg:border-r border-brand-editorial-border">
           <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40 grayscale-[0.5] group-hover:scale-105 transition-transform duration-[4s]" alt="Traditional Grill and Braai Platter" />
           <div className="relative z-10 text-white">
              <span className="inline-block px-3 py-1 bg-white text-brand-braai-primary text-[10px] font-bold uppercase tracking-widest mb-4">The Social Lunch</span>
              <h2 className="text-7xl sm:text-8xl md:text-9xl font-black italic tracking-tighter leading-[0.85] mb-8">BRAAI<br/>LIFE</h2>
              <p className="text-xl max-w-md font-medium leading-tight mb-10">High-energy dining, bold African-modern flavors, and the best social atmosphere in Harare.</p>
              <div className="flex gap-4 flex-wrap">
                  <Button variant="white" onClick={() => setPage('braailife')}>Explore Menu</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black" onClick={() => setPage('bookings')}>Book Table</Button>
              </div>
           </div>
        </div>

        <div className="lg:w-1/2 relative h-[600px] lg:h-full bg-brand-eden-primary p-12 lg:p-24 flex flex-col justify-end group overflow-hidden">
           <img src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40 grayscale-[0.2] group-hover:scale-105 transition-transform duration-[4s]" />
           <div className="relative z-10 text-white">
              <span className="inline-block px-3 py-1 bg-brand-eden-accent text-white text-[10px] font-bold uppercase tracking-widest mb-4">Curated Moments</span>
              <h2 className="text-7xl sm:text-8xl md:text-9xl font-serif italic tracking-tighter leading-[0.85] mb-8">EDEN<br/>GARDEN</h2>
              <p className="text-xl max-w-md font-light leading-tight mb-10 italic">Bespoke picnics, luxury grazing boards, and private nature celebrations for those who seek peace.</p>
              <div className="flex gap-4 flex-wrap">
                  <Button variant="secondary" className="!bg-brand-eden-accent !text-white border-none" onClick={() => setPage('edengarden')}>Bespoke Events</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black" onClick={() => setPage('bookings')}>Reserve Nook</Button>
              </div>
           </div>
        </div>
      </section>

      <PerfectForSection />
      <FeaturedGallerySection />
      <TestimonialSection />
      <LocationSection />

      {/* Scarcity CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-10 text-center relative z-10">
           <SectionHeading 
              centered
              label="Limited Engagement"
              title="First time? Book before we're at capacity."
              subtitle="Weekend spots for both Braai Life and Eden Garden fill fast. Don't judge by photos alone—experience the farm in person."
           />
           <div className="flex flex-wrap justify-center gap-6 mt-12">
              <Button variant="braai" className="!py-6 !px-12" onClick={() => setPage('bookings')}>Reserve Your Table</Button>
              <Button variant="primary" className="!py-6 !px-12" onClick={() => setPage('contact')}>Chat with Concierge</Button>
           </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif font-black opacity-[0.02] pointer-events-none select-none">
           EXPERIENCE
        </div>
      </section>
    </div>
  );
};

// --- Sub-pages ---

const AboutPage: React.FC = () => (
    <div className="pt-40 pb-24 container mx-auto px-10">
        <SectionHeading centered label="Our Story" title="Heritage & Hospitality" />
        <div className="max-w-5xl mx-auto space-y-20">
            <p className="text-2xl text-brand-editorial-dark leading-tight font-medium text-center italic font-serif max-w-4xl mx-auto">
                "Pleasant Valley Farm grew from a desire to bring people together. Under one umbrella, Braai Life offers high-energy dining, while Eden Garden provides peaceful retreat. We are Harare's destination for social excellence."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1544025162-d76694265947" className="w-full h-full object-cover grayscale-[0.2]" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl mt-12">
                  <img src="https://images.unsplash.com/photo-1501333190104-cd36e0989f64" className="w-full h-full object-cover grayscale-[0.1]" referrerPolicy="no-referrer" />
              </div>
            </div>
        </div>
    </div>
);

const BraaiLifePage: React.FC = () => (
    <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="container mx-auto px-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center mb-32 pt-12">
                <div className="lg:w-1/2 space-y-8">
                     <SectionHeading brand="braai" label="Braai Life" title="Flavor with Fire" subtitle="Experience bold, energetic, and value-driven dining. Our chef-led grill station delivers high-quality cuts with signature Harare spices." />
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {["Premium Meats", "Vibrant Atmosphere", "Rapid Service", "Group Boards"].map(f => (
                            <div key={f} className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest text-brand-braai-primary">
                                <Plus size={14} /> {f}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl relative">
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="Traditional Zimbabwean Braai - Grilled Meats and Sadza Plates" />
                    <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
                </div>
            </div>
            {/* Menu Snippet */}
            <div className="bg-brand-braai-primary text-white p-12 lg:p-20 rounded-[40px] shadow-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-white opacity-5 rounded-full"></div>
                <h4 className="text-4xl md:text-5xl font-serif italic mb-12 text-center leading-none">The social lunch board</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-medium opacity-90 max-w-4xl mx-auto">
                    <div className="flex justify-between border-b border-white/20 pb-4 italic"><span>The Tynwald Sadza & Grill Special</span> <b>$18</b></div>
                    <div className="flex justify-between border-b border-white/20 pb-4 italic"><span>Master Platter (Ribs, Wings, Pap)</span> <b>$25</b></div>
                    <div className="flex justify-between border-b border-white/20 pb-4 italic"><span>Quarter Chicken & Traditional Greens</span> <b>$12</b></div>
                    <div className="flex justify-between border-b border-white/20 pb-4 italic"><span>Signature Wings & Fries</span> <b>$15</b></div>
                </div>
                <div className="mt-16 flex justify-center">
                    <Button variant="secondary" className="!px-12 !py-6" onClick={() => window.open('https://wa.me/263771234567')}>ORDER VIA WHATSAPP</Button>
                </div>
            </div>
        </div>
    </div>
);

const EdenGardenPage: React.FC = () => (
    <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="container mx-auto px-10">
             <div className="flex flex-col lg:flex-row-reverse gap-20 items-center mb-32 pt-12">
                <div className="lg:w-1/2 space-y-8 text-right lg:text-left">
                     <SectionHeading brand="eden" label="Eden Garden" title="Curated Sanctuary" subtitle="Elegant and airy. Escape to a private picnic spot with curated grazing boards, boutique drinks, and tailored decor. Perfect for intimate escapes." />
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 justify-end lg:justify-start">
                        {["Private Nooks", "Bespoke Grazing", "Floral Design", "Sunset Views"].map(f => (
                            <div key={f} className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest text-brand-eden-primary">
                                <Plus size={14} /> {f}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl relative">
                    <img src="https://images.unsplash.com/photo-1528605248644-14dd04cb21c7" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
            </div>

            {/* Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="p-12 border border-brand-editorial-border rounded-[40px] bg-white group hover:bg-brand-editorial-bg transition-colors">
                    <span className="text-[10px] font-bold tracking-widest text-brand-eden-accent uppercase mb-2 block">The Experience</span>
                    <h4 className="text-4xl font-serif italic mb-2">Standard Picnic</h4>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8 font-bold">Starting from $35 PER PERSON</p>
                    <p className="text-gray-500 mb-10 leading-snug">Includes premium plush seating, organic grazing board, and full garden access for up to 3 hours.</p>
                    <Button variant="eden" className="w-full !py-6" onClick={() => window.location.hash = "#reservations"}>Reserve Your Spot</Button>
                </div>
                <div className="p-12 border border-brand-editorial-border rounded-[40px] bg-brand-eden-primary text-white">
                    <span className="text-[10px] font-bold tracking-widest text-brand-eden-accent uppercase mb-2 block">The Celebration</span>
                    <h4 className="text-4xl font-serif italic mb-2">Bespoke Events</h4>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-8 font-bold">Custom Quotation</p>
                    <p className="text-white/70 mb-10 leading-snug">Full catering, high-end floral decor, and private garden hosting for groups of 10 to 100.</p>
                    <Button variant="secondary" className="w-full !py-6 !bg-brand-eden-accent !text-white border-none">Request Full Info</Button>
                </div>
            </div>
        </div>
    </div>
);

const BookingsPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return (
            <div className="pt-40 pb-24 container mx-auto px-10 min-h-screen">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-3xl mx-auto text-center space-y-8 py-20 bg-white rounded-[40px] border border-brand-editorial-border shadow-2xl">
                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                        <Star size={40} />
                    </div>
                    <h3 className="text-4xl font-serif italic">Request Received!</h3>
                    <p className="text-gray-500 text-lg font-medium leading-tight max-w-sm mx-auto">Our concierge will contact you via WhatsApp shortly to finalize your booking details.</p>
                    <Button variant="secondary" onClick={() => window.open('https://wa.me/263771234567')}>Message Us Now</Button>
                    <button onClick={() => setSubmitted(false)} className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 block mx-auto">Make another booking</button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-40 pb-24 container mx-auto px-10 min-h-screen" id="reservations">
            <SectionHeading centered label="Reservations" title="Plan Your Visit" subtitle="Fill in the details below and our concierge will reach out to confirm your table at the farm." />
            
            <div className="max-w-4xl mx-auto bg-white p-8 sm:p-20 rounded-[40px] border border-brand-editorial-border shadow-2xl">
                <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    {/* Brand & Occasion */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest opacity-50 block">Choose Experience</label>
                            <select required className="w-full p-5 rounded-3xl bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-all text-sm appearance-none font-bold">
                                <option value="">Select a Brand</option>
                                <option value="braai">Braai Life (Social & Grills)</option>
                                <option value="eden">Eden Garden (Picnics & Luxury)</option>
                            </select>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest opacity-50 block">Occasion</label>
                            <select required className="w-full p-5 rounded-3xl bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-all text-sm appearance-none font-bold">
                                <option value="">Select Occasion</option>
                                <option value="lunch">Casual Lunch</option>
                                <option value="date">Romantic Date</option>
                                <option value="family">Family Gathering</option>
                                <option value="corporate">Corporate / Team</option>
                                <option value="birthday">Birthday Celebration</option>
                                <option value="special">Other Special Event</option>
                            </select>
                        </div>
                    </div>

                    {/* Personal Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest opacity-50 block">Full Name</label>
                            <input required type="text" placeholder="e.g. John Doe" className="w-full p-5 rounded-3xl bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-all text-sm font-medium" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest opacity-50 block">WhatsApp Number</label>
                            <input required type="tel" placeholder="e.g. +263 77..." className="w-full p-5 rounded-3xl bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-all text-sm font-medium" />
                        </div>
                    </div>

                    {/* Logistics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest opacity-50 block">Date of Visit</label>
                            <input required type="date" className="w-full p-5 rounded-3xl bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-all text-sm font-bold uppercase tracking-tighter" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest opacity-50 block">Number of Guests</label>
                            <input required type="number" min="1" placeholder="e.g. 4" className="w-full p-5 rounded-3xl bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-all text-sm font-bold" />
                        </div>
                    </div>

                    {/* Special Notes */}
                    <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest opacity-50 block">Special Requirements / Dietary Notes</label>
                        <textarea placeholder="Tell us more about your preferences, allergies, or decoration needs..." className="w-full p-8 rounded-[40px] bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-all text-sm h-40 font-medium"></textarea>
                    </div>

                    <div className="pt-6">
                        <Button variant="primary" className="w-full !py-8 !text-lg !rounded-[30px] shadow-2xl">
                            Submit Reservation Request
                        </Button>
                        <p className="text-center mt-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                            * We will contact you on WhatsApp to confirm availability within 30 minutes.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

const GalleryPage: React.FC = () => (
    <div className="pt-40 pb-24 container mx-auto px-10">
        <SectionHeading centered label="Visuals" title="The Farm Gallery" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
                    <img src={`https://images.unsplash.com/photo-${1510000000000 + i * 1111111}?auto=format&fit=crop&w=600&q=80`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] hover:grayscale-0" />
                </div>
            ))}
        </div>
    </div>
);

const ContactPage: React.FC = () => (
    <div className="pt-40 pb-24 container mx-auto px-10">
        <SectionHeading centered label="Connect" title="Get in Touch" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto border-y border-brand-editorial-border py-20 mb-20">
            <div className="space-y-4 group">
                <div className="w-16 h-16 rounded-3xl bg-brand-braai-primary/10 text-brand-braai-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                   <MapPin size={28} />
                </div>
                <h4 className="font-bold text-[11px] uppercase tracking-[0.2em]">Our Location</h4>
                <p className="text-xl font-medium font-serif italic text-gray-500">Pleasant Valley Farm, Tynwald</p>
            </div>
            <div className="space-y-4 group">
                <div className="w-16 h-16 rounded-3xl bg-brand-eden-primary/10 text-brand-eden-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                   <Phone size={28} />
                </div>
                <h4 className="font-bold text-[11px] uppercase tracking-[0.2em]">Phone & Bookings</h4>
                <p className="text-xl font-medium font-serif italic text-gray-500">+263 77 123 4567</p>
            </div>
            <div className="space-y-4 group">
                <div className="w-16 h-16 rounded-3xl bg-green-500/10 text-green-500 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                   <MessageCircle size={28} />
                </div>
                <h4 className="font-bold text-[11px] uppercase tracking-[0.2em]">WhatsApp Concierge</h4>
                <p className="text-xl font-medium font-serif italic text-gray-500">Available 24/7</p>
            </div>
        </div>
        <div className="max-w-3xl mx-auto text-center space-y-12">
            <h3 className="text-4xl font-serif italic leading-tight">"Have a unique vision? Our event planners are ready to build it with you."</h3>
            <Button variant="primary" className="!px-12 !py-6 mx-auto">Start Collaboration</Button>
        </div>
    </div>
);

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (p: Page) => {
    setPage(p);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen selection:bg-brand-braai-primary/20 bg-brand-editorial-bg transition-colors duration-500">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-[140] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-brand-editorial-border shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-10 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
             <div className="w-8 h-8 rounded-full bg-brand-editorial-dark flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">PVF</span>
             </div>
             <span className={`font-serif italic text-xl tracking-tight transition-colors ${isScrolled ? 'text-black' : (page === 'home' ? 'text-white' : 'text-black')}`}>Pleasant Valley Farm</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {[
              { id: 'about', label: 'Our Story' },
              { id: 'braailife', label: 'Braai Life' },
              { id: 'edengarden', label: 'Eden Garden' },
              { id: 'tiktok', label: 'TikTok' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'contact', label: 'Contact' }
            ].map(p => (
              <button 
                key={p.id} 
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:opacity-100 ${isScrolled ? 'text-brand-editorial-dark opacity-70' : (page === 'home' ? 'text-white opacity-60' : 'text-brand-editorial-dark opacity-70')}`}
                onClick={() => navigateTo(p.id as Page)}
              >
                {p.label}
              </button>
            ))}
            <Button 
               variant={isScrolled ? 'primary' : (page === 'home' ? 'white' : 'primary')} 
               className="!px-6 !py-2 !text-[10px]" 
               onClick={() => navigateTo('bookings')}
            >
               Book Now
            </Button>
          </div>

          <button className={`lg:hidden transition-colors ${isScrolled ? 'text-black' : (page === 'home' ? 'text-white' : 'text-black')}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[150] bg-white pt-32 p-10 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-10 text-right overflow-y-auto">
                {['Home', 'Our Story', 'Braai Life', 'Eden Garden', 'TikTok', 'Reservations', 'Gallery', 'Contact'].map((p, i) => {
                    const ids: Record<string, Page> = {
                        'Home': 'home', 'Our Story': 'about', 'Braai Life': 'braailife', 'Eden Garden': 'edengarden', 'TikTok': 'tiktok', 'Reservations': 'bookings', 'Gallery': 'gallery', 'Contact': 'contact'
                    };
                    return (
                        <button 
                          key={p} 
                          className="text-5xl font-serif italic tracking-tighter"
                          onClick={() => navigateTo(ids[p])}
                        >
                          {p}
                        </button>
                    );
                })}
            </div>
            <div className="flex flex-col gap-4">
                <Button variant="braai" className="w-full !py-6" onClick={() => window.open('https://wa.me/263771234567')}>WhatsApp Braai Life</Button>
                <Button variant="eden" className="w-full !py-6" onClick={() => window.open('https://wa.me/26371234567')}>WhatsApp Eden Garden</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <AnimatePresence mode="wait">
          {page === 'home' && <HomePage key="home" setPage={navigateTo} />}
          {page === 'about' && <AboutPage key="about" />}
          {page === 'braailife' && <BraaiLifePage key="braai" />}
          {page === 'edengarden' && <EdenGardenPage key="eden" />}
          {page === 'tiktok' && <TikTokPage key="tiktok" />}
          {page === 'bookings' && <BookingsPage key="bookings" />}
          {page === 'gallery' && <GalleryPage key="gallery" />}
          {page === 'contact' && <ContactPage key="contact" />}
        </AnimatePresence>
      </main>

      {/* Extra Space for Fixed Footer on Mobile */}
      <div className="h-20 lg:hidden"></div>

      <footer className="h-auto lg:h-32 bg-white border-t border-brand-editorial-border py-12 lg:py-0">
        <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-braai-primary mb-2">Hospitality</span>
              <span className="text-lg font-serif italic text-brand-editorial-dark">Braai Life</span>
            </div>
            <div className="hidden lg:block w-px h-10 bg-brand-editorial-border"></div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left h-full">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-eden-primary mb-2">Experiences</span>
              <span className="text-lg font-serif italic text-brand-editorial-dark">Eden Garden</span>
            </div>
          </div>

          <div className="flex flex-col lg:items-end gap-4">
             <div className="flex items-center gap-6">
                <a href="#" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Instagram</a>
                <a href="#" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Facebook</a>
                <a href="https://www.tiktok.com/@braailife.zw?_r=1&_t=ZS-96BkJ2Ggojq" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">TikTok</a>
             </div>
             <p className="text-[10px] opacity-20 uppercase tracking-[0.2em] font-bold text-center lg:text-right">
                © 2026 Pleasant Valley Farm. All Rights Reserved.
             </p>
          </div>
        </div>
      </footer>

      {/* Desktop Sticky WhatsApp Only */}
      <div className="hidden lg:block">
          <a 
            href="https://wa.me/263771234567" 
            target="_blank" 
            className="fixed bottom-10 right-10 z-[110] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform group"
          >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl font-bold text-[10px] uppercase tracking-widest border border-brand-editorial-border">
                Chat with our team
            </span>
          </a>
      </div>

      <StickyMobileCTA setPage={navigateTo} />
    </div>
  );
}
