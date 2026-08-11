import React from 'react';
import { ShieldCheck, ArrowUp, Zap, Globe, Mail, Phone, MessageSquare, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const phoneDisplay = "+1 (774) 747-7215";
  const whatsappUrl = "https://wa.me/17747477215?text=Hola,%20busco%20información%20para%20un%20diseño%20web%20profesional";
  const smsUrl = "sms:+17747477215?body=Hola,%20deseo%20cotizar%20un%20sitio%20web";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070A] text-white border-t border-[#1E293B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E293B]">
          
          {/* Brand & Direct Contact Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="p-1 bg-white border border-slate-700 w-fit">
                <img 
                  src="/logo.png" 
                  alt="JSTACK Logo" 
                  className="h-8 w-auto object-contain" 
                />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="text-lg font-black tracking-wider text-white">
                  JSTACK
                </span>
                <span className="text-[9px] font-bold tracking-widest text-[#38BDF8] uppercase mt-0.5">
                  Digital Solutions
                </span>
              </div>
            </a>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            {/* Phone & Direct Messaging Strip */}
            <div className="p-3 bg-[#0B0F17] border border-[#1E293B] space-y-2">
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                {t.footer.phoneDirect}
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-[#38BDF8] hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{phoneDisplay} (WhatsApp)</span>
                </a>
                <span className="text-slate-600">|</span>
                <a 
                  href={smsUrl}
                  className="text-xs font-mono font-bold text-emerald-400 hover:underline flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>SMS</span>
                </a>
              </div>
              <a href="mailto:jstackinfo@gmail.com" className="text-xs font-mono text-slate-300 hover:text-white block pt-1">
                Email: jstackinfo@gmail.com
              </a>
            </div>

            <div className="pt-1 flex items-center gap-3">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Detailed SEO Services & Solutions Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-b border-[#1E293B] pb-1">
              Servicios & SEO Comercial
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li><a href="#websites" className="hover:text-[#38BDF8] transition-colors">Diseño Web Profesional y Eficiente</a></li>
              <li><a href="#websites" className="hover:text-[#38BDF8] transition-colors">Creación de Páginas Web Vendedoras</a></li>
              <li><a href="#websites" className="hover:text-[#38BDF8] transition-colors">Diseño de Tiendas Online (E-commerce)</a></li>
              <li><a href="#websites" className="hover:text-[#38BDF8] transition-colors">Creación de Landing Pages de Alta Conversión</a></li>
              <li><a href="#websites" className="hover:text-[#38BDF8] transition-colors">Páginas Web Económicas para Pymes</a></li>
              <li><a href="#websites" className="hover:text-[#38BDF8] transition-colors">Desarrollo Web a Medida y Optimización SEO</a></li>
            </ul>
          </div>

          {/* Global Target Locations & Guarantees */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-b border-[#1E293B] pb-1">
              Cobertura de Servicio
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="font-mono text-[11px]">
                {t.footer.countriesServed}
              </p>
              <div className="pt-2 space-y-1.5 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Google Core Web Vitals 100/100</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>100% Código Propio Hand-Coded</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© {new Date().getFullYear()} JSTACK Digital Solutions. {t.footer.rights}</p>
          
          <div className="flex items-center gap-6">
            <a href="?reporte=true" className="hover:text-white transition-colors text-[11px] text-slate-500">Reporte Interno (CSV)</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            <button
              onClick={scrollToTop}
              className="px-3 py-1 bg-[#0B0F17] border border-[#1E293B] hover:bg-[#1E293B] text-slate-200 transition-all flex items-center gap-1 font-bold"
            >
              <span>Arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
