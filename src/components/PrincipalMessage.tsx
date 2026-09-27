import React, { useState } from 'react';
import { ArrowRight, Quote, CheckCircle2, X, Award, ShieldCheck } from 'lucide-react';
import { EditableSchoolInfo } from '../types';

interface PrincipalMessageProps {
  schoolInfo: EditableSchoolInfo;
  onOpenAdmin: () => void;
}

export const PrincipalMessage: React.FC<PrincipalMessageProps> = ({
  schoolInfo,
  onOpenAdmin,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/90 shadow-xl overflow-hidden relative">
          {/* Subtle background crest / watermark decorative touch */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Professional Portrait Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5]">
                  <img
                    src="/src/assets/images/principal_portrait_1790533282697.jpg"
                    alt="School Principal"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />

                  {/* Identification Tag Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-100 text-center">
                    <p className="font-serif font-bold text-slate-900 text-base">
                      {schoolInfo.principalName}
                    </p>
                    <p className="text-xs font-semibold text-emerald-800">
                      Principal · Maai-Mahiu Girls High School
                    </p>
                  </div>
                </div>

                {/* Decorative border offset */}
                <div
                  className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-emerald-600/30 -z-10"
                  aria-hidden="true"
                />
              </div>

              {/* Status Note under portrait */}
              <div className="mt-6 flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Executive Institutional Leadership Desk</span>
              </div>
            </div>

            {/* Right: Principal's Official Welcome Message */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Category */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3">
                <Quote className="w-4 h-4 text-amber-500" />
                <span>Executive Welcome & Leadership Address</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Message from the Principal
              </h2>

              {/* Message Excerpt */}
              <div className="relative pl-6 border-l-4 border-emerald-700 mb-6 italic text-slate-700 text-base sm:text-lg leading-relaxed">
                "{schoolInfo.principalMessage}"
              </div>

              {/* Educational Commitments List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Student safety, emotional welfare & spiritual growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent parent-teacher collaborative partnership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Empowerment through national STEM & humanities programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Unwavering discipline and ethical civic consciousness</span>
                </div>
              </div>

              {/* Principal Signature Block */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    {schoolInfo.principalName}
                  </h3>
                  <p className="text-xs text-emerald-800 font-semibold">
                    {schoolInfo.principalTitle}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Maai-Mahiu Girls High School · Nakuru County
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm hover:shadow transition-colors group"
                  >
                    <span>Read the Principal’s Message</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-300 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenAdmin}
                    className="text-xs text-slate-500 hover:text-emerald-800 underline underline-offset-2"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Principal Message Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-slate-900">
                    Official Principal’s Address
                  </h3>
                  <p className="text-xs text-emerald-800">
                    Maai-Mahiu Girls High School
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 text-sm text-slate-700 leading-relaxed space-y-4">
              <p className="font-semibold text-slate-900">
                Dear Parents, Guardians, Prospective Learners, and School Community,
              </p>
              <p>
                {schoolInfo.principalMessage}
              </p>
              <p>
                At Maai-Mahiu Girls High School, we recognise that secondary school education constitutes
                a decisive bridge between childhood potential and adult leadership. Our teaching faculty
                combines rigorous classroom instruction with tailored remedial support to ensure no learner
                is left behind. Through our co-curricular programmes in athletics, music, drama, science clubs,
                and student governance, our girls discover their authentic strengths.
              </p>
              <p>
                We maintain an open-door policy with parents and guardians through scheduled consultation clinics,
                the student welfare office, and termly parent-teacher academic conferences. Together, we are building
                an institution that Nakuru County and the entire nation of Kenya can look upon with enduring pride.
              </p>
              <p className="italic text-emerald-900 font-medium pt-2">
                "May God bless our girls, our teachers, our parents, and Maai-Mahiu Girls High School."
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-serif font-bold text-sm text-slate-900">{schoolInfo.principalName}</p>
                <p className="text-xs text-slate-500">Principal & Secretary to the BOM</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                Close Message
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
