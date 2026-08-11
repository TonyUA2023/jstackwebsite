import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Cpu, ArrowRight, CheckCircle2, Layers, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import tonyFotoImg from '../assets/seo/foto.png';

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

export const FounderSection: React.FC = () => {
  const { language } = useLanguage();

  const linkedinUrl = "https://www.linkedin.com/in/tony-ulloa-662a5618b/";
  const upworkUrl = "https://www.upwork.com/freelancers/~01fccc454c6b18d73d?mp_source=share";
  const facebookUrl = "https://www.facebook.com/JstackDigitalSolutions";

  return (
    <section className="py-24 bg-white text-[#0F172A] border-t border-b border-slate-200 relative overflow-hidden">
      
      {/* Minimalist Graphic Geometric Accents */}
      <div className="absolute top-10 left-10 text-slate-200 font-mono text-xs select-none pointer-events-none">
        ▪ ▪ ▪ <br />
        ▪ ▪ ▪
      </div>
      <div className="absolute bottom-10 right-10 text-slate-200 font-mono text-xs select-none pointer-events-none">
        ▲ ▲ ▲
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Column: Tony Ulloa Real Photo Frame */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="bg-[#F8FAFC] border border-slate-300 p-4 w-full max-w-[300px] shadow-sm">
              
              {/* Photo Container */}
              <div className="relative aspect-[3/4] bg-white border border-slate-300 overflow-hidden group">
                <img 
                  src={tonyFotoImg} 
                  alt="Tony Ulloa - Ingeniero de Sistemas & Especialista en IA" 
                  className="w-full h-full object-cover object-top contrast-105 hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Name Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 border border-slate-300 p-3 backdrop-blur-md shadow-sm">
                  <span className="text-xs font-mono font-bold text-[#0284C7] uppercase tracking-wider block">
                    Tony Ulloa
                  </span>
                  <p className="text-[11px] font-mono text-slate-700 mt-0.5 leading-tight font-semibold">
                    Ingeniero de Sistemas
                  </p>
                </div>
              </div>

              {/* Minimalist Social Links */}
              <div className="mt-3">
                <div className="flex items-center justify-between gap-1.5 pt-1">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-2 bg-white hover:bg-[#0284C7] hover:text-white border border-slate-300 text-slate-700 text-[10px] font-mono font-bold transition-colors flex items-center justify-center gap-1 group"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#0284C7] group-hover:text-white" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-2 bg-white hover:bg-emerald-600 hover:text-white border border-slate-300 text-slate-700 text-[10px] font-mono font-bold transition-colors flex items-center justify-center gap-1 group"
                    title="Upwork Verified Freelancer"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                    <span>Upwork</span>
                  </a>

                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-2.5 bg-white hover:bg-blue-600 hover:text-white border border-slate-300 text-slate-700 text-[10px] font-mono font-bold transition-colors flex items-center justify-center group"
                    title="Facebook Profile"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 text-blue-600 group-hover:text-white" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Professional Profile Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Founder Name & Main Title */}
            <div>
              <span className="text-xs font-mono font-bold text-[#0284C7] uppercase tracking-widest block mb-2">
                Tony Ulloa — Lead Systems Engineer
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
                {language === 'en'
                  ? 'Systems Engineer & Enterprise AI Integration Specialist'
                  : 'Ingeniero de Sistemas & Especialista en Integración de IA para Empresas'}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              {language === 'en'
                ? 'Ingeniero de Sistemas y especialista en arquitectura de software. Amplia trayectoria en desarrollo de sitios web comerciales, plataformas digitales de alta velocidad, aplicaciones web y la integración de Inteligencia Artificial (IA) para optimizar procesos en empresas.'
                : 'Especialista en desarrollo de sitios web comerciales, plataformas web de alta velocidad, aplicaciones a medida e integración estratégica de Inteligencia Artificial (IA) para automatizar y escalar procesos en empresas de EE. UU., Perú y España.'}
            </p>

            {/* 4 Pillars of Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 bg-[#F8FAFC] border border-slate-200 space-y-1.5 hover:border-[#0284C7] transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0F172A]">
                  <Code className="w-4 h-4 text-[#0284C7]" />
                  <span>Desarrollo de Sitios & Plataformas Web</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sitios web comerciales, portales corporativos y plataformas digitales de alta velocidad programadas a medida.
                </p>
              </div>

              <div className="p-4 bg-[#F8FAFC] border border-slate-200 space-y-1.5 hover:border-[#0284C7] transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0F172A]">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  <span>Aplicaciones Web & Sistemas Móviles</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Desarrollo de aplicaciones web dinámicas y sistemas para la gestión eficiente de negocios y usuarios.
                </p>
              </div>

              <div className="p-4 bg-[#F8FAFC] border border-slate-200 space-y-1.5 hover:border-[#0284C7] transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0F172A]">
                  <Bot className="w-4 h-4 text-purple-600" />
                  <span>Integraciones de Inteligencia Artificial (IA)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Implementación de modelos de IA, agentes inteligentes y automatizaciones conectadas a tu web o sistema.
                </p>
              </div>

              <div className="p-4 bg-[#F8FAFC] border border-slate-200 space-y-1.5 hover:border-[#0284C7] transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0F172A]">
                  <Cpu className="w-4 h-4 text-amber-600" />
                  <span>Especialista de IA en Empresas</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consultoría e ingeniería para integrar Inteligencia Artificial en flujos operativos y de ventas corporativas.
                </p>
              </div>

            </div>

            {/* Contact CTA Action & Verification Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-[#0F172A] hover:bg-[#0284C7] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 border border-slate-900 shadow-md"
              >
                <span>{language === 'en' ? 'Consult Tony Ulloa' : 'Cotizar Proyecto con Tony Ulloa'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-3">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-slate-100 hover:bg-[#0284C7] hover:text-white border border-slate-300 text-slate-700 text-xs font-mono font-bold transition-all flex items-center gap-1.5 group"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0284C7] group-hover:text-white" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-slate-100 hover:bg-emerald-600 hover:text-white border border-slate-300 text-slate-700 text-xs font-mono font-bold transition-all flex items-center gap-1.5 group"
                >
                  <Briefcase className="w-4 h-4 text-emerald-600 group-hover:text-white" />
                  <span>Upwork</span>
                </a>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
