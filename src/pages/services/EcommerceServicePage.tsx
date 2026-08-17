import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Database, 
  Zap, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ContactSection } from '../../components/ContactSection';

import ecommerceShowcaseImg from '../../assets/services/ecommerce.jpg';

interface ServicePageProps {
  onNavigateHome: () => void;
}

export const EcommerceServicePage: React.FC<ServicePageProps> = ({ onNavigateHome }) => {
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
      icon: CreditCard,
      titleEs: 'Checkout Frictionless & Pasarelas Globales',
      titleEn: 'Frictionless Checkout & Global Payment Gateways',
      descEs: 'Integración nativa con Stripe, PayPal, Apple Pay, Google Pay y pasarelas locales con antifraude y pagos en 1 clic.',
      descEn: 'Native integration with Stripe, PayPal, Apple Pay, Google Pay, and localized payment rails with fraud protection.'
    },
    {
      icon: Database,
      titleEs: 'Catálogos de Alto Rendimiento & Filtros Facetados',
      titleEn: 'High-Performance Catalogs & Faceted Search',
      descEs: 'Arquitecturas preparadas para miles de SKUs con búsqueda instantánea en milisegundos, sincronización de stock y variantes dinámicas.',
      descEn: 'Engineered for thousands of SKUs with sub-millisecond search indexing, real-time inventory sync, and dynamic variants.'
    },
    {
      icon: Zap,
      titleEs: 'Cero Caídas en Picos de Tráfico (Black Friday)',
      titleEn: 'Zero Downtime During Flash Sales & High Traffic',
      descEs: 'Despliegue en arquitectura serverless distribuida en el borde capaz de absorber picos masivos de compra sin ralentizaciones.',
      descEn: 'Serverless edge infrastructure built to handle massive transactional surges without throttling or slowdowns.'
    },
    {
      icon: ShieldCheck,
      titleEs: 'Certificación PCI-DSS & Protección Bancaria',
      titleEn: 'PCI-DSS Compliance & Bank-Level Protection',
      descEs: 'Cifrado integral de extremo a extremo, cumplimiento estricto de estándares bancarios y protección contra ataques automatizados.',
      descEn: 'End-to-end encryption, strict PCI-DSS banking compliance, and automated bot attack mitigation.'
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
            <span className="text-[#0A192F] font-bold">E-Commerce & Storefronts</span>
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
                    Tiendas E-Commerce, <br />
                    <span className="text-[#D8202A]">Pasarelas de Pago</span> & Catálogos Digitales
                  </>
                ) : (
                  <>
                    Enterprise E-Commerce, <br />
                    <span className="text-[#D8202A]">Payment Gateways</span> & Digital Catalogs
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
                  ? 'Construimos tiendas virtuales ultra veloces y plataformas de comercio electrónico headless con pasarelas de pago seguras, control de inventario en tiempo real y embudos de checkout sin fricción que maximizan el ticket promedio.'
                  : 'We build ultra-fast storefronts and headless e-commerce architectures with secure payment gateways, real-time inventory control, and frictionless checkout funnels that maximize average order value.'}
              </motion.p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={handleContactClick}
                  className="px-9 py-4 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-[15px] sm:text-[16px] rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{language === 'es' ? 'Cotizar Tienda Online' : 'Request E-Commerce Quote'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F1F5F9] p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xl">
                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-900 aspect-[16/10]">
                  <img 
                    src={ecommerceShowcaseImg} 
                    alt="E-Commerce & Digital Storefronts Showcase" 
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
              {language === 'es' ? 'Arquitectura de Ventas Digitales sin Límites' : 'Limitless Digital Commerce Architecture'}
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              {language === 'es'
                ? 'Elimina los carritos abandonados provocados por plataformas lentas. Nuestro código a medida acelera el checkout y asegura cada transacción comercial.'
                : 'Eliminate cart abandonment caused by laggy bloated platforms. Our custom code speeds up checkout and secures every commercial transaction.'}
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
      <ContactSection serviceType="E-Commerce & Digital Storefronts Service" />

    </div>
  );
};
