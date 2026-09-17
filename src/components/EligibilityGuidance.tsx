import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Circle, 
  FileText, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle, 
  Building2, 
  MapPin, 
  UserCheck, 
  HelpCircle,
  Clock,
  Printer,
  ChevronRight
} from 'lucide-react';
import { Language } from '../types';

interface SchemeWorkflow {
  id: string;
  name: string;
  category: string;
  benefitBrief: string;
  plainLanguageSummary: string;
  eligibilityQuestions: {
    question: string;
    description: string;
    qualifyingAnswer: boolean;
  }[];
  requiredDocuments: {
    name: string;
    issuedBy: string;
    tip: string;
    isMandatory: boolean;
  }[];
  applicationSteps: {
    step: number;
    title: string;
    description: string;
    duration: string;
    location: string;
  }[];
}

const SCHEME_WORKFLOWS: SchemeWorkflow[] = [
  {
    id: 'pm-kisan',
    name: 'PM-Kisan Samman Nidhi',
    category: 'Agriculture & Income',
    benefitBrief: '₹6,000 / year direct cash support in 3 equal installments',
    plainLanguageSummary: 'Provides assured direct cash support into bank accounts for smallholder and marginal farming families to purchase seeds, fertilizers, and crop inputs.',
    eligibilityQuestions: [
      {
        question: 'Do you or your family hold cultivable agricultural land in your name?',
        description: 'You need an active land title (Khatauni / Jamabandi / RoR). Tenant-only farmers are not covered under PM-Kisan central rules.',
        qualifyingAnswer: true
      },
      {
        question: 'Are you or anyone in your household an income-tax payer or retired govt officer?',
        description: 'Constitutional post holders, sitting/former MPs/MLAs, and serving/retired govt employees are excluded to protect marginal farmers.',
        qualifyingAnswer: false
      },
      {
        question: 'Do you have an Aadhaar card linked to your mobile phone for OTP verification?',
        description: 'Mandatory for paperless e-KYC and biometric direct benefit transfer (DBT).',
        qualifyingAnswer: true
      }
    ],
    requiredDocuments: [
      {
        name: 'Aadhaar Card (Linked with active mobile)',
        issuedBy: 'UIDAI',
        tip: 'Ensure your name spelling matches your bank account exactly.',
        isMandatory: true
      },
      {
        name: 'Land Record (Khatauni / Certified Patta Copy)',
        issuedBy: 'Revenue Department / Tehsil Office',
        tip: 'Can be downloaded instantly via your state Bhulekh portal or printed at CSC.',
        isMandatory: true
      },
      {
        name: 'Bank Passbook / Cancelled Cheque (NPCI Seeded)',
        issuedBy: 'Your Village Bank / Post Office Payments Bank',
        tip: 'Aadhaar Payment Bridge System (ABPS) must be activated at your branch.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'New Farmer Online Registration',
        description: 'Visit the official pmkisan.gov.in portal or visit your Gram Panchayat CSC Kendra. Enter your Aadhaar number and select your village/district.',
        duration: '10 minutes',
        location: 'Online / Village CSC'
      },
      {
        step: 2,
        title: 'Upload Land Khatauni & Bank Details',
        description: 'Fill in your land survey/Khasra numbers, landholding area, and IFSC code with account number.',
        duration: '15 minutes',
        location: 'CSC Kendra'
      },
      {
        step: 3,
        title: 'Lekhpal / Patwari Physical Land Verification',
        description: 'The village Revenue Officer (Lekhpal) verifies the physical possession of cultivable land on the digital e-Kisan portal.',
        duration: '3 - 7 days',
        location: 'Panchayat Bhavan'
      },
      {
        step: 4,
        title: 'District Nodal Approval & DBT Disbursement',
        description: 'District Agriculture Officer approves the file. The next installment of ₹2,000 will be credited directly to your bank account via PFMS.',
        duration: 'Next scheduled cycle',
        location: 'Direct Bank Credit'
      }
    ]
  },
  {
    id: 'pm-jay',
    name: 'Ayushman Bharat PM-JAY',
    category: 'Healthcare Insurance',
    benefitBrief: '₹5,00,000 per family per year cashless hospital cover',
    plainLanguageSummary: 'Guarantees free cashless hospitalization, surgeries, and medicines at all empanelled government and private hospitals across India.',
    eligibilityQuestions: [
      {
        question: 'Is your family listed in SECC 2011 or holding an active Antyodaya / Priority Ration Card?',
        description: 'Rural deprivation criteria (D1 to D7) automatically qualify your entire household without fees.',
        qualifyingAnswer: true
      },
      {
        question: 'Are any senior citizens in your household aged 70 years or above?',
        description: 'Under Ayushman Vaya Vandana, all 70+ seniors are universally eligible for ₹5 Lakhs extra top-up regardless of income.',
        qualifyingAnswer: true
      },
      {
        question: 'Do you already hold an ESIC or CGHS government medical coverage?',
        description: 'Govt employees covered under contributory health schemes are not eligible for PM-JAY.',
        qualifyingAnswer: false
      }
    ],
    requiredDocuments: [
      {
        name: 'Ration Card (NFSA / State BPL)',
        issuedBy: 'Food & Civil Supplies Department',
        tip: 'Shows proof of family tree and co-beneficiary membership.',
        isMandatory: true
      },
      {
        name: 'Aadhaar Card of all family members',
        issuedBy: 'UIDAI',
        tip: 'Each member receives their individual Ayushman PVC Golden Card.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Eligibility Check on Beneficiary Portal',
        description: 'Enter your mobile number or Ration Card ID on beneficiary.nha.gov.in to verify your family HHID record.',
        duration: '2 minutes',
        location: 'Online / Mobile'
      },
      {
        step: 2,
        title: 'Biometric e-KYC Verification',
        description: 'Complete biometric fingerprint/iris scan or Aadhaar OTP authentication at the nearest Primary Health Centre (PHC) or CSC.',
        duration: '5 minutes',
        location: 'PHC / CSC'
      },
      {
        step: 3,
        title: 'Instant Ayushman Golden Card Issuance',
        description: 'Download the digital card immediately or collect the printed PVC laminated card from your local Arogya Mitra.',
        duration: 'Same day',
        location: 'Instant Download'
      },
      {
        step: 4,
        title: 'Cashless Admission at Hospital',
        description: 'Show your Ayushman Card at the helpdesk of any empanelled hospital for completely cashless treatment up to ₹5 Lakhs.',
        duration: 'Immediate',
        location: 'Empanelled Hospital'
      }
    ]
  },
  {
    id: 'kcc',
    name: 'Kisan Credit Card (KCC)',
    category: 'Financial Credit',
    benefitBrief: 'Low-interest short-term credit at 4% effective interest rate',
    plainLanguageSummary: 'Provides cheap crop loans and operational working capital for farmers, dairy rearers, and fishers to prevent borrowing from predatory local moneylenders.',
    eligibilityQuestions: [
      {
        question: 'Are you an individual farmer, sharecropper, tenant farmer, or oral lessee?',
        description: 'All cultivating farmers qualify for KCC crop loan limits based on cultivated acreage.',
        qualifyingAnswer: true
      },
      {
        question: 'Are you willing to commit to prompt yearly repayment of credit?',
        description: 'Prompt repayment grants a 3% subvention, dropping your annual interest rate to only 4%.',
        qualifyingAnswer: true
      }
    ],
    requiredDocuments: [
      {
        name: 'Simplified One-Page KCC Application Form',
        issuedBy: 'Public Sector Bank / Cooperative Society',
        tip: 'Banks cannot demand extra processing charges for loans up to ₹1.6 Lakhs.',
        isMandatory: true
      },
      {
        name: 'Land Record (Khatauni / LPC Certificate)',
        issuedBy: 'Tehsildar / Village Revenue Official',
        tip: 'Demonstrates the acreage of crop cultivation.',
        isMandatory: true
      },
      {
        name: 'Affidavit of No Existing Default Loan',
        issuedBy: 'Self Declaration',
        tip: 'Certifies you have not defaulted with another commercial bank in the same taluk.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Obtain One-Page KCC Form from Bank',
        description: 'Visit your nearest Regional Rural Bank (RRB), SBI Rural branch, or Primary Agricultural Credit Society (PACS).',
        duration: '1 day',
        location: 'Rural Bank Branch'
      },
      {
        step: 2,
        title: 'Attach Land Record & Aadhaar Copy',
        description: 'Submit the filled form along with certified Khatauni record and passport size photographs.',
        duration: '1 day',
        location: 'Bank Loan Desk'
      },
      {
        step: 3,
        title: 'Field Verification & Scale of Finance Sanction',
        description: 'Branch Manager calculates your scale of finance per crop type and sanctions the limit without collateral up to ₹1.6 Lakh.',
        duration: '14 days max',
        location: 'Bank Branch'
      },
      {
        step: 4,
        title: 'RuPay KCC Card Dispatch',
        description: 'Receive your ATM-enabled RuPay Kisan Credit Card to draw cash from village ATMs or swipe at fertilizer stores.',
        duration: 'Within 2 weeks',
        location: 'Village Post / Branch'
      }
    ]
  }
];

interface EligibilityGuidanceProps {
  currentLang: Language;
  preselectedSchemeId?: string;
}

export const EligibilityGuidance: React.FC<EligibilityGuidanceProps> = ({ 
  currentLang,
  preselectedSchemeId = 'pm-kisan'
}) => {
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>(preselectedSchemeId);
  const [currentStep, setCurrentStep] = useState<number>(1); // 1: Select Service, 2: Eligibility, 3: Documents, 4: Steps
  const [userAnswers, setUserAnswers] = useState<Record<string, boolean>>({});
  const [isCopiedNotification, setIsCopiedNotification] = useState(false);

  const activeScheme = SCHEME_WORKFLOWS.find(s => s.id === selectedSchemeId) || SCHEME_WORKFLOWS[0];

  const stepsList = [
    { num: 1, label: 'Select Service' },
    { num: 2, label: 'Basic Eligibility' },
    { num: 3, label: 'Required Documents' },
    { num: 4, label: 'Application Steps' },
  ];

  const handleAnswerToggle = (qIdx: number, answer: boolean) => {
    setUserAnswers(prev => ({
      ...prev,
      [`${selectedSchemeId}_${qIdx}`]: answer
    }));
  };

  const handlePrintSummary = () => {
    setIsCopiedNotification(true);
    setTimeout(() => setIsCopiedNotification(false), 3000);
    window.print?.();
  };

  return (
    <section 
      id="eligibility-guidance" 
      className="py-16 md:py-24 bg-white border-b border-stone-200/80 scroll-mt-14 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <UserCheck className="w-4 h-4 text-amber-700" />
            <span>Interactive Eligibility & Document Walkthrough</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Guidance in 4 Simple Steps
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Verify whether you qualify, prepare the exact required paperwork, and understand how to apply at your Gram Panchayat without confusion.
          </p>
        </div>

        {/* 4-Step Progress Indicator Stepper */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-stone-200 -translate-y-1/2 -z-0" />
            {/* Active Progress Line */}
            <div 
              className="absolute top-1/2 left-0 h-1 bg-emerald-600 -translate-y-1/2 transition-all duration-300 -z-0"
              style={{ width: `${((currentStep - 1) / (stepsList.length - 1)) * 100}%` }}
            />

            {stepsList.map((step) => {
              const isPassed = step.num < currentStep;
              const isCurrent = step.num === currentStep;

              return (
                <button
                  key={step.num}
                  onClick={() => setCurrentStep(step.num)}
                  className="flex flex-col items-center group relative z-10 focus:outline-none"
                >
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-200 border-2 ${
                    isPassed
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                      : isCurrent
                      ? 'bg-white text-emerald-800 border-emerald-700 ring-4 ring-emerald-100 shadow-md font-extrabold'
                      : 'bg-stone-100 text-stone-500 border-stone-300'
                  }`}>
                    {isPassed ? <CheckCircle2 className="w-5 h-5 text-white" /> : step.num}
                  </div>
                  <span className={`mt-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                    isCurrent ? 'text-emerald-900 font-bold' : isPassed ? 'text-stone-800' : 'text-stone-400'
                  }`}>
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Card Body based on Current Step */}
        <div className="max-w-4xl mx-auto bg-stone-50/70 rounded-3xl border border-stone-200 p-6 sm:p-8 lg:p-10 shadow-sm relative">
          {/* Active Scheme Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-200 mb-8">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-lg">
                📋
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Target Service Selected:
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
                  {activeScheme.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                {activeScheme.category}
              </span>
              <button
                onClick={handlePrintSummary}
                className="p-2 text-stone-600 hover:text-stone-900 hover:bg-white rounded-lg border border-stone-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Print or Save Guidance"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / Save</span>
              </button>
            </div>
          </div>

          {/* STEP 1: Select Service */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                  1. Choose a Scheme to Check Eligibility
                </h4>
                <p className="text-sm text-stone-600">
                  Select which welfare or agricultural support scheme you would like to audit:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SCHEME_WORKFLOWS.map((scheme) => {
                  const isSelected = scheme.id === selectedSchemeId;
                  return (
                    <div
                      key={scheme.id}
                      onClick={() => setSelectedSchemeId(scheme.id)}
                      className={`p-5 rounded-2xl cursor-pointer border-2 transition-all ${
                        isSelected
                          ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                          : 'bg-white/80 border-stone-200 hover:border-emerald-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                          {scheme.category}
                        </span>
                        {isSelected ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Circle className="w-5 h-5 text-stone-300" />
                        )}
                      </div>
                      <h5 className="font-bold text-stone-900 text-base mb-1">
                        {scheme.name}
                      </h5>
                      <p className="text-xs text-stone-600 font-medium line-clamp-2">
                        {scheme.benefitBrief}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <span className="text-xs font-bold uppercase text-stone-500 block mb-1">
                  Plain-Language Summary:
                </span>
                <p className="text-sm text-stone-800 leading-relaxed font-normal">
                  {activeScheme.plainLanguageSummary}
                </p>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Basic Eligibility Check */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                  2. Answer 3 Simple Questions
                </h4>
                <p className="text-sm text-stone-600">
                  Select your answers to see if you fulfill the official eligibility criteria:
                </p>
              </div>

              <div className="space-y-4">
                {activeScheme.eligibilityQuestions.map((q, qIdx) => {
                  const key = `${selectedSchemeId}_${qIdx}`;
                  const currentAnswer = userAnswers[key];

                  return (
                    <div 
                      key={qIdx}
                      className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="max-w-xl">
                          <p className="text-sm sm:text-base font-bold text-stone-900 mb-1">
                            {qIdx + 1}. {q.question}
                          </p>
                          <p className="text-xs text-stone-500">
                            {q.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleAnswerToggle(qIdx, true)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                              currentAnswer === true
                                ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                                : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                            }`}
                          >
                            Yes, I qualify
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAnswerToggle(qIdx, false)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                              currentAnswer === false
                                ? 'bg-stone-800 text-white border-stone-800 shadow-xs'
                                : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                            }`}
                          >
                            No / Not sure
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-emerald-950">
                  <span className="font-bold">Transparent Verification:</span> Criteria are sourced directly from the Ministry gazette notifications. No arbitrary exclusions apply at the Gram Panchayat level.
                </p>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Required Documents */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                  3. Prepare These Required Documents
                </h4>
                <p className="text-sm text-stone-600">
                  Ensure you carry original paper copies or clear digital scans to the Gram Panchayat Kendra:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeScheme.requiredDocuments.map((doc, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-5 rounded-2xl bg-white border border-stone-200 flex flex-col justify-between shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <FileText className="w-5 h-5 text-emerald-700" />
                        {doc.isMandatory && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                            Mandatory
                          </span>
                        )}
                      </div>
                      <h5 className="font-bold text-stone-900 text-sm mb-1">
                        {doc.name}
                      </h5>
                      <span className="text-[11px] font-medium text-stone-500 block mb-2">
                        Issued by: {doc.issuedBy}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/80 mt-3">
                      <span className="text-[10px] font-bold text-amber-900 block mb-0.5">
                        Pro Tip:
                      </span>
                      <p className="text-[11px] text-amber-950 leading-snug">
                        {doc.tip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 4: Application Steps */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                  4. Step-by-Step Application Roadmap
                </h4>
                <p className="text-sm text-stone-600">
                  Follow this verified sequential path to complete your application smoothly:
                </p>
              </div>

              <div className="space-y-3.5">
                {activeScheme.applicationSteps.map((appStep) => (
                  <div
                    key={appStep.step}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 flex items-start gap-4 shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {appStep.step}
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h5 className="font-bold text-stone-900 text-sm sm:text-base">
                          {appStep.title}
                        </h5>
                        <div className="flex items-center gap-3 text-xs text-stone-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-amber-600" />
                            {appStep.duration}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-emerald-800">
                            <MapPin className="w-3.5 h-3.5" />
                            {appStep.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {appStep.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ready Action Box */}
              <div className="p-5 rounded-2xl bg-emerald-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-bold text-base mb-0.5">Ready to apply right now?</h5>
                  <p className="text-xs text-emerald-200">
                    Locate your nearest Gram Panchayat Common Service Centre (CSC) in Section 7.
                  </p>
                </div>
                <a
                  href="#nearby-services"
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs shadow-sm transition-colors whitespace-nowrap"
                >
                  Find Nearest Center →
                </a>
              </div>
            </motion.div>
          )}

          {/* Bottom Stepper Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-stone-200">
            <button
              type="button"
              disabled={currentStep === 1}
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors ${
                currentStep === 1
                  ? 'opacity-40 cursor-not-allowed text-stone-400 bg-stone-100'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <div className="text-xs text-stone-500 font-semibold">
              Step {currentStep} of {stepsList.length}
            </div>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => Math.min(4, prev + 1))}
                className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-2xs transition-colors"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <a
                href="#nearby-services"
                className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-2xs transition-colors"
              >
                <span>View Nearby Services</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
