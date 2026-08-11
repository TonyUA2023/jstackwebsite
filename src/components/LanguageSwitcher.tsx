import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`inline-flex items-center bg-[#0F172A] border border-[#1E293B] font-mono text-xs font-bold ${className}`}>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 transition-colors ${
          language === 'en'
            ? 'bg-[#0284C7] text-white font-black'
            : 'text-slate-400 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>

      <span className="text-slate-600 px-0.5">|</span>

      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 transition-colors ${
          language === 'es'
            ? 'bg-[#0284C7] text-white font-black'
            : 'text-slate-400 hover:text-white'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};
