import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const PhotoGallerySection: React.FC = () => {
  const galleryPhotos = [
    { 
      id: 1, 
      title: "SaaS Analytics Platform",
      category: "SaaS & Tech",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
    },
    { 
      id: 2, 
      title: "Modern E-Commerce Storefront",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
    },
    { 
      id: 3, 
      title: "Corporate Business Landing",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80" 
    },
    { 
      id: 4, 
      title: "Car Detailing Studio Site",
      category: "Auto Care",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80" 
    },
    { 
      id: 5, 
      title: "Fashion & Apparel Store",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80" 
    },
    { 
      id: 6, 
      title: "Boutique Hotel Booking Engine",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80" 
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#FCFDFF] text-slate-900 relative overflow-hidden border-t border-slate-100">
      
      {/* ULTRA-MINIMALIST LIGHT DOT MATRIX BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:1.5rem_1.5rem] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Design & Website Showcase
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A visual showcase of our custom web designs. Pure aesthetics engineered for conversion.
          </p>
        </div>

        {/* Ultra-Minimalist Photo Grid (REALISTIC WEBSITE SHOWCASE COVERS) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-slate-200 p-2"
            >
              {/* Photo Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-900">
                <img 
                  src={photo.image} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle Hover Action Layer */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <a 
                    href="#contact"
                    className="px-6 py-3 rounded-full bg-white text-slate-950 text-xs font-extrabold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
                  >
                    <span>Request Similar Website</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button Below Gallery */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl btn-primary text-white text-sm sm:text-base font-bold shadow-glow hover:shadow-glow-lg transition-all duration-300"
          >
            <span>Request Your Custom Website</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
