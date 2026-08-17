import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sendLeadToBrevo } from '../services/brevoService';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose,
  initialService
}) => {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    serviceType: initialService || 'Websites & Landing Pages',
    budget: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await sendLeadToBrevo({
        name: formData.name,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        budget: formData.budget,
        message: formData.message
      });

      if (response.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(response.message || 'Error submitting quote request.');
      }
    } catch (err) {
      setErrorMessage(language === 'es' ? 'Error al enviar. Intente de nuevo.' : 'Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      companyName: '',
      email: '',
      phone: '',
      serviceType: initialService || 'Websites & Landing Pages',
      budget: '',
      message: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-white text-[#0A192F] rounded-2xl border border-slate-200 shadow-2xl my-8 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="bg-[#F8FAFC] px-6 py-4 flex items-center justify-between border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D8202A]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A192F] font-sans">
                {language === 'es' ? 'Solicitud Formal de Cotización' : 'Request a Project Quote'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-md transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-[#0A192F] font-sans">
                  {language === 'es' ? '¡Solicitud Enviada con Éxito!' : 'Quote Request Sent Successfully!'}
                </h4>
                <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                  {language === 'es' 
                    ? `Gracias. Nuestro equipo de ingeniería está evaluando los detalles de tu proyecto y te enviará una propuesta a ${formData.email} en menos de 2 horas.`
                    : `Thank you. Our engineering team is reviewing your project requirements and will email your proposal to ${formData.email} within 2 hours.`}
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-8 py-3.5 bg-[#D8202A] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-md cursor-pointer"
                >
                  {language === 'es' ? 'Cerrar Ventana' : 'Close Window'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <p className="text-xs text-[#475569] leading-relaxed border-b border-slate-100 pb-3">
                  {language === 'es'
                    ? 'Completa los detalles a continuación. Recibe una propuesta técnica formal y cotización en menos de 2 horas.'
                    : 'Complete the details below to receive a formal technical proposal and estimate within 2 hours.'}
                </p>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {language === 'es' ? 'Nombre Completo *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'es' ? 'Ej. Juan Pérez' : 'e.g. John Doe'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-xs font-medium rounded-md focus:outline-none transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {language === 'es' ? 'Empresa *' : 'Company Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'es' ? 'Nombre de tu negocio' : 'Your Company or Brand'}
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-xs font-medium rounded-md focus:outline-none transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {language === 'es' ? 'Correo Electrónico *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-xs font-medium rounded-md focus:outline-none transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {language === 'es' ? 'Teléfono / WhatsApp *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (774) 747-7215"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-xs font-medium rounded-md focus:outline-none transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Service Required & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {language === 'es' ? 'Servicio Requerido *' : 'Service Required *'}
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-xs font-medium rounded-md focus:outline-none transition-all shadow-xs"
                    >
                      <option value="Websites & Landing Pages">Websites & Landing Pages</option>
                      <option value="E-Commerce & Digital Storefronts">E-Commerce & Digital Storefronts</option>
                      <option value="B2B Systems & Sales Platforms">B2B Systems & Sales Platforms</option>
                      <option value="AI Automations & Agents">AI Automations & Agents</option>
                      <option value="Enterprise IT & Cloud Infrastructure">Enterprise IT & Cloud Infrastructure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {language === 'es' ? 'Presupuesto Estimado (USD)' : 'Estimated Budget (USD)'}
                    </label>
                    <input
                      type="text"
                      placeholder={language === 'es' ? 'Ej. $1,000 - $3,000 / Flexible' : 'e.g. $1,000 - $3,000 / Flexible'}
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-xs font-medium rounded-md focus:outline-none transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {language === 'es' ? 'Detalles del Proyecto / Consulta *' : 'Project Details & Goals *'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder={language === 'es' ? 'Describe tus requerimientos, tiempos deseados o webs de referencia...' : 'Describe your requirements, timeline, or reference websites...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-xs font-medium rounded-md focus:outline-none transition-all shadow-xs resize-none"
                  ></textarea>
                </div>

                {errorMessage && (
                  <p className="text-xs text-red-600 font-bold">{errorMessage}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{language === 'es' ? 'Enviando a Brevo...' : 'Sending to Brevo...'}</span>
                    </>
                  ) : (
                    <>
                      <span>{language === 'es' ? 'Enviar Solicitud de Cotización' : 'Submit Quote Request'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-slate-500 pt-1 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'es' ? 'Conexión SSL Segura vía Brevo API. Privacidad Garantizada.' : 'Secure SSL connection via Brevo API. Privacy Guaranteed.'}</span>
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
