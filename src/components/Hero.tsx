import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [businessName, setBusinessName] = useState('');

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-28 pb-8 sm:pt-32 sm:pb-12 overflow-hidden text-white"
      style={{
        backgroundColor: '#05070B',
        backgroundImage: "linear-gradient(to bottom, rgba(5, 7, 11, 0.85), rgba(5, 7, 11, 0.95)), url('/hero-symmetrical-dark.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      {/* GLOWING AMBIENT CORE LIGHT (PHYSICALLY RENDERED) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/30 via-blue-600/25 to-purple-600/20 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        
        {/* Main Grid: Left Content & Right PURE Image Frames */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Quick Start Input */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Apple-style Staggered Headline (H1) */}
            <motion.h1 
              initial={{ y: 25 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-md"
            >
              High-Converting <span className="text-gradient-accent">Custom Websites</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-lg drop-shadow-sm"
            >
              Custom-built websites engineered for 100/100 Google speed scores, maximum sales conversions, and long-term brand authority.
            </motion.p>

            {/* Quick Start Input Bar */}
            <motion.div 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2"
            >
              <form onSubmit={handleStart} className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md">
                <input
                  type="text"
                  placeholder="Enter your business name or email..."
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="px-5 py-3.5 rounded-2xl bg-white text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-jstack-cyan shadow-xl flex-grow"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-2xl btn-primary text-white text-sm font-bold shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Start Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Core Trust Badges */}
            <motion.div 
              initial={{ y: 15 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-slate-300"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100/100 Speed Score</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Money-Back Guarantee</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Frame Reveal */}
          <motion.div 
            initial={{ scale: 0.94, y: 25 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative mt-6 lg:mt-0"
          >
            {/* Back Main Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/90 p-2 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-lg mx-auto lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" 
                  alt="JSTACK Web Showcase" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Front Overlapping Frame */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative -mt-24 sm:-mt-32 ml-4 sm:ml-8 rounded-3xl overflow-hidden border border-cyan-400/60 bg-slate-950 p-2 shadow-2xl max-w-md"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="High-Converting Web Design" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Scroll Cue - ARROW ICON ONLY */}
      <motion.div 
        initial={{ y: 15 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 text-center z-10 flex justify-center"
      >
        <a 
          href="#websites" 
          className="p-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-jstack-cyan transition-all shadow-md group"
          aria-label="Scroll Down to Websites"
        >
          <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
        </a>
      </motion.div>

    </section>
  );
};
