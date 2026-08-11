import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import homecleanImg from '../assets/experiencia/homeclean.png';
import parionaImg from '../assets/experiencia/pariona.png';
import wayraImg from '../assets/experiencia/wayra.png';

export const WebsitesSection: React.FC = () => {
  const { t } = useLanguage();

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
    <section id="websites" className="py-20 bg-[#05070A] text-white border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Vertical Fade-In */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.websites.title}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.websites.subtitle}
          </p>
        </motion.div>

        {/* Website Options Grid with Staggered Vertical Fade-In */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {websiteTypes.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#0B0F17] border border-[#1E293B] hover:border-[#0284C7] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-52 overflow-hidden bg-[#05070A] border-b border-[#1E293B]">
                  <img 
                    src={site.image} 
                    alt={site.title} 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-[#05070A] text-white border border-[#1E293B]">
                      {site.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-extrabold text-white leading-snug">{site.title}</h3>
                  <p className="text-xs text-[#38BDF8] font-mono mt-1">{site.subtitle}</p>

                  <p className="mt-4 text-xs text-slate-300 leading-relaxed border-t border-[#1E293B] pt-4">
                    {site.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#1E293B]">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      Especificaciones Técnicas:
                    </span>
                    <ul className="space-y-2">
                      {site.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs font-medium text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="w-full py-3 bg-[#05070A] border border-[#1E293B] hover:bg-[#0284C7] hover:border-[#0284C7] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>{t.websites.requestBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
