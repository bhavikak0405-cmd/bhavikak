import React from 'react';
import { motion } from 'motion/react';
import { 
  FileSpreadsheet, 
  Languages, 
  WifiOff, 
  ShieldAlert, 
  AlertTriangle,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../types';
import { NAVIGATOR_SECTIONS_DATA } from '../data/navigatorFeatures';

interface ProblemStatementProps {
  currentLang: Language;
}

export const ProblemStatement: React.FC<ProblemStatementProps> = ({ currentLang }) => {
  const data = NAVIGATOR_SECTIONS_DATA[currentLang].problem;

  const getProblemIcon = (id: string) => {
    switch (id) {
      case 'scattered-info':
        return <FileSpreadsheet className="w-6 h-6 text-amber-700" />;
      case 'language-barriers':
        return <Languages className="w-6 h-6 text-orange-700" />;
      case 'low-accessibility':
        return <WifiOff className="w-6 h-6 text-red-700" />;
      case 'centralized-guidance':
        return <ShieldAlert className="w-6 h-6 text-rose-700" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-amber-700" />;
    }
  };

  const getCardAccent = (index: number) => {
    switch (index) {
      case 0:
        return {
          pill: 'bg-amber-100 text-amber-900 border-amber-300',
          stat: 'text-amber-800',
          borderHover: 'hover:border-amber-400 hover:shadow-amber-900/5',
          glow: 'from-amber-500/10 to-transparent'
        };
      case 1:
        return {
          pill: 'bg-orange-100 text-orange-900 border-orange-300',
          stat: 'text-orange-800',
          borderHover: 'hover:border-orange-400 hover:shadow-orange-900/5',
          glow: 'from-orange-500/10 to-transparent'
        };
      case 2:
        return {
          pill: 'bg-red-100 text-red-900 border-red-300',
          stat: 'text-red-800',
          borderHover: 'hover:border-red-400 hover:shadow-red-900/5',
          glow: 'from-red-500/10 to-transparent'
        };
      case 3:
      default:
        return {
          pill: 'bg-rose-100 text-rose-900 border-rose-300',
          stat: 'text-rose-800',
          borderHover: 'hover:border-rose-400 hover:shadow-rose-900/5',
          glow: 'from-rose-500/10 to-transparent'
        };
    }
  };

  return (
    <section 
      id="problem" 
      className="py-16 md:py-24 bg-white border-b border-stone-200/80 scroll-mt-14 relative overflow-hidden"
    >
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
            <span>{data.badge}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4 leading-tight">
            {data.title}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        {/* 4 Visually Attractive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.cards.map((card, index) => {
            const styles = getCardAccent(index);
            return (
              <motion.div
                key={card.id}
                id={`problem-card-${card.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                className={`group relative p-6 rounded-2xl bg-[#FCFCFA] border border-stone-200/90 shadow-2xs transition-all duration-250 flex flex-col justify-between overflow-hidden ${styles.borderHover}`}
              >
                {/* Subtle top corner gradient glow */}
                <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${styles.glow} rounded-bl-full pointer-events-none`} />

                <div>
                  {/* Top Bar: Icon + Number + Category Tag */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      {getProblemIcon(card.id)}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold border uppercase tracking-wider ${styles.pill}`}>
                        {card.tag}
                      </span>
                      <span className="font-display text-lg font-bold text-stone-400/80">
                        {card.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-lg font-bold text-stone-900 mb-1 group-hover:text-stone-950 transition-colors">
                    {card.title}
                  </h3>
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">
                    {card.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Metric & Solution Pivot */}
                <div className="pt-4 border-t border-stone-200/80">
                  <div className="mb-3">
                    <div className={`font-display text-2xl sm:text-3xl font-black ${styles.stat} tracking-tight`}>
                      {card.impactStat}
                    </div>
                    <div className="text-[11px] font-medium text-stone-500 leading-snug mt-0.5">
                      {card.statLabel}
                    </div>
                  </div>

                  <div className="mt-3 p-2.5 rounded-xl bg-white border border-stone-200/90 flex items-start gap-2 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="text-[11px] font-semibold text-emerald-950 leading-tight">
                      {card.solutionSnippet}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transition callout bar linking Problem to Solution */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#F6F7F3] border border-stone-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <p className="font-display text-sm sm:text-base font-bold text-stone-900">
                AI Rural resolves all 4 barriers through an automated, end-to-end civic pipeline.
              </p>
              <p className="text-xs text-stone-500">
                Zero literacy hurdles, zero middlemen, zero fee exploitation.
              </p>
            </div>
          </div>

          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors shrink-0 shadow-2xs"
          >
            <span>See the 7-Step Solution</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
