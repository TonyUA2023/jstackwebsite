import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, MessageSquare, ArrowRight, Globe, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'High-Converting Custom Website',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#FCFDFF] text-slate-900 relative overflow-hidden border-t border-slate-100">
      
      {/* ULTRA-MINIMALIST LIGHT BLUEPRINT GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-35" />
      <div className="absolute bottom-0 right-0 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-100/50 via-blue-100/30 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Value Proposition & Prominent Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ready to Close More Sales Worldwide?
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tell us about your business goals. We'll analyze your requirements and send a customized proposal and exact 7-day quote within 2 hours.
            </p>

            {/* Visual Card Image Banner */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md relative">
              <img 
                src="/service-website.jpg" 
                alt="Global Web Development Studio" 
                className="w-full h-44 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent p-5 flex items-end">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-jstack-cyan" />
                  Accepting Clients Worldwide • Express Turnaround
                </span>
              </div>
            </div>

            {/* Prominent Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200 shadow-sm flex items-center gap-4 hover:border-jstack-cyan transition-colors">
                <div className="p-3 rounded-xl bg-blue-50 text-jstack-cyan border border-blue-100 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Direct Email</span>
                  <p className="text-base font-bold text-slate-900">contact@jstack.dev</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200 shadow-sm flex items-center gap-4 hover:border-emerald-500 transition-colors">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Instant WhatsApp / Telegram</span>
                  <p className="text-base font-bold text-slate-900">Fast 2-Hour Response Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Highly Prominent & Organized Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-2xl relative overflow-hidden">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Quote Request Received!</h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    Thank you, {formData.name || 'friend'}. Our technical lead is reviewing your project details and will send your estimate within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 text-sm transition-all"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="pb-2 border-b border-slate-100">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Request a Free Project Proposal</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">Fill out the quick form below to receive a custom quote within 2 hours.</p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-jstack-cyan focus:bg-white focus:ring-2 focus:ring-jstack-cyan/20 text-slate-900 text-sm font-medium transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-jstack-cyan focus:bg-white focus:ring-2 focus:ring-jstack-cyan/20 text-slate-900 text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type & OPEN TEXT BUDGET Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Project / Website Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-jstack-cyan focus:bg-white focus:ring-2 focus:ring-jstack-cyan/20 text-slate-900 text-sm font-medium transition-all"
                      >
                        <option value="High-Converting Custom Website">Custom Website Solution</option>
                        <option value="Car Detailing Website">Car Detailing Website</option>
                        <option value="Fashion E-Commerce Store">Fashion / Apparel E-Commerce</option>
                        <option value="Hotel Booking Engine">Hotel / Resort Booking Engine</option>
                        <option value="Restaurant Website">Restaurant & QR Menu Site</option>
                        <option value="SaaS & Custom Web App">Custom Web App / SaaS</option>
                        <option value="Speed & SEO Audit">Speed & SEO Audit</option>
                      </select>
                    </div>

                    {/* OPEN TEXT QUESTION FOR ESTIMATED BUDGET */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Estimated Budget (Open Question) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. $1,000, Flexible, Open to proposal"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-jstack-cyan focus:bg-white focus:ring-2 focus:ring-jstack-cyan/20 text-slate-900 text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Requirements Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Tell Us About Your Project & Goals *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your business, reference websites you like, or any specific feature requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-jstack-cyan focus:bg-white focus:ring-2 focus:ring-jstack-cyan/20 text-slate-900 text-sm font-medium transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-2xl btn-primary text-white font-extrabold text-base shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 group mt-2"
                  >
                    <span>Request Free Project Proposal</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-xs text-slate-500 mt-2 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>100% Confidential. Free proposal within 2 hours. No spam ever.</span>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
