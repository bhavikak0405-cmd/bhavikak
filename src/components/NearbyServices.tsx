import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Building2, 
  HeartPulse, 
  Wheat, 
  GraduationCap, 
  Landmark, 
  Phone, 
  Clock, 
  Navigation, 
  Search, 
  Compass, 
  CheckCircle2, 
  Info,
  Layers,
  ChevronRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { Language } from '../types';

interface RuralFacility {
  id: string;
  name: string;
  type: 'gov' | 'hospital' | 'agriculture' | 'school' | 'service-center';
  typeLabel: string;
  distance: string;
  address: string;
  contactPerson: string;
  role: string;
  phone: string;
  timing: string;
  isOpen: boolean;
  servicesProvided: string[];
  coordinates: { x: number; y: number }; // Relative position on the vector map (0-100%)
}

const SAMPLE_FACILITIES: RuralFacility[] = [
  {
    id: 'fac-1',
    name: 'Gram Panchayat Bhavan & CSC Digital Kendra',
    type: 'service-center',
    typeLabel: 'CSC & Public Services',
    distance: '0.6 km',
    address: 'Kalyanpur Gram Panchayat, Near Main Banyan Chaura, Block Rampur',
    contactPerson: 'Rameshwar Verma (VLE)',
    role: 'Village Level Entrepreneur',
    phone: '+91 94150 88219',
    timing: 'Mon - Sat: 9:00 AM - 6:00 PM',
    isOpen: true,
    servicesProvided: ['Aadhaar e-KYC', 'PM-Kisan DBT Registration', 'Digital Khatauni Print', 'AePS Cash Withdrawal'],
    coordinates: { x: 45, y: 52 }
  },
  {
    id: 'fac-2',
    name: 'Primary Health Centre (PHC) & Ayushman Arogya Mandir',
    type: 'hospital',
    typeLabel: 'Healthcare & Hospital',
    distance: '1.4 km',
    address: 'Tehsil Link Road, Sector 3, Rampur Rural',
    contactPerson: 'Dr. Sunita Devi (MOIC)',
    role: 'Medical Officer In-Charge',
    phone: '0595-2350102 / 108',
    timing: '24x7 Emergency & Maternity • OPD 8:00 AM - 2:00 PM',
    isOpen: true,
    servicesProvided: ['Free MBBS Consultation', 'eSanjeevani Tele-Specialist', 'Essential Generic Medicines', 'Child Immunization'],
    coordinates: { x: 72, y: 38 }
  },
  {
    id: 'fac-3',
    name: 'Krishi Vigyan Kendra (KVK) & Soil Testing Lab',
    type: 'agriculture',
    typeLabel: 'Agriculture Center',
    distance: '2.8 km',
    address: 'ICAR Extension Campus, State Highway 43',
    contactPerson: 'Dr. Arvind Patel',
    role: 'Senior Agronomist / Extension Officer',
    phone: '+91 98391 44520',
    timing: 'Mon - Fri: 9:30 AM - 5:00 PM',
    isOpen: true,
    servicesProvided: ['Soil Health Card Analysis', 'Certified Seeds Distribution', 'Pest Outbreak Diagnosis', 'Drone Spray Demos'],
    coordinates: { x: 28, y: 28 }
  },
  {
    id: 'fac-4',
    name: 'Tehsil Revenue Office & Sub-Divisional Magistrate (SDM)',
    type: 'gov',
    typeLabel: 'Government Office',
    distance: '4.2 km',
    address: 'Civil Lines Road, Tehsil Compound, Rampur District',
    contactPerson: 'Sanjay Rawat',
    role: 'Naib Tehsildar (Land Records)',
    phone: '0595-2351400',
    timing: 'Mon - Sat: 10:00 AM - 5:00 PM (Public Hearing: 10-12 AM)',
    isOpen: true,
    servicesProvided: ['Land Demarcation (Gata Napai)', 'Caste & Income Certificates', 'Khasra-Khatauni Corrections', 'Mutation (Dakhil Kharij)'],
    coordinates: { x: 80, y: 70 }
  },
  {
    id: 'fac-5',
    name: 'Panchayat Samiti Government Senior Secondary School',
    type: 'school',
    typeLabel: 'Schools & Education',
    distance: '1.1 km',
    address: 'Near Village Water Reservoir, Kalyanpur',
    contactPerson: 'Smt. Kamlesh Kumari',
    role: 'Headmistress',
    phone: '+91 94123 77102',
    timing: 'Mon - Sat: 8:00 AM - 2:00 PM',
    isOpen: true,
    servicesProvided: ['Free School Admissions (Class 1-12)', 'PM POSHAN Mid-Day Meals', 'Free Uniforms & NCERT Books', 'NSP Scholarship Helpdesk'],
    coordinates: { x: 55, y: 22 }
  },
  {
    id: 'fac-6',
    name: 'India Post Payments Bank (IPPB) Branch & Dak Ghar',
    type: 'service-center',
    typeLabel: 'Banking & Postal Hub',
    distance: '0.9 km',
    address: 'Sub Post Office, Kalyanpur Bazaar',
    contactPerson: 'Pradeep Kumar (Gramin Dak Sevak)',
    role: 'Postmaster / Micro-ATM Operator',
    phone: '1800-8899-860',
    timing: 'Mon - Sat: 9:00 AM - 4:00 PM',
    isOpen: true,
    servicesProvided: ['Doorstep Micro-ATM Cash Payment', 'Aadhaar Mobile Seeding', 'Sukanya Samriddhi Accounts', 'Direct DBT Seeding'],
    coordinates: { x: 35, y: 68 }
  }
];

interface NearbyServicesProps {
  currentLang: Language;
}

export const NearbyServices: React.FC<NearbyServicesProps> = ({ currentLang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedFacilityId, setSelectedFacilityId] = useState<string>('fac-1');
  const [searchPincode, setSearchPincode] = useState<string>('244901');

  const filteredFacilities = SAMPLE_FACILITIES.filter(f => {
    if (activeFilter === 'all') return true;
    return f.type === activeFilter;
  });

  const activeFacility = SAMPLE_FACILITIES.find(f => f.id === selectedFacilityId) || SAMPLE_FACILITIES[0];

  const filterTabs = [
    { id: 'all', label: 'All Nearby' },
    { id: 'gov', label: 'Govt Offices' },
    { id: 'hospital', label: 'Hospitals & PHC' },
    { id: 'agriculture', label: 'Agri Centers' },
    { id: 'school', label: 'Schools' },
    { id: 'service-center', label: 'CSC & Banking' }
  ];

  return (
    <section 
      id="nearby-services" 
      className="py-16 md:py-24 bg-[#FAFBF9] border-b border-stone-200/80 scroll-mt-14 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-300 text-orange-950 text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <Compass className="w-4 h-4 text-orange-700" />
            <span>Last-Mile Panchayat GIS Locator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Nearby Public Services & Centers
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Find the closest Gram Panchayat office, Primary Health Centre, Common Service Centre, or Krishi Vigyan Kendra within your local block.
          </p>

          {/* Demonstration Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-stone-100 border border-stone-200 text-xs text-stone-600 font-mono">
            <Info className="w-3.5 h-3.5 text-stone-500 shrink-0" />
            <span>Demonstration GIS Data • Illustrating standard rural block infrastructure</span>
          </div>
        </div>

        {/* Filter Tabs & Location Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  activeFilter === tab.id
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-300 hover:bg-stone-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Village / Pincode Simulator */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <MapPin className="w-4 h-4 text-emerald-700 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchPincode}
                onChange={(e) => setSearchPincode(e.target.value)}
                placeholder="Enter Pincode or Village..."
                className="w-full pl-9 pr-3 py-2 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 font-medium focus:outline-none focus:border-emerald-600"
              />
            </div>
            <span className="text-xs font-semibold px-2.5 py-2 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 whitespace-nowrap">
              Rampur Block
            </span>
          </div>
        </div>

        {/* Main Grid: Interactive Vector Map + Facilities Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Interactive Polished Vector Map (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 p-5 sm:p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
            {/* Top Map Bar */}
            <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Interactive Panchayat GIS Radar
                </span>
              </div>
              <span className="text-[11px] font-mono text-stone-400">
                Lat 28.807° N • Long 79.027° E
              </span>
            </div>

            {/* Visual Vector Map Canvas */}
            <div className="relative w-full aspect-[16/10] bg-gradient-to-b from-stone-100 via-emerald-50/40 to-stone-100 rounded-2xl border border-stone-200 overflow-hidden select-none">
              {/* SVG Topographical Contours & Village Roads */}
              <svg 
                viewBox="0 0 700 440" 
                className="w-full h-full object-cover"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Canal / Water Body */}
                <path
                  d="M -20 180 Q 150 140 320 220 T 720 180"
                  stroke="#93C5FD"
                  strokeWidth="14"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M -20 180 Q 150 140 320 220 T 720 180"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.5"
                  strokeDasharray="8 6"
                />

                {/* Village Contours & Farm Plots */}
                <rect x="50" y="40" width="130" height="90" rx="8" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5" />
                <rect x="220" y="50" width="160" height="80" rx="8" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1.5" />
                <rect x="420" y="40" width="230" height="110" rx="8" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5" />
                
                <rect x="60" y="270" width="160" height="120" rx="8" fill="#FEF9C3" stroke="#FDE047" strokeWidth="1.5" />
                <rect x="270" y="290" width="190" height="100" rx="8" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5" />
                <rect x="500" y="260" width="160" height="140" rx="8" fill="#F0FDFA" stroke="#99F6E4" strokeWidth="1.5" />

                {/* Primary Village Roads */}
                {/* Main Village Road */}
                <path
                  d="M 350 -10 L 350 450"
                  stroke="#CBD5E1"
                  strokeWidth="10"
                />
                <path
                  d="M 350 -10 L 350 450"
                  stroke="#F8FAFC"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Cross East-West Connector Road */}
                <path
                  d="M -10 240 L 710 240"
                  stroke="#CBD5E1"
                  strokeWidth="8"
                />
                <path
                  d="M -10 240 L 710 240"
                  stroke="#F8FAFC"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />

                {/* Diagonal Tehsil Link */}
                <path
                  d="M 350 240 Q 520 280 720 330"
                  stroke="#E2E8F0"
                  strokeWidth="6"
                />

                {/* Village Center Roundabout */}
                <circle cx="350" cy="240" r="22" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
                <circle cx="350" cy="240" r="8" fill="#047857" />
                <text x="350" y="275" fill="#475569" fontSize="9" fontWeight="bold" textAnchor="middle">
                  Kalyanpur Chaura
                </text>
              </svg>

              {/* Plotted Facility Interactive Pins */}
              {SAMPLE_FACILITIES.map((facility) => {
                const isSelected = facility.id === selectedFacilityId;

                return (
                  <button
                    key={facility.id}
                    onClick={() => setSelectedFacilityId(facility.id)}
                    style={{
                      left: `${facility.coordinates.x}%`,
                      top: `${facility.coordinates.y}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                    title={facility.name}
                  >
                    {/* Pulsing ring on active selection */}
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full bg-emerald-500/30 animate-ping" />
                    )}

                    <div className={`relative flex items-center justify-center rounded-full p-2 transition-all shadow-md ${
                      isSelected
                        ? 'bg-emerald-800 text-white ring-4 ring-emerald-300 scale-125 z-30'
                        : 'bg-white text-stone-800 hover:bg-stone-50 ring-2 ring-stone-400 hover:scale-110'
                    }`}>
                      {facility.type === 'hospital' && <HeartPulse className="w-3.5 h-3.5 text-rose-600" />}
                      {facility.type === 'agriculture' && <Wheat className="w-3.5 h-3.5 text-amber-600" />}
                      {facility.type === 'gov' && <Building2 className="w-3.5 h-3.5 text-blue-600" />}
                      {facility.type === 'school' && <GraduationCap className="w-3.5 h-3.5 text-purple-600" />}
                      {facility.type === 'service-center' && <Landmark className="w-3.5 h-3.5 text-emerald-700" />}
                    </div>

                    {/* Floating Pin Label */}
                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold whitespace-nowrap pointer-events-none transition-opacity shadow-xs ${
                      isSelected
                        ? 'bg-stone-900 text-white opacity-100'
                        : 'bg-white/95 text-stone-800 border border-stone-200 opacity-0 group-hover:opacity-100'
                    }`}>
                      {facility.name.split(' ')[0]} ({facility.distance})
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Selected Facility Quick Card (Overlay beneath map) */}
            <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    {activeFacility.typeLabel}
                  </span>
                  <span className="text-xs font-semibold text-stone-500">
                    📍 {activeFacility.distance} from your location
                  </span>
                </div>
                <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                  {activeFacility.name}
                </h4>
                <p className="text-xs text-stone-600 font-normal">
                  {activeFacility.address}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${activeFacility.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-3.5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Officer</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Facilities Directory Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-display font-bold text-lg text-stone-900">
                Verified Centers ({filteredFacilities.length})
              </h3>
              <span className="text-xs font-semibold text-stone-500">
                Click a card to highlight
              </span>
            </div>

            <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1">
              {filteredFacilities.map((facility) => {
                const isSelected = facility.id === selectedFacilityId;

                return (
                  <div
                    key={facility.id}
                    onClick={() => setSelectedFacilityId(facility.id)}
                    className={`p-4 sm:p-5 rounded-2xl cursor-pointer border-2 transition-all ${
                      isSelected
                        ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-600/15'
                        : 'bg-white border-stone-200 hover:border-emerald-300 hover:bg-stone-50/80 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="inline-block text-[11px] font-bold text-emerald-900 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md mb-1">
                          {facility.typeLabel}
                        </span>
                        <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                          {facility.name}
                        </h4>
                      </div>
                      <span className="text-xs font-bold text-stone-700 bg-stone-100 px-2 py-1 rounded-lg shrink-0">
                        {facility.distance}
                      </span>
                    </div>

                    <p className="text-xs text-stone-600 mb-3 flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                      <span>{facility.address}</span>
                    </p>

                    {/* Operational Details */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-600 mb-3 p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-stone-400 block">Lead Person:</span>
                        <span className="font-semibold text-stone-800">{facility.contactPerson}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-stone-400 block">Hours:</span>
                        <span className="font-semibold text-emerald-800">{facility.timing.split('•')[0]}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {facility.servicesProvided.slice(0, 3).map((srv, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-medium bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
                          ✓ {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
