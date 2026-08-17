import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sendLeadToBrevo } from '../services/brevoService';

interface ContactSectionProps {
  serviceType?: string;
  sectionId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  serviceType = 'General Consultation / Project Inquiry',
  sectionId = 'contact'
}) => {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    description: ''
  });

  const charLimit = 750;

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
        message: formData.description,
        serviceType: serviceType
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

  return (
    <section id={sectionId} className="py-20 sm:py-28 bg-white text-[#0A192F] relative overflow-hidden border-t border-slate-100">
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* Left Column: Subtle Dot Matrix Graphic */}
          <div className="hidden lg:block lg:col-span-3 pt-8">
            <div className="w-56 h-80 bg-dot-matrix opacity-60 pointer-events-none" />
          </div>

          {/* Center/Right Form Container */}
          <div className="lg:col-span-9 bg-[#F1F5F9] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xs">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              
              {/* Form Input Fields */}
              <div className="lg:col-span-8">
                
                {/* Headline: Let's Get Started */}
                <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-black text-[#0A192F] tracking-tight font-sans mb-8">
                  Let's Get Started
                </h2>

                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-4 shadow-sm"
                  >
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-[#0A192F]">
                      {language === 'es' ? '¡Mensaje Enviado con Éxito!' : 'Message Sent Successfully!'}
                    </h3>
                    <p className="text-sm sm:text-base text-[#475569] max-w-md mx-auto">
                      {language === 'es'
                        ? 'Hemos recibido tu solicitud técnica. Nuestro equipo de ingeniería se pondrá en contacto contigo en breve.'
                        : 'We have received your technical inquiry. Our engineering team will get back to you shortly.'}
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ fullName: '', companyName: '', email: '', phone: '', description: '' });
                      }}
                      className="mt-4 px-7 py-3 bg-[#D8202A] hover:bg-[#B91C1C] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                    >
                      {language === 'es' ? 'Enviar Otro Mensaje' : 'Send Another Message'}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    
                    {/* 1. Full Name */}
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="* Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white border border-slate-200 focus:border-[#D8202A] focus:ring-1 focus:ring-[#D8202A] rounded-md text-[#0A192F] text-[15px] placeholder-slate-400 focus:outline-none transition-all shadow-xs"
                      />
                    </div>

                    {/* 2. Company Name */}
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="* Company Name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white border border-slate-200 focus:border-[#D8202A] focus:ring-1 focus:ring-[#D8202A] rounded-md text-[#0A192F] text-[15px] placeholder-slate-400 focus:outline-none transition-all shadow-xs"
                      />
                    </div>

                    {/* 3. Email Address */}
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="* Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white border border-slate-200 focus:border-[#D8202A] focus:ring-1 focus:ring-[#D8202A] rounded-md text-[#0A192F] text-[15px] placeholder-slate-400 focus:outline-none transition-all shadow-xs"
                      />
                    </div>

                    {/* 4. Phone Number */}
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="* Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white border border-slate-200 focus:border-[#D8202A] focus:ring-1 focus:ring-[#D8202A] rounded-md text-[#0A192F] text-[15px] placeholder-slate-400 focus:outline-none transition-all shadow-xs"
                      />
                    </div>

                    {/* 5. Description */}
                    <div>
                      <textarea
                        rows={4}
                        maxLength={charLimit}
                        placeholder="If possible, please provide a description of your need or project"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white border border-slate-200 focus:border-[#D8202A] focus:ring-1 focus:ring-[#D8202A] rounded-md text-[#0A192F] text-[15px] placeholder-slate-400 focus:outline-none transition-all shadow-xs resize-none"
                      />
                      <div className="text-right text-[12px] text-slate-400 mt-1 font-mono">
                        {formData.description.length} out of {charLimit} max characters
                      </div>
                    </div>

                    {errorMessage && (
                      <p className="text-xs text-red-600 font-bold">{errorMessage}</p>
                    )}

                    {/* 6. Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-10 py-3.5 bg-[#D8202A] hover:bg-[#B91C1C] text-white text-[15px] font-bold rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{language === 'es' ? 'Enviando...' : 'Submitting...'}</span>
                          </>
                        ) : (
                          <span>Submit</span>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>

              {/* Right Sidebar: Direct Contact Details */}
              <div className="lg:col-span-4 space-y-6 pt-4 lg:pt-14 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-8 text-left">
                
                {/* Phone Numbers: USA & Peru */}
                <div className="space-y-2">
                  <a
                    href="tel:+17747477215"
                    className="flex items-center gap-2.5 text-[#0A192F] hover:text-[#D8202A] font-bold text-sm sm:text-[15px] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D8202A] shrink-0" />
                    <span>+1 (774) 747-7215 (USA)</span>
                  </a>

                  <a
                    href="tel:+51902699916"
                    className="flex items-center gap-2.5 text-[#0A192F] hover:text-[#D8202A] font-bold text-sm sm:text-[15px] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D8202A] shrink-0" />
                    <span>+51 902 699 916 (Perú)</span>
                  </a>
                </div>

                {/* Email */}
                <div>
                  <a
                    href="mailto:jstackinfo@gmail.com"
                    className="flex items-center gap-2.5 text-[#0A192F] hover:text-[#D8202A] font-bold text-sm sm:text-[15px] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#D8202A] shrink-0" />
                    <span>info@jstack.digital</span>
                  </a>
                </div>

                {/* Locations */}
                <div className="flex items-start gap-2.5 text-[#0A192F] font-bold text-sm sm:text-[15px]">
                  <MapPin className="w-4 h-4 text-[#D8202A] shrink-0 mt-0.5" />
                  <div>
                    <span>Our Locations:</span>
                    <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed">
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

      </div>

    </section>
  );
};
