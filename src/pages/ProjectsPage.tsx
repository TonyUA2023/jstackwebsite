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
  techStack: string[];
  metrics: {
    speed: string;
    growth: string;
  };
}

interface ProjectsPageProps {
  onNavigateHome: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleContactRoute = () => {
    window.location.hash = '#/contact';
  };

  const projects: ProjectItem[] = [
    {
      id: 'wayra',
      title: 'Wayra - Mobile Auto Detailing',
      category: 'mobile-detailing',
      categoryLabelEs: 'Mobile Auto Detailing · Seattle',
      categoryLabelEn: 'Mobile Auto Detailing · Seattle',
      location: 'Seattle, WA',
      clientDomain: 'wayradetailing.com',
      image: wayraImg,
      descriptionEs: 'Plataforma web de alta conversión para servicio de mobile auto detailing a domicilio en Seattle, con cotizador instantáneo y sistema de reservas online.',
      descriptionEn: 'High-converting web platform engineered for a premier mobile auto detailing business in Seattle, featuring instant quote pricing and online scheduling.',
      highlightsEs: ['Reservas en Línea en 3 Pasos', 'Carga Instantánea <0.3s', 'Cotizador por Tipo de Vehículo', 'SEO Local para Seattle'],
      highlightsEn: ['3-Step Online Booking', 'Sub-0.3s Instant Load', 'Vehicle-Based Price Estimator', 'Seattle Local SEO Optimization'],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      metrics: { speed: '100/100', growth: '+280%' }
    },
    {
      id: 'esmerald',
      title: 'Esmerald - Mobile Auto Detailing',
      category: 'mobile-detailing',
      categoryLabelEs: 'Mobile Auto Detailing · Seattle',
      categoryLabelEn: 'Mobile Auto Detailing · Seattle',
      location: 'Seattle, WA',
      clientDomain: 'esmeraldseattledetail.com',
      image: esmeraldImg,
      descriptionEs: 'Sitio web premium para servicio de mobile auto detailing, ceramic coating y corrección de pintura a domicilio en Seattle, optimizado para captación directa de clientes.',
      descriptionEn: 'Premier digital platform for a luxury mobile auto detailing and ceramic coating service in Seattle, crafted for high-ticket client acquisition.',
      highlightsEs: ['Estética Editorial de Lujo', 'Embudo de Ventas Directo', 'Integración WhatsApp Business', 'Posicionamiento Local Seattle'],
      highlightsEn: ['Luxury Editorial UI', 'Direct Conversion Funnel', 'WhatsApp Booking Sync', 'Seattle Local Search Dominance'],
      techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Brevo API'],
      metrics: { speed: '100/100', growth: '+220%' }
    },
    {
      id: 'pariona',
      title: 'Pariona Company - Mobile Detailing',
      category: 'mobile-detailing',
      categoryLabelEs: 'Mobile Detailing · Seattle',
      categoryLabelEn: 'Mobile Detailing · Seattle',
      location: 'Seattle, WA',
      clientDomain: 'parionacompany.com',
      image: parionaImg,
      descriptionEs: 'Plataforma web profesional para empresa de mobile detailing en Seattle, enfocada en agendamiento ágil y paquetes de servicio de detallado automotriz.',
      descriptionEn: 'Professional web platform for a Seattle-based mobile detailing company, focused on frictionless service scheduling and custom detailing packages.',
      highlightsEs: ['Agendamiento Móvil Rápido', 'Catálogo de Paquetes de Detallado', '100% Optimizado para Celulares', 'Carga <0.4s'],
      highlightsEn: ['Fast Mobile Scheduling', 'Detailing Package Showcase', '100% Mobile Responsive', '<0.4s Fast Load'],
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      metrics: { speed: '100/100', growth: '+190%' }
    },
    {
      id: 'manuelas',
      title: 'Manuelas - Bakery & Catering',
      category: 'bakery-catering',
      categoryLabelEs: 'Bakery & Catering · Seattle',
      categoryLabelEn: 'Bakery & Catering · Seattle',
      location: 'Seattle, WA',
      clientDomain: 'manuelasbakery.com',
      image: manuelasImg,
      descriptionEs: 'Sitio web interactivo para pastelería artesanal y servicio de catering en Seattle, con catálogo visual de productos, solicitud de catering para eventos y cotizador de pedidos.',
      descriptionEn: 'Interactive web experience for an artisanal bakery and event catering service in Seattle, featuring visual product catalogs and event catering quote requests.',
      highlightsEs: ['Catálogo de Pastelería & Menú', 'Solicitudes de Catering para Eventos', 'Diseño Visual Gastronómico', 'Cotizador de Pedidos'],
      highlightsEn: ['Artisanal Bakery & Menu Showcase', 'Event Catering Inquiry Funnel', 'High-Impact Gourmet UI', 'Custom Order Estimator'],
      techStack: ['React', 'Tailwind CSS', 'Vite', 'Cloudflare'],
      metrics: { speed: '100/100', growth: '+260%' }
    },
    {
      id: 'firma',
      title: 'Firma - Digital Marketing Agency',
      category: 'marketing-agency',
      categoryLabelEs: 'Agencia de Marketing · Seattle',
      categoryLabelEn: 'Digital Marketing Agency · Seattle',
      location: 'Seattle, WA',
      clientDomain: 'firmaagency.com',
      image: firmaImg,
      descriptionEs: 'Plataforma web institucional para agencia de marketing digital en Seattle, especializada en adquisición de clientes, estrategias de pauta publicitaria y diseño de marca.',
      descriptionEn: 'Institutional web platform for a Seattle digital marketing agency, specializing in customer acquisition, paid media strategy, and brand identity.',
      highlightsEs: ['Presentación de Servicios de Marketing', 'Formulario de Auditoría Gratuita', 'Arquitectura Limpia & Moderna', 'Alta Velocidad de Carga'],
      highlightsEn: ['Marketing Service Portfolio', 'Free Growth Audit Funnel', 'Clean Modern Architecture', 'High-Speed Page Delivery'],
      techStack: ['React', 'Vite', 'Tailwind CSS'],
      metrics: { speed: '100/100', growth: '+240%' }
    },
    {
      id: 'homeclean',
      title: 'Homeclean - Cleaning Services & Online Booking',
      category: 'services',
      categoryLabelEs: 'Servicios de Limpieza · Seattle',
      categoryLabelEn: 'Cleaning Services · Seattle',
      location: 'Seattle, WA',
      clientDomain: 'homecleanseattle.com',
      image: homecleanImg,
      descriptionEs: 'Plataforma de servicios de limpieza residencial y comercial en Seattle con cotizador de presupuestos en tiempo real y pasarela de agendamiento online ágil.',
      descriptionEn: 'Residential and commercial cleaning platform in Seattle featuring instant real-time price estimation and seamless online booking.',
      highlightsEs: ['Calculadora de Presupuestos', 'Agendamiento en 3 Pasos', 'Notificaciones Automáticas', 'Carga Instantánea'],
      highlightsEn: ['Instant Price Calculator', '3-Step Booking Engine', 'Automated Notifications', 'Instant Load'],
      techStack: ['React', 'Supabase', 'Tailwind CSS', 'Stripe'],
      metrics: { speed: '100/100', growth: '+340%' }
    },
    {
      id: 'tractoleo',
      title: 'Tractoleo - Industrial & Heavy Machinery Parts',
      category: 'industrial',
      categoryLabelEs: 'Maquinaria & Repuestos Industriales',
      categoryLabelEn: 'Heavy Machinery & Industrial Parts',
      location: 'Industrial Hub',
      clientDomain: 'tractoleo.com',
      image: tractoleoImg,
      descriptionEs: 'Portal digital para venta y distribución de maquinaria pesada y repuestos industriales con catálogo dinámico y cotizador automático de partes.',
      descriptionEn: 'Digital portal for heavy machinery sales and industrial parts distribution with dynamic cataloging and automated quote generator.',
      highlightsEs: ['Catálogo de Repuestos', 'Filtro Dinámico de Partes', 'Cotizador en 1 Clic', 'Base de Datos de Alto Volumen'],
      highlightsEn: ['Industrial Parts Catalog', 'Dynamic Part Filtering', '1-Click Quote Engine', 'High-Volume Database'],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
      metrics: { speed: '99/100', growth: '+310%' }
    }
  ];

  return (
    <div className="bg-white text-[#0A192F] min-h-screen">
      
      {/* 1. Dedicated Projects Hero Section */}
      <section className="pt-8 sm:pt-10 pb-12 sm:pb-16 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-6 right-10 w-72 h-48 bg-dot-matrix opacity-35 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-6">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#D8202A] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-400 font-bold">›</span>
            <span className="text-[#0A192F] font-bold">Projects</span>
          </div>

          {/* Left-Aligned Headline & Intro */}
          <div className="max-w-4xl space-y-5 text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.06]"
            >
              Our Work & <br />
              <span className="text-[#D8202A]">High-Performance</span> <br />
              Projects
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-[20px] text-[#475569] leading-relaxed font-normal max-w-2xl pt-1"
            >
              {language === 'es'
                ? 'Explora nuestro portafolio de arquitecturas web hand-coded, plataformas de servicios y soluciones de comercio electrónico diseñadas a medida para negocios en Seattle y mercados internacionales.'
                : 'Explore our portfolio of hand-coded web architectures, booking engines, and commercial platforms crafted for businesses in Seattle and global markets.'}
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="pt-2"
            >
              <button
                onClick={handleContactRoute}
                className="px-9 py-4 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-[15px] sm:text-[16px] rounded-md transition-all inline-flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>{language === 'es' ? 'Cotizar Tu Proyecto Web' : 'Start a Project With Us'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 2. Direct Projects Grid */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white border border-slate-200 hover:border-[#D8202A] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Clean Image Container */}
                  <div 
                    className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Clean Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0A192F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                        className="px-5 py-2.5 bg-[#D8202A] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-1.5 shadow-lg cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{language === 'es' ? 'Ver Detalles' : 'View Case Study'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-3 text-left">
                    <div className="text-[11px] font-bold text-[#D8202A] uppercase tracking-wider">
                      {language === 'es' ? project.categoryLabelEs : project.categoryLabelEn}
                    </div>

                    <h3 className="text-xl font-bold text-[#0A192F] group-hover:text-[#D8202A] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed line-clamp-3 font-normal">
                      {language === 'es' ? project.descriptionEs : project.descriptionEn}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[11px] font-mono font-bold rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Bar */}
                    <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-[#D8202A]" />
                        <div>
                          <span className="text-[10px] font-bold uppercase text-slate-400 block leading-none">Google Speed</span>
                          <span className="text-sm font-bold text-[#0A192F] mt-0.5 block">{project.metrics.speed}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <div>
                          <span className="text-[10px] font-bold uppercase text-slate-400 block leading-none">
                            {language === 'es' ? 'Crecimiento' : 'Traffic Growth'}
                          </span>
                          <span className="text-sm font-bold text-emerald-600 mt-0.5 block">{project.metrics.growth}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={handleContactRoute}
                    className="w-full py-3.5 px-4 bg-slate-50 hover:bg-[#D8202A] text-slate-800 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-200 hover:border-[#D8202A] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{language === 'es' ? 'Cotizar Proyecto Similar' : 'Request Similar Build'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Bottom Consultation Banner */}
      <section className="py-20 bg-white text-[#0A192F]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0A192F] tracking-tight font-sans">
              {language === 'es' ? '¿Listo para Desarrollar Tu Próximo Proyecto?' : 'Ready to Engineer Your Next High-Impact Project?'}
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              {language === 'es'
                ? 'Analizamos tus requerimientos técnicos y presentamos un plan de entrega y propuesta en menos de 2 horas.'
                : 'We evaluate your technical requirements and deliver a comprehensive proposal and delivery schedule within 2 hours.'}
            </p>
            <div className="pt-2">
              <button
                onClick={handleContactRoute}
                className="px-10 py-4 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-[16px] rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                {language === 'es' ? 'Solicitar Cotización Inmediata' : 'Get Instant Technical Estimate'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-8 text-[#0A192F]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 bg-white/90 hover:bg-slate-100 text-slate-700 rounded-full border border-slate-200 transition-colors cursor-pointer absolute top-4 right-4 z-10"
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

              {/* Modal Content */}
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
                    {language === 'es' ? 'Resultados & Características de Ingeniería:' : 'Key Engineering Features & Deliverables:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(language === 'es' ? selectedProject.highlightsEs : selectedProject.highlightsEn).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#0A192F] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-mono">
                    {language === 'es' ? 'Ubicación:' : 'Location:'} <span className="font-bold text-[#0A192F]">{selectedProject.location}</span>
                  </div>

                  <button
                    onClick={() => { setSelectedProject(null); handleContactRoute(); }}
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

    </div>
  );
};
