import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, MessageSquare, Briefcase } from 'lucide-react';
import { SymmetricWaves } from './SymmetricWaves';
import { useLanguage } from '../context/LanguageContext';
import { QuoteModal } from './QuoteModal';

import wayraImg from '../assets/experiencia/wayra.png';
import esmeraldImg from '../assets/experiencia/esmerald.png';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
  </svg>
);

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [businessName, setBusinessName] = useState('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const phoneDisplay = "+1 (774) 747-7215";
  const whatsappUrl = "https://wa.me/17747477215?text=Hola,%20busco%20información%20para%20un%20diseño%20web%20profesional";
  const smsUrl = "sms:+17747477215?body=Hola,%20deseo%20cotizar%20un%20sitio%20web";
  
  const linkedinUrl = "https://www.linkedin.com/in/tony-ulloa-662a5618b/";
  const upworkUrl = "https://www.upwork.com/freelancers/~01fccc454c6b18d73d?mp_source=share";
  const facebookUrl = "https://www.facebook.com/JstackDigitalSolutions";

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    setIsQuoteModalOpen(true);
  };

  return (
    <section 
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-28 pb-12 overflow-hidden text-white bg-[#05070A]"
    >
      {/* Formal Dark Symmetric Background Waves */}
      <SymmetricWaves />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        
        {/* Main Grid: Left Content & Right PURE Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Formal Headlines & Quick Input */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Main Conversion Headline (H1) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              {t.hero.h1Title} <br className="hidden sm:block" />
              <span className="text-[#38BDF8]">{t.hero.h1Gradient}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* Secondary SEO Headlines Bar */}
            <div className="p-3 bg-[#0B0F17] border-l-2 border-[#0284C7] text-xs font-mono text-slate-300 space-y-1">
              <p>✔ {t.hero.seoHeadline1}</p>
              <p>✔ {t.hero.seoHeadline2}</p>
            </div>

            {/* Phone & Direct Contact & Social Media Strip */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#0B0F17] border border-[#1E293B] hover:border-[#0284C7] text-xs font-mono font-bold text-white transition-all flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>WhatsApp: {phoneDisplay}</span>
              </a>

              <a
                href={smsUrl}
                className="px-3 py-2 bg-[#0B0F17] border border-[#1E293B] hover:border-emerald-500 text-xs font-mono font-bold text-emerald-400 transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>SMS</span>
              </a>

              {/* Verified Social Media Links (LinkedIn, Upwork, Facebook) */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-[#0B0F17] border border-[#1E293B] hover:border-[#0284C7] text-xs font-mono font-bold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 group"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#38BDF8] group-hover:text-white" />
                <span>LinkedIn</span>
              </a>

              <a
                href={upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-[#0B0F17] border border-[#1E293B] hover:border-emerald-500 text-xs font-mono font-bold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 group"
                title="Upwork Profile"
              >
                <Briefcase className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                <span>Upwork</span>
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#0B0F17] border border-[#1E293B] hover:border-blue-500 text-slate-300 hover:text-white transition-all group"
                title="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
              </a>
            </div>

            {/* Quick Start Input Bar */}
            <div className="pt-2">
              <form onSubmit={handleStart} className="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg">
                <input
                  type="text"
                  placeholder={t.hero.inputPlaceholder}
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="px-4 py-3 bg-[#0B0F17] border border-[#1E293B] text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-[#0284C7] flex-grow"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shrink-0 border border-[#38BDF8]/30 cursor-pointer"
                >
                  <span>{t.hero.ctaButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.badgeSpeed}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.badgeCode}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.badgeGuarantee}</span>
              </div>
            </div>

          </div>

          {/* Right Column: PURE MINIMALIST PROJECT SCREENSHOTS (NO FRAMES OR TITLES) */}
          <div className="lg:col-span-5 relative space-y-4">
            
            {/* Pure Photo 1 */}
            <div className="bg-[#05070A] overflow-hidden border border-[#1E293B] hover:border-[#0284C7] transition-all duration-500 shadow-2xl group cursor-pointer" onClick={() => setIsQuoteModalOpen(true)}>
              <div className="aspect-[16/10] overflow-hidden bg-[#05070A]">
                <img 
                  src={wayraImg} 
                  alt="Wayra Project Screenshot" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Pure Photo 2 */}
            <div className="bg-[#05070A] overflow-hidden border border-[#1E293B] hover:border-[#0284C7] transition-all duration-500 shadow-2xl group cursor-pointer" onClick={() => setIsQuoteModalOpen(true)}>
              <div className="aspect-[16/9] overflow-hidden bg-[#05070A]">
                <img 
                  src={esmeraldImg} 
                  alt="Esmerald Project Screenshot" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

    </section>
  );
};
