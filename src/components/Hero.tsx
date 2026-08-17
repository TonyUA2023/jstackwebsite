import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
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
    <section className="relative w-full bg-white text-[#0A192F] pt-28 pb-6 sm:pt-32 sm:pb-8 overflow-hidden">
      
      {/* Full width container allowing right side to bleed/anchor to the right */}
      <div className="w-full max-w-[1520px] mx-auto pl-4 sm:pl-8 lg:pl-12 pr-0 sm:pr-4 lg:pr-0">
        
        {/* Main Grid: Left Spacious Text + Right Flushed Device Platform */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Spacious Text Area */}
          <div className="lg:col-span-6 xl:col-span-6 text-left relative z-10 py-2 pr-4 sm:pr-8 lg:pr-6 max-w-[700px]">
            
            {/* Headline with vibrant red accent */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black tracking-[-0.03em] text-[#0A192F] leading-[1.08] font-sans"
            >
              {language === 'es' ? (
                <>
                  Diseñamos y Desarrollamos <br />
                  <span className="text-[#D8202A]">Experiencias Digitales</span> <br />
                  Que Escalan Tu Negocio
                </>
              ) : (
                <>
                  Building World-Class <br />
                  <span className="text-[#D8202A]">Digital Experiences</span> <br />
                  That Scale Your Business
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-base sm:text-lg lg:text-[20px] text-[#475569] leading-relaxed font-normal max-w-[580px]"
            >
              {language === 'es'
                ? 'Agencia de ingeniería web y diseño de alto rendimiento. Creamos plataformas ultraveloces, optimizadas para SEO y diseñadas para convertir visitantes en clientes de alto valor.'
                : 'A premier web engineering and experience design agency. We build lightning-fast, high-converting platforms tailored to transform brands and drive measurable commercial growth.'}
            </motion.p>

            {/* Action Buttons: "Contact" and "Send Directly SMS" */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={handleContactClick}
                className="px-10 py-4 bg-[#D8202A] hover:bg-[#B91C1C] text-white text-[16px] font-bold tracking-tight rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                {language === 'es' ? 'Contactar' : 'Contact'}
              </button>

              <a
                href="sms:+17747477215?&body=Hello,%20I%20would%20like%20to%20inquire%20about%20a%20web%20or%20AI%20project%20with%20Jstack.Digital"
                className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-[#0A192F] border border-slate-300 hover:border-slate-400 text-[16px] font-bold tracking-tight rounded-md transition-all duration-200 cursor-pointer inline-flex items-center gap-2.5 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#D8202A]" />
                <span>{language === 'es' ? 'Enviar SMS Directo' : 'Send Directly SMS'}</span>
              </a>
            </motion.div>

            {/* Dot Grid Matrix positioned under content */}
            <div className="absolute -bottom-14 left-0 w-72 h-40 bg-dot-matrix opacity-60 pointer-events-none -z-10" />

          </div>

          {/* Right Column: Device Cloud Showcase FLUSH TO THE RIGHT EDGE */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex justify-end">
            
            {/* Gray Backdrop Platform */}
            <div className="relative w-full lg:w-[105%] bg-[#E5E9F0] rounded-2xl lg:rounded-l-3xl lg:rounded-r-none p-4 sm:p-6 lg:p-7 h-[440px] sm:h-[480px] lg:h-[520px] overflow-hidden flex items-center justify-center shadow-inner">
              
              {/* Composition Container for Floating Devices */}
              <div className="relative w-full h-[400px] sm:h-[440px] lg:h-[470px]">
                
                {/* 1. Red Landscape Tablet (Top Left) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
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

                {/* 2. White/Silver Smartphone (Top Center-Right) */}
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
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

                {/* 3. Blue/Cyan Bezel Card (Top Right) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  whileHover={{ scale: 1.03, y: -3, transition: { duration: 0.2 } }}
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

                {/* 4. White Horizontal Card (Bottom Left) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
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

                {/* 5. Black Portrait Tablet (Bottom Center-Right) */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
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

                {/* 6. Purple Landscape Tablet (Bottom Right) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.2 } }}
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
