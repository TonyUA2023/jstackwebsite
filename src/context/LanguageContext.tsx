import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, TranslationStructure } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStructure;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang')?.toLowerCase();
      if (langParam === 'en' || langParam === 'es') {
        return langParam as Language;
      }

      const savedLang = localStorage.getItem('jstack_lang') as Language;
      if (savedLang === 'en' || savedLang === 'es') {
        return savedLang;
      }

      const browserLang = navigator.language || (navigator as any).userLanguage || '';
      if (browserLang.toLowerCase().startsWith('es')) {
        return 'es';
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('jstack_lang', lang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    }
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.documentElement.lang = language;

    const currentMeta = translations[language].meta;
    document.title = currentMeta.title;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentMeta.description);

    // Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', currentMeta.keywords);

    // GEO Tags for United States, Peru, Spain
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('geo.region', 'US;PE;ES');
    updateMetaTag('geo.placename', 'United States, Peru, Spain');

    // Hreflang SEO Tags
    const updateHreflang = (rel: string, hreflang: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"][hreflang="${hreflang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    const baseUrl = window.location.origin + window.location.pathname;
    updateHreflang('alternate', 'en', `${baseUrl}?lang=en`);
    updateHreflang('alternate', 'es', `${baseUrl}?lang=es`);
    updateHreflang('alternate', 'x-default', baseUrl);

    // JSON-LD Schema.org Multilocation Data
    let scriptJsonLd = document.getElementById('jstack-jsonld') as HTMLScriptElement;
    if (!scriptJsonLd) {
      scriptJsonLd = document.createElement('script');
      scriptJsonLd.id = 'jstack-jsonld';
      scriptJsonLd.type = 'application/ld+json';
      document.head.appendChild(scriptJsonLd);
    }

    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "JSTACK Digital Solutions",
      "telephone": "+1-774-747-7215",
      "url": "https://jstack.dev",
      "logo": "https://jstack.dev/logo.png",
      "description": currentMeta.description,
      "inLanguage": language === 'en' ? ["en-US"] : ["es-PE", "es-ES", "es-MX"],
      "areaServed": [
        { "@type": "Country", "name": "United States", "identifier": "US" },
        { "@type": "Country", "name": "Peru", "identifier": "PE" },
        { "@type": "Country", "name": "Spain", "identifier": "ES" }
      ],
      "geo": [
        { "@type": "GeoCoordinates", "latitude": 42.3601, "longitude": -71.0589 }, // Boston/MA, US
        { "@type": "GeoCoordinates", "latitude": -12.0464, "longitude": -77.0428 }, // Lima, PE
        { "@type": "GeoCoordinates", "latitude": 40.4168, "longitude": -3.7038 }   // Madrid, ES
      ],
      "priceRange": "$$$",
      "offers": {
        "@type": "Offer",
        "description": "Professional & High-Speed Web Design | Custom Business Development",
        "priceCurrency": "USD"
      }
    };

    scriptJsonLd.textContent = JSON.stringify(jsonLdData);

  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
