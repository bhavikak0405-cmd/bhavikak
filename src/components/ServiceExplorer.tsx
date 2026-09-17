import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Wheat, 
  HeartPulse, 
  GraduationCap, 
  Briefcase, 
  Landmark, 
  FileText, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  ChevronRight, 
  Search,
  Sparkles,
  ShieldCheck,
  Phone,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Language } from '../types';

interface ServiceItem {
  id: string;
  name: string;
  department: string;
  badge: string;
  benefit: string;
  eligibility: string;
  documents: string[];
  helpline: string;
  officialPortal: string;
  sampleStatus: string;
}

interface ServiceCategory {
  id: string;
  iconName: string;
  emoji: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  services: ServiceItem[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'gov-schemes',
    iconName: 'Building2',
    emoji: '🏛️',
    title: {
      en: 'Government Schemes',
      hi: 'सरकारी योजनाएं',
      ta: 'அரசு நலத்திட்டங்கள்',
      te: 'ప్రభుత్వ పథకాలు',
      bn: 'সরকারি প্রকল্পসমূহ'
    },
    description: {
      en: 'Central and state welfare programs, direct income assistance, housing, and social security.',
      hi: 'केंद्रीय और राज्य कल्याण कार्यक्रम, प्रत्यक्ष आय सहायता, आवास और सामाजिक सुरक्षा।',
      ta: 'மத்திய மற்றும் மாநில நலத்திட்டங்கள், நேரடி வருவாய் உதவி மற்றும் இலவச வீட்டு வசதி.',
      te: 'కేంద్ర మరియు రాష్ట్ర సంక్షేమ కార్యక్రమాలు, ప్రత్యక్ష నగదు బదిలీ మరియు గృహ నిర్మాణం.',
      bn: 'কেন্দ্রীয় ও রাজ্য কল্যাণমূলক কর্মসূচি, প্রত্যক্ষ আর্থিক সহায়তা এবং আবাসন।'
    },
    services: [
      {
        id: 'pm-kisan',
        name: 'PM-Kisan Samman Nidhi',
        department: 'Ministry of Agriculture & Farmers Welfare',
        badge: '100% DBT Funded',
        benefit: '₹6,000 / year in 3 equal installments of ₹2,000 directly transferred to bank account',
        eligibility: 'All landholding farmer families with cultivable land in their name. Excluding institutional owners & high income tax payers.',
        documents: ['Aadhaar Card linked to Mobile', 'Land Ownership Records (Khatauni / RoR)', 'Active Bank Passbook (NPCI Seeded)'],
        helpline: '155261 / 1800-115-526',
        officialPortal: 'https://pmkisan.gov.in',
        sampleStatus: 'Active • 17th Installment Live'
      },
      {
        id: 'pmay-g',
        name: 'Pradhan Mantri Awas Yojana - Gramin (PMAY-G)',
        department: 'Ministry of Rural Development',
        badge: 'Housing Support',
        benefit: 'Financial assistance of ₹1,20,000 in plains and ₹1,30,000 in hilly/difficult regions for pucca house construction',
        eligibility: 'Houseless families and families living in kutcha/dilapidated houses as identified in SECC 2011 / Awas+ survey.',
        documents: ['Aadhaar of all family members', 'Job Card Number (MGNREGA)', 'Bank Account details', 'Land possession certificate'],
        helpline: '1800-11-6446',
        officialPortal: 'https://pmayg.nic.in',
        sampleStatus: 'Active • Direct Geo-tagged DBT'
      },
      {
        id: 'nsap-pension',
        name: 'National Social Assistance Programme (NSAP)',
        department: 'Ministry of Rural Development',
        badge: 'Social Pension',
        benefit: 'Monthly pension of ₹500 - ₹1,500 for senior citizens, destitute widows, and persons with severe disabilities.',
        eligibility: 'BPL rural citizens aged 60+ years, widowed women aged 40-79, or persons with 80%+ disability.',
        documents: ['BPL Certificate / Ration Card', 'Age Proof / Voter ID', 'Disability Certificate (for IGNDPS)', 'Bank Passbook'],
        helpline: '011-2436-0678',
        officialPortal: 'https://nsap.nic.in',
        sampleStatus: 'Active • Monthly Aadhaar DBT'
      }
    ]
  },
  {
    id: 'agriculture',
    iconName: 'Wheat',
    emoji: '🌾',
    title: {
      en: 'Agriculture',
      hi: 'कृषि एवं उपज',
      ta: 'விவசாயம் & மானியங்கள்',
      te: 'వ్యవసాయం & సబ్సిడీలు',
      bn: 'কৃষি ও ফসল সহায়তা'
    },
    description: {
      en: 'Subsidized fertilizers, crop insurance, soil testing, machinery hiring, and MSP procurement.',
      hi: 'सब्सिडी वाले उर्वरक, फसल बीमा, मृदा परीक्षण, कृषि यंत्र और समर्थन मूल्य खरीद।',
      ta: 'மானிய உரங்கள், பயிர் காப்பீடு, மண் பரிசோதனை மற்றும் வேளாண் கருவிகள்.',
      te: 'రాయితీ ఎరువులు, పంట బీమా, భూసార పరీక్ష మరియు యంత్రాల కొనుగోలు సహాయం.',
      bn: 'ভর্তুকিযুক্ত সার, শস্য বীমা, মাটি পরীক্ষা এবং আধুনিক কৃষি যন্ত্রাংশ সহায়তা।'
    },
    services: [
      {
        id: 'dap-urea-subsidy',
        name: 'Nutrient-Based Fertilizer Subsidy (NBS)',
        department: 'Department of Fertilizers, MoC&F',
        badge: 'Direct Subsidy',
        benefit: 'Subsidized Urea at ₹266.50/bag and DAP at ₹1,350/bag via Aadhaar-linked PoS machines at village PACs/IFFCO.',
        eligibility: 'Every practicing farmer holding land or tenant farming agreements. No land cap on buying standard bags.',
        documents: ['Aadhaar Card of Farmer', 'Kisan Credit Card (Optional for quick verification)', 'Land Record Survey Number'],
        helpline: '1800-11-1967',
        officialPortal: 'https://fert.nic.in',
        sampleStatus: 'In Stock • Verified at Local PACS'
      },
      {
        id: 'pmfby',
        name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
        department: 'Ministry of Agriculture',
        badge: 'Crop Protection',
        benefit: 'Comprehensive risk insurance covering post-harvest and standing crop losses. Farmer premium only 1.5% - 2.0%.',
        eligibility: 'All farmers growing notified crops in notified areas, including loanee and non-loanee farmers, sharecroppers.',
        documents: ['Land RoR / Khatauni / Land Possession Certificate', 'Sowing Certificate from Gram Sevak', 'Bank Passbook', 'Aadhaar'],
        helpline: '1800-180-1551 (Kisan Call Centre)',
        officialPortal: 'https://pmfby.gov.in',
        sampleStatus: 'Kharif & Rabi Windows Active'
      },
      {
        id: 'soil-health-card',
        name: 'Soil Health Card & Nutrient Advisory',
        department: 'Department of Agriculture & Farmers Welfare',
        badge: 'Free Testing',
        benefit: 'Free testing of 12 chemical and micro-nutrients of village soil samples, customized dosage chart for crops.',
        eligibility: 'Open to all farmland owners and cultivators across all Gram Panchayats.',
        documents: ['Land Survey Number', 'Farmer Aadhaar Number', 'Soil Sample collected by Gram Panchayat Krishi Mitra'],
        helpline: '1800-180-1551',
        officialPortal: 'https://soilhealth.dac.gov.in',
        sampleStatus: 'Cycle 3 Sample Testing On'
      }
    ]
  },
  {
    id: 'healthcare',
    iconName: 'HeartPulse',
    emoji: '🏥',
    title: {
      en: 'Healthcare',
      hi: 'स्वास्थ्य एवं मातृत्व',
      ta: 'மருத்துவ நலம் & தாய்மை',
      te: 'ఆరోగ్యం & వైద్య సేవలు',
      bn: 'স্বাস্থ্য ও চিকিৎসা সেবা'
    },
    description: {
      en: 'Ayushman Bharat cashless treatment, maternal incentives, telemedicine, and free medicines.',
      hi: 'आयुष्मान भारत कैशलेस इलाज, जननी सुरक्षा योजना, ई-संजीवनी टेलीमेडिसिन और मुफ्त दवाएं।',
      ta: 'ரூ. 5 லட்சம் மருத்துவ காப்பீடு, தாய்-சேய் நலன், மற்றும் இலவச மருந்துகள்.',
      te: 'ఉచిత వైద్య చికిత్స, జననీ సురక్ష, ఈ-సంజీవని మరియు ఉచిత మందుల పంపిణీ.',
      bn: 'বিনামূল্যে ৫ লাখ টাকার চিকিৎসা বীমা, মা ও শিশু সুরক্ষা এবং ই-সঞ্জীবনী।'
    },
    services: [
      {
        id: 'pm-jay',
        name: 'Ayushman Bharat PM-JAY',
        department: 'National Health Authority (NHA)',
        badge: '₹5 Lakhs / Family Cover',
        benefit: '₹5,00,000 per family per year for secondary and tertiary cashless hospitalization at empanelled public & private hospitals.',
        eligibility: 'Deprived rural families listed under SECC 2011 criteria (D1 to D7 categories) or with Ayushman Vaya Vandana card for 70+.',
        documents: ['Ration Card (NFSA/State)', 'Aadhaar Card (Biometric verified at PHC/CSC)', 'Mobile Number'],
        helpline: '14555 / 1800-111-565',
        officialPortal: 'https://beneficiary.nha.gov.in',
        sampleStatus: 'Ayushman Golden Card Instant Download'
      },
      {
        id: 'esanjeevani',
        name: 'eSanjeevani Gramin Tele-Consultation',
        department: 'Ministry of Health & Family Welfare',
        badge: 'Free Video Doctor',
        benefit: 'Free tele-consultations with specialist doctors and MBBS doctors directly from Health & Wellness Centers (HWC/PHC).',
        eligibility: 'Universal access for all rural villagers via local ASHA/CHO worker or personal smartphone.',
        documents: ['Basic Patient Name & Age', 'Mobile OTP', 'Previous prescriptions/reports if any'],
        helpline: '1075 (Toll Free National Health)',
        officialPortal: 'https://esanjeevani.mohfw.gov.in',
        sampleStatus: 'Operational Mon-Sat at Village HWCs'
      }
    ]
  },
  {
    id: 'education',
    iconName: 'GraduationCap',
    emoji: '🎓',
    title: {
      en: 'Education',
      hi: 'शिक्षा एवं छात्रवृत्ति',
      ta: 'கல்வி & உதவித்தொகை',
      te: 'విద్య & స్కాలర్‌షిప్‌లు',
      bn: 'শিক্ষা ও বৃত্তি'
    },
    description: {
      en: 'Free schooling, midday meals, pre/post-matric scholarships, and Navodaya residential schools.',
      hi: 'मुफ्त स्कूली शिक्षा, मध्याह्न भोजन, राष्ट्रीय छात्रवृत्ति और नवोदय विद्यालय प्रवेश।',
      ta: 'இலவச பள்ளி கல்வி, சத்துணவு திட்டம், மற்றும் தேசிய கல்வி உதவித்தொகை.',
      te: 'ఉచిత పాఠశాల విద్య, మధ్యాహ్న భోజనం మరియు నవోదయ రెసిడెన్షియల్ ప్రవేశాలు.',
      bn: 'বিনামূল্যে বিদ্যালয় শিক্ষা, মিড-ডে মিল এবং জাতীয় মেধা বৃত্তি।'
    },
    services: [
      {
        id: 'nsp-scholarships',
        name: 'National Scholarship Portal (NSP Gramin)',
        department: 'Ministry of Social Justice & Tribal Affairs',
        badge: 'Direct School Grant',
        benefit: '₹2,500 - ₹20,000 annual direct bank transfer for textbooks, boarding, and tuition fee reimbursements.',
        eligibility: 'Students from SC/ST/OBC/EWS families studying in Class 1 to 12 with family income under ₹2.5 Lakh/year.',
        documents: ['Student Aadhaar / Parent Aadhaar', 'School Bonafide Certificate', 'Income & Caste Certificate', 'Bank Passbook'],
        helpline: '0120-6619540',
        officialPortal: 'https://scholarships.gov.in',
        sampleStatus: 'NSP One-Time Registration (OTR) Active'
      },
      {
        id: 'jnv-admission',
        name: 'Jawahar Navodaya Vidyalaya (JNV) Selection',
        department: 'Navodaya Vidyalaya Samiti, MoE',
        badge: 'Free Residential CBSE',
        benefit: '100% free quality CBSE residential education, boarding, lodging, uniforms, and sports gear from Class 6 to 12.',
        eligibility: '75% seats strictly reserved for rural children who have completed Class 5 in government recognized rural schools.',
        documents: ['Class 5 marksheet/admit card', 'Birth certificate', 'Rural Area Certificate signed by BDO/Panchayat', 'Aadhaar'],
        helpline: '0120-2405968',
        officialPortal: 'https://navodaya.gov.in',
        sampleStatus: 'Class 6 & 9 JNVST Forms Open'
      }
    ]
  },
  {
    id: 'employment',
    iconName: 'Briefcase',
    emoji: '💼',
    title: {
      en: 'Employment',
      hi: 'रोजगार एवं कौशल',
      ta: 'வேலைவாய்ப்பு & தொழிற்பயிற்சி',
      te: 'ఉపాధి & నైపుణ్యాభివృద్ధి',
      bn: 'কর্মসংস্থান ও দক্ষতা উন্নয়ন'
    },
    description: {
      en: 'Guaranteed 100-day wage work, Lakhpati Didi self-help training, and rural youth skills.',
      hi: '100 दिन का गारंटीशुदा रोजगार (मनरेगा), लखपति दीदी प्रशिक्षण और ग्रामीण कौशल विकास।',
      ta: '100 நாள் வேலை உறுதித் திட்டம் மற்றும் மகளிர் சுயஉதவிக் குழு தொழிற்பயிற்சி.',
      te: 'ఉపాధి హామీ పథకం (నరేగా 100 రోజులు) మరియు స్వయం సహాయక బృందాల శిక్షణ.',
      bn: 'মনরেগা ১০০ দিনের কাজের নিশ্চয়তা এবং গ্রামীণ যুব দক্ষতা প্রশিক্ষণ।'
    },
    services: [
      {
        id: 'mgnrega',
        name: 'Mahatma Gandhi NREGA (Job Card)',
        department: 'Ministry of Rural Development',
        badge: '100-Day Legal Guarantee',
        benefit: 'Guaranteed 100 days of wage employment in a financial year for rural adult members willing to do unskilled manual work.',
        eligibility: 'All adult members of a rural household residing within Gram Panchayat territory.',
        documents: ['Household photograph', 'Aadhaar Card', 'Bank/Post Office Account details', 'Ration Card copy'],
        helpline: '1800-111-555',
        officialPortal: 'https://nrega.nic.in',
        sampleStatus: 'ABPS (Aadhaar Based Payment) Enabled'
      },
      {
        id: 'lakhpati-didi',
        name: 'Lakhpati Didi SHG Initiative (DAY-NRLM)',
        department: 'Ministry of Rural Development',
        badge: 'Women Micro-Enterprise',
        benefit: 'Technical training, revolving funds, drone operating lessons (Namo Drone Didi), and collateral-free bank linkage for women.',
        eligibility: 'Active female members of registered village Self-Help Groups (SHGs) under Gram Panchayat VOs.',
        documents: ['SHG Membership Passbook', 'Aadhaar Card', 'Individual Savings Account details'],
        helpline: '1800-11-0001',
        officialPortal: 'https://aajeevika.gov.in',
        sampleStatus: 'Training Batches at Block Level'
      }
    ]
  },
  {
    id: 'financial',
    iconName: 'Landmark',
    emoji: '🏦',
    title: {
      en: 'Financial Services',
      hi: 'बैंकिंग एवं ऋण',
      ta: 'வங்கி & கடனுதவி',
      te: 'బ్యాంకింగ్ & ఆర్థిక సేవలు',
      bn: 'ব্যাংকিং ও আর্থিক পরিষেবা'
    },
    description: {
      en: 'Kisan Credit Card at 4% interest, Jan Dhan accounts, Atal Pension, and low-cost insurance.',
      hi: '4% ब्याज पर किसान क्रेडिट कार्ड, जन धन खाता, अटल पेंशन और ₹20 का दुर्घटना बीमा।',
      ta: 'குறைந்த வட்டியில் விவசாய கடன் (KCC) மற்றும் ஜன தன் பூஜ்ஜிய இருப்பு கணக்கு.',
      te: 'రైతు క్రెడిట్ కార్డు (4% వడ్డీ), ప్రధానమంత్రి జన్ ధన్ యోజన మరియు అటల్ పెన్షన్.',
      bn: 'কম সুদে কিষাণ ক্রেডিট কার্ড, জন ধন যোজনা এবং নামমাত্র খরচে বীমা।'
    },
    services: [
      {
        id: 'kcc-card',
        name: 'Kisan Credit Card (KCC Loan)',
        department: 'Department of Financial Services, MoF',
        badge: 'Effective 4% Interest',
        benefit: 'Short-term credit up to ₹3,00,000 for crop cultivation with 3% prompt repayment incentive (effective 4% per annum).',
        eligibility: 'All farmers, individual/joint borrowers, tenant farmers, oral lessees, and SHGs of farmers.',
        documents: ['Land record copy (Khatauni) certified by Revenue authority', 'Crop cropping pattern proof', 'Aadhaar & PAN'],
        helpline: '1800-180-1551',
        officialPortal: 'https://myscheme.gov.in/schemes/kcc',
        sampleStatus: 'Zero Processing Fee up to ₹1.6 Lakh'
      },
      {
        id: 'apy',
        name: 'Atal Pension Yojana (APY)',
        department: 'PFRDA / Ministry of Finance',
        badge: 'Guaranteed Life Pension',
        benefit: 'Guaranteed lifelong monthly pension of ₹1,000 to ₹5,000 from age 60, with pension to spouse and corpus to nominee.',
        eligibility: 'Any citizen aged 18 to 40 years holding a savings bank account and not an income tax payer.',
        documents: ['Bank Savings Account / Post Office Account', 'Aadhaar Card', 'Mobile Number for SMS alerts'],
        helpline: '1800-110-069',
        officialPortal: 'https://npscra.nsdl.co.in',
        sampleStatus: 'Auto-Debit from Village Bank/CSC'
      }
    ]
  },
  {
    id: 'documents',
    iconName: 'FileText',
    emoji: '📄',
    title: {
      en: 'Public Documents',
      hi: 'प्रमाण पत्र एवं दस्तावेज',
      ta: 'அரசு சான்றிதழ்கள் & ஆவணங்கள்',
      te: 'ప్రజా పత్రాలు & ధృవీకరణలు',
      bn: 'সরকারি নথি ও সনদপত্র'
    },
    description: {
      en: 'Land records (Khatauni/RoR), Ration Card updates, Income/Caste certificates, and Aadhaar.',
      hi: 'डिजिटल खतौनी/भूलेख, राशन कार्ड ई-केवाईसी, जाति व आय प्रमाण पत्र और आधार मोबाइल लिंक।',
      ta: 'பட்டா-சிட்டா நில ஆவணங்கள், குடும்ப அட்டை, ஜாதி மற்றும் வருமான சான்றிதழ்.',
      te: 'భూమి రికార్డులు (పట్టాదారు పాస్‌బుక్), రేషన్ కార్డు మరియు కుల, ఆదాయ ధృవీకరణ పత్రాలు.',
      bn: 'ডিজিটাল খতিয়ান, রেশন কার্ড আপডেট, জাতি ও আয়ের সরকারি সার্টিফিকেট।'
    },
    services: [
      {
        id: 'bhulekh-ror',
        name: 'Digital Land Records (Bhulekh / RoR)',
        department: 'Department of Land Resources',
        badge: 'Instant QR Certified',
        benefit: 'Download legally certified Khatauni / Record of Rights (RoR) / Patta copy without paying bribes or visiting Tehsil.',
        eligibility: 'All agricultural landowners in digital survey covered Gram Panchayats.',
        documents: ['District, Tehsil & Village Name', 'Khasra / Gata Number or Farmer Name'],
        helpline: '1800-180-0111',
        officialPortal: 'https://dilrmp.gov.in',
        sampleStatus: 'Free Online View • ₹15 Certified CSC Copy'
      },
      {
        id: 'ration-card-ekyc',
        name: 'Ration Card E-KYC & Member Addition',
        department: 'Department of Food & Public Distribution',
        badge: 'One Nation One Ration',
        benefit: 'Collect free subsidized food grains (rice/wheat) anywhere in India and add newborn/spouse names to ration card.',
        eligibility: 'Antyodaya Anna Yojana (AAY) and Priority Household (PHH) cardholders.',
        documents: ['Ration Card Number', 'Aadhaar Cards of all active family members', 'Fingerprint verification at Fair Price Shop (FPS)'],
        helpline: '1967 (National Food Helpline)',
        officialPortal: 'https://nfsa.gov.in',
        sampleStatus: '100% Biometric Seeding Required'
      }
    ]
  },
  {
    id: 'nearby-centers',
    iconName: 'MapPin',
    emoji: '📍',
    title: {
      en: 'Nearby Services',
      hi: 'नजदीकी सेवा केंद्र',
      ta: 'அருகிலுள்ள சேவை மையங்கள்',
      te: 'సమీప సేవా కేంద్రాలు',
      bn: 'নিকটবর্তী সহায়তা কেন্দ্র'
    },
    description: {
      en: 'Common Service Centers (CSC), Primary Health Centers, Krishi Vigyan Kendras, and Post Offices.',
      hi: 'कॉमन सर्विस सेंटर (सीएससी), प्राथमिक स्वास्थ्य केंद्र, कृषि विज्ञान केंद्र और डाकघर बैंक।',
      ta: 'இ-சேவை மையங்கள், ஆரம்ப சுகாதார நிலையங்கள் மற்றும் வேளாண்மை அறிவியல் மையங்கள்.',
      te: 'కామన్ సర్వీస్ సెంటర్లు (CSC), ప్రాథమిక ఆరోగ్య కేంద్రాలు మరియు తపాలా కార్యాలయాలు.',
      bn: 'কমন সার্ভিস সেন্টার (সিএসসি), স্বাস্থ্য কেন্দ্র এবং কৃষি বিজ্ঞান কেন্দ্র।'
    },
    services: [
      {
        id: 'csc-kendra',
        name: 'Digital India CSC Kendra (VLE Center)',
        department: 'Ministry of Electronics & IT',
        badge: 'Gram Panchayat Hub',
        benefit: 'Assisted biometric services, DBT bank cash withdrawals (AePS), certificate applications, and utility bills.',
        eligibility: 'Open to all village residents within 2-3 km walking radius.',
        documents: ['Original Aadhaar Card', 'Mobile Phone for OTP', 'Relevant Scheme Application number'],
        helpline: '14599 (CSC Helpdesk)',
        officialPortal: 'https://locator.csccloud.in',
        sampleStatus: 'Walk-in Open • Mon-Sat 9 AM - 6 PM'
      },
      {
        id: 'phc-clinic',
        name: 'Primary Health Centre (PHC) & HWC',
        department: 'State Health Department',
        badge: 'Free Primary Care',
        benefit: 'Free doctor consultation, essential medications, mother and child immunization, and emergency maternal ambulance (108).',
        eligibility: 'Free universal public healthcare for all residents.',
        documents: ['OPD Registration Slip (Free)', 'Ayushman Card (for higher referrals)'],
        helpline: '108 (Ambulance) / 104 (Health Advice)',
        officialPortal: 'https://nhm.gov.in',
        sampleStatus: '24x7 Maternity & Emergency Open'
      }
    ]
  }
];

interface ServiceExplorerProps {
  currentLang: Language;
  onSelectServiceForGuidance?: (serviceId: string) => void;
}

export const ServiceExplorer: React.FC<ServiceExplorerProps> = ({ 
  currentLang,
  onSelectServiceForGuidance 
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('gov-schemes');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCategory = SERVICE_CATEGORIES.find(c => c.id === activeCategoryId) || SERVICE_CATEGORIES[0];

  const filteredServices = activeCategory.services.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.benefit.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.eligibility.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getHeadingText = () => {
    switch (currentLang) {
      case 'hi':
        return {
          badge: 'सेवा एक्सप्लोरर',
          title: 'ग्रामीण लोक सेवा श्रेणियां',
          subtitle: 'कृषि, स्वास्थ्य, शिक्षा, पेंशन और सरकारी दस्तावेजों की विस्तृत सूची। सीधे पात्रता और आवश्यक कागजात जांचें।'
        };
      case 'ta':
        return {
          badge: 'சேவை வழிகாட்டி',
          title: 'கிராமப்புற சேவை பிரிவுகள்',
          subtitle: 'வேளாண்மை, மருத்துவம், கல்வி மற்றும் அரசு நலத்திட்டங்களை ஒரே இடத்தில் கண்டறியுங்கள்.'
        };
      case 'te':
        return {
          badge: 'సేవా అన్వేషణ',
          title: 'గ్రామీణ సేవా విభాగాలు',
          subtitle: 'వ్యవసాయం, ఆరోగ్యం, విద్య మరియు సంక్షేమ పథకాలను సులభంగా పొందండి.'
        };
      case 'bn':
        return {
          badge: 'পরিষেবা অন্বেষণ',
          title: 'গ্রামীণ জনসেবা বিভাগ',
          subtitle: 'কৃষি, স্বাস্থ্য, শিক্ষা এবং সামাজিক প্রকল্পের তথ্য সহজেই জানুন।'
        };
      case 'en':
      default:
        return {
          badge: 'Service Explorer',
          title: 'Explore Rural Public Services',
          subtitle: 'Browse central & state welfare programs, agricultural subsidies, healthcare, education, and certified documents tailored for rural citizens.'
        };
    }
  };

  const labels = getHeadingText();

  return (
    <section 
      id="services-explorer" 
      className="py-16 md:py-24 bg-[#F9FAF8] border-b border-stone-200/80 scroll-mt-14 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <Layers className="w-4 h-4 text-emerald-700" />
            <span>{labels.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            {labels.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            {labels.subtitle}
          </p>
        </div>

        {/* 8 Category Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 mb-10">
          {SERVICE_CATEGORIES.map((category) => {
            const isSelected = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                id={`category-tab-${category.id}`}
                onClick={() => {
                  setActiveCategoryId(category.id);
                  setSearchQuery('');
                }}
                className={`p-3.5 sm:p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-200 border relative ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-md shadow-emerald-900/20 scale-[1.02] ring-2 ring-emerald-600/30'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-300 hover:bg-stone-50/80 shadow-2xs'
                }`}
              >
                <span className="text-2xl sm:text-3xl mb-1.5 block">{category.emoji}</span>
                <span className={`text-xs font-bold leading-tight line-clamp-2 ${isSelected ? 'text-white' : 'text-stone-800'}`}>
                  {category.title[currentLang] || category.title.en}
                </span>
                {isSelected && (
                  <motion.div 
                    layoutId="activeCategoryDot"
                    className="w-1.5 h-1.5 rounded-full bg-amber-400 absolute bottom-1.5"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Category Header Card with In-Category Search */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="text-3xl sm:text-4xl p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
              {activeCategory.emoji}
            </span>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                {activeCategory.title[currentLang] || activeCategory.title.en}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-normal max-w-xl">
                {activeCategory.description[currentLang] || activeCategory.description.en}
              </p>
            </div>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search in this category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
            />
          </div>
        </div>

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  className="rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-emerald-500/40"
                >
                  {/* Top Details */}
                  <div className="p-6">
                    {/* Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        {service.badge}
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-stone-400">
                        {service.sampleStatus}
                      </span>
                    </div>

                    {/* Scheme Name */}
                    <h4 className="font-display text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors mb-1">
                      {service.name}
                    </h4>
                    <p className="text-xs text-stone-500 font-medium mb-4">
                      {service.department}
                    </p>

                    {/* Key Benefit Highlight */}
                    <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block mb-0.5">
                        Key Entitlement & Support
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-amber-950 leading-snug">
                        {service.benefit}
                      </p>
                    </div>

                    {/* Eligibility Summary */}
                    <div className="mb-4">
                      <span className="text-xs font-bold text-stone-700 block mb-1">
                        Basic Eligibility:
                      </span>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {service.eligibility}
                      </p>
                    </div>

                    {/* Required Documents checklist */}
                    <div>
                      <span className="text-xs font-bold text-stone-700 block mb-1.5">
                        Essential Documents:
                      </span>
                      <ul className="space-y-1">
                        {service.documents.map((doc, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-1.5 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-4 bg-stone-50/80 border-t border-stone-200/80 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                      <Phone className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="font-semibold text-stone-700">{service.helpline}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={service.officialPortal}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg text-stone-600 hover:text-emerald-800 hover:bg-stone-200/60 transition-colors"
                        title="Official Government Portal"
                        aria-label={`Official portal for ${service.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      <a
                        href="#eligibility-guidance"
                        onClick={() => onSelectServiceForGuidance?.(service.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-2xs transition-colors"
                      >
                        <span>Eligibility Guide</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-stone-200">
                <Search className="w-8 h-8 text-stone-300 mx-auto mb-2" />
                <p className="text-base font-bold text-stone-700">No services match your search query</p>
                <p className="text-xs text-stone-500 mt-1">Try searching for "Subsidy", "Card", or "Pension"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 px-4 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold"
                >
                  Clear search
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
