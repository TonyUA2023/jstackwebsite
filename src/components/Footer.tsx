import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ArrowRight } from 'lucide-react';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

interface FooterProps {
  onNavigatePage?: (page: 'home' | 'terms' | 'privacy' | 'sitemap' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage }) => {
  const { language } = useLanguage();

  const facebookUrl = "https://www.facebook.com/JstackDigitalSolutions";
  const instagramUrl = "https://www.instagram.com";

  const handleContactRoute = () => {
    if (onNavigatePage) {
      onNavigatePage('contact');
    } else {
      window.location.hash = '#/contact';
    }
  };

  return (
    <footer className="bg-[#061B33] text-white pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Enriched Multi-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 pb-16">
          
          {/* Column 1: Short Attractive About Section + "Contact Now" Button */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="JSTACK Logo" 
                className="h-11 w-auto object-contain" 
              />
              <div className="flex flex-col justify-center leading-none">
                <span className="text-2xl font-black tracking-tight text-white font-sans">
                  JSTACK
                </span>
                <span className="text-[10px] font-extrabold tracking-[0.22em] text-[#D8202A] uppercase mt-0.5">
                  Digital Solutions
                </span>
              </div>
            </a>

            {/* Short & Attractive About Us Bio */}
            <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-sm">
              {language === 'es'
                ? 'Agencia de ingeniería web de alta velocidad y desarrollo de software con IA. Construimos plataformas digitales que transforman marcas y multiplican ingresos comerciales.'
                : 'A premier web engineering and AI architecture agency. We build lightning-fast, high-converting platforms tailored to scale modern enterprise businesses.'}
            </p>

            {/* High-Impact "Contact Now" Button */}
            <div className="pt-2">
              <button
                onClick={handleContactRoute}
                className="px-6 py-3 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-md inline-flex items-center gap-2 cursor-pointer hover:shadow-lg"
              >
                <span>{language === 'es' ? 'Contactar Ahora' : 'Contact Now'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Office Headquarters with Global Attention */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight font-sans">
              {language === 'es' ? 'Oficina Central' : 'Office Headquarters'}
            </h3>

            <div className="text-sm text-slate-300 space-y-1 leading-relaxed">
              <p className="font-bold text-white text-base">JSTACK Digital Solutions</p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#0A2342] text-[#D8202A] border border-[#D8202A]/30 rounded text-[11px] font-bold uppercase tracking-wider">
                <span>{language === 'es' ? 'Atención Global · Worldwide Coverage' : 'Worldwide Coverage & Support'}</span>
              </div>
              <p className="text-slate-300 pt-1">Boston & Massachusetts, USA</p>
              <p className="text-slate-300">Lima, Perú</p>
            </div>

            <div className="text-sm text-slate-300 space-y-1.5 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-xs font-semibold">{language === 'es' ? 'Teléfono:' : 'Phone:'}</span>
                <a href="tel:+17747477215" className="hover:text-[#D8202A] font-bold text-xs sm:text-sm transition-colors">
                  🇺🇸 +1 (774) 747-7215
                </a>
              </div>

              <div className="flex items-center gap-2 pl-11">
                <a href="tel:+51902699916" className="hover:text-[#D8202A] font-bold text-xs sm:text-sm transition-colors">
                  🇵🇪 +51 902 699 916
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-slate-400 text-xs font-semibold">Email:</span>
                <a href="mailto:jstackinfo@gmail.com" className="hover:text-[#D8202A] font-bold text-xs sm:text-sm transition-colors">
                  info@jstack.digital
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Solutions Directory */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight font-sans">
              {language === 'es' ? 'Soluciones' : 'Solutions'}
            </h3>

            <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-300">
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('services-websites' as any) : window.location.hash = '#/services-websites'} 
                  className="hover:text-[#D8202A] transition-colors cursor-pointer text-left"
                >
                  Websites & Landing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('services-ecommerce' as any) : window.location.hash = '#/services-ecommerce'} 
                  className="hover:text-[#D8202A] transition-colors cursor-pointer text-left"
                >
                  E-Commerce Storefronts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('services-b2b' as any) : window.location.hash = '#/services-b2b'} 
                  className="hover:text-[#D8202A] transition-colors cursor-pointer text-left"
                >
                  B2B Business Systems
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('services-ai' as any) : window.location.hash = '#/services-ai'} 
                  className="hover:text-[#D8202A] transition-colors cursor-pointer text-left"
                >
                  AI Automations & Agents
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('services-it' as any) : window.location.hash = '#/services-it'} 
                  className="hover:text-[#D8202A] transition-colors cursor-pointer text-left"
                >
                  Enterprise IT & Cloud
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Locations (Attention Worldwide) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight font-sans">
              {language === 'es' ? 'Sedes & Alcance' : 'Our Locations'}
            </h3>

            <div className="bg-[#0A2342] p-4 rounded-xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
                <Globe className="w-4 h-4 text-[#D8202A] shrink-0" />
                <span>{language === 'es' ? 'Atención a Nivel Global' : 'Attention Worldwide'}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {language === 'es'
                  ? 'Despliegue técnico y soporte 24/7 para empresas en EE. UU., Latinoamérica, Europa y Global Remote.'
                  : '24/7 technical delivery and support for enterprises across North America, Latin America, Europe, and Global Remote.'}
              </p>
            </div>

            {/* Follow Us */}
            <div className="pt-1">
              <span className="text-xs font-bold text-slate-400 block mb-2 uppercase tracking-wider">
                {language === 'es' ? 'Síguenos' : 'Follow Us'}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#0A2342] hover:bg-[#D8202A] text-white rounded-lg border border-white/10 transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#0A2342] hover:bg-[#D8202A] text-white rounded-lg border border-white/10 transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Rights Bar with Dot Grid */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>{language === 'es' ? '© 2026 JSTACK Digital Solutions. Todos los derechos reservados.' : '© 2026 JSTACK Digital Solutions. All rights reserved.'}</span>
            <span className="hidden sm:inline">·</span>
            <button
              onClick={() => onNavigatePage ? onNavigatePage('terms') : window.location.hash = '#/terms'}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {language === 'es' ? 'Términos' : 'Terms'}
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigatePage ? onNavigatePage('privacy') : window.location.hash = '#/privacy'}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {language === 'es' ? 'Privacidad' : 'Privacy'}
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigatePage ? onNavigatePage('sitemap') : window.location.hash = '#/sitemap'}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {language === 'es' ? 'Mapa del Sitio' : 'Sitemap'}
            </button>
          </div>

          {/* Dot Grid on bottom right */}
          <div className="hidden sm:flex items-center gap-4 opacity-40">
            <div className="w-28 h-6 bg-dot-matrix" />
          </div>

        </div>

      </div>

    </footer>
  );
};
