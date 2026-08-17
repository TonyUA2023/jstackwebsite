export type Language = 'en' | 'es';

export interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tag: string;
}

export interface PlatformItem {
  name: string;
  category: string;
  description: string;
  badge: string;
}

export interface TranslationStructure {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  topBar: {
    phone: string;
    phoneDisplay: string;
    flagText: string;
    locationText: string;
    smsText: string;
    whatsappText: string;
  };
  header: {
    expertise: string;
    projects: string;
    platforms: string;
    process: string;
    about: string;
    contact: string;
    getQuote: string;
    phone: string;
    searchPlaceholder: string;
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
    secondaryCta: string;
    badgeSpeed: string;
    badgeCode: string;
    badgeGuarantee: string;
    clientTagline1: string;
    clientTagline2: string;
    mockupNote: string;
  };
  expertise: {
    tag: string;
    title: string;
    subtitle: string;
    learnMore: string;
    items: ExpertiseItem[];
  };
  platforms: {
    tag: string;
    title: string;
    subtitle: string;
    badgePartner: string;
    items: PlatformItem[];
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
    speedMetricLabel: string;
    growthMetricLabel: string;
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
  founder: {
    tag: string;
    title: string;
    subtitle: string;
    role: string;
    specialization: string;
    bio: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    metric3Val: string;
    metric3Label: string;
    verifiedOn: string;
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
    directChannelsTitle: string;
  };
  report: {
    buttonText: string;
    downloadTitle: string;
    filename: string;
  };
  footer: {
    tagline: string;
    aboutDesc: string;
    rights: string;
    privacy: string;
    terms: string;
    countriesServed: string;
    phoneDirect: string;
    colExpertise: string;
    colPlatforms: string;
    colCompany: string;
    colContact: string;
  };
  stickyBar: {
    text: string;
    button: string;
  };
}

export const translations: Record<Language, TranslationStructure> = {
  es: {
    meta: {
      title: "Creando Experiencias Digitales Que Impulsan Tu Crecimiento | JSTACK",
      description: "Agencia de diseño web, desarrollo de software e ingeniería digital con código de alto rendimiento (100/100 Google Speed) para empresas en EE. UU., Perú y España.",
      keywords: "Diseño Web Profesional y Eficiente, Tu Página Web Comercial, Creación de Páginas Web Vendedoras, Páginas Web Optimizadas y Rápidas, Agencias de Desarrollo Web, Diseño Web Optimizado para SEO, Páginas Web Económicas para Pymes, Diseño de Tiendas Online E-commerce, Creación de Landing Pages de Alta Conversión, Desarrollo Web a Medida"
    },
    topBar: {
      phone: "+17747477215",
      phoneDisplay: "+1 (774) 747-7215",
      flagText: "USA / Internacional",
      locationText: "Soporte Global",
      smsText: "SMS Directo",
      whatsappText: "WhatsApp"
    },
    header: {
      expertise: "Expertise",
      projects: "Proyectos",
      platforms: "Plataformas",
      process: "Proceso",
      about: "Nosotros",
      contact: "Contacto",
      getQuote: "Cotizar Proyecto",
      phone: "+1 (774) 747-7215",
      searchPlaceholder: "Buscar servicios o tecnologías..."
    },
    hero: {
      badge: "Agencia de Ingeniería Digital & Desarrollo Web",
      h1Title: "Creando Experiencias Digitales Que",
      h1Gradient: "Impulsan Tu Crecimiento",
      subtitle: "Una agencia de diseño web, desarrollo y optimización digital con la firme convicción en el poder de la tecnología para transformar positivamente tu negocio y multiplicar tus ventas.",
      seoHeadline1: "Desarrollo Web de Alto Rendimiento | 100/100 Google Speed Score",
      seoHeadline2: "Código 100% Personalizado | Máxima Conversión y Posicionamiento SEO",
      inputPlaceholder: "Escribe el nombre de tu empresa o sitio web...",
      ctaButton: "Empezar Proyecto",
      secondaryCta: "Ver Proyectos",
      badgeSpeed: "100/100 Velocidad Google",
      badgeCode: "100% Código Propio",
      badgeGuarantee: "Garantía de Conversión",
      clientTagline1: "Plataforma Wayra Tech",
      clientTagline2: "Sitio Corporativo Esmerald",
      mockupNote: "Proyectos Reales Diseñados por JSTACK"
    },
    expertise: {
      tag: "NUESTRAS CAPACIDADES",
      title: "Our Expertise",
      subtitle: "Ingeniería digital completa, desde sitios web ultraveloces hasta aplicaciones personalizadas y automatización inteligente.",
      learnMore: "Explorar Servicio",
      items: [
        {
          id: "web-dev",
          title: "Desarrollo Web & Aplicaciones a Medida",
          subtitle: "Frontend & Backend con React, TypeScript y Next.js",
          description: "Desarrollamos plataformas web y portales corporativos de alto rendimiento, diseñados con arquitecturas modernas sin bloatware ni plantillas lentas.",
          features: ["100/100 Google Core Web Vitals", "Código Limpio y Escalable", "Arquitectura Segura y Sin Fricción"],
          tag: "Core Engineering"
        },
        {
          id: "ux-ui",
          title: "Diseño de Experiencias (UX / UI)",
          subtitle: "Interfaces atractivas enfocadas en conversión comercial",
          description: "Diseño visual de clase mundial que capta la atención inmediata de tus clientes potenciales y los guía fluidamente hacia la compra o contacto.",
          features: ["Wireframes y Prototipos Interactivos", "Diseño Mobile-First Responsivo", "Micro-interacciones Fluidas"],
          tag: "Design & UX"
        },
        {
          id: "seo-marketing",
          title: "Marketing Digital & Optimización SEO",
          subtitle: "Posicionamiento orgánico en Google y tráfico calificado",
          description: "Estrategias técnicas de SEO on-page, datos estructurados Schema.org y optimización de palabras clave para dominar los resultados de búsqueda en tu sector.",
          features: ["Indexación Técnica Inmediata", "Rich Snippets & SEO Local", "Estrategias de Conversión CRO"],
          tag: "Growth & SEO"
        },
        {
          id: "ai-automation",
          title: "Estrategia & Consultoría en IA",
          subtitle: "Automatización inteligente con modelos de lenguaje y APIs",
          description: "Integración de inteligencia artificial, chatbots de atención continua y flujos de automatización que ahorran horas de trabajo operativo a tu equipo.",
          features: ["Agentes de IA y Chatbots", "Conexión de APIs y Webhooks", "Optimización de Flujos Comerciales"],
          tag: "AI & Automation"
        },
        {
          id: "ecommerce",
          title: "E-Commerce & Pasarelas de Pago",
          subtitle: "Tiendas virtuales veloces con Stripe, PayPal y transferencias",
          description: "Catálogos interactivos y carritos de compra optimizados para minimizar carritos abandonados y maximizar las transacciones sin caídas.",
          features: ["Filtros y Búsqueda Instantánea", "Checkout Seguro y Multidivisa", "Gestión Sencilla de Productos"],
          tag: "E-Commerce"
        },
        {
          id: "cloud-audit",
          title: "Auditoría de Velocidad & Infraestructura Cloud",
          subtitle: "Transformamos sitios lentos en líderes de velocidad",
          description: "Diagnóstico profundo y reingeniería de plataformas lentas para alcanzar tiempos de respuesta inferiores a 0.3 segundos y 99.9% de disponibilidad.",
          features: ["Diagnóstico Google Speed", "Optimización de Assets y Scripts", "Hosting Cloud de Alta Velocidad"],
          tag: "Performance"
        }
      ]
    },
    platforms: {
      tag: "TECNOLOGÍAS & ECOSISTEMA",
      title: "Plataformas & Tecnologías que Dominamos",
      subtitle: "Trabajamos con el stack tecnológico más avanzado del mercado global para garantizar estabilidad, escalabilidad y velocidad.",
      badgePartner: "Stack Tecnológico Certificado",
      items: [
        { name: "React & Next.js", category: "Frontend", description: "Interfaces ultra-rápidas y renderizado del lado del servidor.", badge: "Ecosistema Principal" },
        { name: "TypeScript", category: "Language", description: "Código robusto, seguro y libre de errores en producción.", badge: "Tipado Estricto" },
        { name: "Tailwind CSS", category: "Styling", description: "Diseño visual personalizado con cero CSS innecesario.", badge: "Optimizado" },
        { name: "Node.js & Python", category: "Backend", description: "APIs veloces, microservicios y procesamiento de datos.", badge: "Alta Concurrencia" },
        { name: "Supabase & PostgreSQL", category: "Database", description: "Bases de datos relacionales en la nube de alta disponibilidad.", badge: "Cloud Native" },
        { name: "Stripe & PayPal", category: "Payments", description: "Procesamiento de pagos internacionales seguro y certificado.", badge: "PCI-DSS" },
        { name: "IA & OpenAI / Gemini", category: "Artificial Intelligence", description: "Integración de modelos LLM y asistentes de soporte inteligentes.", badge: "Next-Gen AI" },
        { name: "Vite & Docker", category: "DevOps", description: "Compilación instantánea y despliegue continuo contenerizado.", badge: "Despliegue Rápido" }
      ]
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
      tag: "CASOS DE ÉXITO & PORTAFOLIO",
      title: "Featured Projects & Client Results",
      subtitle: "Casos de éxito reales en Estados Unidos, Perú y España. Sitios web desarrollados a medida con 100/100 de velocidad en Google y ROI comprobable.",
      allFilter: "Todos los Proyectos",
      corporateFilter: "Corporativos & Legales",
      servicesFilter: "Servicios & Industria",
      techFilter: "Tech & Innovación",
      gourmetFilter: "Gastronomía & Marcas",
      viewProjectBtn: "Ver Proyecto",
      requestSimilarBtn: "Solicitar Proyecto Similar",
      modalQuoteBtn: "Cotizar Proyecto Similar",
      globalCta: "Diseño Web Optimizado para SEO | Vende Más en Internet",
      speedMetricLabel: "Velocidad Google",
      growthMetricLabel: "Crecimiento Prospectos"
    },
    solutions: {
      tag: "Sectores Comerciales",
      title: "Páginas Web Económicas para Pymes y Emprendedores",
      subtitle: "Arquitecturas web probadas para restaurantes, servicios legales, salud, industria, hoteles y startups.",
      cta: "Ver Solución de Sector"
    },
    advantages: {
      tag: "POR QUÉ ELEGIRNOS",
      title: "Why JSTACK / Our Digital Advantage",
      subtitle: "Por qué empresas en EE. UU., Perú y España prefieren nuestra ingeniería de desarrollo web a medida sobre plantillas genéricas."
    },
    services: {
      tag: "Servicios Especializados",
      title: "Desarrollo Web para Negocios y Empresas | Cotiza Tu Web",
      subtitle: "Servicios integrales de programación web, SEO internacional y optimización de velocidad."
    },
    process: {
      tag: "METODOLOGÍA DE TRABAJO",
      title: "Nuestro Proceso de Desarrollo en 4 Fases",
      subtitle: "Un enfoque transparente, ágil y centrado en resultados medibles desde el primer día."
    },
    founder: {
      tag: "LIDERAZGO TÉCNICO",
      title: "Tony Ulloa",
      subtitle: "Ingeniero de Sistemas & Especialista en IA y Arquitectura Web",
      role: "Lead Systems Engineer & Founder",
      specialization: "Desarrollo Full-Stack | Optimización Google 100/100 | Agentes de IA",
      bio: "Ingeniero de Sistemas con amplia trayectoria internacional en el diseño y construcción de arquitecturas digitales de alto rendimiento. Especializado en crear soluciones web que combinan velocidad extrema, código limpio y conversión comercial para empresas en EE. UU. y Latinoamérica.",
      metric1Val: "100%",
      metric1Label: "Código Limpio a Medida",
      metric2Val: "< 0.3s",
      metric2Label: "Tiempo de Carga Promedio",
      metric3Val: "+150",
      metric3Label: "Proyectos Entregados con Éxito",
      verifiedOn: "Perfiles Profesionales Verificados"
    },
    contact: {
      tag: "HABLEMOS DE TU PROYECTO",
      title: "Let's Build Something Great Together",
      subtitle: "Recibe una propuesta técnica y cotización formal personalizada en menos de 2 horas. Atención directa en EE. UU., Perú y España.",
      phoneLabel: "Llamada / WhatsApp / SMS Directo: +1 (774) 747-7215",
      nameLabel: "Tu Nombre o Nombre de Empresa",
      namePlaceholder: "Ej. Juan Pérez / Empresa LLC",
      emailLabel: "Correo Electrónico de Contacto",
      emailPlaceholder: "tuemail@empresa.com",
      serviceLabel: "Tipo de Solución Requerida",
      messageLabel: "Cuéntanos sobre tu proyecto o metas",
      messagePlaceholder: "Describe tu negocio, objetivos de ventas y requerimientos principales...",
      submitBtn: "Solicitar Cotización Inmediata",
      submitting: "Enviando Solicitud...",
      successTitle: "¡Solicitud Recibida con Éxito!",
      successDesc: "Gracias. Tony Ulloa y el equipo de JSTACK revisarán tus requerimientos y te contactarán a la brevedad.",
      usTrustBadge: "🇺🇸 🇵🇪 🇪🇸 Cobertura Directa en Estados Unidos, Perú y España | Tel: +1 (774) 747-7215",
      locationsNotice: "Centros de servicio: Massachusetts (EE. UU.), Lima (Perú), Madrid (España).",
      directChannelsTitle: "Canales de Contacto Rápido"
    },
    report: {
      buttonText: "Descargar Reporte SEO y Tráfico Web (Excel)",
      downloadTitle: "Reporte_Trafico_y_Palabras_Clave_JSTACK.csv",
      filename: "Reporte_SEO_Busquedas_JSTACK.csv"
    },
    footer: {
      tagline: "Creando Experiencias Digitales Que Impulsan Tu Crecimiento.",
      aboutDesc: "Agencia especializada en diseño web corporativo, desarrollo de aplicaciones y consultoría en ingeniería digital para empresas en EE. UU., Perú y España.",
      rights: "Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos del Servicio",
      countriesServed: "Sedes de Atención: Estados Unidos 🇺🇸 | Perú 🇵🇪 | España 🇪🇸 | México 🇲🇽",
      phoneDirect: "Llamada / WhatsApp / SMS: +1 (774) 747-7215",
      colExpertise: "Expertise",
      colPlatforms: "Plataformas",
      colCompany: "Empresa",
      colContact: "Contacto Directo"
    },
    stickyBar: {
      text: "Creando Experiencias Digitales de Alto Rendimiento | Tel: +1 (774) 747-7215",
      button: "Cotizar Proyecto"
    }
  },
  en: {
    meta: {
      title: "Creating Digital Experiences That Drive Growth | JSTACK",
      description: "A web design, development, and digital marketing agency with a passionate belief in the power of technology to positively transform business practices.",
      keywords: "Professional & High-Speed Web Design, Commercial Business Websites, High-Converting Custom Web Development, Fast & SEO-Optimized Custom Websites, Top Web Development Agency, SEO-Optimized Custom Web Design, E-Commerce Stores & Corporate Web Solutions, Custom Full-Stack Web Development"
    },
    topBar: {
      phone: "+17747477215",
      phoneDisplay: "+1 (774) 747-7215",
      flagText: "USA / Global",
      locationText: "Global Direct Support",
      smsText: "Direct SMS",
      whatsappText: "WhatsApp"
    },
    header: {
      expertise: "Expertise",
      projects: "Projects",
      platforms: "Platforms",
      process: "Process",
      about: "About",
      contact: "Contact",
      getQuote: "Contact Us",
      phone: "+1 (774) 747-7215",
      searchPlaceholder: "Search expertise or technologies..."
    },
    hero: {
      badge: "Digital Engineering & Web Development Agency",
      h1Title: "Creating Digital Experiences That",
      h1Gradient: "Drive Growth",
      subtitle: "A web design, development, and digital marketing agency with a passionate belief in the power of technology to positively transform business practices.",
      seoHeadline1: "High-Performance Web Development | 100/100 Google Speed Guarantee",
      seoHeadline2: "100% Hand-Coded Architecture | Zero Bloatware & Maximum SEO Rank",
      inputPlaceholder: "Enter your business name or website...",
      ctaButton: "Learn More",
      secondaryCta: "View Projects",
      badgeSpeed: "100/100 Google Speed",
      badgeCode: "100% Custom Code",
      badgeGuarantee: "Conversion Guarantee",
      clientTagline1: "Wayra Tech Platform",
      clientTagline2: "Esmerald Corporate Site",
      mockupNote: "Real Projects Handcrafted by JSTACK"
    },
    expertise: {
      tag: "OUR CORE CAPABILITIES",
      title: "Our Expertise",
      subtitle: "End-to-end digital engineering, from ultra-fast websites to custom cloud platforms and intelligent AI workflows.",
      learnMore: "Learn More",
      items: [
        {
          id: "web-dev",
          title: "Web & Application Development",
          subtitle: "Frontend & Backend with React, TypeScript & Next.js",
          description: "We engineer high-performance web applications and commercial platforms tailored with clean, modern code and zero template overhead.",
          features: ["100/100 Google Core Web Vitals", "Clean & Scalable Architecture", "Frictionless Security Standards"],
          tag: "Core Engineering"
        },
        {
          id: "ux-ui",
          title: "Experience Design (UX / UI)",
          subtitle: "Visual storytelling built for maximum commercial conversion",
          description: "World-class visual aesthetics and seamless responsive user flows that captivate high-intent buyers and turn visitors into long-term clients.",
          features: ["Interactive Wireframes & Prototypes", "Mobile-First Responsive Systems", "Smooth Micro-Interactions"],
          tag: "Design & UX"
        },
        {
          id: "seo-marketing",
          title: "Digital Marketing & SEO Optimization",
          subtitle: "Organic search dominance and qualified lead flow",
          description: "Technical on-page SEO, rich Schema.org structured data, and high-intent keyword strategies engineered to outrank competitors on Google.",
          features: ["Instant Technical Indexing", "Rich Snippets & Local SEO", "Conversion Rate Optimization (CRO)"],
          tag: "Growth & SEO"
        },
        {
          id: "ai-automation",
          title: "Strategy & AI Consulting",
          subtitle: "Intelligent automation with LLMs, custom agents & APIs",
          description: "Custom AI integrations, 24/7 intelligent customer assistants, and automated business workflows that eliminate hours of repetitive manual tasks.",
          features: ["Autonomous AI Agents & Chatbots", "REST & GraphQL API Integration", "Automated Sales Pipelines"],
          tag: "AI & Automation"
        },
        {
          id: "ecommerce",
          title: "E-Commerce & Payment Gateways",
          subtitle: "Lightning-fast digital storefronts with Stripe & PayPal",
          description: "Interactive product catalogs and checkout funnels engineered to minimize cart abandonment and handle transactions globally without downtime.",
          features: ["Instant Search & Filter Engines", "Multi-Currency Global Checkout", "Intuitive Product Management"],
          tag: "E-Commerce"
        },
        {
          id: "cloud-audit",
          title: "Speed Audit & Cloud Infrastructure",
          subtitle: "Re-engineering slow websites into 100/100 speed performers",
          description: "Deep diagnostic audits and codebase refactoring to achieve sub-0.3s response times, zero layout shifts, and 99.9% uptime guarantees.",
          features: ["Google Speed Audit & Remediation", "Asset & Script Minification", "High-Performance Cloud Hosting"],
          tag: "Performance"
        }
      ]
    },
    platforms: {
      tag: "TECHNOLOGY & ECOSYSTEM",
      title: "Platforms & Technologies We Master",
      subtitle: "We build on today's most reliable and scalable global technology stack to ensure speed, security, and long-term stability.",
      badgePartner: "Certified Modern Tech Stack",
      items: [
        { name: "React & Next.js", category: "Frontend", description: "Ultra-fast user interfaces and server-side rendering for optimal speed.", badge: "Core Stack" },
        { name: "TypeScript", category: "Language", description: "Strictly-typed, bulletproof codebase eliminating runtime errors.", badge: "Strict Typing" },
        { name: "Tailwind CSS", category: "Styling", description: "Bespoke design systems with zero bloatware and optimal CSS payloads.", badge: "Optimized" },
        { name: "Node.js & Python", category: "Backend", description: "High-concurrency microservices, data processing, and fast APIs.", badge: "High Concurrency" },
        { name: "Supabase & PostgreSQL", category: "Database", description: "Enterprise cloud relational databases with real-time sync.", badge: "Cloud Native" },
        { name: "Stripe & PayPal", category: "Payments", description: "Bank-grade international payment processing and subscriptions.", badge: "PCI-DSS" },
        { name: "AI & OpenAI / Gemini", category: "Artificial Intelligence", description: "Cutting-edge LLM integration and intelligent automation workflows.", badge: "Next-Gen AI" },
        { name: "Vite & Docker", category: "DevOps", description: "Instant hot builds and containerized automated CI/CD deployments.", badge: "Rapid CI/CD" }
      ]
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
      tag: "CLIENT SUCCESS & PORTFOLIO",
      title: "Featured Projects & Client Results",
      subtitle: "Real client success stories in the US, Peru, and Spain. Hand-coded custom websites featuring 100/100 speed scores and proven ROI.",
      allFilter: "All Projects",
      corporateFilter: "Corporate & Legal",
      servicesFilter: "Services & Industry",
      techFilter: "Tech & Innovation",
      gourmetFilter: "Gourmet & Brands",
      viewProjectBtn: "View Project",
      requestSimilarBtn: "Request Similar Website",
      modalQuoteBtn: "Get Quote for Similar Site",
      globalCta: "SEO-Optimized Custom Web Design | Scale Your Business Online",
      speedMetricLabel: "Google Speed Score",
      growthMetricLabel: "Lead Growth"
    },
    solutions: {
      tag: "Commercial Sectors",
      title: "Affordable High-Performance Websites for SMBs & Entrepreneurs",
      subtitle: "Battle-tested web structures for legal, medical, industrial, hotel, restaurant, and SaaS sectors.",
      cta: "View Sector Solution"
    },
    advantages: {
      tag: "WHY CHOOSE US",
      title: "Why JSTACK / Our Digital Advantage",
      subtitle: "Why businesses in the US, Peru, and Spain trust our hand-coded web engineering over generic drag-and-drop templates."
    },
    services: {
      tag: "Specialized Services",
      title: "Custom Enterprise Web Development | Get a Free Quote",
      subtitle: "End-to-end web engineering, international SEO, and speed optimization."
    },
    process: {
      tag: "DEVELOPMENT WORKFLOW",
      title: "Our 4-Step Engineering Process",
      subtitle: "A transparent, agile, and results-focused methodology delivering speed and ROI from day one."
    },
    founder: {
      tag: "TECHNICAL LEADERSHIP",
      title: "Tony Ulloa",
      subtitle: "Systems Engineer & AI / Web Architecture Specialist",
      role: "Lead Systems Engineer & Founder",
      specialization: "Full-Stack Development | 100/100 Google Speed | AI Agents",
      bio: "Systems Engineer with an international track record in architecting high-performance digital platforms. Specializing in engineered web experiences that merge lightning speed, clean code, and commercial conversion for businesses in the US and Latin America.",
      metric1Val: "100%",
      metric1Label: "Bespoke Custom Code",
      metric2Val: "< 0.3s",
      metric2Label: "Average Page Load Time",
      metric3Val: "+150",
      metric3Label: "Successfully Delivered Projects",
      verifiedOn: "Verified Professional Profiles"
    },
    contact: {
      tag: "START YOUR PROJECT",
      title: "Let's Build Something Great Together",
      subtitle: "Receive a tailored technical proposal and formal quote in under 2 hours. Serving clients in the US, Peru, and Spain.",
      phoneLabel: "Direct Phone / WhatsApp / SMS: +1 (774) 747-7215",
      nameLabel: "Your Name or Business Name",
      namePlaceholder: "E.g. John Doe / Company LLC",
      emailLabel: "Work Email Address",
      emailPlaceholder: "john@company.com",
      serviceLabel: "Required Digital Solution",
      messageLabel: "Project Details & Goals",
      messagePlaceholder: "Tell us about your business goals, timeline, and core requirements...",
      submitBtn: "Submit Quote Request",
      submitting: "Submitting Request...",
      successTitle: "Request Received Successfully!",
      successDesc: "Thank you. Tony Ulloa and the JSTACK team will review your requirements and reach out promptly.",
      usTrustBadge: "🇺🇸 🇵🇪 🇪🇸 Direct Coverage in United States, Peru, and Spain | Tel: +1 (774) 747-7215",
      locationsNotice: "Service hubs: Massachusetts (US), Lima (Peru), Madrid (Spain).",
      directChannelsTitle: "Fast Direct Channels"
    },
    report: {
      buttonText: "Download Traffic & SEO Keywords Report (Excel)",
      downloadTitle: "JSTACK_Traffic_Keywords_Report.csv",
      filename: "JSTACK_SEO_Traffic_Report.csv"
    },
    footer: {
      tagline: "Creating Digital Experiences That Drive Growth.",
      aboutDesc: "A premier web engineering, application development, and digital marketing agency delivering high-speed solutions for businesses in the US, Peru, and Spain.",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      countriesServed: "Service Hubs: United States 🇺🇸 | Peru 🇵🇪 | Spain 🇪🇸 | Mexico 🇲🇽",
      phoneDirect: "Call / WhatsApp / SMS: +1 (774) 747-7215",
      colExpertise: "Expertise",
      colPlatforms: "Platforms",
      colCompany: "Company",
      colContact: "Direct Contact"
    },
    stickyBar: {
      text: "Creating High-Performance Digital Experiences | Tel: +1 (774) 747-7215",
      button: "Contact Us"
    }
  }
};
