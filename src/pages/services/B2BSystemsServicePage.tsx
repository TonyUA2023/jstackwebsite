import React from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  Database, 
  Lock, 
  Zap, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ContactSection } from '../../components/ContactSection';

import b2bShowcaseImg from '../../assets/services/b2b.jpg';

interface ServicePageProps {
  onNavigateHome: () => void;
}

export const B2BSystemsServicePage: React.FC<ServicePageProps> = ({ onNavigateHome }) => {
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
      icon: Workflow,
      titleEs: 'Portales de Clientes B2B & Cotizadores Inteligentes',
      titleEn: 'B2B Client Portals & Dynamic RFQ Quote Engines',
      descEs: 'Plataformas seguras donde clientes corporativos gestionan pedidos mayoristas, consultan listas de precios personalizadas y generan RFQ en tiempo real.',
      descEn: 'Secure client portals where corporate buyers manage wholesale orders, access tiered pricing, and request automated instant RFQ estimates.'
    },
    {
      icon: Database,
      titleEs: 'Sistemas ERP / CRM Web a Medida',
      titleEn: 'Custom Cloud ERP & Sales CRM Systems',
      descEs: 'Desarrollo de paneles administrativos centralizados para control de inventarios, pipeline de ventas, comisiones de asesores y facturación electrónica.',
      descEn: 'Centralized web dashboards for inventory tracking, sales pipelines, representative commissions, and automated electronic invoicing.'
    },
    {
      icon: Lock,
      titleEs: 'Control de Roles, Permisos & Seguridad Bancaria',
      titleEn: 'Granular Role-Based Access & Audit Logging',
      descEs: 'Gestión granular de accesos por usuario, registro de auditoría en tiempo real, autenticación de dos factores (2FA) y cifrado de base de datos.',
      descEn: 'Strict permission hierarchies, real-time audit trails, multi-factor authentication (2FA), and encrypted database storage.'
    },
    {
      icon: Zap,
      titleEs: 'Sincronización de Datos & APIs Empresariales',
      descEs: 'Conexión bidireccional con software contable, pasarelas de pago, sistemas de inventario existentes y almacenes logísticos.',
      titleEn: 'Data Synchronization & Enterprise API Integrations',
      descEn: 'Bi-directional real-time data sync with accounting platforms, ERPs, existing inventory databases, and logistics hubs.'
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
            <span className="text-[#0A192F] font-bold">B2B Systems & Sales Platforms</span>
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
                    Sistemas B2B, <br />
                    <span className="text-[#D8202A]">Portales de Venta</span> & Gestión Comercial
                  </>
                ) : (
                  <>
                    B2B Business Systems, <br />
                    <span className="text-[#D8202A]">Sales Portals</span> & Operations
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
                  ? 'Diseñamos y programamos sistemas de ventas B2B, portales corporativos y plataformas de gestión a medida para empresas que buscan automatizar cotizaciones, digitalizar su canal mayorista y centralizar sus operaciones comerciales.'
                  : 'We design and engineer bespoke B2B sales portals, client ordering systems, and management platforms for enterprises seeking to automate quotation workflows, digitalize wholesale channels, and centralize commercial data.'}
              </motion.p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={handleContactClick}
                  className="px-9 py-4 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-[15px] sm:text-[16px] rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{language === 'es' ? 'Cotizar Sistema B2B' : 'Request B2B System Quote'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F1F5F9] p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xl">
                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-900 aspect-[16/10]">
                  <img 
                    src={b2bShowcaseImg} 
                    alt="B2B Business Systems & Management Dashboard" 
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
              {language === 'es' ? 'Operaciones Comerciales Digitalizadas & Sin Cuellos de Botella' : 'Digitalized Operations Free From Operational Bottlenecks'}
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              {language === 'es'
                ? 'Sustituye hojas de cálculo desordenadas y procesos manuales por una plataforma web segura, rápida y adaptada 100% a la lógica de tu negocio.'
                : 'Replace messy spreadsheets and manual processes with a secure, sub-second web platform engineered 100% around your business logic.'}
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
      <ContactSection serviceType="B2B Business Systems & Sales Platforms Service" />

    </div>
  );
};
