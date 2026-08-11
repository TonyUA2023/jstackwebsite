import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, X, CheckCircle2, Eye, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import esmeraldImg from '../assets/experiencia/esmerald.png';
import firmaImg from '../assets/experiencia/firma.png';
import homecleanImg from '../assets/experiencia/homeclean.png';
import manuelasImg from '../assets/experiencia/manuelas.png';
import parionaImg from '../assets/experiencia/pariona.png';
import tractoleoImg from '../assets/experiencia/tractoleo.png';
import wayraImg from '../assets/experiencia/wayra.png';

interface ProjectItem {
  id: string;
  title: string;
  category: 'corporate' | 'services' | 'tech' | 'gourmet';
  categoryLabelEn: string;
  categoryLabelEs: string;
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
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'wayra',
      title: 'Wayra - Tech Hub & Innovation',
      category: 'tech',
      categoryLabelEs: 'Tech & Innovación',
      categoryLabelEn: 'Tech & Innovation',
      clientDomain: 'wayra.pe',
      image: wayraImg,
      descriptionEs: 'Plataforma web de alta tecnología diseñada para startup hub de innovación con carga instantánea y arquitectura modular moderna.',
      descriptionEn: 'High-tech web platform engineered for an innovation startup hub with instant load times and modern modular architecture.',
      highlightsEs: ['Diseño Ultra Fluido', 'Carga Instantánea <0.3s', 'Estructura Modular React'],
      highlightsEn: ['Ultra-Fluid UI', 'Instant Load <0.3s', 'React Modular Architecture'],
      metrics: { speed: '100/100', growth: '+280%' }
    },
    {
      id: 'esmerald',
      title: 'Esmerald - Luxury & Corporate Brand',
      category: 'corporate',
      categoryLabelEs: 'Marca de Lujo & Corporativo',
      categoryLabelEn: 'Luxury Brand & Corporate',
      clientDomain: 'esmerald.pe',
      image: esmeraldImg,
      descriptionEs: 'Sitio web corporativo de lujo con estética visual premium, tipografía exclusiva e interacciones fluidas para capturar clientes de alto valor.',
      descriptionEn: 'High-end corporate website featuring premium aesthetics, bespoke typography, and smooth micro-interactions to capture high-ticket clients.',
      highlightsEs: ['Estética Premium', 'Optimización SEO Avanzada', 'Experiencia Responsiva'],
      highlightsEn: ['Premium Aesthetics', 'Advanced SEO Suite', 'Fluid Responsive UX'],
      metrics: { speed: '100/100', growth: '+310%' }
    },
    {
      id: 'pariona',
      title: 'Estudio Pariona - Corporate Legal Firm',
      category: 'corporate',
      categoryLabelEs: 'Firma Legal & Corporativo',
      categoryLabelEn: 'Corporate Legal Firm',
      clientDomain: 'estudiopariona.pe',
      image: parionaImg,
      descriptionEs: 'Plataforma digital corporativa para firma de abogados especializada en derecho empresarial y consultoría legal de alto nivel.',
      descriptionEn: 'Corporate digital portal for a premier law firm specializing in corporate law, business advisory, and legal consulting.',
      highlightsEs: ['Estructura de Alta Confianza', 'Formularios de Consulta Seguros', 'Certificación Google Speed'],
      highlightsEn: ['High-Trust Architecture', 'Secure Consultation Forms', 'Google Speed Certified'],
      metrics: { speed: '99/100', growth: '+220%' }
    },
    {
      id: 'homeclean',
      title: 'Homeclean - Professional Cleaning Services',
      category: 'services',
      categoryLabelEs: 'Servicios & Operaciones',
      categoryLabelEn: 'Services & Maintenance',
      clientDomain: 'homeclean.pe',
      image: homecleanImg,
      descriptionEs: 'Sitio web de generación de prospectos e integración directa con WhatsApp para servicios de mantenimiento y limpieza empresarial.',
      descriptionEn: 'High-converting lead generation website with instant WhatsApp and CRM integration for professional maintenance services.',
      highlightsEs: ['Integración WhatsApp Directo', 'Cotizador en Línea', 'Embudo de Ventas Rápido'],
      highlightsEn: ['Instant WhatsApp Integration', 'Online Quote Engine', 'Fast Sales Funnel'],
      metrics: { speed: '100/100', growth: '+350%' }
    },
    {
      id: 'tractoleo',
      title: 'Tractoleo - Industrial Solutions & Machinery',
      category: 'services',
      categoryLabelEs: 'Sector Industrial & Maquinaria',
      categoryLabelEn: 'Industrial & Heavy Machinery',
      clientDomain: 'tractoleo.com',
      image: tractoleoImg,
      descriptionEs: 'Portal web industrial con catálogo interactivo de repuestos, maquinaria pesada y servicios para el sector minero e industrial.',
      descriptionEn: 'Industrial portal featuring an interactive catalog of machinery parts, heavy equipment, and mining services.',
      highlightsEs: ['Catálogo Interactivo', 'Carga de Imágenes Optimizada', 'Formulario de Cotización'],
      highlightsEn: ['Interactive Parts Catalog', 'Optimized Heavy Media Load', 'RFQ Quote Form'],
      metrics: { speed: '98/100', growth: '+190%' }
    },
    {
      id: 'manuelas',
      title: 'Manuelas - Gourmet Dining Experience',
      category: 'gourmet',
      categoryLabelEs: 'Gastronomía & Experiencias',
      categoryLabelEn: 'Gourmet & Hospitality',
      clientDomain: 'manuelas.pe',
      image: manuelasImg,
      descriptionEs: 'Sitio web interactivo de marca gastronómica con menú digital, sistema de reservas y fotografía atractiva optimizada para conversión.',
      descriptionEn: 'Interactive gourmet brand website featuring digital menu browsing, reservation funnel, and conversion-optimized imagery.',
      highlightsEs: ['Menú Digital Interactivo', 'Reservas en Tiempo Real', 'Diseño de Marca Exclusivo'],
      highlightsEn: ['Interactive Digital Menu', 'Real-Time Reservation Engine', 'Bespoke Branding'],
      metrics: { speed: '100/100', growth: '+260%' }
    },
    {
      id: 'firma',
      title: 'Firma Contable - Accounting & Business Advisory',
      category: 'corporate',
      categoryLabelEs: 'Firma Contable & Financiera',
      categoryLabelEn: 'Accounting & Financial Firm',
      clientDomain: 'firmacontable.pe',
      image: firmaImg,
      descriptionEs: 'Sitio web institucional para estudio de contabilidad y auditoría empresarial enfocado en proyectar solvencia, orden y profesionalismo.',
      descriptionEn: 'Institutional website for an accounting and corporate audit firm focused on projecting authority, trust, and financial stability.',
      highlightsEs: ['Proyección de Solvencia', 'Sección de Consultas', '100% Código Propio'],
      highlightsEn: ['Authority Architecture', 'Inquiry Engine', '100% Custom Code'],
      metrics: { speed: '100/100', growth: '+240%' }
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-[#070A10] text-white border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.gallery.title}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: t.gallery.allFilter },
            { id: 'corporate', label: t.gallery.corporateFilter },
            { id: 'services', label: t.gallery.servicesFilter },
            { id: 'tech', label: t.gallery.techFilter },
            { id: 'gourmet', label: t.gallery.gourmetFilter },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-mono font-bold transition-all border ${
                activeFilter === tab.id
                  ? 'bg-[#0284C7] text-white border-[#38BDF8]'
                  : 'bg-[#0B0F17] text-slate-400 border-[#1E293B] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 7-Project Responsive Showcase Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B0F17] border border-[#1E293B] hover:border-[#0284C7] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Screenshot Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#05070A] cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-[#05070A] text-white border border-[#1E293B]">
                      {language === 'en' ? project.categoryLabelEn : project.categoryLabelEs}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6">
                  <h3 className="text-base font-extrabold text-white">
                    {project.title}
                  </h3>
                  
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed border-t border-[#1E293B] pt-3">
                    {language === 'en' ? project.descriptionEn : project.descriptionEs}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#1E293B] flex flex-wrap gap-1.5">
                    {(language === 'en' ? project.highlightsEn : project.highlightsEs).map(h => (
                      <span key={h} className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#05070A] text-slate-300 border border-[#1E293B]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="w-full py-2.5 px-4 bg-[#1E293B] hover:bg-[#0284C7] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-[#334155]"
                >
                  <span>{t.gallery.requestSimilarBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA Below Showcase */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors border border-[#38BDF8]/30 shadow-md"
          >
            <span>{t.gallery.globalCta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Lightbox / Modal for Full Project View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05070A]/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-[#0B0F17] text-white border border-[#1E293B] my-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header Bar */}
              <div className="bg-[#05070A] text-white px-5 py-3 flex items-center justify-between border-b border-[#1E293B]">
                <span className="font-mono text-xs font-bold text-slate-300">{selectedProject.clientDomain}</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                <div className="border border-[#1E293B] bg-[#05070A]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover max-h-[500px] object-top"
                  />
                </div>

                <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-[#0284C7] text-white border border-[#38BDF8]/30">
                      {language === 'en' ? selectedProject.categoryLabelEn : selectedProject.categoryLabelEs}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-2">
                      {selectedProject.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {language === 'en' ? selectedProject.descriptionEn : selectedProject.descriptionEs}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-[#38BDF8]/30"
                    >
                      <span>{t.gallery.modalQuoteBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="mt-6 pt-6 border-t border-[#1E293B] grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(language === 'en' ? selectedProject.highlightsEn : selectedProject.highlightsEs).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-[#05070A] border border-[#1E293B]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs font-mono font-bold text-slate-200">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
