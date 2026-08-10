import React from 'react';
import { ShieldCheck, ArrowUp, Zap, Globe, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0D14] text-white border-t border-slate-800/80 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-white border border-slate-100 shadow-sm w-fit">
                <img 
                  src="/logo.png" 
                  alt="JSTACK Logo" 
                  className="h-9 w-auto object-contain" 
                />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  JSTACK
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-jstack-cyan uppercase mt-0.5">
                  Digital Solutions
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              JSTACK is a premier web development studio. We hand-craft ultra-fast websites designed for maximum conversions, top Google speed scores, and long-term brand authority.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#contact" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors" title="Global Network">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#contact" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors" title="Direct Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#contact" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors" title="Instant Chat">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li><a href="#websites" className="text-slate-400 hover:text-jstack-cyan transition-colors">Websites</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-jstack-cyan transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-jstack-cyan transition-colors">Gallery</a></li>
              <li><a href="#advantages" className="text-slate-400 hover:text-jstack-cyan transition-colors">Advantages</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-jstack-cyan transition-colors">Request Quote</a></li>
            </ul>
          </div>

          {/* Technical Standards & Guarantees */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Engineering Guarantees</h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Google Core Web Vitals 100/100</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-jstack-cyan shrink-0" />
                <span>Custom High-Performance Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full Source Code & Domain Ownership</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} JSTACK Digital Solutions. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 transition-all flex items-center gap-1 font-semibold"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
