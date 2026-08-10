import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, ShoppingBag, Gauge, CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Rocket,
      title: "High-Converting Business Websites",
      description: "Custom-coded websites engineered to close small & medium business sales globally with ultra-fast speed and instant trust.",
      features: ["Fast Express Turnaround", "100/100 Google Speed Score", "Mobile & SEO Optimized"],
      badge: "Primary Focus",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: ShoppingBag,
      title: "Fast E-Commerce Storefronts",
      description: "High-speed online shopping experiences built to minimize abandoned carts and maximize sales conversions worldwide.",
      features: ["Instant Product Search & Filters", "Stripe & PayPal Integration", "High-Converting Checkout Flow"],
      badge: "High Conversion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      color: "from-teal-500 to-emerald-600"
    },
    {
      icon: Code,
      title: "Custom Web Apps & SaaS Platforms",
      description: "Tailor-made web applications, client portals, and SaaS MVP platforms built with scalable architecture for long-term growth.",
      features: ["Scalable Web Architecture", "Custom Admin Dashboards", "Database & API Integration"],
      badge: "Stage 2 • Web Apps & SaaS",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500 to-blue-600"
    },
    {
      icon: Gauge,
      title: "Speed & Core Web Vitals Audit",
      description: "Re-engineering slow existing sites into 100/100 Google Speed performers, fixing bounce rates and boosting organic SEO traffic.",
      features: ["Google 100/100 Speed Guarantee", "Code & Asset Optimization", "Schema.org Rich Snippets"],
      badge: "SEO & Performance",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#FCFDFF] text-slate-900 relative overflow-hidden border-t border-slate-100">
      
      {/* VISIBLE ARTISTIC LIGHT SVG BACKGROUND GRAPHICS */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-cyan-100/50 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[120px]" />
        
        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="100" x2="1440" y2="800" stroke="#0096C7" strokeWidth="2" strokeDasharray="10 10" />
          <line x1="0" y1="300" x2="1440" y2="1000" stroke="#2B7A9E" strokeWidth="1.5" />
          <circle cx="1200" cy="300" r="180" stroke="#0096C7" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            High-Performance Web Solutions & Engineering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From high-converting custom websites to complex web applications and performance engineering.
          </p>
        </div>

        {/* Services Grid with Visual Images & Color */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Header with Gradient Overlay */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Badge & Icon on Top of Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 shadow-sm">
                      {service.badge}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-jstack-cyan shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title overlay on image bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-sm">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="mt-6 space-y-2.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card CTA Footer */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-jstack-blue group-hover:text-jstack-cyan transition-colors"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
