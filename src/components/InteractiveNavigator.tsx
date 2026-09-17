import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  PhoneCall, 
  Volume2, 
  VolumeX, 
  Send, 
  Building2, 
  Layers, 
  Smartphone, 
  Share2, 
  Info,
  Clock,
  ArrowRight,
  HelpCircle,
  ThumbsUp
} from 'lucide-react';
import { Language, DemoQuery } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface InteractiveNavigatorProps {
  currentLang: Language;
  selectedQueryId: string;
  onSelectQuery: (queryId: string) => void;
}

export const InteractiveNavigator: React.FC<InteractiveNavigatorProps> = ({
  currentLang,
  selectedQueryId,
  onSelectQuery,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [smsPhone, setSmsPhone] = useState('');
  const [smsSentSuccess, setSmsSentSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Find the active query object
  const activeQuery: DemoQuery = 
    t.navigator.sampleQueries.find((q) => q.id === selectedQueryId) ||
    t.navigator.sampleQueries[0];

  const handleAudioToggle = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      // Simulate speaking for 5 seconds
      setTimeout(() => {
        setIsPlayingAudio(false);
      }, 5000);
    }
  };

  const handleSendSms = (e: React.FormEvent) => {
    e.preventDefault();
    if (!smsPhone || smsPhone.length < 10) return;
    setSmsSentSuccess(true);
    setTimeout(() => {
      setSmsSentSuccess(false);
      setSmsPhone('');
    }, 4000);
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section 
      id="navigator-demo" 
      className="py-16 md:py-24 bg-stone-100/70 border-b border-stone-200/80 scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>{t.navigator.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            {t.navigator.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            {t.navigator.subtitle}
          </p>
        </div>

        {/* Interactive Query Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {t.navigator.sampleQueries.map((query) => {
            const isSelected = query.id === activeQuery.id;
            return (
              <button
                key={query.id}
                id={`demo-tab-${query.id}`}
                onClick={() => {
                  onSelectQuery(query.id);
                  setIsPlayingAudio(false);
                  setSmsSentSuccess(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-2 border shadow-2xs ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-md ring-2 ring-emerald-600/30'
                    : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-300 hover:border-stone-400'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-stone-300'}`} />
                <span>{query.title}</span>
              </button>
            );
          })}
        </div>

        {/* Live Result Container Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-emerald-700/20 shadow-xl shadow-stone-900/5 overflow-hidden">
          {/* Card Header: Civic Scheme Classification */}
          <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-900 text-white p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 text-xs font-extrabold uppercase tracking-wide">
                  {activeQuery.category}
                </span>
                <span className="hidden sm:inline text-xs text-emerald-200">
                  • AI Verification Engine v2.4
                </span>
              </div>

              {/* Audio Readout Simulation Trigger */}
              <button
                id="listen-voice-readout-btn"
                onClick={handleAudioToggle}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isPlayingAudio
                    ? 'bg-amber-400 text-amber-950 animate-pulse ring-2 ring-amber-300'
                    : 'bg-emerald-700/80 hover:bg-emerald-700 text-white border border-emerald-600'
                }`}
                title="Simulate Voice Readout for Non-Literate Users"
              >
                {isPlayingAudio ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    <span>Stop Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-amber-300" />
                    <span>{t.navigator.listenVoice}</span>
                  </>
                )}
              </button>
            </div>

            {/* Simulated Question Banner */}
            <div className="bg-emerald-950/40 p-3 sm:p-4 rounded-xl border border-emerald-700/40 flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-emerald-700 text-amber-300 shrink-0 mt-0.5">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
                  Citizen Query:
                </span>
                <p className="text-sm sm:text-base font-semibold text-white mt-0.5 leading-snug">
                  “{activeQuery.queryText}”
                </p>
              </div>
            </div>

            {/* Simulated Audio Wave Visualizer when playing */}
            {isPlayingAudio && (
              <div className="mt-3 flex items-center justify-between px-3 py-2 rounded-lg bg-amber-950/60 border border-amber-500/40 text-xs text-amber-200">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1 h-3 items-end">
                    <span className="w-1 bg-amber-400 h-3 animate-pulse" />
                    <span className="w-1 bg-amber-300 h-2 animate-bounce" />
                    <span className="w-1 bg-amber-400 h-4 animate-pulse" />
                    <span className="w-1 bg-amber-200 h-2 animate-bounce" />
                  </span>
                  <span>Audio narration streaming in your regional dialect...</span>
                </div>
                <span className="text-[10px] text-amber-300 font-mono">16kHz Vernacular TTS</span>
              </div>
            )}
          </div>

          {/* Card Body: Structured AI Guidance */}
          <div className="p-5 sm:p-8 space-y-6">
            {/* Responsible Government Department & Trust Verification */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200 text-xs">
              <div className="flex items-center gap-2 text-stone-700 font-semibold">
                <Building2 className="w-4 h-4 text-emerald-700" />
                <span>{activeQuery.department}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.navigator.verifiedBadge}</span>
              </div>
            </div>

            {/* Plain-Language Answer Summary */}
            <div className="bg-stone-50 p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-500 mb-1.5">
                Official Scheme Summary:
              </h3>
              <p className="text-stone-800 text-sm sm:text-base leading-relaxed">
                {activeQuery.answerSummary}
              </p>
            </div>

            {/* 2-Column Grid: Eligibility & Documents */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Eligibility */}
              <div className="p-4 rounded-xl border border-amber-200/80 bg-amber-50/50">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber-600" />
                  <h4>{t.navigator.eligibleFor}</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {activeQuery.eligibility}
                </p>
              </div>

              {/* Direct Department Helpline */}
              <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/50">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-2">
                  <PhoneCall className="w-4 h-4 text-emerald-700" />
                  <h4>{t.navigator.helplineText}</h4>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-emerald-950 mb-1">
                  {activeQuery.helpline}
                </p>
                <p className="text-[11px] text-stone-500">
                  Toll-free government line with no call charge from any mobile or landline.
                </p>
              </div>
            </div>

            {/* Step-by-Step Action Plan */}
            <div>
              <h4 className="font-display font-bold text-stone-900 text-base mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>{t.navigator.nextSteps}</span>
              </h4>

              <div className="space-y-2.5">
                {activeQuery.actionSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white border border-stone-200/90 shadow-2xs hover:border-emerald-300 transition-colors"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Offline Utility: Send SMS Checklist to Phone */}
            <div className="pt-4 border-t border-stone-200">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left w-full sm:w-auto">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-xs sm:text-sm">
                    <Smartphone className="w-4 h-4 text-orange-600" />
                    <span>Send this Checklist to Mobile via Free SMS</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                    Receive these steps & CSC operator code directly on any basic mobile phone.
                  </p>
                </div>

                <form onSubmit={handleSendSms} className="flex items-center gap-2 w-full sm:w-auto">
                  <input
                    type="tel"
                    value={smsPhone}
                    onChange={(e) => setSmsPhone(e.target.value)}
                    placeholder="Enter 10-digit mobile"
                    maxLength={10}
                    className="w-full sm:w-44 px-3 py-1.5 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs shrink-0 shadow-2xs transition-colors"
                  >
                    Send SMS
                  </button>
                </form>
              </div>

              {smsSentSuccess && (
                <div className="mt-2 text-center text-xs text-emerald-700 bg-emerald-50 py-1.5 px-3 rounded-lg border border-emerald-200 animate-in fade-in">
                  ✓ Free SMS checklist dispatched to {smsPhone}. Check your phone within 60 seconds.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
