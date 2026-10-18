import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please write a message with at least 15 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Fire celebratory confetti
    try {
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#818cf8', '#a855f7'],
      });
    } catch {
      // ignore
    }

    setIsSubmitted(true);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
    formData.subject || 'Opportunity Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Anchal,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            LET’S BUILD SOMETHING EXTRAORDINARY.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Have a project, an opportunity, or an interesting problem to solve? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels & Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 relative group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(profile.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 relative group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Direct Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(profile.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-colors flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0077b5]/20 border border-[#0077b5]/30 flex items-center justify-center text-[#38bdf8]">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Network</span>
                  <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    LinkedIn
                  </span>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-colors flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Code</span>
                  <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    GitHub
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Status Note */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 leading-relaxed font-mono">
              <span className="text-cyan-400 font-semibold block mb-1">CURRENT STATUS</span>
              Open to full-time Software Developer, Website Developer, and Shopify Developer opportunities globally or remotely.
            </div>
          </div>

          {/* Contact Form (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative">
            <h3 className="text-xl font-bold font-display text-white mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the details below. This generates an authenticated direct dispatch link with your prefilled inquiry.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 py-6"
                >
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm text-white">Inquiry Verified & Ready to Send!</h4>
                      <p className="text-xs text-emerald-200/80 mt-1">
                        Thank you, {formData.name}. To ensure guaranteed direct inbox delivery without server spam filters, click below to open your preferred email client or copy the message.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-slate-300 space-y-1.5">
                    <div><span className="text-slate-500">To:</span> {profile.email}</div>
                    <div><span className="text-slate-500">Subject:</span> {formData.subject}</div>
                    <div><span className="text-slate-500">From:</span> {formData.name} &lt;{formData.email}&gt;</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold shadow-md transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
                    >
                      Edit Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#07090e] border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/70' : 'border-white/10 focus:border-cyan-400/50'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#07090e] border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/70' : 'border-white/10 focus:border-cyan-400/50'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Subject / Opportunity Type *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Developer Opening / Shopify Project"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#07090e] border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500/70' : 'border-white/10 focus:border-cyan-400/50'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, role scope, or collaboration inquiry..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#07090e] border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500/70' : 'border-white/10 focus:border-cyan-400/50'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-indigo-300 text-slate-950 font-semibold text-xs sm:text-sm shadow-md hover:shadow-cyan-500/20 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.99]"
                  >
                    <span>Send Message to Anchal</span>
                    <Send className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-mono">
                    Direct communication with zero spam brokers. Replies typically within 24 hours.
                  </p>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
