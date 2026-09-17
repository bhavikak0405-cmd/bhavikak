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
  Lock
} from 'lucide-react';
import { Language } from '../types';

interface ServiceAuditRecord {
  id: string;
  schemeName: string;
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
    schemeName: 'PM-Kisan Samman Nidhi (18th Installment Update)',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    gazetteRef: 'CG-DL-E-15092026-249102',
    status: 'Verified',
    auditor: 'Dr. A. K. Sharma (Principal Civic Analyst)',
    lastUpdated: 'Today at 08:30 AM',
    changeSummary: 'Mandatory Aadhaar-based Face Authentication e-KYC requirement ratified for kharif disbursements.',
    trustScore: 100
  },
  {
    id: 'rec-2',
    schemeName: 'Ayushman Bharat PM-JAY (Vaya Vandana Universal 70+)',
    ministry: 'National Health Authority (NHA)',
    gazetteRef: 'NHA/PMJAY/2026/CIR-19',
    status: 'Verified',
    auditor: 'Meenakshi Sundaram (Health Policy Lead)',
    lastUpdated: 'Yesterday at 04:15 PM',
    changeSummary: 'Universal ₹5 Lakh top-up health coverage extended to all citizens 70+ regardless of family income.',
    trustScore: 100
  },
  {
    id: 'rec-3',
    schemeName: 'DAP & Complex Fertilizer Subsidy Revision',
    ministry: 'Department of Fertilizers, MoC&F',
    gazetteRef: 'FERT/NBS/2026-Q3',
    status: 'Under Review',
    auditor: 'Pawan K. Mishra (Agriculture Reviewer)',
    lastUpdated: '3 hours ago',
    changeSummary: 'Special kharif seasonal concession per 50kg bag verified against district cooperative buffer stocks.',
    trustScore: 92
  },
  {
    id: 'rec-4',
    schemeName: 'PMAY-G Phase IV Rural Housing Survey Guidelines',
    ministry: 'Ministry of Rural Development',
    gazetteRef: 'MoRD/RH/2026/883',
    status: 'Under Review',
    auditor: 'Vandana Rao (Civil Rights Lead)',
    lastUpdated: '5 hours ago',
    changeSummary: 'Revised exclusion criteria for households owning motorized 2-wheelers under review.',
    trustScore: 88
  },
  {
    id: 'rec-5',
    schemeName: 'National Scholarship Portal Pre-Matric OTR Renewal',
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
    schemeName: 'Gram Panchayat Digital Survey & Drone Khatauni',
    ministry: 'Survey of India / MoPR',
    gazetteRef: 'SVAMITVA/2026/71',
    status: 'Verified',
    auditor: 'R. K. Sen (Revenue Audit Officer)',
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs">
                    01
                  </span>
                  <FileCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-white mb-1">
                  Admin Verification
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Civic analysts ingest gazette notifications, scheme guidelines, and direct benefit rules from official government sources.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-700/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Human-in-the-Loop Audit</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-amber-900/60 text-amber-300 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-xs">
                    02
                  </span>
                  <Database className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-white mb-1">
                  Verified Knowledge Base
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Approved rules are stored in a cryptographically fingerprinted vector database with exact citation links and eligibility formulas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-700/60 flex items-center gap-1.5 text-[11px] text-amber-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Immutable Citation Layer</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs">
                    03
                  </span>
                  <Bot className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-white mb-1">
                  Accurate AI Response
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  The LLM retrieves strictly from the Verified Knowledge Base. It cannot hallucinate or invent non-existent rules.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-700/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Grounded Vernacular Output</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Top Metric KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 sm:gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
              Total Services
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900">{totalServices}</span>
              <span className="text-xs text-stone-500 font-semibold">Schemes</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Verified Services
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-900">{verifiedCount}</span>
              <span className="text-xs text-emerald-700 font-semibold">Gazette OK</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
              Under Review
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-900">{underReviewCount}</span>
              <span className="text-xs text-amber-700 font-semibold">In Progress</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
              Pending Audit
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900">{pendingCount}</span>
              <span className="text-xs text-stone-500 font-semibold">Queued</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 col-span-2 sm:col-span-1">
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
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-stone-500" />
              <div className="flex items-center gap-1.5">
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
                    {status === 'all' ? 'All Records' : status}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search scheme or gazette ref..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          {/* Audit Records List */}
          <div className="space-y-3.5">
            {filteredRecords.map((rec) => {
              const isVerified = rec.status === 'Verified';
              const isUnderReview = rec.status === 'Under Review';
              const isPending = rec.status === 'Pending';
              const isRecentlyApproved = recentlyApprovedId === rec.id;

              return (
                <div
                  key={rec.id}
                  className={`p-5 rounded-2xl border transition-all duration-200 ${
                    isRecentlyApproved
                      ? 'bg-emerald-50/90 border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                      : 'bg-white border-stone-200 hover:border-stone-300 shadow-2xs'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Record Info */}
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        {/* Status Badge */}
                        <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          isVerified
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : isUnderReview
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-stone-100 text-stone-700 border border-stone-300'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            isVerified ? 'bg-emerald-600' : isUnderReview ? 'bg-amber-600' : 'bg-stone-500'
                          }`} />
                          {rec.status}
                        </span>

                        <span className="text-[11px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                          Gazette: {rec.gazetteRef}
                        </span>

                        <span className="text-xs text-stone-400">
                          Updated: {rec.lastUpdated}
                        </span>
                      </div>

                      <h4 className="font-bold text-stone-900 text-base mb-1">
                        {rec.schemeName}
                      </h4>
                      <p className="text-xs text-stone-500 font-medium mb-2">
                        {rec.ministry}
                      </p>
                      <p className="text-xs text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70 leading-relaxed font-normal">
                        <span className="font-semibold text-stone-900">Audit Scope:</span> {rec.changeSummary}
                      </p>
                    </div>

                    {/* Auditor Info & Action CTA */}
                    <div className="flex lg:flex-col items-center lg:items-end justify-between gap-3 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-stone-100">
                      <div className="text-right">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                          Assigned Auditor:
                        </span>
                        <span className="text-xs font-bold text-stone-800">
                          {rec.auditor}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {!isVerified && (
                          <button
                            type="button"
                            onClick={() => handleApproveRecord(rec.id)}
                            className="px-3.5 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-2xs transition-colors flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Approve & Verify</span>
                          </button>
                        )}
                        <button
                          type="button"
                          className="px-3 py-1.5 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 text-xs font-semibold transition-colors flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5 text-stone-500" />
                          <span>View Rules</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
