import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export const FloatingContactWidget: React.FC = () => {
  const whatsappUrl = "https://wa.me/17747477215?text=Hola,%20deseo%20cotizar%20un%20sitio%20web%20profesional";
  const smsUrl = "sms:+17747477215?body=Hola,%20deseo%20cotizar%20un%20sitio%20web";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3.5 pointer-events-auto">
      
      {/* SMS Floating Action Button — Same size as WhatsApp */}
      <a
        href={smsUrl}
        className="w-14 h-14 rounded-full bg-[#1E293B] hover:bg-emerald-600 text-white shadow-2xl border-2 border-emerald-500/50 hover:border-emerald-400 transition-all duration-300 flex flex-col items-center justify-center gap-0.5 hover:scale-110 group"
        title="Enviar SMS (+1 774 747-7215)"
        aria-label="Enviar SMS"
      >
        <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors" />
        <span className="text-[9px] font-mono font-bold text-emerald-400 group-hover:text-white uppercase tracking-wider leading-none">
          SMS
        </span>
      </a>

      {/* WhatsApp Floating Action Button — Same size as SMS */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl border-2 border-white/30 transition-all duration-300 flex items-center justify-center hover:scale-110 group relative"
        title="WhatsApp Directo (+1 774 747-7215)"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
        <Phone className="w-7 h-7 text-white fill-white transition-transform group-hover:scale-110" />
      </a>

    </div>
  );
};
