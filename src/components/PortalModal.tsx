import React, { useState } from 'react';
import {
  Users,
  GraduationCap,
  X,
  Search,
  CheckCircle2,
  Calendar,
  DollarSign,
  FileText,
  AlertCircle,
  Clock,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import { EditableSchoolInfo } from '../types';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'parent' | 'student';
  schoolInfo: EditableSchoolInfo;
}

export const PortalModal: React.FC<PortalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'parent',
  schoolInfo,
}) => {
  const [activeTab, setActiveTab] = useState<'parent' | 'student'>(initialTab);
  const [admNumber, setAdmNumber] = useState('');
  const [lookupResult, setLookupResult] = useState<any | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    if (admNumber.trim().length > 0) {
      // Simulate real student records lookup for parent transparency
      setLookupResult({
        admNo: admNumber.toUpperCase(),
        studentName: '[Student Name on Record]',
        formLevel: 'Form 3 Green',
        dormitory: 'Suswa House',
        attendance: '98.5% (Good Standing)',
        feeStatus: 'Compliant with MoE Term Circular',
        nextEvent: 'Termly Academic Assessment & Parent Clinic',
      });
    } else {
      setLookupResult(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Top Header */}
        <div className="bg-emerald-950 text-white p-6 sm:p-8 flex items-center justify-between border-b border-emerald-900 rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800 flex items-center justify-center text-amber-300">
              {activeTab === 'parent' ? (
                <Users className="w-6 h-6" />
              ) : (
                <GraduationCap className="w-6 h-6" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">
                  Institutional Digital Dashboard
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                {activeTab === 'parent' ? 'Parent Gateway' : 'Student Portal'}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close portal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 sm:px-8 pt-4 pb-2 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
          <button
            onClick={() => {
              setActiveTab('parent');
              setLookupResult(null);
              setHasSearched(false);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
              activeTab === 'parent'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Parent Dashboard</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('student');
              setLookupResult(null);
              setHasSearched(false);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
              activeTab === 'student'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Student Dashboard</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {activeTab === 'parent' ? (
            /* Parent Portal View */
            <div className="space-y-6">
              {/* Lookup Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="max-w-xl mb-4">
                  <h3 className="font-serif font-bold text-lg text-slate-900">
                    Student Status & Academic Record Verification
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Enter your daughter's official school Admission Number (e.g., MMG-2026-084) to verify enrollment status, house allocation, and termly notices.
                  </p>
                </div>

                <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-2 max-w-lg">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={admNumber}
                      onChange={(e) => setAdmNumber(e.target.value)}
                      placeholder="e.g. MMG-2026-084"
                      className="w-full pl-10 pr-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-colors shrink-0"
                  >
                    Check Status
                  </button>
                </form>

                {hasSearched && lookupResult && (
                  <div className="mt-5 p-4 rounded-xl bg-white border border-emerald-300 shadow-xs animate-in fade-in">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Verified Active Enrollment Record</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Admission No:</span>
                        <span className="font-mono font-bold text-slate-900">{lookupResult.admNo}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Learner:</span>
                        <span className="font-semibold text-slate-900">{lookupResult.studentName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Class & House:</span>
                        <span className="font-semibold text-slate-900">{lookupResult.formLevel} · {lookupResult.dormitory}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Term Status:</span>
                        <span className="font-semibold text-emerald-700">{lookupResult.feeStatus}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Term Dates & Academic Calendar */}
              <div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-700" />
                  <span>Termly Calendar & Opening Schedule (2026)</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-emerald-800 uppercase font-mono">Term 1</span>
                    <p className="text-sm font-bold text-slate-900 mt-1">January – April 2026</p>
                    <p className="text-xs text-slate-500 mt-1">Form 1 Orientation · Midterm Assessment · County Games</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-amber-700 uppercase font-mono">Term 2</span>
                    <p className="text-sm font-bold text-slate-900 mt-1">May – August 2026</p>
                    <p className="text-xs text-slate-500 mt-1">Music & Drama Festivals · Science Congress · Midterms</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-emerald-800 uppercase font-mono">Term 3</span>
                    <p className="text-sm font-bold text-slate-900 mt-1">September – November 2026</p>
                    <p className="text-xs text-slate-500 mt-1">Form 4 Prayer Day · KCSE National Examinations</p>
                  </div>
                </div>
              </div>

              {/* Fees Notice & Consultation Hours */}
              <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-start justify-between gap-4">
                <div>
                  <h4 className="font-serif font-bold text-amber-900 text-sm mb-1 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-amber-700" />
                    <span>Official Fees & Accounts Notice</span>
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed max-w-xl">
                    All fee payments must be remitted strictly via official school bank accounts or approved MoE paybill platforms. Cash payments are not accepted at the school gate for security compliance.
                  </p>
                </div>
                <div className="text-xs text-amber-950 font-semibold bg-white px-3 py-2 rounded-lg border border-amber-300 shrink-0">
                  Accounts Desk: Mon–Fri, 8AM–4PM
                </div>
              </div>
            </div>
          ) : (
            /* Student Portal View */
            <div className="space-y-6">
              {/* Daily Timetable & Prep Routine */}
              <div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span>Daily Academic & Boarding Routine</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-emerald-800">5:00 AM – 6:30 AM</span>
                    <p className="font-semibold text-slate-800 mt-0.5">Morning Devotion & Breakfast</p>
                    <p className="text-slate-500 text-[11px]">Dormitory inspection & assembly</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-emerald-800">7:00 AM – 1:00 PM</span>
                    <p className="font-semibold text-slate-800 mt-0.5">Morning Instructional Lessons</p>
                    <p className="text-slate-500 text-[11px]">Lectures, lab practicals & break</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-emerald-800">2:00 PM – 4:30 PM</span>
                    <p className="font-semibold text-slate-800 mt-0.5">Afternoon Classes & Co-Curricular</p>
                    <p className="text-slate-500 text-[11px]">Games, clubs & societies</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-emerald-800">7:00 PM – 9:30 PM</span>
                    <p className="font-semibold text-slate-800 mt-0.5">Supervised Evening Prep</p>
                    <p className="text-slate-500 text-[11px]">Quiet personal study & homework</p>
                  </div>
                </div>
              </div>

              {/* Student Resources Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <BookOpen className="w-5 h-5 text-emerald-700 mb-2" />
                    <h4 className="font-serif font-bold text-slate-900 text-sm">Library Catalog</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Access textbook syllabus allocations, reference encyclopedias, and past examination papers.
                    </p>
                  </div>
                  <span className="text-[11px] text-emerald-800 font-semibold mt-3">Syllabus Aligned</span>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <ShieldCheck className="w-5 h-5 text-amber-600 mb-2" />
                    <h4 className="font-serif font-bold text-slate-900 text-sm">Student Code of Conduct</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Guidelines on uniform discipline, dormitory care, peer respect, and academic honesty.
                    </p>
                  </div>
                  <span className="text-[11px] text-amber-800 font-semibold mt-3">School Integrity</span>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <Calendar className="w-5 h-5 text-blue-600 mb-2" />
                    <h4 className="font-serif font-bold text-slate-900 text-sm">Clubs & Prefects Roster</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Weekly meeting schedules for Science Club, Red Cross, St. John Ambulance, and Model UN.
                    </p>
                  </div>
                  <span className="text-[11px] text-blue-800 font-semibold mt-3">Every Wednesday & Friday</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between rounded-b-3xl">
          <span className="text-xs text-slate-500">
            Official Community Dashboard · Maai-Mahiu Girls High School
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
