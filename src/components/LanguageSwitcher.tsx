import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`inline-flex items-center gap-1 p-0.5 bg-white rounded-full border border-slate-300 shadow-xs ${className}`}>
      <div className="pl-1.5 pr-0.5 text-[#D8202A]">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-0.5 rounded-full text-[11px] font-black tracking-wider transition-all duration-200 cursor-pointer ${
          language === 'en'
            ? 'bg-[#D8202A] text-white shadow-xs'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>

      <button
        onClick={() => setLanguage('es')}
        className={`px-2.5 py-0.5 rounded-full text-[11px] font-black tracking-wider transition-all duration-200 cursor-pointer ${
          language === 'es'
            ? 'bg-[#D8202A] text-white shadow-xs'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};
