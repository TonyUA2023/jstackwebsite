import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const AdvantagesSection: React.FC = () => {
  return (
    <section id="advantages" className="py-24 bg-[#0A0D14] text-white relative overflow-hidden border-t border-slate-800">
      
      {/* VISIBLE ARTISTIC SVG CIRCUIT & LIGHT ORB BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/15 blur-[140px] rounded-full" />
        
        {/* SVG Tech Lines */}
        <svg className="absolute w-full h-full opacity-30" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 300 H450 L600 450 H1050 L1200 300 H1600" stroke="#0096C7" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M-100 600 H350 L500 750 H950 L1100 600 H1600" stroke="#2B7A9E" strokeWidth="1.5" />
          <circle cx="450" cy="300" r="6" fill="#0096C7" />
          <circle cx="600" cy="450" r="6" fill="#2B7A9E" />
          <circle cx="1050" cy="450" r="6" fill="#0096C7" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Not Just a Website — Your 24/7 Sales Engine
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Tell your unique story with a custom, high-speed website built to convert visitors into loyal clients worldwide.
          </p>
        </div>

        {/* Side-by-side Showcase */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Graphics */}
          <div className="lg:col-span-6 relative">
            <div className="bg-slate-900/90 rounded-3xl p-4 border border-slate-800 shadow-2xl relative">
              
              {/* Grid Lines Graphic Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 rounded-3xl" />
              
              {/* Floating Web Card preview */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 p-4 text-white">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border border-cyan-500/30 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Custom Engineering</span>
                    <h4 className="text-lg font-bold mt-1">Tell Your Story With Custom Design</h4>
                    <p className="text-xs text-slate-300 mt-1">Complete your brand identity with bespoke web design. Zero generic templates.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Google Vitals</span>
                      <p className="text-lg font-extrabold text-emerald-400">100 / 100</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Conversion</span>
                      <p className="text-lg font-extrabold text-jstack-cyan">+240% Boost</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-snug">
              Tell Your Story With a Custom Website Engineered to Sell
            </h3>
            
            <p className="text-slate-400 text-base leading-relaxed">
              Complete your brand identity with a high-end custom website design. An impactful site will help you establish instant trust, attract qualified leads, and outperform competitors.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-slate-200 font-semibold text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-jstack-cyan shrink-0" />
                <span>100% Bespoke Code — Zero Slow Page Builders</span>
              </li>
              <li className="flex items-center gap-3 text-slate-200 font-semibold text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-jstack-cyan shrink-0" />
                <span>Google Core Web Vitals 100/100 Guarantee</span>
              </li>
              <li className="flex items-center gap-3 text-slate-200 font-semibold text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-jstack-cyan shrink-0" />
                <span>Full Source Code & Domain Ownership</span>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl btn-primary text-white font-bold text-sm shadow-glow hover:shadow-glow-lg transition-all"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
