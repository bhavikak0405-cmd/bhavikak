import { Language, LanguageInfo, DemoQuery } from '../types';

export const LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', scriptLabel: 'EN' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', scriptLabel: 'हि' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', scriptLabel: 'த' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', scriptLabel: 'తె' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', scriptLabel: 'বা' },
];

export interface TranslationContent {
  nav: {
    home: string;
    features: string;
    howItWorks: string;
    demo: string;
    contact: string;
    callHelpline: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    searchPlaceholder: string;
    searchBtn: string;
    exploreBtn: string;
    voiceBtn: string;
    popularQueriesLabel: string;
    popularQueries: string[];
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
    stat4Label: string;
    stat4Value: string;
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      badge: string;
      highlights: string[];
    }[];
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      subtitle: string;
      description: string;
      details: string[];
    }[];
    kioskModeTitle: string;
    kioskModeDesc: string;
    kioskModes: {
      title: string;
      desc: string;
    }[];
  };
  navigator: {
    badge: string;
    title: string;
    subtitle: string;
    inputPrompt: string;
    listenVoice: string;
    listening: string;
    verifiedBadge: string;
    eligibleFor: string;
    documentsNeeded: string;
    nextSteps: string;
    helplineText: string;
    sampleQueries: DemoQuery[];
  };
  impact: {
    badge: string;
    title: string;
    subtitle: string;
    testimonials: {
      id: string;
      quote: string;
      name: string;
      role: string;
      village: string;
      state: string;
      schemeBenefited: string;
    }[];
    trustPartners: string[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    phoneLabel: string;
    stateLabel: string;
    topicLabel: string;
    messageLabel: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    tollFreeTitle: string;
    tollFreeNumber: string;
    tollFreeDesc: string;
    cscCenterTitle: string;
    cscCenterDesc: string;
    faqTitle: string;
    faqItems: {
      q: string;
      a: string;
    }[];
  };
  footer: {
    about: string;
    description: string;
    quickLinks: string;
    legal: string;
    accessibility: string;
    disclaimer: string;
    emergency: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      howItWorks: 'How It Works',
      demo: 'Live Navigator',
      contact: 'Contact',
      callHelpline: 'Toll-Free Helpline',
    },
    hero: {
      badge: 'Civic-Tech AI for Rural Inclusion',
      titleStart: 'Empowering Villages with',
      titleHighlight: 'AI Rural Services Navigator',
      titleEnd: '',
      description:
        'A voice-first, multilingual AI platform bridging the gap between rural citizens and essential public services — agriculture, welfare schemes, rural healthcare, and local banking.',
      searchPlaceholder: 'Ask in your voice or type (e.g., How to apply for PM Kisan?)',
      searchBtn: 'Ask Navigator',
      exploreBtn: 'Explore Services',
      voiceBtn: 'Speak in Your Language',
      popularQueriesLabel: 'Common Inquiries:',
      popularQueries: [
        'PM-Kisan Installment Status',
        'Kisan Credit Card Eligibility',
        'Nearest Health Center & Vaccine',
        'Soil Health Card Testing',
      ],
      stat1Value: '100+',
      stat1Label: 'Verified Welfare Schemes',
      stat2Value: '5+',
      stat2Label: 'Regional Languages',
      stat3Value: '24/7',
      stat3Label: 'Voice & SMS Access',
      stat4Value: '100%',
      stat4Label: 'Free Public Service',
    },
    features: {
      badge: 'Core Pillars of Service',
      title: 'Built Specifically for Rural Realities',
      subtitle:
        'Designed to solve low digital literacy, fragmented government portals, and connectivity barriers with intuitive civic intelligence.',
      items: [
        {
          id: 'agri',
          title: 'Smart Agricultural Guidance',
          description:
            'Hyper-local crop advisory, real-time Mandi crop pricing, weather alerts, and pest identification explained in plain local vernacular.',
          badge: 'Agriculture & Climate',
          highlights: ['Live Mandi spot prices', 'Localized weather warnings', 'Fertilizer & soil dosage guide'],
        },
        {
          id: 'welfare',
          title: 'Instant Welfare Scheme Matching',
          description:
            'Find government subsidies, farmer pensions, maternal benefits, and housing programs based on simple household answers.',
          badge: 'Citizen Welfare',
          highlights: ['PM-Kisan & MGNREGA sync', 'Ration card entitlements', 'One-click eligibility checker'],
        },
        {
          id: 'health',
          title: 'Rural Healthcare & Tele-consult',
          description:
            'Locate nearest Primary Health Centres (PHC), check free medicine supplies, track immunization schedules, and connect with ASHA workers.',
          badge: 'Healthcare Access',
          highlights: ['Nearest PHC ambulance contact', 'Maternal care reminders', 'Ayushman Bharat card guide'],
        },
        {
          id: 'finance',
          title: 'Kisan Credit & Micro-Finance',
          description:
            'Transparent steps for crop loan applications, self-help group (SHG) micro-grants, and crop loss insurance (PMFBY) claim navigation.',
          badge: 'Financial Inclusion',
          highlights: ['KCC interest subvention rules', 'SHG loan documentation', 'Crop loss claim deadlines'],
        },
        {
          id: 'voice',
          title: 'Voice-First Vernacular AI',
          description:
            'Natural speech recognition tailored for regional accents and rural dialects, eliminating complex text menus and digital barriers.',
          badge: 'Voice Accessibility',
          highlights: ['Speak naturally in native tongue', 'Audio readout for illiteracy', 'Hands-free voice assistance'],
        },
        {
          id: 'offline',
          title: 'Low-Bandwidth & Offline Mode',
          description:
            'Access vital information through SMS fallbacks and interactive voice response (IVR) when internet connectivity drops.',
          badge: 'Offline & Resilience',
          highlights: ['Works over 2G / toll-free IVR', 'SMS printouts for CSC kiosks', 'Zero-data caching'],
        },
      ],
    },
    howItWorks: {
      badge: 'Simple 3-Step Process',
      title: 'From Question to Government Service in Seconds',
      subtitle:
        'Designed to ensure zero confusion, clear documentation lists, and seamless connection to your nearest village center.',
      steps: [
        {
          number: '01',
          title: 'Speak or Type Your Need',
          subtitle: 'In any regional language',
          description:
            'No forms or bureaucratic jargon. Speak as you would to a village elder or type a simple question on mobile or at a Common Service Center (CSC).',
          details: ['Natural audio mic input', 'Accepts slang & rural phrasing', 'Auto language detection'],
        },
        {
          number: '02',
          title: 'AI Matches Verified Schemes',
          subtitle: 'Government & local databases',
          description:
            'The engine cross-checks official ministry guidelines, village gazettes, and eligibility requirements to pinpoint your exact entitlements.',
          details: ['Real-time department verification', 'Eligibility filter by land holding', 'Calculates exact subsidy amounts'],
        },
        {
          number: '03',
          title: 'Receive Actionable Checklist',
          subtitle: 'Direct local execution',
          description:
            'Get a clear SMS checklist with required documents (Aadhaar, Land Record, Bank passbook) and directions to your closest village kiosk.',
          details: ['Downloadable offline checklist', 'SMS summary sent to feature phones', 'Direct CSC operator code'],
        },
      ],
      kioskModeTitle: 'Multi-Channel Deployment for Every Citizen',
      kioskModeDesc:
        'AI Rural is engineered to serve everyone — from smartphone owners to villagers with basic feature phones or zero internet.',
      kioskModes: [
        {
          title: 'Smart Mobile Web',
          desc: 'Lightweight, rapid-loading interface responsive on budget 4G smartphones.',
        },
        {
          title: 'Toll-Free Voice (IVR)',
          desc: 'Dial 1800-RURAL-AI from any keypad phone to speak with the AI navigator.',
        },
        {
          title: 'Gram Panchayat Kiosk',
          desc: 'Touchscreen terminals deployed at village council offices and CSC centers.',
        },
      ],
    },
    navigator: {
      badge: 'Interactive Demonstration',
      title: 'Test the AI Rural Services Navigator',
      subtitle:
        'Select a typical rural inquiry below or type your own question to see how the system structures verified civic assistance.',
      inputPrompt: 'Type an inquiry or pick a sample below...',
      listenVoice: 'Click to Simulate Voice Query',
      listening: 'Listening to rural dialect...',
      verifiedBadge: 'Verified via National Portal of India & Agri Ministry',
      eligibleFor: 'Eligibility Criteria:',
      documentsNeeded: 'Required Documentation:',
      nextSteps: 'Step-by-Step Action Plan:',
      helplineText: 'Direct Department Helpline:',
      sampleQueries: [
        {
          id: 'pm-kisan',
          title: 'PM-Kisan 16th Installment',
          queryText: 'How do I check if my PM-Kisan 16th installment has been credited to my bank?',
          department: 'Ministry of Agriculture & Farmers Welfare',
          category: 'Agriculture & Welfare',
          answerSummary:
            'Under PM-KISAN, eligible landholding farmer families receive ₹6,000 annually in three installments of ₹2,000. Installments require active eKYC and Aadhaar-seeded bank accounts.',
          eligibility:
            'Small and marginal farmer families having cultivable landholding up to 2 hectares registered under state land records. Institutional landholders are excluded.',
          actionSteps: [
            'Visit the PM-Kisan portal or your local CSC kiosk with your Aadhaar number.',
            'Confirm your eKYC status via OTP or biometric scan.',
            'Verify that your DBT (Direct Benefit Transfer) is mapped to your active bank account.',
            'Receive confirmation slip or SMS status update within 48 hours.',
          ],
          helpline: 'Toll Free: 155261 / 011-24300606',
        },
        {
          id: 'kcc',
          title: 'Kisan Credit Card (KCC) Loan',
          queryText: 'What documents are required to apply for a Kisan Credit Card for my wheat crop?',
          department: 'Department of Financial Services & NABARD',
          category: 'Rural Banking',
          answerSummary:
            'KCC provides farmers with timely credit for agricultural expenses at a subsidized effective interest rate of 4% (with 3% prompt repayment incentive) up to ₹3 Lakhs.',
          eligibility:
            'All farmers (individuals/joint borrowers), tenant farmers, oral lessees, sharecroppers, and Self-Help Groups (SHGs).',
          actionSteps: [
            'Obtain the one-page simplified KCC application from your local bank branch or CSC.',
            'Attach proof of identity (Aadhaar/Voter ID) and address proof.',
            'Submit land record documents (7/12 extract or Patta/Chitta showing cultivated area).',
            'Bank conducts appraisal and issues card within 14 working days without processing fees up to ₹1.6 Lakh.',
          ],
          helpline: 'KCC Rural Cell: 1800-180-1551',
        },
        {
          id: 'health',
          title: 'Free Maternity & Child Healthcare',
          queryText: 'Where is my nearest Primary Health Centre and how do I register for Janani Suraksha?',
          department: 'Ministry of Health & Family Welfare',
          category: 'Rural Healthcare',
          answerSummary:
            'Janani Suraksha Yojana (JSY) promotes institutional delivery among pregnant women with cash assistance up to ₹1,400 for rural mothers and free ambulance transportation.',
          eligibility:
            'All pregnant women delivering in government health facilities or accredited private hospitals in rural areas, with priority for BPL/SC/ST households.',
          actionSteps: [
            'Contact your village ASHA worker or Auxiliary Nurse Midwife (ANM) for registration in the Mother & Child Tracking System.',
            'Receive your Mother and Child Protection (MCP) card and schedule free antenatal checkups.',
            'Avail free 108 / 102 ambulance pick-up during labour pain.',
            'Direct benefit cash allowance disbursed upon discharge.',
          ],
          helpline: 'National Health Helpline: 1075 / 108 (Ambulance)',
        },
        {
          id: 'soil',
          title: 'Soil Health Card & Soil Testing',
          queryText: 'How can I get my village farmland soil tested before the sowing season?',
          department: 'Department of Agriculture & Cooperation',
          category: 'Soil & Crops',
          answerSummary:
            'The Soil Health Card Scheme provides customized soil nutrient status (N, P, K, micro-nutrients) and exact fertilizer recommendations to boost crop yields by 15-25%.',
          eligibility:
            'Every farming family across all agricultural zones. Testing is conducted free or at nominal charge by government testing labs.',
          actionSteps: [
            "Collect 8-10 soil sub-samples in a 'V' shape from your plot at a depth of 15 cm.",
            'Mix the samples, dry in the shade, and pack 500g in a clean cloth bag.',
            'Submit to your Village Level Worker (Gram Sevak) or the nearest Soil Testing Lab.',
            'Receive digital Soil Health Card on your mobile phone with fertilizer dosage advice.',
          ],
          helpline: 'Kisan Call Centre: 1800-180-1551',
        },
      ],
    },
    impact: {
      badge: 'Grassroots Stories',
      title: 'Real Impact in Rural Communities',
      subtitle:
        'Listen to how real farmers, women self-help groups, and panchayat leaders utilize the navigator.',
      testimonials: [
        {
          id: '1',
          quote:
            'I could not read the English forms for PM-Kisan. With AI Rural, I simply spoke in Hindi into the kiosk mic, and it immediately told me my eKYC was pending. Within 2 days, my ₹2,000 arrived.',
          name: 'Rameshwar Yadav',
          role: 'Smallholder Farmer',
          village: 'Chitrakoot District',
          state: 'Uttar Pradesh',
          schemeBenefited: 'PM-Kisan Samman Nidhi',
        },
        {
          id: '2',
          quote:
            'Our Self-Help Group needed low-interest capital to buy seed processing machines. The AI navigator walked us through Nabard and NRLM paperwork in Tamil. We secured our loan in two weeks.',
          name: 'Lakshmi Narayanan',
          role: 'SHG President',
          village: 'Madurai Rural',
          state: 'Tamil Nadu',
          schemeBenefited: 'NRLM Community Investment Fund',
        },
        {
          id: '3',
          quote:
            'As an ASHA worker, I use this tool to quickly verify which child nutrition subsidies a young mother qualifies for. It has cut our administrative paperwork by half.',
          name: 'Sunita Devi',
          role: 'ASHA Health Worker',
          village: 'Ranchi Sub-division',
          state: 'Jharkhand',
          schemeBenefited: 'Janani Shishu Suraksha',
        },
      ],
      trustPartners: [
        'National Informatics Centre Guidelines',
        'Ministry of Agriculture & Farmers Welfare',
        'Common Service Centres (CSC) Network',
        'National Health Authority',
      ],
    },
    contact: {
      badge: 'Get in Touch & Village Support',
      title: 'Connect with the AI Rural Team',
      subtitle:
        'Whether you are a village resident, panchayat representative, or civic-tech partner, we are here to support you.',
      formTitle: 'Send a Service Inquiry or Feedback',
      nameLabel: 'Full Name',
      phoneLabel: 'Mobile / Phone Number',
      stateLabel: 'State / District',
      topicLabel: 'Service Category',
      messageLabel: 'Your Question or Message',
      submitBtn: 'Submit Inquiry',
      submitting: 'Submitting Inquiry...',
      successTitle: 'Inquiry Received Successfully!',
      successMessage: 'Our rural community navigator team will contact you or send an SMS confirmation shortly.',
      tollFreeTitle: 'National Toll-Free Rural Helpline',
      tollFreeNumber: '1800-889-RURAL (1800-889-7872)',
      tollFreeDesc: 'Available 24 hours a day in all 5 regional languages. Standard calls are 100% free of charge.',
      cscCenterTitle: 'Find Your Nearest Village CSC Kiosk',
      cscCenterDesc: 'Over 350,000 village access points nationwide equipped with digital biometric support and certified operators.',
      faqTitle: 'Frequently Asked Questions',
      faqItems: [
        {
          q: 'Is AI Rural free to use for farmers and rural citizens?',
          a: 'Yes, absolutely. AI Rural is an open civic-tech initiative dedicated to public service access. There are no fees for voice or text searches.',
        },
        {
          q: 'Does it work if my village has very slow 2G internet?',
          a: 'Yes. The platform is designed with an ultralight footprint and includes a toll-free IVR voice number and SMS backup so you can get answers even without data.',
        },
        {
          q: 'Are the scheme guidelines official and up to date?',
          a: 'Yes. All scheme criteria are cross-referenced against official gazettes from the Ministry of Agriculture, Ministry of Rural Development, and state government portals.',
        },
        {
          q: 'Can I speak in my regional dialect instead of formal language?',
          a: 'Yes. Our natural speech recognition is trained on regional conversational phrasing, idioms, and local accents across Hindi, Tamil, Telugu, and Bengali.',
        },
      ],
    },
    footer: {
      about: 'About AI Rural',
      description:
        'AI Rural Services Navigator is a modern civic-tech platform bridging the digital divide for rural communities across India through multilingual artificial intelligence.',
      quickLinks: 'Navigation',
      legal: 'Civic Governance & Privacy',
      accessibility: 'Accessibility & Inclusion',
      disclaimer:
        'AI Rural is a civic-tech public utility project built for national hackathons and rural empowerment. Official scheme sanctions are handled by designated government departments.',
      emergency: 'Emergency Farmer Helpline: 1800-180-1551 (Kisan Call Centre)',
      copyright: '© 2026 AI Rural — AI Rural Services Navigator. Designed for Public Good.',
    },
  },

  hi: {
    nav: {
      home: 'मुख्य पृष्ठ',
      features: 'विशेषताएं',
      howItWorks: 'यह कैसे काम करता है',
      demo: 'लाइव नेविगेटर',
      contact: 'संपर्क करें',
      callHelpline: 'टोल-फ्री हेल्पलाइन',
    },
    hero: {
      badge: 'ग्रामीण सशक्तिकरण के लिए सिविक-टेक एआई',
      titleStart: 'गांवों को जोड़ रहा है',
      titleHighlight: 'एआई रूरल सर्विसेज नेविगेटर',
      titleEnd: '',
      description:
        'आवाज़ और अपनी मातृभाषा में चलने वाला एआई मंच, जो ग्रामीण नागरिकों को सरकारी योजनाओं, कृषि सलाह, स्वास्थ्य सेवाओं और ग्रामीण बैंकिंग से तुरंत जोड़ता है।',
      searchPlaceholder: 'बोलकर या लिखकर पूछें (उदा. पीएम किसान की स्थिति कैसे देखें?)',
      searchBtn: 'नेविगेटर से पूछें',
      exploreBtn: 'सेवाएं देखें',
      voiceBtn: 'अपनी भाषा में बोलें',
      popularQueriesLabel: 'लोकप्रिय सवाल:',
      popularQueries: [
        'पीएम किसान 16वीं किस्त की स्थिति',
        'किसान क्रेडिट कार्ड (KCC) नियम',
        'नजदीकी प्राथमिक स्वास्थ्य केंद्र',
        'मृदा स्वास्थ्य कार्ड (मिट्टी जांच)',
      ],
      stat1Value: '100+',
      stat1Label: 'सत्यापित सरकारी योजनाएं',
      stat2Value: '5+',
      stat2Label: 'प्रमुख क्षेत्रीय भाषाएं',
      stat3Value: '24/7',
      stat3Label: 'वॉइस और एसएमएस सहायता',
      stat4Value: '100%',
      stat4Label: 'निःशुल्क जनसेवा',
    },
    features: {
      badge: 'मुख्य सेवा स्तंभ',
      title: 'ग्रामीण वास्तविकताओं के लिए विशेष रूप से निर्मित',
      subtitle:
        'कम डिजिटल साक्षरता, जटिल सरकारी पोर्टलों और कमजोर इंटरनेट की बाधाओं को दूर करने के लिए तैयार किया गया है।',
      items: [
        {
          id: 'agri',
          title: 'सटीक कृषि व मंडी सलाह',
          description:
            'स्थानीय मौसम का पूर्वानुमान, फसलों के रोग निदान, और निकटतम मंडियों के ताज़ा भाव अपनी ही बोली में जानें।',
          badge: 'कृषि और मौसम',
          highlights: ['ताज़ा मंडी भाव', 'मौसम चेतावनी अलर्ट', 'खाद व बीज की सही मात्रा'],
        },
        {
          id: 'welfare',
          title: 'सरकारी योजनाओं की सीधी पहचान',
          description:
            'पीएम किसान, मनरेगा, पेंशन और आवास योजनाओं के लिए अपनी पात्रता कुछ सरल सवालों के जवाब देकर जानें।',
          badge: 'कल्याणकारी योजनाएं',
          highlights: ['पीएम किसान व मनरेगा सिंक', 'राशन कार्ड पात्रता', 'एक क्लिक में पात्रता जांच'],
        },
        {
          id: 'health',
          title: 'ग्रामीण स्वास्थ्य व टेलीमेडिसिन',
          description:
            'निकटतम प्राथमिक स्वास्थ्य केंद्र (PHC), निःशुल्क दवाओं की उपलब्धता, टीकाकरण शेड्यूल और आशा दीदी का संपर्क।',
          badge: 'स्वास्थ्य सुविधाएं',
          highlights: ['नजदीकी एम्बुलेंस व PHC', 'मातृ स्वास्थ्य जांच समय सारणी', 'आयुष्मान कार्ड मार्गदर्शन'],
        },
        {
          id: 'finance',
          title: 'किसान क्रेडिट कार्ड व ऋण सहायता',
          description:
            'फसल ऋण, स्वयं सहायता समूह (SHG) अनुदान, और फसल बीमा (PMFBY) क्लेम के स्पष्ट चरण और जरूरी दस्तावेज।',
          badge: 'वित्तीय समावेशन',
          highlights: ['KCC ब्याज छूट के नियम', 'SHG समूह ऋण गाइड', 'फसल क्षति दावा समय सीमा'],
        },
        {
          id: 'voice',
          title: 'आवाज़ आधारित भाषा एआई',
          description:
            'टाइपिंग की जरूरत नहीं! अपनी सामान्य ग्रामीण बोली में बोलकर सवाल पूछें और आवाज में ही स्पष्ट उत्तर पाएं।',
          badge: 'आवाज पहुंच',
          highlights: ['अपनी भाषा में स्वाभाविक बातचीत', 'निरक्षरों के लिए ऑडियो उत्तर', 'बिना हाथ लगाए वॉइस नेविगेशन'],
        },
        {
          id: 'offline',
          title: 'धीमे इंटरनेट और ऑफलाइन मोड',
          description:
            'इंटरनेट न होने पर भी टोल-फ्री कॉल (IVR) और एसएमएस द्वारा जरूरी जानकारी बिना रुकावट प्राप्त करें।',
          badge: 'ऑफलाइन सुविधा',
          highlights: ['2G फोन और टोल-फ्री पर सक्रिय', 'सीएससी कियोस्क के लिए प्रिंट पर्ची', 'जीरो-डेटा कैशिंग'],
        },
      ],
    },
    howItWorks: {
      badge: 'सरल 3 चरण',
      title: 'सवाल से लेकर सरकारी सेवा तक - चंद पलों में',
      subtitle: 'बिना किसी उलझन, स्पष्ट दस्तावेजों की सूची और आपके नजदीकी गांव केंद्र से सीधा संपर्क।',
      steps: [
        {
          number: '01',
          title: 'अपनी भाषा में बोलें या लिखें',
          subtitle: 'किसी भी स्थानीय भाषा में',
          description:
            'किसी दफ्तर के चक्कर लगाने या फॉर्म भरने की जरूरत नहीं। जैसे अपने गांव के बुजुर्ग से बात करते हैं, वैसे ही पूछें।',
          details: ['माइक से सीधी आवाज पहचान', 'गांव की सामान्य बोली स्वीकार्य', 'स्वचालित भाषा चयन'],
        },
        {
          number: '02',
          title: 'एआई योजनाओं से मिलान करता है',
          subtitle: 'सत्यापित सरकारी डेटाबेस',
          description:
            'सिस्टम सरकारी नियमों और पात्रता शर्तों की जांच करके तुरंत बताता है कि आपको क्या-क्या लाभ मिल सकते हैं।',
          details: ['सरकारी नियमों से तत्काल मिलान', 'जमीन के अनुसार पात्रता जांच', 'अनुदान राशि की सही गणना'],
        },
        {
          number: '03',
          title: 'दस्तावेजों की सीधी सूची पाएं',
          subtitle: 'स्थानीय केंद्र पर जाएं',
          description:
            'जरूरी दस्तावेजों (आधार, खतौनी, बैंक पासबुक) की सरल एसएमएस सूची और नजदीकी सीएससी केंद्र का पता पाएं।',
          details: ['ऑफलाइन डाउनलोड करने योग्य सूची', 'साधारण मोबाइल पर एसएमएस', 'सीएससी ऑपरेटर कोड'],
        },
      ],
      kioskModeTitle: 'हर ग्रामीण नागरिक के लिए कई माध्यम',
      kioskModeDesc:
        'स्मार्टफोन यूजर्स से लेकर बिना इंटरनेट वाले कीपैड फोन रखने वाले नागरिकों तक सभी के लिए सुलभ।',
      kioskModes: [
        {
          title: 'मोबाइल वेब',
          desc: 'कम बजट वाले 4G फोन पर तेज गति से चलने वाली सरल वेबसाइट।',
        },
        {
          title: 'टोल-फ्री वॉइस (IVR)',
          desc: 'किसी भी साधारण फोन से 1800-RURAL-AI पर कॉल करें और बातचीत करें।',
        },
        {
          title: 'ग्राम पंचायत कियोस्क',
          desc: 'ग्राम पंचायत भवन और सीएससी केंद्रों पर टचस्क्रीन सुविधा।',
        },
      ],
    },
    navigator: {
      badge: 'इंटरैक्टिव डेमो',
      title: 'एआई रूरल सर्विसेज नेविगेटर का परीक्षण करें',
      subtitle: 'नीचे दिए गए ग्रामीण उदाहरणों में से चुनें या अपना सवाल लिखकर जांचें कि सिस्टम कैसे सटीक मदद करता है।',
      inputPrompt: 'अपना सवाल लिखें या नीचे से एक उदाहरण चुनें...',
      listenVoice: 'आवाज से पूछने का सिमुलेशन करें',
      listening: 'आपकी आवाज सुनी जा रही है...',
      verifiedBadge: 'राष्ट्रीय पोर्टल और कृषि मंत्रालय द्वारा सत्यापित',
      eligibleFor: 'पात्रता की शर्तें:',
      documentsNeeded: 'आवश्यक दस्तावेज:',
      nextSteps: 'आवेदन के आसान चरण:',
      helplineText: 'संबंधित विभाग हेल्पलाइन:',
      sampleQueries: [
        {
          id: 'pm-kisan',
          title: 'पीएम किसान 16वीं किस्त जांच',
          queryText: 'मैं कैसे जांचूं कि मेरे बैंक खाते में पीएम किसान की 16वीं किस्त आई है या नहीं?',
          department: 'कृषि एवं किसान कल्याण मंत्रालय',
          category: 'कृषि एवं कल्याण',
          answerSummary:
            'पीएम-किसान योजना के अंतर्गत पात्र किसान परिवारों को प्रतिवर्ष ₹6,000 की सहायता ₹2,000 की तीन किस्तों में दी जाती है। इसके लिए ई-केवाईसी और बैंक खाते से आधार लिंक होना अनिवार्य है।',
          eligibility:
            'वे सभी छोटे व सीमांत किसान जिनके नाम पर राज्य के भू-अभिलेखों में कृषि योग्य भूमि दर्ज है (2 हेक्टेयर तक)। संस्थागत भूस्वामी इसमें शामिल नहीं हैं।',
          actionSteps: [
            'पीएम किसान पोर्टल या अपने निकटतम सीएससी केंद्र पर अपना आधार नंबर लेकर जाएं।',
            'ओटीपी या बायोमेट्रिक फिंगरप्रिंट से ई-केवाईसी जांच पूरी करें।',
            'जांचें कि डीबीटी (Direct Benefit Transfer) आपके चालू बैंक खाते से जुड़ा है।',
            '48 घंटे के भीतर स्थिति का एसएमएस प्राप्त करें।',
          ],
          helpline: 'टोल फ्री: 155261 / 011-24300606',
        },
        {
          id: 'kcc',
          title: 'किसान क्रेडिट कार्ड (KCC) आवेदन',
          queryText: 'गेहूं की फसल के लिए किसान क्रेडिट कार्ड बनवाने हेतु कौन-से कागजात चाहिए?',
          department: 'वित्तीय सेवाएं विभाग एवं नाबार्ड',
          category: 'ग्रामीण बैंकिंग',
          answerSummary:
            'केसीसी किसानों को कृषि जरूरतों के लिए 4% की रियायती ब्याज दर पर ₹3 लाख तक का समय पर ऋण उपलब्ध कराता है।',
          eligibility:
            'सभी किसान (व्यक्तिगत/संयुक्त), बटाईदार, पट्टेदार, और स्वयं सहायता समूह (SHG)।',
          actionSteps: [
            'अपनी स्थानीय बैंक शाखा या सीएससी से एक पन्ने का सरल केसीसी फॉर्म प्राप्त करें।',
            'पहचान प्रमाण (आधार/मतदाता पहचान पत्र) और निवास प्रमाण संलग्न करें।',
            'भूमि अभिलेख (खतौनी/खसरा नकल) संलग्न करें।',
            'बैंक 14 कार्यदिवसों में बिना किसी प्रोसेसिंग फीस के कार्ड जारी करता है।',
          ],
          helpline: 'केसीसी हेल्प डेस्क: 1800-180-1551',
        },
        {
          id: 'health',
          title: 'जननी सुरक्षा व निःशुल्क प्रसूति सहायता',
          queryText: 'मेरा नजदीकी प्राथमिक स्वास्थ्य केंद्र कहां है और जननी सुरक्षा योजना में पंजीकरण कैसे कराएं?',
          department: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
          category: 'ग्रामीण स्वास्थ्य',
          answerSummary:
            'जननी सुरक्षा योजना (JSY) के तहत सरकारी अस्पताल में प्रसव कराने पर ग्रामीण महिलाओं को ₹1,400 की नकद सहायता और मुफ्त एम्बुलेंस सुविधा मिलती है।',
          eligibility:
            'सरकारी स्वास्थ्य केंद्रों में प्रसव कराने वाली सभी ग्रामीण गर्भवती महिलाएं, विशेषकर बीपीएल/एससी/एसटी परिवार।',
          actionSteps: [
            'अपने गांव की आशा दीदी या एएनएम से संपर्क कर मातृ एवं बाल संरक्षण (MCP) कार्ड बनवाएं।',
            'नियमित निःशुल्क जांच और आयरन की गोलियां प्राप्त करें।',
            'प्रसव पीड़ा होने पर 108 या 102 नंबर पर फोन कर मुफ्त एम्बुलेंस बुलाएं।',
            'अस्पताल से छुट्टी मिलने पर बैंक खाते में सहायता राशि प्राप्त करें।',
          ],
          helpline: 'राष्ट्रीय स्वास्थ्य हेल्पलाइन: 1075 / एम्बुलेंस: 108',
        },
        {
          id: 'soil',
          title: 'मृदा स्वास्थ्य कार्ड (मिट्टी की जांच)',
          queryText: 'बुवाई से पहले अपने खेत की मिट्टी की जांच कैसे करवा सकते हैं?',
          department: 'कृषि एवं सहकारिता विभाग',
          category: 'मिट्टी और फसलें',
          answerSummary:
            'मृदा स्वास्थ्य कार्ड योजना मिट्टी में पोषक तत्वों की जांच कर खाद की सही मात्रा बताती है, जिससे पैदावार में 15 से 25% तक की वृद्धि होती है।',
          eligibility:
            'सभी किसान भाई। सरकारी प्रयोगशालाओं द्वारा यह जांच निःशुल्क या नाममात्र शुल्क पर की जाती है।',
          actionSteps: [
            "खेत में 'V' आकार का 15 सेमी गहरा गड्ढा खोदकर 8-10 जगहों से मिट्टी का नमूना लें।",
            'मिट्टी को मिलाकर छाया में सुखाएं और 500 ग्राम साफ थैली में भरें।',
            'अपने ग्राम सेवक या नजदीकी मिट्टी जांच प्रयोगशाला में जमा करें।',
            'मोबाइल पर डिजिटल कार्ड और खाद की सिफारिश प्राप्त करें।',
          ],
          helpline: 'किसान कॉल सेंटर: 1800-180-1551',
        },
      ],
    },
    impact: {
      badge: 'जमीनी अनुभव',
      title: 'ग्रामीण समुदायों में वास्तविक बदलाव',
      subtitle: 'जानें कि किसान, स्वयं सहायता समूह और पंचायत प्रतिनिधि इस नेविगेटर का उपयोग कैसे कर रहे हैं।',
      testimonials: [
        {
          id: '1',
          quote:
            'मुझे अंग्रेजी पोर्टल समझ नहीं आते थे। एआई रूरल के कियोस्क पर मैंने सीधी हिंदी में बोला, तो उसने बताया कि मेरी ई-केवाईसी रुकी हुई है। दो दिन में समस्या हल हुई और किस्त आ गई।',
          name: 'रामेश्वर यादव',
          role: 'छोटे किसान',
          village: 'चित्रकूट जनपद',
          state: 'उत्तर प्रदेश',
          schemeBenefited: 'पीएम किसान सम्मान निधि',
        },
        {
          id: '2',
          quote:
            'हमारे स्वयं सहायता समूह को बीज प्रसंस्करण मशीन लेनी थी। इस मंच ने हमें नाबार्ड और एनआरएलएम के सभी नियम बहुत सरल तरीके से समझाए।',
          name: 'सुनीता देवी',
          role: 'समूह अध्यक्ष',
          village: 'रांची उप-संभाग',
          state: 'झारखंड',
          schemeBenefited: 'राष्ट्रीय ग्रामीण आजीविका मिशन',
        },
        {
          id: '3',
          quote:
            'आशा कार्यकर्ता के रूप में, मैं गर्भवती महिलाओं के अधिकारों की जानकारी तुरंत देखने के लिए इसका उपयोग करती हूँ। कागजी काम बहुत आसान हो गया है।',
          name: 'आरती पटेल',
          role: 'आशा कार्यकर्ता',
          village: 'सीहोर जिला',
          state: 'मध्य प्रदेश',
          schemeBenefited: 'जननी शिशु सुरक्षा',
        },
      ],
      trustPartners: [
        'राष्ट्रीय सूचना विज्ञान केंद्र (NIC) दिशानिर्देश',
        'कृषि एवं किसान कल्याण मंत्रालय',
        'कॉमन सर्विस सेंटर (CSC) नेटवर्क',
        'राष्ट्रीय स्वास्थ्य प्राधिकरण',
      ],
    },
    contact: {
      badge: 'संपर्क व ग्राम सहायता',
      title: 'एआई रूरल टीम से जुड़ें',
      subtitle: 'चाहे आप ग्रामीण नागरिक हों, पंचायत प्रतिनिधि हों या सिविक-टेक पार्टनर, हम आपकी सेवा में उपस्थित हैं।',
      formTitle: 'अपनी समस्या या सुझाव भेजें',
      nameLabel: 'पूरा नाम',
      phoneLabel: 'मोबाइल नंबर',
      stateLabel: 'राज्य / जिला',
      topicLabel: 'सेवा का प्रकार',
      messageLabel: 'आपका सवाल या संदेश',
      submitBtn: 'संदेश भेजें',
      submitting: 'संदेश भेजा जा रहा है...',
      successTitle: 'आपका सवाल सफलतापूर्वक प्राप्त हुआ!',
      successMessage: 'हमारी ग्रामीण सहायता टीम जल्द ही आपसे संपर्क करेगी या एसएमएस भेजेगी।',
      tollFreeTitle: 'राष्ट्रीय टोल-फ्री ग्रामीण हेल्पलाइन',
      tollFreeNumber: '1800-889-RURAL (1800-889-7872)',
      tollFreeDesc: 'सभी 5 भाषाओं में 24 घंटे उपलब्ध। साधारण फोन से भी कॉल पूरी तरह मुफ्त है।',
      cscCenterTitle: 'नजदीकी ग्राम सीएससी केंद्र खोजें',
      cscCenterDesc: 'देशभर में 3.5 लाख से अधिक ग्राम केंद्र बायोमेट्रिक सुविधा व प्रशिक्षित ऑपरेटरों के साथ तैयार।',
      faqTitle: 'अक्सर पूछे जाने वाले सवाल',
      faqItems: [
        {
          q: 'क्या एआई रूरल का उपयोग किसानों के लिए पूरी तरह निःशुल्क है?',
          a: 'हाँ, बिल्कुल। एआई रूरल एक सार्वजनिक सिविक-टेक पहल है और किसी भी प्रकार की खोज या जानकारी का कोई शुल्क नहीं है।',
        },
        {
          q: 'क्या यह कमजोर 2G इंटरनेट वाले गांव में भी चलेगा?',
          a: 'हाँ। यह बहुत हल्की तकनीक पर बना है और बिना इंटरनेट के भी टोल-फ्री नंबर व एसएमएस से काम करता है।',
        },
        {
          q: 'क्या इसमें दी गई योजनाएं आधिकारिक और ताज़ा हैं?',
          a: 'हाँ। सभी नियम केंद्र व राज्य सरकारों के आधिकारिक राजपत्रों और पोर्टलों से सीधे सत्यापित किए जाते हैं।',
        },
        {
          q: 'क्या मैं अपनी स्थानीय बोली में बोल सकता हूँ?',
          a: 'हाँ, हमारा वॉइस मॉडल विभिन्न आंचलिक बोलियों और ग्रामीण लहजों को सरलता से समझने के लिए प्रशिक्षित है।',
        },
      ],
    },
    footer: {
      about: 'एआई रूरल के बारे में',
      description:
        'एआई रूरल सर्विसेज नेविगेटर ग्रामीण भारत के लिए बहुभाषी आर्टिफिशियल इंटेलिजेंस के माध्यम से सार्वजनिक सेवाओं को आसान बनाने वाली सिविक-टेक पहल है।',
      quickLinks: 'नेविगेशन',
      legal: 'नागरिक सुरक्षा एवं गोपनीयता',
      accessibility: 'सुलभता एवं पहुंच',
      disclaimer:
        'एआई रूरल जनहित और हैकाथॉन नवाचार के लिए निर्मित मंच है। आधिकारिक लाभ संबंधित सरकारी विभागों द्वारा ही स्वीकृत किए जाते हैं।',
      emergency: 'आपातकालीन किसान हेल्पलाइन: 1800-180-1551 (किसान कॉल सेंटर)',
      copyright: '© 2026 एआई रूरल — एआई रूरल सर्विसेज नेविगेटर। जनहित में समर्पित।',
    },
  },

  ta: {
    nav: {
      home: 'முகப்பு',
      features: 'அம்சங்கள்',
      howItWorks: 'எப்படி செயல்படுகிறது',
      demo: 'நேரலை வழிகாட்டி',
      contact: 'தொடர்பு',
      callHelpline: 'இலவச உதவி எண்',
    },
    hero: {
      badge: 'கிராமப்புற மேம்பாட்டுக்கான மக்கள் நல AI',
      titleStart: 'கிராமங்களை இணைக்கும்',
      titleHighlight: 'AI ரூரல் சர்வீசஸ் நேவிகேட்டர்',
      titleEnd: '',
      description:
        'கிராமப்புற மக்களுக்கு அரசு நலத்திட்டங்கள், விவசாய ஆலோசனைகள், மருத்துவ உதவிகள் மற்றும் வங்கிக் கடன்களை எளிய தமிழில் குரல் வழியே வழங்கும் AI தளம்.',
      searchPlaceholder: 'குரல் மூலமாகவோ அல்லது தட்டச்சு செய்தோ கேளுங்கள்...',
      searchBtn: 'கேளுங்கள்',
      exploreBtn: 'சேவைகளை காண்க',
      voiceBtn: 'தமிழில் பேசுங்கள்',
      popularQueriesLabel: 'அடிக்கடி கேட்கப்படும் கேள்விகள்:',
      popularQueries: [
        'பி.எம் கிசான் தவணை நிலை',
        'விவசாய கடன் அட்டை (KCC) தகுதி',
        'அருகிலுள்ள அரசு ஆரம்ப சுகாதார நிலையம்',
        'மண் பரிசோதனை அட்டை விண்ணப்பம்',
      ],
      stat1Value: '100+',
      stat1Label: 'அரசு நலத்திட்டங்கள்',
      stat2Value: '5+',
      stat2Label: 'மாநில மொழிகள்',
      stat3Value: '24/7',
      stat3Label: 'குரல் & SMS சேவை',
      stat4Value: '100%',
      stat4Label: 'இலவச மக்கள் சேவை',
    },
    features: {
      badge: 'முக்கிய சேவைகள்',
      title: 'கிராமப்புற தேவைகளுக்காக பிரத்யேகமாக உருவாக்கப்பட்டது',
      subtitle: 'குறைந்த இணைய வேகம் மற்றும் எளிய மக்களுக்கு ஏற்ற வகையில் வடிவமைக்கப்பட்ட மக்கள் நல தொழில்நுட்பம்.',
      items: [
        {
          id: 'agri',
          title: 'துல்லிய வேளாண் மற்றும் சந்தை விலை',
          description: 'பயிர் நோய்கள், உள்ளூர் வானிலை எச்சரிக்கைகள் மற்றும் நேரடி உழவர் சந்தை விலைகள் தமிழில்.',
          badge: 'வேளாண்மை',
          highlights: ['நேரடி சந்தை விலை விவரங்கள்', 'வானிலை எச்சரிக்கைகள்', 'உர அளவு வழிகாட்டி'],
        },
        {
          id: 'welfare',
          title: 'அரசு நலத்திட்ட வழிகாட்டி',
          description: 'பி.எம் கிசான், உழவர் பாதுகாப்பு, முதியோர் ஓய்வூதியம் மற்றும் மானியங்களுக்கான உடனடி தகுதி சரிபார்ப்பு.',
          badge: 'நலத்திட்டங்கள்',
          highlights: ['ஒரே கிளிக்கில் தகுதி சோதனை', 'ரேஷன் அட்டை பலன்கள்', 'விண்ணப்ப ஆவண பட்டியல்'],
        },
        {
          id: 'health',
          title: 'கிராமப்புற மருத்துவம் & ஆரம்ப சுகாதார நிலையம்',
          description: 'அருகிலுள்ள அரசு மருத்துவமனை, அவசர ஆம்புலன்ஸ் உதவி, கர்ப்பிணி தாய்மார்களுக்கான நிதி உதவி தகவல்கள்.',
          badge: 'மருத்துவம்',
          highlights: ['அருகிலுள்ள PHC மற்றும் ஆம்புலன்ஸ்', 'முதலமைச்சர் மருத்துவக் காப்பீடு', 'தடுப்பூசி அட்டவணை'],
        },
        {
          id: 'finance',
          title: 'விவசாய கடன் (KCC) & மகளிர் சுயஉதவிக்குழு',
          description: 'பயிர் கடன்கள், சுயஉதவிக்குழு கடன்கள் மற்றும் பயிர் காப்பீட்டு இழப்பீட்டு உரிமைக்கான தெளிவான படிகள்.',
          badge: 'வங்கி & நிதி',
          highlights: ['KCC 4% வட்டி மானிய விவரம்', 'மகளிர் குழு கடன் ஆவணங்கள்', 'பயிர் காப்பீட்டு காலக்கெடு'],
        },
        {
          id: 'voice',
          title: 'குரல் வழி தமிழ் AI உதவி',
          description: 'எழுதப் படிக்கத் தெரியாதவர்களுக்கும் உதவும் வகையில், இயல்பான பேச்சுத் தமிழில் பேசி பதில்களைப் பெறலாம்.',
          badge: 'குரல் வழி AI',
          highlights: ['பேச்சுத் தமிழில் இயல்பாக பேசுங்கள்', 'ஆடியோ வடிவில் தெளிவான பதில்', 'எளிதான அணுகல்'],
        },
        {
          id: 'offline',
          title: 'குறைந்த இணையம் & ஆஃப்லைன் சேவை',
          description: 'இணையம் இல்லாதபோதும் இலவச தொலைபேசி (IVR) மற்றும் SMS மூலம் வழிகாட்டுதலைப் பெறலாம்.',
          badge: 'ஆஃப்லைன் வசதி',
          highlights: ['இலவச தொலைபேசி அழைப்பு', 'SMS வழியாக ஆவண பட்டியல்', 'CSC மைய நேரடி இணைப்பு'],
        },
      ],
    },
    howItWorks: {
      badge: '3 எளிய படிகள்',
      title: 'கேள்வி முதல் அரசு சேவை வரை - சில வினாடிகளில்',
      subtitle: 'குழப்பங்கள் இல்லாமல், தெளிவான ஆவண பட்டியலுடன் உங்கள் ஊர் சேவை மையத்துடன் இணைப்பு.',
      steps: [
        {
          number: '01',
          title: 'தமிழில் பேசுங்கள் அல்லது தட்டச்சு செய்யுங்கள்',
          subtitle: 'இயல்பான குரல் வழி',
          description: 'அலுவலகங்களுக்கு அலையத் தேவையில்லை. உங்கள் சந்தேகத்தை இயல்பான தமிழில் பேசி கேளுங்கள்.',
          details: ['நேரடி மைக் உள்ளீடு', 'வட்டார வழக்கு புரிதல்', 'தானியங்கி மொழி தேர்வு'],
        },
        {
          number: '02',
          title: 'AI திட்டங்களை சரிபார்க்கிறது',
          subtitle: 'உண்மையான அரசு தகவல் தளம்',
          description: 'அரசு விதிமுறைகள் மற்றும் நில அளவுகளின்படி உங்களுக்கு என்னென்ன திட்டங்கள் பொருந்தும் என கண்டறியும்.',
          details: ['அரசு விதிகள் சரிபார்ப்பு', 'நில அடிப்படையில் தகுதி', 'மானியம் கணக்கீடு'],
        },
        {
          number: '03',
          title: 'தேவையான ஆவண பட்டியலை பெறுங்கள்',
          subtitle: 'அருகிலுள்ள இ-சேவை மையம் செல்லுங்கள்',
          description: 'தேவையான ஆவணங்களின் (ஆதார், பட்டா, வங்கி பாஸ்புக்) SMS பட்டியல் மற்றும் மைய வழிகாட்டுதல் கிடைக்கும்.',
          details: ['பதிவிறக்கம் செய்யக்கூடிய பட்டியல்', 'சாதாரண போனுக்கு SMS', 'இ-சேவை மைய குறியீடு'],
        },
      ],
      kioskModeTitle: 'அனைத்து கிராம மக்களுக்கும் பல வழிகள்',
      kioskModeDesc: 'ஸ்மார்ட்போன் முதல் எளிய கீபேட் போன் வைத்திருக்கும் மக்கள் வரை அனைவரும் பயன்படுத்தலாம்.',
      kioskModes: [
        {
          title: 'மொபைல் வலைத்தளம்',
          desc: 'எளிய 4G ஸ்மார்ட்போன்களில் வேகமாக இயங்கும் வலைப்பக்கம்.',
        },
        {
          title: 'கட்டணமில்லா குரல் சேவை (IVR)',
          desc: 'எந்த சாதாரண போனிலிருந்தும் 1800-RURAL-AI என்ற எண்ணை அழைத்து பேசலாம்.',
        },
        {
          title: 'கிராம பஞ்சாயத்து கியோஸ்க்',
          desc: 'கிராம பஞ்சாயத்து அலுவலகங்கள் மற்றும் இ-சேவை மையங்களில் தொடுதிரை வசதி.',
        },
      ],
    },
    navigator: {
      badge: 'நேரலை மாதிரி பயன்பாடு',
      title: 'AI ரூரல் நேவிகேட்டரை சோதித்துப் பாருங்கள்',
      subtitle: 'கீழே உள்ள கேள்விகளில் ஒன்றை தேர்ந்தெடுங்கள் அல்லது உங்கள் சொந்த கேள்வியை கேளுங்கள்.',
      inputPrompt: 'உங்கள் கேள்வியை எழுதுங்கள் அல்லது கீழே தேர்வு செய்யுங்கள்...',
      listenVoice: 'குரல் மாதிரி சோதனையை தொடங்கு',
      listening: 'உங்கள் குரலை கவனிக்கிறது...',
      verifiedBadge: 'அரசு தேசிய போர்டல் மூலம் சரிபார்க்கப்பட்டது',
      eligibleFor: 'தகுதி நிபந்தனைகள்:',
      documentsNeeded: 'தேவையான ஆவணங்கள்:',
      nextSteps: 'செயல்முறை படிகள்:',
      helplineText: 'துறை உதவி எண்:',
      sampleQueries: [
        {
          id: 'pm-kisan',
          title: 'பி.எம் கிசான் தவணை நிலை',
          queryText: 'எனது பி.எம் கிசான் 16வது தவணை வங்கி கணக்கில் வந்துவிட்டதா என்பதை எவ்வாறு அறிவது?',
          department: 'வேளாண்மை மற்றும் விவசாயிகள் நல அமைச்சகம்',
          category: 'விவசாய நலன்',
          answerSummary:
            'பி.எம்-கிசான் திட்டத்தின் கீழ் தகுதியான உழவர் குடும்பங்களுக்கு ஆண்டுக்கு ₹6,000 மூன்று தவணைகளாக வழங்கப்படுகிறது. இதற்கு eKYC மற்றும் ஆதார் வங்கி இணைப்பு கட்டாயமாகும்.',
          eligibility: 'நில உரிமை ஆவணங்களில் பெயர் உள்ள சிறு மற்றும் குறு விவசாயிகள் (2 ஹெக்டேர் வரை).',
          actionSteps: [
            'ஆதார் எண்ணுடன் அருகிலுள்ள இ-சேவை மையத்தை அணுகவும்.',
            'OTP அல்லது கைரேகை மூலம் eKYC-ஐ உறுதிப்படுத்தவும்.',
            'வங்கி கணக்கில் DBT இணைப்பை சரிபார்க்கவும்.',
            '48 மணி நேரத்தில் SMS நிலையை பெறுங்கள்.',
          ],
          helpline: 'இலவச எண்: 155261 / 011-24300606',
        },
        {
          id: 'kcc',
          title: 'கிசான் கிரெடிட் கார்டு (KCC)',
          queryText: 'விவசாய கடன் அட்டை (KCC) பெற தேவையான ஆவணங்கள் யாவை?',
          department: 'நிதிச் சேவைகள் துறை & நபார்டு',
          category: 'கிராமப்புற வங்கி',
          answerSummary:
            'விவசாயிகளுக்கு 4% குறைந்த வட்டியில் ₹3 லட்சம் வரை சரியான நேரத்தில் கடன் உதவி வழங்குகிறது.',
          eligibility: 'அனைத்து விவசாயிகள், குத்தகை விவசாயிகள் மற்றும் மகளிர் சுயஉதவிக்குழுக்கள்.',
          actionSteps: [
            'வங்கி கிளை அல்லது இ-சேவை மையத்தில் எளிய KCC விண்ணப்பத்தை பெறவும்.',
            'ஆதார் அட்டை மற்றும் முகவரி சான்றை இணைக்கவும்.',
            'பட்டா/சிட்டா நில ஆவணங்களை இணைக்கவும்.',
            '14 நாட்களுக்குள் கட்டணமின்றி அட்டை வழங்கப்படும்.',
          ],
          helpline: 'KCC உதவி எண்: 1800-180-1551',
        },
        {
          id: 'health',
          title: 'முத்துலட்சுமி ரெட்டி மகப்பேறு நிதி & PHC',
          queryText: 'அருகிலுள்ள ஆரம்ப சுகாதார நிலையம் எங்குள்ளது மற்றும் மகப்பேறு உதவிக்கு எவ்வாறு விண்ணப்பிப்பது?',
          department: 'மக்கள் நல்வாழ்வு மற்றும் குடும்ப நலத்துறை',
          category: 'கிராமப்புற மருத்துவம்',
          answerSummary:
            'அரசு மருத்துவமனைகளில் பிரசவம் பார்க்கும் தாய்மார்களுக்கு ஊட்டச்சத்து மற்றும் நிதி உதவி திட்டங்கள் உள்ளன.',
          eligibility: 'கிராமப்புறங்களில் அரசு மருத்துவமனையை நாடும் அனைத்து தாய்மார்கள்.',
          actionSteps: [
            'கிராம கிராமப்புற செவிலியர் (VHN) அல்லது ஆஷா பணியாளரிடம் MCP கார்டு பதிவு செய்யவும்.',
            'வழக்கமான பரிசோதனைகளை தவறாமல் மேற்கொள்ளவும்.',
            'அவசர பிரசவத்திற்கு 108 ஆம்புலன்ஸை அழைக்கவும்.',
            'நேரடி வங்கி கணக்கில் நிதி உதவி வழங்கப்படும்.',
          ],
          helpline: 'மருத்துவ உதவி எண்: 104 / ஆம்புலன்ஸ்: 108',
        },
        {
          id: 'soil',
          title: 'மண் பரிசோதனை அட்டை திட்டம்',
          queryText: 'விதைப்புக்கு முன் எனது நிலத்து மண்ணை எப்படி பரிசோதிப்பது?',
          department: 'வேளாண்மைத் துறை',
          category: 'மண் & பயிர்கள்',
          answerSummary:
            'மண்ணின் சத்துக்களை அறிந்து சரியான உரங்களை இடுவதன் மூலம் விளைச்சலை 20% வரை அதிகரிக்கலாம்.',
          eligibility: 'அனைத்து விவசாய நிலங்களுக்கும் இலவசமாக அல்லது குறைந்த கட்டணத்தில் அரசு ஆய்வுக்கூடங்களில் செய்யப்படுகிறது.',
          actionSteps: [
            "நிலத்தில் 'V' வடிவில் 15 செ.மீ ஆழத்தில் மண் மாதிரி எடுக்கவும்.",
            'நிழலில் உலர்த்தி 500 கிராம் பையில் வைக்கவும்.',
            'வேளாண் விரிவாக்க மையத்தில் ஒப்படைக்கவும்.',
            'செல்போனில் உர பரிந்துரை அட்டை பெறவும்.',
          ],
          helpline: 'கிசான் கால் சென்டர்: 1800-180-1551',
        },
      ],
    },
    impact: {
      badge: 'கிராமப்புற அனுபவங்கள்',
      title: 'கிராமப்புற மக்களிடம் நிஜமான மாற்றம்',
      subtitle: 'விவசாயிகள் மற்றும் மகளிர் சுயஉதவிக்குழுக்கள் எவ்வாறு பயனடைகிறார்கள் என்பதை அறியுங்கள்.',
      testimonials: [
        {
          id: '1',
          quote:
            'எனக்கு ஆங்கிலத்தில் விண்ணப்பிக்க தெரியாது. இந்த AI தளத்தில் தமிழில் பேசிய உடனேயே என் eKYC விடுபட்டதை காட்டியது. இரண்டே நாளில் சரி செய்து பணம் வந்தது.',
          name: 'சுப்பிரமணியன்',
          role: 'சிறு விவசாயி',
          village: 'மதுரை புறநகர்',
          state: 'தமிழ்நாடு',
          schemeBenefited: 'பி.எம் கிசான் திட்டம்',
        },
        {
          id: '2',
          quote:
            'எங்கள் மகளிர் குழுவிற்கு விதை சுத்திகரிப்பு இயந்திரம் வாங்க கடன் வழிகாட்டுதல் தேவைப்பட்டது. மிக எளிதாக தமிழ் வழிகாட்டி மூலம் எங்கள் விண்ணப்பத்தை முடித்தோம்.',
          name: 'செல்வி கணேசன்',
          role: 'சுயஉதவிக்குழு தலைவர்',
          village: 'தஞ்சாவூர் கிராமம்',
          state: 'தமிழ்நாடு',
          schemeBenefited: 'NRLM மகளிர் நிதி திட்டம்',
        },
        {
          id: '3',
          quote:
            'கிராம சுகாதார பணியாளராக தாய்மார்களுக்கு அரசு சலுகைகளை விளக்க இந்த தளம் எனக்கு மிகவும் பயனுள்ளதாக உள்ளது.',
          name: 'கவிதா',
          role: 'ஆஷா பணியாளர்',
          village: 'திருச்சி மாவட்டம்',
          state: 'தமிழ்நாடு',
          schemeBenefited: 'தாய் சேய் நலம்',
        },
      ],
      trustPartners: [
        'தேசிய தகவலியல் மையம் (NIC) வழிகாட்டுதல்கள்',
        'வேளாண்மை மற்றும் உழவர் நலத்துறை',
        'பொது இ-சேவை மையங்களின் கூட்டமைப்பு',
        'தேசிய சுகாதார ஆணையம்',
      ],
    },
    contact: {
      badge: 'தொடர்பு & கிராம உதவி',
      title: 'AI ரூரல் குழுவை தொடர்பு கொள்ளுங்கள்',
      subtitle: 'நீங்கள் ஒரு கிராமவாசியாகவோ அல்லது பஞ்சாயத்து பிரதிநிதியாகவோ இருந்தாலும் நாங்கள் உதவ தயாராக உள்ளோம்.',
      formTitle: 'உங்கள் கேள்வி அல்லது கருத்தை அனுப்புங்கள்',
      nameLabel: 'முழு பெயர்',
      phoneLabel: 'செல்போன் எண்',
      stateLabel: 'மாவட்டம் / ஊர்',
      topicLabel: 'சேவை பிரிவு',
      messageLabel: 'உங்கள் கேள்வி',
      submitBtn: 'அனுப்பவும்',
      submitting: 'அனுப்பப்படுகிறது...',
      successTitle: 'உங்கள் செய்தி பெறப்பட்டது!',
      successMessage: 'எங்கள் குழு விரைவில் உங்களை தொடர்புகொள்ளும் அல்லது SMS அனுப்பும்.',
      tollFreeTitle: 'தேசிய கட்டணமில்லா தொலைபேசி உதவி எண்',
      tollFreeNumber: '1800-889-RURAL (1800-889-7872)',
      tollFreeDesc: '24 மணி நேரமும் செயல்படும் இலவச சேவை. எந்த போனில் இருந்தும் கட்டணமின்றி அழைக்கலாம்.',
      cscCenterTitle: 'அருகிலுள்ள இ-சேவை மையத்தை அறியுங்கள்',
      cscCenterDesc: 'பயிற்சி பெற்ற பணியாளர்களுடன் கிராமங்கள் தோறும் செயல்படும் சேவை மையங்கள்.',
      faqTitle: 'அடிக்கடி கேட்கப்படும் வினாக்கள்',
      faqItems: [
        {
          q: 'விவசாயிகளுக்கு இந்த சேவை முற்றிலும் இலவசமா?',
          a: 'ஆம், நிச்சயமாக. AI ரூரல் பொதுமக்களுக்காக உருவாக்கப்பட்ட இலவச சேவையாகும்.',
        },
        {
          q: 'இணைய வேகம் குறைவாக இருந்தாலும் வேலை செய்யுமா?',
          a: 'ஆம். 2G நெட்வொர்க் மற்றும் இலவச தொலைபேசி எண் மூலமாகவும் இது செயல்படும்.',
        },
        {
          q: 'இதில் உள்ள அரசு திட்ட தகவல்கள் அதிகாரப்பூர்வமானவையா?',
          a: 'ஆம். அனைத்து விவரங்களும் மத்திய மற்றும் மாநில அரசுகளின் அதிகாரப்பூர்வ தளங்களிலிருந்து பெறப்படுகின்றன.',
        },
        {
          q: 'வட்டார பேச்சு வழக்கில் பேசினால் AI புரிந்து கொள்ளுமா?',
          a: 'ஆம். கிராமப்புற வட்டார வழக்குகள் மற்றும் சொற்களைப் புரிந்து கொள்ளும் வகையில் இது வடிவமைக்கப்பட்டுள்ளது.',
        },
      ],
    },
    footer: {
      about: 'AI ரூரல் பற்றி',
      description:
        'AI ரூரல் சர்வீசஸ் நேவிகேட்டர் என்பது கிராமப்புற இந்திய மக்களுக்கு தாய்மொழியில் செயற்கை நுண்ணறிவு மூலம் அரசு சேவைகளை வழங்கும் தளமாகும்.',
      quickLinks: 'வழிசெலுத்தல்',
      legal: 'பாதுகாப்பு & கொள்கை',
      accessibility: 'எளிய அணுகல்',
      disclaimer:
        'AI ரூரல் என்பது மக்கள் நலன் மற்றும் தொழில்நுட்ப போட்டிக்காக உருவாக்கப்பட்ட திட்டமாகும். அதிகாரப்பூர்வ அனுமதிகள் அரசு துறைகளால் வழங்கப்படும்.',
      emergency: 'விவசாயிகள் அவசர உதவி எண்: 1800-180-1551 (கிசான் கால் சென்டர்)',
      copyright: '© 2026 AI ரூரல் — AI ரூரல் சர்வீசஸ் நேவிகேட்டர். மக்கள் நலனில்.',
    },
  },

  te: {
    nav: {
      home: 'హోమ్',
      features: 'ఫీచర్లు',
      howItWorks: 'ఎలా పనిచేస్తుంది',
      demo: 'లైవ్ నావిగేటర్',
      contact: 'సంప్రదించండి',
      callHelpline: 'టోల్-ఫ్రీ హెల్ప్‌లైన్',
    },
    hero: {
      badge: 'గ్రామీణ సాధికారత కోసం సివిక్-టెక్ AI',
      titleStart: 'గ్రామాలకు చేరువగా',
      titleHighlight: 'AI రూరల్ సర్వీసెస్ నావిగేటర్',
      titleEnd: '',
      description:
        'గ్రామీణ ప్రజలకు ప్రభుత్వ సంక్షేమ పథకాలు, వ్యవసాయ సలహాలు, వైద్య సహాయం మరియు స్థానిక బ్యాంకింగ్ సేవలను వారి సొంత తెలుగు భాషలో వాయిస్ ద్వారా అందించే AI వేదిక.',
      searchPlaceholder: 'మీ గొంతుతో అడగండి లేదా టైప్ చేయండి (ఉదా: PM కిసాన్ స్టేటస్ ఎలా చూడాలి?)',
      searchBtn: 'నావిగేటర్‌ను అడగండి',
      exploreBtn: 'సేవలను చూడండి',
      voiceBtn: 'తెలుగులో మాట్లాడండి',
      popularQueriesLabel: 'ప్రజాదరణ పొందిన ప్రశ్నలు:',
      popularQueries: [
        'పీఎం కిసాన్ 16వ విడత స్థితి',
        'కిసాన్ క్రెడిట్ కార్డ్ (KCC) అర్హత',
        'సమీప ప్రాథమిక ఆరోగ్య కేంద్రం',
        'భూసార పరీక్ష హెల్త్ కార్డ్',
      ],
      stat1Value: '100+',
      stat1Label: 'ధృవీకరించబడిన ప్రభుత్వ పథకాలు',
      stat2Value: '5+',
      stat2Label: 'ప్రాంతీయ భాషలు',
      stat3Value: '24/7',
      stat3Label: 'వాయిస్ & SMS సహాయం',
      stat4Value: '100%',
      stat4Label: 'ఉచిత ప్రజా సేవ',
    },
    features: {
      badge: 'ప్రధాన సేవా స్తంభాలు',
      title: 'గ్రామీణ వాస్తవాల కోసం ప్రత్యేకంగా నిర్మించబడింది',
      subtitle: 'డిజిటల్ పరిజ్ఞానం మరియు నెట్‌వర్క్ సమస్యలను అధిగమించడానికి రూపొందించబడింది.',
      items: [
        {
          id: 'agri',
          title: 'స్మార్ట్ వ్యవసాయ & మార్కెట్ ధరలు',
          description: 'పంట వ్యాధుల నివారణ, స్థానిక వాతావరణ హెచ్చరికలు మరియు సమీప మార్కెట్ తాజా ధరలు సులభంగా తెలుసుకోండి.',
          badge: 'వ్యవసాయం & వాతావరణం',
          highlights: ['లైవ్ మార్కెట్ ధరలు', 'వాతావరణ హెచ్చరికలు', 'ఎరువుల మోతాదు గైడ్'],
        },
        {
          id: 'welfare',
          title: 'ప్రభుత్వ పథకాల గుర్తింపు',
          description: 'పీఎం కిసాన్, ఉపాధి హామీ, పెన్షన్లు మరియు గృహ నిర్మాణ పథకాల అర్హతలను క్షణాల్లో తెలుసుకోండి.',
          badge: 'సంక్షేమ పథకాలు',
          highlights: ['పీఎం కిసాన్ అర్హత పరిశీలన', 'రేషన్ కార్డు సేవలు', 'అవసరమైన పత్రాల జాబితా'],
        },
        {
          id: 'health',
          title: 'గ్రామీణ వైద్యం & ఆరోగ్య కేంద్రాలు',
          description: 'సమీప ప్రాథమిక ఆరోగ్య కేంద్రం (PHC), ఉచిత మందులు, గర్భిణీ స్త్రీలకు ఆర్థిక సాయం మరియు ఆశా వర్కర్ల వివరాలు.',
          badge: 'ఆరోగ్య సేవలు',
          highlights: ['సమీప PHC & అంబులెన్స్', 'తల్లీ పిల్లల సంరక్షణ గైడ్', 'ఆరోగ్యశ్రీ / ఆయుష్మాన్ భారత్'],
        },
        {
          id: 'finance',
          title: 'కిసాన్ క్రెడిట్ కార్డ్ & రుణాలు',
          description: 'పంట రుణాలు, స్వయం సహాయక సంఘాల (SHG) మైక్రో-గ్రాంట్లు మరియు పంట నష్ట బీమా దరఖాస్తు విధానం.',
          badge: 'బ్యాంకింగ్ & రుణాలు',
          highlights: ['KCC 4% వడ్డీ సబ్సిడీ వివరాలు', 'SHG రుణ పత్రాల వివరాలు', 'పంట బీమా క్లెయిమ్ గడువులు'],
        },
        {
          id: 'voice',
          title: 'తెలుగు వాయిస్ AI సహాయకుడు',
          description: 'టైపింగ్ అవసరం లేకుండా, మీ సహజ గ్రామీణ యాసలో మాట్లాడి స్పష్టమైన సమాధానాలు పొందండి.',
          badge: 'వాయిస్ సదుపాయం',
          highlights: ['సహజంగా తెలుగులో మాట్లాడండి', 'ఆడియో రూపంలో సమాధానం', 'చదవడం రానివారికి అనుకూలం'],
        },
        {
          id: 'offline',
          title: 'తక్కువ నెట్‌వర్క్ & ఆఫ్‌లైన్ మోడ్',
          description: 'ఇంటర్నెట్ లేనప్పుడు కూడా టోల్-ఫ్రీ కాల్ (IVR) మరియు SMS ద్వారా వివరాలు పొందండి.',
          badge: 'ఆఫ్‌లైన్ సదుపాయం',
          highlights: ['టోల్-ఫ్రీ ఫోన్ కాల్ సదుపాయం', 'SMS ద్వారా చెక్‌లిస్ట్', 'మీసేవ / CSC కియోస్క్ సపోర్ట్'],
        },
      ],
    },
    howItWorks: {
      badge: '3 సులభమైన దశలు',
      title: 'ప్రశ్న నుండి ప్రభుత్వ సేవ వరకు - క్షణాల్లో',
      subtitle: 'స్పష్టమైన పత్రాల జాబితాతో మీ గ్రామంలోని సేవా కేంద్రంతో నేరుగా అనుసంధానం.',
      steps: [
        {
          number: '01',
          title: 'మీ భాషలో మాట్లాడండి లేదా రాయండి',
          subtitle: 'సహజ వాయిస్ ఇన్‌పుట్',
          description: 'ఆఫీసుల చుట్టూ తిరగాల్సిన పనిలేదు. మీ ఊరి పెద్దలతో మాట్లాడినట్లే సహజంగా ప్రశ్న అడగండి.',
          details: ['మైక్ ద్వారా వాయిస్ ఇన్‌పుట్', 'గ్రామీణ తెలుగు యాసను గుర్తిస్తుంది', 'ఆటోమేటిక్ భాష ఎంపిక'],
        },
        {
          number: '02',
          title: 'AI పథకాలను సరిపోలుస్తుంది',
          subtitle: 'ధృవీకరించబడిన ప్రభుత్వ డేటా',
          description: 'ప్రభుత్వ నిబంధనలు మరియు భూమి విస్తీర్ణం ఆధారంగా మీకు వర్తించే పథకాలను గుర్తిస్తుంది.',
          details: ['ప్రభుత్వ నిబంధనల పరిశీలన', 'భూమి వివరాల ఆధారంగా అర్హత', 'సబ్సిడీ మొత్తం లెక్కింపు'],
        },
        {
          number: '03',
          title: 'పత్రాల జాబితాను పొందండి',
          subtitle: 'సమీప కేంద్రానికి వెళ్లండి',
          description: 'కావాల్సిన పత్రాల (ఆధార్, పట్టాదారు పాస్‌బుక్) SMS జాబితా మరియు మీసేవ కేంద్ర వివరాలు అందుతాయి.',
          details: ['డౌన్‌లోడ్ చేసుకోదగిన జాబితా', 'సాధారణ మొబైల్‌కు SMS', 'సేవా కేంద్రం ఆపరేటర్ కోడ్'],
        },
      ],
      kioskModeTitle: 'ప్రతి పౌరుడి కోసం బహుళ మాధ్యమాలు',
      kioskModeDesc: 'స్మార్ట్‌ఫోన్ వినియోగదారుల నుండి సాధారణ కీప్యాడ్ ఫోన్ కలిగిన వారి వరకు అందరికీ అందుబాటులో ఉంటుంది.',
      kioskModes: [
        {
          title: 'మొబైల్ వెబ్‌సైట్',
          desc: 'తక్కువ బడ్జెట్ 4G ఫోన్లలో వేగంగా పనిచేసే వెబ్‌పేజీ.',
        },
        {
          title: 'టోల్-ఫ్రీ వాయిస్ (IVR)',
          desc: 'ఏ సాధారణ ఫోన్ నుండైనా 1800-RURAL-AI కు కాల్ చేసి మాట్లాడవచ్చు.',
        },
        {
          title: 'గ్రామ పంచాయతీ కియోస్క్',
          desc: 'గ్రామ సచివాలయాలు మరియు మీసేవ కేంద్రాలలో టచ్‌స్క్రీన్ సదుపాయం.',
        },
      ],
    },
    navigator: {
      badge: 'లైవ్ డెమో',
      title: 'AI రూరల్ నావిగేటర్‌ను పరీక్షించండి',
      subtitle: 'క్రింది ప్రశ్నలలో ఒకదాన్ని ఎంచుకోండి లేదా మీ సొంత ప్రశ్నను అడగండి.',
      inputPrompt: 'మీ ప్రశ్నను ఇక్కడ రాయండి లేదా కింద ఉన్నవాటిని ఎంచుకోండి...',
      listenVoice: 'వాయిస్ టెస్ట్ ప్రారంభించండి',
      listening: 'మీ గొంతును వింటోంది...',
      verifiedBadge: 'నేషనల్ పోర్టల్ మరియు వ్యవసాయ మంత్రిత్వ శాఖ ద్వారా ధృవీకరించబడింది',
      eligibleFor: 'అర్హత నిబంధనలు:',
      documentsNeeded: 'అవసరమైన పత్రాలు:',
      nextSteps: 'దరఖాస్తు విధానం:',
      helplineText: 'శాఖ హెల్ప్‌లైన్ నంబర్:',
      sampleQueries: [
        {
          id: 'pm-kisan',
          title: 'పీఎం కిసాన్ విడత పరిశీలన',
          queryText: 'నా బ్యాంకు ఖాతాలో పీఎం కిసాన్ 16వ విడత డబ్బులు పడ్డాయో లేదో ఎలా చూడాలి?',
          department: 'వ్యవసాయ మరియు రైతు సంక్షేమ మంత్రిత్వ శాఖ',
          category: 'రైతు సంక్షేమం',
          answerSummary:
            'పీఎం-కిసాన్ పథకం కింద అర్హులైన రైతు కుటుంబాలకు ఏడాదికి ₹6,000 మూడు విడతల్లో జమ చేస్తారు. దీనికి eKYC మరియు ఆధార్ లింక్ తప్పనిసరి.',
          eligibility: 'రాష్ట్ర భూ రికార్డుల్లో పేరు నమోదైన చిన్న మరియు సన్నకారు రైతులు (2 హెక్టార్ల వరకు).',
          actionSteps: [
            'ఆధార్ కార్డుతో సమీప మీసేవ లేదా CSC కేంద్రానికి వెళ్లండి.',
            'ఓటీపీ లేదా వేలిముద్ర ద్వారా eKYC పూర్తి చేయండి.',
            'బ్యాంకు ఖాతాకు DBT యాక్టివ్‌గా ఉందో లేదో సరిచూసుకోండి.',
            '48 గంటల్లో SMS అప్‌డేట్ పొందండి.',
          ],
          helpline: 'టోల్ ఫ్రీ: 155261 / 011-24300606',
        },
        {
          id: 'kcc',
          title: 'కిసాన్ క్రెడిట్ కార్డ్ (KCC) రుణం',
          queryText: 'పంట రుణం కోసం కిసాన్ క్రెడిట్ కార్డ్ దరఖాస్తుకు ఏయే పత్రాలు కావాలి?',
          department: 'ఆర్థిక సేవల విభాగం & నాబార్డ్',
          category: 'గ్రామీణ బ్యాంకింగ్',
          answerSummary:
            'రైతులకు సకాలంలో 4% రాయితీ వడ్డీతో ₹3 లక్షల వరకు సులభంగా పంట రుణం లభిస్తుంది.',
          eligibility: 'రైతులు, కౌలు రైతులు మరియు స్వయం సహాయక సంఘాలు (SHG).',
          actionSteps: [
            'స్థానిక బ్యాంకు లేదా మీసేవ కేంద్రం నుండి ఒక పేజీ KCC ఫారమ్ తీసుకోండి.',
            'ఆధార్ కార్డు మరియు చిరునామా ధృవీకరణ పత్రం జత చేయండి.',
            'పట్టాదారు పాస్‌బుక్ / 1-B అడంగల్ కాపీని జత చేయండి.',
            '14 రోజుల్లో బ్యాంకు ఉచితంగా కార్డును జారీ చేస్తుంది.',
          ],
          helpline: 'KCC హెల్ప్ డెస్క్: 1800-180-1551',
        },
        {
          id: 'health',
          title: 'జననీ సురక్ష & ఉచిత ప్రసవ సాయం',
          queryText: 'సమీప ప్రాథమిక ఆరోగ్య కేంద్రం ఎక్కడుంది మరియు గర్భిణీ స్త్రీల సహాయం ఎలా పొందాలి?',
          department: 'ఆరోగ్య మరియు కుటుంబ సంక్షేమ మంత్రిత్వ శాఖ',
          category: 'గ్రామీణ ఆరోగ్యం',
          answerSummary:
            'జననీ సురక్ష యోజన కింద ప్రభుత్వ ఆసుపత్రుల్లో ప్రసవించే గ్రామీణ మహిళలకు ₹1,400 ఆర్థిక సాయం మరియు ఉచిత అంబులెన్స్ సదుపాయం ఉంటుంది.',
          eligibility: 'ప్రభుత్వ ఆరోగ్య కేంద్రాలలో చేరే గ్రామీణ గర్భిణీ స్త్రీలందరికీ వర్తిస్తుంది.',
          actionSteps: [
            'మీ ఊరి ఆశా వర్కర్ లేదా ANM వద్ద MCP కార్డు రిజిస్ట్రేషన్ చేసుకోండి.',
            'ఉచిత వైద్య పరీక్షలు మరియు మందులు పొందండి.',
            'అత్యవసర ప్రసవానికి 108 లేదా 102 అంబులెన్స్‌కు కాల్ చేయండి.',
            'డిశ్చార్జ్ తర్వాత బ్యాంకు ఖాతాలో నేరుగా నగదు జమ అవుతుంది.',
          ],
          helpline: 'ఆరోగ్య హెల్ప్‌లైన్: 104 / అంబులెన్స్: 108',
        },
        {
          id: 'soil',
          title: 'భూసార పరీక్ష హెల్త్ కార్డ్',
          queryText: 'విత్తనాలు వేసే ముందు నా పొలం మట్టిని ఎలా పరీక్షించాలి?',
          department: 'వ్యవసాయ సహకార శాఖ',
          category: 'మట్టి మరియు పంటలు',
          answerSummary:
            'మట్టిలోని పోషకాలను పరీక్షించి సరైన ఎరువుల వాడకాన్ని సూచించడం ద్వారా దిగుబడిని 20% వరకు పెంచవచ్చు.',
          eligibility: 'రైతులందరికీ ప్రభుత్వ ప్రయోగశాలల్లో ఉచితంగా లేదా నామమాత్రపు రుసుముతో చేస్తారు.',
          actionSteps: [
            "పొలంలో 'V' ఆకారంలో 15 సెం.మీ లోతులో 8-10 చోట్ల మట్టి నమూనా తీసుకోండి.",
            'నీడలో ఆరబెట్టి 500 గ్రాముల మట్టిని శుభ్రమైన సంచిలో వేయండి.',
            'వ్యవసాయ విస్తరణ అధికారికి లేదా ల్యాబ్‌కు ఇవ్వండి.',
            'ఫోన్‌కు డిజిటల్ కార్డు మరియు ఎరువుల సలహాలు వస్తాయి.',
          ],
          helpline: 'కిసాన్ కాల్ సెంటర్: 1800-180-1551',
        },
      ],
    },
    impact: {
      badge: 'వాస్తవ కథనాలు',
      title: 'గ్రామీణ జీవితాల్లో నిజమైన మార్పు',
      subtitle: 'రైతులు మరియు మహిళా సంఘాలు ఈ నావిగేటర్‌ను ఎలా ఉపయోగిస్తున్నారో తెలుసుకోండి.',
      testimonials: [
        {
          id: '1',
          quote:
            'నాకు ఇంగ్లీషు ఫారాలు అర్థం కావు. ఈ AI టూల్‌లో తెలుగులో మాట్లాడగానే, నా eKYC పెండింగ్‌లో ఉందని చెప్పింది. వెంటనే సరిచేసుకుని డబ్బులు పొందాను.',
          name: 'వెంకటేశ్వర్లు',
          role: 'సన్నకారు రైతు',
          village: 'కృష్ణా జిల్లా',
          state: 'ఆంధ్రప్రదేశ్',
          schemeBenefited: 'పీఎం కిసాన్ పథకం',
        },
        {
          id: '2',
          quote:
            'మా మహిళా గ్రూపునకు విత్తన యంత్రం కొనుగోలుకు రుణం కావాల్సి వచ్చింది. ఈ వేదిక ద్వారా తెలుగులోనే అన్ని వివరాలు తెలుసుకుని సులభంగా రుణం పొందాము.',
          name: 'వరలక్ష్మి',
          role: 'SHG లీడర్',
          village: 'వరంగల్ రూరల్',
          state: 'తెలంగాణ',
          schemeBenefited: 'స్త్రీ నిధి & NRLM',
        },
        {
          id: '3',
          quote:
            'ఆశా కార్యకర్తగా గర్భిణీలకు ప్రభుత్వ పథకాల వివరాలు సులభంగా వివరించడానికి ఈ సివిక్-టెక్ వేదిక ఎంతో ఉపయోగపడుతోంది.',
          name: 'పద్మావతి',
          role: 'ఆశా కార్యకర్త',
          village: 'గుంటూరు రూరల్',
          state: 'ఆంధ్రప్రదేశ్',
          schemeBenefited: 'జననీ సురక్ష పథకం',
        },
      ],
      trustPartners: [
        'నేషనల్ ఇన్ఫర్మేటిక్స్ సెంటర్ (NIC) మార్గదర్శకాలు',
        'వ్యవసాయ మరియు రైతు సంక్షేమ శాఖ',
        'కామన్ సర్వీస్ సెంటర్స్ (CSC / మీసేవ)',
        'నేషనల్ హెల్త్ అథారిటీ',
      ],
    },
    contact: {
      badge: 'సంప్రదించండి & సహాయం',
      title: 'AI రూరల్ బృందంతో మాట్లాడండి',
      subtitle: 'మీరు గ్రామ పౌరులైనా, పంచాయతీ ప్రతినిధులైనా మీకు సహాయం చేయడానికి మేము సిద్ధంగా ఉన్నాము.',
      formTitle: 'మీ ప్రశ్న లేదా సలహాను పంపండి',
      nameLabel: 'పూర్తి పేరు',
      phoneLabel: 'మొబైల్ నంబర్',
      stateLabel: 'జిల్లా / మండలం',
      topicLabel: 'సేవా విభాగం',
      messageLabel: 'మీ ప్రశ్న లేదా సందేశం',
      submitBtn: 'సందేశం పంపండి',
      submitting: 'పంపబడుతోంది...',
      successTitle: 'మీ సందేశం విజయవంతంగా అందింది!',
      successMessage: 'మా బృందం త్వరలో మిమ్మల్ని సంప్రదిస్తుంది లేదా SMS పంపుతుంది.',
      tollFreeTitle: 'జాతీయ టోల్-ఫ్రీ గ్రామీణ హెల్ప్‌లైన్',
      tollFreeNumber: '1800-889-RURAL (1800-889-7872)',
      tollFreeDesc: 'అన్ని వేళలా 5 భాషల్లో ఉచితంగా అందుబాటులో ఉంటుంది.',
      cscCenterTitle: 'సమీప గ్రామ సేవా కేంద్రం (CSC / మీసేవ)',
      cscCenterDesc: 'బయోమెట్రిక్ సదుపాయం మరియు సహాయకులతో దేశవ్యాప్తంగా లక్షలాది కేంద్రాలు.',
      faqTitle: 'తరచుగా అడిగే ప్రశ్నలు',
      faqItems: [
        {
          q: 'ఈ సేవ రైతులకు పూర్తిగా ఉచితమా?',
          a: 'అవును, ముమ్మాటికీ ఉచితం. AI రూరల్ ఒక ప్రజా ప్రయోజన సివిక్-టెక్ ప్రాజెక్ట్.',
        },
        {
          q: 'నెట్‌వర్క్ సరిగ్గా లేని చోట కూడా పనిచేస్తుందా?',
          a: 'అవును, 2G ఫోన్లలో టోల్-ఫ్రీ నంబర్ మరియు SMS ద్వారా కూడా ఉపయోగించవచ్చు.',
        },
        {
          q: 'ఇందులోని సమాచారం అధికారికమైనదేనా?',
          a: 'అవును, కేంద్ర మరియు రాష్ట్ర ప్రభుత్వాల తాజా గెజిట్‌ల నుండి సమాచారం ధృవీకరించబడుతుంది.',
        },
        {
          q: 'మా సహజ యాసలో మాట్లాడితే AI అర్థం చేసుకుంటుందా?',
          a: 'ఖచ్చితంగా, గ్రామీణ యాసలు మరియు మాటలను గుర్తించేలా ఈ మోడల్ తయారు చేయబడింది.',
        },
      ],
    },
    footer: {
      about: 'AI రూరల్ గురించి',
      description:
        'AI రూరల్ సర్వీసెస్ నావిగేటర్ అనేది గ్రామీణ భారతదేశం కోసం బహుభాషా ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ ద్వారా ప్రభుత్వ సేవలను చేరువ చేసే సివిక్-టెక్ వేదిక.',
      quickLinks: 'నావిగేషన్',
      legal: 'భద్రత & గోప్యత',
      accessibility: 'అందరికీ అందుబాటు',
      disclaimer:
        'AI రూరల్ అనేది ప్రజా ప్రయోజనార్థం మరియు హ్యాకథాన్ కోసం రూపొందించబడింది. అధికారిక మంజూరు సంబంధిత ప్రభుత్వ శాఖల చేతుల మీదుగా జరుగుతుంది.',
      emergency: 'రైతు ఎమర్జెన్సీ హెల్ప్‌లైన్: 1800-180-1551 (కిసాన్ కాల్ సెంటర్)',
      copyright: '© 2026 AI రూరల్ — AI రూరల్ సర్వీసెస్ నావిగేటర్. ప్రజా సేవలో.',
    },
  },

  bn: {
    nav: {
      home: 'হোম',
      features: 'বৈশিষ্ট্যসমূহ',
      howItWorks: 'কীভাবে কাজ করে',
      demo: 'লাইভ নেভিগেটর',
      contact: 'যোগাযোগ',
      callHelpline: 'টোল-ফ্রি হেল্পলাইন',
    },
    hero: {
      badge: 'গ্রামীণ উন্নয়নের জন্য সিভিক-টেক এআই',
      titleStart: 'গ্রামের মানুষকে সেবা পৌঁছে দিতে',
      titleHighlight: 'এআই রুরাল সার্ভিসেস নেভিগেটর',
      titleEnd: '',
      description:
        'ভয়েস এবং নিজের বাংলা ভাষায় পরিচালিত এআই প্ল্যাটফর্ম, যা গ্রামীণ নাগরিকদের সরকারি কল্যাণমূলক প্রকল্প, কৃষি পরামর্শ, গ্রামীণ স্বাস্থ্যসেবা এবং ব্যাংকিংয়ের সাথে তাৎক্ষণিক যুক্ত করে।',
      searchPlaceholder: 'মুখে বলে বা লিখে প্রশ্ন করুন (যেমন: পিএম কিষানের কিস্তি কীভাবে দেখব?)',
      searchBtn: 'নেভিগেটরকে জিজ্ঞাসা করুন',
      exploreBtn: 'সেবাসমূহ দেখুন',
      voiceBtn: 'বাংলায় বলুন',
      popularQueriesLabel: 'জনপ্রিয় প্রশ্নসমূহ:',
      popularQueries: [
        'পিএম কিষান ১৬তম কিস্তির স্থিতি',
        'কিষান ক্রেডিট কার্ড (KCC) যোগ্যতা',
        'নিকটবর্তী প্রাথমিক স্বাস্থ্য কেন্দ্র',
        'মাটি পরীক্ষা ও সয়েল হেলথ কার্ড',
      ],
      stat1Value: '১০০+',
      stat1Label: 'যাচাইকৃত সরকারি প্রকল্প',
      stat2Value: '৫+',
      stat2Label: 'আঞ্চলিক ভাষা',
      stat3Value: '২৪/৭',
      stat3Label: 'ভয়েস ও এসএমএস সহায়তা',
      stat4Value: '১০০%',
      stat4Label: 'বিনামূল্যে নাগরিক সেবা',
    },
    features: {
      badge: 'প্রধান সেবা স্তম্ভ',
      title: 'গ্রামীণ বাস্তবতার জন্য বিশেষভাবে নির্মিত',
      subtitle: 'ডিজিটাল শিক্ষার সীমাবদ্ধতা ও দুর্বল ইন্টারনেটের বাধা দূর করার আধুনিক নাগরিক প্রযুক্তি।',
      items: [
        {
          id: 'agri',
          title: 'স্মার্ট কৃষি ও শস্যের বাজারদর',
          description: 'ফসলের রোগ নির্ণয়, স্থানীয় আবহাওয়া সতর্কতা এবং নিকটবর্তী পাইকারি মন্ডির দাম বাংলায় জানুন।',
          badge: 'কৃষি ও আবহাওয়া',
          highlights: ['লাইভ মন্ডির দাম', 'আবহাওয়া সতর্কতা', 'সার ও বীজের সঠিক পরামর্শ'],
        },
        {
          id: 'welfare',
          title: 'সরকারি প্রকল্প ম্যাচিং',
          description: 'পিএম কিষান, একশো দিনের কাজ (MGNREGA), পেনশন এবং আবাস যোজনার সহজ যোগ্যতা যাচাই।',
          badge: 'কল্যাণমূলক প্রকল্প',
          highlights: ['এক ক্লিকে যোগ্যতা যাচাই', 'রেশন কার্ড সুবিধা', 'প্রয়োজনীয় নথির তালিকা'],
        },
        {
          id: 'health',
          title: 'গ্রামীণ স্বাস্থ্য ও প্রাথমিক চিকিৎসা',
          description: 'নিকটবর্তী প্রাথমিক স্বাস্থ্য কেন্দ্র (PHC), বিনামূল্যে ওষুধ, মা ও শিশু পুষ্টি ভাতা এবং আশা দিদির যোগাযোগ।',
          badge: 'স্বাস্থ্যসেবা',
          highlights: ['নিকটবর্তী PHC ও অ্যাম্বুলেন্স', 'মাতৃ ও শিশু সুরক্ষা তালিকা', 'স্বাস্থ্যসাথী / আয়ুষ্মান ভারত'],
        },
        {
          id: 'finance',
          title: 'কিষান ক্রেডিট কার্ড ও ঋণ সহায়তা',
          description: 'ফসলি ঋণ, স্বনির্ভর গোষ্ঠীর (SHG) অনুদান এবং ফসল বীমা (PMFBY) ক্ষতিপূরণ দাবির স্পষ্ট নির্দেশিকা।',
          badge: 'গ্রামীণ ব্যাংকিং',
          highlights: ['KCC ৪% সুদের নিয়ম', 'স্বনির্ভর দল ঋণ নির্দেশিকা', 'ফসল ক্ষতিপূরণ আবেদন সময়সীমা'],
        },
        {
          id: 'voice',
          title: 'ভয়েস-ফার্স্ট বাংলা এআই',
          description: 'টাইপ করার দরকার নেই! নিজের চেনা গ্রামীণ উচ্চারণে মুখে বলে প্রশ্ন করুন এবং সহজ কথায় উত্তর শুনুন।',
          badge: 'ভয়েস সুবিধা',
          highlights: ['সহজ বাংলায় কথা বলুন', 'নিরক্ষরদের জন্য অডিও উত্তর', 'হ্যান্ডস-ফ্রি ভয়েস নেভিগেশন'],
        },
        {
          id: 'offline',
          title: 'ধীরগতির ইন্টারনেট ও অফলাইন মোড',
          description: 'ইন্টারনেট না থাকলেও টোল-ফ্রি নম্বর (IVR) এবং এসএমএসের মাধ্যমে সঠিক তথ্য পাওয়া যায়।',
          badge: 'অফলাইন সুবিধা',
          highlights: ['টোল-ফ্রি কল সুবিধা', 'এসএমএস চেকলিস্ট', 'সিএসসি কিয়স্ক সাপোর্ট'],
        },
      ],
    },
    howItWorks: {
      badge: '৩টি সহজ ধাপ',
      title: 'প্রশ্ন থেকে সরকারি পরিষেবা - কয়েক সেকেন্ডে',
      subtitle: 'কোনো জটিলতা ছাড়া, প্রয়োজনীয় নথির তালিকা এবং আপনার নিকটবর্তী কেন্দ্রের সাথে সংযোগ।',
      steps: [
        {
          number: '০১',
          title: 'বাংলায় বলুন বা লিখুন',
          subtitle: 'সহজ ভয়েস ইনপুট',
          description: 'কোনো ফর্ম পূরণ বা দপ্তরে ঘোরার প্রয়োজন নেই। গ্রামের প্রবীণ মানুষের সাথে কথা বলার মতোই প্রশ্ন করুন।',
          details: ['মাইক্রোফোনে সরাসরি কথা বলুন', 'আঞ্চলিক টান বুঝতে পারে', 'স্বয়ংক্রিয় ভাষা নির্বাচন'],
        },
        {
          number: '০২',
          title: 'এআই প্রকল্পগুলির সাথে মেলায়',
          subtitle: 'যাচাইকৃত সরকারি তথ্যভাণ্ডার',
          description: 'সরকারি নীতি ও জমির পরিমাণের ভিত্তিতে সিস্টেম আপনাকে প্রযোজ্য সুবিধাগুলি জানিয়ে দেয়।',
          details: ['সরকারি নিয়মকানুন যাচাই', 'জমির পরিমাণ অনুযায়ী যোগ্যতা', 'ভর্তুকির সঠিক হিসাব'],
        },
        {
          number: '০৩',
          title: 'নথিপত্রের তালিকা পান',
          subtitle: 'নিকটবর্তী কেন্দ্রে যান',
          description: 'প্রয়োজনীয় নথির (আধার, খতিয়ান, ব্যাংক পাসবই) এসএমএস তালিকা এবং নিকটবর্তী তথ্যমিত্র কেন্দ্রের হদিস পান।',
          details: ['অফলাইন ডাউনলোডযোগ্য তালিকা', 'সাধারণ ফোনে এসএমএস', 'সিএসসি অপারেটর কোড'],
        },
      ],
      kioskModeTitle: 'প্রতিটি নাগরিকের জন্য বিভিন্ন মাধ্যম',
      kioskModeDesc: 'স্মার্টফোন ব্যবহারকারী থেকে শুরু করে সাধারণ কিপ্যাড ফোন থাকা মানুষ—সবার জন্য উপযোগী।',
      kioskModes: [
        {
          title: 'মোবাইল ওয়েবসাইট',
          desc: 'কম দামের ৪জি ফোনেও অত্যন্ত দ্রুত ও মসৃণভাবে লোড হয়।',
        },
        {
          title: 'টোল-ফ্রি ভয়েস (IVR)',
          desc: 'যেকোনো সাধারণ ফোন থেকে 1800-RURAL-AI নম্বরে কল করে কথা বলুন।',
        },
        {
          title: 'গ্রাম পঞ্চায়েত কিয়স্ক',
          desc: 'গ্রাম পঞ্চায়েত অফিস এবং সিএসসি তথ্যমিত্র কেন্দ্রে টাচস্ক্রিন সুবিধা।',
        },
      ],
    },
    navigator: {
      badge: 'ইন্টারেক্টিভ ডেমো',
      title: 'এআই রুরাল নেভিগেটর পরীক্ষা করে দেখুন',
      subtitle: 'নিচের প্রশ্নগুলির মধ্যে একটি বেছে নিন অথবা আপনার নিজের প্রশ্ন লিখে দেখুন কীভাবে সিস্টেম তথ্য দেয়।',
      inputPrompt: 'আপনার প্রশ্ন লিখুন বা নিচের উদাহরণ বেছে নিন...',
      listenVoice: 'ভয়েস পরীক্ষা শুরু করুন',
      listening: 'আপনার কথা শুনছে...',
      verifiedBadge: 'জাতীয় পোর্টাল ও কৃষি মন্ত্রণালয় দ্বারা যাচাইকৃত',
      eligibleFor: 'যোগ্যতার শর্তাবলী:',
      documentsNeeded: 'প্রয়োজনীয় কাগজপত্র:',
      nextSteps: 'আবেদনের সহজ ধাপ:',
      helplineText: 'দপ্তরের হেল্পলাইন নম্বর:',
      sampleQueries: [
        {
          id: 'pm-kisan',
          title: 'পিএম কিষান কিস্তির স্থিতি যাচাই',
          queryText: 'আমার ব্যাংক অ্যাকাউন্টে পিএম কিষানের ১৬তম কিস্তি এসেছে কিনা কীভাবে জানব?',
          department: 'কৃষি ও কৃষক কল্যাণ মন্ত্রণালয়',
          category: 'কৃষি ও কৃষক কল্যাণ',
          answerSummary:
            'পিএম-কিষান প্রকল্পের আওতায় যোগ্য কৃষক পরিবারগুলিকে বছরে ₹৬,০০০ তিনটি কিস্তিতে দেওয়া হয়। এর জন্য ই-কেওয়াইসি এবং আধার লিংক থাকা আবশ্যক।',
          eligibility: 'রাজ্যের ভূমি রেকর্ডে নাম থাকা ক্ষুদ্র ও প্রান্তিক কৃষক (২ হেক্টর পর্যন্ত)।',
          actionSteps: [
            'আধার কার্ড নিয়ে নিকটস্থ সিএসসি বা তথ্যমিত্র কেন্দ্রে যান।',
            'ওটিপি বা বায়োমেট্রিক ফিঙ্গারপ্রিন্ট দিয়ে ই-কেওয়াইসি যাচাই করুন।',
            'ব্যাংক অ্যাকাউন্টে ডিবিটি (DBT) সক্রিয় আছে কিনা দেখে নিন।',
            '৪৮ ঘণ্টার মধ্যে এসএমএস স্ট্যাটাস আপডেট পান।',
          ],
          helpline: 'টোল ফ্রি: 155261 / 011-24300606',
        },
        {
          id: 'kcc',
          title: 'কিষান ক্রেডিট কার্ড (KCC) ঋণ',
          queryText: 'ধান বা গম চাষের জন্য কিষান ক্রেডিট কার্ডের জন্য কী কী নথি লাগবে?',
          department: 'আর্থিক সেবা বিভাগ ও নাবার্ড',
          category: 'গ্রামীণ ব্যাংকিং',
          answerSummary:
            'কৃষকদের সময়মতো ৪% স্বল্প সুদে ₹৩ লাখ পর্যন্ত ফসলি ঋণ প্রদান করা হয়।',
          eligibility: 'সকল কৃষক, বর্গাদার এবং স্বনির্ভর দল (SHG)।',
          actionSteps: [
            'স্থানীয় ব্যাংক শাখা বা সিএসসি থেকে এক পাতার কেসিসি ফর্ম সংগ্রহ করুন।',
            'আধার কার্ড এবং বাসস্থানের প্রমাণপত্র যুক্ত করুন।',
            'জমির খতিয়ান ও পর্চা জমা দিন।',
            '১৪ কার্যদিবসের মধ্যে ব্যাংক বিনামূল্যে কার্ড প্রদান করে।',
          ],
          helpline: 'কেসিসি হেল্প ডেস্ক: 1800-180-1551',
        },
        {
          id: 'health',
          title: 'জননী সুরক্ষা ও বিনামূল্যে প্রসূতি সেবা',
          queryText: 'নিকটবর্তী প্রাথমিক স্বাস্থ্য কেন্দ্র কোথায় এবং জননী সুরক্ষা যোজনায় কীভাবে নাম লেখাব?',
          department: 'স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়',
          category: 'গ্রামীণ স্বাস্থ্য',
          answerSummary:
            'জননী সুরক্ষা যোজনার অধীনে সরকারি হাসপাতালে প্রসব করালে গ্রামীণ মায়েদের ₹১,৪০০ আর্থিক সহায়তা এবং বিনামূল্যে অ্যাম্বুলেন্স সেবা প্রদান করা হয়।',
          eligibility: 'সরকারি স্বাস্থ্যকেন্দ্রে প্রসবকারী সকল গ্রামীণ গর্ভবতী মহিলা।',
          actionSteps: [
            'গ্রামের আশা দিদি বা এএনএম-এর সাথে যোগাযোগ করে এমসিপি কার্ড তৈরি করুন।',
            'নিয়মিত বিনামূল্যে স্বাস্থ্য পরীক্ষা ও ওষুধ গ্রহণ করুন।',
            'প্রসববেদনা শুরু হলে বিনামূল্যে অ্যাম্বুলেন্সের জন্য ১০৮ নম্বরে কল করুন।',
            'হাসপাতাল থেকে ছুটির পর সরাসরি ব্যাংক অ্যাকাউন্টে সহায়তা পান।',
          ],
          helpline: 'জাতীয় স্বাস্থ্য হেল্পলাইন: 1075 / অ্যাম্বুলেন্স: 108',
        },
        {
          id: 'soil',
          title: 'সয়েল হেলথ কার্ড (মাটি পরীক্ষা)',
          queryText: 'বীজ বোনার আগে আমার জমির মাটি কীভাবে পরীক্ষা করাব?',
          department: 'কৃষি ও সমবায় বিভাগ',
          category: 'মাটি ও ফসল',
          answerSummary:
            'মাটির পুষ্টি উপাদান পরীক্ষা করে সারের সঠিক মাত্রা ব্যবহারের মাধ্যমে ফসলের ফলন ২০% পর্যন্ত বৃদ্ধি পায়।',
          eligibility: 'সকল কৃষক সরকারি পরীক্ষাগার থেকে বিনামূল্যে বা সামান্য খরচে মাটি পরীক্ষা করাতে পারেন।',
          actionSteps: [
            "জমিতে 'V' আকারে ১৫ সেমি গভীরতায় ৮-১০টি জায়গা থেকে মাটি সংগ্রহ করুন।",
            'ছায়ায় শুকিয়ে ৫০০ গ্রাম মাটি পরিষ্কার কাপড়ের থলিতে ভরুন।',
            'কৃষি আধিকারিক বা নিকটবর্তী মাটি পরীক্ষাগারে জমা দিন।',
            'ফোনে ডিজিটাল কার্ড ও সার প্রয়োগের সঠিক পরামর্শ পান।',
          ],
          helpline: 'কিষান কল সেন্টার: 1800-180-1551',
        },
      ],
    },
    impact: {
      badge: 'বাস্তব অভিজ্ঞতা',
      title: 'গ্রামীণ জীবনে প্রকৃত পরিবর্তন',
      subtitle: 'কৃষক ও স্বনির্ভর দলের নারীরা কীভাবে এই নেভিগেটর ব্যবহার করছেন তা জানুন।',
      testimonials: [
        {
          id: '1',
          quote:
            'ইংরেজি পোর্টাল আমি বুঝতাম না। এআই রুরালে বাংলায় মুখ ফুটে বলতেই এটি জানাল যে আমার ই-কেওয়াইসি আটকে আছে। দুই দিনের মধ্যে তা মিটিয়ে কিস্তির টাকা পেয়েছি।',
          name: 'হরেন মণ্ডল',
          role: 'ক্ষুদ্র চাষী',
          village: 'বীরভূম জেলা',
          state: 'পশ্চিমবঙ্গ',
          schemeBenefited: 'পিএম কিষান সম্মান নিধি',
        },
        {
          id: '2',
          quote:
            'আমাদের স্বনির্ভর দলের ধান ভাঙার মেশিন কেনার ঋণের নিয়ম আমরা বাংলায় এই এআই-এর কাছে জানতে পারি। কোনো দালালের সাহায্য ছাড়াই ঋণ পেয়েছি।',
          name: 'মমতা সরকার',
          role: 'স্বনির্ভর দল নেত্রী',
          village: 'মুর্শিদাবাদ গ্রামীণ',
          state: 'পশ্চিমবঙ্গ',
          schemeBenefited: 'আনন্দধারা (NRLM)',
        },
        {
          id: '3',
          quote:
            'আশা কর্মী হিসেবে গ্রামের মায়েদের সরকারি পুষ্টিভাতার তথ্য সহজেই বুঝিয়ে দিতে এই সিভিক-টেক ব্যবস্থা আমাকে ভীষণ সাহায্য করে।',
          name: 'রীতা রায়',
          role: 'আশা স্বাস্থ্যকর্মী',
          village: 'জলপাইগুড়ি জেলা',
          state: 'পশ্চিমবঙ্গ',
          schemeBenefited: 'জননী শিশু সুরক্ষা',
        },
      ],
      trustPartners: [
        'ন্যাশনাল ইনফরমেটিক্স সেন্টার (NIC) নির্দেশিকা',
        'কৃষি ও কৃষক কল্যাণ মন্ত্রণালয়',
        'কমন সার্ভিস সেন্টার (CSC) নেটওয়ার্ক',
        'ন্যাশনাল হেলথ অথরিটি',
      ],
    },
    contact: {
      badge: 'যোগাযোগ ও গ্রামীণ সহায়তা',
      title: 'এআই রুরাল টিমের সাথে যুক্ত হোন',
      subtitle: 'আপনি সাধারণ গ্রামবাসী হোন কিংবা পঞ্চায়েত প্রতিনিধি—আমরা আপনাকে সাহায্য করতে প্রস্তুত।',
      formTitle: 'আপনার জিজ্ঞাসা বা মতামত জানান',
      nameLabel: 'পুরো নাম',
      phoneLabel: 'মোবাইল নম্বর',
      stateLabel: 'জেলা / ব্লক',
      topicLabel: 'সেবার বিভাগ',
      messageLabel: 'আপনার প্রশ্ন বা বার্তা',
      submitBtn: 'বার্তা পাঠান',
      submitting: 'পাঠানো হচ্ছে...',
      successTitle: 'আপনার বার্তা সফলভাবে গৃহীত হয়েছে!',
      successMessage: 'আমাদের গ্রামীণ সহায়তা দল শীঘ্রই আপনার সাথে যোগাযোগ করবে বা এসএমএস পাঠাবে।',
      tollFreeTitle: 'জাতীয় টোল-ফ্রি গ্রামীণ হেল্পলাইন',
      tollFreeNumber: '1800-889-RURAL (1800-889-7872)',
      tollFreeDesc: '২৪ ঘণ্টা ৫টি ভাষায় সেবা উন্মুক্ত। যেকোনো সাধারণ ফোন থেকে সম্পূর্ণ বিনামূল্যে কল করা যায়।',
      cscCenterTitle: 'নিকটবর্তী তথ্যমিত্র কেন্দ্র (CSC) খুঁজুন',
      cscCenterDesc: 'বায়োমেট্রিক সুবিধা ও প্রশিক্ষিত কর্মীসহ দেশজুড়ে বিস্তৃত গ্রামীণ সহায়তা কেন্দ্র।',
      faqTitle: 'সাধারণ প্রশ্নাবলী',
      faqItems: [
        {
          q: 'কৃষকদের জন্য এই সেবা কি সম্পূর্ণ বিনামূল্যে?',
          a: 'হ্যাঁ, সম্পূর্ণ বিনামূল্যে। এআই রুরাল একটি জনকল্যাণমূলক সিভিক-টেক উদ্যোগ।',
        },
        {
          q: 'ধীরগতির ২জি ইন্টারনেটেও কি এটি কাজ করবে?',
          a: 'হ্যাঁ, ইন্টারনেট না থাকলেও টোল-ফ্রি ভয়েস নম্বর ও এসএমএসের মাধ্যমে এটি কাজ করে।',
        },
        {
          q: 'এখানে দেওয়া সরকারি প্রকল্পের তথ্য কি নির্ভরযোগ্য?',
          a: 'হ্যাঁ, সমস্ত তথ্য কেন্দ্র ও রাজ্য সরকারের সরকারি গেজেট থেকে নিয়মিত যাচাই করা হয়।',
        },
        {
          q: 'আঞ্চলিক গ্রাম্য টানে কথা বললে কি এআই বুঝতে পারবে?',
          a: 'হ্যাঁ, স্থানীয় আঞ্চলিক টান ও গ্রামীণ শব্দাবলি বোঝার উপযোগী করেই এটি প্রশিক্ষিত।',
        },
      ],
    },
    footer: {
      about: 'এআই রুরাল সম্পর্কে',
      description:
        'এআই রুরাল সার্ভিসেস নেভিগেটর হলো গ্রামীণ ভারতের জন্য বহুভাষিক কৃত্রিম বুদ্ধিমত্তার মাধ্যমে সরকারি নাগরিক সেবাকে সহজলভ্য করার সিভিক-টেক উদ্যোগ।',
      quickLinks: 'নেভিগেশন',
      legal: 'নাগরিক সুরক্ষা ও গোপনীয়তা',
      accessibility: 'সহজ প্রবেশযোগ্যতা',
      disclaimer:
        'এআই রুরাল জনকল্যাণ ও হ্যাকাথন উদ্ভাবনের জন্য নির্মিত। প্রকল্পের চূড়ান্ত অনুমোদন সংশ্লিষ্ট সরকারি বিভাগ দ্বারা নির্ধারিত হয়।',
      emergency: 'কৃষক জরুরি হেল্পলাইন: 1800-180-1551 (কিষান কল সেন্টার)',
      copyright: '© ২০২৬ এআই রুরাল — এআই রুরাল সার্ভিসেস নেভিগেটর। জনসেবায় উৎসর্গীকৃত।',
    },
  },
};
