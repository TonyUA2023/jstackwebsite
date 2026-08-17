import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';

interface PrivacyPageProps {
  onNavigateHome: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-white text-[#0A192F] min-h-[85vh]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#D8202A] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>›</span>
          <span className="text-slate-900 font-bold">Privacy Policy</span>
        </div>

        {/* Page Title */}
        <div className="mb-10 pb-6 border-b border-slate-200">
          <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-black text-[#0A192F] tracking-tight font-sans">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mt-2 font-mono">
            Last Updated: February 2026 · JSTACK.com (JSTACK Digital Solutions)
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-base sm:text-[17px] text-[#475569] leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0A192F]">1. Commitment to Privacy</h2>
            <p>
              At JSTACK Digital Solutions, we respect your privacy and are committed to protecting any personal and commercial information you share with us through our website, consultation forms, or direct engineering communication.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0A192F]">2. Information We Collect</h2>
            <p>
              When you submit an inquiry or project brief via our "Let's Get Started" form, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Full Name and Company Name</li>
              <li>Business Email Address and Phone Number</li>
              <li>Project requirements and technical descriptions</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0A192F]">3. How We Use Your Information</h2>
            <p>
              Your contact details are used solely to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Review your technical scope and deliver custom proposals</li>
              <li>Provide direct engineering consultations and quotes</li>
              <li>Execute agreed software development deliverables</li>
            </ul>
            <p className="mt-2 font-bold text-[#0A192F]">
              We never sell, rent, or distribute your private data to third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0A192F]">4. Data Security & Brevo API Compliance</h2>
            <p>
              All submissions are processed with end-to-end SSL/TLS encryption. Notifications sent via Brevo API comply with international transactional security protocols and GDPR/CCPA privacy standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0A192F]">5. Your Rights & Data Deletion</h2>
            <p>
              You have the right to request a copy of your stored communication or ask for complete deletion of your records from our systems at any time by emailing <a href="mailto:jstackinfo@gmail.com" className="text-[#D8202A] font-bold hover:underline">info@jstack.com</a>.
            </p>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A192F] hover:bg-[#D8202A] text-white text-sm font-bold rounded-md transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </button>
        </div>

      </div>
    </div>
  );
};
