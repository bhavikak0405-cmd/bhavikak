import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Menu, 
  X, 
  PhoneCall, 
  ChevronDown, 
  Check, 
  Sparkles,
  Layers,
  HelpCircle,
  MessageSquareQuote
} from 'lucide-react';
import { Language } from '../types';
import { LANGUAGES, TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigateToDemo: (queryId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onNavigateToDemo,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = TRANSLATIONS[currentLang];
  const activeLangObj = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLabels: Record<Language, { problem: string; chat: string; impact: string; trust: string }> = {
    en: { problem: 'Challenge', chat: 'AI Chat Demo', impact: 'Impact', trust: 'Verified KB' },
    hi: { problem: 'समस्या', chat: 'एआई चैट', impact: 'प्रभाव', trust: 'सत्यापित आधार' },
    ta: { problem: 'சவால்கள்', chat: 'ஏஐ உரையாடல்', impact: 'தாக்கம்', trust: 'அரசு சான்று' },
    te: { problem: 'సవాలు', chat: 'ఏఐ చాట్', impact: 'ప్రభావం', trust: 'ధృవీకరణ' },
    bn: { problem: 'চ্যালেঞ্জ', chat: 'এআই চ্যাট', impact: 'প্রভাব', trust: 'সত্যায়িত ভিত্তি' }
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: navLabels[currentLang]?.problem || 'Challenge', href: '#problem' },
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.features, href: '#features' },
    { name: navLabels[currentLang]?.chat || 'AI Chat Demo', href: '#ai-chat-demo', isSpecial: true },
    { name: navLabels[currentLang]?.impact || 'Impact', href: '#impact' },
    { name: navLabels[currentLang]?.trust || 'Verified KB', href: '#verified-knowledge' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
          : 'bg-[#F9FAF8]/90 backdrop-blur-sm border-b border-stone-200/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 text-white shadow-sm ring-1 ring-emerald-900/10 group-hover:scale-105 transition-transform duration-200">
              {/* Sprout & Network Node Civic SVG Icon */}
              <svg 
                className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-100" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2Z" fill="#15803d" stroke="#166534" fillOpacity="0.2"/>
                <path d="M12 22v-8" stroke="#fef08a" strokeWidth="2.5" />
                <path d="M12 14c-3.5 0-6-2.5-6-6 4 0 6 2.5 6 6Z" fill="#86efac" stroke="#fef08a" strokeWidth="1.75" />
                <path d="M12 14c3.5 0 6-2.5 6-6-4 0-6 2.5-6 6Z" fill="#fde047" stroke="#ea580c" strokeWidth="1.75" />
                <circle cx="12" cy="14" r="2" fill="#ffffff" stroke="#15803d" />
              </svg>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-amber-500 rounded-full border-2 border-white ring-1 ring-amber-600/30" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl sm:text-2xl text-stone-900 tracking-tight leading-none">
                  AI <span className="text-emerald-700">Rural</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300/60">
                  CIVIC-AI
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-stone-500 tracking-normal mt-0.5">
                Services Navigator
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`nav-link-${link.href.replace('#', '')}`}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                  link.isSpecial
                    ? 'text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200/80 flex items-center gap-1.5'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/80'
                }`}
              >
                {link.isSpecial && <Sparkles className="w-4 h-4 text-emerald-600" />}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Language Selector + Helpline + Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                id="language-selector-button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 text-xs sm:text-sm font-medium shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-emerald-600"
                aria-haspopup="true"
                aria-expanded={langDropdownOpen}
                aria-label="Change Language"
              >
                <Globe className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-semibold text-stone-900">
                  {activeLangObj.nativeName}
                </span>
                <span className="hidden md:inline text-xs text-stone-400">
                  ({activeLangObj.name})
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div 
                    id="language-dropdown-menu"
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-stone-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                  >
                    <div className="px-3 py-1.5 text-[11px] font-bold text-stone-400 uppercase tracking-wider border-b border-stone-100">
                      Select Regional Language
                    </div>
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        id={`select-lang-${lang.code}`}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-sm transition-colors ${
                          currentLang === lang.code
                            ? 'bg-emerald-50 text-emerald-900 font-bold'
                            : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900 font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-600 text-xs font-bold flex items-center justify-center border border-stone-200">
                            {lang.scriptLabel}
                          </span>
                          <div>
                            <p className="leading-tight">{lang.nativeName}</p>
                            <p className="text-xs text-stone-400 font-normal">{lang.name}</p>
                          </div>
                        </div>
                        {currentLang === lang.code && (
                          <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Helpline Action Callout (Desktop) */}
            <a
              href="tel:18008897872"
              id="header-helpline-button"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold text-emerald-900 bg-emerald-100/80 hover:bg-emerald-200/90 border border-emerald-300/70 transition-colors shadow-2xs"
              title="Call National Toll-Free Helpline: 1800-889-7872"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-700 animate-pulse" />
              <span>1800-889-RURAL</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-b border-stone-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                  link.isSpecial
                    ? 'text-emerald-800 bg-emerald-50 border border-emerald-200 flex items-center justify-between'
                    : 'text-stone-700 hover:text-emerald-800 hover:bg-stone-50'
                }`}
              >
                <span>{link.name}</span>
                {link.isSpecial && <Sparkles className="w-4 h-4 text-emerald-600" />}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <div className="text-xs font-bold uppercase text-stone-400 tracking-wider px-2">
              Toll-Free Voice Helpline
            </div>
            <a
              href="tel:18008897872"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-700 text-white font-semibold text-sm shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call 1800-889-RURAL (Free)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
