import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, X, Phone, Mail, User } from 'lucide-react';

export const StickyBottomBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [closed, setClosed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B0F19]/95 backdrop-blur-xl border-t border-slate-800 text-white shadow-2xl py-3 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Left Info / Heading */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jstack-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-jstack-cyan"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-tight text-white">
                  Get Your Website Quote
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
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold py-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! We will contact you within 2 hours.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
                <div className="relative w-full sm:w-44">
                  <User className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-jstack-cyan transition-all"
                  />
                </div>

                <div className="relative w-full sm:w-48">
                  <Mail className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-jstack-cyan transition-all"
                  />
                </div>

                <div className="relative w-full sm:w-44">
                  <Phone className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-jstack-cyan transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2 rounded-xl btn-primary text-white text-xs font-bold shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Request Free Quote</span>
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
