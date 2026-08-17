import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  Car, 
  UtensilsCrossed, 
  TrendingUp, 
  Wrench, 
  Sparkles, 
  Scale 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ContactSection } from '../components/ContactSection';

import fotoTony from '../assets/seo/foto.png';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
  </svg>
);

interface AboutPageProps {
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();

  const industries = [
    {
      icon: Car,
      titleEs: 'Automotriz & Mobile Detailing',
      titleEn: 'Automotive & Mobile Detailing',
      descEs: 'Plataformas con cotizador por tamaño de vehículo, embudos de agendamiento y SEO local para negocios de detallado móvil en Seattle y USA.',
      descEn: 'High-converting booking engines with vehicle-size price calculators and local SEO for mobile detailing operators.'
    },
    {
      icon: UtensilsCrossed,
      titleEs: 'Bakery, Gastronomía & Catering',
      titleEn: 'Bakery, Gourmet & Catering',
      descEs: 'Menús digitales interactivos, cotizadores de catering para eventos y sistemas de pedidos optimizados para celular.',
      descEn: 'Interactive digital menus, event catering quote funnels, and frictionless mobile order placement.'
    },
    {
      icon: TrendingUp,
      titleEs: 'Agencias de Marketing & Creativas',
      titleEn: 'Marketing & Creative Agencies',
      descEs: 'Sitios institucionales de alta autoridad con formularios de auditoría, presentación de casos de éxito y carga instantánea.',
      descEn: 'High-authority agency portfolios with free audit funnels, client case study showcases, and sub-second load times.'
    },
    {
      icon: Wrench,
      titleEs: 'Industria, Maquinaria & Repuestos',
      titleEn: 'Industrial, Machinery & Parts',
      descEs: 'Catálogos pesados de alto volumen con filtrado dinámico de componentes y cotizaciones automáticas en 1 clic.',
      descEn: 'High-volume industrial parts catalogs with dynamic faceted filtering and instant 1-click RFQ quote generation.'
    },
    {
      icon: Sparkles,
      titleEs: 'Servicios Residenciales & Limpieza',
      titleEn: 'Residential & Commercial Cleaning',
      descEs: 'Calculadoras de tarifas en tiempo real, agendamiento en 3 pasos y notificaciones instantáneas de servicio.',
      descEn: 'Real-time square footage calculators, 3-step booking flows, and instant SMS/email dispatch alerts.'
    },
    {
      icon: Scale,
      titleEs: 'Servicios Corporativos & Legales',
      titleEn: 'Corporate & Legal Advisory',
      descEs: 'Presencia institucional de máxima solvencia con formularios seguros, directorios profesionales y agendamiento.',
      descEn: 'High-trust institutional platforms with secure consultation intake, attorney directories, and direct calendar sync.'
    }
  ];

  return (
    <div className="bg-white text-[#0A192F] min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-white border-b border-slate-100 relative overflow-hidden">
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
            <span className="text-[#0A192F] font-bold">About</span>
          </div>

          <div className="max-w-4xl space-y-6 text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.06]"
            >
              {language === 'es' ? (
                <>
                  Ingeniería de Software & <br />
                  <span className="text-[#D8202A]">Arquitectura con IA</span> para Escalar Negocios
                </>
              ) : (
                <>
                  Software Engineering & <br />
                  <span className="text-[#D8202A]">AI Architecture</span> Built to Scale
                </>
              )}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-[20px] text-[#475569] leading-relaxed font-normal max-w-3xl"
            >
              {language === 'es'
                ? 'En JSTACK Digital Solutions combinamos rigor en ingeniería de sistemas, desarrollo web hand-coded y automatizaciones inteligentes para transformar empresas. Con más de 3 años de trayectoria, atendemos clientes en Seattle, Boston, Lima y mercados globales con garantía de velocidad 100/100 en Google.'
                : 'At JSTACK Digital Solutions, we combine systems engineering rigor, bespoke hand-coded development, and intelligent AI automations to transform enterprises. With over 3 years of proven track record, we serve clients in Seattle, Boston, Lima, and global markets.'}
            </motion.p>
          </div>

        </div>
      </section>

      {/* 2. Liderazgo Técnico y Dirección de Proyectos (Tony Ulloa) */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Foto del Fundador / Director de Ingeniería */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[460px] bg-white rounded-3xl p-4 sm:p-5 shadow-xl border border-slate-200">
                <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-900 aspect-[4/5]">
                  <img 
                    src={fotoTony} 
                    alt="Tony Ulloa - Lead Systems Engineer & AI Architect" 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/85 to-transparent p-6 text-white text-left">
                    <span className="text-xs font-bold text-[#D8202A] uppercase tracking-wider block mb-1">
                      {language === 'es' ? 'Fundador & Director de Ingeniería' : 'Founder & Lead Systems Engineer'}
                    </span>
                    <h3 className="text-2xl font-bold font-sans">Tony Ulloa</h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {language === 'es' ? 'Ingeniero de Sistemas' : 'Systems Engineer'}
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 flex items-center justify-between px-2 text-xs font-bold text-slate-600">
                  <span>{language === 'es' ? 'Conectar Directamente:' : 'Connect Directly:'}</span>
                  <div className="flex items-center gap-3">
                    <a 
                      href="https://www.linkedin.com/in/tony-ulloa-662a5618b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-100 hover:bg-[#0A192F] hover:text-white rounded-lg transition-colors flex items-center justify-center"
                      title="LinkedIn"
                    >
                      <LinkedinIcon />
                    </a>
                    <a 
                      href="https://www.facebook.com/JstackDigitalSolutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-100 hover:bg-[#0A192F] hover:text-white rounded-lg transition-colors flex items-center justify-center"
                      title="Facebook"
                    >
                      <FacebookIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrativa Descriptiva Profunda de Liderazgo y Filosofía Técnica */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.12]">
                {language === 'es'
                  ? 'Ingeniería Rigurosa, Cero Plantillas y Control Absoluto del Código'
                  : 'Engineering Rigor, Zero Templates, and Complete Code Ownership'}
              </h2>

              <div className="space-y-4 text-base sm:text-[17px] text-[#475569] leading-relaxed font-normal">
                {language === 'es' ? (
                  <>
                    <p>
                      Fundada y dirigida por <strong>Tony Ulloa</strong> (Ingeniero de Sistemas), <strong>JSTACK Digital Solutions</strong> nació con una premisa inquebrantable: erradicar las soluciones web genéricas y lentas, sustituyéndolas por arquitecturas de software de nivel industrial diseñadas para generar resultados comerciales tangibles.
                    </p>
                    
                    <p>
                      Como Director de Proyectos e Ingeniero de Sistemas especializado en Arquitectura Cloud e Inteligencia Artificial, Tony lidera personalmente el diseño estructural y la supervisión de cada desarrollo. Esto garantiza que cada línea de código en <strong>React, Next.js y TypeScript</strong> cumpla con estrictos estándares de ciberseguridad, tiempos de respuesta inferiores a 0.3 segundos y compatibilidad total con pasarelas de pago y sistemas empresariales.
                    </p>

                    <p>
                      A diferencia de agencias convencionales que delegan o usan plantillas sobrecargadas, en JSTACK asumimos una responsabilidad técnica directa con cada cliente en Seattle, Boston, Lima y el resto del mundo, entregando plataformas escalables, con código 100% propio y propiedad intelectual transferida en su totalidad.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Founded and directed by <strong>Tony Ulloa</strong> (Systems Engineer), <strong>JSTACK Digital Solutions</strong> was established on a firm foundation: eliminating bloated, sluggish website templates and replacing them with industrial-grade software architectures engineered for measurable commercial ROI.
                    </p>
                    
                    <p>
                      As Project Director and Systems Engineer specializing in Cloud Architecture and AI Workflows, Tony personally leads the architectural blueprint and rigorous review of every codebase. This ensures that every line of <strong>React, Next.js, and TypeScript</strong> code adheres to strict cybersecurity standards, sub-0.3 second response times, and seamless API integrations.
                    </p>

                    <p>
                      Unlike traditional marketing agencies that outsource to generic page builders, JSTACK takes direct technical accountability for businesses in Seattle, Boston, Lima, and global markets—delivering high-performance platforms with 100% intellectual property transfer.
                    </p>
                  </>
                )}
              </div>

              {/* Pilares Clave de Compromiso */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {(language === 'es' ? [
                  'Supervisión directa por Ingeniero de Sistemas',
                  'Garantía de rendimiento 100/100 en Google Core Web Vitals',
                  'Código 100% propio entregado con propiedad total',
                  'Soporte técnico continuo y acuerdos de nivel de servicio (SLA)'
                ] : [
                  'Direct supervision by Systems Engineer',
                  'Guaranteed 100/100 Google Core Web Vitals score',
                  '100% bespoke source code with complete ownership',
                  'Continuous SLA monitoring and priority technical support'
                ]).map((pilar, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0A192F] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#D8202A] shrink-0 mt-0.5" />
                    <span>{pilar}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Industries Served Section */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.08]">
              {language === 'es' ? (
                <>
                  Industrias en las que <br />
                  <span className="text-[#D8202A]">Marcamos la Diferencia</span>
                </>
              ) : (
                <>
                  Industries <br />
                  <span className="text-[#D8202A]">We Specialize In</span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg lg:text-[20px] text-[#475569] leading-relaxed font-normal">
              {language === 'es'
                ? 'Desarrollamos soluciones adaptadas a las dinámicas de conversión y requerimientos específicos de cada sector empresarial.'
                : 'Custom-tailored web platforms and conversion funnels engineered specifically for your vertical.'}
            </p>
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="bg-[#F8FAFC] border border-slate-200/90 hover:border-[#D8202A] p-7 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl group text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 group-hover:border-[#D8202A]/40 flex items-center justify-center text-[#0A192F] group-hover:text-[#D8202A] transition-colors mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0A192F] group-hover:text-[#D8202A] transition-colors mb-3">
                    {language === 'es' ? ind.titleEs : ind.titleEn}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                    {language === 'es' ? ind.descEs : ind.descEn}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Misión & Visión Section */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            
            {/* Misión Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0A192F] text-white p-8 sm:p-12 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl relative overflow-hidden text-left"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#D8202A]">
                  <Target className="w-6 h-6" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight">
                  {language === 'es' ? 'Nuestra Misión' : 'Our Mission'}
                </h3>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  {language === 'es'
                    ? 'Desarrollar plataformas web hand-coded de alto rendimiento, arquitecturas cloud ultrarrápidas y automatizaciones con inteligencia artificial que potencien la credibilidad, multipliquen la captación de prospectos y generen ingresos medibles para cada cliente.'
                    : 'To build bespoke hand-coded web architectures, ultra-fast cloud platforms, and AI-driven automation workflows that maximize commercial revenue, brand authority, and client retention.'}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-2.5">
                {(language === 'es' ? [
                  '100% Código Propio (Zero Bloatware)',
                  'Garantía 100/100 Google PageSpeed',
                  'Entrega Total del Código Fuente'
                ] : [
                  '100% Bespoke Code (Zero Bloatware)',
                  '100/100 Google PageSpeed Guarantee',
                  'Complete Source Code Ownership Transfer'
                ]).map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D8202A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visión Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white text-[#0A192F] border border-slate-200 p-8 sm:p-12 rounded-3xl space-y-6 flex flex-col justify-between shadow-xs text-left"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0A192F] shadow-xs">
                  <Eye className="w-6 h-6 text-[#D8202A]" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-[#0A192F] font-sans tracking-tight">
                  {language === 'es' ? 'Nuestra Visión' : 'Our Vision'}
                </h3>

                <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
                  {language === 'es'
                    ? 'Consolidarnos como la agencia de ingeniería digital e inteligencia artificial de referencia internacional, reconocida por fijar el estándar de velocidad, excelencia en código y automatización inteligente para empresas en Estados Unidos, Latinoamérica y Europa.'
                    : 'To become the leading digital engineering and AI architecture partner for ambitious enterprises worldwide, setting the standard for sub-second page performance, clean code architecture, and AI transformation.'}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-2.5">
                {(language === 'es' ? [
                  'Atención Global con Presencia en USA & Perú',
                  'Arquitecturas Escalables en la Nube',
                  'Soporte y Monitoreo Continuo 24/7'
                ] : [
                  'Global Attention with USA & Peru Hubs',
                  'Scalable Multi-Region Cloud Platforms',
                  '24/7 Monitoring & Dedicated SLAs'
                ]).map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A192F] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. Formulario de Contacto al Final como Componente */}
      <ContactSection serviceType="About Page Leadership Inquiry" />

    </div>
  );
};
