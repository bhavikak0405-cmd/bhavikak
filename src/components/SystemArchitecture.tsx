import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Monitor, 
  Languages, 
  Cpu, 
  Database, 
  CheckSquare, 
  FileCheck2, 
  ArrowDown, 
  Layers, 
  ShieldCheck, 
  Sparkles,
  Server
} from 'lucide-react';
import { Language } from '../types';

interface ArchitectureStep {
  step: number;
  title: string;
  subtitle: string;
  role: string;
  icon: React.ReactNode;
  details: string[];
  badge: string;
}

const ARCHITECTURE_FLOW: ArchitectureStep[] = [
  {
    step: 1,
    title: 'User',
    subtitle: 'Rural Citizen or CSC Operator',
    role: 'Citizen Input Tier',
    badge: 'Voice & Text',
    icon: <User className="w-6 h-6 text-emerald-700" />,
    details: [
      'Marginal farmers, students, artisans, or village seniors',
      'Input via natural spoken regional speech or mobile web browser',
      'Assisted mode at Gram Panchayat Digital India CSC Kendras'
    ]
  },
  {
    step: 2,
    title: 'Web Interface',
    subtitle: 'Accessible Responsive UI',
    role: 'Presentation Layer',
    badge: 'Lightweight PWA',
    icon: <Monitor className="w-6 h-6 text-emerald-700" />,
    details: [
      'Accessible WCAG AA typography, high contrast, and responsive layout',
      'Optimized for 2G/3G/4G rural mobile connections & low data usage',
      'Integrated text-to-speech audio playback and microphone input'
    ]
  },
  {
    step: 3,
    title: 'Multilingual NLP',
    subtitle: 'Dialect Understanding & Speech',
    role: 'Language Translation Engine',
    badge: '5+ Indian Languages',
    icon: <Languages className="w-6 h-6 text-amber-600" />,
    details: [
      'Colloquial speech recognition tuned for rural vernacular phrasing',
      'Multi-language tokenization: Hindi, Tamil, Telugu, Bengali & English',
      'Extracts citizen intent: Crop subsidy, housing grant, health treatment'
    ]
  },
  {
    step: 4,
    title: 'AI / RAG Layer',
    subtitle: 'Retrieval-Augmented Generation',
    role: 'Grounded Reasoning Core',
    badge: 'Zero-Hallucination',
    icon: <Cpu className="w-6 h-6 text-emerald-800" />,
    details: [
      'Semantic vector retrieval connecting intent to official policy nodes',
      'Strict grounding guardrails preventing arbitrary LLM fabrication',
      'Formats complex bureaucratic gazettes into plain spoken language'
    ]
  },
  {
    step: 5,
    title: 'Verified Knowledge Base',
    subtitle: 'Gazette-Audited Corpus',
    role: 'Civic Data Foundation',
    badge: '100% Sourced',
    icon: <Database className="w-6 h-6 text-stone-800" />,
    details: [
      'Curated repository of Central & State Ministry circulars and acts',
      'Human-in-the-loop civic admin verification before rules go live',
      'Immutable audit hashes with direct links to official ministry portals'
    ]
  },
  {
    step: 6,
    title: 'Eligibility & Service Matching',
    subtitle: 'Rule-Based Logic Engine',
    role: 'Verification Filter',
    badge: 'Deterministic Rules',
    icon: <CheckSquare className="w-6 h-6 text-amber-700" />,
    details: [
      'Cross-checks land acreage, annual household income, and social criteria',
      'Filters out high-income or institutional exclusions transparently',
      'Generates exact required documentation checklist for village office'
    ]
  },
  {
    step: 7,
    title: 'Personalized Guidance',
    subtitle: 'Actionable Citizen Roadmap',
    role: 'Outcome Delivery Tier',
    badge: 'Actionable Delivery',
    icon: <FileCheck2 className="w-6 h-6 text-emerald-700" />,
    details: [
      'Step-by-step application walkthrough with official timelines',
      'Nearest Gram Panchayat CSC Kendra locator with operator contact',
      'Option to print, save summary, or share with local Village VLE'
    ]
  }
];

interface SystemArchitectureProps {
  currentLang: Language;
}

export const SystemArchitecture: React.FC<SystemArchitectureProps> = ({ currentLang }) => {
  return (
    <section 
      id="architecture" 
      className="py-16 md:py-24 bg-white border-b border-stone-200/80 scroll-mt-14 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <Server className="w-4 h-4 text-emerald-700" />
            <span>End-to-End System Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            How AI Rural Works Under the Hood
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            From a rural citizen’s spoken dialect query to verified government benefit disbursement: a transparent, grounded pipeline.
          </p>
        </div>

        {/* Sequential Flow Architecture */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connecting Central Line */}
          <div className="hidden md:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-500 via-amber-500 to-emerald-600 -z-0 opacity-40" />

          <div className="space-y-6 sm:space-y-8 relative z-10">
            {ARCHITECTURE_FLOW.map((tier, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={tier.step} className="relative">
                  {/* Card Row */}
                  <div className={`flex flex-col md:flex-row items-center gap-4 sm:gap-6 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Left/Right Card */}
                    <div className="w-full md:w-[calc(50%-2rem)]">
                      <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-200 hover:border-emerald-500/40 group">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                            {tier.role}
                          </span>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                            {tier.badge}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-xl bg-white border border-stone-200 shadow-2xs group-hover:scale-105 transition-transform">
                            {tier.icon}
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-lg sm:text-xl text-stone-900 group-hover:text-emerald-800 transition-colors">
                              {tier.title}
                            </h3>
                            <p className="text-xs text-stone-500 font-medium">
                              {tier.subtitle}
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-1.5 mt-3 pt-3 border-t border-stone-200/80">
                          {tier.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs text-stone-600">
                              <span className="text-emerald-700 font-bold shrink-0 mt-0.5">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Central Badge Step Number */}
                    <div className="w-10 h-10 rounded-2xl bg-stone-900 text-white font-mono font-extrabold text-sm flex items-center justify-center shadow-md border-2 border-white ring-4 ring-stone-100 shrink-0 z-10">
                      0{tier.step}
                    </div>

                    {/* Balance Spacer on Desktop */}
                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                  </div>

                  {/* Flow Arrow between steps */}
                  {idx < ARCHITECTURE_FLOW.length - 1 && (
                    <div className="flex md:hidden justify-center my-2 text-stone-400">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Architectural Pillars Summary */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
            <ShieldCheck className="w-6 h-6 text-emerald-800 mb-2" />
            <h4 className="font-bold text-stone-900 text-sm mb-1">
              Zero Unvetted Speculation
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              If an inquiry falls outside verified official gazette circulars, the AI refuses to fabricate criteria and redirects to official toll-free helplines.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <Languages className="w-6 h-6 text-amber-800 mb-2" />
            <h4 className="font-bold text-stone-900 text-sm mb-1">
              Vernacular Inclusion
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Architected to bridge the digital literacy gap with simple spoken syntax, voice simulation, and regional dialect translations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-100/80 border border-stone-200">
            <Layers className="w-6 h-6 text-stone-800 mb-2" />
            <h4 className="font-bold text-stone-900 text-sm mb-1">
              Panchayat Last-Mile Link
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Synthesizes digital guidance directly with physical village infrastructure: VLE operators, Primary Health Centres, and Krishi Vigyan Kendras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
