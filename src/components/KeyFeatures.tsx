import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Languages, 
  Sparkles, 
  FileCheck, 
  MapPin, 
  Mic, 
  LayoutDashboard, 
  CheckCircle2, 
  ArrowUpRight, 
  Check, 
  X, 
  Building2, 
  Phone, 
  Clock, 
  ShieldCheck,
  Layers,
  Search,
  Activity,
  UserCheck
} from 'lucide-react';
import { Language, KeyFeatureItem } from '../types';
import { NAVIGATOR_SECTIONS_DATA } from '../data/navigatorFeatures';

interface KeyFeaturesProps {
  currentLang: Language;
  onExploreFeature?: (featureId: string) => void;
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({
  currentLang,
  onExploreFeature,
}) => {
  const data = NAVIGATOR_SECTIONS_DATA[currentLang].keyFeatures;
  const [activeModalFeature, setActiveModalFeature] = useState<KeyFeatureItem | null>(null);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-emerald-700" />;
      case 'Languages':
        return <Languages className="w-6 h-6 text-amber-700" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-800" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-orange-700" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-emerald-700" />;
      case 'Mic':
        return <Mic className="w-6 h-6 text-amber-700" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-6 h-6 text-stone-800" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-700" />;
    }
  };

  const getCardAccent = (id: string) => {
    switch (id) {
      case 'ai-assistant':
      case 'scheme-discovery':
        return {
          pill: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          hoverBorder: 'hover:border-emerald-500 hover:shadow-emerald-900/5',
          accentColor: 'text-emerald-700'
        };
      case 'multilingual-support':
      case 'voice-queries':
        return {
          pill: 'bg-amber-100 text-amber-900 border-amber-300',
          hoverBorder: 'hover:border-amber-500 hover:shadow-amber-900/5',
          accentColor: 'text-amber-700'
        };
      case 'doc-eligibility':
        return {
          pill: 'bg-orange-100 text-orange-900 border-orange-300',
          hoverBorder: 'hover:border-orange-500 hover:shadow-orange-900/5',
          accentColor: 'text-orange-700'
        };
      case 'nearby-service-finder':
        return {
          pill: 'bg-teal-100 text-teal-900 border-teal-300',
          hoverBorder: 'hover:border-teal-500 hover:shadow-teal-900/5',
          accentColor: 'text-teal-700'
        };
      case 'admin-dashboard':
      default:
        return {
          pill: 'bg-stone-200/80 text-stone-900 border-stone-300',
          hoverBorder: 'hover:border-stone-500 hover:shadow-stone-900/5',
          accentColor: 'text-stone-800'
        };
    }
  };

  const handleCardAction = (feature: KeyFeatureItem) => {
    if (feature.id === 'nearby-service-finder' || feature.id === 'admin-dashboard') {
      setActiveModalFeature(feature);
    } else if (onExploreFeature) {
      onExploreFeature(feature.id);
    } else {
      const demoElement = document.getElementById('navigator-demo');
      if (demoElement) demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="features" 
      className="py-16 md:py-24 bg-white border-b border-stone-200/80 scroll-mt-14 relative"
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
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>{data.badge}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            {data.title}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        {/* 7 Modern Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {data.items.map((feature, index) => {
            const styles = getCardAccent(feature.id);
            const isFullSpanOnDesktop = index === 6; // Admin Dashboard spans cleanly across bottom on 3-col

            return (
              <motion.div
                key={feature.id}
                id={`feature-card-${feature.id}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-[#FCFCFA] border border-stone-200/90 shadow-2xs transition-all duration-200 flex flex-col justify-between ${
                  styles.hoverBorder
                } ${isFullSpanOnDesktop ? 'lg:col-span-3 lg:flex-row lg:items-center lg:gap-8' : ''}`}
              >
                <div className={isFullSpanOnDesktop ? 'lg:flex-1' : ''}>
                  {/* Top Bar: Icon + Category Badge + Stats Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      {getFeatureIcon(feature.icon)}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border uppercase tracking-wide ${styles.pill}`}>
                        {feature.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 mb-1.5 group-hover:text-emerald-900 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {feature.shortDescription}
                  </p>

                  {/* 3 Presentation-friendly Bullet Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {feature.bulletPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action and Tag */}
                <div className={`pt-4 border-t border-stone-200/70 flex items-center justify-between ${
                  isFullSpanOnDesktop ? 'lg:border-t-0 lg:border-l lg:border-stone-200 lg:pl-8 lg:pt-0 lg:flex-col lg:items-end lg:justify-center lg:gap-3' : ''
                }`}>
                  <span className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200/80">
                    {feature.statsOrTag}
                  </span>

                  <button
                    onClick={() => handleCardAction(feature)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>{feature.demoActionLabel || 'Learn More'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-700" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* INTERACTIVE MODAL FOR COMPLEX FEATURES (e.g. Nearby Service Finder & Admin Verification Dashboard) */}
        <AnimatePresence>
          {activeModalFeature && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-stone-200 shadow-xl relative max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalFeature(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {activeModalFeature.id === 'nearby-service-finder' ? (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-stone-900">
                          Nearby Gram Panchayat Service Finder
                        </h3>
                        <p className="text-xs text-stone-500">
                          Live GPS / Pincode CSC Center Directory Simulation
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 mb-4 flex items-center gap-3">
                      <Search className="w-4 h-4 text-stone-400" />
                      <input 
                        type="text" 
                        readOnly 
                        value="Pincode: 221001 • Varanasi Rural (Ghazipur Road)" 
                        className="bg-transparent text-xs font-semibold text-stone-800 w-full focus:outline-none"
                      />
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold">
                        3 CENTERS FOUND
                      </span>
                    </div>

                    {/* Simulated CSC centers */}
                    <div className="space-y-3 mb-6">
                      <div className="p-4 rounded-xl border border-emerald-300 bg-emerald-50/50">
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-bold text-sm text-stone-900">
                            Panchayat Bhawan CSC Centre #104
                          </div>
                          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                            1.2 km away
                          </span>
                        </div>
                        <div className="text-xs text-stone-600 space-y-1 mt-2">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5 text-stone-500" />
                            <span>VLE Operator: Shri Amit Kumar Verma</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-stone-500" />
                            <span>Contact: +91 98765 43210 (Direct Panchayat Line)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-stone-500" />
                            <span>Timings: 09:00 AM – 05:30 PM (Mon – Sat)</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-stone-200 bg-white">
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-bold text-sm text-stone-900">
                            Krishi Vigyan Kendra (KVK) Extension Desk
                          </div>
                          <span className="text-[11px] font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                            3.8 km away
                          </span>
                        </div>
                        <div className="text-xs text-stone-600 mt-1">
                          Offers Soil Testing, Certified Seed Allocation & Fertilizer Passbooks.
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveModalFeature(null)}
                      className="w-full py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-sm transition-colors"
                    >
                      Close Map Preview
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-stone-900 text-white flex items-center justify-center">
                        <LayoutDashboard className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-stone-900">
                          Admin Verification & Telemetry Console
                        </h3>
                        <p className="text-xs text-stone-500">
                          District Nodal Officer & Gram Pradhan Oversight Dashboard
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <div className="text-xl font-black text-stone-900 font-mono">1,420</div>
                        <div className="text-[10px] text-stone-500 font-bold uppercase">Queries Today</div>
                      </div>
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                        <div className="text-xl font-black text-emerald-800 font-mono">94.8%</div>
                        <div className="text-[10px] text-emerald-800 font-bold uppercase">Instant Match Rate</div>
                      </div>
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                        <div className="text-xl font-black text-amber-800 font-mono">1.8 hrs</div>
                        <div className="text-[10px] text-amber-800 font-bold uppercase">Avg CSC Turnaround</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 mb-6 text-xs text-stone-700 space-y-2">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-700" />
                        <span>Cryptographically Audited DBT Ledger</span>
                      </div>
                      <p className="text-stone-600 leading-relaxed">
                        Every citizen query generates an immutable audit record linking the identified scheme, required documents, and CSC confirmation token to eliminate duplicate claims and prevent middleman bribery.
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveModalFeature(null)}
                      className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-sm transition-colors"
                    >
                      Close Console View
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
