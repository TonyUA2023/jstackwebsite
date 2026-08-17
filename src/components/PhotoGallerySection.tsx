import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Eye, Gauge, TrendingUp, X, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import wayraImg from '../assets/experiencia/wayra.png';
import esmeraldImg from '../assets/experiencia/esmerald.png';
import parionaImg from '../assets/experiencia/pariona.png';
import manuelasImg from '../assets/experiencia/manuelas.png';
import firmaImg from '../assets/experiencia/firma.png';
import homecleanImg from '../assets/experiencia/homeclean.png';
import tractoleoImg from '../assets/experiencia/tractoleo.png';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryLabelEn: string;
  categoryLabelEs: string;
  location: string;
  clientDomain: string;
  image: string;
  descriptionEs: string;
  descriptionEn: string;
  highlightsEs: string[];
  highlightsEn: string[];
  metrics: {
    speed: string;
    growth: string;
  };
}

export const PhotoGallerySection: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#/contact';
    }
  };

  const projects: ProjectItem[] = [
    {
      id: 'wayra',
      title: 'Wayra - Mobile Auto Detailing',
      category: 'detailing',
      categoryLabelEs: 'Mobile Auto Detailing · Seattle',
      categoryLabelEn: 'Mobile Auto Detailing · Seattle',
      location: 'Seattle, WA',
      clientDomain: 'wayradetailing.com',
      image: wayraImg,
      descriptionEs: 'Plataforma web de alta conversión para servicio de mobile auto detailing a domicilio en Seattle, con cotizador instantáneo y sistema de reservas online.',
      descriptionEn: 'High-converting web platform engineered for a premier mobile auto detailing business in Seattle, featuring instant quote pricing and online scheduling.',
      highlightsEs: ['Reservas en Línea en 3 Pasos', 'Carga Instantánea <0.3s', 'Cotizador por Tipo de Vehículo'],
      highlightsEn: ['3-Step Online Booking', 'Sub-0.3s Instant Load', 'Vehicle-Based Price Estimator'],
      metrics: { speed: '100/100', growth: '+280%' }
    },
    {
      id: 'esmerald',
      title: 'Esmerald - Mobile Auto Detailing',
      category: 'detailing',
      categoryLabelEs: 'Mobile Auto Detailing · Seattle',
      categoryLabelEn: 'Mobile Auto Detailing · Seattle',
      location: 'Seattle, WA',
      clientDomain: 'esmeraldseattledetail.com',
      image: esmeraldImg,
      descriptionEs: 'Sitio web premium para servicio de mobile auto detailing, ceramic coating y corrección de pintura a domicilio en Seattle, optimizado para captación de clientes.',
      descriptionEn: 'Premier digital platform for a luxury mobile auto detailing and ceramic coating service in Seattle, crafted for high-ticket client acquisition.',
      highlightsEs: ['Estética Editorial de Lujo', 'Embudo de Ventas Directo', 'Integración WhatsApp Business'],
      highlightsEn: ['Luxury Editorial UI', 'Direct Conversion Funnel', 'WhatsApp Booking Sync'],
      metrics: { speed: '100/100', growth: '+310%' }
    },
    {
      id: 'pariona',
      title: 'Pariona Company - Mobile Detailing',
      category: 'detailing',
      categoryLabelEs: 'Mobile Detailing · Seattle',
      categoryLabelEn: 'Mobile Detailing · Seattle',
      location: 'Seattle, WA',
      clientDomain: 'parionacompany.com',
      image: parionaImg,
      descriptionEs: 'Plataforma web profesional para empresa de mobile detailing en Seattle, enfocada en agendamiento ágil y paquetes de detallado automotriz.',
      descriptionEn: 'Professional web platform for a Seattle-based mobile detailing company, focused on frictionless service scheduling and custom detailing packages.',
      highlightsEs: ['Agendamiento Móvil Rápido', 'Catálogo de Paquetes', '100% Optimizado para Celulares'],
      highlightsEn: ['Fast Mobile Scheduling', 'Detailing Package Showcase', '100% Mobile Responsive'],
      metrics: { speed: '100/100', growth: '+220%' }
    },
    {
      id: 'manuelas',
      title: 'Manuelas - Bakery & Catering',
      category: 'bakery',
      categoryLabelEs: 'Bakery & Catering · Seattle',
      categoryLabelEn: 'Bakery & Catering · Seattle',
      location: 'Seattle, WA',
      clientDomain: 'manuelasbakery.com',
      image: manuelasImg,
      descriptionEs: 'Sitio web interactivo para pastelería artesanal y servicio de catering en Seattle, con catálogo visual de productos y cotizador de eventos.',
      descriptionEn: 'Interactive web experience for an artisanal bakery and event catering service in Seattle, featuring visual product catalogs and event catering quote requests.',
      highlightsEs: ['Catálogo de Pastelería & Menú', 'Solicitudes de Catering para Eventos', 'Diseño Visual Gastronómico'],
      highlightsEn: ['Artisanal Bakery & Menu Showcase', 'Event Catering Inquiry Funnel', 'High-Impact Gourmet UI'],
      metrics: { speed: '100/100', growth: '+260%' }
    },
    {
      id: 'firma',
      title: 'Firma - Digital Marketing Agency',
      category: 'marketing',
      categoryLabelEs: 'Agencia de Marketing · Seattle',
      categoryLabelEn: 'Digital Marketing Agency · Seattle',
      location: 'Seattle, WA',
      clientDomain: 'firmaagency.com',
      image: firmaImg,
      descriptionEs: 'Plataforma web institucional para agencia de marketing digital en Seattle, especializada en adquisición de clientes, estrategias de pauta y diseño de marca.',
      descriptionEn: 'Institutional web platform for a Seattle digital marketing agency, specializing in customer acquisition, paid media strategy, and brand identity.',
      highlightsEs: ['Presentación de Servicios de Marketing', 'Formulario de Auditoría Gratuita', 'Arquitectura Limpia & Moderna'],
      highlightsEn: ['Marketing Service Portfolio', 'Free Growth Audit Funnel', 'Clean Modern Architecture'],
      metrics: { speed: '100/100', growth: '+240%' }
    },
    {
      id: 'homeclean',
      title: 'Homeclean - Cleaning Services & Booking',
      category: 'services',
      categoryLabelEs: 'Servicios de Limpieza · Seattle',
      categoryLabelEn: 'Cleaning Services · Seattle',
      location: 'Seattle, WA',
      clientDomain: 'homecleanseattle.com',
      image: homecleanImg,
      descriptionEs: 'Plataforma de servicios de limpieza residencial y comercial en Seattle con cotizador de presupuestos en tiempo real y reserva online.',
      descriptionEn: 'Residential and commercial cleaning platform in Seattle featuring instant real-time price estimation and seamless online booking.',
      highlightsEs: ['Calculadora de Presupuestos', 'Agendamiento en 3 Pasos', 'Notificaciones Automáticas'],
      highlightsEn: ['Instant Price Calculator', '3-Step Booking Engine', 'Automated Notifications'],
      metrics: { speed: '100/100', growth: '+350%' }
    },
    {
      id: 'tractoleo',
      title: 'Tractoleo - Heavy Machinery & Parts',
      category: 'industrial',
      categoryLabelEs: 'Maquinaria & Repuestos Industriales',
      categoryLabelEn: 'Heavy Machinery & Industrial Parts',
      location: 'Industrial Hub',
      clientDomain: 'tractoleo.com',
      image: tractoleoImg,
      descriptionEs: 'Portal digital para venta y distribución de maquinaria pesada y repuestos industriales con catálogo dinámico y cotizador automático de partes.',
      descriptionEn: 'Digital portal for heavy machinery sales and industrial parts distribution with dynamic cataloging and automated quote generator.',
      highlightsEs: ['Catálogo de Repuestos', 'Filtro Dinámico de Partes', 'Cotizador en 1 Clic'],
      highlightsEn: ['Industrial Parts Catalog', 'Dynamic Part Filtering', '1-Click Quote Engine'],
      metrics: { speed: '99/100', growth: '+190%' }
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white text-[#0A192F] border-t border-b border-slate-200/80 relative overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-[50px] xl:text-[56px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.08]">
            {t.gallery.title}
          </h2>

          <p className="text-lg sm:text-xl lg:text-[21px] text-[#475569] leading-relaxed font-normal">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white border border-slate-200 hover:border-[#D8202A] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay with View Action */}
                  <div className="absolute inset-0 bg-[#0A192F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                      className="px-5 py-2.5 bg-[#D8202A] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-1.5 shadow-lg cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{t.gallery.viewProjectBtn}</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 text-left space-y-2.5">
                  <div className="text-[11px] font-bold text-[#D8202A] uppercase tracking-wider">
                    {language === 'es' ? project.categoryLabelEs : project.categoryLabelEn}
                  </div>

                  <h3 className="text-xl font-bold text-[#0A192F] group-hover:text-[#D8202A] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed line-clamp-2 font-normal">
                    {language === 'es' ? project.descriptionEs : project.descriptionEn}
                  </p>

                  {/* Metrics Bar */}
                  <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-[#D8202A]" />
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 block leading-none">{t.gallery.speedMetricLabel}</span>
                        <span className="text-sm font-bold text-[#0A192F] mt-0.5 block">{project.metrics.speed}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 block leading-none">{t.gallery.growthMetricLabel}</span>
                        <span className="text-sm font-bold text-emerald-600 mt-0.5 block">{project.metrics.growth}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={handleContactClick}
                  className="w-full py-3 px-4 bg-slate-50 hover:bg-[#D8202A] text-slate-800 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-200 hover:border-[#D8202A] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.gallery.requestSimilarBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-8 text-[#0A192F]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-slate-100 text-slate-700 rounded-full border border-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] bg-slate-100 border-b border-slate-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 text-left">
                <div>
                  <span className="text-xs font-bold text-[#D8202A] uppercase tracking-wider block mb-1">
                    {language === 'es' ? selectedProject.categoryLabelEs : selectedProject.categoryLabelEn}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0A192F] font-sans">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  {language === 'es' ? selectedProject.descriptionEs : selectedProject.descriptionEn}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    {language === 'es' ? 'Resultados & Especificaciones Técnicas:' : 'Key Engineering Features & Deliverables:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(language === 'es' ? selectedProject.highlightsEs : selectedProject.highlightsEn).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#0A192F] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-mono">
                    {language === 'es' ? 'Ubicación:' : 'Location:'} <span className="font-bold text-[#0A192F]">{selectedProject.location}</span>
                  </div>

                  <button
                    onClick={() => { setSelectedProject(null); handleContactClick(); }}
                    className="w-full sm:w-auto px-7 py-3 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-md cursor-pointer"
                  >
                    {language === 'es' ? 'Cotizar Proyecto Similar' : 'Request Similar Project'}
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
