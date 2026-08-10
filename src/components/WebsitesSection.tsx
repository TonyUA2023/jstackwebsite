import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const WebsitesSection: React.FC = () => {
  const websiteTypes = [
    {
      id: "landing",
      title: "High-Converting Landing Page",
      subtitle: "Ideal for quick lead capture & product launches",
      description: "A single, razor-sharp landing page engineered to turn cold traffic into qualified sales and inquiries.",
      image: "/service-website.jpg",
      features: [
        "Single-Page Conversion Funnel",
        "100/100 Google Speed Guaranteed",
        "Mobile & SEO Optimized",
        "Direct Contact & WhatsApp Integration",
        "Fast Express Turnaround"
      ],
      badge: "Landing Page"
    },
    {
      id: "corporate",
      title: "Corporate & Business Website",
      subtitle: "Complete multi-page site for modern brands",
      description: "A high-end multi-page website that establishes instant trust, showcases your services, and positions your brand ahead of competitors.",
      image: "/hero-showcase.jpg",
      features: [
        "Multi-Page Architecture (Home, About, Services, Contact)",
        "Custom UI/UX & Motion Micro-Interactions",
        "100% Custom Code (Zero Bloatware)",
        "Google Core Web Vitals Certified",
        "Full Source Code Ownership"
      ],
      badge: "Corporate Website"
    },
    {
      id: "ecommerce",
      title: "E-Commerce Online Store",
      subtitle: "High-speed storefront designed to sell products",
      description: "A custom online store built for instant product loading, seamless mobile browsing, and frictionless checkout flows.",
      image: "/service-ecommerce.jpg",
      features: [
        "Instant Product Filtering & Search",
        "Stripe, PayPal & Local Payment Gateways",
        "Mobile-Optimized Shopping Cart",
        "Inventory & Order Management",
        "Zero Layout Shifts (CLS = 0)"
      ],
      badge: "E-Commerce Store"
    }
  ];

  return (
    <section id="websites" className="py-20 md:py-28 bg-[#FCFDFF] relative overflow-hidden">
      
      {/* VISIBLE ARTISTIC SVG BACKGROUND DRAWING (LIGHT SECTION) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft Ambient Light Orbs */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px]" />
        
        {/* Crisp Subtle SVG Grid & Waves */}
        <svg className="absolute w-full h-full opacity-25" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 C300 400 700 100 1100 300 C1300 400 1500 200 1600 250" stroke="#0096C7" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M-100 500 C400 300 800 650 1200 450 C1400 350 1550 550 1600 500" stroke="#2B7A9E" strokeWidth="1.5" />
          <circle cx="200" cy="300" r="150" stroke="#0096C7" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="1200" cy="600" r="220" stroke="#2B7A9E" strokeWidth="1" strokeOpacity="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Custom Websites Engineered to Close Sales
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Select the custom website solution engineered for your business goals. Hand-coded for maximum speed, modern elegance, and instant trust.
          </p>
        </div>

        {/* Website Options Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {websiteTypes.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Preview Header */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img 
                    src={site.image} 
                    alt={site.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-extrabold px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/80 shadow-md">
                      {site.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-extrabold drop-shadow-sm">{site.title}</h3>
                    <p className="text-xs text-slate-200 font-medium mt-0.5">{site.subtitle}</p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {site.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">Key Features:</span>
                    <ul className="space-y-2.5">
                      {site.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl btn-primary text-white text-sm font-bold shadow-glow hover:shadow-glow-lg transition-all duration-300 group"
                >
                  <span>Request This Website</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
