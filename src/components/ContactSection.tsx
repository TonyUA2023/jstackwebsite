import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, MessageSquare, ArrowRight, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sendLeadToBrevo } from '../services/brevoService';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Diseño Web Profesional y Eficiente',
    budget: '',
    message: ''
  });

  const phoneDisplay = "+1 (774) 747-7215";
  const whatsappUrl = "https://wa.me/17747477215?text=Hola,%20busco%20información%20para%20un%20diseño%20web%20profesional";
  const smsUrl = "sms:+17747477215?body=Hola,%20deseo%20cotizar%20un%20sitio%20web";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await sendLeadToBrevo({
      name: formData.name,
      email: formData.email,
      serviceType: formData.projectType,
      budget: formData.budget,
      message: formData.message
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#05070A] text-white border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          
          {/* Left Column: Formal Value Proposition & Contact Info */}
          <div className="lg:col-span-5 space-y-6">

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {t.contact.title}
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.contact.subtitle}
            </p>

            {/* Direct Phone, WhatsApp & SMS Card */}
            <div className="bg-[#0B0F17] border border-[#1E293B] p-5 space-y-4">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                {t.contact.phoneLabel}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-[#05070A] border border-[#1E293B] hover:border-[#0284C7] text-xs font-mono font-bold text-white transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#38BDF8]" />
                  <span>WhatsApp: {phoneDisplay}</span>
                </a>

                <a
                  href={smsUrl}
                  className="px-4 py-3 bg-[#05070A] border border-[#1E293B] hover:border-emerald-500 text-xs font-mono font-bold text-emerald-400 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar SMS</span>
                </a>
              </div>

              <a 
                href="mailto:jstackinfo@gmail.com" 
                className="p-3 bg-[#05070A] border border-[#1E293B] hover:border-[#0284C7] text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-3 block"
              >
                <Mail className="w-4 h-4 text-[#38BDF8]" />
                <span className="font-bold">Email Directo: jstackinfo@gmail.com</span>
              </a>
            </div>

            {/* Geo Locations & SEO Targets Notice */}
            <div className="p-4 bg-[#0B0F17] border border-[#1E293B] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300">
                <MapPin className="w-4 h-4 text-[#38BDF8]" />
                <span>Puntos de Atención y Cobertura SEO Global:</span>
              </div>
              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                🇺🇸 Estados Unidos (Massachusetts, Florida, NY) <br />
                🇵🇪 Perú (Lima) <br />
                🇪🇸 España (Madrid, Barcelona)
              </p>
            </div>

          </div>

          {/* Right Column: Formal Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B0F17] p-8 border border-[#1E293B]">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t.contact.successTitle}</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 bg-[#1E293B] text-white font-mono text-xs font-bold uppercase"
                  >
                    Enviar Otra Consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-3 border-b border-[#1E293B]">
                    <h3 className="text-lg font-extrabold text-white">{t.contact.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{t.contact.subtitle}</p>
                  </div>

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

                  {/* Service & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">
                        {t.contact.serviceLabel} *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#05070A] border border-[#1E293B] focus:border-[#0284C7] text-white text-xs font-medium focus:outline-none"
                      >
                        <option value="Diseño Web Profesional y Eficiente">Diseño Web Profesional y Eficiente</option>
                        <option value="Creación de Páginas Web Vendedoras">Creación de Páginas Web Vendedoras</option>
                        <option value="Diseño de Tiendas Online (E-commerce)">Diseño de Tiendas Online (E-commerce)</option>
                        <option value="Creación de Landing Pages de Alta Conversión">Creación de Landing Pages de Alta Conversión</option>
                        <option value="Desarrollo Web a Medida y Optimización SEO">Desarrollo Web a Medida y Optimización SEO</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">
                        Presupuesto Estimado (USD) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. $1,000 / Flexible"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#05070A] border border-[#1E293B] focus:border-[#0284C7] text-white text-xs font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1">
                      {t.contact.messageLabel} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#05070A] border border-[#1E293B] focus:border-[#0284C7] text-white text-xs font-medium focus:outline-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#0284C7] hover:bg-[#0369A1] text-white font-mono font-bold text-xs uppercase tracking-wider border border-[#38BDF8]/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{t.contact.submitBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] font-mono text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100% Confidencial. Respuesta en &lt;2 horas.</span>
                  </p>
                </form>
              )}

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
