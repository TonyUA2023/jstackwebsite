import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Loader2, 
  MessageSquare 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sendLeadToBrevo } from '../services/brevoService';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceType: 'Websites & Landing Pages',
    budget: '',
    timeline: 'Immediate (< 2 weeks)',
    description: ''
  });

  const charLimit = 1000;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await sendLeadToBrevo({
        name: formData.fullName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        serviceType: `${formData.serviceType} (Timeline: ${formData.timeline})`,
        budget: formData.budget,
        message: formData.description
      });

      if (response.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(response.message || (language === 'es' ? 'Error al enviar el formulario.' : 'Error submitting form.'));
      }
    } catch (err) {
      setErrorMessage(language === 'es' ? 'Error de conexión. Intente nuevamente.' : 'Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappDirectUrl = "https://wa.me/17747477215?text=Hola,%20deseo%20cotizar%20un%20proyecto%20con%20Jstack.Digital";

  return (
    <div className="bg-white text-[#0A192F] min-h-screen">
      
      {/* 1. Super Short, Punchy Hero */}
      <section className="pt-8 sm:pt-10 pb-10 sm:pb-12 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-4 right-10 w-72 h-36 bg-dot-matrix opacity-35 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-4">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#D8202A] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-400 font-bold">›</span>
            <span className="text-[#0A192F] font-bold">Contact</span>
          </div>

          <div className="max-w-3xl space-y-3 text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0A192F] tracking-tight font-sans leading-[1.08]"
            >
              {language === 'es' ? (
                <>
                  Inicia Tu Proyecto con <br />
                  <span className="text-[#D8202A]">JSTACK Digital Solutions</span>
                </>
              ) : (
                <>
                  Let's Build Something <br />
                  <span className="text-[#D8202A]">Exceptional Together</span>
                </>
              )}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal max-w-2xl"
            >
              {language === 'es'
                ? 'Completa el formulario a continuación para recibir una propuesta formal y cronograma de ingeniería en menos de 2 horas.'
                : 'Complete the form below to receive a formal technical proposal and delivery estimate within 2 hours.'}
            </motion.p>
          </div>

        </div>
      </section>

      {/* 2. Comprehensive & Structured Form Section */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Form Column (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-md">
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-5"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-3xl font-black text-[#0A192F] font-sans">
                    {language === 'es' ? '¡Mensaje Enviado con Éxito!' : 'Proposal Request Received!'}
                  </h3>
                  <p className="text-base text-[#475569] max-w-lg mx-auto leading-relaxed">
                    {language === 'es'
                      ? `Gracias por contactarnos. Nuestro equipo de ingeniería está revisando los requerimientos de tu proyecto y enviará la propuesta detallada a ${formData.email} en menos de 2 horas.`
                      : `Thank you for reaching out. Our engineering team is reviewing your project requirements and will send the detailed estimate to ${formData.email} within 2 hours.`}
                  </p>
                  
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          companyName: '',
                          email: '',
                          phone: '',
                          serviceType: 'Websites & Landing Pages',
                          budget: '',
                          timeline: 'Immediate (< 2 weeks)',
                          description: ''
                        });
                      }}
                      className="px-8 py-3.5 bg-slate-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                    >
                      {language === 'es' ? 'Enviar Otra Consulta' : 'Send Another Inquiry'}
                    </button>

                    <button
                      onClick={onNavigateHome}
                      className="px-8 py-3.5 bg-[#D8202A] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer shadow-md"
                    >
                      {language === 'es' ? 'Volver al Inicio' : 'Return Home'}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0A192F] tracking-tight font-sans">
                      {language === 'es' ? 'Detalles de Tu Proyecto' : 'Project Information & Scope'}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      {language === 'es' 
                        ? 'Por favor completa la información para preparar una cotización precisa.' 
                        : 'Please provide as much detail as possible for an accurate quotation.'}
                    </p>
                  </div>

                  {/* 1. Row: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        {language === 'es' ? 'Nombre Completo *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'es' ? 'Ej. Tony Ulloa' : 'e.g. John Doe'}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-sm rounded-lg focus:outline-none transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        {language === 'es' ? 'Nombre de la Empresa *' : 'Company Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'es' ? 'Nombre de tu negocio o marca' : 'Your Business or Brand'}
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-sm rounded-lg focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* 2. Row: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        {language === 'es' ? 'Correo Electrónico *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-sm rounded-lg focus:outline-none transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        {language === 'es' ? 'Teléfono / WhatsApp *' : 'Phone / WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (774) 747-7215"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-sm rounded-lg focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* 3. Row: Service Type & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        {language === 'es' ? 'Servicio Requerido *' : 'Service Required *'}
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-sm rounded-lg focus:outline-none transition-all shadow-xs"
                      >
                        <option value="Websites & Landing Pages">Websites & Landing Pages</option>
                        <option value="E-Commerce & Storefronts">E-Commerce & Storefronts</option>
                        <option value="B2B Systems & Sales Platforms">B2B Systems & Sales Platforms</option>
                        <option value="AI Automations & Agents">AI Automations & Agents</option>
                        <option value="Enterprise IT & Cloud Infrastructure">Enterprise IT & Cloud Infrastructure</option>
                        <option value="Custom Engineering Consultation">Custom Engineering Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        {language === 'es' ? 'Presupuesto Estimado (USD)' : 'Estimated Budget (USD)'}
                      </label>
                      <input
                        type="text"
                        placeholder={language === 'es' ? 'Ej. $1,000 - $3,000 / Flexible' : 'e.g. $1,000 - $3,000 / Flexible'}
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-sm rounded-lg focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* 4. Row: Timeline */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      {language === 'es' ? 'Tiempo Deseado de Entrega' : 'Target Timeline'}
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-sm rounded-lg focus:outline-none transition-all shadow-xs"
                    >
                      <option value="Immediate (< 2 weeks)">{language === 'es' ? 'Inmediato (< 2 semanas)' : 'Immediate (< 2 weeks)'}</option>
                      <option value="1 Month">{language === 'es' ? '1 Mes' : '1 Month'}</option>
                      <option value="2-3 Months">{language === 'es' ? '2 a 3 Meses' : '2-3 Months'}</option>
                      <option value="Flexible / Planning Phase">{language === 'es' ? 'Flexible / Fase de Planificación' : 'Flexible / Planning Phase'}</option>
                    </select>
                  </div>

                  {/* 5. Row: Description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      {language === 'es' ? 'Descripción del Proyecto o Necesidad *' : 'Project Scope & Specific Requirements *'}
                    </label>
                    <textarea
                      rows={5}
                      required
                      maxLength={charLimit}
                      placeholder={language === 'es' 
                        ? 'Describe las metas de tu negocio, características clave requeridas o sitios web de referencia...'
                        : 'Describe your business goals, key features needed, or reference websites...'}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#D8202A] focus:bg-white text-[#0A192F] text-sm rounded-lg focus:outline-none transition-all shadow-xs resize-none"
                    />
                    <div className="text-right text-[12px] text-slate-400 mt-1 font-mono">
                      {formData.description.length} / {charLimit} max characters
                    </div>
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-red-600 font-bold">{errorMessage}</p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-4 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-[15px] sm:text-[16px] rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>{language === 'es' ? 'Enviando a Brevo...' : 'Submitting to Brevo...'}</span>
                        </>
                      ) : (
                        <>
                          <span>{language === 'es' ? 'Enviar Solicitud de Propuesta' : 'Submit Proposal Request'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

            {/* Sidebar Column (4 Cols) */}
            <div className="lg:col-span-4 space-y-6 text-left">
              
              {/* Direct Reach Card */}
              <div className="bg-[#0A192F] text-white rounded-3xl p-7 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D8202A] uppercase tracking-wider block">
                    {language === 'es' ? 'Canales Directos' : 'Direct Channels'}
                  </span>
                  <h3 className="text-2xl font-black font-sans text-white">
                    {language === 'es' ? 'Contáctanos Hoy' : 'Connect Today'}
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <a
                    href="tel:+17747477215"
                    className="flex items-center gap-3 text-white hover:text-[#D8202A] font-bold transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#D8202A]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>🇺🇸 +1 (774) 747-7215 (USA)</span>
                  </a>

                  <a
                    href="tel:+51902699916"
                    className="flex items-center gap-3 text-white hover:text-[#D8202A] font-bold transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#D8202A]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>🇵🇪 +51 902 699 916 (Perú)</span>
                  </a>

                  <a
                    href="mailto:jstackinfo@gmail.com"
                    className="flex items-center gap-3 text-white hover:text-[#D8202A] font-bold transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#D8202A]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>info@jstack.digital</span>
                  </a>
                </div>

                {/* WhatsApp Direct Button */}
                <div className="pt-2 border-t border-white/10">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* SLA & Security Card */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 space-y-4 shadow-sm">
                <div className="flex items-center gap-3 text-[#0A192F]">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">{language === 'es' ? 'Garantía de Respuesta' : 'Response SLA'}</h4>
                    <p className="text-xs text-slate-500 font-medium">{language === 'es' ? 'Menos de 2 horas hábiles' : 'Under 2 business hours'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[#0A192F] pt-2 border-t border-slate-100">
                  <div className="p-2 bg-red-50 text-[#D8202A] rounded-lg">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">{language === 'es' ? 'Privacidad & Confidencialidad' : 'Privacy & NDA'}</h4>
                    <p className="text-xs text-slate-500 font-medium">{language === 'es' ? 'Cifrado SSL vía Brevo API' : 'SSL Encrypted via Brevo API'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#0A192F] pt-2 border-t border-slate-100">
                  <div className="p-2 bg-slate-100 text-slate-700 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">{language === 'es' ? 'Sedes Globales' : 'Global Hubs'}</h4>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-0.5">
                      Boston, MA (USA) <br />
                      Seattle, WA (USA) <br />
                      Lima, Perú
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
