import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ThumbsUp, 
  ThumbsDown, 
  Flag, 
  MessageSquare, 
  PlusCircle, 
  CheckCircle2, 
  Star, 
  Send, 
  AlertCircle, 
  ShieldCheck, 
  HelpCircle,
  Copy,
  RotateCcw
} from 'lucide-react';
import { Language } from '../types';

type FeedbackTab = 'rate' | 'report' | 'general' | 'request-service';

interface FeedbackSectionProps {
  currentLang: Language;
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<FeedbackTab>('rate');
  const [rating, setRating] = useState<number>(5);
  const [isHelpful, setIsHelpful] = useState<boolean | null>(true);
  const [selectedScheme, setSelectedScheme] = useState<string>('PM-Kisan Samman Nidhi');
  const [issueCategory, setIssueCategory] = useState<string>('Eligibility Criteria Question');
  const [commentText, setCommentText] = useState<string>('');
  const [userContact, setUserContact] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const generatedTicket = `CITIZEN-REP-2026-${randomNum}`;
    setTicketId(generatedTicket);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCommentText('');
    setUserContact('');
  };

  const copyTicket = () => {
    navigator.clipboard?.writeText(ticketId);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section 
      id="feedback-reporting" 
      className="py-16 md:py-24 bg-[#FAFBF9] border-b border-stone-200/80 scroll-mt-14 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <Flag className="w-4 h-4 text-amber-700" />
            <span>Community Oversight & Trust Loop</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Citizen Feedback & Verification Reports
          </h2>
          <p className="text-base text-stone-600 font-normal leading-relaxed">
            Help us maintain zero-hallucination accuracy. Rate an answer, report outdated guidelines, or request an uncovered rural scheme.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 lg:p-10 shadow-sm relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="feedback-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {/* 4 Action Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 p-1.5 bg-stone-100 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setActiveTab('rate')}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'rate'
                        ? 'bg-white text-emerald-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4 text-emerald-700" />
                    <span>Was this helpful?</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('report')}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'report'
                        ? 'bg-white text-emerald-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Flag className="w-4 h-4 text-amber-600" />
                    <span>Report incorrect info</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('request-service')}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'request-service'
                        ? 'bg-white text-emerald-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <PlusCircle className="w-4 h-4 text-orange-600" />
                    <span>Request missing service</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('general')}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'general'
                        ? 'bg-white text-emerald-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 text-stone-600" />
                    <span>Feedback form</span>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* TAB 1: Was this helpful? (Yes / No) */}
                  {activeTab === 'rate' && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                          Was this helpful?
                        </label>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setIsHelpful(true)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl border font-bold text-xs sm:text-sm transition-all ${
                              isHelpful === true
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20'
                                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                            }`}
                          >
                            <ThumbsUp className="w-4 h-4 text-emerald-600" />
                            <span>Yes</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setIsHelpful(false)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl border font-bold text-xs sm:text-sm transition-all ${
                              isHelpful === false
                                ? 'bg-amber-50 border-amber-500 text-amber-900 ring-2 ring-amber-500/20'
                                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                            }`}
                          >
                            <ThumbsDown className="w-4 h-4 text-amber-600" />
                            <span>No</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                          Overall Satisfaction Rating:
                        </label>
                        <div className="flex items-center gap-1.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              className="p-1.5 focus:outline-none"
                            >
                              <Star className={`w-6 h-6 ${
                                star <= rating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'
                              }`} />
                            </button>
                          ))}
                          <span className="text-xs font-bold text-stone-700 ml-2">
                            {rating === 5 ? '5/5 Excellent & Accurate' : `${rating}/5 Stars`}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                          Specific comments or dialect clarity:
                        </label>
                        <textarea
                          rows={3}
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          placeholder="e.g., The Hindi translation for the documents was very natural and easy for my village elders to understand..."
                          className="w-full p-3.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
                        />
                      </div>
                    </div>
                  )}

                  {/* TAB 2: Report Incorrect Information */}
                  {activeTab === 'report' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                            Target Scheme / Service:
                          </label>
                          <select
                            value={selectedScheme}
                            onChange={(e) => setSelectedScheme(e.target.value)}
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-600"
                          >
                            <option>PM-Kisan Samman Nidhi</option>
                            <option>Ayushman Bharat PM-JAY</option>
                            <option>Kisan Credit Card (KCC)</option>
                            <option>PMAY-G Rural Housing</option>
                            <option>MGNREGA Job Card</option>
                            <option>Soil Health Card</option>
                            <option>Other / Not Listed</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                            Issue Encountered:
                          </label>
                          <select
                            value={issueCategory}
                            onChange={(e) => setIssueCategory(e.target.value)}
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-600"
                          >
                            <option>Outdated deadline or installment date</option>
                            <option>Incorrect land size eligibility</option>
                            <option>Missing mandatory document list</option>
                            <option>Broken official portal link</option>
                            <option>Incorrect Gram Panchayat officer details</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                          Describe the correction needed (with official circular reference if known):
                        </label>
                        <textarea
                          rows={3}
                          required
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          placeholder="Please explain what needs updating so our civic auditor team can verify with the state gazette..."
                          className="w-full p-3.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 focus:bg-white focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                    </div>
                  )}

                  {/* TAB 3: Request Missing Service */}
                  {activeTab === 'request-service' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                          Name of the Rural Scheme or Public Service:
                        </label>
                        <input
                          type="text"
                          required
                          value={selectedScheme}
                          onChange={(e) => setSelectedScheme(e.target.value)}
                          placeholder="e.g., State Dairy Cattle Subsidy, Borewell Drilling Scheme, or Women Self-Help Loan..."
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                          State / District where applicable:
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Uttar Pradesh / Tamil Nadu / Andhra Pradesh / West Bengal..."
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                          Additional Details or Official Link:
                        </label>
                        <textarea
                          rows={2}
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          placeholder="Provide any details about the department or benefits..."
                          className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                    </div>
                  )}

                  {/* TAB 4: General Feedback */}
                  {activeTab === 'general' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                          How can we make AI Rural better for your village community?
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          placeholder="Share your thoughts on language support, voice speed, SMS fallback, or offline usability..."
                          className="w-full p-3.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 focus:bg-white focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                    </div>
                  )}

                  {/* Optional Mobile / Email Contact */}
                  <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="w-full sm:w-auto flex-grow max-w-sm">
                      <label className="block text-[11px] font-semibold text-stone-500 mb-1">
                        Optional Phone / Email (to receive ticket updates):
                      </label>
                      <input
                        type="text"
                        value={userContact}
                        onChange={(e) => setUserContact(e.target.value)}
                        placeholder="Mobile or email address..."
                        className="w-full p-2 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit to Civic Cell</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              /* Confirmation Message State */
              <motion.div
                key="feedback-confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-300 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">
                  Feedback Successfully Logged!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                  Thank you for keeping public information accurate. Your submission has been forwarded to our Civic Analyst Team for audit against official gazettes.
                </p>

                {/* Ticket ID Pill */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-stone-100 border border-stone-300 font-mono text-xs sm:text-sm font-bold text-stone-900 mb-8">
                  <span>Tracking ID: {ticketId}</span>
                  <button
                    type="button"
                    onClick={copyTicket}
                    className="p-1 hover:bg-white rounded text-stone-600 hover:text-emerald-800 transition-colors"
                    title="Copy Ticket"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  {isCopied && <span className="text-[11px] text-emerald-700 font-bold">Copied!</span>}
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 max-w-md mx-auto mb-8 text-left flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">Verification SLA:</span>
                    Changes verified against ministry circulars are synchronized to the Verified Knowledge Base within 48 business hours.
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-900 text-white text-xs sm:text-sm font-bold flex items-center gap-2 mx-auto transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Submit Another Feedback / Report</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
