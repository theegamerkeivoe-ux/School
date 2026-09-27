import React from 'react';
import {
  Users,
  GraduationCap,
  Calendar,
  Download,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface QuickAccessProps {
  onOpenPortal: (role?: 'student' | 'parent' | 'teacher' | 'admin') => void;
  onOpenDownloads: () => void;
  onOpenContact: () => void;
}

export const ParentStudentQuickAccess: React.FC<QuickAccessProps> = ({
  onOpenPortal,
  onOpenDownloads,
  onOpenContact,
}) => {
  const quickCards = [
    {
      title: 'Parent Information',
      desc: 'Visiting days schedules, academic progress reports, and consultative clinic dates.',
      icon: <Users className="w-5 h-5 text-emerald-800" />,
      action: () => onOpenPortal('parent'),
      badge: 'Parent Desk',
    },
    {
      title: 'Student Information',
      desc: 'Termly subject syllabus outlines, prep timetables, and library borrowing policies.',
      icon: <GraduationCap className="w-5 h-5 text-amber-600" />,
      action: () => onOpenPortal('student'),
      badge: 'Learner Desk',
    },
    {
      title: 'School Calendar',
      desc: 'Term 1, 2, and 3 opening dates, mid-term breaks, and national examination schedules.',
      icon: <Calendar className="w-5 h-5 text-emerald-700" />,
      action: () => onOpenPortal('parent'),
      badge: '2026 Dates',
    },
    {
      title: 'Official Downloads',
      desc: 'Admission forms, fee payment guidelines, uniform lists, and school newsletters.',
      icon: <Download className="w-5 h-5 text-blue-600" />,
      action: onOpenDownloads,
      badge: 'Document Hub',
    },
    {
      title: 'School Policies',
      desc: 'Student code of discipline, hostel safety regulations, and electronic media rules.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-800" />,
      action: onOpenDownloads,
      badge: 'Code of Conduct',
    },
    {
      title: 'Important Contacts',
      desc: 'Direct contact for the Principal, Deputy Principal, Senior Teacher, and Accounts Office.',
      icon: <PhoneCall className="w-5 h-5 text-amber-600" />,
      action: onOpenContact,
      badge: 'Helpline',
    },
  ];

  return (
    <section className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
              <span>Community Gateways</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2">
              Parents & Students
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              Quick access services, institutional schedules, policy documents, and digital portals.
            </p>
          </div>

          {/* Prominent Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenPortal('parent')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-900 hover:bg-emerald-800 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>Parent Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onOpenPortal('student')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickCards.map((c, i) => (
            <div
              key={i}
              onClick={c.action}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-400 cursor-pointer transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform">
                    {c.icon}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">
                    {c.badge}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-slate-900 mb-1 group-hover:text-emerald-900 transition-colors">
                  {c.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {c.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800 group-hover:text-emerald-950">
                <span>Access Resource</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
