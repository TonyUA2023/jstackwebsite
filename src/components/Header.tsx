import React, { useState } from 'react';
import { ChevronDown, Menu, X, Globe, ShoppingCart, Building2, Bot, Server, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export type PageRoute = 
  | 'home' 
  | 'projects' 
  | 'about' 
  | 'contact'
  | 'terms' 
  | 'privacy' 
  | 'sitemap'
  | 'services-websites'
  | 'services-ecommerce'
  | 'services-b2b'
  | 'services-ai'
  | 'services-it';

interface HeaderProps {
  onNavigatePage?: (page: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigatePage }) => {
  const { language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const phoneDisplay = "+1 (774) 747-7215";
  const whatsappDirectUrl = "https://wa.me/17747477215?text=Hola,%20busco%20información%20para%20un%20proyecto%20web%20profesional";

  const handleNavClick = (pageKey: PageRoute, href?: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    
    if (onNavigatePage) {
      onNavigatePage(pageKey);
    } else {
      if (pageKey === 'home') {
        window.location.hash = '';
      } else {
        window.location.hash = `#/${pageKey}`;
      }
    }

    if (href && href.startsWith('#') && pageKey === 'home') {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const serviceItems = [
    {
      key: 'services-websites' as PageRoute,
      icon: Globe,
      titleEs: 'Websites & Landing Pages',
      titleEn: 'Websites & Landing Pages',
      descEs: 'Sitios web institucionales y landing pages en React con carga <0.3s.',
      descEn: 'Hand-coded corporate websites with 100/100 Google Speed score.'
    },
    {
      key: 'services-ecommerce' as PageRoute,
      icon: ShoppingCart,
      titleEs: 'E-Commerce & Catálogos',
      titleEn: 'E-Commerce & Storefronts',
      descEs: 'Tiendas online con pasarelas de pago, checkout rápido y control de stock.',
      descEn: 'High-speed digital storefronts, payment gateways, and inventory sync.'
    },
    {
      key: 'services-b2b' as PageRoute,
      icon: Building2,
      titleEs: 'Sistemas B2B & Portales de Venta',
      titleEn: 'B2B Systems & Sales Platforms',
      descEs: 'Sistemas ERP/CRM a medida, cotizadores automáticos y canales mayoristas.',
      descEn: 'Bespoke sales funnels, client portals, and automated quoting engines.'
    },
    {
      key: 'services-ai' as PageRoute,
      icon: Bot,
      titleEs: 'Automatizaciones & Agentes IA',
      titleEn: 'AI Automations & Intelligent Agents',
      descEs: 'Agentes conversacionales 24/7, calificación de prospectos y flujos autónomos.',
      descEn: 'Custom 24/7 AI agents, automated lead intake, and smart workflow sync.'
    },
    {
      key: 'services-it' as PageRoute,
      icon: Server,
      titleEs: 'Implementaciones TI & Cloud',
      titleEn: 'Enterprise IT & Cloud Infrastructure',
      descEs: 'Infraestructura en la nube de alta disponibilidad, ciberseguridad y soporte.',
      descEn: 'Scalable cloud architecture, DDoS protection, and managed SLAs.'
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white text-slate-900 shadow-sm transition-all">
        
        {/* Top Strip */}
        <div className="w-full bg-[#F1F5F9] border-b border-slate-200/80">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-2 flex items-center justify-end gap-6 text-xs sm:text-[13px] font-semibold text-slate-700">
            
            {/* Phone Number */}
            <a 
              href="tel:+17747477215" 
              className="hover:text-[#D8202A] transition-colors flex items-center gap-1.5"
            >
              <span>{phoneDisplay}</span>
            </a>

            {/* WhatsApp Link */}
            <a 
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:opacity-80 transition-opacity flex items-center"
              aria-label="WhatsApp Directo"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.53 1.771.82 2.796.821 3.183 0 5.77-2.587 5.77-5.767.001-3.182-2.585-5.768-5.77-5.768zm0-2.172c4.385 0 7.943 3.558 7.944 7.941 0 4.385-3.559 7.943-7.944 7.943-1.34 0-2.597-.333-3.699-.915l-4.332 1.134 1.156-4.22c-.66-1.15-1.069-2.48-1.069-3.942 0-4.383 3.559-7.941 7.944-7.941z"/>
              </svg>
            </a>

            {/* Language Switcher Pill */}
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>

          </div>
        </div>

        {/* Main Navigation Header */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
          
          {/* Brand Logo & Name in 2 Lines */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer"
          >
            <img 
              src="/logo.png" 
              alt="JSTACK Logo" 
              className="h-13 sm:h-16 lg:h-17 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />

            <div className="flex flex-col text-left justify-center">
              <span className="text-2xl sm:text-[30px] font-black tracking-tight text-[#0A192F] font-sans leading-none">
                JSTACK
              </span>
              <span className="text-[11px] sm:text-[12px] font-extrabold text-[#D8202A] uppercase tracking-[0.22em] leading-tight mt-1">
                Digital Solutions
              </span>
            </div>
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            
            {/* 1. Expertise */}
            <button
              onClick={() => handleNavClick('home', '#expertise')}
              className="text-[16px] xl:text-[17px] font-bold text-[#0A192F] hover:text-[#D8202A] transition-colors py-1 tracking-tight cursor-pointer"
            >
              {language === 'es' ? 'Especialidades' : 'Expertise'}
            </button>

            {/* 2. Services Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="text-[16px] xl:text-[17px] font-bold text-[#0A192F] hover:text-[#D8202A] transition-colors flex items-center gap-1.5 py-1 tracking-tight cursor-pointer"
              >
                <span>{language === 'es' ? 'Servicios' : 'Services'}</span>
                <ChevronDown className={`w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#D8202A]' : 'text-slate-400'}`} />
              </button>

              {/* Hover Dropdown Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-3 w-[460px] z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 space-y-1">
                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.key}
                          onClick={() => handleNavClick(item.key)}
                          className="w-full p-3 rounded-xl hover:bg-slate-50 transition-all flex items-start gap-3.5 text-left group cursor-pointer"
                        >
                          <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-red-50 text-[#0A192F] group-hover:text-[#D8202A] border border-slate-200 group-hover:border-red-200 flex items-center justify-center shrink-0 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-[#0A192F] group-hover:text-[#D8202A] transition-colors block">
                              {language === 'es' ? item.titleEs : item.titleEn}
                            </span>
                            <span className="text-xs text-slate-500 line-clamp-1 mt-0.5 block font-normal">
                              {language === 'es' ? item.descEs : item.descEn}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Projects Page */}
            <button
              onClick={() => handleNavClick('projects')}
              className="text-[16px] xl:text-[17px] font-bold text-[#0A192F] hover:text-[#D8202A] transition-colors py-1 tracking-tight cursor-pointer"
            >
              {language === 'es' ? 'Proyectos' : 'Projects'}
            </button>

            {/* 4. About Page */}
            <button
              onClick={() => handleNavClick('about')}
              className="text-[16px] xl:text-[17px] font-bold text-[#0A192F] hover:text-[#D8202A] transition-colors py-1 tracking-tight cursor-pointer"
            >
              {language === 'es' ? 'Nosotros' : 'About'}
            </button>

          </nav>

          {/* Right Action: Vibrant Red Contact Button directly routing to /contact */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-7 py-3 bg-[#D8202A] hover:bg-[#B91C1C] text-white text-[15px] font-bold tracking-tight rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              {language === 'es' ? 'Contáctanos' : 'Contact Us'}
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 bg-[#D8202A] text-white text-xs font-bold rounded-md"
            >
              {language === 'es' ? 'Contacto' : 'Contact'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-md focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => handleNavClick('home', '#expertise')}
              className="block w-full text-left text-base font-bold text-slate-800 hover:text-[#D8202A] py-1"
            >
              {language === 'es' ? 'Especialidades' : 'Expertise'}
            </button>

            {/* Services Mobile Accordion */}
            <div className="border-t border-b border-slate-100 py-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-base font-bold text-slate-800 py-1"
              >
                <span>{language === 'es' ? 'Servicios' : 'Services'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#D8202A]' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pt-2 space-y-2">
                  {serviceItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleNavClick(item.key)}
                      className="block w-full text-left text-sm font-semibold text-slate-600 hover:text-[#D8202A] py-1"
                    >
                      {language === 'es' ? item.titleEs : item.titleEn}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('projects')}
              className="block w-full text-left text-base font-bold text-slate-800 hover:text-[#D8202A] py-1"
            >
              {language === 'es' ? 'Proyectos' : 'Projects'}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left text-base font-bold text-slate-800 hover:text-[#D8202A] py-1"
            >
              {language === 'es' ? 'Nosotros' : 'About'}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left text-base font-bold text-[#D8202A] py-1"
            >
              {language === 'es' ? 'Contáctanos' : 'Contact Us'}
            </button>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">{language === 'es' ? 'Idioma:' : 'Language:'}</span>
              <LanguageSwitcher />
            </div>
          </div>
        )}

      </header>
    </>
  );
};
