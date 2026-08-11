import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { QuoteModal } from './QuoteModal';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const phoneDisplay = "+1 (774) 747-7215";
  const whatsappUrl = "https://wa.me/17747477215?text=Hola,%20busco%20información%20para%20un%20diseño%20web%20profesional";
  const smsUrl = "sms:+17747477215?body=Hola,%20deseo%20cotizar%20un%20sitio%20web";

  const navItems = [
    { label: t.header.websites, href: '#websites' },
    { label: t.header.experience, href: '#gallery' },
    { label: t.header.services, href: '#services' },
    { label: t.header.contact, href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#05070A]/95 border-b border-[#1E293B] py-3 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left Side Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-white p-1 flex items-center justify-center border border-slate-700">
              <img src="/logo.png" alt="JSTACK Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-base font-black tracking-wider text-white">
                JSTACK
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                Digital Solutions
              </span>
            </div>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-[#38BDF8] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Direct Phone & WhatsApp / SMS Buttons & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Explicit Direct Phone Number */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-[#0B0F17] border border-[#1E293B] hover:border-[#0284C7] text-xs font-mono font-bold text-slate-200 transition-all"
              title="Contact via WhatsApp / Phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{phoneDisplay}</span>
            </a>

            {/* SMS Direct Link */}
            <a
              href={smsUrl}
              className="px-2.5 py-1.5 bg-[#0B0F17] border border-[#1E293B] hover:border-emerald-500 text-xs font-mono font-bold text-emerald-400 transition-all flex items-center gap-1"
              title="Send SMS"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>SMS</span>
            </a>

            {/* Simplified EN / ES Switcher */}
            <LanguageSwitcher />

            {/* CTA Quote Button - Triggers QuoteModal */}
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-4 py-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-[#38BDF8]/30 cursor-pointer"
            >
              <span>{t.header.getQuote}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0B0F17] border border-[#1E293B] text-[#38BDF8]"
              aria-label="Contact WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-[#0B0F17] border border-[#1E293B] text-slate-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#05070A] border-b border-[#1E293B] px-4 pt-3 pb-5 space-y-3 shadow-2xl"
          >
            <div className="p-3 bg-[#0B0F17] border border-[#1E293B] text-center">
              <span className="text-xs font-mono text-slate-400 block">Llamada / WhatsApp / SMS Directo:</span>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-mono font-bold text-[#38BDF8] block mt-1">
                {phoneDisplay}
              </a>
            </div>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-[#0B0F17]"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); setIsQuoteModalOpen(true); }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wider"
              >
                <span>{t.header.getQuote}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
};
