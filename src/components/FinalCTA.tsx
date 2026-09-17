import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Mic, 
  Compass, 
  CheckCircle2, 
  MapPin,
  Building2
} from 'lucide-react';
import { Language } from '../types';

interface FinalCTAProps {
  currentLang: Language;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ currentLang }) => {
  const getTranslations = () => {
    switch (currentLang) {
      case 'hi':
        return {
          badge: 'सार्वजनिक नागरिक सेवा',
          heading: 'सही ग्रामीण सेवा खोजें, बिल्कुल सरलता से।',
          subtitle: 'अपनी भाषा में बोलें या लिखें। बिना किसी बिचौलिये के सीधे सरकारी योजनाओं, कृषि सब्सिडी और नजदीकी सीएससी केंद्रों तक पहुंचें।',
          btnPrimary: 'AI Rural आज़माएं',
          btnSecondary: 'योजनाएं देखें',
          trust1: '100% निःशुल्क और सुरक्षित',
          trust2: 'सत्यापित सरकारी ज्ञानकोष',
          trust3: 'सभी 28 राज्य और केंद्र शासित प्रदेश',
        };
      case 'ta':
        return {
          badge: 'பொது மக்கள் சேவை',
          heading: 'சரியான கிராமப்புற சேவையை எளிதாகக் கண்டறியுங்கள்.',
          subtitle: 'உங்கள் தாய்மொழியில் பேசி அல்லது தட்டச்சு செய்து அரசு நலத்திட்டங்கள் மற்றும் அருகிலுள்ள இ-சேவை மையங்களை உடனே அறியுங்கள்.',
          btnPrimary: 'AI Rural முயற்சிக்கவும்',
          btnSecondary: 'திட்டங்களை ஆராயுங்கள்',
          trust1: '100% இலவசம் மற்றும் பாதுகாப்பானது',
          trust2: 'சரிபார்க்கப்பட்ட அரசு தகவல் தளம்',
          trust3: 'அனைத்து மாநிலங்களிலும் கிடைக்கும்',
        };
      case 'te':
        return {
          badge: 'ప్రజా సేవా వేదిక',
          heading: 'సరైన గ్రామీణ సేవను సులభంగా కనుగొనండి.',
          subtitle: 'మీ స్థానిక భాషలో అడగండి. దళారులు లేకుండా ప్రభుత్వం అందించే పథకాలు, సబ్సిడీలు మరియు సమీప సేవా కేంద్రాలను పొందండి.',
          btnPrimary: 'AI Rural ప్రయత్నించండి',
          btnSecondary: 'పథకాలను చూడండి',
          trust1: '100% ఉచితం & సురక్షితం',
          trust2: 'ధృవీకరించబడిన డేటాబేస్',
          trust3: 'అన్ని రాష్ట్రాలలో అందుబాటులో ఉంది',
        };
      case 'bn':
        return {
          badge: 'জনকল্যাণমূলক প্ল্যাটফর্ম',
          heading: 'সঠিক গ্রামীণ পরিষেবা খুঁজুন, একদম সহজভাবে।',
          subtitle: 'আপনার মাতৃভাষায় কথা বলুন বা লিখুন। কোনো দালাল ছাড়াই সরকারি প্রকল্প, কৃষি ভর্তুকি এবং নিকটবর্তী সিএসসি কেন্দ্র খুঁজুন।',
          btnPrimary: 'AI Rural ব্যবহার করুন',
          btnSecondary: 'প্রকল্পগুলি দেখুন',
          trust1: '১০০% বিনামূল্যে ও নিরাপদ',
          trust2: 'যাচাইকৃত সরকারি তথ্যভাণ্ডার',
          trust3: 'সমস্ত রাজ্য ও কেন্দ্রশাসিত অঞ্চল',
        };
      case 'en':
      default:
        return {
          badge: 'Inclusive Public Intelligence',
          heading: 'Find the Right Rural Service, Simply.',
          subtitle: 'Bridging the last mile for 800,000+ villages. Ask questions in your native tongue, discover exact scheme eligibilities, and locate your nearest Gram Panchayat service center in seconds.',
          btnPrimary: 'Try AI Rural',
          btnSecondary: 'Explore All Schemes',
          trust1: '100% Free & Open Access',
          trust2: 'Audited & Verified Knowledge Base',
          trust3: 'Pan-India Gram Panchayat Coverage',
        };
    }
  };

  const c = getTranslations();

  return (
    <section 
      id="final-cta" 
      className="py-16 md:py-24 bg-white border-b border-stone-200/80 relative overflow-hidden"
    >
      {/* Subtle background ambient accents */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-100/40 via-amber-100/30 to-orange-100/20 blur-3xl rounded-full pointer-events-none -z-0" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-3xl bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-white p-8 sm:p-12 lg:p-16 text-center shadow-xl border border-stone-800 relative overflow-hidden"
        >
          {/* Top Decorative Sparkle Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-amber-400 to-orange-500" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800 border border-stone-700 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{c.badge}</span>
          </div>

          {/* Prompt-mandated Headline */}
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-5 max-w-3xl mx-auto">
            {c.heading}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            {c.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* Prominent "Try AI Rural" button */}
            <a
              href="#ai-chat-demo"
              id="final-cta-try-ai-rural"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-stone-950 font-black text-base shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mic className="w-5 h-5 text-stone-950" />
              <span>{c.btnPrimary}</span>
              <ArrowRight className="w-4 h-4 text-stone-950" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#features"
              id="final-cta-explore-schemes"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-stone-800/90 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 text-base font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-5 h-5 text-amber-400" />
              <span>{c.btnSecondary}</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-8 border-t border-stone-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-stone-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{c.trust1}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{c.trust2}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
              <span>{c.trust3}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
