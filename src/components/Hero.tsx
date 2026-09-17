import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import wayraImg from '../assets/experiencia/wayra.png';
import esmeraldImg from '../assets/experiencia/esmerald.png';
import homecleanImg from '../assets/experiencia/homeclean.png';
import parionaImg from '../assets/experiencia/pariona.png';
import tractoleoImg from '../assets/experiencia/tractoleo.png';
import manuelasImg from '../assets/experiencia/manuelas.png';

export const Hero: React.FC = () => {
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
    <section className="relative w-full bg-white text-[#0A192F] pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden">
      
      {/* Subtle Background Glow Animation */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-slate-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Full width container */}
      <div className="w-full max-w-[1520px] mx-auto pl-4 sm:pl-8 lg:pl-12 pr-4 sm:pr-8 lg:pr-0">
        
        {/* Main Grid: Left Spacious Text + Right Flushed Device Platform */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Spacious Text Area */}
          <div className="lg:col-span-6 xl:col-span-6 text-left relative z-10 py-2 pr-0 sm:pr-8 lg:pr-6 max-w-[700px]">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200/80 rounded-full text-xs font-bold text-[#D8202A] uppercase tracking-wider mb-5 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Ingeniería Web & IA de Alto Impacto' : 'High-Impact Web & AI Engineering'}</span>
            </motion.div>

            {/* Headline with vibrant red accent */}
            <motion.h1 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black tracking-[-0.03em] text-[#0A192F] leading-[1.08] font-sans"
            >
              {language === 'es' ? (
                <>
                  Diseñamos y Desarrollamos <br />
                  <span className="text-[#D8202A] relative inline-block">
                    Experiencias Digitales
                    <motion.span 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="absolute bottom-1 left-0 h-1 bg-[#D8202A]/20 rounded-full"
                    />
                  </span> <br />
                  Que Escalan Tu Negocio
                </>
              ) : (
                <>
                  Building World-Class <br />
                  <span className="text-[#D8202A] relative inline-block">
                    Digital Experiences
                    <motion.span 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="absolute bottom-1 left-0 h-1 bg-[#D8202A]/20 rounded-full"
                    />
                  </span> <br />
                  That Scale Your Business
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-base sm:text-lg lg:text-[20px] text-[#475569] leading-relaxed font-normal max-w-[580px]"
            >
              {language === 'es'
                ? 'Agencia de ingeniería web y diseño de alto rendimiento. Creamos plataformas ultraveloces, optimizadas para SEO y diseñadas para convertir visitantes en clientes de alto valor.'
                : 'A premier web engineering and experience design agency. We build lightning-fast, high-converting platforms tailored to transform brands and drive measurable commercial growth.'}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -5px rgba(216, 32, 42, 0.4)" }}
                whileTap={{ scale: 0.96 }}
                onClick={handleContactClick}
                className="px-10 py-4 bg-[#D8202A] hover:bg-[#B91C1C] text-white text-[16px] font-bold tracking-tight rounded-lg shadow-md transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
              >
                <span>{language === 'es' ? 'Contactar' : 'Contact'}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="sms:+16469804939?&body=Hello,%20I%20would%20like%20to%20inquire%20about%20a%20web%20or%20AI%20project%20with%20Jstack.Digital"
                className="px-8 py-4 bg-slate-50 hover:bg-slate-100 text-[#0A192F] border border-slate-200 hover:border-slate-300 text-[16px] font-bold tracking-tight rounded-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-2.5 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#D8202A]" />
                <span>{language === 'es' ? 'Enviar SMS Directo' : 'Send Directly SMS'}</span>
              </motion.a>
            </motion.div>

            {/* Dot Grid Matrix positioned under content */}
            <div className="absolute -bottom-10 left-0 w-72 h-36 bg-dot-matrix opacity-50 pointer-events-none -z-10" />

          </div>

          {/* Right Column: Device Cloud Showcase with Smooth Floating Animations */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex justify-end">
            
            {/* Gray Backdrop Platform */}
            <div className="relative w-full lg:w-[105%] bg-gradient-to-br from-[#E2E8F0] to-[#EEF2F6] rounded-3xl lg:rounded-l-3xl lg:rounded-r-none p-4 sm:p-6 lg:p-7 h-[440px] sm:h-[480px] lg:h-[520px] overflow-hidden flex items-center justify-center shadow-inner border border-slate-200/60">
              
              {/* Composition Container for Floating Devices */}
              <div className="relative w-full h-[400px] sm:h-[440px] lg:h-[470px]">
                
                {/* 1. Red Landscape Tablet (Top Left) - Float Loop 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -7, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  whileHover={{ scale: 1.04, y: -8, transition: { duration: 0.2 } }}
                  onClick={handleContactClick}
                  className="absolute top-2 left-0 w-[58%] z-20 cursor-pointer group"
                >
                  <div className="bg-[#D8202A] p-2 sm:p-2.5 rounded-xl device-shadow-red transition-transform duration-300">
                    <div className="bg-black rounded-lg overflow-hidden relative aspect-[16/10]">
                      <img
                        src={tractoleoImg}
                        alt="Digital Web Experience"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* 2. White/Silver Smartphone (Top Center-Right) - Float Loop 2 */}
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -10, 0] 
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                  whileHover={{ scale: 1.05, y: -12, transition: { duration: 0.2 } }}
                  onClick={handleContactClick}
                  className="absolute top-0 right-[22%] w-[25%] sm:w-[23%] z-30 cursor-pointer group"
                >
                  <div className="bg-white p-1.5 rounded-[22px] shadow-2xl border border-slate-200">
                    <div className="w-8 h-1 bg-slate-300 rounded-full mx-auto mb-1" />
                    <div className="bg-slate-100 rounded-[16px] overflow-hidden relative aspect-[9/18]">
                      <img
                        src={manuelasImg}
                        alt="Mobile Store"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* 3. Blue/Cyan Bezel Card (Top Right) - Float Loop 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, -6, 0] 
                  }}
                  transition={{ 
                    duration: 4.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                  whileHover={{ scale: 1.04, y: -8, transition: { duration: 0.2 } }}
                  onClick={handleContactClick}
                  className="absolute top-6 right-0 w-[38%] z-20 cursor-pointer group"
                >
                  <div className="bg-[#0284C7] p-2 rounded-xl device-shadow-blue">
                    <div className="bg-slate-900 rounded-lg overflow-hidden aspect-[16/9] relative">
                      <img
                        src={wayraImg}
                        alt="Tech Platform"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* 4. White Horizontal Card (Bottom Left) - Float Loop 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -8, 0] 
                  }}
                  transition={{ 
                    duration: 3.8, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.8
                  }}
                  whileHover={{ scale: 1.04, y: -10, transition: { duration: 0.2 } }}
                  onClick={handleContactClick}
                  className="absolute bottom-4 left-4 w-[45%] z-30 cursor-pointer group"
                >
                  <div className="bg-white p-1.5 rounded-xl shadow-xl border border-slate-200/80">
                    <div className="bg-slate-50 rounded-lg overflow-hidden aspect-[16/10] relative">
                      <img
                        src={homecleanImg}
                        alt="Web Showcase"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* 5. Black Portrait Tablet (Bottom Center-Right) - Float Loop 5 */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -9, 0] 
                  }}
                  transition={{ 
                    duration: 4.2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.4
                  }}
                  whileHover={{ scale: 1.04, y: -11, transition: { duration: 0.2 } }}
                  onClick={handleContactClick}
                  className="absolute bottom-0 right-[15%] w-[38%] sm:w-[34%] z-40 cursor-pointer group"
                >
                  <div className="bg-[#0F172A] p-2 sm:p-2.5 rounded-2xl shadow-2xl border-2 border-slate-700">
                    <div className="bg-black rounded-xl overflow-hidden relative aspect-[3/4]">
                      <img
                        src={esmeraldImg}
                        alt="E-Commerce Fashion Catalog"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* 6. Purple Landscape Tablet (Bottom Right) - Float Loop 6 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, -7, 0] 
                  }}
                  transition={{ 
                    duration: 3.6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.9
                  }}
                  whileHover={{ scale: 1.04, y: -9, transition: { duration: 0.2 } }}
                  onClick={handleContactClick}
                  className="absolute bottom-4 right-0 w-[34%] z-20 cursor-pointer group"
                >
                  <div className="bg-[#7E22CE] p-2 rounded-xl device-shadow-purple">
                    <div className="bg-white rounded-lg overflow-hidden aspect-[16/11] relative">
                      <img
                        src={parionaImg}
                        alt="Community Platform"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
