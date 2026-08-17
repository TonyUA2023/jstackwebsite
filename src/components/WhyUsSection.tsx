import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Zap, Target, Award, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyUsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#/contact';
    }
  };

  const stepsEs = [
    { number: '01', title: 'Estrategia & Arquitectura', desc: 'Definición de requerimientos comerciales, objetivos de conversión y wireframes optimizados.' },
    { number: '02', title: 'Diseño UX/UI de Alta Fidelidad', desc: 'Prototipos visuales personalizados con estética corporativa premium y micro-interacciones fluidas.' },
    { number: '03', title: 'Programación Hand-Coded', desc: 'Desarrollo en React/Next.js con código 100% propio, sin bloatware ni plugins innecesarios.' },
    { number: '04', title: 'Auditoría 100/100 & Despliegue', desc: 'Certificación Google Speed, optimización SEO on-page y entrega con total propiedad del código.' },
  ];

  const stepsEn = [
    { number: '01', title: 'Strategy & Architecture', desc: 'Defining commercial requirements, conversion funnels, and performance wireframes.' },
    { number: '02', title: 'High-Fidelity UX/UI Design', desc: 'Bespoke interactive prototypes with world-class agency aesthetics and smooth motion.' },
    { number: '03', title: 'Hand-Coded Engineering', desc: 'Clean React/Next.js development with strictly-typed architecture and zero bloatware.' },
    { number: '04', title: '100/100 Audit & Global Launch', desc: 'Google Core Web Vitals audit, full technical SEO indexing, and source code handover.' },
  ];

  const steps = language === 'es' ? stepsEs : stepsEn;

  const valuePropsEs = [
    { icon: Zap, title: "100/100 Velocidad Google", desc: "Tiempos de carga inferiores a 0.3 segundos para una tasa de rebote mínima." },
    { icon: Target, title: "100% Código Propio", desc: "Cero plantillas lentas de WordPress. Arquitecturas ligeras construidas a mano." },
    { icon: Award, title: "Liderazgo de Ingeniería", desc: "Supervisado directamente por Tony Ulloa, Ingeniero de Sistemas." },
    { icon: Clock, title: "Entrega Ágil & Puntual", desc: "Cronogramas de desarrollo claros y comunicación fluida en cada etapa." }
  ];

  const valuePropsEn = [
    { icon: Zap, title: "100/100 Google Speed Guarantee", desc: "Sub-0.3s response times maximizing visitor retention and SEO rankings." },
    { icon: Target, title: "100% Bespoke Code", desc: "Zero slow templates or bloated plugins. Pure modern web architecture." },
    { icon: Award, title: "Engineering Rigor", desc: "Directly led by Tony Ulloa, Senior Systems Engineer & AI Architect." },
    { icon: Clock, title: "Agile Turnaround", desc: "Transparent milestones, predictable schedules, and continuous feedback." }
  ];

  const valueProps = language === 'es' ? valuePropsEn : valuePropsEs;

  return (
    <section id="process" className="py-20 sm:py-28 bg-white text-[#0A192F] relative overflow-hidden border-t border-slate-100">
      
      {/* Background Dots */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-dot-matrix opacity-30 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.08]">
            {t.process.title}
          </h2>

          <p className="text-base sm:text-lg lg:text-[20px] text-[#475569] leading-relaxed font-normal">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4 Value Props Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-14">
          {valueProps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-[#F8FAFC] border border-slate-200/90 hover:border-[#D8202A] p-6 sm:p-7 rounded-2xl transition-all group hover:shadow-lg text-left"
              >
                <div className="p-3 w-fit rounded-xl bg-white border border-slate-200 text-[#0A192F] group-hover:text-[#D8202A] group-hover:border-[#D8202A]/40 mb-4 transition-colors shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0A192F] group-hover:text-[#D8202A] transition-colors">{item.title}</h3>
                <p className="mt-2 text-[14px] text-[#475569] leading-relaxed font-normal">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 hover:border-[#D8202A] rounded-2xl p-6 sm:p-7 relative transition-all group flex flex-col justify-between hover:shadow-xl text-left"
            >
              <div>
                <span className="text-3xl font-black font-mono text-[#D8202A]/80 group-hover:text-[#D8202A] transition-colors block mb-3">
                  {step.number}
                </span>
                <h4 className="text-lg font-bold text-[#0A192F] group-hover:text-[#D8202A] transition-colors">{step.title}</h4>
                <p className="mt-2.5 text-[14px] text-[#475569] leading-relaxed font-normal">{step.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>{language === 'es' ? `Fase ${step.number}` : `Phase ${step.number}`}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 border border-white/20 text-white rounded-xl shrink-0">
              <ShieldCheck className="w-7 h-7 text-[#D8202A]" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">
                {language === 'es' ? 'Garantía de Velocidad 100/100 & Código Limpio' : '100/100 Speed & Clean Code Guarantee'}
              </h4>
              <p className="mt-1 text-sm text-slate-300 max-w-xl leading-relaxed font-normal">
                {language === 'es'
                  ? 'Entregamos tu plataforma con garantía de rendimiento en Google Core Web Vitals y soporte técnico directo para tu empresa.'
                  : 'We deliver every platform backed by guaranteed Google Core Web Vitals scores and dedicated engineering support.'}
              </p>
            </div>
          </div>
          <button
            onClick={handleContactClick}
            className="shrink-0 px-8 py-3.5 bg-[#D8202A] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md cursor-pointer"
          >
            {t.header.getQuote}
          </button>
        </div>

      </div>
    </section>
  );
};
