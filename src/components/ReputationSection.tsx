import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const ReputationSection: React.FC = () => {
  const { language } = useLanguage();

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#/contact';
    }
  };

  // 8 Real Client Logos from public/clients/
  const clientLogos = [
    { id: 'client-1', src: '/clients/1.png', alt: 'Client Partner 1' },
    { id: 'client-2', src: '/clients/2.png', alt: 'Client Partner 2' },
    { id: 'client-3', src: '/clients/3.png', alt: 'Client Partner 3' },
    { id: 'client-4', src: '/clients/4.png', alt: 'Client Partner 4' },
    { id: 'client-5', src: '/clients/5.png', alt: 'Client Partner 5' },
    { id: 'client-6', src: '/clients/6.ico', alt: 'Client Partner 6' },
    { id: 'client-7', src: '/clients/7.png', alt: 'Client Partner 7' },
    { id: 'client-8', src: '/clients/8.png', alt: 'Client Partner 8' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-[#0A192F] relative overflow-hidden border-t border-slate-100">
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Grid: Left Typography + Right 4x2 Brand Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Paraphrased Headline & Value Proposition */}
          <div className="lg:col-span-5 text-left space-y-6">
            
            {/* Standardized Headline: text-[54px] */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.08]"
            >
              {language === 'es' ? (
                <>
                  Respaldados por <br />
                  <span className="text-[#D8202A]">Marcas Líderes</span> & <br />
                  Empresas en Crecimiento
                </>
              ) : (
                <>
                  Trusted by <br />
                  <span className="text-[#D8202A]">Industry Leaders</span> & <br />
                  Growing Brands
                </>
              )}
            </motion.h2>

            {/* Paraphrased Subtitle Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-[19px] text-[#475569] leading-relaxed font-normal max-w-md"
            >
              {language === 'es'
                ? 'A lo largo de más de 3 años de trayectoria, nos hemos asociado con negocios en rápida expansión, empresas de servicios y marcas consolidadas en Estados Unidos, Latinoamérica y el mundo. Mediante arquitecturas web de alto rendimiento y soluciones inteligentes de software a medida, impulsamos la captación de clientes, la autoridad de marca y un crecimiento comercial comprobable.'
                : 'Over the past 3+ years, we have partnered with fast-moving businesses, service providers, and established enterprises across the United States, Latin America, and worldwide. Through high-performance hand-coded web architectures and bespoke AI solutions, we consistently deliver speed, brand credibility, and measurable revenue growth.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                onClick={handleContactClick}
                className="px-7 py-3.5 bg-slate-900 hover:bg-[#D8202A] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer shadow-md"
              >
                {language === 'es' ? 'Unirse a Nuestros Casos de Éxito' : 'Partner With Us'}
              </button>
            </motion.div>

          </div>

          {/* Right Column: 4 Columns x 2 Rows Real Client Logo Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={logo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onClick={handleContactClick}
                  className="w-full h-28 sm:h-32 bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-[#D8202A] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-16 sm:max-h-18 max-w-[85%] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
