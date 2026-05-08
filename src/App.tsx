import { useState, useEffect } from 'react';
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
  Plus
} from 'lucide-react';

// --- Sub-components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  icon: Icon
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'eden' | 'braai' | 'outline' | 'ghost'; 
  className?: string; 
  onClick?: () => void;
  icon?: any;
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-[11px] sm:text-[13px] uppercase tracking-widest cursor-pointer group";
  const variants = {
    primary: "bg-brand-editorial-dark text-white hover:opacity-90",
    secondary: "bg-white text-brand-editorial-dark border border-brand-editorial-border hover:bg-gray-50",
    eden: "bg-brand-eden-primary text-white hover:opacity-90",
    braai: "bg-brand-braai-primary text-white hover:opacity-90",
    outline: "border-2 border-current hover:bg-brand-editorial-dark hover:text-white",
    ghost: "text-gray-600 hover:text-brand-editorial-dark hover:bg-gray-100/50"
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
  dark = false
}: { 
  label?: string; 
  title: string; 
  subtitle?: string; 
  centered?: boolean;
  dark?: boolean;
}) => (
  <div className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : ''} ${dark ? 'text-white' : 'text-brand-editorial-dark'}`}>
    {label && (
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block opacity-60">
        {label}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl lg:text-7xl mb-6 font-serif leading-[0.9] tracking-tighter">
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg opacity-80 leading-tight font-medium ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

// --- Pages ---

const HomePage = ({ setPage }: { setPage: (p: string) => void }) => {
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

      {/* Brand Split - The "Editorial" Mainstay */}
      <section className="flex flex-col lg:flex-row h-auto lg:h-screen border-b border-brand-editorial-border">
        {/* Braai Life Half */}
        <div className="lg:w-1/2 relative group bg-brand-braai-primary flex flex-col justify-end p-12 text-white h-[600px] lg:h-full border-r border-brand-editorial-border">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop')] mix-blend-multiply opacity-40 grayscale-[0.5] transition-all duration-700 group-hover:scale-105"></div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white text-brand-braai-primary text-[10px] font-bold uppercase tracking-widest mb-4">Bold & Energetic</span>
            <h2 className="text-7xl sm:text-8xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-6">BRAAI<br/>LIFE</h2>
            <p className="text-lg opacity-90 max-w-[360px] mb-8 font-medium leading-tight">Social lunch experiences and premium grilled flavors in the heart of Tynwald.</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" onClick={() => setPage('braailife')}>BOOK LUNCH</Button>
              <Button variant="outline" className="border-white !bg-transparent text-white hover:!bg-white hover:!text-brand-braai-primary" onClick={() => window.open('https://wa.me/263000000000')}>WHATSAPP MENU</Button>
            </div>
          </div>
          <div className="absolute top-12 right-12 text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Community First</p>
            <p className="text-xs font-serif italic opacity-70 italic">Harare, Zimbabwe</p>
          </div>
        </div>

        {/* Brand Connector Circle */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-24 h-24 rounded-full border-[12px] border-brand-editorial-bg items-center justify-center z-30 shadow-xl pointer-events-none">
          <p className="text-[9px] font-bold uppercase text-center tracking-tighter leading-none text-brand-editorial-dark">SISTER<br/>BRANDS</p>
        </div>

        {/* Eden Garden Half */}
        <div className="lg:w-1/2 relative group bg-brand-eden-primary flex flex-col justify-end p-12 text-white h-[600px] lg:h-full">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1000&auto=format&fit=crop')] mix-blend-multiply opacity-40 grayscale-[0.2] transition-all duration-700 group-hover:scale-105"></div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-brand-eden-accent text-white text-[10px] font-bold uppercase tracking-widest mb-4">Elegant & Airy</span>
            <h2 className="text-7xl sm:text-8xl md:text-9xl font-serif italic font-light leading-[0.85] tracking-tight mb-6 text-white">Eden<br/>Garden</h2>
            <p className="text-lg opacity-90 max-w-[360px] mb-8 font-light leading-tight">Curated picnics, grazing boards, and private event celebrations in nature.</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" className="!bg-brand-eden-accent !text-white border-none" onClick={() => setPage('edengarden')}>PLAN EXPERIENCE</Button>
              <Button variant="outline" className="border-white !bg-transparent text-white hover:!bg-white hover:!text-brand-eden-primary" onClick={() => navigateTo('bookings')}>EVENT INQUIRY</Button>
            </div>
          </div>
          <div className="absolute top-12 right-12 text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Experience Led</p>
            <p className="text-xs font-serif italic opacity-70 italic">Tynwald North, Harare</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white border-b border-brand-editorial-border py-12">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap justify-between items-center gap-12 opacity-30 px-4">
             <div className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tighter">Pleasant Valley Farm</div>
             <div className="flex items-center gap-2 font-serif text-2xl font-light italic tracking-tight underline decoration-1 underline-offset-4">Tynwald Estate</div>
             <div className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tighter uppercase">Harare Events</div>
             <div className="flex items-center gap-2 font-serif text-2xl font-light italic tracking-tight">African Hospitality</div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ... other sub-pages implemented as mini components for brevity in this single-file flow ...

const AboutPage = () => (
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

const BraaiLifePage = () => (
    <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="container mx-auto px-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center mb-32 pt-12">
                <div className="lg:w-1/2 space-y-8">
                     <SectionHeading label="Braai Life" title="Flavor with Fire" subtitle="Experience bold, energetic, and value-driven dining. Our chef-led grill station delivers high-quality cuts with signature Harare spices." />
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {["Premium Meats", "Vibrant Atmosphere", "Rapid Service", "Group Boards"].map(f => (
                            <div key={f} className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest text-brand-braai-primary">
                                <Plus size={14} /> {f}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 rounded-[30px] overflow-hidden aspect-[4/5] shadow-2xl relative">
                    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
                </div>
            </div>
            {/* Menu Snippet */}
            <div className="bg-brand-braai-primary text-white p-12 lg:p-20 rounded-[40px] shadow-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-white opacity-5 rounded-full"></div>
                <h4 className="text-4xl md:text-5xl font-serif italic mb-12 text-center leading-none">The social lunch board</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-medium opacity-90 max-w-4xl mx-auto">
                    <div className="flex justify-between border-b border-white/20 pb-4 italic"><span>Master Platter (Ribs, Wings, Pap)</span> <b>$25</b></div>
                    <div className="flex justify-between border-b border-white/20 pb-4 italic"><span>Tynwald Social Board (Feeds 4)</span> <b>$75</b></div>
                    <div className="flex justify-between border-b border-white/20 pb-4 italic"><span>Quarter Chicken & Sides</span> <b>$12</b></div>
                    <div className="flex justify-between border-b border-white/20 pb-4 italic"><span>Signature Wings (12pc)</span> <b>$15</b></div>
                </div>
                <div className="mt-16 flex justify-center">
                    <Button variant="secondary" className="!px-12 !py-6" onClick={() => window.open('https://wa.me/263000000000')}>ORDER VIA WHATSAPP</Button>
                </div>
            </div>
        </div>
    </div>
);

const EdenGardenPage = () => (
    <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="container mx-auto px-10">
             <div className="flex flex-col lg:flex-row-reverse gap-20 items-center mb-32 pt-12">
                <div className="lg:w-1/2 space-y-8 text-right lg:text-left">
                     <SectionHeading label="Eden Garden" title="Curated Sanctuary" subtitle="Elegant and airy. Escape to a private picnic spot with curated grazing boards, boutique drinks, and tailored decor. Perfect for intimate escapes." />
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 justify-end lg:justify-start">
                        {["Private Nooks", "Bespoke Grazing", "Floral Design", "Sunset Views"].map(f => (
                            <div key={f} className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest text-brand-eden-primary">
                                <Plus size={14} /> {f}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 rounded-[30px] overflow-hidden aspect-[4/5] shadow-2xl relative">
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
                    <Button variant="eden" className="w-full !py-6" onClick={() => navigateTo('bookings')}>Reserve Your Spot</Button>
                </div>
                <div className="p-12 border border-brand-editorial-border rounded-[40px] bg-brand-eden-primary text-white">
                    <span className="text-[10px] font-bold tracking-widest text-brand-eden-accent uppercase mb-2 block">The Celebration</span>
                    <h4 className="text-4xl font-serif italic mb-2">Bespoke Events</h4>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-8 font-bold">Custom Quotation</p>
                    <p className="text-white/70 mb-10 leading-snug">Full catering, high-end floral decor, and private garden hosting for groups of 10 to 100.</p>
                    <Button variant="secondary" className="w-full !py-6 !bg-brand-eden-accent !text-white border-none" onClick={() => navigateTo('bookings')}>Request Full Info</Button>
                </div>
            </div>
        </div>
    </div>
);

const BookingsPage = () => (
    <div className="pt-40 pb-24 container mx-auto px-10">
        <SectionHeading centered label="Reservations" title="Plan Your Visit" />
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-[40px] border border-brand-editorial-border shadow-2xl">
            <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name" className="w-full p-4 rounded-full bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-colors text-sm" />
                    <input type="email" placeholder="Email" className="w-full p-4 rounded-full bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-colors text-sm" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <input type="date" className="w-full p-4 rounded-full bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-colors text-sm uppercase tracking-tighter" />
                    <input type="number" placeholder="Guests" className="w-full p-4 rounded-full bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-colors text-sm" />
                    <select className="w-full p-4 rounded-full bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-colors text-sm uppercase tracking-widest font-bold">
                        <option>Braai Life</option>
                        <option>Eden Garden</option>
                        <option>Private Event</option>
                    </select>
                </div>
                <textarea placeholder="Message / Occasion" className="w-full p-6 rounded-[30px] bg-brand-editorial-bg border border-brand-editorial-border focus:outline-none focus:border-brand-braai-primary transition-colors text-sm h-32"></textarea>
                <Button variant="primary" className="w-full !py-6">Submit Inquiry</Button>
            </form>
        </div>
    </div>
);

const GalleryPage = () => (
    <div className="pt-40 pb-24 container mx-auto px-10">
        <SectionHeading centered label="Visuals" title="The Farm Gallery" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8].map(i => (
                <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                    <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 111111}?auto=format&fit=crop&w=600&q=80`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] hover:grayscale-0" />
                </div>
            ))}
        </div>
    </div>
);

const ContactPage = () => (
    <div className="pt-32 pb-24 container mx-auto px-6">
        <SectionHeading centered label="Contact" title="Get in Touch" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            <div className="space-y-2">
                <MapPin className="mx-auto text-[#FF6321]" />
                <h4 className="font-bold">Location</h4>
                <p className="text-sm text-gray-500">Tynwald, Harare</p>
            </div>
            <div className="space-y-2">
                <Phone className="mx-auto text-[#5A5A40]" />
                <h4 className="font-bold">Phone</h4>
                <p className="text-sm text-gray-500">+263 7XX XXX XXX</p>
            </div>
            <div className="space-y-2">
                <MessageCircle className="mx-auto text-green-500" />
                <h4 className="font-bold">WhatsApp</h4>
                <p className="text-sm text-gray-500">Available 10am-7pm</p>
            </div>
        </div>
    </div>
);

// --- Main App ---

export default function App() {
  const [page, setPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (p: string) => {
    setPage(p);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen selection:bg-[#FF6321]/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-brand-editorial-border py-4">
        <div className="container mx-auto px-10 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
             <div className="w-8 h-8 rounded-full bg-brand-editorial-dark flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">PVF</span>
             </div>
             <span className="font-serif italic text-lg tracking-tight">Pleasant Valley Farm</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {['About', 'Braai Life', 'Eden Garden', 'Gallery', 'Contact'].map(p => (
              <button 
                key={p} 
                className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-editorial-dark opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => navigateTo(p.toLowerCase().replace(' ', ''))}
              >
                {p}
              </button>
            ))}
            <Button variant="primary" className="!px-6 !py-2 !text-[10px]" onClick={() => navigateTo('bookings')}>Book Now</Button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-white pt-24 p-6"
          >
            <div className="flex flex-col gap-6 text-center">
                {['Home', 'About', 'Braai', 'Eden', 'Bookings', 'Gallery', 'Contact'].map(p => (
                    <button key={p} className="text-2xl font-serif" onClick={() => navigateTo(p.toLowerCase())}>{p}</button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <AnimatePresence mode="wait">
          {page === 'home' && <HomePage key="home" setPage={navigateTo} />}
          {page === 'about' && <AboutPage key="about" />}
          {page === 'braai' && <BraaiLifePage key="braai" />}
          {page === 'eden' && <EdenGardenPage key="eden" />}
          {page === 'bookings' && <BookingsPage key="bookings" />}
          {page === 'gallery' && <GalleryPage key="gallery" />}
          {page === 'contact' && <ContactPage key="contact" />}
        </AnimatePresence>
      </main>

      <footer className="h-auto lg:h-20 bg-white border-t border-brand-editorial-border py-10 lg:py-0">
        <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-[9px] uppercase tracking-widest font-bold text-brand-braai-primary mb-1">Call Us Today</span>
              <span className="text-sm font-medium text-brand-editorial-dark">+263 77 123 4567</span>
            </div>
            <div className="hidden lg:block w-px h-8 bg-brand-editorial-border"></div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-[9px] uppercase tracking-widest font-bold text-brand-eden-primary mb-1">Visit Us</span>
              <span className="text-sm font-medium text-brand-editorial-dark">Pleasant Valley Farm, Tynwald</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Connect:</span>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full border border-brand-editorial-border flex items-center justify-center text-[10px] font-bold hover:bg-brand-editorial-dark hover:text-white transition-all">IG</a>
                <a href="#" className="w-8 h-8 rounded-full border border-brand-editorial-border flex items-center justify-center text-[10px] font-bold hover:bg-brand-editorial-dark hover:text-white transition-all">FB</a>
                <a href="https://wa.me/263000000000" className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xs shadow-sm hover:scale-110 transition-transform">
                  <MessageCircle size={14} />
                </a>
              </div>
            </div>
            <div className="hidden sm:block text-[10px] opacity-30 uppercase tracking-[0.2em] font-bold">
              © 2026 PV Farm
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp */}
      <a 
        href="https://wa.me/263000000000" 
        className="fixed bottom-6 right-6 z-[110] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
