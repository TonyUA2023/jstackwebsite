import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const steps = [
    { number: '01', title: 'Strategy & Wireframing', desc: 'Fast alignment on business goals, copy, and layout structure.' },
    { number: '02', title: 'High-Fidelity UI Design', desc: 'Custom, colorful, and elegant design tailored to your brand.' },
    { number: '03', title: 'Clean Multi-Stack Coding', desc: 'Rapid development in React, Next.js, or optimal tech stack.' },
    { number: '04', title: '100/100 Speed & Global Launch', desc: 'Core Web Vitals audit, Google Indexing, and handover.' },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0A0D14] text-white relative overflow-hidden border-t border-slate-800">
      
      {/* VISIBLE ARTISTIC DARK TIMELINE SVG NETWORK BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/20 to-purple-600/10 blur-[150px] rounded-full" />
        
        <svg className="absolute w-full h-full opacity-30" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 200 Q720 500 1340 200" stroke="#0096C7" strokeWidth="2" strokeDasharray="12 12" />
          <path d="M100 700 Q720 400 1340 700" stroke="#2B7A9E" strokeWidth="1.5" />
          <circle cx="720" cy="450" r="100" stroke="#0096C7" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Streamlined 4-Step Process & Guarantees
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Our agile workflow is optimized to launch custom, high-converting websites quickly to help you close sales globally.
          </p>
        </div>

        {/* Workflow Showcase Image & Steps Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Image Showcase Left (ULTRA-REALISTIC WEB DESIGN WORKFLOW PHOTO) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 p-2.5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1000&q=80" 
                  alt="Web Development Workflow & UX Wireframing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3.5 py-1 rounded-full bg-jstack-cyan text-white text-xs font-extrabold inline-block mb-2">
                    ⚡ Fast Agile Delivery
                  </span>
                  <h4 className="text-xl font-bold">Rapid Execution for Global Clients</h4>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Step Express Timeline Right */}
          <div id="process" className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900/90 backdrop-blur-sm rounded-3xl p-6 border border-slate-800 shadow-lg hover:border-jstack-cyan transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-white text-xs font-black tracking-widest uppercase border border-slate-700 shadow-sm group-hover:bg-jstack-cyan group-hover:border-jstack-cyan transition-colors">
                      Step {step.number}
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-white">{step.title}</h4>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Trust Guarantee Banner */}
        <div className="mt-16 bg-slate-900/90 backdrop-blur-sm rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-slate-800 text-emerald-400 border border-slate-700 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">100% Speed & Quality Guarantee</h4>
              <p className="mt-1 text-sm text-slate-400 max-w-xl">
                We deliver your fully custom website with a guaranteed 90+ score on Google Core Web Vitals, or we work for free until achieved.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-8 py-4 rounded-full btn-primary text-white text-sm font-bold shadow-glow hover:shadow-glow-lg transition-all"
          >
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  );
};
