import React from 'react';
import { 
  Sprout, 
  Landmark, 
  HeartPulse, 
  Coins, 
  Mic, 
  WifiOff, 
  ArrowUpRight, 
  CheckCircle,
  Layers,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FeaturesProps {
  currentLang: Language;
  onExploreFeature: (featureId: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({
  currentLang,
  onExploreFeature,
}) => {
  const t = TRANSLATIONS[currentLang];

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'agri':
        return <Sprout className="w-6 h-6 text-emerald-700" />;
      case 'welfare':
        return <Landmark className="w-6 h-6 text-amber-700" />;
      case 'health':
        return <HeartPulse className="w-6 h-6 text-orange-600" />;
      case 'finance':
        return <Coins className="w-6 h-6 text-emerald-800" />;
      case 'voice':
        return <Mic className="w-6 h-6 text-amber-600" />;
      case 'offline':
        return <WifiOff className="w-6 h-6 text-orange-700" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-700" />;
    }
  };

  const getBadgeColors = (id: string) => {
    switch (id) {
      case 'agri':
      case 'finance':
        return 'bg-emerald-100/90 text-emerald-900 border-emerald-300';
      case 'welfare':
      case 'voice':
        return 'bg-amber-100/90 text-amber-900 border-amber-300';
      case 'health':
      case 'offline':
        return 'bg-orange-100/90 text-orange-900 border-orange-300';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-300';
    }
  };

  const getAccentBorder = (id: string) => {
    switch (id) {
      case 'agri':
      case 'finance':
        return 'hover:border-emerald-500 hover:shadow-emerald-900/5';
      case 'welfare':
      case 'voice':
        return 'hover:border-amber-500 hover:shadow-amber-900/5';
      case 'health':
      case 'offline':
        return 'hover:border-orange-500 hover:shadow-orange-900/5';
      default:
        return 'hover:border-stone-400';
    }
  };

  return (
    <section 
      id="features" 
      className="py-16 md:py-24 bg-white border-b border-stone-200/80 scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.features.badge}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            {t.features.title}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* 6 Core Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.features.items.map((feature) => (
            <div
              key={feature.id}
              id={`feature-card-${feature.id}`}
              className={`group relative p-6 sm:p-7 rounded-2xl bg-[#FBFBF9] border border-stone-200 shadow-xs transition-all duration-200 flex flex-col justify-between ${getAccentBorder(
                feature.id
              )}`}
            >
              <div>
                {/* Top Row: Icon + Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getFeatureIcon(feature.id)}
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold border uppercase tracking-wide ${getBadgeColors(
                      feature.id
                    )}`}
                  >
                    {feature.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 mb-2.5 group-hover:text-emerald-800 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Highlights Bullet List */}
              <div className="pt-4 border-t border-stone-200/70">
                <div className="space-y-2 mb-4">
                  {feature.highlights.map((point, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs font-medium text-stone-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Link to Live Demo */}
                <a
                  href="#navigator-demo"
                  onClick={() => onExploreFeature(feature.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group-hover:underline"
                >
                  <span>Test in Live Navigator</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
