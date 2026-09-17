import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  UserCheck, 
  Database, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  FileCheck2, 
  History, 
  Building,
  Scale,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { CHAT_AND_IMPACT_DATA } from '../data/chatAndImpactData';

interface VerifiedKnowledgeBaseProps {
  currentLang: Language;
}

export const VerifiedKnowledgeBase: React.FC<VerifiedKnowledgeBaseProps> = ({ currentLang }) => {
  const content = CHAT_AND_IMPACT_DATA[currentLang].verifiedKnowledgeBase;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-emerald-800" />;
      case 'Database':
        return <Database className="w-6 h-6 text-amber-700" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-700" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-6 h-6 text-teal-800" />;
    }
  };

  const getStepColor = (index: number) => {
    switch (index) {
      case 0:
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-300',
          badge: 'bg-emerald-100 text-emerald-950',
          number: 'text-emerald-800'
        };
      case 1:
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-300',
          badge: 'bg-amber-100 text-amber-950',
          number: 'text-amber-800'
        };
      case 2:
        return {
          bg: 'bg-emerald-50/70',
          border: 'border-emerald-300',
          badge: 'bg-emerald-100 text-emerald-950',
          number: 'text-emerald-800'
        };
      case 3:
      default:
        return {
          bg: 'bg-teal-50',
          border: 'border-teal-300',
          badge: 'bg-teal-100 text-teal-950',
          number: 'text-teal-800'
        };
    }
  };

  return (
    <section 
      id="verified-knowledge" 
      className="py-16 md:py-24 bg-[#F7F8F4] border-b border-stone-200/80 scroll-mt-14 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>{content.sectionBadge}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            {content.title}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        {/* TRUST BANNER CALLOUT */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-white border border-stone-300/80 shadow-2xs max-w-4xl mx-auto flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-stone-900 text-white flex items-center justify-center shrink-0 shadow-2xs">
            <Scale className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <div className="font-display text-xs font-bold uppercase tracking-wider text-emerald-800">
              Zero Hallucination Policy
            </div>
            <p className="text-sm font-semibold text-stone-900 mt-0.5">
              {content.trustCallout}
            </p>
          </div>
        </div>

        {/* SIMPLE VISUAL FLOW: Admin Verification → Verified Knowledge Base → AI Response → User */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {content.pipeline.map((step, index) => {
              const styles = getStepColor(index);
              const isLast = index === content.pipeline.length - 1;

              return (
                <div key={step.stepNumber} className="relative flex flex-col">
                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`p-6 rounded-2xl bg-white border ${styles.border} shadow-2xs flex-1 flex flex-col justify-between hover:shadow-xs transition-all duration-200`}
                  >
                    <div>
                      {/* Top Header: Icon + Step Number */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className={`w-12 h-12 rounded-xl ${styles.bg} border ${styles.border} flex items-center justify-center shadow-2xs`}>
                          {getStepIcon(step.icon)}
                        </div>
                        <span className={`font-display text-xl font-black ${styles.number}`}>
                          0{step.stepNumber}
                        </span>
                      </div>

                      {/* Step Title & Role */}
                      <h3 className="font-display text-lg font-bold text-stone-900 mb-1">
                        {step.title}
                      </h3>
                      <div className="text-xs font-semibold text-stone-500 mb-3">
                        {step.role}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-stone-600 leading-relaxed mb-4">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Security / Trust Pillar */}
                    <div className="pt-3 border-t border-stone-100">
                      <span className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold border ${styles.badge}`}>
                        {step.securityPillar}
                      </span>
                    </div>
                  </motion.div>

                  {/* Flow Arrow (Desktop connecting between cards) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-stone-300 shadow-2xs items-center justify-center text-stone-500">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 CORE VERIFICATION GUARANTEES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {content.guarantees.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0 mt-0.5">
                <FileCheck2 className="w-4 h-4 text-emerald-800" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-stone-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* INSTITUTIONAL AUDIT LOGO BADGES */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-2xs text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-3">
            Standards & Interoperability Compliance
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-stone-700">
            <span className="px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200">
              🏛️ Ministry of Agriculture & Farmers Welfare
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200">
              💳 DBT Bharat Direct Transfer Standard
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200">
              🇮🇳 National Informatics Centre (NIC) Schemas
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200">
              🌐 CSC e-Governance Services India VLE Network
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
