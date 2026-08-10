import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WebsitesSection } from './components/WebsitesSection';
import { IndustrySolutionsSection } from './components/IndustrySolutionsSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

export function App() {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-white flex flex-col font-sans selection:bg-jstack-cyan selection:text-white relative">
      {/* Traditional Full-Width Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Dark Hero Section matching Screenshot 1 */}
        <Hero />

        {/* Dedicated Websites Section (LIGHT) */}
        <WebsitesSection />

        {/* Dedicated Industry Solutions Hub - Car Detailing, Fashion, Hotels, Restaurants, Medical, Tech (DARK) */}
        <IndustrySolutionsSection />

        {/* Ultra-Minimalist Photo Gallery (LIGHT) */}
        <PhotoGallerySection />

        {/* Advantages Section (DARK) */}
        <AdvantagesSection />

        {/* Core Services Section (LIGHT) */}
        <ServicesSection />

        {/* Agile 4-Step Process Section (DARK) */}
        <WhyUsSection />

        {/* Contact & Quote Request Form (LIGHT) */}
        <ContactSection />
      </main>

      {/* Solid Black Footer (DARK) */}
      <Footer />

      {/* Sticky Bottom Floating Quick Quote Form */}
      <StickyBottomBar />
    </div>
  );
}

export default App;
