export type Language = 'en' | 'hi' | 'ta' | 'te' | 'bn';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  scriptLabel: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  category: 'agri' | 'health' | 'welfare' | 'finance' | 'voice' | 'offline';
  icon: string;
  badge: string;
  highlights: string[];
}

export interface HowItWorksStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface DemoQuery {
  id: string;
  title: string;
  queryText: string;
  department: string;
  category: string;
  answerSummary: string;
  eligibility: string;
  actionSteps: string[];
  helpline: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  village: string;
  state: string;
  schemeBenefited: string;
}

export interface ProblemItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  impactStat: string;
  statLabel: string;
  solutionSnippet: string;
  tag: string;
}

export interface ProcessFlowStep {
  stepNumber: number;
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  icon: string;
  exampleData: {
    inputOrAction: string;
    systemOutput: string;
  };
}

export interface KeyFeatureItem {
  id: string;
  title: string;
  badge: string;
  category: string;
  shortDescription: string;
  bulletPoints: string[];
  icon: string;
  demoActionLabel?: string;
  statsOrTag?: string;
}
