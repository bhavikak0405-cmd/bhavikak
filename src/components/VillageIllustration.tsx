import React from 'react';

export const VillageIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 rounded-2xl bg-gradient-to-b from-emerald-50/70 via-stone-50/50 to-white border border-stone-200/90 p-4 sm:p-6 shadow-sm overflow-hidden">
      {/* Decorative top pill label */}
      <div className="flex items-center justify-between gap-2 mb-3 px-2 border-b border-stone-200/60 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 font-mono">
            Village Mesh Network • BharatNet & AI Connectivity
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-stone-500">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          <span>Last-Mile Grounding: Gram Panchayat Level</span>
        </div>
      </div>

      {/* SVG Illustration */}
      <svg
        viewBox="0 0 900 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto select-none"
        aria-label="Illustration of rural village connected to AI Services Navigator"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="skyGlow" x1="450" y1="0" x2="450" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEF9C3" stopOpacity="0.5" />
            <stop offset="0.6" stopColor="#ECFDF5" stopOpacity="0.8" />
            <stop offset="1" stopColor="#F9FAF8" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="sunGrad" x1="450" y1="30" x2="450" y2="110" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" />
            <stop offset="1" stopColor="#D97706" />
          </linearGradient>

          <linearGradient id="hillBack" x1="0" y1="120" x2="900" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A7F3D0" stopOpacity="0.6" />
            <stop offset="1" stopColor="#6EE7B7" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="hillFront" x1="0" y1="180" x2="900" y2="340" gradientUnits="userSpaceOnUse">
            <stop stopColor="#059669" />
            <stop offset="0.5" stopColor="#047857" />
            <stop offset="1" stopColor="#065F46" />
          </linearGradient>

          <linearGradient id="fieldYellow" x1="200" y1="260" x2="600" y2="350" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE68A" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>

          <linearGradient id="signalPulse" x1="450" y1="70" x2="450" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="1" stopColor="#047857" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Sky Background */}
        <rect width="900" height="360" rx="16" fill="url(#skyGlow)" />

        {/* Ochre Warm Sun / Rising Dawn */}
        <circle cx="450" cy="95" r="44" fill="url(#sunGrad)" opacity="0.85" />
        <circle cx="450" cy="95" r="60" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />

        {/* Distant Hills */}
        <path
          d="M-50 220 Q 150 140 380 190 T 750 170 Q 850 160 950 200 L 950 360 L -50 360 Z"
          fill="url(#hillBack)"
        />

        {/* Terraced Agricultural Contours */}
        <path
          d="M-20 250 Q 180 200 450 230 T 920 220 L 920 360 L -20 360 Z"
          fill="#10B981"
          opacity="0.35"
        />
        <path
          d="M-20 280 Q 220 240 520 260 T 920 250 L 920 360 L -20 360 Z"
          fill="url(#hillFront)"
        />

        {/* Mustard / Wheat Crop Stripes */}
        <path
          d="M 120 290 Q 260 270 420 295 L 400 360 L 90 360 Z"
          fill="url(#fieldYellow)"
          opacity="0.7"
        />
        {/* Furrow Lines */}
        <line x1="140" y1="300" x2="110" y2="360" stroke="#D97706" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" />
        <line x1="200" y1="290" x2="180" y2="360" stroke="#D97706" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" />
        <line x1="260" y1="285" x2="250" y2="360" stroke="#D97706" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" />
        <line x1="330" y1="288" x2="330" y2="360" stroke="#D97706" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" />

        {/* Gram Panchayat Kendra Building (Center-Left) */}
        <g id="panchayat-building" transform="translate(230, 190)">
          {/* Base Platform */}
          <rect x="0" y="55" width="130" height="25" rx="3" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Main Hall */}
          <rect x="15" y="20" width="100" height="35" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Pillars */}
          <rect x="25" y="20" width="8" height="35" fill="#E2E8F0" />
          <rect x="50" y="20" width="8" height="35" fill="#E2E8F0" />
          <rect x="75" y="20" width="8" height="35" fill="#E2E8F0" />
          <rect x="98" y="20" width="8" height="35" fill="#E2E8F0" />
          {/* Triangular Pediment / Roof */}
          <polygon points="10,20 65,-5 120,20" fill="#047857" />
          {/* Mini Solar Panels on Roof */}
          <rect x="35" y="0" width="22" height="12" rx="1" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="0.75" />
          <rect x="68" y="0" width="22" height="12" rx="1" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="0.75" />
          {/* Center Flagpole */}
          <line x1="65" y1="-5" x2="65" y2="-22" stroke="#64748B" strokeWidth="1.5" />
          <polygon points="65,-22 78,-17 65,-12" fill="#F97316" />
          {/* Doorway */}
          <rect x="58" y="32" width="14" height="23" rx="2" fill="#334155" />
          {/* Label */}
          <rect x="28" y="10" width="74" height="9" rx="2" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.5" />
          <text x="65" y="17" fill="#92400E" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            CSC • GRAM PANCHAYAT
          </text>
        </g>

        {/* Sacred Village Banyan Tree (Far Left) */}
        <g id="banyan-tree" transform="translate(60, 150)">
          {/* Canopy */}
          <circle cx="50" cy="50" r="42" fill="#065F46" opacity="0.9" />
          <circle cx="75" cy="40" r="32" fill="#047857" opacity="0.9" />
          <circle cx="30" cy="55" r="30" fill="#059669" opacity="0.95" />
          <circle cx="55" cy="30" r="28" fill="#10B981" opacity="0.9" />
          {/* Trunk */}
          <path d="M 45 80 Q 40 105 35 125 L 65 125 Q 60 105 55 80 Z" fill="#78350F" />
          {/* Aerial Roots */}
          <line x1="30" y1="75" x2="32" y2="125" stroke="#92400E" strokeWidth="1.5" />
          <line x1="70" y1="65" x2="68" y2="125" stroke="#92400E" strokeWidth="1.5" />
          {/* Platform / Chaura */}
          <rect x="15" y="118" width="70" height="10" rx="3" fill="#D97706" opacity="0.8" />
        </g>

        {/* Central Connectivity / BharatNet Tower */}
        <g id="telecom-ai-tower" transform="translate(450, 70)">
          {/* Radiating AI Connectivity Waves */}
          <circle cx="0" cy="0" r="25" stroke="#10B981" strokeWidth="1.5" opacity="0.8" strokeDasharray="3 3" />
          <circle cx="0" cy="0" r="48" stroke="#059669" strokeWidth="1.2" opacity="0.6" strokeDasharray="5 4" />
          <circle cx="0" cy="0" r="75" stroke="#34D399" strokeWidth="1" opacity="0.4" strokeDasharray="6 5" />
          <circle cx="0" cy="0" r="105" stroke="#6EE7B7" strokeWidth="0.8" opacity="0.25" strokeDasharray="8 6" />

          {/* AI Beacon Pulse at Top */}
          <circle cx="0" cy="0" r="7" fill="#10B981" />
          <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

          {/* Lattice Tower Structure */}
          <line x1="0" y1="0" x2="-22" y2="150" stroke="#0F172A" strokeWidth="2.5" />
          <line x1="0" y1="0" x2="22" y2="150" stroke="#0F172A" strokeWidth="2.5" />
          <line x1="-7" y1="40" x2="7" y2="40" stroke="#334155" strokeWidth="1.5" />
          <line x1="-12" y1="75" x2="12" y2="75" stroke="#334155" strokeWidth="1.5" />
          <line x1="-17" y1="110" x2="17" y2="110" stroke="#334155" strokeWidth="1.5" />
          {/* Cross Bracing */}
          <line x1="-7" y1="40" x2="12" y2="75" stroke="#64748B" strokeWidth="1" />
          <line x1="7" y1="40" x2="-12" y2="75" stroke="#64748B" strokeWidth="1" />
          <line x1="-12" y1="75" x2="17" y2="110" stroke="#64748B" strokeWidth="1" />
          <line x1="12" y1="75" x2="-17" y2="110" stroke="#64748B" strokeWidth="1" />

          {/* Micro-cells / Directional Antennas */}
          <rect x="-14" y="32" width="5" height="12" rx="1" fill="#047857" />
          <rect x="9" y="32" width="5" height="12" rx="1" fill="#047857" />
        </g>

        {/* Right Side: Citizen Interaction & Smartphone Interface Card */}
        <g id="citizen-farmer" transform="translate(620, 160)">
          {/* Ambient Glow */}
          <rect x="-15" y="-15" width="230" height="155" rx="18" fill="#FFFFFF" fillOpacity="0.92" stroke="#CBD5E1" strokeWidth="1.5" filter="drop-shadow(0 6px 12px rgba(15,23,42,0.06))" />

          {/* Mini Smartphone Screen Frame inside */}
          <rect x="0" y="0" width="70" height="125" rx="10" fill="#0F172A" />
          <rect x="4" y="6" width="62" height="113" rx="7" fill="#F8FAFC" />
          {/* Top Notch */}
          <rect x="25" y="9" width="20" height="3" rx="1.5" fill="#334155" />

          {/* Phone Screen Simulated UI */}
          {/* Header */}
          <rect x="8" y="16" width="54" height="12" rx="3" fill="#047857" />
          <text x="35" y="24" fill="#FFFFFF" fontSize="4.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            AI RURAL ASSISTANT
          </text>

          {/* Audio Waveform in Phone */}
          <path d="M 12 36 Q 16 30 20 36 T 28 36 T 36 36 T 44 36 T 52 36 T 58 36" fill="none" stroke="#D97706" strokeWidth="1.5" />

          {/* Citizen Speech Bubble */}
          <rect x="8" y="44" width="45" height="16" rx="4" fill="#E2E8F0" />
          <text x="12" y="52" fill="#334155" fontSize="4" fontWeight="600" fontFamily="sans-serif">
            "खाद और बीज सब्सिडी
          </text>
          <text x="12" y="57" fill="#334155" fontSize="4" fontWeight="600" fontFamily="sans-serif">
            के लिए क्या चाहिए?"
          </text>

          {/* AI Verified Response Bubble */}
          <rect x="15" y="66" width="48" height="24" rx="4" fill="#ECFDF5" stroke="#10B981" strokeWidth="0.75" />
          <text x="19" y="74" fill="#065F46" fontSize="4" fontWeight="bold" fontFamily="sans-serif">
            ✓ PM-Kisan & DAP
          </text>
          <text x="19" y="80" fill="#047857" fontSize="3.5" fontFamily="sans-serif">
            ₹6,000 DBT / वर्ष
          </text>
          <text x="19" y="86" fill="#059669" fontSize="3" fontFamily="sans-serif">
            आधार + खतौनी तैयार रखें
          </text>

          {/* Bottom Action Pill */}
          <rect x="14" y="96" width="42" height="10" rx="3" fill="#059669" />
          <text x="35" y="103" fill="#FFFFFF" fontSize="3.8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            CSC केंद्र: 1.2 किमी →
          </text>

          {/* Floating Callout Badges beside Smartphone */}
          <g transform="translate(85, 10)">
            {/* Badge 1: Voice in Native Dialects */}
            <rect x="0" y="0" width="115" height="26" rx="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
            <circle cx="12" cy="13" r="6" fill="#D97706" />
            <text x="12" y="16" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">🎙️</text>
            <text x="24" y="11" fill="#92400E" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">
              Dialect-First Voice
            </text>
            <text x="24" y="19" fill="#B45309" fontSize="4.5" fontFamily="sans-serif">
              Hindi • Tamil • Telugu • Bengali
            </text>

            {/* Badge 2: Audited Grounding */}
            <rect x="0" y="34" width="115" height="26" rx="6" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
            <circle cx="12" cy="47" r="6" fill="#059669" />
            <text x="12" y="50" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">🛡️</text>
            <text x="24" y="45" fill="#065F46" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">
              Verified Knowledge Base
            </text>
            <text x="24" y="53" fill="#047857" fontSize="4.5" fontFamily="sans-serif">
              Zero Hallucination Guarantee
            </text>

            {/* Badge 3: Direct Last Mile Action */}
            <rect x="0" y="68" width="115" height="26" rx="6" fill="#F0FDFA" stroke="#14B8A6" strokeWidth="1" />
            <circle cx="12" cy="81" r="6" fill="#0D9488" />
            <text x="12" y="84" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">📍</text>
            <text x="24" y="79" fill="#134E4A" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">
              Local VLE Operator
            </text>
            <text x="24" y="87" fill="#0F766E" fontSize="4.5" fontFamily="sans-serif">
              Instant Gram Panchayat Match
            </text>
          </g>
        </g>

        {/* Floating Digital Data Packets / Stars */}
        <g fill="#F59E0B" opacity="0.8">
          <circle cx="390" cy="140" r="2.5" />
          <circle cx="530" cy="120" r="3" />
          <circle cx="480" cy="170" r="2" />
          <circle cx="340" cy="180" r="2.5" />
          <circle cx="610" cy="140" r="2" />
        </g>
      </svg>
    </div>
  );
};
