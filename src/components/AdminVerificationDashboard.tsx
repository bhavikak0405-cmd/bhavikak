import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  FileCheck, 
  Eye, 
  ArrowRight, 
  Database, 
  Cpu, 
  Bot, 
  RefreshCw, 
  Filter, 
  Search,
  ExternalLink,
  Sparkles,
  Lock,
  Compass
} from 'lucide-react';
import { Language } from '../types';

interface ServiceAuditRecord {
  id: string;
  schemeName: string;
  category: string;
  ministry: string;
  gazetteRef: string;
  status: 'Pending' | 'Under Review' | 'Verified';
  auditor: string;
  lastUpdated: string;
  changeSummary: string;
  trustScore: number;
}

const INITIAL_RECORDS: ServiceAuditRecord[] = [
  {
    id: 'rec-1',
    schemeName: 'PM-Kisan Samman Nidhi (Kharif e-KYC Update)',
    category: 'Agriculture',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    gazetteRef: 'CG-DL-E-15092026-249102',
    status: 'Verified',
    auditor: 'Dr. A. K. Sharma',
    lastUpdated: 'Today, 08:30 AM',
    changeSummary: 'Mandatory Aadhaar-based Face Authentication e-KYC requirement ratified for kharif disbursements.',
    trustScore: 100
  },
  {
    id: 'rec-2',
    schemeName: 'Ayushman Bharat PM-JAY (Senior Citizen 70+ Coverage)',
    category: 'Healthcare',
    ministry: 'National Health Authority (NHA)',
    gazetteRef: 'NHA/PMJAY/2026/CIR-19',
    status: 'Verified',
    auditor: 'Meenakshi Sundaram',
    lastUpdated: 'Yesterday, 04:15 PM',
    changeSummary: 'Universal ₹5 Lakh top-up health coverage extended to all citizens 70+ regardless of family income.',
    trustScore: 100
  },
  {
    id: 'rec-3',
    schemeName: 'DAP & Complex Nutrient-Based Fertilizer Concession',
    category: 'Agriculture',
    ministry: 'Department of Fertilizers, MoC&F',
    gazetteRef: 'FERT/NBS/2026-Q3',
    status: 'Under Review',
    auditor: 'Pawan K. Mishra',
    lastUpdated: '3 hours ago',
    changeSummary: 'Special seasonal concession per 50kg bag verified against district cooperative buffer stocks.',
    trustScore: 92
  },
  {
    id: 'rec-4',
    schemeName: 'PMAY-G Phase IV Rural Housing Survey Guidelines',
    category: 'Public Services',
    ministry: 'Ministry of Rural Development',
    gazetteRef: 'MoRD/RH/2026/883',
    status: 'Under Review',
    auditor: 'Vandana Rao',
    lastUpdated: '5 hours ago',
    changeSummary: 'Revised exclusion criteria for households owning motorized 2-wheelers under review.',
    trustScore: 88
  },
  {
    id: 'rec-5',
    schemeName: 'National Scholarship Portal Pre-Matric OTR Renewal',
    category: 'Education',
    ministry: 'Ministry of Social Justice & Empowerment',
    gazetteRef: 'MSJE/SCH-2026/09',
    status: 'Pending',
    auditor: 'Pending Assignment',
    lastUpdated: '1 day ago',
    changeSummary: 'State-wise quota allocation circular uploaded from Bihar & UP State Education boards.',
    trustScore: 75
  },
  {
    id: 'rec-6',
    schemeName: 'Gram Panchayat Digital Property Card (SVAMITVA)',
    category: 'Public Documents',
    ministry: 'Ministry of Panchayati Raj',
    gazetteRef: 'SVAMITVA/2026/71',
    status: 'Verified',
    auditor: 'R. K. Sen',
    lastUpdated: '2 days ago',
    changeSummary: 'Property cards (Gharouni) legal validity cross-verified with State Land Revenue Codes.',
    trustScore: 100
  }
];

interface AdminVerificationDashboardProps {
  currentLang: Language;
}

export const AdminVerificationDashboard: React.FC<AdminVerificationDashboardProps> = ({ currentLang }) => {
  const [records, setRecords] = useState<ServiceAuditRecord[]>(INITIAL_RECORDS);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recentlyApprovedId, setRecentlyApprovedId] = useState<string | null>(null);

  const totalServices = 164;
  const verifiedCount = records.filter(r => r.status === 'Verified').length + 153;
  const underReviewCount = records.filter(r => r.status === 'Under Review').length;
  const pendingCount = records.filter(r => r.status === 'Pending').length;
  const userReportsCount = 3;

  const handleApproveRecord = (id: string) => {
    setRecords(prev => prev.map(rec => {
      if (rec.id === id) {
        return {
          ...rec,
          status: 'Verified',
          trustScore: 100,
          auditor: 'Verified by Evaluator (Admin Session)',
          lastUpdated: 'Just now'
        };
      }
      return rec;
    }));
    setRecentlyApprovedId(id);
    setTimeout(() => setRecentlyApprovedId(null), 3000);
  };

  const filteredRecords = records.filter(rec => {
    const matchesFilter = statusFilter === 'all' || rec.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesSearch = rec.schemeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          rec.ministry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          rec.gazetteRef.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section 
      id="admin-verification" 
      className="py-16 md:py-24 bg-white border-b border-stone-200/80 scroll-mt-14 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <Lock className="w-4 h-4 text-emerald-700" />
            <span>Integrity & Zero-Hallucination Pipeline</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Admin Verification & Trust Dashboard
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Every piece of advice generated by our AI Assistant is rigorously cross-audited against published government gazettes and ministry circulars before reaching citizens.
          </p>
        </div>

        {/* 1. Trust Architecture Banner: Admin Verification → Verified Knowledge Base → AI Response */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900 to-emerald-950 text-white border border-stone-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-800">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-emerald-400">
                Verified Civic Intelligence Flow
              </span>
            </div>
            <span className="text-xs text-stone-400 font-semibold hidden sm:inline">
              Rule 100: Zero Unvetted Responses
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs">
                    01
                  </span>
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white mb-1">
                  Admin Review
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Civic analysts review official gazette notifications, scheme circulars, and entitlement rules.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-stone-700/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Human In The Loop</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-amber-900/60 text-amber-300 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-xs">
                    02
                  </span>
                  <Database className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white mb-1">
                  Verified Knowledge Base
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Approved rules are stored in an indexed knowledge base with exact citation links and eligibility formulas.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-stone-700/60 flex items-center gap-1.5 text-[11px] text-amber-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Hallucination</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-teal-900/60 text-teal-300 border border-teal-500/30 flex items-center justify-center font-mono font-bold text-xs">
                    03
                  </span>
                  <Bot className="w-4 h-4 text-teal-400" />
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white mb-1">
                  AI Service Matching
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Natural language processing matches citizen profiles to verified criteria in real time.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-stone-700/60 flex items-center gap-1.5 text-[11px] text-teal-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Deterministic Rules</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs">
                    04
                  </span>
                  <Compass className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white mb-1">
                  User Guidance
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Citizens receive plain-language eligibility, required documents, and nearby service centers.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-stone-700/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Actionable Steps</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Top Metric KPI Cards (4 Cards requested) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
              Total Services
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900">{totalServices}</span>
              <span className="text-xs text-stone-500 font-semibold">Cataloged</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Verified
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-900">{verifiedCount}</span>
              <span className="text-xs text-emerald-700 font-semibold">Active</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
              Pending Review
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-900">{underReviewCount + pendingCount}</span>
              <span className="text-xs text-amber-700 font-semibold">In Queue</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-800 block mb-1">
              User Reports
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-orange-950">{userReportsCount}</span>
              <span className="text-xs text-orange-700 font-semibold">Feedback</span>
            </div>
          </div>
        </div>

        {/* 3. Filter Bar & Interactive Service Audit Records */}
        <div className="bg-stone-50/70 rounded-3xl border border-stone-200 p-6 shadow-sm">
          {/* Controls Bar & View Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-stone-500" />
              <div className="flex items-center gap-1.5 flex-wrap">
                {['all', 'Verified', 'Under Review', 'Pending'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      statusFilter === status
                        ? 'bg-emerald-800 text-white shadow-2xs'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {status === 'all' ? 'All Services' : status}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search service, category, or ref..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          {/* Audit Records Table: Service | Category | Status | Last Updated */}
          <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-2xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-100/80 border-b border-stone-200 text-stone-600 text-[11px] font-bold uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6">Service</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Last Updated</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
                {filteredRecords.map((rec) => {
                  const isVerified = rec.status === 'Verified';
                  const isUnderReview = rec.status === 'Under Review';
                  const isPending = rec.status === 'Pending';
                  const isRecentlyApproved = recentlyApprovedId === rec.id;

                  return (
                    <tr 
                      key={rec.id}
                      className={`transition-colors hover:bg-stone-50/70 ${
                        isRecentlyApproved ? 'bg-emerald-50/60' : ''
                      }`}
                    >
                      {/* Service Column */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="font-bold text-stone-900 text-xs sm:text-sm">
                          {rec.schemeName}
                        </div>
                        <div className="text-[11px] text-stone-500 font-medium">
                          {rec.ministry} • <span className="font-mono">{rec.gazetteRef}</span>
                        </div>
                      </td>

                      {/* Category Column */}
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-stone-100 text-stone-800 border border-stone-200">
                          {rec.category}
                        </span>
                      </td>

                      {/* Status Column with requested 🟡 Pending, 🔵 Under Review, 🟢 Verified */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${
                          isVerified
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                            : isUnderReview
                            ? 'bg-sky-100 text-sky-900 border border-sky-300'
                            : 'bg-amber-100 text-amber-950 border border-amber-300'
                        }`}>
                          <span className={`w-2 h-2 rounded-full ${
                            isVerified 
                              ? 'bg-emerald-600' 
                              : isUnderReview 
                              ? 'bg-sky-600' 
                              : 'bg-amber-500'
                          }`} />
                          {rec.status}
                        </span>
                      </td>

                      {/* Last Updated Column */}
                      <td className="py-3.5 px-4 text-stone-600 font-medium hidden md:table-cell whitespace-nowrap text-xs">
                        {rec.lastUpdated}
                      </td>

                      {/* Action Button */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        {!isVerified ? (
                          <button
                            type="button"
                            onClick={() => handleApproveRecord(rec.id)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-2xs transition-colors"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Verify</span>
                          </button>
                        ) : (
                          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                            Approved
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
