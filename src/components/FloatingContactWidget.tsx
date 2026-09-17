import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingContactWidget: React.FC = () => {
  const whatsappUrl = "https://wa.me/16469804939?text=Hola,%20deseo%20cotizar%20un%20sitio%20web%20profesional";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center pointer-events-auto">
      {/* Red Circular Floating Chat Widget Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#D8202A] hover:bg-[#B91C1C] text-white shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 group cursor-pointer"
        title="Contactar vía WhatsApp (+1 646-980-4939)"
        aria-label="Contact via WhatsApp"
      >
        <MessageSquare className="w-6 h-6 text-white fill-white transition-transform group-hover:scale-105" />
      </a>
    </div>
  );
};
