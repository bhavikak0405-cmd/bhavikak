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
  TrendingUp,
  HeartHandshake
} from 'lucide-react';
import { Language } from '../types';
import { CHAT_AND_IMPACT_DATA } from '../data/chatAndImpactData';
import { TRANSLATIONS } from '../data/translations';

interface ImpactSectionProps {
  currentLang: Language;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ currentLang }) => {
  const content = CHAT_AND_IMPACT_DATA[currentLang].impactSection;
  const legacyTranslations = TRANSLATIONS[currentLang].impact;

  const getCardIcon = (id: string) => {
    switch (id) {
      case 'service-discovery':
        return <Compass className="w-6 h-6 text-emerald-700" />;
      case 'accessibility':
        return <Wifi className="w-6 h-6 text-amber-700" />;
      case 'understanding':
        return <BookOpenCheck className="w-6 h-6 text-orange-700" />;
      case 'centralized-info':
      default:
        return <Layers className="w-6 h-6 text-teal-700" />;
    }
  };

  const getCardAccent = (index: number) => {
    switch (index) {
      case 0:
        return {
          pill: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          metricColor: 'text-emerald-800',
          hoverBorder: 'hover:border-emerald-500 hover:shadow-emerald-900/5',
          glow: 'from-emerald-500/10'
        };
      case 1:
        return {
          pill: 'bg-amber-100 text-amber-900 border-amber-300',
          metricColor: 'text-amber-800',
          hoverBorder: 'hover:border-amber-500 hover:shadow-amber-900/5',
          glow: 'from-amber-500/10'
        };
      case 2:
        return {
          pill: 'bg-orange-100 text-orange-900 border-orange-300',
          metricColor: 'text-orange-800',
          hoverBorder: 'hover:border-orange-500 hover:shadow-orange-900/5',
          glow: 'from-orange-500/10'
        };
      case 3:
      default:
        return {
          pill: 'bg-teal-100 text-teal-900 border-teal-300',
          metricColor: 'text-teal-800',
          hoverBorder: 'hover:border-teal-500 hover:shadow-teal-900/5',
          glow: 'from-teal-500/10'
        };
    }
  };

  return (
    <section 
      id="impact" 
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
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            <span>{content.sectionBadge}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            {content.title}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        {/* 4 Modern Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {content.cards.map((card, index) => {
            const styles = getCardAccent(index);
            return (
              <motion.div
                key={card.id}
                id={`impact-card-${card.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-[#FCFCFA] border border-stone-200/90 shadow-2xs transition-all duration-200 flex flex-col justify-between overflow-hidden ${styles.hoverBorder}`}
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      {getCardIcon(card.id)}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border uppercase tracking-wide ${styles.pill}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Impact Metric & Subtitle */}
                  <div className="mb-4">
                    <div className={`font-display text-3xl sm:text-4xl font-black ${styles.metricColor} tracking-tight`}>
                      {card.metric}
                    </div>
                    <div className="text-xs font-bold text-stone-500 uppercase tracking-wide mt-1">
                      {card.metricLabel}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-lg font-bold text-stone-900 mb-1">
                    {card.title}
                  </h3>
                  <div className="text-xs font-semibold text-stone-500 mb-3">
                    {card.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-200/70 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-950">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Verified Civic Metric</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Grassroots Beneficiaries Strip */}
        <div className="mt-8 pt-8 border-t border-stone-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">
              Grassroots Beneficiary Experiences
            </h3>
            <p className="text-xs text-stone-500">
              Direct voices from Gram Panchayats across Uttar Pradesh, Tamil Nadu, and Bihar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legacyTranslations.testimonials.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-amber-500/50 mb-2" />
                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic mb-4">
                    “{item.quote}”
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200/80">
                  <div className="font-display font-bold text-stone-900 text-sm">
                    {item.name}
                  </div>
                  <div className="text-xs font-semibold text-emerald-800">
                    {item.role}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    <span>{item.village}, {item.state}</span>
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
