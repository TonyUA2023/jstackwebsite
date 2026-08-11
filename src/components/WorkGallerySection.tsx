import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Layout, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export const WorkGallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'landing' | 'ecommerce' | 'corporate'>('all');

  const galleryItems = [
    {
      id: 1,
      title: "Fintech & Investment Platform",
      category: "corporate",
      categoryName: "Corporate Website",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      speed: "100/100",
      conversion: "+310%"
    },
    {
      id: 2,
      title: "Artisanal Coffee & Roastery",
      category: "landing",
      categoryName: "Landing Page",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
      speed: "99/100",
      conversion: "+240%"
    },
    {
      id: 3,
      title: "Aroma Timeless Luxury Store",
      category: "ecommerce",
      categoryName: "E-Commerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      speed: "100/100",
      conversion: "+185%"
    },
    {
      id: 4,
      title: "Liam Jones DJ & Entertainment",
      category: "landing",
      categoryName: "Landing Page",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      speed: "98/100",
      conversion: "+210%"
    },
    {
      id: 5,
      title: "Ice Hockey League & Arena",
      category: "corporate",
      categoryName: "Corporate Website",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      speed: "100/100",
      conversion: "+295%"
    },
    {
      id: 6,
      title: "Energy & Infrastructure Hub",
      category: "corporate",
      categoryName: "Corporate Website",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
      speed: "100/100",
      conversion: "+340%"
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#FCFDFF] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            High-Impact Website Gallery
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore our showcase of custom websites designed for maximum conversions, top Google speed scores, and instant brand authority.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'landing', label: 'Landing Pages' },
            { id: 'corporate', label: 'Corporate Sites' },
            { id: 'ecommerce', label: 'E-Commerce Stores' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6-Card Gallery Grid (Matching Screenshot 2) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Website Preview Container with Browser Top Bar (Matching Screenshot 1 & 2) */}
                <div className="relative overflow-hidden bg-slate-900 border-b border-slate-200">
                  {/* Browser Bar header */}
                  <div className="px-4 py-2 bg-slate-900 flex items-center gap-1.5 border-b border-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-[10px] font-mono text-slate-400 truncate">jstack.dev/preview-{item.id}</span>
                  </div>

                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />
                    
                    {/* Category Pill */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-slate-900 shadow-sm">
                      {item.categoryName}
                    </span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                    <span className="text-emerald-600 font-bold">{item.speed} Speed</span>
                    <span className="text-jstack-blue font-bold">{item.conversion} Growth</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-jstack-blue transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-0">
                <a
                  href="#contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-jstack-blue hover:text-white text-slate-700 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Request Similar Website</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Action Button below gallery (Matching Screenshot 2) */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl btn-primary text-white text-base font-bold shadow-glow hover:shadow-glow-lg transition-all duration-300"
          >
            <span>Explore All Custom Website Designs</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
