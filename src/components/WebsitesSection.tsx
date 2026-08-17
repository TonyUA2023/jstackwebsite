import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import homecleanImg from '../assets/experiencia/homeclean.png';
import parionaImg from '../assets/experiencia/pariona.png';
import wayraImg from '../assets/experiencia/wayra.png';

export const WebsitesSection: React.FC = () => {
  const { t, language } = useLanguage();

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#/contact';
    }
  };

  const websiteTypes = [
    {
      id: "landing",
      title: t.websites.landing.title,
      subtitle: t.websites.landing.subtitle,
      description: t.websites.landing.desc,
      image: homecleanImg,
      features: t.websites.landing.features,
      badge: "Landing Page"
    },
    {
      id: "corporate",
      title: t.websites.corporate.title,
      subtitle: t.websites.corporate.subtitle,
      description: t.websites.corporate.desc,
      image: parionaImg,
      features: t.websites.corporate.features,
      badge: "Corporate Website"
    },
    {
      id: "ecommerce",
      title: t.websites.ecommerce.title,
      subtitle: t.websites.ecommerce.subtitle,
      description: t.websites.ecommerce.desc,
      image: wayraImg,
      features: t.websites.ecommerce.features,
      badge: "E-Commerce"
    }
  ];

  return (
    <section id="websites" className="py-20 sm:py-28 bg-[#F8FAFC] text-[#0A192F] border-t border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.08]">
            {t.websites.title}
          </h2>
          
          <p className="text-base sm:text-lg lg:text-[20px] text-[#475569] leading-relaxed font-normal">
            {t.websites.subtitle}
          </p>
        </motion.div>

        {/* Website Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {websiteTypes.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 hover:border-[#D8202A] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img 
                    src={site.image} 
                    alt={site.title} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/95 text-slate-800 border border-slate-200 backdrop-blur-md shadow-xs">
                      {site.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A192F] leading-snug">{site.title}</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#D8202A] mt-1">{site.subtitle}</p>
                  </div>

                  <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                    {site.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      {language === 'es' ? 'Especificaciones Incluidas:' : 'Key Specifications Included:'}
                    </span>
                    <ul className="space-y-2.5">
                      {site.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs sm:text-[13px] font-medium text-[#0A192F]">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={handleContactClick}
                  className="w-full py-3.5 px-4 bg-slate-50 hover:bg-[#D8202A] text-slate-800 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-200 hover:border-[#D8202A] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.websites.requestBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
