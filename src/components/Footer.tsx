import React from 'react';
import { 
  Sprout, 
  PhoneCall, 
  ShieldCheck, 
  Heart, 
  Globe, 
  ArrowUp, 
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { LANGUAGES, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onLanguageChange }) => {
  const t = TRANSLATIONS[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-700 text-white font-bold">
                <svg 
                  className="w-6 h-6 text-emerald-100" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 22v-8" stroke="#fef08a" strokeWidth="2.5" />
                  <path d="M12 14c-3.5 0-6-2.5-6-6 4 0 6 2.5 6 6Z" fill="#86efac" stroke="#fef08a" strokeWidth="1.75" />
                  <path d="M12 14c3.5 0 6-2.5 6-6-4 0-6 2.5-6 6Z" fill="#fde047" stroke="#ea580c" strokeWidth="1.75" />
                  <circle cx="12" cy="14" r="2" fill="#ffffff" stroke="#15803d" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl text-white tracking-tight">
                  AI <span className="text-emerald-400">Rural</span>
                </span>
                <span className="text-xs text-stone-400">AI Rural Services Navigator</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed pr-6">
              {t.footer.description}
            </p>

            {/* Hackathon Badge */}
            <div className="p-3 rounded-xl bg-stone-800/90 border border-stone-700/80 inline-flex items-center gap-2.5 text-xs text-amber-300 font-semibold">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Built for National Civic-Tech Hackathon 2026</span>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3 text-stone-400">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-emerald-800 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-emerald-800 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-emerald-800 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:contact@airural.org" 
                className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-emerald-800 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Contact Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-emerald-400 transition-colors">
                  Problem Statement
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#ai-chat-demo" className="hover:text-emerald-400 transition-colors text-amber-300 font-semibold">
                  ★ AI Chat Demo
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-emerald-400 transition-colors">
                  Impact & Outcomes
                </a>
              </li>
              <li>
                <a href="#verified-knowledge" className="hover:text-emerald-400 transition-colors">
                  Verified Knowledge Base
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Language Switcher Col */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Languages</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  <button
                    onClick={() => onLanguageChange(l.code)}
                    className={`transition-colors flex items-center gap-2 ${
                      currentLang === l.code
                        ? 'text-emerald-400 font-bold'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    <span>{l.nativeName}</span>
                    <span className="text-[10px] text-stone-500 font-normal">({l.name})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Numbers Col */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              National Helplines
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700/60">
                <span className="text-stone-400 block text-[11px]">Kisan Call Centre</span>
                <a href="tel:18001801551" className="font-bold text-emerald-400 hover:underline">
                  1800-180-1551
                </a>
              </li>
              <li className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700/60">
                <span className="text-stone-400 block text-[11px]">Rural Navigator Helpline</span>
                <a href="tel:18008897872" className="font-bold text-amber-400 hover:underline">
                  1800-889-RURAL
                </a>
              </li>
              <li className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700/60">
                <span className="text-stone-400 block text-[11px]">National Health / Ambulance</span>
                <span className="font-bold text-orange-400">1075 / 108</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Disclaimer, Accessibility & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="text-center sm:text-left space-y-1">
            <p>{t.footer.copyright}</p>
            <p className="text-[11px] text-stone-600 max-w-2xl">
              {t.footer.disclaimer}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold transition-colors shrink-0"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
