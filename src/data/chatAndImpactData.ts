import { Language } from '../types';

export interface ChatDemoData {
  languageBadge: string;
  dialectNote: string;
  defaultUserQuery: string;
  userQueryTranslation?: string;
  aiResponse: {
    greeting: string;
    schemeName: string;
    schemeDepartment: string;
    badge: string;
    basicEligibility: string[];
    requiredDocuments: string[];
    applicationGuidance: string[];
    nearbyOffice: {
      name: string;
      distance: string;
      operator: string;
      contact: string;
      timings: string;
      address: string;
    };
    followUpSuggestions: string[];
  };
  samplePrompts: string[];
}

export interface ImpactCard {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  description: string;
  badge: string;
}

export interface VerifiedPipelineStep {
  stepNumber: number;
  title: string;
  role: string;
  description: string;
  securityPillar: string;
  icon: string;
}

export interface ChatAndImpactContent {
  chatDemo: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    chatTitle: string;
    onlineStatus: string;
    placeholder: string;
    askAiBtn: string;
    listeningText: string;
    audioReadoutLabel: string;
    stopAudioLabel: string;
    verifiedStamp: string;
    demoData: ChatDemoData;
  };
  impactSection: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    cards: ImpactCard[];
  };
  verifiedKnowledgeBase: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    trustCallout: string;
    pipeline: VerifiedPipelineStep[];
    guarantees: {
      title: string;
      desc: string;
    }[];
  };
}

export const CHAT_AND_IMPACT_DATA: Record<Language, ChatAndImpactContent> = {
  en: {
    chatDemo: {
      sectionBadge: 'Interactive AI Chat Simulation',
      title: 'Realistic Vernacular AI Consultation',
      subtitle: 'See how a rural citizen asks in colloquial phrasing and gets a structured, actionable breakdown in seconds.',
      chatTitle: 'AI Rural Assistant • Live Session',
      onlineStatus: 'Ministry Knowledge Base Connected',
      placeholder: 'Ask about any agriculture subsidy, pension, or welfare scheme...',
      askAiBtn: 'Ask AI',
      listeningText: 'Listening to speech in your dialect...',
      audioReadoutLabel: 'Listen Spoken Audio',
      stopAudioLabel: 'Stop Audio',
      verifiedStamp: 'Verified against Gazette #2026/AG-44',
      demoData: {
        languageBadge: 'Language: English (Rural Context)',
        dialectNote: 'Intent: Agricultural Subsidy & Income Support',
        defaultUserQuery: 'I am a marginal farmer with 2.5 acres in Varanasi. Which government subsidies can I get for fertilizers and seeds this kharif season?',
        aiResponse: {
          greeting: 'Namaste! Based on your landholding (2.5 acres / ~1 hectare) in Uttar Pradesh, you are categorized as a Small & Marginal Farmer. Here are your verified benefits:',
          schemeName: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) + Subsidized DAP/Urea Allocation',
          schemeDepartment: 'Ministry of Agriculture & Farmers Welfare, Govt. of India',
          badge: '100% Match • Direct Benefit Transfer (DBT)',
          basicEligibility: [
            'Landholding up to 2 hectares registered under your name',
            'Active Aadhaar linkage with land record (Khatauni)',
            'Bank account enabled for NPCI Aadhaar Seeding / DBT'
          ],
          requiredDocuments: [
            'Aadhaar Card of the landholder',
            'Updated Land Record Copy (Khatauni / RoR)',
            'Bank Passbook photocopy showing IFSC & Account number',
            'Active mobile number linked to Aadhaar for e-KYC'
          ],
          applicationGuidance: [
            'Step 1: Verify your biometric e-KYC online at pmkisan.gov.in or via the nearest CSC.',
            'Step 2: Submit land Khatauni for village revenue officer (Lekhpal) digital verification.',
            'Step 3: Collect subsidized fertilizer vouchers instantly via mFMS Point of Sale (PoS).'
          ],
          nearbyOffice: {
            name: 'Gram Panchayat Common Service Centre (CSC #104)',
            distance: '1.2 km from your village',
            operator: 'Shri Amit Kumar Verma (Certified VLE)',
            contact: 'Toll-Free: 1800-889-RURAL / Direct: 98765-43210',
            timings: 'Mon–Sat: 09:00 AM – 05:30 PM',
            address: 'Panchayat Bhawan, Main Road, Block Kashi, Varanasi'
          },
          followUpSuggestions: [
            'Check my PM-Kisan 16th Installment Status',
            'How to get Kisan Credit Card (KCC) at 4% interest?',
            'Apply for PM Kusum Solar Irrigation Pump'
          ]
        },
        samplePrompts: [
          'Fertilizer & Seed Subsidy',
          'Kisan Credit Card Loan',
          'Free Health Treatment Card',
          'Senior Citizen Pension'
        ]
      }
    },
    impactSection: {
      sectionBadge: 'Grassroots Measurable Impact',
      title: 'Transforming Public Service Delivery for Rural India',
      subtitle: 'Eliminating the friction between welfare policies and citizen realization across 6 lakh villages.',
      cards: [
        {
          id: 'service-discovery',
          title: 'Easier Service Discovery',
          subtitle: 'From Hours of Wandering to 3 Seconds',
          metric: '85%',
          metricLabel: 'Reduction in Scheme Discovery Time',
          description: 'Citizens no longer need to know exact ministry names. Plain-language queries instantly scan 450+ central & state welfare programs.',
          badge: 'Instant Matching'
        },
        {
          id: 'accessibility',
          title: 'Better Accessibility',
          subtitle: 'Bridging the Literacy & Device Divide',
          metric: '100%',
          metricLabel: 'Voice-First Vernacular Support',
          description: 'Spoken dialect queries, low-bandwidth 2G optimization, and free SMS tokens ensure non-literate villagers participate without digital barriers.',
          badge: 'Universal Access'
        },
        {
          id: 'understanding',
          title: 'Better Understanding of Public Services',
          subtitle: 'No Legal Jargon, Only Plain Truth',
          metric: '3.4x',
          metricLabel: 'Higher First-Time Application Acceptance',
          description: 'Complex gazette circulars are converted into transparent, step-by-step checklists so applicants bring the exact paperwork on visit one.',
          badge: 'Zero Rejections'
        },
        {
          id: 'centralized-info',
          title: 'Centralized Information',
          subtitle: 'Single Source of Public Truth',
          metric: '50+',
          metricLabel: 'Government Portals Unified in One Engine',
          description: 'Consolidates agriculture, social welfare, health, and revenue records into a single verified repository, eliminating unauthorized middlemen.',
          badge: 'Single Source'
        }
      ]
    },
    verifiedKnowledgeBase: {
      sectionBadge: 'Institutional Trust Architecture',
      title: 'Verified Knowledge Base: Zero Hallucination Guarantee',
      subtitle: 'How AI Rural ensures absolute administrative accuracy, legal compliance, and transparent public accountability.',
      trustCallout: 'Every word spoken by AI Rural is grounded in gazetted policies audited by district nodal officers.',
      pipeline: [
        {
          stepNumber: 1,
          title: 'Admin Verification',
          role: 'Ministry Nodal Officers & District Admins',
          description: 'District collectors and department officers ingest newly notified gazettes, subsidy changes, and deadline extensions.',
          securityPillar: 'Human-in-the-Loop Audit',
          icon: 'UserCheck'
        },
        {
          stepNumber: 2,
          title: 'Verified Knowledge Base',
          role: 'Cryptographic Policy Ledger',
          description: 'Official notifications are indexed into a vector database with strict provenance hashes, eliminating outdated schemes.',
          securityPillar: 'Immutable Policy Graph',
          icon: 'Database'
        },
        {
          stepNumber: 3,
          title: 'AI Response Generation',
          role: 'Grounding & Guardrail Engine',
          description: 'Gemini model references only the verified chunk with zero extrapolation, generating plain-language vernacular guidance.',
          securityPillar: 'Strict Retrieval Guardrails',
          icon: 'Cpu'
        },
        {
          stepNumber: 4,
          title: 'Citizen / User Fulfillment',
          role: 'Empowered Villager & CSC Operator',
          description: 'Citizen receives exact eligibility criteria, verified document lists, and directions to their local Panchayat CSC desk.',
          securityPillar: 'Zero-Middleman Delivery',
          icon: 'CheckCircle2'
        }
      ],
      guarantees: [
        {
          title: 'Official Gazette Citation',
          desc: 'Every AI response references the official government circular number and active ministry URL.'
        },
        {
          title: 'Daily DBT Rate Sync',
          desc: 'Minimum support prices (MSP) and direct benefit transfer installment schedules sync every 24 hours.'
        },
        {
          title: 'Panchayat VLE Co-Sign',
          desc: 'Local village entrepreneur checks and updates center timings and operational biometric scanner status.'
        }
      ]
    }
  },
  hi: {
    chatDemo: {
      sectionBadge: 'इंटरैक्टिव एआई चैट सिमुलेशन',
      title: 'मातृभाषा में वास्तविक एआई परामर्श',
      subtitle: 'देखें कैसे एक ग्रामीण नागरिक अपनी बोली में सवाल पूछता है और उसे कुछ ही सेकंड में पूरी योजना की जानकारी मिलती है।',
      chatTitle: 'एआई रूरल सहायक • लाइव सत्र',
      onlineStatus: 'मंत्रालय डेटाबेस से सत्यापित',
      placeholder: 'कृषि सब्सिडी, पेंशन या किसी भी योजना के बारे में पूछें...',
      askAiBtn: 'पूछें',
      listeningText: 'आपकी आवाज सुनी जा रही है...',
      audioReadoutLabel: 'आवाज में सुनें',
      stopAudioLabel: 'आवाज रोकें',
      verifiedStamp: 'सरकारी राजपत्र #2026/AG-44 से सत्यापित',
      demoData: {
        languageBadge: 'भाषा: हिन्दी (ग्रामीण संदर्भ)',
        dialectNote: 'उद्देश्य: कृषि खाद एवं बीज सब्सिडी',
        defaultUserQuery: 'मेरे पास वाराणसी में 2.5 एकड़ जमीन है। इस खरीफ सीजन में मुझे खाद और बीज पर कौन सी सरकारी सब्सिडी मिल सकती है?',
        aiResponse: {
          greeting: 'नमस्ते! आपकी 2.5 एकड़ (~1 हेक्टेयर) भूमि के अनुसार आप लघु एवं सीमांत किसान श्रेणी में आते हैं। आपके लिए सत्यापित योजनाएं:',
          schemeName: 'प्रधानमंत्री किसान सम्मान निधि (PM-KISAN) + रियायती डीएपी/यूरिया आवंटन',
          schemeDepartment: 'कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार',
          badge: '100% पात्रता मिलान • प्रत्यक्ष लाभ अंतरण (DBT)',
          basicEligibility: [
            'आपके नाम पर 2 हेक्टेयर तक की पंजीकृत कृषि भूमि',
            'भूलेख खतौनी से आधार कार्ड का सक्रिय लिंक होना',
            'बैंक खाता एनपीसीआई (NPCI) आधार सीडेड होना'
          ],
          requiredDocuments: [
            'भूमि स्वामी का आधार कार्ड',
            'अद्यतन खतौनी (भूलेख नकल)',
            'बैंक पासबुक की प्रति (आईएफएससी कोड सहित)',
            'आधार से जुड़ा सक्रिय मोबाइल नंबर (e-KYC के लिए)'
          ],
          applicationGuidance: [
            'चरण 1: pmkisan.gov.in पर या नजदीकी सीएससी केंद्र पर बायोमेट्रिक ई-केवाईसी पूरा करें।',
            'चरण 2: लेखपाल सत्यापन के लिए खतौनी नकल पोर्टल पर अपलोड कराएं।',
            'चरण 3: नजदीकी साधन सहकारी समिति से पीओएस (PoS) मशीन द्वारा सब्सिडी वाली खाद प्राप्त करें।'
          ],
          nearbyOffice: {
            name: 'ग्राम पंचायत जन सेवा केंद्र (CSC Kendra #104)',
            distance: 'आपके गांव से 1.2 किमी',
            operator: 'श्री अमित कुमार वर्मा (प्रमाणित वीएलई)',
            contact: 'टोल-फ्री: 1800-889-RURAL / मोबाइल: 98765-43210',
            timings: 'सोम–शनि: सुबह 09:00 से शाम 05:30 तक',
            address: 'पंचायत भवन, मुख्य मार्ग, काशी ब्लॉक, वाराणसी'
          },
          followUpSuggestions: [
            'मेरी 16वीं किस्त का स्टेटस जांचें',
            '4% ब्याज पर किसान क्रेडिट कार्ड (KCC) कैसे लें?',
            'पीएम कुसुम सोलर पंप योजना में आवेदन'
          ]
        },
        samplePrompts: [
          'खाद एवं बीज सब्सिडी',
          'किसान क्रेडिट कार्ड ऋण',
          'आयुष्मान स्वास्थ्य कार्ड',
          'वृद्धावस्था पेंशन'
        ]
      }
    },
    impactSection: {
      sectionBadge: 'जमीनी स्तर पर प्रत्यक्ष प्रभाव',
      title: 'ग्रामीण भारत के लिए सरकारी सेवाओं का कायाकल्प',
      subtitle: '6 लाख गांवों के नागरिकों और सरकारी कल्याणकारी नीतियों के बीच की दूरी को पूरी तरह खत्म करना।',
      cards: [
        {
          id: 'service-discovery',
          title: 'आसान योजना खोज',
          subtitle: 'दफ्तरों के चक्कर से 3 सेकंड में समाधान',
          metric: '85%',
          metricLabel: 'योजना खोजने के समय में भारी बचत',
          description: 'कठिन सरकारी नाम याद रखने की जरूरत नहीं। साधारण बोलचाल में सवाल पूछकर 450+ योजनाओं की तुरंत जानकारी पाएं।',
          badge: 'तत्काल मिलान'
        },
        {
          id: 'accessibility',
          title: 'बेहतर और व्यापक पहुंच',
          subtitle: 'डिजिटल और साक्षरता की खाई पाटना',
          metric: '100%',
          metricLabel: 'मातृभाषा और आवाज-प्रथम सुविधा',
          description: 'अपनी बोली में बोलकर पूछें, कम इंटरनेट पर चलाएं और बिना स्मार्टफोन के भी मुफ्त एसएमएस से जानकारी पाएं।',
          badge: 'सार्वभौमिक पहुंच'
        },
        {
          id: 'understanding',
          title: 'योजनाओं की सरल समझ',
          subtitle: 'कानूनी भाषा नहीं, सिर्फ साफ बात',
          metric: '3.4x',
          metricLabel: 'पहली बार में ही आवेदन स्वीकृत',
          description: 'सरकारी अधिसूचनाओं को आसान चेकलिस्ट में बदलकर बताते हैं ताकि नागरिक पहले ही चक्कर में सही दस्तावेज लेकर पहुंचे।',
          badge: 'शून्य अस्वीकृति'
        },
        {
          id: 'centralized-info',
          title: 'केंद्रीकृत एवं सत्यापित जानकारी',
          subtitle: 'सच्ची और विश्वसनीय जानकारी का एकल केंद्र',
          metric: '50+',
          metricLabel: 'सरकारी पोर्टल एक ही जगह एकीकृत',
          description: 'कृषि, स्वास्थ्य और समाज कल्याण के सभी विभागों को एक मंच पर लाकर अनधिकृत दलालों का खात्मा।',
          badge: 'एकल स्रोत'
        }
      ]
    },
    verifiedKnowledgeBase: {
      sectionBadge: 'विश्वसनीयता एवं सुरक्षा संरचना',
      title: 'सत्यापित ज्ञान प्रणाली: 100% सटीक जानकारी की गारंटी',
      subtitle: 'जानिए कैसे एआई रूरल केवल आधिकारिक नियमों के आधार पर नागरिकों को बिना किसी भटकाव के सही जानकारी देता है।',
      trustCallout: 'एआई रूरल द्वारा दी गई हर जानकारी आधिकारिक सरकारी राजपत्र और जिला नोडल अधिकारियों द्वारा प्रमाणित होती है।',
      pipeline: [
        {
          stepNumber: 1,
          title: 'प्रशासनिक सत्यापन',
          role: 'मंत्रालय के नोडल अधिकारी एवं जिला प्रशासन',
          description: 'जिला अधिकारी और संबंधित विभाग नई नीतियों, सब्सिडी दरों और अंतिम तिथियों का सत्यापन कर पोर्टल पर अपलोड करते हैं।',
          securityPillar: 'अधिकारियों द्वारा मानवीय समीक्षा',
          icon: 'UserCheck'
        },
        {
          stepNumber: 2,
          title: 'सत्यापित ज्ञान आधार',
          role: 'अपरिवर्तनीय नीति संग्रह',
          description: 'सरकारी राजपत्रों को डिजिटल डेटाबेस में सुरक्षित रखा जाता है, ताकि पुरानी या गलत योजनाएं हटाई जा सकें।',
          securityPillar: 'सत्यापित नीति डेटाबेस',
          icon: 'Database'
        },
        {
          stepNumber: 3,
          title: 'एआई उत्तर निर्माण',
          role: 'कड़े सुरक्षा नियमों के साथ एआई',
          description: 'एआई मॉडल केवल सत्यापित सरकारी नियमों का हवाला देकर आम बोलचाल की भाषा में स्पष्ट उत्तर तैयार करता है।',
          securityPillar: 'बिना किसी मनगढ़ंत बात के जवाब',
          icon: 'Cpu'
        },
        {
          stepNumber: 4,
          title: 'नागरिक तक सेवा वितरण',
          role: 'सशक्त ग्रामीण एवं सीएससी केंद्र',
          description: 'नागरिक को जरूरी कागजात, आवेदन का सही तरीका और नजदीकी सीएससी केंद्र की जानकारी सीधे मिल जाती है।',
          securityPillar: 'बिना बिचौलियों का सीधा लाभ',
          icon: 'CheckCircle2'
        }
      ],
      guarantees: [
        {
          title: 'सरकारी राजपत्र का संदर्भ',
          desc: 'हर उत्तर के साथ आधिकारिक सरकारी आदेश संख्या और मंत्रालय का लिंक दर्ज होता है।'
        },
        {
          title: 'प्रतिदिन डीबीटी दरों का अपडेट',
          desc: 'न्यूनतम समर्थन मूल्य (MSP) और खाते में पैसे भेजने की तारीखें हर 24 घंटे में अपडेट होती हैं।'
        },
        {
          title: 'ग्राम पंचायत वीएलई की पुष्टि',
          desc: 'गांव के सीएससी संचालक द्वारा केंद्र खुलने का समय और मशीन की स्थिति सत्यापित की जाती है।'
        }
      ]
    }
  },
  ta: {
    chatDemo: {
      sectionBadge: 'செயற்கை நுண்ணறிவு உரையாடல் மாதிரி',
      title: 'வட்டார மொழியில் நேரடி உதவி',
      subtitle: 'கிராமப்புற விவசாயி தனது சொந்த மொழியில் கேட்டு உடனடியாக முழு வழிகாட்டுதலையும் பெறும் விதம்.',
      chatTitle: 'ஏஐ ரூரல் உதவியாளர் • நேரலை',
      onlineStatus: 'அரசு தரவுகளுடன் இணைக்கப்பட்டது',
      placeholder: 'விவசாய மானியம், ஓய்வூதியம் பற்றி கேளுங்கள்...',
      askAiBtn: 'கேளுங்கள்',
      listeningText: 'உங்கள் குரல் கேட்கப்படுகிறது...',
      audioReadoutLabel: 'குரலில் கேளுங்கள்',
      stopAudioLabel: 'குரலை நிறுத்துங்கள்',
      verifiedStamp: 'அரசாணை #2026/AG-44 மூலம் சரிபார்க்கப்பட்டது',
      demoData: {
        languageBadge: 'மொழி: தமிழ் (கிராமப்புற பயன்பாடு)',
        dialectNote: 'நோக்கம்: உரம் மற்றும் விதை மானியம்',
        defaultUserQuery: 'என்னிடம் 2.5 ஏக்கர் நிலம் உள்ளது. இந்த பயிர் பருவத்தில் எனக்கு என்ன உரம் மற்றும் விதை மானியங்கள் கிடைக்கும்?',
        aiResponse: {
          greeting: 'வணக்கம்! உங்கள் 2.5 ஏக்கர் நில உடைமையின்படி நீங்கள் சிறு/குறு விவசாயி பிரிவில் வருகிறீர்கள். உங்களுக்கான அரசு நலத்திட்டங்கள்:',
          schemeName: 'பிரதான் மந்திரி கிசான் சம்மான் நிதி (PM-KISAN) + மானிய உரம் வழங்கல்',
          schemeDepartment: 'வேளாண்மை மற்றும் விவசாயிகள் நல அமைச்சகம், இந்திய அரசு',
          badge: '100% பொருத்தம் • நேரடி வங்கி பரிமாற்றம் (DBT)',
          basicEligibility: [
            'உங்கள் பெயரில் 2 ஹெக்டேருக்குள் பதிவு செய்யப்பட்ட விவசாய நிலம்',
            'நில பட்டா சிட்டாவுடன் ஆதார் எண் இணைக்கப்பட்டிருக்க வேண்டும்',
            'வங்கி கணக்கு ஆதார் இணைக்கப்பட்டிருக்க வேண்டும்'
          ],
          requiredDocuments: [
            'நில உரிமையாளரின் ஆதார் அட்டை',
            'தற்போதைய பட்டா/சிட்டா நகல்',
            'வங்கி கணக்கு புத்தக நகல் (IFSC குறியீட்டுடன்)',
            'இ-கேஒய்சி செய்வதற்கு ஆதாருடன் இணைக்கப்பட்ட தொலைபேசி எண்'
          ],
          applicationGuidance: [
            'படி 1: pmkisan.gov.in அல்லது இ-சேவை மையத்தில் இ-கேஒய்சி பதிவு செய்யவும்.',
            'படி 2: கிராம நிர்வாக அலுவலர் (VAO) சரிபார்ப்பிற்கு பட்டா சிட்டா சமர்ப்பிக்கவும்.',
            'படி 3: தொடக்க வேளாண்மை கூட்டுறவு வங்கியில் பிஓஎஸ் (PoS) மூலம் மானிய உரங்களை பெறவும்.'
          ],
          nearbyOffice: {
            name: 'கிராம ஊராட்சி இ-சேவை மையம் (CSC #104)',
            distance: 'உங்கள் கிராமத்திலிருந்து 1.2 கி.மீ',
            operator: 'திரு. அமித் குமார் வர்மா (அங்கீகரிக்கப்பட்ட VLE)',
            contact: 'கட்டணமில்லா எண்: 1800-889-RURAL / 98765-43210',
            timings: 'திங்கள்–சனி: காலை 09:00 முதல் மாலை 05:30 வரை',
            address: 'பஞ்சாயத்து அலுவலகம், முதன்மை சாலை, மதுரை'
          },
          followUpSuggestions: [
            'எனது 16வது தவணை நிலையை சரிபார்க்கவும்',
            '4% வட்டியில் கிசான் கடன் அட்டை (KCC) பெறுவது எப்படி?',
            'சோலார் பம்ப் மானியத்திற்கு விண்ணப்பிப்பது எப்படி?'
          ]
        },
        samplePrompts: ['உரம் & விதை மானியம்', 'விவசாய கடன் அட்டை', 'முதலமைச்சர் மருத்துவ காப்பீடு', 'முதியோர் ஓய்வூதியம்']
      }
    },
    impactSection: {
      sectionBadge: 'நிரூபிக்கப்பட்ட களப்பணி தாக்கம்',
      title: 'கிராமப்புற மக்களுக்கான பொதுச்சேவை புரட்சி',
      subtitle: 'அரசு நலத்திட்டங்களுக்கும் கிராமப்புற குடிமக்களுக்கும் இடையிலான இடைவெளியை அகற்றுதல்.',
      cards: [
        {
          id: 'service-discovery',
          title: 'எளிதான திட்ட தேர்வு',
          subtitle: 'அலைச்சல் இன்றி 3 நொடிகளில் தகவல்',
          metric: '85%',
          metricLabel: 'திட்டங்கள் கண்டறியும் நேரம் குறைப்பு',
          description: 'துறைகளின் பெயர்களை அறிய வேண்டியதில்லை. எளிய தமிழில் பேசி 450+ அரசு திட்டங்களை உடனடியாக அறியலாம்.',
          badge: 'உடனடி தேர்வு'
        },
        {
          id: 'accessibility',
          title: 'சிறந்த அணுகல்தன்மை',
          subtitle: 'எழுதப் படிக்க தெரியாதவர்களுக்கும் எளிய சேவை',
          metric: '100%',
          metricLabel: 'குரல் வழி மற்றும் தமிழ் மொழி ஆதரவு',
          description: 'குரல் மூலம் பேசி பயன்பெறலாம், குறைந்த இணைய வசதியிலும் இயங்கும், இலவச எஸ்எம்எஸ் தகவல் கிடைக்கும்.',
          badge: 'அனைவருக்கும் பொது'
        },
        {
          id: 'understanding',
          title: 'தெளிவான புரிதல்',
          subtitle: 'கடின சொற்கள் அற்ற எளிய விளக்கம்',
          metric: '3.4x',
          metricLabel: 'முதல் முறையிலேயே விண்ணப்பம் ஏற்பு',
          description: 'அரசு ஆணைகள் எளிய படிவங்களாக மாற்றப்பட்டு தேவையான ஆவணங்கள் மட்டுமே பட்டியலிடப்படுகின்றன.',
          badge: 'நிராகரிப்பு இல்லை'
        },
        {
          id: 'centralized-info',
          title: 'ஒருங்கிணைந்த தகவல் தளம்',
          subtitle: 'நம்பகமான உண்மைத் தகவல் மையம்',
          metric: '50+',
          metricLabel: 'அரசு தளங்கள் ஒரே இடத்தில்',
          description: 'விவசாயம், சுகாதாரம், முதியோர் நலன் சார்ந்த அனைத்து தளங்களையும் இணைத்து இடைத்தரகர்களை முற்றிலும் தவிர்க்கிறது.',
          badge: 'ஒரே தளம்'
        }
      ]
    },
    verifiedKnowledgeBase: {
      sectionBadge: 'நம்பகத்தன்மை & உறுதிப்பாடு',
      title: 'சரிபார்க்கப்பட்ட தகவல் தளம்: 100% உண்மை உத்தரவாதம்',
      subtitle: 'அரசு அதிகாரிகளால் சரிபார்க்கப்பட்ட தகவல்கள் மட்டுமே பொதுமக்களுக்கு வழங்கப்படுகின்றன.',
      trustCallout: 'ஏஐ ரூரல் வழங்கும் அனைத்து தகவல்களும் அரசு பதிவேடுகள் மற்றும் துறை அதிகாரிகளால் உறுதிப்படுத்தப்பட்டவை.',
      pipeline: [
        {
          stepNumber: 1,
          title: 'நிர்வாக சரிபார்ப்பு',
          role: 'துறை அதிகாரிகள் & மாவட்ட ஆட்சியர்',
          description: 'அரசாணைகள், புதிய மானியங்கள் மற்றும் காலக்கெடு தகவல்களை அதிகாரிகள் சரிபார்த்து பதிவேற்றுகின்றனர்.',
          securityPillar: 'அதிகாரிகளின் நேரடி ஆய்வு',
          icon: 'UserCheck'
        },
        {
          stepNumber: 2,
          title: 'சரிபார்க்கப்பட்ட தகவல் தளம்',
          role: 'பாதுகாப்பான கொள்கை பதிவேடு',
          description: 'பழைய மற்றும் தவறான தகவல்கள் நீக்கப்பட்டு அரசாணைகள் முறையாக சேமிக்கப்படுகின்றன.',
          securityPillar: 'உறுதிப்படுத்தப்பட்ட பதிவேடு',
          icon: 'Database'
        },
        {
          stepNumber: 3,
          title: 'ஏஐ பதில் உருவாக்கம்',
          role: 'பாதுகாப்பான ஏஐ கட்டமைப்பு',
          description: 'ஏஐ மாதிரி அரசு விதிகளை மட்டுமே அடிப்படையாகக் கொண்டு எளிய பேச்சு தமிழில் பதிலளிக்கிறது.',
          securityPillar: 'பொய் தகவல்கள் இல்லாத பதில்',
          icon: 'Cpu'
        },
        {
          stepNumber: 4,
          title: 'குடிமக்கள் சேவை பெறுதல்',
          role: 'விவசாயி & இ-சேவை மையம்',
          description: 'குடிமகன் தேவையான ஆவணங்களுடன் மிக அருகில் உள்ள இ-சேவை மையத்திற்கு சென்று பயன் பெறுகிறார்.',
          securityPillar: 'இடைத்தரகர் இல்லா பலன்',
          icon: 'CheckCircle2'
        }
      ],
      guarantees: [
        { title: 'அரசாணை சான்று', desc: 'ஒவ்வொரு பதிலும் அரசு ஆணை எண் மற்றும் துறை இணையதள சான்றோடு வழங்கப்படுகிறது.' },
        { title: 'தினசரி மானிய விலை மாற்றம்', desc: 'குறைந்தபட்ச ஆதரவு விலை (MSP) மற்றும் வங்கி வரவு விவரங்கள் தினமும் புதுப்பிக்கப்படுகின்றன.' },
        { title: 'இ-சேவை மைய உறுதிப்பாடு', desc: 'கிராம சேவை மையத்தின் வேலை நேரம் மற்றும் பயோமெட்ரிக் கருவி செயல்பாடு உறுதி செய்யப்படுகிறது.' }
      ]
    }
  },
  te: {
    chatDemo: {
      sectionBadge: 'ఇంటరాక్టివ్ ఏఐ చాట్ సిమ్యులేషన్',
      title: 'స్థానిక భాషలో రియలిస్టిక్ ఏఐ సంప్రదింపులు',
      subtitle: 'గ్రామీణ రైతు తన సొంత భాషలో మాట్లాడి కొన్ని సెకన్లలో సరైన సంక్షేమ పథక సమాచారాన్ని ఎలా పొందుతారో చూడండి.',
      chatTitle: 'ఏఐ రూరల్ అసిస్టెంట్ • ప్రత్యక్ష సెషన్',
      onlineStatus: 'మంత్రిత్వ శాఖ డేటాబేస్ ద్వారా ధృవీకరించబడింది',
      placeholder: 'వ్యవసాయ సబ్సిడీ, పింఛన్లు లేదా ఏదైనా పథకం గురించి అడగండి...',
      askAiBtn: 'అడగండి',
      listeningText: 'మీ వాయిస్ వినబడుతోంది...',
      audioReadoutLabel: 'వాయిస్ వినండి',
      stopAudioLabel: 'ఆపండి',
      verifiedStamp: 'గెజిట్ #2026/AG-44 ప్రకారం ధృవీకరించబడింది',
      demoData: {
        languageBadge: 'భాష: తెలుగు (గ్రామీణ సందర్భం)',
        dialectNote: 'లక్ష్యం: ఎరువులు మరియు విత్తన సబ్సిడీ',
        defaultUserQuery: 'నాకు విశాఖ జిల్లాలో 2.5 ఎకరాల భూమి ఉంది. ఈ ఖరీఫ్ సీజన్ కోసం ఎరువులు, విత్తనాలపై నాకు ఏ ప్రభుత్వ సబ్సిడీలు లభిస్తాయి?',
        aiResponse: {
          greeting: 'నమస్కారం! మీ 2.5 ఎకరాల భూమి ప్రకారం మీరు చిన్న మరియు సన్నకారు రైతు కేటగిరీలోకి వస్తారు. మీ కోసం అందుబాటులో ఉన్న పథకాలు:',
          schemeName: 'ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి (PM-KISAN) + సబ్సిడీ ఎరువుల కేటాయింపు',
          schemeDepartment: 'వ్యవసాయ మరియు రైతు సంక్షేమ మంత్రిత్వ శాఖ, భారత ప్రభుత్వం',
          badge: '100% అర్హత • డైరెక్ట్ బెనిఫిట్ ట్రాన్స్‌ఫర్ (DBT)',
          basicEligibility: [
            'మీ పేరు మీద 2 హెక్టార్ల వరకు నమోదైన సాగు భూమి',
            'పట్టాదారు పాస్ పుస్తకంతో ఆధార్ అనుసంధానం',
            'బ్యాంక్ ఖాతాకు ఆధార్ లింక్ (DBT అనుసంధానం) ఉండాలి'
          ],
          requiredDocuments: [
            'భూ యజమాని ఆధార్ కార్డు',
            'తాజా పట్టాదారు పాస్ పుస్తకం / 1B అడంగల్ నకలు',
            'బ్యాంక్ పాస్ పుస్తకం జిరాక్స్ (IFSC కోడ్‌తో)',
            'ఈ-కేవైసీ కోసం ఆధార్‌తో లింక్ అయిన మొబైల్ నంబర్'
          ],
          applicationGuidance: [
            'దశ 1: pmkisan.gov.in లో లేదా సమీప రైతు భరోసా కేంద్రంలో ఈ-కేవైసీ పూర్తి చేయండి.',
            'దశ 2: రెవెన్యూ అధికారి ఆమోదం కోసం పాస్ పుస్తకం నకలు సమర్పించండి.',
            'దశ 3: సమీప ప్రాథమిక సహకార సంఘం వద్ద పిఓఎస్ (PoS) ద్వారా సబ్సిడీ ఎరువులు పొందండి.'
          ],
          nearbyOffice: {
            name: 'గ్రామ సచివాలయం / మీ-సేవ కేంద్రం (#104)',
            distance: 'మీ గ్రామం నుండి 1.2 కి.మీ',
            operator: 'శ్రీ అమిత్ కుమార్ వర్మ (ధృవీకరించబడిన VLE)',
            contact: 'టోల్-ఫ్రీ: 1800-889-RURAL / 98765-43210',
            timings: 'సోమ–శని: ఉదయం 09:00 నుండి సాయంత్రం 05:30 వరకు',
            address: 'పంచాయతీ భవనం, మెయిన్ రోడ్డు, విశాఖపట్నం'
          },
          followUpSuggestions: [
            'నా 16వ విడత పీఎం కిసాన్ స్థితిని తనిఖీ చేయండి',
            '4% వడ్డీతో కిసాన్ క్రెడిట్ కార్డు (KCC) పొందడం ఎలా?',
            'పీఎం కుసుమ్ సోలార్ పంప్ పథకానికి దరఖాస్తు'
          ]
        },
        samplePrompts: ['ఎరువులు & విత్తన సబ్సిడీ', 'కిసాన్ క్రెడిట్ కార్డు', 'ఆరోగ్యశ్రీ హెల్త్ కార్డు', 'వృద్ధాప్య పింఛను']
      }
    },
    impactSection: {
      sectionBadge: 'క్షేత్రస్థాయి కొలవదగిన ప్రభావం',
      title: 'గ్రామీణ ప్రజాసేవల ఆధునికీకరణ',
      subtitle: 'ప్రభుత్వ సంక్షేమ పథకాలు మరియు పౌరుల మధ్య ఉన్న సమస్యలను పూర్తిగా తొలగించడం.',
      cards: [
        {
          id: 'service-discovery',
          title: 'సులభమైన పథకాల గుర్తింపు',
          subtitle: 'కార్యాలయాల చుట్టూ తిరగకుండా 3 సెకన్లలో సమాచారం',
          metric: '85%',
          metricLabel: 'పథకం కనుగొనే సమయంలో ఆదా',
          description: 'కఠినమైన పేర్లు గుర్తుంచుకోవలసిన అవసరం లేదు. మీ మాటల్లో అడిగి 450+ పథకాలను తక్షణమే తెలుసుకోండి.',
          badge: 'తక్షణ ఎంపిక'
        },
        {
          id: 'accessibility',
          title: 'మెరుగైన ప్రాప్యత',
          subtitle: 'చదువు రాని వారికీ అందుబాటులో సాంకేతికత',
          metric: '100%',
          metricLabel: 'వాయిస్ మరియు తెలుగు భాషా మద్దతు',
          description: 'మీ భాషలో మాట్లాడి అడగవచ్చు, తక్కువ ఇంటర్నెట్‌లో పనిచేస్తుంది, ఉచిత ఎస్ఎంఎస్ సౌకర్యం ఉంది.',
          badge: 'అందరికీ సేవ'
        },
        {
          id: 'understanding',
          title: 'స్పష్టమైన అవగాహన',
          subtitle: 'క్లిష్టమైన చట్టపరమైన భాష లేకుండా స్పష్టత',
          metric: '3.4x',
          metricLabel: 'మొదటిసారే దరఖాస్తు ఆమోదం',
          description: 'ప్రభుత్వ నిబంధనలను సులభమైన చెక్‌లిస్ట్‌గా మార్చి సరైన పత్రాలతో ఒకేసారి దరఖాస్తు చేసుకునేలా చేస్తుంది.',
          badge: 'తిరస్కరణ లేదు'
        },
        {
          id: 'centralized-info',
          title: 'కేంద్రీకృత సమాచారం',
          subtitle: 'విశ్వసనీయ సమాచార వేదిక',
          metric: '50+',
          metricLabel: 'ప్రభుత్వ పోర్టల్‌లు ఒకే చోట',
          description: 'వ్యవసాయం, ఆరోగ్యం, సాంఘిక సంక్షేమ విభాగాలను ఒకే వేదికపైకి తెచ్చి దళారులను నిర్మూలిస్తుంది.',
          badge: 'ఏకైక వనరు'
        }
      ]
    },
    verifiedKnowledgeBase: {
      sectionBadge: 'విశ్వసనీయత & పారదర్శకత',
      title: 'ధృవీకరించబడిన సమాచార వ్యవస్థ: 100% ఖచ్చితత్వ హామీ',
      subtitle: 'అధికారులు ధృవీకరించిన సమాచారం మాత్రమే పౌరులకు అందించే విధానం.',
      trustCallout: 'ఏఐ రూరల్ అందించే ప్రతి సమాచారం ప్రభుత్వ గెజిట్లు మరియు జిల్లా అధికారుల ద్వారా ఆమోదించబడింది.',
      pipeline: [
        {
          stepNumber: 1,
          title: 'పరిపాలనా ధృవీకరణ',
          role: 'నోడల్ అధికారులు & జిల్లా యంత్రాంగం',
          description: 'అధికారులు కొత్త పథకాలు, సబ్సిడీ రేట్లు మరియు చివరి తేదీలను ధృవీకరించి అప్‌డేట్ చేస్తారు.',
          securityPillar: 'అధికారుల ప్రత్యక్ష పరిశీలన',
          icon: 'UserCheck'
        },
        {
          stepNumber: 2,
          title: 'ధృవీకరించబడిన డేటాబేస్',
          role: 'సురక్షిత పాలసీ లెడ్జర్',
          description: 'పాత మరియు చెల్లని సమాచారం తొలగించబడి అధికారిక రికార్డులు భద్రపరచబడతాయి.',
          securityPillar: 'నమ్మకమైన సమాచార నిధి',
          icon: 'Database'
        },
        {
          stepNumber: 3,
          title: 'ఏఐ సమాధాన తయారీ',
          role: 'నియంత్రిత ఏఐ ఇంజిన్',
          description: 'ఏఐ కేవలం అధికారిక నిబంధనల ఆధారంగానే సరళమైన తెలుగులో సమాధానాలు ఇస్తుంది.',
          securityPillar: 'సొంత కల్పనలు లేని సమాధానం',
          icon: 'Cpu'
        },
        {
          stepNumber: 4,
          title: 'పౌరుడికి సేవ అందడం',
          role: 'రైతు & గ్రామ సచివాలయం',
          description: 'పౌరుడు సరైన పత్రాలతో సమీప కేంద్రానికి వెళ్లి నేరుగా లబ్ధి పొందుతారు.',
          securityPillar: 'దళారులు లేని నేరుగా లబ్ధి',
          icon: 'CheckCircle2'
        }
      ],
      guarantees: [
        { title: 'గెజిట్ అధికారిక రుజువు', desc: 'ప్రతి సమాధానానికి అధికారిక ప్రభుత్వ ఉత్తర్వు సంఖ్య జోడించబడుతుంది.' },
        { title: 'రోజువారీ DBT రేట్ల నవీకరణ', desc: 'కనీస మద్దతు ధర (MSP) మరియు ఖాతాలో జమ తేదీలు రోజూ అప్‌డేట్ అవుతాయి.' },
        { title: 'కేంద్ర సమయాల ధృవీకరణ', desc: 'గ్రామ సేవా కేంద్రం పనివేళలు మరియు పరికరాల పనితీరు ధృవీకరించబడుతుంది.' }
      ]
    }
  },
  bn: {
    chatDemo: {
      sectionBadge: 'ইন্টারেক্টিভ এআই চ্যাট সিমুলেশন',
      title: 'মাতৃভাষায় সরাসরি এআই পরামর্শ',
      subtitle: 'গ্রামীণ কৃষক কীভাবে নিজের ভাষায় প্রশ্ন করে কয়েক সেকেন্ডের মধ্যে সম্পূর্ণ সঠিক নির্দেশিকা পান তা দেখুন।',
      chatTitle: 'এআই রুর্যাল সহায়ক • লাইভ সেশন',
      onlineStatus: 'সরকারি ডাটাবেসের সাথে সংযুক্ত',
      placeholder: 'কৃষি ভর্তুকি, পেনশন বা যেকোনো প্রকল্প সম্পর্কে জিজ্ঞাসা করুন...',
      askAiBtn: 'জানতে চান',
      listeningText: 'আপনার কণ্ঠস্বর শোনা হচ্ছে...',
      audioReadoutLabel: 'উচ্চৈঃস্বরে শুনুন',
      stopAudioLabel: 'অডিও বন্ধ করুন',
      verifiedStamp: 'সরকারি গ্যাজেট #2026/AG-44 দ্বারা সত্যায়িত',
      demoData: {
        languageBadge: 'ভাষা: বাংলা (গ্রামীণ প্রেক্ষাপট)',
        dialectNote: 'উদ্দেশ্য: সার ও বীজ ভর্তুকি',
        defaultUserQuery: 'আমার আড়াই একর জমি আছে। এই খরিফ মৌসুমে সার ও বীজের জন্য আমি কী কী সরকারি সুবিধা পেতে পারি?',
        aiResponse: {
          greeting: 'নমস্কার! আপনার ২.৫ একর জমির পরিমাণ অনুযায়ী আপনি ক্ষুদ্র ও প্রান্তিক কৃষক শ্রেণীর অন্তর্ভুক্ত। আপনার প্রাপ্য সুবিধাগুলি নিম্নরূপ:',
          schemeName: 'প্রধানমন্ত্রী কিষাণ সম্মান নিধি (PM-KISAN) + ভর্তুকিযুক্ত সার ও বীজ বণ্টন',
          schemeDepartment: 'কৃষি ও কৃষক কল্যাণ মন্ত্রক, ভারত সরকার',
          badge: '১০০% যোগ্যতা ম্যাচ • সরাসরি ব্যাংক হস্তান্তর (DBT)',
          basicEligibility: [
            'আপনার নামে ২ হেক্টর পর্যন্ত নথিবদ্ধ কৃষি জমি',
            'জমির খতিয়ানের সাথে আধার কার্ডের সঠিক সংযোগ',
            'ব্যাংক একাউন্টে এনপিসিআই (NPCI) আধার সিডিং সক্রিয় থাকা'
          ],
          requiredDocuments: [
            'জমির মালিকের আধার কার্ড',
            'হালনাগাদ জমির পরচা বা খতিয়ান নকল',
            'ব্যাংক পাসবইয়ের প্রতিলিপি (IFSC কোড সহ)',
            'ই-কেওয়াইসির জন্য আধারের সাথে যুক্ত মোবাইল নম্বর'
          ],
          applicationGuidance: [
            'ধাপ ১: pmkisan.gov.in বা নিকটস্থ সিএসসি তথ্যমিত্র কেন্দ্রে বায়োমেট্রিক ই-কেওয়াইসি সম্পন্ন করুন।',
            'ধাপ ২: রাজস্ব আধিকারিকের অনুমোদনের জন্য খতিয়ানের প্রতিলিপি জমা দিন।',
            'ধাপ ৩: নিকটস্থ কৃষি সমবায় সমিতি থেকে পিওএস (PoS) মেশিনের মাধ্যমে ভর্তুকিযুক্ত সার সংগ্রহ করুন।'
          ],
          nearbyOffice: {
            name: 'গ্রাম পঞ্চায়েত তথ্যমিত্র কেন্দ্র (CSC Kendra #104)',
            distance: 'আপনার গ্রাম থেকে ১.২ কিমি দূরে',
            operator: 'শ্রী অমিত কুমার বর্মা (অনুমোদিত ভিএলই)',
            contact: 'টোল-ফ্রি: 1800-889-RURAL / 98765-43210',
            timings: 'সোম–শনি: সকাল ০৯:০০ থেকে বিকেল ০৫:৩০ পর্যন্ত',
            address: 'পঞ্চায়েত ভবন, প্রধান সড়ক, কলকাতা গ্রামীণ'
          },
          followUpSuggestions: [
            'আমার ১৬তম কিস্তির অবস্থা পরীক্ষা করুন',
            '৪% সুদে কিষাণ ক্রেডিট কার্ড (KCC) পাওয়ার নিয়ম',
            'পিএম কুসুম সোলার পাম্পে আবেদনের তথ্য'
          ]
        },
        samplePrompts: ['সার ও বীজ ভর্তুকি', 'কৃষি ঋণ কার্ড (KCC)', 'স্বাস্থ্য সাথী বা আয়ুষ্মান কার্ড', 'বার্ধক্য পেনশন']
      }
    },
    impactSection: {
      sectionBadge: 'বাস্তব ও পরিমাপযোগ্য প্রভাব',
      title: 'গ্রামীণ ভারতে সরকারি সেবার রূপান্তর',
      subtitle: 'সরকারি জনকল্যাণমূলক নীতি এবং গ্রামীণ মানুষের প্রাপ্তির মধ্যকার দূরত্ব শূন্য করা।',
      cards: [
        {
          id: 'service-discovery',
          title: 'সহজ প্রকল্প অনুসন্ধান',
          subtitle: 'অফিসের চক্কর বাদ দিয়ে ৩ সেকেন্ডে উত্তর',
          metric: '85%',
          metricLabel: 'প্রকল্প অনুসন্ধানের সময় সাশ্রয়',
          description: 'কঠিন সরকারি নাম মুখস্থ রাখার প্রয়োজন নেই। মুখের ভাষায় জিজ্ঞাসা করে ৪৫০+ প্রকল্পের তথ্য তৎক্ষণাৎ জেনে নিন।',
          badge: 'তাত্ক্ষণিক মিল'
        },
        {
          id: 'accessibility',
          title: 'উন্নত ও সহজলভ্য পরিষেবা',
          subtitle: 'ডিজিটাল ও সাক্ষরতার ব্যবধান দূরীকরণ',
          metric: '100%',
          metricLabel: 'ভয়েস ও বাংলা ভাষার পূর্ণ সমর্থন',
          description: 'মুখে বলে জানতে পারেন, ধীরগতির ২জি ইন্টারনেটেও কাজ করে এবং সাধারণ ফোনেও বিনামূল্যে এসএমএস পাওয়া যায়।',
          badge: 'সবার জন্য উন্মুক্ত'
        },
        {
          id: 'understanding',
          title: 'প্রকল্পের স্পষ্ট বোঝাপড়া',
          subtitle: 'আইনি জটিলতা মুক্ত স্পষ্ট নির্দেশিকা',
          metric: '3.4x',
          metricLabel: 'প্রথমবারেই আবেদন গৃহীত হওয়ার হার',
          description: 'অফিসিয়াল নীতিগুলিকে সহজ তালিকায় রূপান্তর করা হয় যাতে নাগরিক প্রথম সফরেই সঠিক কাগজপত্র নিয়ে পৌঁছাতে পারেন।',
          badge: 'প্রত্যাখ্যান মুক্ত'
        },
        {
          id: 'centralized-info',
          title: 'একক সমন্বিত তথ্য ভাণ্ডার',
          subtitle: 'নির্ভরযোগ্য সরকারি তথ্যের উৎস',
          metric: '50+',
          metricLabel: 'সরকারি পোর্টাল একত্রিত এক জায়গায়',
          description: 'কৃষি, স্বাস্থ্য ও সমাজকল্যাণকে একটি ছাদের তলায় এনে দালালদের দৌরাত্ম্য চিরতরে বন্ধ করা।',
          badge: 'একক উৎস'
        }
      ]
    },
    verifiedKnowledgeBase: {
      sectionBadge: 'বিশ্বাসযোগ্যতা ও স্বচ্ছতার কাঠামো',
      title: 'সত্যায়িত জ্ঞান ভাণ্ডার: ১০০% সঠিক তথ্যের নিশ্চয়তা',
      subtitle: 'প্রশাসনিক আধিকারিকদের দ্বারা অনুমোদিত তথ্যই কেবল নাগরিকদের কাছে পৌঁছায়।',
      trustCallout: 'এআই রুর্যাল প্রদত্ত প্রতিটি শব্দ সরকারি গ্যাজেট এবং জেলা নোডাল আধিকারিকদের দ্বারা সম্পূর্ণ যাচাইকৃত।',
      pipeline: [
        {
          stepNumber: 1,
          title: 'প্রশাসনিক যাচাইকরণ',
          role: 'মন্ত্রকের আধিকারিক ও জেলা প্রশাসন',
          description: 'জেলা আধিকারিকরা নতুন বিজ্ঞপ্তি, ভর্তুকির হার এবং শেষ তারিখ খতিয়ে দেখে সিস্টেমে অনুমোদন করেন।',
          securityPillar: 'আধিকারিকদের প্রত্যক্ষ নজরদারি',
          icon: 'UserCheck'
        },
        {
          stepNumber: 2,
          title: 'সত্যায়িত তথ্য ভাণ্ডার',
          role: 'সুরক্ষিত পলিসি ডাটাবেস',
          description: 'পুরনো ও ভুল তথ্য অবিলম্বে বাতিল করে শুধুমাত্র কার্যকরী সরকারি আদেশ সংরক্ষিত থাকে।',
          securityPillar: 'অপরিবর্তনীয় তথ্য ব্যাংক',
          icon: 'Database'
        },
        {
          stepNumber: 3,
          title: 'এআই উত্তর প্রণয়ন',
          role: 'সুরক্ষিত এআই অ্যালগরিদম',
          description: 'এআই মডেল কেবল অনুমোদিত তথ্যের ভিত্তিতে কোনো মনগড়া কথা না বলে সহজ বাংলায় উত্তর দেয়।',
          securityPillar: 'ভ্রান্তিহীন ও সঠিক উত্তর',
          icon: 'Cpu'
        },
        {
          stepNumber: 4,
          title: 'নাগরিক সেবা প্রাপ্তি',
          role: 'গ্রামীণ মানুষ ও সিএসসি কেন্দ্র',
          description: 'নাগরিক সঠিক নথিপত্র নিয়ে নিকটস্থ পঞ্চায়েত কেন্দ্রে গিয়ে সরাসরি কোনো দালাল ছাড়া সুবিধা পান।',
          securityPillar: 'দালালমুক্ত সরাসরি সেবা',
          icon: 'CheckCircle2'
        }
      ],
      guarantees: [
        { title: 'অফিসিয়াল গ্যাজেট প্রমাণ', desc: 'প্রতিটি উত্তরের সাথে সরকারি বিজ্ঞপ্তি নম্বর এবং অফিশিয়াল লিংক দেওয়া থাকে।' },
        { title: 'দৈনিক ডিবিটি রেট আপডেট', desc: 'ন্যূনতম সহায়ক মূল্য (MSP) এবং কিস্তির তারিখ প্রতিদিন স্বয়ংক্রিয়ভাবে আপডেট হয়।' },
        { title: 'ভিএলই কেন্দ্র নিশ্চিতকরণ', desc: 'স্থানীয় পঞ্চায়েত তথ্যমিত্র কেন্দ্রের সময়সূচি এবং বায়োমেট্রিক মেশিনের স্থিতি যাচাইকৃত।' }
      ]
    }
  }
};
