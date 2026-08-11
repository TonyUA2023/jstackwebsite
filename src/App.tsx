import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FounderSection } from './components/FounderSection';
import { WebsitesSection } from './components/WebsitesSection';
import { IndustrySolutionsSection } from './components/IndustrySolutionsSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { AnalyticsReport } from './components/AnalyticsReport';
import { FloatingContactWidget } from './components/FloatingContactWidget';

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#05070A] text-white flex flex-col font-sans selection:bg-[#0284C7] selection:text-white relative">
        {/* Full-Width Header */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* Founder & Systems Engineer / Web & Mobile Developer Section */}
          <FounderSection />

          {/* Commercial Website Solutions */}
          <WebsitesSection />

          {/* Dedicated Industry Solutions Hub */}
          <IndustrySolutionsSection />

          {/* Real Client Experience & Photo Showcase */}
          <PhotoGallerySection />

          {/* Advantages Section */}
          <AdvantagesSection />

          {/* Core Services Section */}
          <ServicesSection />

          {/* Agile Process Section */}
          <WhyUsSection />

          {/* Contact Form */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Quick Contact Bar */}
        <StickyBottomBar />

        {/* Floating Bottom-Right WhatsApp & SMS Buttons */}
        <FloatingContactWidget />

        {/* Internal Link Analytics & Excel Report Handler */}
        <AnalyticsReport />
      </div>
    </LanguageProvider>
  );
}

export default App;
