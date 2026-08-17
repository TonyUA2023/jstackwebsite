import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SitemapPageProps {
  onNavigateHome: () => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-white text-[#0A192F] min-h-[85vh]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Breadcrumb matching screenshot: Home > Sitemap */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#D8202A] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>›</span>
          <span className="text-slate-900 font-bold">Sitemap</span>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#0A192F] tracking-tight font-sans mb-12">
          Sitemap
        </h1>

        {/* 4 Column Directory Layout matching Americaneagle screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: Services */}
          <div className="space-y-4">
            <div className="bg-[#0A192F] text-white px-4 py-2.5 font-bold text-sm sm:text-[15px] uppercase tracking-wider rounded-xs">
              Services
            </div>

            <ul className="space-y-3 pl-2 text-sm sm:text-[15px]">
              <li className="flex items-start gap-2">
                <span className="text-[#D8202A] font-black text-lg leading-none">•</span>
                <a href="#/services-websites" className="text-[#0A192F] font-bold hover:text-[#D8202A] hover:underline transition-colors">
                  Websites & Landing Pages
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D8202A] font-black text-lg leading-none">•</span>
                <a href="#/services-ecommerce" className="text-[#0A192F] font-bold hover:text-[#D8202A] hover:underline transition-colors">
                  E-Commerce & Storefronts
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D8202A] font-black text-lg leading-none">•</span>
                <a href="#/services-b2b" className="text-[#0A192F] font-bold hover:text-[#D8202A] hover:underline transition-colors">
                  B2B Systems & Sales Platforms
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D8202A] font-black text-lg leading-none">•</span>
                <a href="#/services-ai" className="text-[#0A192F] font-bold hover:text-[#D8202A] hover:underline transition-colors">
                  AI Automations & Intelligent Agents
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D8202A] font-black text-lg leading-none">•</span>
                <a href="#/services-it" className="text-[#0A192F] font-bold hover:text-[#D8202A] hover:underline transition-colors">
                  Enterprise IT & Cloud Infrastructure
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D8202A] font-black text-lg leading-none">•</span>
                <a href="#/about" className="text-[#0A192F] font-bold hover:text-[#D8202A] hover:underline transition-colors">
                  About Jstack.Digital & Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Projects */}
          <div className="space-y-3">
            <div className="bg-[#0A192F] text-white px-4 py-2.5 font-bold text-sm sm:text-[15px] uppercase tracking-wider rounded-xs">
              Projects
            </div>

            <div className="space-y-2">
              <a href="#/projects" className="block bg-[#0A192F] text-white hover:bg-[#D8202A] px-4 py-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-colors">
                Wayra Detailing (Seattle)
              </a>
              <a href="#/projects" className="block bg-[#0A192F] text-white hover:bg-[#D8202A] px-4 py-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-colors">
                Esmerald Detailing (Seattle)
              </a>
              <a href="#/projects" className="block bg-[#0A192F] text-white hover:bg-[#D8202A] px-4 py-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-colors">
                Pariona Company (Seattle)
              </a>
              <a href="#/projects" className="block bg-[#0A192F] text-white hover:bg-[#D8202A] px-4 py-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-colors">
                Manuelas Bakery (Seattle)
              </a>
              <a href="#/projects" className="block bg-[#0A192F] text-white hover:bg-[#D8202A] px-4 py-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-colors">
                Firma Agency (Seattle)
              </a>
              <a href="#/projects" className="block bg-[#0A192F] text-white hover:bg-[#D8202A] px-4 py-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-colors">
                Homeclean (Seattle)
              </a>
              <a href="#/projects" className="block bg-[#0A192F] text-white hover:bg-[#D8202A] px-4 py-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-colors">
                Tractoleo Machinery Parts
              </a>
            </div>
          </div>

          {/* Column 3: Platforms */}
          <div className="space-y-4">
            <div className="bg-[#0A192F] text-white px-4 py-2.5 font-bold text-sm sm:text-[15px] uppercase tracking-wider rounded-xs">
              Platforms
            </div>

            <ul className="space-y-2.5 pl-2 text-sm sm:text-[15px]">
              {[
                'Platforms Overview',
                'React & Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Supabase & PostgreSQL',
                'Stripe Payments & Checkout',
                'OpenAI / Custom LLM Architecture',
                'Node.js & Cloudflare Edge',
                'Vite & High-Performance Bundling'
              ].map((platform) => (
                <li key={platform} className="flex items-start gap-2">
                  <span className="text-[#D8202A] font-black text-lg leading-none">•</span>
                  <a href="#platforms" onClick={onNavigateHome} className="text-[#0A192F] font-bold hover:text-[#D8202A] hover:underline transition-colors">
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Company */}
          <div className="space-y-4">
            <div className="bg-[#0A192F] text-white px-4 py-2.5 font-bold text-sm sm:text-[15px] uppercase tracking-wider rounded-xs">
              Company
            </div>

            <ul className="space-y-2.5 pl-2 text-sm sm:text-[15px]">
              <li className="flex items-start gap-2">
                <span className="text-[#D8202A] font-black text-lg leading-none">•</span>
                <a href="#/about" className="text-[#0A192F] font-bold hover:text-[#D8202A] hover:underline transition-colors">
                  About Jstack.Digital
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D8202A] font-black text-lg leading-none">•</span>
                <a href="#/terms" className="text-[#0A192F] font-bold hover:text-[#D8202A] hover:underline transition-colors">
                  Terms of Service
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D8202A] font-black text-lg leading-none">•</span>
                <a href="#/privacy" className="text-[#0A192F] font-bold hover:text-[#D8202A] hover:underline transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D8202A] font-black text-lg leading-none">•</span>
                <a href="#/contact" className="text-[#0A192F] font-bold hover:text-[#D8202A] hover:underline transition-colors">
                  Contact Us & Quote Form
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
