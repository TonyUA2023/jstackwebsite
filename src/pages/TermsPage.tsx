import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';

interface TermsPageProps {
  onNavigateHome: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigateHome }) => {
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
          <span className="text-slate-900 font-bold">Terms of Service</span>
        </div>

        {/* Page Title */}
        <div className="mb-10 pb-6 border-b border-slate-200">
          <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-black text-[#0A192F] tracking-tight font-sans">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 mt-2 font-mono">
            Last Updated: February 2026 · JSTACK.com (JSTACK Digital Solutions)
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-base sm:text-[17px] text-[#475569] leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0A192F]">1. Overview & Scope of Services</h2>
            <p>
              These Terms of Service govern all digital engineering, custom software development, website architecture, cloud hosting, and artificial intelligence consulting provided by JSTACK Digital Solutions ("JSTACK", "we", "us"). By contracting our services or accessing our platform, clients ("you") agree to these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0A192F]">2. Engineering Rigor & Deliverables</h2>
            <p>
              JSTACK guarantees 100% bespoke, hand-coded architectures built in modern frameworks (React, Next.js, Vite, TypeScript) without bloated third-party templates. Every web platform delivered is audited to meet top-tier Google Core Web Vitals and security standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0A192F]">3. Intellectual Property Handover</h2>
            <p>
              Upon complete settlement of agreed project milestones, full intellectual property rights, source code ownership, design assets, and deployment access are 100% transferred to the client. JSTACK retains the right to showcase non-confidential project visuals within our verified portfolio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0A192F]">4. Confidentiality & Non-Disclosure</h2>
            <p>
              We maintain strict confidentiality concerning all proprietary business logic, customer data, databases, and trade secrets shared during the project lifecycle. Mutual Non-Disclosure Agreements (NDAs) are executed upon request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0A192F]">5. Support & Service Level Guarantees</h2>
            <p>
              Post-launch warranty and continuous maintenance services are provided in accordance with specific Service Level Agreements (SLAs), including security patches, uptime monitoring, and direct technical consultations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#0A192F]">6. Contact Information</h2>
            <p>
              For legal inquiries or contractual clarifications, contact our legal desk at <a href="mailto:jstackinfo@gmail.com" className="text-[#D8202A] font-bold hover:underline">info@jstack.com</a> or call <span className="font-bold text-[#0A192F]">+1 (774) 747-7215</span>.
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
