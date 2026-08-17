import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Lock, 
  Network, 
  Server, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ContactSection } from '../../components/ContactSection';

import itShowcaseImg from '../../assets/services/it.jpg';

interface ServicePageProps {
  onNavigateHome: () => void;
}

export const EnterpriseITServicePage: React.FC<ServicePageProps> = ({ onNavigateHome }) => {
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
      icon: Cloud,
      titleEs: 'Migración & Arquitectura Cloud Empresarial',
      titleEn: 'Enterprise Cloud Architecture & Managed Migration',
      descEs: 'Diseño e implementación de infraestructura en la nube (AWS, Google Cloud, Cloudflare) con alta disponibilidad y redundancia de datos 99.99% SLA.',
      descEn: 'Architecting and deploying multi-region cloud servers (AWS, Google Cloud, Cloudflare) with automated failovers and 99.99% SLA uptime.'
    },
    {
      icon: Lock,
      titleEs: 'Auditoría de Ciberseguridad & Protección SSL',
      titleEn: 'Cybersecurity Auditing & WAF DDoS Mitigation',
      descEs: 'Protección integral contra ataques DDoS, mitigación de vulnerabilidades OWASP Top 10, firewalls de aplicación web (WAF) y hardening de servidores.',
      descEn: 'Comprehensive DDoS hardening, OWASP Top 10 vulnerability remediation, web application firewalls (WAF), and secure access tokens.'
    },
    {
      icon: Network,
      titleEs: 'Integración de Redes, Correo & Herramientas TI',
      titleEn: 'Corporate Workspace & Verified Email Suites',
      descEs: 'Configuración de suites corporativas (Google Workspace, Microsoft 365), servidores de correo autenticados (DKIM, SPF, DMARC) y redes seguras.',
      descEn: 'Complete deployment of enterprise suites (Google Workspace, Microsoft 365), verified email deliverability (DKIM, SPF, DMARC), and secure VPNs.'
    },
    {
      icon: Server,
      titleEs: 'Mantenimiento Continuo & SLAs de Soporte 24/7',
      titleEn: '24/7 Managed Infrastructure & Proactive SLAs',
      descEs: 'Monitoreo proactivo de uptime, parches de seguridad automatizados, copias de respaldo continuas y soporte técnico prioritario dedicado.',
      descEn: 'Proactive round-the-clock server health monitoring, automatic security patches, persistent cloud backups, and dedicated SLA response.'
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
            <span className="text-[#0A192F] font-bold">Enterprise IT & Cloud</span>
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
                    Implementaciones TI, <br />
                    <span className="text-[#D8202A]">Infraestructura Cloud</span> & Seguridad
                  </>
                ) : (
                  <>
                    Enterprise IT, <br />
                    <span className="text-[#D8202A]">Cloud Infrastructure</span> & Cybersecurity
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
                  ? 'Modernizamos y blindamos la tecnología de tu empresa. Implementamos servidores en la nube de alta disponibilidad, protocolos de seguridad bancaria, sistemas de respaldo y soporte técnico administrado.'
                  : 'We modernize and fortify enterprise technology stacks. We deploy high-availability cloud servers, bank-grade security protocols, automated disaster recovery backups, and managed engineering support.'}
              </motion.p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={handleContactClick}
                  className="px-9 py-4 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-[15px] sm:text-[16px] rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{language === 'es' ? 'Cotizar Implementación TI' : 'Request IT Infrastructure Quote'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F1F5F9] p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xl">
                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-900 aspect-[16/10]">
                  <img 
                    src={itShowcaseImg} 
                    alt="Enterprise IT Cloud Infrastructure & Cybersecurity Showcase" 
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
              {language === 'es' ? 'Seguridad de Grado Industrial & Cero Tiempo de Inactividad' : 'Industrial-Grade Security & Zero System Downtime'}
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              {language === 'es'
                ? 'Protegemos la información crítica de tu empresa y garantizamos que tus sistemas estén siempre disponibles para tus colaboradores y clientes.'
                : 'We safeguard mission-critical enterprise assets, ensuring your applications remain online, encrypted, and available to your global workforce.'}
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
      <ContactSection serviceType="Enterprise IT & Cloud Implementation Service" />

    </div>
  );
};
