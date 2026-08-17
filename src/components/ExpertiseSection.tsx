import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Custom Dual-Tone Icons (Navy Blue + Vibrant Red Accent)
const WebDevIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-15 sm:h-15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="32" rx="4" stroke="#0A192F" strokeWidth="2.5" />
    <line x1="4" y1="18" x2="44" y2="18" stroke="#0A192F" strokeWidth="2" />
    <circle cx="10" cy="13" r="1.5" fill="#D8202A" />
    <circle cx="15" cy="13" r="1.5" fill="#0A192F" />
    <circle cx="20" cy="13" r="1.5" fill="#0A192F" />
    <path d="M16 26L11 30L16 34" stroke="#D8202A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 26L37 30L32 34" stroke="#D8202A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 24L22 36" stroke="#0A192F" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const ExperienceDesignIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-15 sm:h-15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="36" height="36" rx="3" stroke="#0A192F" strokeWidth="2" strokeDasharray="3 3" />
    <rect x="4" y="4" width="6" height="6" fill="#0A192F" />
    <rect x="38" y="4" width="6" height="6" fill="#0A192F" />
    <rect x="4" y="38" width="6" height="6" fill="#0A192F" />
    <rect x="38" y="38" width="6" height="6" fill="#0A192F" />
    <path d="M18 30L30 18L33 21L21 33L16 34L18 30Z" fill="#D8202A" stroke="#D8202A" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="28" y1="20" x2="31" y2="23" stroke="white" strokeWidth="1.5" />
  </svg>
);

const AccessibilityIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-15 sm:h-15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke="#0A192F" strokeWidth="2.5" />
    <circle cx="24" cy="14" r="3" fill="#D8202A" />
    <path d="M12 21H36" stroke="#0A192F" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M24 21V30L19 40" stroke="#0A192F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 30L29 40" stroke="#0A192F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HostingCloudIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-15 sm:h-15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="28" height="12" rx="2" stroke="#0A192F" strokeWidth="2.5" />
    <rect x="6" y="24" width="28" height="12" rx="2" stroke="#0A192F" strokeWidth="2.5" />
    <circle cx="12" cy="14" r="1.5" fill="#0A192F" />
    <circle cx="18" cy="14" r="1.5" fill="#0A192F" />
    <circle cx="12" cy="30" r="1.5" fill="#0A192F" />
    <circle cx="18" cy="30" r="1.5" fill="#0A192F" />
    {/* Red Security Lock */}
    <rect x="30" y="22" width="14" height="14" rx="2" fill="#D8202A" />
    <path d="M34 22V18C34 16.34 35.34 15 37 15C38.66 15 40 16.34 40 18V22" stroke="#D8202A" strokeWidth="2.5" fill="none" />
    <circle cx="37" cy="29" r="1.5" fill="white" />
  </svg>
);

const ClientServicesIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-15 sm:h-15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10C6 7.79 7.79 6 10 6H28C30.21 6 32 7.79 32 10V22C32 24.21 30.21 26 28 26H14L8 32V26H10C7.79 26 6 24.21 6 22V10Z" stroke="#0A192F" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    <path d="M22 28L25 32L36 21" stroke="#D8202A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AiConsultingIcon = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-15 sm:h-15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8C17.37 8 12 13.37 12 20C12 24.18 14.13 27.87 17.38 30.04L18 38H30L30.62 30.04C33.87 27.87 36 24.18 36 20C36 13.37 30.63 8 24 8Z" stroke="#0A192F" strokeWidth="2.5" fill="none" />
    <circle cx="24" cy="18" r="3" fill="#D8202A" />
    <circle cx="18" cy="24" r="2.5" fill="#D8202A" />
    <circle cx="30" cy="24" r="2.5" fill="#D8202A" />
    <line x1="24" y1="18" x2="18" y2="24" stroke="#0A192F" strokeWidth="2" />
    <line x1="24" y1="18" x2="30" y2="24" stroke="#0A192F" strokeWidth="2" />
    <line x1="18" y1="24" x2="30" y2="24" stroke="#0A192F" strokeWidth="2" />
  </svg>
);

export const ExpertiseSection: React.FC = () => {
  const { language } = useLanguage();

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#/contact';
    }
  };

  // 6 Core Pillars
  const expertiseItems = [
    {
      id: 'web-dev',
      icon: WebDevIcon,
      title: language === 'es' ? 'Desarrollo Web & Aplicaciones' : 'Web & Application Development',
      description: language === 'es'
        ? 'Creamos plataformas web a medida con código hand-coded en React y Next.js, optimizadas para velocidad extrema, máxima seguridad y conversión de visitas en ventas.'
        : 'We engineer custom, high-speed websites and web applications built with clean modern frameworks, rock-solid security, and peak commercial conversion rates.'
    },
    {
      id: 'experience-design',
      icon: ExperienceDesignIcon,
      title: language === 'es' ? 'Diseño de Experiencia (UX/UI)' : 'Experience Design (UX/UI)',
      description: language === 'es'
        ? 'Diseñamos interfaces intuitivas y atractivas que elevan el prestigio de tu marca, facilitan la navegación del usuario y maximizan la retención y fidelidad.'
        : 'Our designers craft intuitive, high-impact digital experiences that elevate brand prestige, streamline user journeys, and turn visitors into loyal customers.'
    },
    {
      id: 'accessibility',
      icon: AccessibilityIcon,
      title: language === 'es' ? 'Accesibilidad Web & Cumplimiento' : 'Web Accessibility & Compliance',
      description: language === 'es'
        ? 'Garantizamos que tu plataforma cumpla con los estándares internacionales WCAG y ADA, asegurando inclusión universal y navegación sin barreras.'
        : 'We deliver comprehensive audits and technical remediation to meet ADA and WCAG international standards, making your web platform accessible to all.'
    },
    {
      id: 'hosting-cloud',
      icon: HostingCloudIcon,
      title: language === 'es' ? 'Hosting & Infraestructura Cloud' : 'Hosting & Managed Cloud Infrastructure',
      description: language === 'es'
        ? 'Servidores en la nube de alta disponibilidad con 99.9% de uptime garantizado, certificados SSL, protección contra ataques y monitoreo continuo 24/7.'
        : 'Secure enterprise cloud hosting with guaranteed 99.9% uptime, PCI-compliant infrastructure, SSL encryption, and round-the-clock technical monitoring.'
    },
    {
      id: 'client-services',
      icon: ClientServicesIcon,
      title: language === 'es' ? 'Soporte y Evolución Continua' : 'Client Services & Evolution',
      description: language === 'es'
        ? 'Acompañamos a tu empresa después del lanzamiento con soporte técnico dedicado, actualizaciones de seguridad y optimizaciones continuas de rendimiento.'
        : 'We partner with your team post-launch with dedicated engineering support, proactive maintenance, and continuous speed and feature enhancements.'
    },
    {
      id: 'ai-consulting',
      icon: AiConsultingIcon,
      title: language === 'es' ? 'Consultoría e Integración de IA' : 'AI Consulting & Smart Automation',
      description: language === 'es'
        ? 'Automatizamos tus procesos comerciales con agentes inteligentes, asistentes 24/7 y modelos de lenguaje conectados directamente a tu flujo de trabajo.'
        : 'Automate repetitive workflows, solve complex operations, and deploy 24/7 smart customer agents powered by state-of-the-art LLMs and Machine Learning.'
    }
  ];

  return (
    <section id="expertise" className="py-20 sm:py-28 bg-white text-[#0A192F] relative overflow-hidden border-t border-slate-100">
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Heading: "Our Expertise" */}
        <div className="mb-14 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#0A192F] tracking-tight font-sans">
            Our Expertise
          </h2>
        </div>

        {/* 6-Item Grid: 3 Columns on Desktop, 2 Columns on Tablets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 xl:gap-x-16 gap-y-14 lg:gap-y-18">
          {expertiseItems.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex flex-col group text-left"
              >
                {/* Dual-Tone Icon */}
                <div className="mb-5 transition-transform duration-300 group-hover:scale-105">
                  <IconComponent />
                </div>

                {/* Title */}
                <h3 className="text-[22px] sm:text-[24px] xl:text-[25px] font-extrabold text-[#0A192F] leading-snug tracking-tight font-sans">
                  {item.title}
                </h3>

                {/* Paraphrased Clear & Punchy Description */}
                <p className="mt-3 text-[15px] sm:text-[16px] text-[#475569] leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* "Learn More >" Link right below text without distance */}
                <div className="mt-4">
                  <button
                    onClick={handleContactClick}
                    className="inline-flex items-center gap-1.5 text-[15px] font-normal text-[#0A192F] group-hover:text-[#D8202A] transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 text-[#0A192F] group-hover:text-[#D8202A] transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
