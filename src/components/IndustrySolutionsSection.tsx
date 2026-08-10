import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, 
  ShoppingBag, 
  Hotel, 
  Coffee, 
  Briefcase, 
  Laptop, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export const IndustrySolutionsSection: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState('detailing');

  const industries = [
    {
      id: 'detailing',
      name: 'Car Detailing & Auto Care',
      icon: Car,
      color: 'from-amber-500 to-rose-600',
      badge: 'High Conversion for Auto Studios',
      title: 'High-Converting Websites for Car Detailing Studios',
      description: 'Turn vehicle enthusiasts into booked appointments. Features online service package estimators, before/after showcases, and 1-click WhatsApp booking.',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=80',
      features: [
        'Interactive Package & Pricing Calculator',
        'Before / After Paint Correction Gallery',
        'Instant WhatsApp & Calendar Booking',
        'Local SEO Setup for Google Maps Top Ranking'
      ],
      ctaText: 'Request Car Detailing Website'
    },
    {
      id: 'fashion',
      name: 'Clothing & Fashion Brands',
      icon: ShoppingBag,
      color: 'from-pink-500 to-purple-600',
      badge: 'E-Commerce Growth',
      title: 'Ultra-Fast Online Stores for Apparel & Fashion',
      description: 'Stunning storefronts designed to showcase collections, minimize cart abandonment, and increase average order value.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
      features: [
        'Instant Mobile Shopping Cart & Checkout',
        'Interactive Lookbook & Size Guides',
        'Instagram Feed & Social Proof Sync',
        'Stripe, PayPal & Local Payment Gateways'
      ],
      ctaText: 'Request Fashion E-Commerce Site'
    },
    {
      id: 'hotel',
      name: 'Hotels & Vacation Rentals',
      icon: Hotel,
      color: 'from-blue-500 to-cyan-600',
      badge: '0% Commission Bookings',
      title: 'Direct Booking Engines for Hotels & Boutique Stays',
      description: 'Bypass third-party OTA fees with your own direct reservation engine. High-resolution photo galleries and real-time room availability.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      features: [
        'Direct Room Booking Engine (Zero OTA Fees)',
        'Real-Time Room Availability Calendar',
        'Virtual Tour & Room Amenity Showcase',
        'Multi-Language & Currency Support'
      ],
      ctaText: 'Request Hotel Booking Website'
    },
    {
      id: 'restaurant',
      name: 'Restaurants & Cafes',
      icon: Coffee,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Digital Menu & Reservations',
      title: 'Digital Menus & Table Booking for Gastronomy',
      description: 'Engage food lovers with high-resolution culinary photography, online table reservations, and seamless mobile QR menus.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
      features: [
        'QR Code Digital Menu with Instant Ordering',
        'Online Table Reservation System',
        'Google Reviews & Rating Badge Sync',
        'Local Delivery & Takeout Integration'
      ],
      ctaText: 'Request Restaurant Website'
    },
    {
      id: 'services',
      name: 'Clinics, Law & Real Estate',
      icon: Briefcase,
      color: 'from-indigo-500 to-blue-600',
      badge: 'High-Trust Lead Capture',
      title: 'High-Trust Websites for Professional Practices',
      description: 'Establish immediate authority in dental, legal, or real estate fields with client review credentials and high-converting inquiry forms.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
      features: [
        'Qualified Lead & Appointment Booking',
        'Client Testimonials & Case Result Counters',
        'Property / Service Listing Showcase',
        'HIPAA & GDPR Compliant Contact Forms'
      ],
      ctaText: 'Request Professional Practice Site'
    },
    {
      id: 'tech',
      name: 'SaaS & Tech Startups',
      icon: Laptop,
      color: 'from-purple-500 to-indigo-600',
      badge: 'SaaS Funnel Optimization',
      title: 'High-Converting Landing Pages for Tech & SaaS',
      description: 'Convert software product visitors into trial signups. Interactive feature walkthroughs, tier pricing grids, and API documentation.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      features: [
        'Interactive SaaS Demo & Product Preview',
        'Transparent Tier Pricing Calculators',
        'Free Trial Signup Conversion Funnel',
        '100/100 Core Web Vitals Performance'
      ],
      ctaText: 'Request SaaS Landing Page'
    }
  ];

  const activeData = industries.find(ind => ind.id === activeIndustry) || industries[0];

  return (
    <section id="industries" className="py-24 bg-[#0A0D14] text-white relative overflow-hidden border-t border-slate-800">
      
      {/* VISIBLE ARTISTIC SVG BACKGROUND DRAWING (DARK SECTION) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-transparent blur-[140px] rounded-full" />
        
        {/* Glowing Geometric SVG Lines & Hexagonal Concentric Rings */}
        <svg className="absolute w-full h-full opacity-25" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="720,100 1200,350 1200,750 720,950 240,750 240,350" stroke="#0096C7" strokeWidth="1.5" strokeDasharray="8 8" />
          <polygon points="720,200 1080,400 1080,700 720,850 360,700 360,400" stroke="#2B7A9E" strokeWidth="1" />
          <circle cx="720" cy="500" r="300" stroke="#388DAE" strokeWidth="1" strokeOpacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Do You Own a Business in These Industries?
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            We build specialized, high-converting websites tailored to the exact buyer psychology of your industry. Select your niche below:
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isSelected = activeIndustry === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? 'btn-primary text-white shadow-glow scale-105'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-jstack-cyan'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Display Card */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-slate-900/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8"
            >
              
              {/* Left Image Showcase */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 group">
                <img 
                  src={activeData.image} 
                  alt={activeData.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activeData.color} opacity-40 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-extrabold px-3.5 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md text-white border border-slate-800 shadow-md">
                    {activeData.badge}
                  </span>
                </div>
              </div>

              {/* Right Content & Features */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {activeData.title}
                  </h3>
                  <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                    {activeData.description}
                  </p>
                </div>

                {/* Core Industry Features */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Specialized Industry Features Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeData.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-300 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Industry CTA */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl btn-primary text-white text-sm sm:text-base font-bold shadow-glow hover:shadow-glow-lg transition-all"
                  >
                    <span>{activeData.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
