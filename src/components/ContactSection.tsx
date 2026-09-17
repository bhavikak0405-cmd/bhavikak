import React, { useState } from 'react';
import { 
  PhoneCall, 
  MapPin, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  Building2, 
  MessageSquare,
  Clock,
  Radio
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: '',
    topic: 'Agriculture & PM-Kisan',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        state: '',
        topic: 'Agriculture & PM-Kisan',
        message: '',
      });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1000);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 bg-[#F9FAF8] border-b border-stone-200/80 scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-950 border border-orange-300 text-xs font-bold uppercase tracking-wider mb-3">
            <PhoneCall className="w-3.5 h-3.5 text-orange-700" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            {t.contact.title}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Contact/Helplines + Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto mb-16">
          {/* Left Side: National Helpline & CSC Locator */}
          <div className="lg:col-span-5 space-y-6">
            {/* National Toll-Free Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-800 to-green-900 text-white shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-amber-300">
                <PhoneCall className="w-5 h-5" />
              </div>

              <h3 className="font-display text-lg font-bold mb-1">
                {t.contact.tollFreeTitle}
              </h3>

              <div className="text-xl sm:text-2xl font-black text-amber-300 font-mono my-2 tracking-tight">
                {t.contact.tollFreeNumber}
              </div>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-4">
                {t.contact.tollFreeDesc}
              </p>

              <div className="flex items-center gap-2 text-xs font-medium text-emerald-200 pt-3 border-t border-emerald-700/50">
                <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Open 24/7 • Multi-lingual Voice IVR Enabled</span>
              </div>
            </div>

            {/* Village CSC Center Locator Card */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-4 text-amber-800">
                <Building2 className="w-5 h-5" />
              </div>

              <h3 className="font-display text-lg font-bold text-stone-900 mb-2">
                {t.contact.cscCenterTitle}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                {t.contact.cscCenterDesc}
              </p>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 text-xs text-stone-700 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-stone-900">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Gram Panchayat Service Points</span>
                </div>
                <p className="text-stone-500">
                  Ask for the designated VLE (Village Level Entrepreneur) or CSC operator in your block.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Inquiry & Feedback Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
            <h3 className="font-display text-xl font-bold text-stone-900 mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mb-6">
              Fill in your details and an AI Rural community coordinator will respond via phone or SMS.
            </p>

            {isSuccess ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto mb-3" />
                <h4 className="font-display text-lg font-bold text-emerald-950 mb-1">
                  {t.contact.successTitle}
                </h4>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  {t.contact.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label 
                      htmlFor="contact-name-input"
                      className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5"
                    >
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      type="text"
                      id="contact-name-input"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label 
                      htmlFor="contact-phone-input"
                      className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5"
                    >
                      {t.contact.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone-input"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* State / District */}
                  <div>
                    <label 
                      htmlFor="contact-state-input"
                      className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5"
                    >
                      {t.contact.stateLabel}
                    </label>
                    <input
                      type="text"
                      id="contact-state-input"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="e.g. Varanasi, UP or Madurai, TN"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                    />
                  </div>

                  {/* Service Topic */}
                  <div>
                    <label 
                      htmlFor="contact-topic-select"
                      className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5"
                    >
                      {t.contact.topicLabel}
                    </label>
                    <select
                      id="contact-topic-select"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm text-stone-800"
                    >
                      <option value="Agriculture & PM-Kisan">Agriculture & PM-Kisan</option>
                      <option value="Kisan Credit Card / Banking">Kisan Credit Card / Loans</option>
                      <option value="Rural Health & Hospital">Rural Health & Hospital</option>
                      <option value="Ration Card & Welfare">Ration Card & Social Welfare</option>
                      <option value="Gram Panchayat / CSC Issue">Gram Panchayat / CSC Issue</option>
                      <option value="Civic-Tech Partnership">Hackathon / Civic-Tech Partnership</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="contact-message-input"
                    className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5"
                  >
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your question or requirement..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Radio className="w-4 h-4 animate-spin" />
                      <span>{t.contact.submitting}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.submitBtn}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Expandable FAQs Accordion */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-stone-200">
          <div className="text-center mb-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
              {t.contact.faqTitle}
            </h3>
          </div>

          <div className="space-y-3">
            {t.contact.faqItems.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-stone-200 bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm sm:text-base hover:bg-stone-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-700' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
