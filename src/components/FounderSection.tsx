import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, ArrowRight, Briefcase, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import tonyFotoImg from '../assets/seo/foto.png';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
  </svg>
);

export const FounderSection: React.FC = () => {
  const { language } = useLanguage();

  const linkedinUrl = "https://www.linkedin.com/in/tony-ulloa-662a5618b/";
  const upworkUrl = "https://www.upwork.com/freelancers/~01fccc454c6b18d73d?mp_source=share";
  const facebookUrl = "https://www.facebook.com/JstackDigitalSolutions";

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#/contact';
    }
  };

  return (
    <section id="founder" className="py-20 sm:py-28 bg-[#F8FAFC] text-[#0A192F] border-t border-b border-slate-200/80 relative overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Column: Tony Ulloa Large High-Impact Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-3xl shadow-xl w-full max-w-[460px] group">
              
              {/* Large Photo Container */}
              <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[540px] bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden shadow-inner">
                <img 
                  src={tonyFotoImg} 
                  alt="Tony Ulloa - Systems Engineer & AI / Web Architecture Specialist" 
                  className="w-full h-full object-cover object-top contrast-105 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom Name & Role Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-slate-200 p-4 rounded-xl backdrop-blur-md shadow-lg">
                  <span className="text-xl sm:text-2xl font-black text-[#D8202A] tracking-tight block font-sans">
                    Tony Ulloa
                  </span>
                  <p className="text-sm sm:text-[15px] font-bold text-[#0A192F] mt-1 leading-snug">
                    {language === 'es' ? 'Ingeniero de Sistemas · Especialista en IA y Web' : 'Systems Engineer · AI & Web Architecture'}
                  </p>
                </div>
              </div>

              {/* Social & Verification Direct Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-3 bg-slate-50 hover:bg-[#0A66C2] hover:text-white border border-slate-200 hover:border-[#0A66C2] text-slate-700 text-xs sm:text-[13px] font-bold transition-all flex items-center justify-center gap-2 rounded-xl group cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2] group-hover:text-white" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-3 bg-slate-50 hover:bg-[#14A800] hover:text-white border border-slate-200 hover:border-[#14A800] text-slate-700 text-xs sm:text-[13px] font-bold transition-all flex items-center justify-center gap-2 rounded-xl group cursor-pointer"
                  title="Upwork Verified Profile"
                >
                  <Briefcase className="w-4 h-4 text-[#14A800] group-hover:text-white" />
                  <span>Upwork</span>
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-slate-50 hover:bg-[#1877F2] hover:text-white border border-slate-200 text-slate-700 text-xs sm:text-[13px] font-bold transition-all flex items-center justify-center rounded-xl group cursor-pointer"
                  title="Facebook"
                >
                  <FacebookIcon className="w-4 h-4 text-[#1877F2] group-hover:text-white" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: High-Impact Large Typography & Specialties */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Main Headline (Much Larger Typography) */}
            <h2 className="text-3xl sm:text-5xl lg:text-[50px] xl:text-[56px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.08]">
              {language === 'es' ? (
                <>
                  Ingeniería de Software y <br />
                  <span className="text-[#D8202A]">Arquitectura de IA</span> para <br />
                  Empresas de Alto Nivel
                </>
              ) : (
                <>
                  Software Engineering & <br />
                  <span className="text-[#D8202A]">AI Architecture</span> Built <br />
                  for Enterprise Scale
                </>
              )}
            </h2>

            {/* Description Bio (Much Larger Font Size) */}
            <p className="text-lg sm:text-xl lg:text-[21px] text-[#475569] leading-relaxed font-normal max-w-2xl">
              {language === 'es'
                ? 'Con más de 10 años de experiencia técnica liderando proyectos digitales, desarrollo soluciones hand-coded ultraveloces, seguras y optimizadas para conversión. Cada plataforma es construida bajo los más altos estándares de ingeniería y velocidad de carga.'
                : 'With over a decade of hands-on software engineering leadership, I architect lightning-fast, high-converting digital platforms engineered with hand-coded precision, enterprise security, and tailored AI workflows.'}
            </p>

            {/* 2 Core Engineering Specialties (Larger Cards and Typography) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-6 bg-white border border-slate-200 hover:border-[#D8202A] rounded-2xl transition-all shadow-xs group">
                <div className="flex items-center gap-3 text-base sm:text-lg font-bold text-[#0A192F] mb-2">
                  <div className="p-2 bg-red-50 text-[#D8202A] rounded-lg group-hover:bg-[#D8202A] group-hover:text-white transition-colors">
                    <Code className="w-5 h-5" />
                  </div>
                  <span>{language === 'es' ? 'Arquitectura Web Ultraveloz' : 'High-Speed Web Architecture'}</span>
                </div>
                <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                  {language === 'es'
                    ? 'Desarrollo moderno en React y Vite sin plantillas pesadas. Rendimiento 100/100 en Google PageSpeed y carga en menos de 0.8s.'
                    : 'Modern React and Vite engineering with zero bloated themes. Verified 100/100 PageSpeed scores and sub-second load times.'}
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200 hover:border-[#D8202A] rounded-2xl transition-all shadow-xs group">
                <div className="flex items-center gap-3 text-base sm:text-lg font-bold text-[#0A192F] mb-2">
                  <div className="p-2 bg-red-50 text-[#D8202A] rounded-lg group-hover:bg-[#D8202A] group-hover:text-white transition-colors">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span>{language === 'es' ? 'Inteligencia Artificial Aplicada' : 'Applied Artificial Intelligence'}</span>
                </div>
                <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                  {language === 'es'
                    ? 'Modelos de lenguaje, agentes inteligentes 24/7 y automatizaciones comerciales conectadas directamente a tus canales de venta.'
                    : 'Custom LLM agents, 24/7 intelligent assistants, and automated commercial workflows connected to your sales pipeline.'}
                </p>
              </div>
            </div>

            {/* Direct Consultation CTA Button */}
            <div className="pt-3 flex flex-wrap items-center gap-5">
              <button
                onClick={handleContactClick}
                className="px-9 py-4 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-[16px] rounded-md transition-all inline-flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>{language === 'es' ? 'Cotizar Proyecto con Tony Ulloa' : 'Consult with Tony Ulloa'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-700 hover:text-[#D8202A] transition-colors inline-flex items-center gap-1.5"
              >
                <span>{language === 'es' ? 'Ver Perfil en LinkedIn' : 'View LinkedIn Profile'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
