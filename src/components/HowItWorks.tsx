import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  BrainCircuit, 
  Layers, 
  ShieldCheck, 
  FileText, 
  Compass, 
  MapPin, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ListOrdered,
  ChevronRight,
  Smartphone,
  PhoneCall,
  Monitor
} from 'lucide-react';
import { Language } from '../types';
import { NAVIGATOR_SECTIONS_DATA } from '../data/navigatorFeatures';

interface HowItWorksProps {
  currentLang: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang }) => {
  const data = NAVIGATOR_SECTIONS_DATA[currentLang].processFlow;
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (iconName: string, active: boolean) => {
    const iconClass = `w-5 h-5 ${active ? 'text-emerald-700' : 'text-stone-600'}`;
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className={iconClass} />;
      case 'BrainCircuit':
        return <BrainCircuit className={iconClass} />;
      case 'Layers':
        return <Layers className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'FileText':
        return <FileText className={iconClass} />;
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'MapPin':
        return <MapPin className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const activeStep = data.steps[activeStepIndex];

  return (
    <section 
      id="how-it-works" 
      className="py-16 md:py-24 bg-[#F8F9F5] border-b border-stone-200/80 scroll-mt-14 relative"
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
            <ListOrdered className="w-3.5 h-3.5 text-emerald-700" />
            <span>{data.badge}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            {data.title}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {data.subtitle}
          </p>

          <p className="text-xs text-stone-600 mt-2 font-medium">
            <span className="hidden md:inline">{data.desktopHint}</span>
            <span className="md:hidden">{data.mobileHint}</span>
          </p>
        </motion.div>

        {/* DESKTOP VIEW: Connected Flow Header & Cards (Hidden on mobile) */}
        <div className="hidden lg:block mb-10">
          <div className="relative">
            {/* Horizontal Connecting Line */}
            <div className="absolute top-7 left-8 right-8 h-1 bg-stone-200 -z-0" />
            
            {/* 7 Connected Step Badges */}
            <div className="relative z-10 grid grid-cols-7 gap-3">
              {data.steps.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                const isCompleted = activeStepIndex > idx;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-200 focus:outline-none`}
                  >
                    {/* Circle Node with Number/Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 shadow-2xs ${
                        isActive
                          ? 'bg-emerald-700 text-white ring-4 ring-emerald-600/20 scale-110 shadow-md'
                          : isCompleted
                          ? 'bg-emerald-100 border border-emerald-300 text-emerald-900'
                          : 'bg-white border border-stone-300 text-stone-600 hover:border-stone-400'
                      }`}
                    >
                      {isActive ? (
                        <span className="font-display font-extrabold text-lg text-white">
                          0{step.stepNumber}
                        </span>
                      ) : (
                        getStepIcon(step.icon, isActive || isCompleted)
                      )}
                    </div>

                    {/* Step Title Label */}
                    <span
                      className={`mt-2.5 text-xs font-bold transition-colors line-clamp-1 ${
                        isActive
                          ? 'text-emerald-900'
                          : 'text-stone-600 group-hover:text-stone-900'
                      }`}
                    >
                      {step.shortLabel}
                    </span>

                    <span className="text-[10px] text-stone-500 font-medium">
                      Step 0{step.stepNumber}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* DESKTOP INTERACTIVE STAGE: Active Step Detail Card */}
        <div className="hidden lg:block mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* Left Side: Step summary & description */}
                <div className="col-span-5 border-r border-stone-100 pr-6">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wide mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Stage 0{activeStep.stepNumber} of 07</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">
                    {activeStep.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {activeStep.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : 6))}
                      className="px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-semibold transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setActiveStepIndex((prev) => (prev < 6 ? prev + 1 : 0))}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <span>Next Step</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Simulation telemetry box */}
                <div className="col-span-7 bg-[#FAFBF9] p-5 rounded-2xl border border-stone-200/90 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-stone-200/80 pb-2.5 mb-3.5 text-xs text-stone-500 font-mono">
                    <span className="flex items-center gap-1.5 font-bold text-stone-700">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                      SIMULATED PIPELINE TELEMETRY
                    </span>
                    <span className="text-[11px] bg-stone-200/70 px-2 py-0.5 rounded text-stone-700">
                      Phase: {activeStep.id.toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-stone-600 mb-1">
                        Citizen Input / Context Trigger
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-800 font-sans shadow-2xs">
                        {activeStep.exampleData.inputOrAction}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-emerald-800 mb-1">
                        AI Output / Verified Civic Action
                      </div>
                      <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-emerald-950 font-sans font-medium shadow-2xs">
                        {activeStep.exampleData.systemOutput}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* MOBILE VIEW: Vertical Connected Stepper */}
        <div className="block lg:hidden max-w-xl mx-auto mb-16">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-600/40 space-y-6">
            {data.steps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <div key={step.id} className="relative group">
                  {/* Stepper Node Marker on the Line */}
                  <div
                    onClick={() => setActiveStepIndex(idx)}
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-emerald-700 text-white ring-4 ring-emerald-600/20 shadow-xs'
                        : 'bg-white border-2 border-stone-300 text-stone-600'
                    }`}
                  >
                    {step.stepNumber}
                  </div>

                  {/* Card Content */}
                  <div
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-emerald-400 shadow-sm'
                        : 'bg-stone-50/70 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="font-display text-base font-bold text-stone-900">
                        {step.title}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
                        Step 0{step.stepNumber}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                      {step.description}
                    </p>

                    {isSelected && (
                      <div className="pt-3 border-t border-stone-100 space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-stone-100 text-stone-800">
                          <span className="font-bold block text-[10px] uppercase tracking-wider text-stone-600 mb-0.5">Input:</span>
                          {step.exampleData.inputOrAction}
                        </div>
                        <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">
                          <span className="font-bold block text-[10px] uppercase tracking-wider text-emerald-800 mb-0.5">AI Result:</span>
                          {step.exampleData.systemOutput}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7-Step Panoramic Summary Grid (All connected steps at a glance) */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-display text-lg font-bold text-stone-900">
              Overview: The 7 Step Architecture
            </h3>
            <p className="text-xs text-stone-500">
              User Query → AI Understanding → Service Matching → Eligibility Check → Documents → Application Guidance → Nearby Services
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {data.steps.map((step, idx) => (
              <div
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl border text-center cursor-pointer transition-all duration-150 ${
                  activeStepIndex === idx
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs scale-102'
                    : 'bg-white border-stone-200 text-stone-700 hover:border-emerald-300'
                }`}
              >
                <div className="text-[10px] font-bold opacity-75 mb-1">
                  0{step.stepNumber}
                </div>
                <div className="text-xs font-bold leading-tight">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
