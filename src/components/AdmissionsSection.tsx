import React, { useState } from 'react';
import {
  ShieldCheck,
  FileCheck2,
  FileText,
  Download,
  Phone,
  HelpCircle,
  ArrowRight,
  Info,
  Calendar,
  DollarSign,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  X,
} from 'lucide-react';
import { EditableSchoolInfo } from '../types';

interface AdmissionsSectionProps {
  schoolInfo: EditableSchoolInfo;
  onOpenDownloads: () => void;
  onOpenContact: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  schoolInfo,
  onOpenDownloads,
  onOpenContact,
}) => {
  const [activeModal, setActiveModal] = useState<'info' | 'fees' | 'process' | null>(null);

  const admissionSteps = [
    {
      step: '01',
      title: 'National Placement & NEMIS Selection',
      desc: 'Form 1 selection is processed through the Ministry of Education NEMIS portal. Candidate placements are officially transmitted to the school.',
    },
    {
      step: '02',
      title: 'Download Official Admission Package',
      desc: 'Access the admissions package including student personal record form, medical questionnaire, and uniform item checklist.',
    },
    {
      step: '03',
      title: 'Medical Clearance & Verification',
      desc: 'Have the official medical report certified by a registered medical doctor and prepare certified copies of birth certificate and assessment results.',
    },
    {
      step: '04',
      title: 'Physical Reporting & Registration',
      desc: 'Report to Maai-Mahiu Girls High School on the designated reporting date with all original credentials and boarding items for intake verification.',
    },
  ];

  return (
    <section id="admissions" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>Admissions Portal & Guidelines</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Begin Your Journey With Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Joining Maai-Mahiu Girls High School marks the beginning of an inspiring chapter of academic
            accomplishment, sisterhood, and personal character formation.
          </p>
        </div>

        {/* 3 Core Admissions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Joining the School */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 border border-emerald-100">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                Joining the School
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Maai-Mahiu Girls High School admits learners primarily through the national NEMIS selection
                criteria for public Extra-County secondary schools.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>National NEMIS placement eligibility</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Certified original & copy of birth certificate</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Certified assessment slips / result transcripts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Transfer requests processed subject to NEMIS guidelines</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveModal('info')}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
            >
              <span>Admission Requirements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Admissions Process */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-5 border border-amber-100">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                Admissions Process
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                A seamless, four-step institutional intake pathway ensuring transparent placement,
                proper health assessment, and smooth orientation for new students.
              </p>

              <div className="space-y-2 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2 py-1 border-b border-slate-100">
                  <span className="font-mono font-bold text-amber-700">01.</span>
                  <span>Ministry placement verification</span>
                </div>
                <div className="flex items-center gap-2 py-1 border-b border-slate-100">
                  <span className="font-mono font-bold text-amber-700">02.</span>
                  <span>Admission form package completion</span>
                </div>
                <div className="flex items-center gap-2 py-1 border-b border-slate-100">
                  <span className="font-mono font-bold text-amber-700">03.</span>
                  <span>Medical history certification</span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <span className="font-mono font-bold text-amber-700">04.</span>
                  <span>Physical reporting day & hostel allocation</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveModal('process')}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-amber-950 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors"
            >
              <span>Step-by-Step Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Downloads & Documents */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-5 border border-slate-200">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                Forms & Documents
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Download the official admission packet, medical examination sheets, uniform requirements,
                and school fee guidelines directly from the Document Center.
              </p>

              <div className="space-y-2 text-xs text-slate-600 mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between">
                  <span>Form 1 Admission Packet</span>
                  <span className="font-mono text-emerald-800 font-semibold">PDF</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Medical History Form</span>
                  <span className="font-mono text-emerald-800 font-semibold">PDF</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Uniform & Bedding Inventory</span>
                  <span className="font-mono text-emerald-800 font-semibold">PDF</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>MoE Fee Framework Guide</span>
                  <span className="font-mono text-emerald-800 font-semibold">PDF</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDownloads}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors"
            >
              <span>Access Document Center</span>
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Large Prominent Banner & CTA */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 border border-emerald-900 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Academic Year 2026 Admissions Desk</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Ready to Join Maai-Mahiu Girls High School?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed mb-3">
              Parents, guardians, and transferred candidates are welcome to consult our admissions
              secretariat for reporting dates, NEMIS validation, or clarification on boarding requirements.
            </p>
            <p className="text-xs text-amber-300/80 italic">
              * Official fee amounts conform strictly to Ministry of Education guidelines for Extra-County public boarding secondary schools.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={() => setActiveModal('info')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg transition-all duration-200 whitespace-nowrap"
            >
              <span>VIEW ADMISSIONS INFORMATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-white border border-emerald-700/60 transition-all duration-200 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Contact Admissions</span>
            </button>
          </div>
        </div>
      </div>

      {/* Admissions Info Modal */}
      {activeModal === 'info' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <FileCheck2 className="w-5 h-5 text-emerald-800" />
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  Comprehensive Admissions Guide
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-5 text-xs sm:text-sm text-slate-700">
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-base mb-1">
                  1. Admission Requirements (Editable Placeholder)
                </h4>
                <p className="text-slate-600 mb-2">
                  [Official admission requirements placeholder: To be confirmed by the school administration and Ministry of Education].
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Official NEMIS Placement Letter printed from the Ministry of Education website.</li>
                  <li>Original & certified copies of candidate's Birth Certificate.</li>
                  <li>Original Primary Assessment / Examination Results Slip.</li>
                  <li>Four (4) recent passport-sized color photographs.</li>
                  <li>Certified copy of Parent or Legal Guardian’s National Identification Card.</li>
                </ul>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
                <h4 className="font-serif font-bold text-amber-900 text-sm mb-1 flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-amber-700" />
                  <span>Fees Information (Official Placeholder)</span>
                </h4>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Notice: Maai-Mahiu Girls High School does NOT independently set tuition or boarding charges.
                  All school fees strictly conform to the national public secondary school fee circular issued
                  by the Ministry of Education.
                  <span className="block mt-1 font-semibold">
                    [Official Approved Fee Structure: To be confirmed by the School Bursar upon release of termly circulars].
                  </span>
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-slate-900 text-base mb-1">
                  2. Application & Reporting Dates (Placeholder)
                </h4>
                <p className="text-slate-600">
                  [Application & Reporting Dates: Placed candidates report on dates designated in the Ministry of Education school calendar. Form 1 reporting typically begins at 8:00 AM on the specified opening day.]
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-slate-900 text-base mb-1">
                  3. Admissions Office Contact
                </h4>
                <p className="text-slate-600">
                  For admissions inquiries, parents may reach the secretariat at:
                  <span className="block font-semibold text-slate-800 mt-1">Phone: {schoolInfo.phone}</span>
                  <span className="block font-semibold text-slate-800">Email: {schoolInfo.email}</span>
                  <span className="block text-slate-600">Location: Maai-Mahiu, Nakuru County, Kenya</span>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  setActiveModal(null);
                  onOpenDownloads();
                }}
                className="text-xs font-semibold text-emerald-800 hover:underline"
              >
                Go to Admission Downloads →
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step by Step Process Modal */}
      {activeModal === 'process' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-serif font-bold text-lg text-slate-900">
                Step-by-Step Admission Process
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4">
              {admissionSteps.map((s) => (
                <div key={s.step} className="flex gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-slate-900 mb-1">{s.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
