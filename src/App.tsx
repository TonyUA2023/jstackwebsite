import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header, PageRoute } from './components/Header';
import { Hero } from './components/Hero';
import { FounderSection } from './components/FounderSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { SuccessSection } from './components/SuccessSection';
import { ReputationSection } from './components/ReputationSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { PlatformsSection } from './components/PlatformsSection';
import { WebsitesSection } from './components/WebsitesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AnalyticsReport } from './components/AnalyticsReport';
import { FloatingContactWidget } from './components/FloatingContactWidget';

import { ContactPage } from './pages/ContactPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { SitemapPage } from './pages/SitemapPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';

// 5 Dedicated Service Pages
import { WebsitesServicePage } from './pages/services/WebsitesServicePage';
import { EcommerceServicePage } from './pages/services/EcommerceServicePage';
import { B2BSystemsServicePage } from './pages/services/B2BSystemsServicePage';
import { AIAutomationsServicePage } from './pages/services/AIAutomationsServicePage';
import { EnterpriseITServicePage } from './pages/services/EnterpriseITServicePage';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page')?.toLowerCase();

      if (hash.includes('services-websites') || pageParam === 'services-websites' || hash.includes('websites')) {
        setCurrentPage('services-websites');
      } else if (hash.includes('services-ecommerce') || pageParam === 'services-ecommerce' || hash.includes('ecommerce')) {
        setCurrentPage('services-ecommerce');
      } else if (hash.includes('services-b2b') || pageParam === 'services-b2b' || hash.includes('b2b')) {
        setCurrentPage('services-b2b');
      } else if (hash.includes('services-ai') || pageParam === 'services-ai' || hash.includes('ai')) {
        setCurrentPage('services-ai');
      } else if (hash.includes('services-it') || pageParam === 'services-it' || hash.includes('it')) {
        setCurrentPage('services-it');
      } else if (hash.includes('projects') || pageParam === 'projects') {
        setCurrentPage('projects');
      } else if (hash.includes('about') || pageParam === 'about') {
        setCurrentPage('about');
      } else if (hash.includes('contact') || pageParam === 'contact') {
        setCurrentPage('contact');
      } else if (hash.includes('terms') || pageParam === 'terms') {
        setCurrentPage('terms');
      } else if (hash.includes('privacy') || pageParam === 'privacy') {
        setCurrentPage('privacy');
      } else if (hash.includes('sitemap') || pageParam === 'sitemap') {
        setCurrentPage('sitemap');
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateToPage = (page: PageRoute) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `#/${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#D8202A] selection:text-white relative">
        {/* Full-Width Top Bar & Navigation Header */}
        <Header onNavigatePage={navigateToPage} />

        {/* Dynamic Page Rendering */}
        <main className="flex-grow">
          {currentPage === 'contact' && (
            <ContactPage onNavigateHome={() => navigateToPage('home')} />
          )}

          {currentPage === 'services-websites' && (
            <WebsitesServicePage onNavigateHome={() => navigateToPage('home')} />
          )}

          {currentPage === 'services-ecommerce' && (
            <EcommerceServicePage onNavigateHome={() => navigateToPage('home')} />
          )}

          {currentPage === 'services-b2b' && (
            <B2BSystemsServicePage onNavigateHome={() => navigateToPage('home')} />
          )}

          {currentPage === 'services-ai' && (
            <AIAutomationsServicePage onNavigateHome={() => navigateToPage('home')} />
          )}

          {currentPage === 'services-it' && (
            <EnterpriseITServicePage onNavigateHome={() => navigateToPage('home')} />
          )}

          {currentPage === 'projects' && (
            <ProjectsPage onNavigateHome={() => navigateToPage('home')} />
          )}

          {currentPage === 'about' && (
            <AboutPage onNavigateHome={() => navigateToPage('home')} />
          )}

          {currentPage === 'sitemap' && (
            <SitemapPage onNavigateHome={() => navigateToPage('home')} />
          )}

          {currentPage === 'terms' && (
            <TermsPage onNavigateHome={() => navigateToPage('home')} />
          )}

          {currentPage === 'privacy' && (
            <PrivacyPage onNavigateHome={() => navigateToPage('home')} />
          )}

          {currentPage === 'home' && (
            <>
              {/* 1. Hero Section */}
              <Hero />

              {/* 2. Technical Leadership & Founder Spotlight */}
              <FounderSection />

              {/* 3. Our Expertise Section */}
              <ExpertiseSection />

              {/* 4. Working to Build Your Success */}
              <SuccessSection />

              {/* 5. Our Reputation is Important */}
              <ReputationSection />

              {/* 6. Featured Projects & Client Results Showcase */}
              <PhotoGallerySection />

              {/* 7. Platforms & Technology Ecosystem */}
              <PlatformsSection />

              {/* 8. Commercial Website Types */}
              <WebsitesSection />

              {/* 9. 4-Step Engineering Workflow & Guarantees */}
              <WhyUsSection />

              {/* 10. Contact & Quote Request Form */}
              <ContactSection />
            </>
          )}
        </main>

        {/* Multi-Column Corporate Footer */}
        <Footer onNavigatePage={navigateToPage} />

        {/* Floating Bottom-Right Contact Widget */}
        <FloatingContactWidget />

        {/* Analytics & SEO Report Handler */}
        <AnalyticsReport />
      </div>
    </LanguageProvider>
  );
}

export default App;
