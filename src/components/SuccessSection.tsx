import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

import wayraImg from '../assets/experiencia/wayra.png';
import tractoleoImg from '../assets/experiencia/tractoleo.png';
import homecleanImg from '../assets/experiencia/homeclean.png';

export const SuccessSection: React.FC = () => {
  const { language } = useLanguage();

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#/contact';
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-[#0A192F] relative overflow-hidden border-t border-slate-100">
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Grid: Left 3 Perspective Tablets + Right Spacious Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 3 Angled Tablets Showcase on Light Gray Stage */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-start">
            
            {/* Soft Gray Platform Stage */}
            <div className="relative w-full max-w-[580px] bg-[#F1F5F9] rounded-3xl p-6 sm:p-8 h-[460px] sm:h-[520px] lg:h-[540px] overflow-hidden flex items-center justify-center shadow-inner">
              
              {/* Subtle Dot Matrix in Backdrop */}
              <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none" />

              {/* 3 Isometric / Angled Floating Tablets Composition */}
              <div className="relative w-full h-full flex items-center justify-center transform -rotate-12 scale-[0.88] sm:scale-100 transition-transform duration-500 hover:rotate-[-10deg]">
                
                {/* 1. Top Red Tablet (Top-Left) */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  onClick={handleContactClick}
                  className="absolute -top-6 -left-10 w-[72%] z-10 cursor-pointer shadow-2xl"
                >
                  <div className="bg-[#E11D48] p-3 rounded-2xl shadow-2xl border border-white/20">
                    <div className="w-6 h-1 bg-white/40 rounded-full mx-auto mb-1.5" />
                    <div className="bg-black rounded-xl overflow-hidden aspect-[16/10] relative">
                      <img 
                        src={tractoleoImg} 
                        alt="E-Commerce Experience" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* 2. Middle Yellow/Gold Tablet (Center - Main Focus) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                  onClick={handleContactClick}
                  className="absolute top-16 left-12 sm:left-16 w-[78%] z-20 cursor-pointer shadow-2xl"
                >
                  <div className="bg-[#EAB308] p-3 sm:p-3.5 rounded-2xl shadow-2xl border-2 border-white/40">
                    <div className="w-8 h-1 bg-white/50 rounded-full mx-auto mb-1.5" />
                    <div className="bg-black rounded-xl overflow-hidden aspect-[16/10] relative">
                      <img 
                        src={wayraImg} 
                        alt="Corporate Engineering Website" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* 3. Bottom Green Tablet (Bottom-Left) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  onClick={handleContactClick}
                  className="absolute bottom-2 -left-6 w-[72%] z-30 cursor-pointer shadow-2xl"
                >
                  <div className="bg-[#16A34A] p-3 rounded-2xl shadow-2xl border border-white/20">
                    <div className="w-6 h-1 bg-white/40 rounded-full mx-auto mb-1.5" />
                    <div className="bg-black rounded-xl overflow-hidden aspect-[16/10] relative">
                      <img 
                        src={homecleanImg} 
                        alt="Digital Platform Services" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </motion.div>

              </div>

            </div>

          </div>

          {/* Right Column: Spacious Copy & Red Contact Us Button */}
          <div className="lg:col-span-6 text-left space-y-7 pl-0 lg:pl-4">
            
            {/* Main Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.08]"
            >
              Working to Build <br />
              Your Success
            </motion.h2>

            {/* Paraphrased Bio with 3+ Years of Experience */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-[19px] text-[#475569] leading-relaxed font-normal max-w-xl"
            >
              {language === 'es'
                ? 'Con más de 3 años de trayectoria como agencia digital de vanguardia, en JSTACK Digital Solutions brindamos desarrollo web de clase mundial, ingeniería de software, arquitectura cloud y automatizaciones inteligentes. Con nosotros, tu éxito es nuestro éxito: construimos soluciones digitales diseñadas a medida para escalar y transformar positivamente tus resultados comerciales.'
                : 'For over 3 years, JSTACK Digital Solutions, a premier digital agency, has provided best-in-class web design, development, hosting, and managed AI services. With us, your success is our success, and we work directly with you to find powerful online solutions that scale your commercial revenue.'}
            </motion.p>

            {/* Primary Action Button: "Contact Us" in Vibrant Red */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-2"
            >
              <button
                onClick={handleContactClick}
                className="px-9 py-4 bg-[#D8202A] hover:bg-[#B91C1C] text-white text-[15px] sm:text-[16px] font-bold tracking-tight rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                {language === 'es' ? 'Contáctanos' : 'Contact Us'}
              </button>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
