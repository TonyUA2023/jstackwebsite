import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Workflow, 
  Cpu, 
  Zap, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ContactSection } from '../../components/ContactSection';

import aiShowcaseImg from '../../assets/services/ai.jpg';

interface ServicePageProps {
  onNavigateHome: () => void;
}

export const AIAutomationsServicePage: React.FC<ServicePageProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#/contact';
    }
  };

  const features = [
    {
      icon: MessageSquare,
      titleEs: 'Agentes de IA para Atención & Calificación 24/7',
      titleEn: '24/7 Intelligent Customer Support & Qualification Agents',
      descEs: 'Despliegue de asistentes inteligentes en WhatsApp, web y correo que responden dudas técnicas, cotizan en tiempo real y agendan citas automáticamente.',
      descEn: 'Deployment of custom AI assistants across WhatsApp, web chat, and email to answer inquiries, quote in real time, and schedule appointments.'
    },
    {
      icon: Workflow,
      titleEs: 'Automatización de Flujos de Trabajo & CRM',
      titleEn: 'Autonomous Workflow & CRM Synchronization',
      descEs: 'Conexión de procesos repetitivos entre tus sistemas comerciales, facturación, bases de datos y herramientas de marketing sin intervención humana.',
      descEn: 'Connecting recurring operational tasks across your sales pipeline, billing software, databases, and marketing suites with zero human friction.'
    },
    {
      icon: Cpu,
      titleEs: 'Modelos LLM Personalizados con Data de tu Empresa',
      titleEn: 'Custom RAG & Enterprise-Trained LLM Knowledge Bases',
      descEs: 'Entrenamiento e indexación de bases de conocimiento privadas (RAG) para que la IA entienda tus manuales, políticas de precio y catálogo exacto.',
      descEn: 'Indexing your proprietary documents and product catalogs via RAG so AI agents strictly follow company pricing, SLAs, and technical manuals.'
    },
    {
      icon: Zap,
      titleEs: 'Reducción de Costos Operativos & Respuesta Inmediata',
      titleEn: 'Zero Response Latency & Operational Cost Reduction',
      descEs: 'Eliminamos el tiempo de espera de tus prospectos a cero segundos, aumentando la tasa de cierre y permitiendo que tu equipo se concentre en tareas de alto valor.',
      descEn: 'Reduce customer response time to zero seconds, elevating closing conversion rates while freeing your staff for high-value strategic growth.'
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
            <span className="text-slate-500">Services</span>
            <span className="text-slate-400 font-bold">›</span>
            <span className="text-[#0A192F] font-bold">AI Automations & Agents</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[60px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.06]"
              >
                {language === 'es' ? (
                  <>
                    Automatizaciones con IA, <br />
                    <span className="text-[#D8202A]">Agentes Inteligentes</span> & Flujos Autónomos
                  </>
                ) : (
                  <>
                    AI Automations, <br />
                    <span className="text-[#D8202A]">Intelligent Agents</span> & Autonomous Workflows
                  </>
                )}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base sm:text-lg lg:text-[20px] text-[#475569] leading-relaxed font-normal max-w-2xl"
              >
                {language === 'es'
                  ? 'Implementamos soluciones de inteligencia artificial que trabajan 24/7 para tu negocio. Integramos agentes conversacionales, procesamiento inteligente de leads y automatizaciones que multiplican la productividad operativa.'
                  : 'We engineer enterprise AI architectures that work 24/7 for your business. We integrate autonomous conversational agents, smart lead intake pipelines, and automated workflows that multiply operational leverage.'}
              </motion.p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={handleContactClick}
                  className="px-9 py-4 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-[15px] sm:text-[16px] rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{language === 'es' ? 'Cotizar Automatización con IA' : 'Request AI Automation Quote'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F1F5F9] p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xl">
                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-900 aspect-[16/10]">
                  <img 
                    src={aiShowcaseImg} 
                    alt="AI Automations & Intelligent Agents Showcase" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Detailed Technical Features */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-black text-[#0A192F] tracking-tight font-sans">
              {language === 'es' ? 'Transforma la Eficiencia de tu Empresa con IA Real' : 'Transform Operational Efficiency with Real AI Systems'}
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              {language === 'es'
                ? 'No más respuestas tardías a clientes potenciales. Nuestros agentes de IA califican, cotizan y derivan prospectos en menos de 5 segundos.'
                : 'No more slow responses to prospective buyers. Our AI agents qualify, quote, and route inbound leads in under 5 seconds.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#D8202A] transition-all duration-300 hover:shadow-xl space-y-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#D8202A] shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A192F]">
                    {language === 'es' ? item.titleEs : item.titleEn}
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                    {language === 'es' ? item.descEs : item.descEn}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Reusable Contact Section Component */}
      <ContactSection serviceType="AI Automations & Intelligent Agents Service" />

    </div>
  );
};
