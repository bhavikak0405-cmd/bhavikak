import React, { useState } from 'react';
import { 
  Search, 
  Mic, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Radio, 
  CornerDownRight,
  ShieldCheck,
  Zap,
  Layers,
  Languages
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { VillageIllustration } from './VillageIllustration';

interface HeroProps {
  currentLang: Language;
  onLanguageChange?: (lang: Language) => void;
  onSearchSubmit: (query: string) => void;
  onSelectSampleQuery: (queryId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onLanguageChange,
  onSearchSubmit,
  onSelectSampleQuery,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVoiceListening, setIsVoiceListening] = useState(false);
  const [simulatedVoiceText, setSimulatedVoiceText] = useState('');

  const t = TRANSLATIONS[currentLang];

  const languages: { code: Language; name: string; nativeName: string }[] = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchSubmit(searchQuery);
    } else {
      // Default to the first sample query
      onSelectSampleQuery('pm-kisan');
    }
  };

  const handleVoiceSimulation = () => {
    if (isVoiceListening) {
      setIsVoiceListening(false);
      setSimulatedVoiceText('');
      return;
    }

    setIsVoiceListening(true);
    setSimulatedVoiceText(t.navigator.listening);

    // Realistic voice simulation typing out in the active language
    setTimeout(() => {
      const sample = t.navigator.sampleQueries[0].queryText;
      setSimulatedVoiceText(sample);
      setSearchQuery(sample);
      setTimeout(() => {
        setIsVoiceListening(false);
        onSearchSubmit(sample);
      }, 1200);
    }, 1400);
  };

  return (
    <section 
      id="home" 
      className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-stone-200/60 bg-gradient-to-b from-[#F9FAF8] via-stone-50 to-[#F4F5F1]"
    >
      {/* Subtle organic background decoration */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#15803d 1.5px, transparent 1.5px), radial-gradient(#d97706 1.5px, #F9FAF8 1.5px)`,
          backgroundSize: `48px 48px`,
          backgroundPosition: `0 0, 24px 24px`,
        }}
        aria-hidden="true"
      />

      {/* Warm ambient corner glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Civic Tech Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-emerald-900 text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="tracking-wide">{t.hero.badge}</span>
            <span className="text-emerald-700/60">|</span>
            <span className="font-medium text-emerald-800 hidden sm:inline">
              Verified Public Utility
            </span>
          </div>

          {/* Large Accessible Heading */}
          <div className="mb-2">
            <span className="font-display font-black text-xs sm:text-sm uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Civic-Tech Public Intelligence
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12] sm:leading-[1.15] mb-5">
            AI Rural{' '}
            <span className="relative inline-block whitespace-normal sm:whitespace-nowrap">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-700 to-amber-700">
                Services Navigator
              </span>
              <span 
                className="absolute bottom-1.5 left-0 right-0 h-3.5 bg-amber-300/40 -z-0 rounded-sm -rotate-0.5" 
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* User Requested Exact Subtitle */}
          <p className="text-lg sm:text-xl text-stone-700 font-medium leading-relaxed max-w-3xl mx-auto mb-6">
            One simple platform to discover government schemes, healthcare, education, agriculture support, and essential public services in your language.
          </p>

          {/* Hero Multilingual Language Selector */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1 mr-1">
              <Languages className="w-3.5 h-3.5 text-emerald-700" />
              <span>Language:</span>
            </span>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onLanguageChange?.(lang.code)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  currentLang === lang.code
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs scale-105'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-300 hover:bg-stone-50'
                }`}
              >
                {lang.nativeName} ({lang.name})
              </button>
            ))}
          </div>

          {/* Central Interactive Voice & Text Search Box */}
          <div className="max-w-2xl mx-auto mb-8">
            <form
              onSubmit={handleSearch}
              id="hero-search-form"
              className="relative p-2 sm:p-2.5 bg-white rounded-2xl shadow-lg shadow-stone-900/5 border-2 border-emerald-600/30 focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-600/10 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <div className="pl-2 text-stone-400">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 text-stone-400" />
                </div>

                <input
                  type="text"
                  id="hero-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ask a question in your language…"
                  className="w-full py-2 px-1 text-sm sm:text-base font-medium text-stone-800 bg-transparent placeholder-stone-400 focus:outline-none"
                />

                {/* Voice Simulation Button */}
                <button
                  type="button"
                  id="voice-mic-trigger"
                  onClick={handleVoiceSimulation}
                  title={t.hero.voiceBtn}
                  className={`p-2.5 rounded-xl flex items-center justify-center transition-all ${
                    isVoiceListening
                      ? 'bg-red-500 text-white animate-pulse shadow-md'
                      : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300/70'
                  }`}
                  aria-label="Voice Query Simulation"
                >
                  {isVoiceListening ? (
                    <Radio className="w-5 h-5 animate-spin" />
                  ) : (
                    <Mic className="w-5 h-5 text-amber-900" />
                  )}
                </button>

                {/* Submit / Send Action Button */}
                <button
                  type="submit"
                  id="hero-search-submit-btn"
                  className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <span>Send</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Listening feedback indicator */}
              {isVoiceListening && (
                <div className="mt-2 pt-2 border-t border-amber-200 flex items-center justify-between text-xs text-amber-900 bg-amber-50/90 px-3 py-1.5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                    <span className="font-semibold">{simulatedVoiceText}</span>
                  </div>
                  <span className="text-[11px] text-stone-500">Audio Dialect Model Active</span>
                </div>
              )}
            </form>

            {/* Mobile Submit Button when on small screens */}
            <div className="sm:hidden mt-2.5">
              <button
                type="button"
                onClick={handleSearch}
                className="w-full py-3 px-4 rounded-xl bg-emerald-700 text-white font-semibold text-sm shadow-sm flex items-center justify-center gap-2"
              >
                <span>{t.hero.searchBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Popular Common Inquiries Chips */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-500">
              <span className="font-semibold text-stone-600 mr-1 flex items-center gap-1">
                <CornerDownRight className="w-3.5 h-3.5 text-amber-600" />
                {t.hero.popularQueriesLabel}
              </span>
              <button
                id="hero-query-farmer-support"
                onClick={() => {
                  setSearchQuery('I am a farmer. What agriculture support is available?');
                  onSearchSubmit('I am a farmer. What agriculture support is available?');
                }}
                className="px-2.5 py-1 rounded-full bg-amber-100/80 hover:bg-amber-200 text-amber-950 border border-amber-300 font-bold transition-all"
              >
                🌾 “I am a farmer. What agriculture support is available?”
              </button>
              {t.hero.popularQueries.map((queryText, index) => {
                const sampleIds = ['pm-kisan', 'kcc', 'health', 'soil'];
                const queryId = sampleIds[index % sampleIds.length];
                return (
                  <button
                    key={queryText}
                    id={`hero-query-chip-${index}`}
                    onClick={() => onSelectSampleQuery(queryId)}
                    className="px-2.5 py-1 rounded-full bg-white hover:bg-stone-100 text-stone-700 hover:text-emerald-800 border border-stone-200/80 shadow-2xs font-medium transition-all hover:border-emerald-300"
                  >
                    {queryText}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Action Buttons: "Try AI Rural" and "Explore Services" */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <a
              href="#ai-chat-demo"
              id="hero-try-ai-rural-cta"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-base font-bold shadow-md shadow-emerald-900/15 flex items-center justify-center gap-2.5 transition-all group"
            >
              <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>Try AI Rural</span>
            </a>

            <a
              href="#services-explorer"
              id="hero-explore-services-cta"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-base font-semibold shadow-2xs flex items-center justify-center gap-2 transition-all hover:border-stone-400"
            >
              <Compass className="w-5 h-5 text-amber-600" />
              <span>Explore Services</span>
            </a>
          </div>

          {/* Attractive Village + AI Connectivity Illustration */}
          <VillageIllustration />

          {/* Trust Metrics Bar / Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-8 border-t border-stone-200/80">
            <div className="bg-white/90 p-4 rounded-xl border border-stone-200/70 shadow-2xs text-center">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-800 mb-1">
                {t.hero.stat1Value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-stone-600">
                {t.hero.stat1Label}
              </div>
            </div>

            <div className="bg-white/90 p-4 rounded-xl border border-stone-200/70 shadow-2xs text-center">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-amber-700 mb-1">
                {t.hero.stat2Value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-stone-600">
                {t.hero.stat2Label}
              </div>
            </div>

            <div className="bg-white/90 p-4 rounded-xl border border-stone-200/70 shadow-2xs text-center">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-orange-700 mb-1">
                {t.hero.stat3Value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-stone-600">
                {t.hero.stat3Label}
              </div>
            </div>

            <div className="bg-white/90 p-4 rounded-xl border border-stone-200/70 shadow-2xs text-center">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-700 mb-1">
                {t.hero.stat4Value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-stone-600">
                {t.hero.stat4Label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
