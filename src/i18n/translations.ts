export type Language = 'en' | 'es';

export interface TranslationStructure {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  header: {
    websites: string;
    solutions: string;
    experience: string;
    services: string;
    contact: string;
    getQuote: string;
    phone: string;
  };
  hero: {
    badge: string;
    h1Title: string;
    h1Gradient: string;
    subtitle: string;
    seoHeadline1: string;
    seoHeadline2: string;
    inputPlaceholder: string;
    ctaButton: string;
    badgeSpeed: string;
    badgeCode: string;
    badgeGuarantee: string;
    clientTagline1: string;
    clientTagline2: string;
  };
  seoTitles: {
    commercial: string;
    sales: string;
    speedAgency: string;
    seoGrowth: string;
    smbAffordable: string;
    googleRank: string;
    enterpriseQuote: string;
    ecommerceCorporate: string;
    landingPages: string;
    customFullStack: string;
  };
  websites: {
    tag: string;
    title: string;
    subtitle: string;
    requestBtn: string;
    landing: {
      title: string;
      subtitle: string;
      desc: string;
      features: string[];
    };
    corporate: {
      title: string;
      subtitle: string;
      desc: string;
      features: string[];
    };
    ecommerce: {
      title: string;
      subtitle: string;
      desc: string;
      features: string[];
    };
  };
  gallery: {
    tag: string;
    title: string;
    subtitle: string;
    allFilter: string;
    corporateFilter: string;
    servicesFilter: string;
    techFilter: string;
    gourmetFilter: string;
    viewProjectBtn: string;
    requestSimilarBtn: string;
    modalQuoteBtn: string;
    globalCta: string;
  };
  solutions: {
    tag: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  advantages: {
    tag: string;
    title: string;
    subtitle: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
  };
  process: {
    tag: string;
    title: string;
    subtitle: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    phoneLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    usTrustBadge: string;
    locationsNotice: string;
  };
  report: {
    buttonText: string;
    downloadTitle: string;
    filename: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    tagline: string;
    countriesServed: string;
    phoneDirect: string;
  };
  stickyBar: {
    text: string;
    button: string;
  };
}

export const translations: Record<Language, TranslationStructure> = {
  es: {
    meta: {
      title: "Diseño Web Profesional y Eficiente | Tu Página Web Comercial | JSTACK",
      description: "Desarrollo de Páginas Web Vendedoras y Optimizadas para Negocios en EE. UU., Perú y España. 100/100 Google Speed, código propio y resultados garantizados.",
      keywords: "Diseño Web Profesional y Eficiente, Tu Página Web Comercial, Creación de Páginas Web Vendedoras, Páginas Web Optimizadas y Rápidas, Agencias de Desarrollo Web, Diseño Web Optimizado para SEO, Páginas Web Económicas para Pymes, Diseño de Tiendas Online E-commerce, Creación de Landing Pages de Alta Conversión, Desarrollo Web a Medida"
    },
    header: {
      websites: "Sitios Web",
      solutions: "Soluciones",
      experience: "Experiencia",
      services: "Servicios",
      contact: "Contacto",
      getQuote: "Cotizar Web",
      phone: "+1 (774) 747-7215"
    },
    hero: {
      badge: "Desarrollo Web Comercial & Proyectos Reales",
      h1Title: "Diseño Web Profesional y Eficiente",
      h1Gradient: "Tu Página Web Comercial",
      subtitle: "Creación de Páginas Web Vendedoras, Optimizadas para SEO y Diseñadas para Convertir Visitantes en Clientes en EE. UU., Perú y España.",
      seoHeadline1: "Creación de Páginas Web Vendedoras | Diseño Web para Negocios",
      seoHeadline2: "Páginas Web Optimizadas y Rápidas | Agencias de Desarrollo Web",
      inputPlaceholder: "Escribe el nombre de tu empresa o email...",
      ctaButton: "Cotizar Mi Web",
      badgeSpeed: "100/100 Velocidad Google",
      badgeCode: "100% Código Propio",
      badgeGuarantee: "Garantía de Satisfacción",
      clientTagline1: "Plataforma Wayra",
      clientTagline2: "Sitio Web Esmerald"
    },
    seoTitles: {
      commercial: "Diseño Web Profesional y Eficiente | Tu Página Web Comercial",
      sales: "Creación de Páginas Web Vendedoras | Diseño Web para Negocios",
      speedAgency: "Páginas Web Optimizadas y Rápidas | Agencias de Desarrollo Web",
      seoGrowth: "Diseño Web Optimizado para SEO | Vende Más en Internet",
      smbAffordable: "Páginas Web Económicas para Pymes y Emprendedores",
      googleRank: "Diseño de Páginas Web Profesionales | Tu Negocio en Google",
      enterpriseQuote: "Desarrollo Web para Negocios y Empresas | Cotiza Tu Web",
      ecommerceCorporate: "Diseño de Tiendas Online (E-commerce) y Páginas Web Corporativas",
      landingPages: "Creación de Landing Pages de Alta Conversión | Diseño Web",
      customFullStack: "Desarrollo Web a Medida y Optimización SEO Integral"
    },
    websites: {
      tag: "Desarrollo Web Comercial",
      title: "Diseño de Páginas Web Profesionales | Tu Negocio en Google",
      subtitle: "Desarrollo Web para Negocios y Empresas. Soluciones diseñadas para posicionar tu marca y acelerar las ventas de tu negocio.",
      requestBtn: "Cotizar Este Sitio Web",
      landing: {
        title: "Creación de Landing Pages de Alta Conversión | Diseño Web",
        subtitle: "Optimizada para captura rápida de prospectos y ventas por WhatsApp",
        desc: "Landing Page vendedora diseñada para captar prospectos calificados con velocidad instantánea en teléfonos y computadoras.",
        features: [
          "Embudo de Conversión de 1 Sola Página",
          "100/100 Velocidad Google Garantizada",
          "Optimizado para Móviles & SEO Local",
          "Integración Directa a WhatsApp & Formulario",
          "Entrega Rápida en Tiempo Récord"
        ]
      },
      corporate: {
        title: "Diseño de Páginas Web Corporativas | Tu Empresa en Internet",
        subtitle: "Sitio multipágina institucional de alta autoridad",
        desc: "Sitio web corporativo de varias páginas diseñado para generar confianza instantánea, presentar tus servicios y dominar en Google.",
        features: [
          "Arquitectura Multipágina (Inicio, Nosotros, Servicios, Contacto)",
          "Diseño UI/UX Personalizado e Interacciones Fluidas",
          "100% Código Propio (Cero Bloatware)",
          "Certificado Google Core Web Vitals",
          "Propiedad Total del Código Fuente"
        ]
      },
      ecommerce: {
        title: "Diseño de Tiendas Online (E-commerce) y Catálogos",
        subtitle: "Tienda online veloz optimizada para ventas masivas",
        desc: "Plataforma de catálogo interactivo y tienda virtual construida para cargar al instante y cerrar ventas en cualquier país.",
        features: [
          "Búsqueda y Filtrado Instantáneo de Productos",
          "Integración de Pasarelas de Pago o Cotizador",
          "Carrito Móvil Optimizado",
          "Gestión de Catálogo e Inventario",
          "Estabilidad de Diseño Garantizada (CLS = 0)"
        ]
      }
    },
    gallery: {
      tag: "Portafolio de Clientes Reales",
      title: "Desarrollo Web a Medida y Optimización SEO Integral",
      subtitle: "Casos de éxito reales en Estados Unidos, Perú y España. Sitios web hand-coded con 100/100 de velocidad y SEO de alto impacto.",
      allFilter: "Todos los Proyectos",
      corporateFilter: "Corporativos & Legales",
      servicesFilter: "Servicios & Industria",
      techFilter: "Tech & Innovación",
      gourmetFilter: "Gastronomía & Marcas",
      viewProjectBtn: "Ver Proyecto Completo",
      requestSimilarBtn: "Solicitar Sitio Similar",
      modalQuoteBtn: "Cotizar Sitio Similar",
      globalCta: "Diseño Web Optimizado para SEO | Vende Más en Internet"
    },
    solutions: {
      tag: "Sectores Comerciales",
      title: "Páginas Web Económicas para Pymes y Emprendedores",
      subtitle: "Arquitecturas web probadas para restaurantes, servicios legales, salud, industria, hoteles y startups.",
      cta: "Ver Solución de Sector"
    },
    advantages: {
      tag: "Ventajas Competitivas",
      title: "Páginas Web Optimizadas y Rápidas | Agencias de Desarrollo Web",
      subtitle: "Por qué empresas en EE. UU., Perú y España prefieren nuestro desarrollo web a medida."
    },
    services: {
      tag: "Servicios Especializados",
      title: "Desarrollo Web para Negocios y Empresas | Cotiza Tu Web",
      subtitle: "Servicios integrales de programación web, SEO internacional y optimización de velocidad."
    },
    process: {
      tag: "Proceso Eficiente",
      title: "Desarrollo Web Profesional y Eficiente en 4 Pasos",
      subtitle: "Metodología clara y transparente de desarrollo comercial."
    },
    contact: {
      tag: "Atención Inmediata",
      title: "Desarrollo Web para Negocios y Empresas | Cotiza Tu Web",
      subtitle: "Recibe tu propuesta técnica y cotización formal en menos de 2 horas.",
      phoneLabel: "Llamada / WhatsApp / SMS Directo: +1 (774) 747-7215",
      nameLabel: "Nombre o Nombre de Empresa",
      namePlaceholder: "Ej. Juan Pérez / Tu Empresa",
      emailLabel: "Correo Electrónico de Contacto",
      emailPlaceholder: "tuemail@empresa.com",
      serviceLabel: "Tipo de Servicio Web Requerido",
      messageLabel: "Detalles del Proyecto",
      messagePlaceholder: "Cuéntanos sobre tu negocio y tus metas de ventas...",
      submitBtn: "Enviar Solicitud de Cotización",
      submitting: "Enviando Solicitud...",
      successTitle: "¡Solicitud Recibida!",
      successDesc: "Gracias. Te enviamos una propuesta técnica personalizada a la brevedad.",
      usTrustBadge: "🇺🇸 🇵🇪 🇪🇸 Atención en EE. UU., Perú y España | Tel: +1 (774) 747-7215",
      locationsNotice: "Sedes de atención directa y posicionamiento: Estados Unidos (Massachussetts, FL, NY), Perú (Lima), España (Madrid, Barcelona)."
    },
    report: {
      buttonText: "Descargar Reporte SEO y Tráfico Web (Excel)",
      downloadTitle: "Reporte_Trafico_y_Palabras_Clave_JSTACK.csv",
      filename: "Reporte_SEO_Busquedas_JSTACK.csv"
    },
    footer: {
      rights: "Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos del Servicio",
      tagline: "Diseño Web Profesional y Eficiente | Tu Página Web Comercial en EE. UU., Perú y España.",
      countriesServed: "Cobertura Principal: Estados Unidos 🇺🇸 | Perú 🇵🇪 | España 🇪🇸 | México 🇲🇽",
      phoneDirect: "Teléfono / WhatsApp / SMS: +1 (774) 747-7215"
    },
    stickyBar: {
      text: "Diseño Web Optimizado para SEO | Tel: +1 (774) 747-7215",
      button: "Cotizar Ahora"
    }
  },
  en: {
    meta: {
      title: "Professional & High-Speed Web Design | Commercial Business Websites | JSTACK",
      description: "High-Converting Custom Web Development & SEO Optimization for Businesses in the US, Peru, and Spain. 100/100 Google Speed guaranteed.",
      keywords: "Professional & High-Speed Web Design, Commercial Business Websites, High-Converting Custom Web Development, Fast & SEO-Optimized Custom Websites, Top Web Development Agency, SEO-Optimized Custom Web Design, E-Commerce Stores & Corporate Web Solutions, Custom Full-Stack Web Development"
    },
    header: {
      websites: "Websites",
      solutions: "Solutions",
      experience: "Experience",
      services: "Services",
      contact: "Contact",
      getQuote: "Get Quote",
      phone: "+1 (774) 747-7215"
    },
    hero: {
      badge: "Commercial Web Development & Real Client Projects",
      h1Title: "Professional & High-Speed Web Design",
      h1Gradient: "Commercial Business Websites",
      subtitle: "High-Converting Custom Web Development, SEO-Optimized and Built to Turn Traffic into Paying Clients in the US, Peru, and Spain.",
      seoHeadline1: "High-Converting Custom Web Development | Turn Visitors Into Sales",
      seoHeadline2: "Fast & SEO-Optimized Custom Websites | Top Web Development Agency",
      inputPlaceholder: "Enter your business name or email...",
      ctaButton: "Get Web Quote",
      badgeSpeed: "100/100 Google Speed",
      badgeCode: "100% Custom Code",
      badgeGuarantee: "100% Satisfaction Guarantee",
      clientTagline1: "Wayra Platform",
      clientTagline2: "Esmerald Website"
    },
    seoTitles: {
      commercial: "Professional & High-Speed Web Design | Commercial Business Websites",
      sales: "High-Converting Custom Web Development | Turn Visitors Into Sales",
      speedAgency: "Fast & SEO-Optimized Custom Websites | Top Web Development Agency",
      seoGrowth: "SEO-Optimized Custom Web Design | Scale Your Business Online",
      smbAffordable: "Affordable High-Performance Websites for SMBs & Entrepreneurs",
      googleRank: "Professional Web Design Services | Rank Your Business #1 on Google",
      enterpriseQuote: "Custom Enterprise Web Development | Get a Free Quote",
      ecommerceCorporate: "Custom E-Commerce Stores & Corporate Web Solutions",
      landingPages: "High-Converting Landing Page Design | Custom Web Engineering",
      customFullStack: "Custom Full-Stack Web Development & Complete SEO Optimization"
    },
    websites: {
      tag: "Commercial Web Engineering",
      title: "Professional Web Design Services | Rank Your Business #1 on Google",
      subtitle: "Custom Enterprise Web Development designed to position your brand authority and accelerate sales pipeline.",
      requestBtn: "Request This Website",
      landing: {
        title: "High-Converting Landing Page Design | Custom Web Engineering",
        subtitle: "Optimized for fast lead capture and direct phone / WhatsApp conversion",
        desc: "Razor-sharp landing page built for high-intent traffic with instant mobile performance and zero clutter.",
        features: [
          "Single-Page Conversion Funnel",
          "100/100 Google Speed Guaranteed",
          "Mobile & SEO Optimized",
          "Direct Phone, SMS & WhatsApp Integration",
          "Express Delivery Timeline"
        ]
      },
      corporate: {
        title: "Corporate & Business Website | Enterprise Authority",
        subtitle: "Complete multi-page corporate architecture",
        desc: "High-end multi-page website engineered to establish instant buyer trust and position your business ahead of competitors.",
        features: [
          "Multi-Page Architecture (Home, About, Services, Contact)",
          "Custom UI/UX & Motion Micro-Interactions",
          "100% Custom Code (Zero Bloatware)",
          "Google Core Web Vitals Certified",
          "Full Source Code Ownership"
        ]
      },
      ecommerce: {
        title: "Custom E-Commerce Stores & Industrial Catalogs",
        subtitle: "High-speed digital store optimized for conversion",
        desc: "Interactive catalog and e-commerce portal built to load instantly and handle bulk sales in any country.",
        features: [
          "Instant Product Filtering & Search",
          "Stripe, PayPal & Wire Transfer Gateways",
          "Mobile-Optimized Shopping Cart",
          "Catalog & Inventory Management",
          "Zero Layout Shifts Guaranteed (CLS = 0)"
        ]
      }
    },
    gallery: {
      tag: "Real Client Showcase",
      title: "Custom Full-Stack Web Development & Complete SEO Optimization",
      subtitle: "Real client success stories in the US, Peru, and Spain. Hand-coded custom websites featuring 100/100 speed scores.",
      allFilter: "All Projects",
      corporateFilter: "Corporate & Legal",
      servicesFilter: "Services & Industry",
      techFilter: "Tech & Innovation",
      gourmetFilter: "Gourmet & Brands",
      viewProjectBtn: "View Full Project",
      requestSimilarBtn: "Request Similar Website",
      modalQuoteBtn: "Get Quote for Similar Site",
      globalCta: "SEO-Optimized Custom Web Design | Scale Your Business Online"
    },
    solutions: {
      tag: "Commercial Sectors",
      title: "Affordable High-Performance Websites for SMBs & Entrepreneurs",
      subtitle: "Battle-tested web structures for legal, medical, industrial, hotel, restaurant, and SaaS sectors.",
      cta: "View Sector Solution"
    },
    advantages: {
      tag: "Competitive Advantage",
      title: "Fast & SEO-Optimized Custom Websites | Top Web Development Agency",
      subtitle: "Why brands in the US, Peru, and Spain choose our hand-coded custom web development."
    },
    services: {
      tag: "Specialized Services",
      title: "Custom Enterprise Web Development | Get a Free Quote",
      subtitle: "End-to-end web engineering, international SEO, and speed optimization."
    },
    process: {
      tag: "Efficient Process",
      title: "Professional & High-Speed Web Design in 4 Steps",
      subtitle: "Clear, transparent commercial development workflow."
    },
    contact: {
      tag: "Immediate Response",
      title: "Custom Enterprise Web Development | Get a Free Quote",
      subtitle: "Receive your technical proposal and formal quote in under 2 hours.",
      phoneLabel: "Direct Call / WhatsApp / SMS: +1 (774) 747-7215",
      nameLabel: "Your Name or Business Name",
      namePlaceholder: "E.g. John Doe / Company Inc.",
      emailLabel: "Work Email Address",
      emailPlaceholder: "john@company.com",
      serviceLabel: "Required Web Service",
      messageLabel: "Project Details",
      messagePlaceholder: "Tell us about your business goals and timeline...",
      submitBtn: "Submit Quote Request",
      submitting: "Submitting Request...",
      successTitle: "Request Received!",
      successDesc: "Thank you. We will send a customized technical proposal shortly.",
      usTrustBadge: "🇺🇸 🇵🇪 🇪🇸 Serving US, Peru, and Spain | Tel: +1 (774) 747-7215",
      locationsNotice: "Direct service hubs & SEO targets: United States (MA, FL, NY), Peru (Lima), Spain (Madrid, Barcelona)."
    },
    report: {
      buttonText: "Download Traffic & SEO Keywords Report (Excel)",
      downloadTitle: "JSTACK_Traffic_Keywords_Report.csv",
      filename: "JSTACK_SEO_Traffic_Report.csv"
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      tagline: "Professional & High-Speed Web Design | Commercial Business Websites in the US, Peru, and Spain.",
      countriesServed: "Primary Target Markets: United States 🇺🇸 | Peru 🇵🇪 | Spain 🇪🇸 | Mexico 🇲🇽",
      phoneDirect: "Direct Phone / WhatsApp / SMS: +1 (774) 747-7215"
    },
    stickyBar: {
      text: "SEO-Optimized Custom Web Design | Tel: +1 (774) 747-7215",
      button: "Get Quote"
    }
  }
};
