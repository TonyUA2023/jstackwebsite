import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Layers, Database, ShieldCheck, Zap, Server, Code2, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PlatformsSection: React.FC = () => {
  const { language } = useLanguage();

  const technologies = [
    {
      name: 'React & Next.js',
      category: 'Frontend Architecture',
      badge: 'Core UI',
      icon: Globe,
      descriptionEs: 'Framework líder para aplicaciones web ultrarrápidas, renderizado del lado del servidor (SSR) e interfaces reactivas de máxima conversión.',
      descriptionEn: 'Industry-standard framework for lightning-fast web apps, server-side rendering (SSR), and frictionless conversion-focused UIs.'
    },
    {
      name: 'TypeScript',
      category: 'Type-Safe Engineering',
      badge: 'Robustness',
      icon: Code2,
      descriptionEs: 'Tipado estricto que elimina el 90% de los errores en producción, garantizando código mantenible y arquitectura de nivel bancario.',
      descriptionEn: 'Strict typing that eliminates 90% of production runtime bugs, ensuring bulletproof maintainability for enterprise codebases.'
    },
    {
      name: 'Tailwind CSS',
      category: 'Design Systems',
      badge: 'Fluid UI',
      icon: Layers,
      descriptionEs: 'Sistema de diseño ultra liviano con CSS optimizado al byte, eliminando código muerto para lograr tiempos de carga instantáneos.',
      descriptionEn: 'Ultra-lightweight utility framework optimized to the byte, eliminating CSS bloat for sub-second page delivery.'
    },
    {
      name: 'Supabase & PostgreSQL',
      category: 'Cloud Database',
      badge: 'Real-time',
      icon: Database,
      descriptionEs: 'Bases de datos relacionales de alta concurrencia con autenticación segura, sincronización en tiempo real y backups automatizados.',
      descriptionEn: 'High-concurrency relational database infrastructure with enterprise authentication, real-time sync, and automated cloud snapshots.'
    },
    {
      name: 'Node.js & Cloudflare Edge',
      category: 'Global Serverless',
      badge: 'Global CDN',
      icon: Server,
      descriptionEs: 'Infraestructura distribuida en el borde que entrega contenido a milisegundos de cualquier usuario en Norteamérica y el mundo.',
      descriptionEn: 'Global edge computing network delivering API responses and assets within milliseconds of users worldwide.'
    },
    {
      name: 'Stripe & Payment Gateways',
      category: 'Fintech & Checkout',
      badge: 'PCI-DSS',
      icon: ShieldCheck,
      descriptionEs: 'Procesamiento de pagos internacionales con cifrado de grado militar, prevención antifraude y suscripciones recurrentes.',
      descriptionEn: 'Global multi-currency checkout processing with bank-grade encryption, fraud prevention, and recurring billing.'
    },
    {
      name: 'OpenAI & Custom LLMs',
      category: 'AI Architecture',
      badge: 'Intelligent',
      icon: Zap,
      descriptionEs: 'Integración de agentes inteligentes, automatización de atención y flujos de trabajo con modelos de lenguaje de última generación.',
      descriptionEn: 'Custom intelligent agents, automated customer workflows, and reasoning pipelines powered by state-of-the-art LLMs.'
    },
    {
      name: 'Vite & High-Speed Bundling',
      category: 'Performance Engine',
      badge: '<0.3s Load',
      icon: Cpu,
      descriptionEs: 'Compilación y empaquetado de última generación que garantiza 100/100 en Google PageSpeed y carga instantánea.',
      descriptionEn: 'Next-gen build tooling guaranteeing 100/100 Google PageSpeed scores and instant DOM paint times.'
    }
  ];

  return (
    <section id="platforms" className="py-20 sm:py-28 bg-white text-[#0A192F] relative overflow-hidden border-t border-slate-100">
      
      {/* Background Dot Matrix */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-dot-matrix opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-dot-matrix opacity-30 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-[50px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.08]"
          >
            {language === 'es' ? (
              <>
                Platforms & Technologies <br />
                <span className="text-[#D8202A]">We Master</span>
              </>
            ) : (
              <>
                Platforms & Technologies <br />
                <span className="text-[#D8202A]">We Master</span>
              </>
            )}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg lg:text-[20px] text-[#475569] leading-relaxed font-normal"
          >
            {language === 'es'
              ? 'Arquitecturas tecnológicas probadas en producción para garantizar cero latencia, máxima seguridad bancaria y escalabilidad sin límites.'
              : 'Production-proven engineering stacks engineered for zero latency, ironclad security, and effortless enterprise scalability.'}
          </motion.p>
        </div>

        {/* Minimalist 4x2 Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-[#F8FAFC] hover:bg-white border border-slate-200/90 hover:border-[#D8202A] p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 group-hover:border-[#D8202A]/40 flex items-center justify-center text-[#0A192F] group-hover:text-[#D8202A] transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700 uppercase tracking-wider group-hover:bg-[#D8202A]/10 group-hover:text-[#D8202A] transition-colors">
                      {tech.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A192F] group-hover:text-[#D8202A] transition-colors leading-snug flex items-center justify-between">
                    <span>{tech.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8202A]" />
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">
                    {tech.category}
                  </p>

                  {/* Description */}
                  <p className="mt-3.5 text-[14px] text-[#475569] leading-relaxed font-normal">
                    {language === 'es' ? tech.descriptionEs : tech.descriptionEn}
                  </p>
                </div>

                {/* Bottom Verification */}
                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>{language === 'es' ? 'Arquitectura Certificada' : 'Production Certified'}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
