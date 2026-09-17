import React from 'react';
import { 
  Quote, 
  MapPin, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Building,
  HeartHandshake
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ImpactAndTrustProps {
  currentLang: Language;
}

export const ImpactAndTrust: React.FC<ImpactAndTrustProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.impact.badge}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            {t.impact.title}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {t.impact.subtitle}
          </p>
        </div>

        {/* 3 Grassroots Beneficiary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {t.impact.testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-500/40 mb-3" />
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80">
                <div className="font-display font-bold text-stone-900 text-base">
                  {item.name}
                </div>
                <div className="text-xs font-semibold text-emerald-800">
                  {item.role}
                </div>
                <div className="flex items-center gap-1 text-xs text-stone-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>{item.village}, {item.state}</span>
                </div>
                <div className="mt-3 inline-block px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[11px] font-semibold text-emerald-900">
                  Benefit: {item.schemeBenefited}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Data Standards & Institutional Alignment */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#F4F5F1] to-stone-100 border border-stone-300/80 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-stone-900">
                  Grounded in Verified Public Datasets & Standards
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  Strictly referenced against published ministry gazettes, DBT Bharat data portals, and state welfare directives.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-xs font-semibold text-stone-700">
              {t.impact.trustPartners.map((partner, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 shadow-2xs"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
