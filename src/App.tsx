/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemStatement } from './components/ProblemStatement';
import { HowItWorks } from './components/HowItWorks';
import { KeyFeatures } from './components/KeyFeatures';
import { ServiceExplorer } from './components/ServiceExplorer';
import { EligibilityGuidance } from './components/EligibilityGuidance';
import { AIChatDemo } from './components/AIChatDemo';
import { InteractiveNavigator } from './components/InteractiveNavigator';
import { NearbyServices } from './components/NearbyServices';
import { AdminVerificationDashboard } from './components/AdminVerificationDashboard';
import { SystemArchitecture } from './components/SystemArchitecture';
import { ImpactSection } from './components/ImpactSection';
import { VerifiedKnowledgeBase } from './components/VerifiedKnowledgeBase';
import { FeedbackSection } from './components/FeedbackSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [selectedQueryId, setSelectedQueryId] = useState<string>('pm-kisan');

  const handleSearchSubmit = (query: string) => {
    // Map inquiry keywords to appropriate demo query if available
    const lower = query.toLowerCase();
    if (lower.includes('credit') || lower.includes('loan') || lower.includes('kcc') || lower.includes('ऋण')) {
      setSelectedQueryId('kcc');
    } else if (lower.includes('health') || lower.includes('maternity') || lower.includes('hospital') || lower.includes('स्वास्थ्य')) {
      setSelectedQueryId('health');
    } else if (lower.includes('soil') || lower.includes('card') || lower.includes('मृदा') || lower.includes('मिट्टी') || lower.includes('மண்')) {
      setSelectedQueryId('soil');
    } else {
      setSelectedQueryId('pm-kisan');
    }

    // Smooth scroll down to the AI Chat Demo
    const chatElement = document.getElementById('ai-chat-demo');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSampleQuery = (queryId: string) => {
    setSelectedQueryId(queryId);
    const chatElement = document.getElementById('ai-chat-demo');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreFeature = (featureId: string) => {
    if (featureId === 'scheme-discovery' || featureId === 'doc-eligibility') {
      setSelectedQueryId('pm-kisan');
    } else if (featureId === 'voice-queries') {
      setSelectedQueryId('soil');
    } else if (featureId === 'multilingual-support') {
      setSelectedQueryId('health');
    } else {
      setSelectedQueryId('kcc');
    }

    const chatElement = document.getElementById('ai-chat-demo');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF8] text-stone-900 font-sans">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-700 focus:text-white focus:rounded-lg focus:shadow-md text-sm font-semibold"
      >
        Skip to main content
      </a>

      {/* Sticky Responsive Navbar with Multi-Language Switcher */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        onNavigateToDemo={(queryId) => handleSelectSampleQuery(queryId || 'pm-kisan')}
      />

      {/* Main Page Sections */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section with Accessible Typography & Voice/Text Search */}
        <Hero
          currentLang={currentLang}
          onLanguageChange={(lang) => setCurrentLang(lang)}
          onSearchSubmit={handleSearchSubmit}
          onSelectSampleQuery={handleSelectSampleQuery}
        />

        {/* 1. Problem Statement: 4 Visually Attractive Cards */}
        <ProblemStatement currentLang={currentLang} />

        {/* 2. How It Works: Responsive 7-Step Process Flow (User Query → Nearby Services) */}
        <HowItWorks currentLang={currentLang} />

        {/* 3. Key Features: 7 Modern Feature Cards */}
        <KeyFeatures
          currentLang={currentLang}
          onExploreFeature={handleExploreFeature}
        />

        {/* 4. Service Explorer: Categorize Gov Schemes, Agriculture, Healthcare, Education, Financial, etc. */}
        <ServiceExplorer 
          currentLang={currentLang}
          onSelectService={(serviceId) => {
            setSelectedQueryId('pm-kisan');
            const el = document.getElementById('eligibility-guidance');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Eligibility & Document Guidance (Interactive 4-Step Stepper) */}
        <EligibilityGuidance currentLang={currentLang} />

        {/* 6. AI Chat Demo: Realistic Static Chatbot Interface */}
        <AIChatDemo currentLang={currentLang} />

        {/* 7. Live Interactive Navigator Simulation (Hackathon Deep-Dive) */}
        <InteractiveNavigator
          currentLang={currentLang}
          selectedQueryId={selectedQueryId}
          onSelectQuery={(queryId) => setSelectedQueryId(queryId)}
        />

        {/* 8. Nearby Services Locator: Simulated GIS Map & Directory */}
        <NearbyServices currentLang={currentLang} />

        {/* 9. Admin Verification Dashboard: Human-in-the-Loop Trust Pipeline */}
        <AdminVerificationDashboard currentLang={currentLang} />

        {/* 10. End-to-End System Architecture Diagram */}
        <SystemArchitecture currentLang={currentLang} />

        {/* 11. Expected Impact: Qualitative Transformation Model */}
        <ImpactSection currentLang={currentLang} />

        {/* 12. Verified Knowledge Base: Trust, Accuracy & Transparency */}
        <VerifiedKnowledgeBase currentLang={currentLang} />

        {/* 13. Citizen Feedback & Reporting Module */}
        <FeedbackSection currentLang={currentLang} />

        {/* 14. Contact, Village CSC Helpdesk Locator & FAQs */}
        <ContactSection currentLang={currentLang} />

        {/* 15. Final CTA: "Find the Right Rural Service, Simply." */}
        <FinalCTA currentLang={currentLang} />
      </main>

      {/* Footer with Civic-Tech Disclaimer & National Helplines */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
      />
    </div>
  );
}


