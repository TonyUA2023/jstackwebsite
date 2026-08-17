import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gauge, 
  Code2, 
  Search, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ContactSection } from '../../components/ContactSection';

import websitesShowcaseImg from '../../assets/services/websites.jpg';

interface ServicePageProps {
  onNavigateHome: () => void;
}

export const WebsitesServicePage: React.FC<ServicePageProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#/contact';
    }
  };

  const features = [
    {
      icon: Gauge,
      titleEs: 'Carga Instantánea <0.3s (100/100 Google)',
      titleEn: 'Sub-0.3s Instant Load (100/100 Google Speed)',
      descEs: 'Optimizamos cada byte de JavaScript y CSS para garantizar la máxima calificación en Google Core Web Vitals, reduciendo la tasa de rebote a mínimos históricos.',
      descEn: 'We optimize every byte of JavaScript and CSS to secure top Google Core Web Vitals scores, slashing bounce rates to historic lows.'
    },
    {
      icon: Code2,
      titleEs: '100% Hand-Coded en React & Next.js',
      titleEn: '100% Hand-Coded in React & Next.js',
      descEs: 'Cero constructores visuales lentos de WordPress. Código limpio, estrictamente tipado en TypeScript y libre de vulnerabilidades de plugins de terceros.',
      descEn: 'Zero slow WordPress page builders. Clean, strictly typed TypeScript code free from third-party plugin vulnerabilities.'
    },
    {
      icon: Search,
      titleEs: 'SEO Técnico & Indexación Local',
      titleEn: 'Technical SEO & Local Search Dominance',
      descEs: 'Estructuración semántica Schema.org, Open Graph, metaetiquetas dinámicas y optimización para búsquedas locales en EE. UU., Perú y mercados globales.',
      descEn: 'Semantic Schema.org structuring, dynamic Open Graph tags, and local search dominance for USA, Peru, and global markets.'
    },
    {
      icon: ShieldCheck,
      titleEs: 'Seguridad SSL & Entrega Total del Código',
      titleEn: 'Bank-Grade SSL & Complete Code Ownership',
      descEs: 'Cifrado de grado bancario, protección Cloudflare anti-DDoS y transferencia del 100% de la propiedad intelectual y repositorios al cliente.',
      descEn: 'Bank-grade encryption, Cloudflare anti-DDoS protection, and 100% intellectual property transfer of repositories to the client.'
    }
  ];

  return (
    <div className="bg-white text-[#0A192F] min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-6 right-10 w-72 h-48 bg-dot-matrix opacity-35 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-6">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#D8202A] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-400 font-bold">›</span>
            <span className="text-slate-500">Services</span>
            <span className="text-slate-400 font-bold">›</span>
            <span className="text-[#0A192F] font-bold">Websites & Landing Pages</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[60px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.06]"
              >
                {language === 'es' ? (
                  <>
                    Sitios Web Corporativos & <br />
                    <span className="text-[#D8202A]">Landing Pages</span> de Alta Conversión
                  </>
                ) : (
                  <>
                    Corporate Websites & <br />
                    <span className="text-[#D8202A]">Landing Pages</span> Built to Convert
                  </>
                )}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base sm:text-lg lg:text-[20px] text-[#475569] leading-relaxed font-normal max-w-2xl"
              >
                {language === 'es'
                  ? 'Diseñamos y programamos plataformas web institucionales y landing pages construidas a medida en React y Next.js. Garantizamos velocidad extrema, arquitectura impecable y un diseño persuasivo enfocado en captar prospectos calificados.'
                  : 'We architect and engineer bespoke corporate websites and high-converting landing pages hand-coded in React and Next.js. We deliver extreme load speeds, impeccable UI/UX, and persuasive conversion funnels.'}
              </motion.p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={handleContactClick}
                  className="px-9 py-4 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-[15px] sm:text-[16px] rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{language === 'es' ? 'Cotizar Sitio Web' : 'Request Website Quote'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-[#F1F5F9] p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xl">
                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-900 aspect-[16/10]">
                  <img 
                    src={websitesShowcaseImg} 
                    alt="Websites & Landing Pages Engineering Showcase" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Detailed Technical Features */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-black text-[#0A192F] tracking-tight font-sans">
              {language === 'es' ? 'Por Qué Nuestras Webs Superan al 99% del Mercado' : 'Why Our Web Architectures Outperform 99% of Competitors'}
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              {language === 'es'
                ? 'No creamos sitios web para verse bonitos: creamos máquinas de ingeniería digital optimizadas para dominar los resultados de Google y convertir visitantes en clientes.'
                : 'We do not build generic template sites. We engineer digital assets fine-tuned for top Google rankings and maximum commercial revenue.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#D8202A] transition-all duration-300 hover:shadow-xl space-y-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#D8202A] shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A192F]">
                    {language === 'es' ? item.titleEs : item.titleEn}
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                    {language === 'es' ? item.descEs : item.descEn}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Reusable Contact Section Component */}
      <ContactSection serviceType="Websites & Landing Pages Service" />

    </div>
  );
};
