import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  User, 
  Mic, 
  MicOff, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  MapPin, 
  Building2, 
  Phone, 
  Clock, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  ArrowRight,
  HelpCircle,
  RotateCcw,
  Languages
} from 'lucide-react';
import { Language } from '../types';
import { CHAT_AND_IMPACT_DATA } from '../data/chatAndImpactData';

interface AIChatDemoProps {
  currentLang: Language;
}

export const AIChatDemo: React.FC<AIChatDemoProps> = ({ currentLang }) => {
  const content = CHAT_AND_IMPACT_DATA[currentLang].chatDemo;
  const demoData = content.demoData;

  const [inputQuery, setInputQuery] = useState(demoData.defaultUserQuery);
  const [activeQuery, setActiveQuery] = useState(demoData.defaultUserQuery);
  const [isListening, setIsListening] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioTimer, setAudioTimer] = useState<NodeJS.Timeout | null>(null);

  const handlePromptSelect = (prompt: string) => {
    setInputQuery(prompt);
    setActiveQuery(prompt);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  const handleAskAI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;
    setActiveQuery(inputQuery);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 450);
  };

  const handleMicToggle = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      setIsListening(true);
      setTimeout(() => {
        setIsListening(false);
        setInputQuery(demoData.defaultUserQuery);
        setActiveQuery(demoData.defaultUserQuery);
      }, 2500);
    }
  };

  const handleAudioToggle = () => {
    if (isPlayingAudio) {
      if (audioTimer) clearTimeout(audioTimer);
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      const timer = setTimeout(() => {
        setIsPlayingAudio(false);
      }, 6000);
      setAudioTimer(timer);
    }
  };

  return (
    <section 
      id="ai-chat-demo" 
      className="py-16 md:py-24 bg-[#FAFBF9] border-b border-stone-200/80 scroll-mt-14 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>{content.sectionBadge}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            {content.title}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Chat Interface Container */}
        <div className="max-w-4xl mx-auto">
          {/* Outer Chrome Frame */}
          <div className="bg-white rounded-3xl border border-stone-300/80 shadow-md overflow-hidden">
            {/* Chatbot Top Header Bar */}
            <div className="bg-stone-900 text-white px-5 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-stone-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold shadow-xs">
                    <Bot className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-stone-900 rounded-full" />
                </div>
                <div>
                  <div className="font-display text-sm sm:text-base font-bold text-stone-100 flex items-center gap-2">
                    <span>{content.chatTitle}</span>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
                      <ShieldCheck className="w-3 h-3" />
                      Audited Grounding
                    </span>
                  </div>
                  <div className="text-xs text-stone-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{content.onlineStatus}</span>
                  </div>
                </div>
              </div>

              {/* Language Indicator Chip & Voice Readout Toggle */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 border border-stone-700 text-xs text-stone-300">
                  <Languages className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-medium text-[11px] sm:text-xs">
                    {demoData.languageBadge}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleAudioToggle}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    isPlayingAudio
                      ? 'bg-amber-500 text-stone-950 shadow-xs'
                      : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700'
                  }`}
                  title="Play/Stop synthesized vernacular audio"
                >
                  {isPlayingAudio ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 animate-pulse text-stone-950" />
                      <span className="hidden sm:inline">{content.stopAudioLabel}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                      <span className="hidden sm:inline">{content.audioReadoutLabel}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Dialect Banner Note */}
            <div className="bg-amber-50/80 px-5 py-2 border-b border-amber-200/70 flex items-center justify-between text-xs text-amber-900">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                {demoData.dialectNote}
              </span>
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide">
                {content.verifiedStamp}
              </span>
            </div>

            {/* Chat Body (Message Bubbles) */}
            <div className="p-5 sm:p-7 bg-[#FCFCFA] space-y-6 max-h-[620px] overflow-y-auto">
              {/* 1. USER MESSAGE BUBBLE */}
              <div className="flex justify-end">
                <div className="flex items-start gap-3 max-w-xl">
                  <div className="bg-emerald-800 text-white p-4 sm:p-5 rounded-2xl rounded-tr-xs shadow-xs">
                    <div className="flex items-center justify-between gap-3 mb-1 text-[11px] text-emerald-200 font-medium">
                      <span>Rural Citizen (Smallholder Farmer)</span>
                      <span>Just now • Voice / Input</span>
                    </div>
                    <p className="text-sm sm:text-base font-normal leading-relaxed text-stone-50">
                      “{activeQuery}”
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center justify-center shrink-0 mt-1 shadow-2xs">
                    <User className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* 2. AI RESPONSE BUBBLE */}
              <div className="flex justify-start">
                <div className="flex items-start gap-3 max-w-2xl w-full">
                  <div className="w-9 h-9 rounded-xl bg-stone-900 text-white flex items-center justify-center shrink-0 mt-1 shadow-2xs">
                    <Bot className="w-5 h-5 text-amber-300" />
                  </div>

                  <div className="bg-white border border-stone-200/90 rounded-2xl rounded-tl-xs p-5 sm:p-6 shadow-xs flex-1">
                    {/* Bot header status */}
                    <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-xs sm:text-sm text-stone-900">
                          AI Rural Services Navigator
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-950 text-[10px] font-bold border border-emerald-300">
                          Verified Policy Match
                        </span>
                      </div>
                      <span className="text-[11px] text-stone-400">Grounded in Ministry Gazette</span>
                    </div>

                    {isLoading ? (
                      <div className="py-8 flex flex-col items-center justify-center gap-3 text-stone-500">
                        <div className="w-6 h-6 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                        <span className="text-xs font-semibold">Consulting Ministry Knowledge Base...</span>
                      </div>
                    ) : (
                      <div className="space-y-5 text-stone-800">
                        {/* Conversational Greeting */}
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                          {demoData.aiResponse.greeting}
                        </p>

                        {/* 1. RELEVANT SCHEME CARD */}
                        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50/90 to-emerald-50/40 border border-emerald-300/80 shadow-2xs">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 bg-emerald-200/80 px-2 py-0.5 rounded">
                              Relevant Government Scheme
                            </span>
                            <span className="text-[11px] font-semibold text-emerald-900">
                              {demoData.aiResponse.badge}
                            </span>
                          </div>
                          <h4 className="font-display text-sm sm:text-base font-extrabold text-stone-900 mt-1">
                            {demoData.aiResponse.schemeName}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5">
                            {demoData.aiResponse.schemeDepartment}
                          </p>
                        </div>

                        {/* 2-COLUMN GRID: Eligibility & Documents */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* 2. BASIC ELIGIBILITY */}
                          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                            <div className="flex items-center gap-1.5 font-bold text-xs text-stone-900 mb-2 uppercase tracking-wide">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                              <span>Basic Eligibility</span>
                            </div>
                            <ul className="space-y-1.5 text-xs text-stone-600">
                              {demoData.aiResponse.basicEligibility.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-1.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* 3. REQUIRED DOCUMENTS */}
                          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                            <div className="flex items-center gap-1.5 font-bold text-xs text-stone-900 mb-2 uppercase tracking-wide">
                              <FileText className="w-3.5 h-3.5 text-orange-700" />
                              <span>Required Documents</span>
                            </div>
                            <ul className="space-y-1.5 text-xs text-stone-600">
                              {demoData.aiResponse.requiredDocuments.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-orange-700 mt-1.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* 4. APPLICATION GUIDANCE */}
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                          <div className="flex items-center gap-1.5 font-bold text-xs text-stone-900 mb-2 uppercase tracking-wide">
                            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                            <span>Application Guidance (Step-by-Step)</span>
                          </div>
                          <div className="space-y-2 text-xs text-stone-700">
                            {demoData.aiResponse.applicationGuidance.map((guidance, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="font-bold text-emerald-800 shrink-0">
                                  0{idx + 1}.
                                </span>
                                <span className="leading-relaxed">{guidance}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 5. NEARBY OFFICE / SERVICE FINDER */}
                        <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 shadow-2xs">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-1.5 font-bold text-xs text-teal-950 uppercase tracking-wide">
                              <MapPin className="w-3.5 h-3.5 text-teal-800" />
                              <span>Nearby Office & Service Centre</span>
                            </div>
                            <span className="text-[11px] font-bold text-teal-900 bg-teal-100 px-2 py-0.5 rounded border border-teal-300">
                              {demoData.aiResponse.nearbyOffice.distance}
                            </span>
                          </div>

                          <div className="font-bold text-xs sm:text-sm text-stone-900">
                            {demoData.aiResponse.nearbyOffice.name}
                          </div>
                          <div className="text-xs text-stone-600 mt-1">
                            {demoData.aiResponse.nearbyOffice.address}
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-teal-200/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                            <div className="flex items-center gap-1.5">
                              <Building2 className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                              <span>{demoData.aiResponse.nearbyOffice.operator}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                              <span>{demoData.aiResponse.nearbyOffice.timings}</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:col-span-2 text-teal-950 font-semibold">
                              <Phone className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                              <span>{demoData.aiResponse.nearbyOffice.contact}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Query Suggestions */}
            <div className="bg-stone-50 px-5 py-3 border-t border-stone-200 flex items-center gap-2 overflow-x-auto">
              <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wider shrink-0 flex items-center gap-1">
                <HelpCircle className="w-3 h-3 text-stone-500" />
                <span>Try prompt:</span>
              </span>
              {demoData.samplePrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePromptSelect(prompt)}
                  className="px-2.5 py-1 rounded-lg bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 text-xs font-semibold whitespace-nowrap transition-colors shadow-2xs"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input & Ask AI Controls Footer */}
            <form onSubmit={handleAskAI} className="p-4 bg-white border-t border-stone-200/80">
              <div className="flex items-center gap-2">
                {/* Microphone / Voice Button */}
                <button
                  type="button"
                  onClick={handleMicToggle}
                  aria-label="Speak voice query"
                  className={`p-3 rounded-xl transition-all duration-200 flex items-center justify-center shrink-0 ${
                    isListening
                      ? 'bg-red-600 text-white ring-4 ring-red-200 animate-pulse'
                      : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300'
                  }`}
                  title={isListening ? 'Listening...' : 'Speak in your regional language'}
                >
                  {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>

                {/* Input Field */}
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputQuery}
                    onChange={(e) => setInputQuery(e.target.value)}
                    placeholder={isListening ? content.listeningText : content.placeholder}
                    className="w-full pl-4 pr-10 py-3 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50/50 transition-all focus:outline-none"
                  />
                  {inputQuery && (
                    <button
                      type="button"
                      onClick={() => setInputQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* "Ask AI" Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-150 shadow-sm shrink-0 disabled:opacity-50"
                >
                  <span>{content.askAiBtn}</span>
                  <Send className="w-4 h-4 text-amber-300" />
                </button>
              </div>

              {isListening && (
                <div className="mt-2 text-xs font-semibold text-red-600 flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  <span>{content.listeningText}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
