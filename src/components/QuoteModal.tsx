import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sendLeadToBrevo } from '../services/brevoService';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Diseño Web Profesional y Eficiente',
    budget: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await sendLeadToBrevo({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceType: formData.serviceType,
      budget: formData.budget,
      message: formData.message
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05070A]/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-[#0B0F17] text-white border border-[#1E293B] shadow-2xl my-auto"
        >
          {/* Header Bar */}
          <div className="bg-[#05070A] px-6 py-4 flex items-center justify-between border-b border-[#1E293B]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#0284C7]" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                {language === 'en' ? 'Get Instant Project Quote' : 'Cotización Formal de Proyecto Web'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  {language === 'en' ? 'Quote Request Sent Successfully!' : '¡Solicitud Recibida con Éxito!'}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  {language === 'en' 
                    ? 'Thank you. Our Lead Systems Engineer is reviewing your project details and will email your proposal to ' + formData.email + ' within 2 hours.'
                    : 'Gracias. Nuestro Ingeniero de Sistemas analizará los requerimientos de tu proyecto y enviará la propuesta técnica a ' + formData.email + ' en menos de 2 horas.'}
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors border border-[#38BDF8]/30"
                >
                  Entendido / Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed border-b border-[#1E293B] pb-3">
                  {language === 'en'
                    ? 'Complete the details below. Direct proposal & response sent to your email within 2 hours.'
                    : 'Completa los detalles de tu negocio a continuación. Respuesta técnica enviada directamente a tu correo en menos de 2 horas.'}
                </p>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#05070A] border border-[#1E293B] focus:border-[#0284C7] text-white text-xs font-medium focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">
                      {t.contact.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#05070A] border border-[#1E293B] focus:border-[#0284C7] text-white text-xs font-medium focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone & Service Required */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (774) 747-7215"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#05070A] border border-[#1E293B] focus:border-[#0284C7] text-white text-xs font-medium focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">
                      Tipo de Servicio Web *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#05070A] border border-[#1E293B] focus:border-[#0284C7] text-white text-xs font-medium focus:outline-none"
                    >
                      <option value="Diseño Web Profesional y Eficiente">Diseño Web Profesional y Eficiente</option>
                      <option value="Creación de Páginas Web Vendedoras">Creación de Páginas Web Vendedoras</option>
                      <option value="Diseño de Tiendas Online (E-commerce)">Diseño de Tiendas Online (E-commerce)</option>
                      <option value="Creación de Landing Pages de Alta Conversión">Creación de Landing Pages de Alta Conversión</option>
                      <option value="Desarrollo Web a Medida y Optimización SEO">Desarrollo Web a Medida y Optimización SEO</option>
                      <option value="Desarrollo de Aplicación Móvil iOS / Android">Desarrollo de Aplicación Móvil iOS / Android</option>
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">
                    Presupuesto Estimado (USD) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. $800, $1,500, Flexible"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#05070A] border border-[#1E293B] focus:border-[#0284C7] text-white text-xs font-medium focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">
                    Detalles del Proyecto & Objetivos *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe tu empresa o sitios web de referencia..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#05070A] border border-[#1E293B] focus:border-[#0284C7] text-white text-xs font-medium focus:outline-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#0284C7] hover:bg-[#0369A1] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-[#38BDF8]/30 mt-2"
                >
                  <span>{isSubmitting ? 'Enviando a Brevo...' : 'Enviar Solicitud de Cotización'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[10px] font-mono text-slate-400 pt-1 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Vinculación Directa Brevo a jstackinfo@gmail.com. Garantía de Privacidad.</span>
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
