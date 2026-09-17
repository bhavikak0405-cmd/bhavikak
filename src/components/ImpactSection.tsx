import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Compass, 
  Wifi, 
  BookOpenCheck, 
  Layers, 
  Quote, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  HeartHandshake,
  AlertTriangle,
  Cpu,
  TrendingUp,
  ArrowDown
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ImpactSectionProps {
  currentLang: Language;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ currentLang }) => {
  const legacyTranslations = TRANSLATIONS[currentLang].impact;

  const qualitativeOutcomes = [
    {
      id: 'easier-discovery',
      icon: <Compass className="w-6 h-6 text-emerald-800" />,
      title: 'Easier Discovery',
      subtitle: 'Single Search & Navigator',
      badge: 'Unified Access',
      description: 'Users can find relevant services from one platform without searching through dozens of disconnected websites or department offices.',
      pillar: 'Comprehensive Service Catalog'
    },
    {
      id: 'better-understanding',
      icon: <BookOpenCheck className="w-6 h-6 text-amber-700" />,
      title: 'Better Understanding',
      subtitle: 'Plain Language Clarity',
      badge: 'Transparent Rules',
      description: 'Complex information is presented in simple language so citizens can immediately understand benefits and criteria without confusion.',
      pillar: 'Zero Bureaucratic Jargon'
    },
    {
      id: 'multilingual-access',
      icon: <Wifi className="w-6 h-6 text-orange-700" />,
      title: 'Multilingual Access',
      subtitle: 'Voice & Local Languages',
      badge: 'Linguistic Inclusion',
      description: 'Users can interact using supported regional languages through text or voice to ensure nobody is left behind due to language barriers.',
      pillar: 'Regional Mother Tongues'
    },
    {
      id: 'centralized-guidance',
      icon: <Layers className="w-6 h-6 text-teal-700" />,
      title: 'Centralized Guidance',
      subtitle: 'Step-by-Step Walkthrough',
      badge: 'End-to-End Roadmap',
      description: 'Service information, eligibility, documents, and application guidance are organized together in one complete workflow.',
      pillar: 'Full Application Clarity'
    }
  ];

  return (
    <section 
      id="impact" 
      className="py-16 md:py-24 bg-white border-b border-stone-200/80 scroll-mt-14 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            <span>Civic Purpose & Outcomes</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Making Rural Services Easier to Access
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            By unifying discovery, translation, eligibility verification, and application guidance into one accessible platform.
          </p>
        </div>

        {/* The 3-Tier Core Transformation Pipeline:
            Problem (Scattered Information) → AI Rural (Centralized Multilingual Navigation) → Impact (Easier Discovery + Better Understanding + Improved Accessibility) */}
        <div className="mb-16 p-6 sm:p-10 rounded-3xl bg-[#FAFBF9] border border-stone-200 shadow-sm relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              The Civic-Tech Logic Model
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              From Information Void to Grounded Action
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative z-10">
            {/* Box 1: The Problem */}
            <div className="p-6 rounded-2xl bg-white border border-rose-200 shadow-2xs flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200 text-[10px] font-bold uppercase">
                Challenge
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-stone-900 mb-1">
                  Problem
                </h4>
                <div className="text-sm font-extrabold text-rose-700 mb-2">
                  Scattered Information
                </div>
                <ul className="space-y-2 text-xs text-stone-600">
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Dozens of disconnected state & central department portals</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Dense legalistic terminology alienating low-literacy citizens</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Reliance on local middlemen and arbitrary commission agents</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-rose-100 text-[11px] font-semibold text-rose-800">
                Outcome: Low scheme uptake & missed benefits
              </div>
            </div>

            {/* Box 2: AI Rural Platform */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-800 to-emerald-900 text-white shadow-md flex flex-col justify-between relative ring-2 ring-emerald-600/30">
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-amber-400 text-stone-950 text-[10px] font-bold uppercase">
                Solution
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-amber-300 flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-white mb-1">
                  AI Rural
                </h4>
                <div className="text-sm font-extrabold text-amber-300 mb-2">
                  Centralized Multilingual Navigation
                </div>
                <ul className="space-y-2 text-xs text-emerald-100">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Single conversational entry-point in 5+ Indian languages</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Voice-first colloquial speech understanding</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Gazette-audited Verified Knowledge Base with zero hallucinations</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-700/60 text-[11px] font-semibold text-amber-300">
                Action: Grounded rule matching & document checklists
              </div>
            </div>

            {/* Box 3: The Impact */}
            <div className="p-6 rounded-2xl bg-white border border-emerald-300 shadow-2xs flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold uppercase">
                Outcomes
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-stone-900 mb-1">
                  Impact
                </h4>
                <div className="text-sm font-extrabold text-emerald-800 mb-2">
                  Discovery + Understanding + Accessibility
                </div>
                <ul className="space-y-2 text-xs text-stone-600">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span><strong className="text-stone-900">Easier Discovery:</strong> Proactively surfaces entitled schemes in seconds</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span><strong className="text-stone-900">Better Understanding:</strong> Clear eligibility prerequisites without confusion</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span><strong className="text-stone-900">Improved Accessibility:</strong> Inclusive for non-English speakers & elders</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] font-semibold text-emerald-800">
                Result: Dignified civic empowerment & direct benefit access
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Transformation Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualitativeOutcomes.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-2xs flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold border uppercase tracking-wide bg-stone-100 text-stone-700 border-stone-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-stone-900 mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-emerald-800 mb-3">
                  {item.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/70 flex items-center gap-1.5 text-[11px] font-semibold text-stone-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>{item.pillar}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Grassroots Beneficiary Experiences */}
        <div className="pt-8 border-t border-stone-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
              Grassroots Beneficiary Experiences
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Direct qualitative feedback from Gram Panchayats across Uttar Pradesh, Tamil Nadu, and Bihar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legacyTranslations.testimonials.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-amber-500/60 mb-2" />
                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic mb-4">
                    “{item.quote}”
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between gap-2">
                  <div>
                    <h5 className="font-bold text-stone-900 text-xs sm:text-sm">
                      {item.author}
                    </h5>
                    <span className="text-[11px] text-stone-500 font-medium">
                      {item.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-stone-500 font-mono bg-white px-2 py-1 rounded border border-stone-200">
                    <MapPin className="w-3 h-3 text-emerald-700" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
