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

const PROBLEM_DATA_LOCALIZED: Record<Language, {
  badge: string;
  title: string;
  subtitle: string;
  cards: {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    description: string;
    tag: string;
    highlight: string;
  }[];
}> = {
  en: {
    badge: 'The Access Gap',
    title: 'Why Rural Communities Need Better Access',
    subtitle: 'Public benefits and essential services exist, but rural citizens face critical hurdles across multiple stages.',
    cards: [
      {
        id: 'scattered-info',
        number: '01',
        title: 'Scattered Information',
        subtitle: 'Fragmented Portals',
        description: 'Important services are spread across different platforms.',
        tag: 'Information Void',
        highlight: 'Services buried across 50+ departmental portals'
      },
      {
        id: 'language-barriers',
        number: '02',
        title: 'Language Barriers',
        subtitle: 'Language Gap',
        description: 'Information may not be available in languages users are comfortable with.',
        tag: 'Linguistic Divide',
        highlight: 'Complex legal English instead of regional mother tongues'
      },
      {
        id: 'difficult-to-understand',
        number: '03',
        title: 'Difficult to Understand',
        subtitle: 'Complex Criteria',
        description: 'Eligibility and application procedures can be confusing.',
        tag: 'Complexity',
        highlight: 'Confusing eligibility rules and hidden documentation criteria'
      },
      {
        id: 'centralized-guidance',
        number: '04',
        title: 'Lack of Centralized Guidance',
        subtitle: 'Disconnected Support',
        description: 'Users have to search multiple sources to find the right service.',
        tag: 'No Single Source',
        highlight: 'No unified roadmap or step-by-step application walkthrough'
      }
    ]
  },
  hi: {
    badge: 'पहुंच की कमी',
    title: 'ग्रामीण समुदायों को बेहतर पहुंच की आवश्यकता क्यों है',
    subtitle: 'सरकारी सेवाएं और योजनाएं मौजूद हैं, लेकिन ग्रामीणों को उन तक पहुंचने में बड़ी बाधाओं का सामना करना पड़ता है।',
    cards: [
      {
        id: 'scattered-info',
        number: '01',
        title: 'बिखरी हुई जानकारी',
        subtitle: 'अलग-अलग पोर्टल',
        description: 'महत्वपूर्ण सेवाएं विभिन्न प्लेटफार्मों पर बिखरी हुई हैं।',
        tag: 'जानकारी का बिखराव',
        highlight: 'दर्जनों मंत्रालयों के अलग-अलग वेबसाइट'
      },
      {
        id: 'language-barriers',
        number: '02',
        title: 'भाषा की बाधा',
        subtitle: 'भाषाई दूरी',
        description: 'जानकारी उन भाषाओं में उपलब्ध नहीं हो सकती है जिनमें नागरिक सहज हैं।',
        tag: 'भाषा अंतर',
        highlight: 'कठिन अंग्रेजी और कानूनी शब्दावली'
      },
      {
        id: 'difficult-to-understand',
        number: '03',
        title: 'समझने में कठिन',
        subtitle: 'जटिल नियम',
        description: 'पात्रता और आवेदन प्रक्रियाएं भ्रमित करने वाली हो सकती हैं।',
        tag: 'जटिलता',
        highlight: 'अस्पष्ट शर्तें और आवश्यक दस्तावेजों का भ्रम'
      },
      {
        id: 'centralized-guidance',
        number: '04',
        title: 'केंद्रीकृत मार्गदर्शन का अभाव',
        subtitle: 'एकल सहायता नहीं',
        description: 'उपयोगकर्ताओं को सही सेवा खोजने के लिए कई स्रोतों को खोजना पड़ता है।',
        tag: 'कोई एकल मंच नहीं',
        highlight: 'अंतिम छोर तक चरणबद्ध मार्गदर्शन की अनुपस्थिति'
      }
    ]
  },
  ta: {
    badge: 'அணுகல் இடைவெளி',
    title: 'கிராமப்புற சமூகங்களுக்கு சிறந்த அணுகல் ஏன் தேவைப்படுகிறது',
    subtitle: 'திட்டங்கள் உள்ளன, ஆனால் கிராமப்புற குடிமக்கள் அரசு சேவைகளைப் பெற பல தடைகளை எதிர்கொள்கின்றனர்.',
    cards: [
      {
        id: 'scattered-info',
        number: '01',
        title: 'சிதறிய தகவல்கள்',
        subtitle: 'பல இணையதளங்கள்',
        description: 'முக்கியமான சேவைகள் வெவ்வேறு தளங்களில் சிதறிக் கிடக்கின்றன.',
        tag: 'தகவல் சிதறல்',
        highlight: 'பல்வேறு துறை இணையதளங்களில் மறைந்துள்ள தகவல்'
      },
      {
        id: 'language-barriers',
        number: '02',
        title: 'மொழி தடைகள்',
        subtitle: 'மொழி இடைவெளி',
        description: 'பயனர்கள் வசதியாகப் பயன்படுத்தும் மொழிகளில் தகவல் கிடைக்காமல் இருக்கலாம்.',
        tag: 'மொழி தடை',
        highlight: 'கடினமான ஆங்கில அரசாணைகள்'
      },
      {
        id: 'difficult-to-understand',
        number: '03',
        title: 'புரிந்துகொள்வது கடினம்',
        subtitle: 'சிக்கலான விதிகள்',
        description: 'தகுதி மற்றும் விண்ணப்ப நடைமுறைகள் குழப்பமாக இருக்கலாம்.',
        tag: 'சிக்கலான முறை',
        highlight: 'குழப்பமான தகுதி நிபந்தனைகள்'
      },
      {
        id: 'centralized-guidance',
        number: '04',
        title: 'ஒருங்கிணைந்த வழிகாட்டுதல் இல்லாமை',
        subtitle: 'ஒருங்கிணைப்பு இன்மை',
        description: 'சரியான சேவையை கண்டறிய பயனர்கள் பல ஆதாரங்களை தேட வேண்டியுள்ளது.',
        tag: 'ஒற்றைத் தளம் இன்மை',
        highlight: 'படிப்படியான வழிகாட்டுதல் இல்லாத நிலை'
      }
    ]
  },
  te: {
    badge: 'సేవా లభ్యత లోపం',
    title: 'గ్రామీణ వర్గాలకు మెరుగైన ప్రాప్యత ఎందుకు అవసరం',
    subtitle: 'ప్రజా సంక్షేమ పథకాలు ఉన్నప్పటికీ, గ్రామీణ ప్రజలు వాటిని పొందడంలో తీవ్ర సమస్యలను ఎదుర్కొంటున్నారు.',
    cards: [
      {
        id: 'scattered-info',
        number: '01',
        title: 'చెల్లాచెదురైన సమాచారం',
        subtitle: 'వివిధ పోర్టల్స్',
        description: 'ముఖ్యమైన సేవలు వివిధ వేదికలలో విస్తరించి ఉన్నాయి.',
        tag: 'సమాచార లోపం',
        highlight: 'వివిధ శాఖల మధ్య విడిపోయిన డేటా'
      },
      {
        id: 'language-barriers',
        number: '02',
        title: 'భాషా అడ్డంకులు',
        subtitle: 'స్థానిక భాషా లోపం',
        description: 'వినియోగదారులకు అనుకూలమైన భాషలలో సమాచారం అందుబాటులో ఉండకపోవచ్చు.',
        tag: 'భాషా సమస్య',
        highlight: 'క్లిష్టమైన ఆంగ్ల ప్రభుత్వ ఉత్తర్వులు'
      },
      {
        id: 'difficult-to-understand',
        number: '03',
        title: 'అర్థం చేసుకోవడం కష్టం',
        subtitle: 'సంక్లిష్ట నిబంధనలు',
        description: 'అర్హత మరియు దరఖాస్తు విధానాలు గందరగోళంగా ఉండవచ్చు.',
        tag: 'సంక్లిష్టత',
        highlight: 'స్పష్టత లేని డాక్యుమెంట్ అవసరాలు'
      },
      {
        id: 'centralized-guidance',
        number: '04',
        title: 'కేంద్రీకృత మార్గదర్శకత్వం లేకపోవడం',
        subtitle: 'ఒకే వేదిక లోపం',
        description: 'సరైన సేవను కనుగొనడానికి వినియోగదారులు బహుళ వనరులను శోధించాల్సి ఉంటుంది.',
        tag: 'కేంద్రీకృత లోపం',
        highlight: 'దశలవారీగా సహాయం లేని స్థితి'
      }
    ]
  },
  bn: {
    badge: 'সুযোগের ব্যবধান',
    title: 'গ্রামীণ সম্প্রদায়ের জন্য কেন উন্নত প্রবেশাধিকার প্রয়োজন',
    subtitle: 'সরকারি জনকল্যাণমূলক প্রকল্প থাকা সত্ত্বেও গ্রামীণ মানুষ পরিষেবা পেতে নানাবিধ সমস্যার সম্মুখীন হন।',
    cards: [
      {
        id: 'scattered-info',
        number: '01',
        title: 'বিক্ষিপ্ত তথ্য',
        subtitle: 'বিভিন্ন পোর্টাল',
        description: 'গুরুত্বপূর্ণ পরিষেবাগুলি বিভিন্ন প্ল্যাটফর্মে ছড়িয়ে ছিটিয়ে রয়েছে।',
        tag: 'তথ্যের অভাব',
        highlight: 'বহুবিধ সরকারি পোর্টালে বিভক্ত'
      },
      {
        id: 'language-barriers',
        number: '02',
        title: 'ভাষাগত বাধা',
        subtitle: 'ভাষার ব্যবধান',
        description: 'ব্যবহারকারীদের সুবিধাজনক ভাষায় তথ্য উপলব্ধ নাও হতে পারে।',
        tag: 'ভাষাগত দূরত্ব',
        highlight: 'আইনি ইংরেজি ভাষার জটিলতা'
      },
      {
        id: 'difficult-to-understand',
        number: '03',
        title: 'বোঝা কঠিন',
        subtitle: 'জটিল নিয়মাবলী',
        description: 'যোগ্যতা এবং আবেদন পদ্ধতি বিভ্রান্তিকর হতে পারে।',
        tag: 'জটিলতা',
        highlight: 'বিভ্রান্তিকর শর্ত ও কাগজপত্র'
      },
      {
        id: 'centralized-guidance',
        number: '04',
        title: 'কেন্দ্রীভূত নির্দেশনার অভাব',
        subtitle: 'সমন্বয়ের অভাব',
        description: 'সঠিক পরিষেবা খুঁজে পেতে ব্যবহারকারীদের একাধিক উৎস অনুসন্ধান করতে হয়।',
        tag: 'একক প্ল্যাটফর্মের অভাব',
        highlight: 'ধারাবাহিক নির্দেশিকার অনুপস্থিতি'
      }
    ]
  }
};

interface ProblemStatementProps {
  currentLang: Language;
}

export const ProblemStatement: React.FC<ProblemStatementProps> = ({ currentLang }) => {
  const data = PROBLEM_DATA_LOCALIZED[currentLang] || PROBLEM_DATA_LOCALIZED.en;

  const getProblemIcon = (id: string) => {
    switch (id) {
      case 'scattered-info':
        return <FileSpreadsheet className="w-6 h-6 text-amber-700" />;
      case 'language-barriers':
        return <Languages className="w-6 h-6 text-orange-700" />;
      case 'difficult-to-understand':
        return <AlertTriangle className="w-6 h-6 text-red-700" />;
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

                {/* Bottom Highlight & Impact */}
                <div className="pt-4 border-t border-stone-200/80">
                  <div className="p-2.5 rounded-xl bg-white border border-stone-200/90 flex items-start gap-2 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-stone-800 leading-snug">
                      {card.highlight}
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
