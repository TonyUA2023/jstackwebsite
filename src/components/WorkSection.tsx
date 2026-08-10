import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Zap, TrendingUp, ShieldCheck, Clock } from 'lucide-react';

export const WorkSection: React.FC = () => {
  const projects = [
    {
      title: "Global Business Website",
      category: "Delivered in 7 Days",
      metrics: { speed: "0.2s", conversion: "+280%", vitals: "100/100" },
      description: "Express 7-day launch for a international consulting brand resulting in instant page loads and 2.8x client inquiry rates.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["7-Day Launch", "High Conversion", "Global Client"]
    },
    {
      title: "Fast E-Commerce Storefront",
      category: "Delivered in 8 Days",
      metrics: { speed: "0.3s", conversion: "+195%", vitals: "99/100" },
      description: "Ultra-fast online store with instant product search, mobile optimization, and seamless checkout integrations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["E-Commerce", "Stripe Checkout", "Instant Search"]
    },
    {
      title: "SaaS Portal MVP",
      category: "Stage 2 Web App",
      metrics: { speed: "0.2s", conversion: "+240%", vitals: "100/100" },
      description: "Custom cloud dashboard and web application for an emerging tech startup with scalable database architecture.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      tags: ["Web App", "Custom Portal", "Scalable Stack"]
    }
  ];

  return (
    <section id="work" className="py-12 md:py-16 bg-[#FCFDFF] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-jstack-cyan" />
            <span>Case Studies & Portfolio</span>
          </div>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Performance Websites & Rapid Launches
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Real metrics from fast, custom website engineering for clients around the globe.
          </p>
        </div>

        {/* Projects Cards */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-extrabold text-slate-900 shadow-sm flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-500" />
                    {project.category}
                  </span>
                </div>

                {/* Metrics Pill Grid */}
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-2xl bg-slate-50 border border-slate-100 text-center mb-3">
                    <div>
                      <span className="block text-[9px] font-bold uppercase text-slate-500">Speed</span>
                      <span className="text-xs font-extrabold text-emerald-600">{project.metrics.speed}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase text-slate-500">Vitals</span>
                      <span className="text-xs font-extrabold text-jstack-blue">{project.metrics.vitals}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase text-slate-500">Growth</span>
                      <span className="text-xs font-extrabold text-cyan-600">{project.metrics.conversion}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-jstack-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags & Action */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href="#contact" 
                  className="p-2 rounded-xl bg-slate-50 hover:bg-jstack-blue hover:text-white text-slate-700 transition-colors"
                  aria-label="View Project Details"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
