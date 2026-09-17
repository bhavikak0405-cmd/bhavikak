import { Language, ProblemItem, ProcessFlowStep, KeyFeatureItem } from '../types';

export interface SectionTranslations {
  problem: {
    badge: string;
    title: string;
    subtitle: string;
    cards: ProblemItem[];
  };
  processFlow: {
    badge: string;
    title: string;
    subtitle: string;
    desktopHint: string;
    mobileHint: string;
    steps: ProcessFlowStep[];
  };
  keyFeatures: {
    badge: string;
    title: string;
    subtitle: string;
    items: KeyFeatureItem[];
  };
}

export const NAVIGATOR_SECTIONS_DATA: Record<Language, SectionTranslations> = {
  en: {
    problem: {
      badge: 'Current Rural Challenge',
      title: 'Why Rural Citizens Struggle to Access Public Benefits',
      subtitle: 'Over 800 million citizens qualify for transformative welfare programs, yet structural friction blocks last-mile delivery.',
      cards: [
        {
          id: 'scattered-info',
          number: '01',
          title: 'Scattered Information',
          subtitle: 'Fragmented Ministry Silos',
          description: 'Schemes are buried across 50+ disparate central and state portals with conflicting updates, broken links, and hidden application deadlines.',
          impactStat: '68%',
          statLabel: 'Eligible citizens miss welfare due to information silos',
          solutionSnippet: 'Single Unified Civic Knowledge Graph',
          tag: 'Data Silos'
        },
        {
          id: 'language-barriers',
          number: '02',
          title: 'Language Barriers',
          subtitle: 'Bureaucratic & Legal Jargon',
          description: 'Official notifications are published in rigid legal English or formal Hindi, alienating non-English speakers and regional dialect users.',
          impactStat: '84%',
          statLabel: 'Rural citizens cannot comprehend official policy PDFs',
          solutionSnippet: 'Native Vernacular & Colloquial Dialect Processing',
          tag: 'Linguistic Gap'
        },
        {
          id: 'low-accessibility',
          number: '03',
          title: 'Low Accessibility',
          subtitle: 'Spotty Bandwidth & Device Divide',
          description: 'Heavy web portals fail on 2G/3G networks, demand desktop PCs, and rely on inaccessible text captchas unusable by non-literate villagers.',
          impactStat: '72%',
          statLabel: 'Villages face unstable internet or rely on keypad phones',
          solutionSnippet: 'Lightweight, Offline-First & Voice IVR Support',
          tag: 'Digital Divide'
        },
        {
          id: 'centralized-guidance',
          number: '04',
          title: 'Lack of Centralized Guidance',
          subtitle: 'Middleman Exploitation & Fraud',
          description: 'Without transparent eligibility checklists, citizens travel miles to district offices only to be rejected or charged predatory middleman fees.',
          impactStat: '₹1,800+',
          statLabel: 'Average fee extorted by unauthorized touts per application',
          solutionSnippet: 'Verified Step-by-Step AI Guidance with Zero Fees',
          tag: 'Exploitation'
        }
      ]
    },
    processFlow: {
      badge: 'End-to-End Civic Pipeline',
      title: 'How AI Rural Navigates Public Services',
      subtitle: 'From spoken dialect to last-mile fulfillment in seven transparent, verified steps.',
      desktopHint: 'Click any step to inspect the real-time AI processing pipeline',
      mobileHint: 'Tap steps to explore each phase of the civic assistance journey',
      steps: [
        {
          stepNumber: 1,
          id: 'user-query',
          title: 'User Query',
          shortLabel: 'Citizen Query',
          description: 'Citizen speaks or types their daily problem in their regional tongue or dialect.',
          icon: 'MessageSquare',
          exampleData: {
            inputOrAction: 'Farmer speaks: "I have 2 acres of wheat in Varanasi. How can I get the yearly fertilizer aid?"',
            systemOutput: 'Raw audio captured (8 kHz IVR or mobile mic) and converted to text token stream.'
          }
        },
        {
          stepNumber: 2,
          id: 'ai-understanding',
          title: 'AI Understanding',
          shortLabel: 'Intent & NLP',
          description: 'Civic AI parses colloquial phrasing to extract intent, persona, landholding, and family context.',
          icon: 'BrainCircuit',
          exampleData: {
            inputOrAction: 'Extracted entities: { Persona: "Marginal Farmer", Land: "2.0 Acres", Crop: "Wheat", Need: "Fertilizer Subsidy" }',
            systemOutput: 'Intent mapped with 98.4% confidence score; disambiguated from commercial loans.'
          }
        },
        {
          stepNumber: 3,
          id: 'service-matching',
          title: 'Service Matching',
          shortLabel: 'Scheme Match',
          description: 'Vector search scans 450+ verified central and state welfare databases for exact active schemes.',
          icon: 'Layers',
          exampleData: {
            inputOrAction: 'Semantic similarity match across DBT Bharat & Ministry of Agriculture catalog.',
            systemOutput: 'Top Match: PM-Kisan Samman Nidhi + Soil Health Card Scheme + State Fertilizer Subsidy.'
          }
        },
        {
          stepNumber: 4,
          id: 'eligibility-check',
          title: 'Eligibility Check',
          shortLabel: 'Criteria Audit',
          description: 'System cross-verifies land ceiling, institutional ownership rules, and income thresholds.',
          icon: 'ShieldCheck',
          exampleData: {
            inputOrAction: 'Criteria evaluation: Land < 2 Hectares (PASS), Aadhaar Linked (PASS), Non-taxpayer (PASS).',
            systemOutput: 'Status: 100% Eligible for ₹6,000/yr direct income transfer.'
          }
        },
        {
          stepNumber: 5,
          id: 'documents',
          title: 'Documents',
          shortLabel: 'Doc Checklist',
          description: 'Generates a tailored, plain-language checklist of exact required paperwork.',
          icon: 'FileText',
          exampleData: {
            inputOrAction: 'Requirement engine generates minimal required documents to prevent repeat trips.',
            systemOutput: 'Needed: 1) Aadhaar Card, 2) Land RoR / Khatauni Copy, 3) Active Bank Passbook with IFSC.'
          }
        },
        {
          stepNumber: 6,
          id: 'application-guidance',
          title: 'Application Guidance',
          shortLabel: 'Action Steps',
          description: 'Delivers numbered, straightforward instructions to apply online or through village staff.',
          icon: 'Compass',
          exampleData: {
            inputOrAction: 'Step 1: Complete online e-KYC. Step 2: Upload Khatauni. Step 3: Receive SMS Token.',
            systemOutput: 'Actionable plan rendered in vernacular audio & sent via free SMS summary.'
          }
        },
        {
          stepNumber: 7,
          id: 'nearby-services',
          title: 'Nearby Services',
          shortLabel: 'Local CSC / Kiosk',
          description: 'Locates the nearest Gram Panchayat kiosk, Common Service Centre (CSC), or VLE operator.',
          icon: 'MapPin',
          exampleData: {
            inputOrAction: 'GPS / Pincode: 221001 (Kashi / Varanasi Rural).',
            systemOutput: 'Nearest: CSC Kendra #104 (Panchayat Bhawan, 1.2 km away) • Operator: Amit Verma • Open until 5 PM.'
          }
        }
      ]
    },
    keyFeatures: {
      badge: 'Core Architectural Capabilities',
      title: 'Engineered Specifically for Rural India',
      subtitle: 'Seven purpose-built civic-tech features that bridge policy intent and grassroots reality.',
      items: [
        {
          id: 'ai-assistant',
          title: 'AI-Powered Civic Assistant',
          badge: 'Context-Aware AI',
          category: 'Intelligence',
          shortDescription: 'Trained on official ministry gazettes to explain complex public policies in friendly, conversational terms.',
          bulletPoints: [
            'Zero hallucination policy guardrails',
            'Contextual follow-up memory across conversations',
            'Translates legal jargon into actionable steps'
          ],
          icon: 'Bot',
          statsOrTag: '99.2% Gazette Grounding',
          demoActionLabel: 'Explore Assistant'
        },
        {
          id: 'multilingual-support',
          title: 'Multilingual Vernacular Support',
          badge: '22+ Languages',
          category: 'Inclusion',
          shortDescription: 'Instant bi-directional translation supporting Hindi, Tamil, Telugu, Bengali, Marathi, and regional dialects.',
          bulletPoints: [
            'Phonetic script recognition for mixed-language queries',
            'Preserves administrative terminology accurately',
            'Localized cultural context and regional naming conventions'
          ],
          icon: 'Languages',
          statsOrTag: '22 Indian Languages',
          demoActionLabel: 'Switch Language'
        },
        {
          id: 'scheme-discovery',
          title: 'Government Scheme Discovery',
          badge: 'DBT Bharat Catalog',
          category: 'Welfare',
          shortDescription: 'Unified semantic index matching citizens with central, state, and panchayat-level welfare opportunities.',
          bulletPoints: [
            'Automated discovery across 450+ welfare programs',
            'Proactive notification for newly launched subsidies',
            'Categorized by Agriculture, Healthcare, Women & Pension'
          ],
          icon: 'Sparkles',
          statsOrTag: '450+ Verified Schemes',
          demoActionLabel: 'Search Schemes'
        },
        {
          id: 'doc-eligibility',
          title: 'Document & Eligibility Guidance',
          badge: 'Pre-Screening Engine',
          category: 'Fulfillment',
          shortDescription: 'Clear pre-application audit preventing common rejections and eliminating wasted trips to district headquarters.',
          bulletPoints: [
            'Dynamic eligibility questionnaires with instant feedback',
            'Visual document checklists (Aadhaar, Khatauni, Ration Card)',
            'Identifies missing gazette records before filing'
          ],
          icon: 'FileCheck',
          statsOrTag: 'Zero Repeat Trips',
          demoActionLabel: 'Check Checklist'
        },
        {
          id: 'nearby-service-finder',
          title: 'Nearby Service Finder',
          badge: 'Geo-Spatial Directory',
          category: 'Last-Mile Delivery',
          shortDescription: 'Pins Gram Panchayat kiosks, Common Service Centres (CSCs), and Krishi Vigyan Kendras with operating hours.',
          bulletPoints: [
            'Pincode and village-level radius mapping',
            'Verified Village Level Entrepreneur (VLE) contact cards',
            'Offline directions and SMS landmark coordinates'
          ],
          icon: 'MapPin',
          statsOrTag: '3.8 Lakh CSC Centers',
          demoActionLabel: 'Locate Nearest CSC'
        },
        {
          id: 'voice-queries',
          title: 'Voice-Based Speech Queries',
          badge: 'Dialect-First Audio',
          category: 'Accessibility',
          shortDescription: 'Enables illiterate and visually impaired citizens to speak naturally, paired with toll-free 2G IVR phone playback.',
          bulletPoints: [
            'Background noise filtering for rural mandi environments',
            'Synthesizes high-fidelity spoken vernacular responses',
            'Toll-free IVR phone hotline for basic feature phones'
          ],
          icon: 'Mic',
          statsOrTag: 'Toll-Free 2G Audio',
          demoActionLabel: 'Test Audio Input'
        },
        {
          id: 'admin-dashboard',
          title: 'Admin Verification Dashboard',
          badge: 'Governance & Auditing',
          category: 'Administration',
          shortDescription: 'Real-time telemetry and auditing console for District Collectors, Sarpanches, and CSC administrators.',
          bulletPoints: [
            'Tracks village-level scheme demand and grievance backlogs',
            'Monitors turnaround time from query to benefit sanction',
            'Cryptographically verifiable DBT audit logging'
          ],
          icon: 'LayoutDashboard',
          statsOrTag: 'District Telemetry',
          demoActionLabel: 'View Admin Specs'
        }
      ]
    }
  },
  hi: {
    problem: {
      badge: 'ग्रामीण भारत की वर्तमान चुनौती',
      title: 'ग्रामीण नागरिक सरकारी योजनाओं का लाभ क्यों नहीं ले पाते?',
      subtitle: '80 करोड़ से अधिक नागरिक कल्याणकारी योजनाओं के पात्र हैं, फिर भी व्यवस्थागत बाधाएं अंतिम व्यक्ति तक लाभ पहुंचने से रोकती हैं।',
      cards: [
        {
          id: 'scattered-info',
          number: '01',
          title: 'बिखरी हुई जानकारी',
          subtitle: 'अलग-अलग मंत्रालयों की वेबसाइटें',
          description: 'योजनाएं 50 से अधिक विभिन्न पोर्टलों पर बिखरी हैं, जहां अधूरी जानकारी, टूटे हुए लिंक और छिपी अंतिम तिथियां होती हैं।',
          impactStat: '68%',
          statLabel: 'पात्र नागरिक केवल जानकारी के अभाव में योजना से वंचित रहते हैं',
          solutionSnippet: 'एकल एकीकृत नागरिक ज्ञान प्रणाली',
          tag: 'जानकारी का बिखराव'
        },
        {
          id: 'language-barriers',
          number: '02',
          title: 'भाषा की रुकावट',
          subtitle: 'कठिन सरकारी व कानूनी शब्दावली',
          description: 'सरकारी अधिसूचनाएं केवल अंग्रेजी या जटिल कानूनी भाषा में होती हैं, जिन्हें आम ग्रामीण नागरिक समझ नहीं पाते।',
          impactStat: '84%',
          statLabel: 'ग्रामीण नागरिक सरकारी अधिसूचना की पीडीएफ फाइलों को समझ नहीं पाते',
          solutionSnippet: 'मातृभाषा और स्थानीय बोलियों में सरल संवाद',
          tag: 'भाषाई खाई'
        },
        {
          id: 'low-accessibility',
          number: '03',
          title: 'कम डिजिटल पहुंच',
          subtitle: 'धीमा इंटरनेट और कंप्यूटर की कमी',
          description: 'भारी वेबसाइटें 2G/3G पर नहीं खुलतीं, कंप्यूटर मांगती हैं और ऐसे कैप्चा कोड लगाती हैं जो अनपढ़ ग्रामीणों के लिए असंभव हैं।',
          impactStat: '72%',
          statLabel: 'ग्रामीण परिवारों के पास हाई-स्पीड इंटरनेट या कंप्यूटर नहीं है',
          solutionSnippet: 'कम इंटरनेट और टोल-फ्री फोन कॉल की सुविधा',
          tag: 'डिजिटल विभाजन'
        },
        {
          id: 'centralized-guidance',
          number: '04',
          title: 'केंद्रीकृत मार्गदर्शन का अभाव',
          subtitle: 'दलालों द्वारा अवैध वसूली और धोखाधड़ी',
          description: 'स्पष्ट पात्रता सूची न होने से नागरिकों को बार-बार ब्लॉक जाना पड़ता है और दलालों को भारी रिश्वत देनी पड़ती है।',
          impactStat: '₹1,800+',
          statLabel: 'प्रति आवेदन अनधिकृत दलालों द्वारा वसूली जाने वाली औसत राशि',
          solutionSnippet: 'सत्यापित चरणबद्ध एआई मार्गदर्शन—पूरी तरह निशुल्क',
          tag: 'शोषण व बिचौलिए'
        }
      ]
    },
    processFlow: {
      badge: 'सटीक 7-चरणीय प्रक्रिया',
      title: 'एआई रूरल कैसे काम करता है',
      subtitle: 'आपकी भाषा में सवाल पूछने से लेकर गांव के केंद्र तक मदद पाने का पारदर्शी सफर।',
      desktopHint: 'एआई प्रक्रिया को विस्तार से देखने के लिए किसी भी चरण पर क्लिक करें',
      mobileHint: 'प्रत्येक चरण की जानकारी देखने के लिए कार्ड पर टैप करें',
      steps: [
        {
          stepNumber: 1,
          id: 'user-query',
          title: 'नागरिक का सवाल',
          shortLabel: 'सवाल पूछें',
          description: 'नागरिक अपनी ही बोली में बोलकर या लिखकर अपनी समस्या बताता है।',
          icon: 'MessageSquare',
          exampleData: {
            inputOrAction: 'किसान बोलता है: "मेरे पास 2 एकड़ जमीन है। मुझे खाद सब्सिडी कैसे मिलेगी?"',
            systemOutput: 'आवाज को तुरंत क्षेत्रीय भाषा टेक्स्ट में बदला गया।'
          }
        },
        {
          stepNumber: 2,
          id: 'ai-understanding',
          title: 'एआई समझ',
          shortLabel: 'उद्देश्य की पहचान',
          description: 'एआई किसान की जमीन, फसल और परिवार की स्थिति को समझता है।',
          icon: 'BrainCircuit',
          exampleData: {
            inputOrAction: 'पहचाना गया: { वर्ग: "लघु किसान", जमीन: "2 एकड़", जरूरत: "खाद सहायता" }',
            systemOutput: '98.4% सटीकता से नागरिक की वास्तविक जरूरत समझी गई।'
          }
        },
        {
          stepNumber: 3,
          id: 'service-matching',
          title: 'योजना मिलान',
          shortLabel: 'सही योजना',
          description: '450+ केंद्रीय और राज्य योजनाओं के डेटाबेस में से सटीक योजना चुनी जाती है।',
          icon: 'Layers',
          exampleData: {
            inputOrAction: 'डीबीटी भारत एवं कृषि मंत्रालय के डेटाबेस में खोज।',
            systemOutput: 'चुनी गई: पीएम-किसान सम्मान निधि + मृदा स्वास्थ्य कार्ड योजना।'
          }
        },
        {
          stepNumber: 4,
          id: 'eligibility-check',
          title: 'पात्रता जांच',
          shortLabel: 'पात्रता परीक्षण',
          description: 'जमीन की सीमा, आधार लिंक और आय नियमों की स्वचालित जांच।',
          icon: 'ShieldCheck',
          exampleData: {
            inputOrAction: 'शर्तें: 2 हेक्टेयर से कम जमीन (पास), आधार लिंक (पास)।',
            systemOutput: 'परिणाम: ₹6,000 वार्षिक सहायता के लिए 100% पात्र।'
          }
        },
        {
          stepNumber: 5,
          id: 'documents',
          title: 'दस्तावेज सूची',
          shortLabel: 'कागजात',
          description: 'आवेदन के लिए आवश्यक सभी कागजातों की स्पष्ट और सरल सूची।',
          icon: 'FileText',
          exampleData: {
            inputOrAction: 'बिना किसी परेशानी के आवश्यक कागजात बताए गए।',
            systemOutput: 'चाहिए: 1) आधार कार्ड, 2) खतौनी नकल, 3) बैंक पासबुक।'
          }
        },
        {
          stepNumber: 6,
          id: 'application-guidance',
          title: 'आवेदन मार्गदर्शन',
          shortLabel: 'आवेदन कैसे करें',
          description: 'ऑनलाइन या नजदीकी केंद्र से आवेदन करने का चरणबद्ध तरीका।',
          icon: 'Compass',
          exampleData: {
            inputOrAction: 'चरण 1: ई-केवाईसी कराएं। चरण 2: रसीद प्राप्त करें।',
            systemOutput: 'पूरी जानकारी निशुल्क एसएमएस एवं बोलकर सुनाई गई।'
          }
        },
        {
          stepNumber: 7,
          id: 'nearby-services',
          title: 'नजदीकी सेवा केंद्र',
          shortLabel: 'सीएससी केंद्र',
          description: 'गांव के नजदीकी सीएससी (CSC) या ग्राम पंचायत केंद्र का पता व फोन नंबर।',
          icon: 'MapPin',
          exampleData: {
            inputOrAction: 'पिनकोड: 221001 (वाराणसी ग्रामीण)।',
            systemOutput: 'निकटतम: सीएससी केंद्र पंचायत भवन (1.2 किमी दूर) • संचालक: अमित वर्मा।'
          }
        }
      ]
    },
    keyFeatures: {
      badge: 'प्रमुख तकनीकी विशेषताएं',
      title: 'ग्रामीण भारत की जरूरतों के लिए विशेष रूप से निर्मित',
      subtitle: 'सात शक्तिशाली सुविधाएं जो सरकारी नीतियों और ग्रामीण जनता के बीच की दूरी मिटाती हैं।',
      items: [
        {
          id: 'ai-assistant',
          title: 'एआई-संचालित नागरिक सहायक',
          badge: 'सटीक एआई',
          category: 'बुद्धिमत्ता',
          shortDescription: 'आधिकारिक सरकारी नियमों पर प्रशिक्षित जो हर सवाल का आसान और सटीक उत्तर देता है।',
          bulletPoints: [
            '100% सत्यापित सरकारी नीतियों पर आधारित',
            'बातचीत के संदर्भ को याद रखने की क्षमता',
            'कानूनी भाषा को बोलचाल की हिंदी में समझाना'
          ],
          icon: 'Bot',
          statsOrTag: 'सत्यापित नियम',
          demoActionLabel: 'सहायक आजमाएं'
        },
        {
          id: 'multilingual-support',
          title: 'बहुभाषी एवं क्षेत्रीय बोली समर्थन',
          badge: '22+ भाषाएं',
          category: 'समावेशिता',
          shortDescription: 'हिंदी, तमिल, तेलुगु, बांग्ला, मराठी और स्थानीय ग्रामीण बोलियों में तत्काल संवाद।',
          bulletPoints: [
            'मिश्रित भाषा (हिंग्लिश) का भी सही विश्लेषण',
            'स्थानीय शब्दों और लहजे की पूर्ण पहचान',
            'मातृभाषा में तुरंत ऑडियो और टेक्स्ट जवाब'
          ],
          icon: 'Languages',
          statsOrTag: '22 भारतीय भाषाएं',
          demoActionLabel: 'भाषा बदलें'
        },
        {
          id: 'scheme-discovery',
          title: 'सरकारी योजनाओं की खोज',
          badge: '450+ योजनाएं',
          category: 'कल्याण',
          shortDescription: 'नागरिक की जरूरत के अनुसार केंद्र और राज्य की सभी योजनाओं की तुरंत जानकारी।',
          bulletPoints: [
            'कृषि, स्वास्थ्य, पेंशन और आवास योजनाओं का समावेश',
            'नई घोषित सब्सिडी की तत्काल सूचना',
            'सीधा बैंक खाता (DBT) योजनाओं को प्राथमिकता'
          ],
          icon: 'Sparkles',
          statsOrTag: '450+ योजनाएं',
          demoActionLabel: 'योजनाएं खोजें'
        },
        {
          id: 'doc-eligibility',
          title: 'दस्तावेज व पात्रता मार्गदर्शन',
          badge: 'पहले ही जांचें',
          category: 'सुविधा',
          shortDescription: 'आवेदन से पहले ही जरूरी कागजात जांचें ताकि ब्लॉक जाने पर खाली हाथ न लौटना पड़े।',
          bulletPoints: [
            'कागजातों की सरल और स्पष्ट सूची (आधार, खतौनी)',
            'पात्रता की तुरंत जांच',
            'आवेदन खारिज होने के कारणों की अग्रिम रोकथाम'
          ],
          icon: 'FileCheck',
          statsOrTag: 'शून्य चक्कर',
          demoActionLabel: 'कागजात देखें'
        },
        {
          id: 'nearby-service-finder',
          title: 'नजदीकी सेवा केंद्र खोजक',
          badge: 'ग्राम पंचायत मैप',
          category: 'अंतिम छोर',
          shortDescription: 'गांव के नजदीकी सीएससी (जन सेवा केंद्र) और ऑपरेटर का नाम, दूरी और समय दिखाता है।',
          bulletPoints: [
            'पिनकोड और ग्राम स्तर पर सटीक मैपिंग',
            'सीएससी वीएलई (VLE) का सत्यापित फोन नंबर',
            'निशुल्क एसएमएस द्वारा दिशा-निर्देश'
          ],
          icon: 'MapPin',
          statsOrTag: '3.8 लाख केंद्र',
          demoActionLabel: 'नजदीकी केंद्र ढूंढें'
        },
        {
          id: 'voice-queries',
          title: 'बोलकर पूछने की आवाज सुविधा',
          badge: 'आवाज-प्रथम',
          category: 'सुलभता',
          shortDescription: 'अनपढ़ और बुजुर्ग नागरिकों के लिए बोलकर सवाल पूछने और सुनकर समझने की सुविधा।',
          bulletPoints: [
            'खेत व बाजार के शोर में भी आवाज की स्पष्ट पहचान',
            'स्वाभाविक और स्पष्ट हिंदी में बोलकर उत्तर',
            'साधारण कीपैड फोन के लिए टोल-फ्री सुविधा'
          ],
          icon: 'Mic',
          statsOrTag: 'टोल-फ्री फोन सेवा',
          demoActionLabel: 'आवाज से पूछें'
        },
        {
          id: 'admin-dashboard',
          title: 'प्रशासनिक सत्यापन डैशबोर्ड',
          badge: 'पारदर्शिता',
          category: 'प्रशासन',
          shortDescription: 'ग्राम प्रधान, बीडीओ और जिला अधिकारियों के लिए गांव स्तर पर योजनाओं की ट्रैकिंग।',
          bulletPoints: [
            'गांव में लंबित आवेदनों और समस्याओं की लाइव मॉनिटरिंग',
            'लाभ पहुंचने में लगने वाले समय का विश्लेषण',
            'पारदर्शी और बिना बिचौलियों का डिजिटल ऑडिट'
          ],
          icon: 'LayoutDashboard',
          statsOrTag: 'जिला डैशबोर्ड',
          demoActionLabel: 'डैशबोर्ड देखें'
        }
      ]
    }
  },
  ta: {
    problem: {
      badge: 'கிராமப்புற சவால்',
      title: 'கிராமப்புற மக்கள் பொது நலத்திட்டங்களை பெறுவதில் ஏன் சிரமப்படுகிறார்கள்?',
      subtitle: '80 கோடிக்கும் மேற்பட்ட மக்கள் தகுதியுடையவர்கள், ஆனால் தகவலின்மை மற்றும் நடைமுறை தடைகள் நன்மைகளை தடுக்கின்றன.',
      cards: [
        {
          id: 'scattered-info',
          number: '01',
          title: 'சிதறிய தகவல்கள்',
          subtitle: 'பல்வேறு துறை இணையதளங்கள்',
          description: 'திட்டங்கள் 50க்கும் மேற்பட்ட வெவ்வேறு தளங்களில் சிதறி கிடக்கின்றன; முறையான அறிவிப்புகள் தெரிவதில்லை.',
          impactStat: '68%',
          statLabel: 'தகவல் பற்றாக்குறையால் தகுதியுள்ள மக்கள் நலத்திட்டங்களை இழக்கின்றனர்',
          solutionSnippet: 'ஒருங்கிணைந்த பொது அறிவு மையம்',
          tag: 'தகவல் பிரிவு'
        },
        {
          id: 'language-barriers',
          number: '02',
          title: 'மொழி தடைகள்',
          subtitle: 'சட்டபூர்வ மற்றும் கடின ஆங்கிலம்',
          description: 'அரசு அறிவிப்புகள் கடுமையான ஆங்கிலத்தில் இருப்பதால் கிராமப்புற மக்களுக்கு புரியாமல் போகிறது.',
          impactStat: '84%',
          statLabel: 'கிராம மக்கள் அரசு ஆவணங்களை வாசித்து புரிந்து கொள்ள முடிவதில்லை',
          solutionSnippet: 'தூய மற்றும் பேச்சுத்தமிழ் மொழிபெயர்ப்பு',
          tag: 'மொழி இடைவெளி'
        },
        {
          id: 'low-accessibility',
          number: '03',
          title: 'குறைந்த இணைய வசதி',
          subtitle: 'கணினி மற்றும் இணையமின்மை',
          description: 'கனமான இணையதளங்கள் 2G நெட்வொர்க்கில் இயங்குவதில்லை மற்றும் கணினி தேவைப்படுகிறது.',
          impactStat: '72%',
          statLabel: 'கிராமப்புற வீடுகளில் அதிவேக இணைய வசதி இல்லை',
          solutionSnippet: 'குறைந்த இணையம் மற்றும் கட்டணமில்லா தொலைபேசி சேவை',
          tag: 'டிஜிட்டல் இடைவெளி'
        },
        {
          id: 'centralized-guidance',
          number: '04',
          title: 'மைய வழிகாட்டுதல் இல்லாமை',
          subtitle: 'இடைத்தரகர்களின் சுரண்டல்',
          description: 'நேரடி வழிகாட்டுதல் இல்லாததால் இடைத்தரகர்கள் ஆயிரக்கணக்கான ரூபாய் வரை கட்டணம் வசூலிக்கின்றனர்.',
          impactStat: '₹1,800+',
          statLabel: 'ஒவ்வொரு விண்ணப்பத்திற்கும் இடைத்தரகர்களுக்கு விரயமாகும் தொகை',
          solutionSnippet: 'இலவச படிபடியான நேரடி செயற்கை நுண்ணறிவு வழிகாட்டல்',
          tag: 'சுரண்டல்'
        }
      ]
    },
    processFlow: {
      badge: '7 எளிய படிகள்',
      title: 'ஏஐ ரூரல் எவ்வாறு செயல்படுகிறது',
      subtitle: 'நீங்கள் உங்கள் மொழியில் பேசுவது முதல் கிராம சேவை மையம் வரை வழிகாட்டும் எளிய முறை.',
      desktopHint: 'செயல்பாட்டை பார்க்க ஏதேனும் ஒரு படியில் கிளிக் செய்யவும்',
      mobileHint: 'தகவல்களை அறிய அட்டையை தொடவும்',
      steps: [
        {
          stepNumber: 1,
          id: 'user-query',
          title: 'பயனர் கேள்வி',
          shortLabel: 'கேள்வி கேளுங்கள்',
          description: 'கிராமவாசி தனது சொந்த வட்டார மொழியில் குரல் அல்லது எழுத்து மூலம் கேட்கிறார்.',
          icon: 'MessageSquare',
          exampleData: {
            inputOrAction: 'விவசாயி: "எனக்கு 2 ஏக்கர் நிலம் உள்ளது. உரம் மானியம் பெறுவது எப்படி?"',
            systemOutput: 'குரல் உடனடியாக தமிழ் உரையாக மாற்றப்பட்டது.'
          }
        },
        {
          stepNumber: 2,
          id: 'ai-understanding',
          title: 'ஏஐ புரிதல்',
          shortLabel: 'நோக்கம் அறிதல்',
          description: 'நிலத்தின் அளவு மற்றும் விவசாயியின் தேவையை ஏஐ துல்லியமாக கணக்கிடுகிறது.',
          icon: 'BrainCircuit',
          exampleData: {
            inputOrAction: 'அடையாளம்: { பயனர்: "சிறு விவசாயி", நிலம்: "2 ஏக்கர்", தேவை: "உர மானியம்" }',
            systemOutput: '98.4% துல்லியத்துடன் தேவை கண்டறியப்பட்டது.'
          }
        },
        {
          stepNumber: 3,
          id: 'service-matching',
          title: 'திட்ட தேர்வு',
          shortLabel: 'பொருத்தமான திட்டம்',
          description: 'மத்திய மற்றும் மாநில அரசுகளின் 450க்கும் மேற்பட்ட திட்டங்களில் இருந்து தேர்வு செய்கிறது.',
          icon: 'Layers',
          exampleData: {
            inputOrAction: 'டிபிடி பாரத் திட்டங்களில் தேடல்.',
            systemOutput: 'பொருத்தம்: பிஎம்-கிசான் + மண்வள அட்டை திட்டம்.'
          }
        },
        {
          stepNumber: 4,
          id: 'eligibility-check',
          title: 'தகுதி சரிபார்ப்பு',
          shortLabel: 'தகுதி ஆய்வு',
          description: 'நில உச்சவரம்பு மற்றும் ஆதார் இணைப்பு விதிகளை உடனடியாக சரிபார்க்கிறது.',
          icon: 'ShieldCheck',
          exampleData: {
            inputOrAction: 'விதிகள்: 2 ஹெக்டேருக்கு குறைவான நிலம் (சரி), ஆதார் (சரி).',
            systemOutput: 'முடிவு: ஆண்டுக்கு ₹6,000 பெற 100% தகுதியுடையவர்.'
          }
        },
        {
          stepNumber: 5,
          id: 'documents',
          title: 'தேவையான ஆவணங்கள்',
          shortLabel: 'ஆவண பட்டியல்',
          description: 'விண்ணப்பிக்க தேவையான ஆவணங்களை மட்டுமே தெளிவாக பட்டியலிடுகிறது.',
          icon: 'FileText',
          exampleData: {
            inputOrAction: 'தேவைப்படும் ஆவணங்கள் உருவாக்கப்பட்டது.',
            systemOutput: 'தேவை: 1) ஆதார் அட்டை, 2) பட்டா/சிட்டா நகல், 3) வங்கி கணக்கு புத்தகம்.'
          }
        },
        {
          stepNumber: 6,
          id: 'application-guidance',
          title: 'விண்ணப்ப வழிகாட்டுதல்',
          shortLabel: 'விண்ணப்பிக்கும் முறை',
          description: 'இணையத்தில் அல்லது கிராம சேவை மையத்தில் பதிவு செய்யும் வழிமுறைகள்.',
          icon: 'Compass',
          exampleData: {
            inputOrAction: 'படி 1: இ-கேஒய்சி செய்யவும். படி 2: ரசீது பெறவும்.',
            systemOutput: 'இலவச எஸ்எம்எஸ் மற்றும் குரல் வழிகாட்டுதல் வழங்கப்பட்டது.'
          }
        },
        {
          stepNumber: 7,
          id: 'nearby-services',
          title: 'அருகிலுள்ள சேவை மையம்',
          shortLabel: 'இ-சேவை மையம்',
          description: 'அருகிலுள்ள இ-சேவை மையம் (CSC) மற்றும் தொலைபேசி எண்ணை காட்டுகிறது.',
          icon: 'MapPin',
          exampleData: {
            inputOrAction: 'பின்கோடு: 625001 (மதுரை கிராமப்புறம்).',
            systemOutput: 'அருகில்: இ-சேவை மையம் பஞ்சாயத்து அலுவலகம் (1.2 கி.மீ) • தொடர்பாளர்: அமித்.'
          }
        }
      ]
    },
    keyFeatures: {
      badge: 'முக்கிய அம்சங்கள்',
      title: 'கிராமப்புற தேவைகளுக்கான நவீன தொழில்நுட்பம்',
      subtitle: 'அரசு நலத்திட்டங்களை ஒவ்வொரு குடிமகனுக்கும் எளிதாக கொண்டு சேர்க்கும் 7 முக்கிய அம்சங்கள்.',
      items: [
        {
          id: 'ai-assistant',
          title: 'செயற்கை நுண்ணறிவு உதவியாளர்',
          badge: 'அறிவுத்திறன்',
          category: 'தொழில்நுட்பம்',
          shortDescription: 'அரசு விதிகளை எளிய பேச்சு நடையில் விளக்கும் மெய்நிகர் உதவியாளர்.',
          bulletPoints: ['உண்மையான அரசாணை தரவுகள்', 'முந்தைய உரையாடல்களை நினைவில் கொள்ளும் திறன்', 'எளிய தமிழில் உடனடி விளக்கம்'],
          icon: 'Bot',
          statsOrTag: 'உறுதிப்படுத்தப்பட்ட தகவல்',
          demoActionLabel: 'உதவியாளரை அணுகுக'
        },
        {
          id: 'multilingual-support',
          title: 'பல்வேறு மொழிகள் மற்றும் வட்டார வழக்கு',
          badge: '22+ மொழிகள்',
          category: 'உள்ளடக்கம்',
          shortDescription: 'தமிழ், இந்தி, தெலுங்கு, வங்காளி உள்ளிட்ட 22 இந்திய மொழிகளில் நேரடி பயன்பாடு.',
          bulletPoints: ['பேச்சு வழக்கு சொற்களை சரியாக அறிதல்', 'உடனடி குரல் மற்றும் உரை மாற்றம்', 'உள்ளூர் கலாச்சார சொற்கள்'],
          icon: 'Languages',
          statsOrTag: '22 இந்திய மொழிகள்',
          demoActionLabel: 'மொழி மாற்று'
        },
        {
          id: 'scheme-discovery',
          title: 'அரசு நலத்திட்டங்களின் தேடல்',
          badge: '450+ திட்டங்கள்',
          category: 'நலத்திட்டங்கள்',
          shortDescription: 'மத்திய மற்றும் மாநில அரசுகளின் அனைத்து மானியங்கள் மற்றும் ஓய்வூதியங்கள்.',
          bulletPoints: ['விவசாயம், மருத்துவம், பெண்கள் முன்னேற்றம்', 'புதிய திட்ட அறிவிப்புகள் உடனுக்குடன்', 'நேரடி வங்கி பணப்பரிமாற்றம்'],
          icon: 'Sparkles',
          statsOrTag: '450+ திட்டங்கள்',
          demoActionLabel: 'திட்டங்கள் காண்க'
        },
        {
          id: 'doc-eligibility',
          title: 'ஆவணங்கள் & தகுதி வழிகாட்டி',
          badge: 'முன் ஆய்வு',
          category: 'சரிபார்ப்பு',
          shortDescription: 'அலுவலகங்களுக்கு அலையாமல் தேவையான ஆவணங்களை முதலிலேயே தெரிந்துகொள்ளுங்கள்.',
          bulletPoints: ['ஆதார், பட்டா-சிட்டா பட்டியல்', 'உடனடி தகுதி சோதனை', 'நிராகரிக்கப்படுவதை தடுத்தல்'],
          icon: 'FileCheck',
          statsOrTag: 'அலைச்சல் இல்லை',
          demoActionLabel: 'ஆவணங்கள் சரிபார்'
        },
        {
          id: 'nearby-service-finder',
          title: 'அருகிலுள்ள இ-சேவை மையம் தேடல்',
          badge: 'ஜிபிஎஸ் மேப்',
          category: 'சேவை மையம்',
          shortDescription: 'கிராமத்திற்கு மிக அருகில் உள்ள அரசு இ-சேவை மைய முகவரி மற்றும் எண்.',
          bulletPoints: ['பின்கோடு அடிப்படை தேடல்', 'நிர்வாகியின் தொலைபேசி எண்', 'இலவச எஸ்எம்எஸ் வழிசெலுத்தல்'],
          icon: 'MapPin',
          statsOrTag: '3.8 லட்சம் மையங்கள்',
          demoActionLabel: 'மையம் காண்க'
        },
        {
          id: 'voice-queries',
          title: 'குரல் வழி கேள்விகள்',
          badge: 'குரல் வசதி',
          category: 'அணுகல்தன்மை',
          shortDescription: 'எழுதப் படிக்க தெரியாத மக்களும் எளிதாக பேசி பயன்பெறும் குரல் சேவை.',
          bulletPoints: ['இரைச்சலிலும் துல்லியமாக கேட்கும்', 'தெளிவான குரல் பதில்கள்', 'சாதாரண போனுக்கான கட்டணமில்லா எண்'],
          icon: 'Mic',
          statsOrTag: 'கட்டணமில்லா எண்',
          demoActionLabel: 'பேசிப் பாருங்கள்'
        },
        {
          id: 'admin-dashboard',
          title: 'அரசு அதிகாரிகள் டேஷ்போர்டு',
          badge: 'வெளிப்படைத்தன்மை',
          category: 'நிர்வாகம்',
          shortDescription: 'கிராம நிர்வாக அலுவலர்கள் மற்றும் ஊராட்சி தலைவர்களுக்கான திட்ட கண்காணிப்பு.',
          bulletPoints: ['கிராம தேவைகளின் நேரடி விவரம்', 'கோரிக்கைகளின் நிலை கண்காணிப்பு', 'இடைத்தரகர்கள் அற்ற நிர்வாகம்'],
          icon: 'LayoutDashboard',
          statsOrTag: 'மாவட்ட டேஷ்போர்டு',
          demoActionLabel: 'டேஷ்போர்டு விபரம்'
        }
      ]
    }
  },
  te: {
    problem: {
      badge: 'గ్రామీణ సవాలు',
      title: 'గ్రామీణ పౌరులు ప్రభుత్వ సంక్షేమ పథకాలను ఎందుకు పొందలేకపోతున్నారు?',
      subtitle: '80 కోట్లకు పైగా అర్హులైన పౌరులు ఉన్నప్పటికీ, సంక్లిష్ట ప్రక్రియలు సహాయాన్ని అడ్డుకుంటున్నాయి.',
      cards: [
        {
          id: 'scattered-info',
          number: '01',
          title: 'చెల్లాచెదురైన సమాచారం',
          subtitle: 'వివిధ శాఖల పోర్టల్‌లు',
          description: 'పథకాల వివరాలు 50కి పైగా వేర్వేరు వెబ్‌సైట్లలో ఉంటాయి, సరైన సమాచారం లేదా గడువు తెలియదు.',
          impactStat: '68%',
          statLabel: 'సమాచార లోపం వల్ల అర్హులైన ప్రజలు పథకాలను కోల్పోతున్నారు',
          solutionSnippet: 'ఏకీకృత పౌర సమాచార వేదిక',
          tag: 'సమాచార విభజన'
        },
        {
          id: 'language-barriers',
          number: '02',
          title: 'భాషా సమస్యలు',
          subtitle: 'క్లిష్టమైన ఆంగ్లం మరియు చట్టపరమైన భాష',
          description: 'ప్రభుత్వ ఉత్తర్వులు కఠినమైన ఆంగ్లంలో ఉంటాయి, గ్రామీణ ప్రజలకు అర్థం కావడం చాలా కష్టం.',
          impactStat: '84%',
          statLabel: 'గ్రామీణ పౌరులు ప్రభుత్వ ఉత్తర్వుల పీడీఎఫ్‌లను అర్థం చేసుకోలేరు',
          solutionSnippet: 'మాతృభాష మరియు ప్రాంతీయ యాసలలో వివరణ',
          tag: 'భాషా అవరోధం'
        },
        {
          id: 'low-accessibility',
          number: '03',
          title: 'పరిమిత ఇంటర్నెట్ సౌకర్యం',
          subtitle: 'స్మార్ట్‌ఫోన్లు మరియు కంప్యూటర్ల కొరత',
          description: 'భారీ వెబ్‌సైట్‌లు 2G/3G నెట్‌వర్క్‌లలో పనిచేయవు మరియు కంప్యూటర్లు తప్పనిసరి అవుతాయి.',
          impactStat: '72%',
          statLabel: 'గ్రామీణ గృహాలలో హై-స్పీడ్ ఇంటర్నెట్ లేదు',
          solutionSnippet: 'తక్కువ ఇంటర్నెట్ మరియు టోల్-ఫ్రీ ఫోన్ కాల్ సదుపాయం',
          tag: 'డిజిటల్ విభజన'
        },
        {
          id: 'centralized-guidance',
          number: '04',
          title: 'కేంద్రీకృత మార్గదర్శకత్వం లేకపోవడం',
          subtitle: 'దళారుల దోపిడీ మరియు మోసాలు',
          description: 'సరైన మార్గదర్శకత్వం లేక దళారులు వేల రూపాయలు దోచుకుంటున్నారు.',
          impactStat: '₹1,800+',
          statLabel: 'ప్రతి దరఖాస్తుకు దళారులు వసూలు చేసే సగటు మొత్తం',
          solutionSnippet: 'ఉచిత మరియు ధృవీకరించబడిన ఏఐ మార్గదర్శకత్వం',
          tag: 'దళారుల దోపిడీ'
        }
      ]
    },
    processFlow: {
      badge: '7 సులభమైన దశలు',
      title: 'ఏఐ రూరల్ ఎలా పనిచేస్తుంది',
      subtitle: 'మీ భాషలో అడగడం నుండి గ్రామ సేవా కేంద్రం వరకు సహాయం పొందే సులభమైన మార్గం.',
      desktopHint: 'ఏఐ ప్రాసెస్ చూడటానికి ఏదైనా దశపై క్లిక్ చేయండి',
      mobileHint: 'సమాచారం చూడటానికి కార్డ్‌ను తాకండి',
      steps: [
        {
          stepNumber: 1,
          id: 'user-query',
          title: 'పౌరుడి ప్రశ్న',
          shortLabel: 'ప్రశ్న అడగండి',
          description: 'పౌరుడు తన సొంత భాషలో మాట్లాడి లేదా రాసి సమస్యను తెలియజేస్తాడు.',
          icon: 'MessageSquare',
          exampleData: {
            inputOrAction: 'రైతు మాట: "నాకు 2 ఎకరాల పొలం ఉంది. ఎరువుల సబ్సిడీ ఎలా పొందాలి?"',
            systemOutput: 'వాయిస్ వెంటనే తెలుగు టెక్స్ట్‌గా మార్చబడింది.'
          }
        },
        {
          stepNumber: 2,
          id: 'ai-understanding',
          title: 'ఏఐ అవగాహన',
          shortLabel: 'ఉద్దేశ్యం గుర్తింపు',
          description: 'రైతు భూమి, పంట మరియు కుటుంబాన్ని ఏఐ అర్థం చేసుకుంటుంది.',
          icon: 'BrainCircuit',
          exampleData: {
            inputOrAction: 'గుర్తించబడింది: { వర్గం: "చిన్న రైతు", భూమి: "2 ఎకరాలు", అవసరం: "ఎరువుల సహాయం" }',
            systemOutput: '98.4% ఖచ్చితత్వంతో అవసరం గుర్తించబడింది.'
          }
        },
        {
          stepNumber: 3,
          id: 'service-matching',
          title: 'పథకం ఎంపిక',
          shortLabel: 'సరైన పథకం',
          description: 'కేంద్ర, రాష్ట్ర ప్రభుత్వాల 450+ పథకాల నుండి ఉత్తమమైనది ఎంపిక చేస్తుంది.',
          icon: 'Layers',
          exampleData: {
            inputOrAction: 'డిబిటి భారత్ పోర్టల్‌లో అన్వేషణ.',
            systemOutput: 'ఎంపిక: పీఎం-కిసాన్ + నేల ఆరోగ్య కార్డు పథకం.'
          }
        },
        {
          stepNumber: 4,
          id: 'eligibility-check',
          title: 'అర్హత తనిఖీ',
          shortLabel: 'అర్హత పరీక్ష',
          description: 'భూ పరిమితి మరియు ఆధార్ లింక్ నిబంధనలను తక్షణమే తనిఖీ చేస్తుంది.',
          icon: 'ShieldCheck',
          exampleData: {
            inputOrAction: 'నిబంధనలు: 2 హెక్టార్ల కంటే తక్కువ భూమి (సరి), ఆధార్ (సరి).',
            systemOutput: 'ఫలితం: సంవత్సరానికి ₹6,000 పొందేందుకు 100% అర్హులు.'
          }
        },
        {
          stepNumber: 5,
          id: 'documents',
          title: 'కావలసిన పత్రాలు',
          shortLabel: 'పత్రాల జాబితా',
          description: 'దరఖాస్తుకు అవసరమైన పత్రాల స్పష్టమైన జాబితా.',
          icon: 'FileText',
          exampleData: {
            inputOrAction: 'అవసరమైన పత్రాలు రూపొందించబడ్డాయి.',
            systemOutput: 'కావలసినవి: 1) ఆధార్ కార్డు, 2) పట్టాదారు పాస్ పుస్తకం, 3) బ్యాంక్ పాస్ పుస్తకం.'
          }
        },
        {
          stepNumber: 6,
          id: 'application-guidance',
          title: 'దరఖాస్తు మార్గదర్శకత్వం',
          shortLabel: 'దరఖాస్తు విధానం',
          description: 'ఆన్‌లైన్ లేదా సమీప కేంద్రంలో దరఖాస్తు చేసుకునే దశలవారీ విధానం.',
          icon: 'Compass',
          exampleData: {
            inputOrAction: 'దశ 1: ఈ-కేవైసీ చేయండి. దశ 2: రశీదు పొందండి.',
            systemOutput: 'ఉచిత ఎస్ఎంఎస్ మరియు వాయిస్ గైడెన్స్ అందించబడింది.'
          }
        },
        {
          stepNumber: 7,
          id: 'nearby-services',
          title: 'సమీప సేవా కేంద్రం',
          shortLabel: 'మీ-సేవ కేంద్రం',
          description: 'సమీపంలోని గ్రామ సచివాలయం లేదా మీ-సేవ (CSC) కేంద్రం వివరాలు.',
          icon: 'MapPin',
          exampleData: {
            inputOrAction: 'పిన్‌కోడ్: 530001 (విశాఖ గ్రామీణ).',
            systemOutput: 'సమీప కేంద్రం: పంచాయతీ భవన్ (1.2 కి.మీ) • ఆపరేటర్: అమిత్.'
          }
        }
      ]
    },
    keyFeatures: {
      badge: 'ముఖ్య సాంకేతిక అంశాలు',
      title: 'గ్రామీణ అవసరాల కోసం ప్రత్యేకంగా రూపొందించబడింది',
      subtitle: 'ప్రభుత్వ పథకాలను గ్రామీణ ప్రజలకు చేరువ చేసే 7 శక్తివంతమైన ఫీచర్లు.',
      items: [
        {
          id: 'ai-assistant',
          title: 'ఏఐ పౌర సహాయకుడు',
          badge: 'ఖచ్చితమైన ఏఐ',
          category: 'ఇంటెలిజెన్స్',
          shortDescription: 'ప్రభుత్వ నిబంధనలను సులభమైన మాటల్లో వివరించే స్మార్ట్ అసిస్టెంట్.',
          bulletPoints: ['అధికారిక ప్రభుత్వ సమాచారం', 'మునుపటి సంభాషణలను గుర్తుంచుకుంటుంది', 'సరళమైన తెలుగులో వివరణ'],
          icon: 'Bot',
          statsOrTag: 'ధృవీకరించబడిన సమాచారం',
          demoActionLabel: 'అసిస్టెంట్‌ను చూడండి'
        },
        {
          id: 'multilingual-support',
          title: 'బహుళ భాషలు & ప్రాంతీయ యాసలు',
          badge: '22+ భాషలు',
          category: 'సమ్మిళితం',
          shortDescription: 'తెలుగు, హిందీ, తమిళం, బెంగాలీ తదితర 22 భారతీయ భాషలకు మద్దతు.',
          bulletPoints: ['ప్రాంతీయ యాసల గుర్తింపు', 'తక్షణ వాయిస్ మరియు టెక్స్ట్ మార్పిడి', 'స్థానిక భాషా గౌరవం'],
          icon: 'Languages',
          statsOrTag: '22 భారతీయ భాషలు',
          demoActionLabel: 'భాష మార్చండి'
        },
        {
          id: 'scheme-discovery',
          title: 'ప్రభుత్వ పథకాల అన్వేషణ',
          badge: '450+ పథకాలు',
          category: 'సంక్షేమం',
          shortDescription: 'కేంద్ర, రాష్ట్ర ప్రభుత్వాల అన్ని రకాల సబ్సిడీలు మరియు పింఛన్ల వివరాలు.',
          bulletPoints: ['వ్యవసాయం, ఆరోగ్యం, పింఛన్లు', 'కొత్త పథకాల సమాచారం తక్షణమే', 'నేరుగా బ్యాంక్ బదిలీ (DBT)'],
          icon: 'Sparkles',
          statsOrTag: '450+ పథకాలు',
          demoActionLabel: 'పథకాలు చూడండి'
        },
        {
          id: 'doc-eligibility',
          title: 'పత్రాలు & అర్హత గైడ్',
          badge: 'ముందస్తు తనిఖీ',
          category: 'ధృవీకరణ',
          shortDescription: 'ఆఫీసుల చుట్టూ తిరగకుండా అవసరమైన పత్రాలను ముందే తెలుసుకోండి.',
          bulletPoints: ['ఆధార్, పట్టా పాస్ పుస్తక జాబితా', 'తక్షణ అర్హత పరీక్ష', 'దరఖాస్తు తిరస్కరణ నివారణ'],
          icon: 'FileCheck',
          statsOrTag: 'తిరగాల్సిన పనిలేదు',
          demoActionLabel: 'పత్రాలు చూడండి'
        },
        {
          id: 'nearby-service-finder',
          title: 'సమీప సేవా కేంద్రం శోధన',
          badge: 'గ్రామ మ్యాప్',
          category: 'సేవా కేంద్రం',
          shortDescription: 'గ్రామానికి అత్యంత సమీపంలో ఉన్న మీ-సేవ (CSC) కేంద్రం వివరాలు.',
          bulletPoints: ['పిన్‌కోడ్ ఆధారిత శోధన', 'ఆపరేటర్ ఫోన్ నంబర్', 'ఉచిత ఎస్ఎంఎస్ మార్గదర్శకత్వం'],
          icon: 'MapPin',
          statsOrTag: '3.8 లక్షల కేంద్రాలు',
          demoActionLabel: 'కేంద్రం కనుగొనండి'
        },
        {
          id: 'voice-queries',
          title: 'వాయిస్ ప్రశ్నలు',
          badge: 'వాయిస్-ఫస్ట్',
          category: 'సౌలభ్యం',
          shortDescription: 'చదవడం, రాయడం రాని పౌరుల కోసం సులభంగా మాట్లాడే సదుపాయం.',
          bulletPoints: ['శబ్దంలోనూ స్పష్టంగా వింటుంది', 'స్పష్టమైన వాయిస్ సమాధానాలు', 'సాధారణ ఫోన్ కోసం టోల్-ఫ్రీ నంబర్'],
          icon: 'Mic',
          statsOrTag: 'టోల్-ఫ్రీ ఫోన్ సేవ',
          demoActionLabel: 'మాట్లాడి చూడండి'
        },
        {
          id: 'admin-dashboard',
          title: 'పరిపాలనా పర్యవేక్షణ డ్యాష్‌బోర్డ్',
          badge: 'పారదర్శకత',
          category: 'పరిపాలన',
          shortDescription: 'గ్రామ సర్పంచ్‌లు, అధికారుల కోసం పథకాల అమలు పర్యవేక్షణ వేదిక.',
          bulletPoints: ['గ్రామ సమస్యల ప్రత్యక్ష సమాచారం', 'దరఖాస్తుల పురోగతి ట్రాకింగ్', 'దళారులు లేని డిజిటల్ వ్యవస్థ'],
          icon: 'LayoutDashboard',
          statsOrTag: 'జిల్లా డ్యాష్‌బోర్డ్',
          demoActionLabel: 'డ్యాష్‌బోర్డ్ వివరాలు'
        }
      ]
    }
  },
  bn: {
    problem: {
      badge: 'গ্রামীণ ভারতের বর্তমান চ্যালেঞ্জ',
      title: 'গ্রামীণ নাগরিকরা কেন সরকারি প্রকল্পের সুবিধা পান না?',
      subtitle: '৮০ কোটিরও বেশি মানুষ যোগ্য হওয়া সত্ত্বেও কাঠামোগত বাধার কারণে অধিকার থেকে বঞ্চিত হন।',
      cards: [
        {
          id: 'scattered-info',
          number: '01',
          title: 'ছড়িয়ে থাকা তথ্য',
          subtitle: 'বিভিন্ন সরকারি পোর্টাল',
          description: 'প্রকল্পগুলি ৫০টিরও বেশি আলাদা ওয়েবসাইটে ছড়িয়ে থাকে, ফলে সঠিক তারিখ বা আবেদন পদ্ধতি জানা যায় না।',
          impactStat: '68%',
          statLabel: 'তথ্যের অভাবে যোগ্য নাগরিকরা সরকারি সুবিধা থেকে বঞ্চিত হন',
          solutionSnippet: 'একক সমন্বিত নাগরিক তথ্য ব্যবস্থা',
          tag: 'তথ্যের বিচ্ছিন্নতা'
        },
        {
          id: 'language-barriers',
          number: '02',
          title: 'ভাষার বাধা',
          subtitle: 'কঠিন আইনি ও সরকারি ইংরেজি',
          description: 'সরকারি বিজ্ঞপ্তিগুলি জটিল আইনি ভাষায় থাকে, যা সাধারণ মানুষের পক্ষে বোঝা অসম্ভব।',
          impactStat: '84%',
          statLabel: 'গ্রামীণ মানুষ সরকারি বিজ্ঞপ্তির পিডিএফ ফাইল বুঝতে পারেন না',
          solutionSnippet: 'মাতৃভাষা ও আঞ্চলিক উপভাষায় সহজ বোঝাপড়া',
          tag: 'ভাষাগত দূরত্ব'
        },
        {
          id: 'low-accessibility',
          number: '03',
          title: 'সীমিত ইন্টারনেট সুবিধা',
          subtitle: 'কম্পিউটার ও স্মার্টফোনের অভাব',
          description: 'ভারী ওয়েবসাইটগুলি ধীরগতির ইন্টারনেটে খোলে না এবং কম্পিউটার বাধ্যতামূলক করে তোলে।',
          impactStat: '72%',
          statLabel: 'গ্রামীণ পরিবারগুলিতে দ্রুতগতির ইন্টারনেট বা কম্পিউটার নেই',
          solutionSnippet: 'কম ইন্টারনেট ও টোল-ফ্রি ফোন পরিষেবার সুবিধা',
          tag: 'ডিজিটাল বৈষম্য'
        },
        {
          id: 'centralized-guidance',
          number: '04',
          title: 'কেন্দ্রীয় নির্দেশিকার অভাব',
          subtitle: 'দালালদের দৌরাত্ম্য ও হয়রানি',
          description: 'সরাসরি নির্দেশিকা না থাকায় মানুষ দালালদের হাতে প্রতারিত হন এবং হাজার হাজার টাকা অপচয় হয়।',
          impactStat: '₹1,800+',
          statLabel: 'প্রতি আবেদনে দালালদের দেওয়া গড় অযৌক্তিক অর্থ',
          solutionSnippet: 'সম্পূর্ণ বিনামূল্যে নির্ভরযোগ্য এআই নির্দেশিকা',
          tag: 'দালালদের শোষণ'
        }
      ]
    },
    processFlow: {
      badge: '৭টি সহজ ধাপ',
      title: 'এআই রুর্যাল কীভাবে কাজ করে',
      subtitle: 'আপনার নিজের ভাষায় কথা বলা থেকে শুরু করে গ্রামের কেন্দ্রে সাহায্য পাওয়ার স্বচ্ছ পথ।',
      desktopHint: 'এআই প্রক্রিয়ার বিস্তারিত দেখতে যেকোনো ধাপে ক্লিক করুন',
      mobileHint: 'তথ্য দেখতে কার্ডে স্পর্শ করুন',
      steps: [
        {
          stepNumber: 1,
          id: 'user-query',
          title: 'নাগরিকের প্রশ্ন',
          shortLabel: 'প্রশ্ন জিজ্ঞাসা',
          description: 'নাগরিক নিজের ভাষায় মুখে বলে বা লিখে তার সমস্যার কথা জানান।',
          icon: 'MessageSquare',
          exampleData: {
            inputOrAction: 'কৃষক: "আমার ২ একর জমি আছে। সারের জন্য কীভাবে সরকারি সাহায্য পাব?"',
            systemOutput: 'ভয়েস সরাসরি বাংলা টেক্সটে রূপান্তরিত হলো।'
          }
        },
        {
          stepNumber: 2,
          id: 'ai-understanding',
          title: 'এআই উপলব্ধি',
          shortLabel: 'উদ্দেশ্য নির্ধারণ',
          description: 'কৃষকের জমি, ফসল এবং পরিবারের পরিস্থিতি এআই সঠিকভাবে বিশ্লেষণ করে।',
          icon: 'BrainCircuit',
          exampleData: {
            inputOrAction: 'শনাক্ত: { শ্রেণী: "ক্ষুদ্র কৃষক", জমি: "২ একর", প্রয়োজন: "সার সহায়তা" }',
            systemOutput: '৯৮.৪% নির্ভুলতার সাথে প্রয়োজন নির্ণয়।'
          }
        },
        {
          stepNumber: 3,
          id: 'service-matching',
          title: 'প্রকল্প বাছাই',
          shortLabel: 'সঠিক স্কিম',
          description: 'কেন্দ্র ও রাজ্যের ৪৫০টিরও বেশি প্রকল্পের মধ্যে থেকে সঠিকটি বাছাই করা হয়।',
          icon: 'Layers',
          exampleData: {
            inputOrAction: 'ডিবিটি ভারত ক্যাটালগে অনুসন্ধান।',
            systemOutput: 'বাছাই: পিএম-কিসান সম্মান নিধি + মৃত্তিকা স্বাস্থ্য কার্ড।'
          }
        },
        {
          stepNumber: 4,
          id: 'eligibility-check',
          title: 'যোগ্যতা পরীক্ষা',
          shortLabel: 'যোগ্যতা যাচাই',
          description: 'জমির পরিমাণ ও আধার সংযোগের নিয়মাবলী স্বয়ংক্রিয়ভাবে পরীক্ষা হয়।',
          icon: 'ShieldCheck',
          exampleData: {
            inputOrAction: 'শর্তাবলী: ২ হেক্টরের কম জমি (পাস), আধার লিঙ্ক (পাস)।',
            systemOutput: 'ফলাফল: বার্ষিক ₹৬,০০০ সহায়তার জন্য ১০০% যোগ্য।'
          }
        },
        {
          stepNumber: 5,
          id: 'documents',
          title: 'প্রয়োজনীয় নথিপত্র',
          shortLabel: 'নথি তালিকা',
          description: 'আবেদনের জন্য শুধুমাত্র প্রয়োজনীয় নথির স্পষ্ট তালিকা প্রদান করে।',
          icon: 'FileText',
          exampleData: {
            inputOrAction: 'অপ্রয়োজনীয় ঝামেলাহীন তালিকা প্রস্তুত।',
            systemOutput: 'প্রয়োজন: ১) আধার কার্ড, ২) জমির খতিয়ান, ৩) ব্যাংক পাসবই।'
          }
        },
        {
          stepNumber: 6,
          id: 'application-guidance',
          title: 'আবেদন নির্দেশিকা',
          shortLabel: 'আবেদন পদ্ধতি',
          description: 'অনলাইনে বা নিকটস্থ কেন্দ্রে আবেদন জমা দেওয়ার স্পষ্ট ধাপ।',
          icon: 'Compass',
          exampleData: {
            inputOrAction: 'ধাপ ১: ই-কেওয়াইসি সম্পন্ন করুন। ধাপ ২: রসিদ সংগ্রহ করুন।',
            systemOutput: 'বিনামূল্যে এসএমএস এবং অডিওর মাধ্যমে নির্দেশিকা পাঠানো হলো।'
          }
        },
        {
          stepNumber: 7,
          id: 'nearby-services',
          title: 'নিকটস্থ সেবা কেন্দ্র',
          shortLabel: 'সিএসসি কেন্দ্র',
          description: 'গ্রাম পঞ্চায়েত বা নিকটস্থ সিএসসি (CSC) কেন্দ্রের নাম ও ফোন নম্বর।',
          icon: 'MapPin',
          exampleData: {
            inputOrAction: 'পিনকোড: 700001 (কলকাতা গ্রামীণ)।',
            systemOutput: 'নিকটবর্তী: সিএসসি কেন্দ্র পঞ্চায়েত ভবন (১.২ কিমি) • সঞ্চালক: অমিত।'
          }
        }
      ]
    },
    keyFeatures: {
      badge: 'প্রধান প্রযুক্তিগত সুবিধা',
      title: 'গ্রামীণ ভারতের জন্য বিশেষভাবে তৈরি',
      subtitle: 'সাতটি শক্তিশালী বৈশিষ্ট্য যা সরকারি নীতি এবং সাধারণ মানুষের মধ্যে সেতুবন্ধন গড়ে তোলে।',
      items: [
        {
          id: 'ai-assistant',
          title: 'এআই নাগরিক সহায়ক',
          badge: 'বুদ্ধিমান এআই',
          category: 'ইন্টেলিজেন্স',
          shortDescription: 'সরকারি গ্যাজেটের উপর প্রশিক্ষিত যা জটিল নীতিকে সহজ কথায় বুঝিয়ে দেয়।',
          bulletPoints: ['১০০% নির্ভরযোগ্য সরকারি তথ্য', 'পূর্ববর্তী আলোচনা মনে রাখার ক্ষমতা', 'সহজ বাংলায় তাত্ক্ষণিক ব্যাখ্যা'],
          icon: 'Bot',
          statsOrTag: 'সত্যায়িত তথ্য',
          demoActionLabel: 'সহায়ক ব্যবহার করুন'
        },
        {
          id: 'multilingual-support',
          title: 'বহুভাষিক ও উপভাষা সমর্থন',
          badge: '২২+ ভাষা',
          category: 'অন্তর্ভুক্তি',
          shortDescription: 'বাংলা, হিন্দি, তামিল, তেলুগু সহ ২২টি ভারতীয় ভাষায় তাৎক্ষণিক বার্তালাপ।',
          bulletPoints: ['আঞ্চলিক শব্দের সঠিক উপলব্ধি', 'তাত্ক্ষণিক অডিও ও টেক্সট রূপান্তর', 'স্থানীয় সাংস্কৃতিক গ্রহণযোগ্যতা'],
          icon: 'Languages',
          statsOrTag: '২২টি ভারতীয় ভাষা',
          demoActionLabel: 'ভাষা পরিবর্তন'
        },
        {
          id: 'scheme-discovery',
          title: 'সরকারি প্রকল্পের সন্ধান',
          badge: '৪৫০+ প্রকল্প',
          category: 'কল্যাণ',
          shortDescription: 'কেন্দ্র ও রাজ্যের সমস্ত অনুদান, কৃষি ঋণ ও পেনশনের তাৎক্ষণিক সন্ধান।',
          bulletPoints: ['কৃষি, স্বাস্থ্য, নারী ও পেনশন স্কিম', 'নতুন প্রকল্পের দ্রুত নোটিফিকেশন', 'সরাসরি ব্যাংক ট্রান্সফার (DBT)'],
          icon: 'Sparkles',
          statsOrTag: '৪৫০+ প্রকল্প',
          demoActionLabel: 'প্রকল্প দেখুন'
        },
        {
          id: 'doc-eligibility',
          title: 'নথিপত্র ও যোগ্যতা সহায়িকা',
          badge: 'পূর্ব পরীক্ষা',
          category: 'যাচাইকরণ',
          shortDescription: 'অফিসে অকারণে হয়রানি বন্ধ করতে প্রয়োজনীয় কাগজ আগে থেকেই জেনে নিন।',
          bulletPoints: ['আধার ও খতিয়ানের সহজ তালিকা', 'তাৎক্ষণিক যোগ্যতা পরীক্ষা', 'আবেদন বাতিলের সম্ভাবনা দূরীকরণ'],
          icon: 'FileCheck',
          statsOrTag: 'হয়রানি মুক্ত',
          demoActionLabel: 'নথি দেখুন'
        },
        {
          id: 'nearby-service-finder',
          title: 'নিকটস্থ সেবা কেন্দ্র সন্ধান',
          badge: 'গ্রাম ম্যাপ',
          category: 'সেবা কেন্দ্র',
          shortDescription: 'গ্রামের সবচেয়ে কাছের সিএসসি (তথ্যমিত্র কেন্দ্র) ও অপারেটরের তথ্য।',
          bulletPoints: ['পিনকোড ভিত্তিক অনুসন্ধান', 'অপারেটরের সরাসরি মোবাইল নম্বর', 'বিনামূল্যে এসএমএস দিকনির্দেশ'],
          icon: 'MapPin',
          statsOrTag: '৩.৮ লক্ষ কেন্দ্র',
          demoActionLabel: 'কেন্দ্র খুঁজুন'
        },
        {
          id: 'voice-queries',
          title: 'ভয়েস ভিত্তিক প্রশ্ন',
          badge: 'ভয়েস-ফার্স্ট',
          category: 'সহজলভ্যতা',
          shortDescription: 'নিরক্ষর ও বয়স্কদের জন্য সরাসরি মুখে বলে সাহায্য পাওয়ার সুবিধা।',
          bulletPoints: ['কোলাহলের মধ্যেও স্পষ্ট শ্রবণ', 'স্পষ্ট বাংলায় অডিও উত্তর', 'সাধারণ ফোনের জন্য টোল-ফ্রি নম্বর'],
          icon: 'Mic',
          statsOrTag: 'টোল-ফ্রি ফোন সেবা',
          demoActionLabel: 'কথা বলুন'
        },
        {
          id: 'admin-dashboard',
          title: 'প্রশাসনিক নিরীক্ষণ ড্যাশবোর্ড',
          badge: 'স্বচ্ছতা',
          category: 'প্রশাসন',
          shortDescription: 'গ্রাম প্রধান ও জেলা কর্মকর্তাদের জন্য প্রকল্পের অগ্রগতি পর্যবেক্ষণ ব্যবস্থা।',
          bulletPoints: ['গ্রামের সমস্যার লাইভ নজরদারি', 'আবেদনের বর্তমান অবস্থা পর্যবেক্ষণ', 'দালালমুক্ত ডিজিটাল ব্যবস্থা'],
          icon: 'LayoutDashboard',
          statsOrTag: 'জেলা ড্যাশবোর্ড',
          demoActionLabel: 'ড্যাশবোর্ড দেখুন'
        }
      ]
    }
  }
};
