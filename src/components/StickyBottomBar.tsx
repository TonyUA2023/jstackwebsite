import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, X, Phone, Mail, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sendLeadToBrevo } from '../services/brevoService';

export const StickyBottomBar: React.FC = () => {
  const { t, language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [closed, setClosed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const phoneDisplay = "+1 (774) 747-7215";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !closed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [closed]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await sendLeadToBrevo({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceType: "Solicitud Rápida (Barra Flotante)",
      message: "Solicitud de contacto enviada desde la barra flotante al hacer scroll."
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setVisible(false);
      setClosed(true);
    }, 4000);
  };

  if (closed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#05070A]/95 border-t border-[#1E293B] text-white shadow-2xl py-3 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Left Info / Heading */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-[#38BDF8] opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 bg-[#38BDF8]"></span>
                </span>
                <span className="text-xs font-mono font-bold tracking-tight text-white">
                  {t.stickyBar.text}
                </span>
              </div>
              <button 
                onClick={() => setClosed(true)} 
                className="md:hidden text-slate-400 hover:text-white p-1"
                aria-label="Close Floating Bar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Middle Quick Form */}
            {submitted ? (
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold py-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>{language === 'en' ? 'Thank you! We will contact you within 2 hours.' : '¡Gracias! Te contactaremos en menos de 2 horas.'}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
                <div className="relative w-full sm:w-40">
                  <User className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder={language === 'en' ? 'Your Name' : 'Tu Nombre'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-[#0B0F17] border border-[#1E293B] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <div className="relative w-full sm:w-44">
                  <Mail className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder={language === 'en' ? 'Your Email' : 'Tu Email'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-[#0B0F17] border border-[#1E293B] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <div className="relative w-full sm:w-40">
                  <Phone className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder={phoneDisplay}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-[#0B0F17] border border-[#1E293B] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shrink-0 border border-[#38BDF8]/30"
                >
                  <span>{t.stickyBar.button}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Close Button Desktop */}
            <button 
              onClick={() => setClosed(true)} 
              className="hidden md:block text-slate-400 hover:text-white p-1 transition-colors"
              aria-label="Close Floating Bar"
            >
              <X className="w-4 h-4" />
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
