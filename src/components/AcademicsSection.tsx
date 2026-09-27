import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  FlaskConical,
  Calculator,
  Languages,
  Globe,
  Wrench,
  Monitor,
  CheckCircle,
  ArrowRight,
  ClipboardList,
  Compass,
  FileText,
  X,
} from 'lucide-react';
import { DepartmentItem } from '../types';

interface AcademicsSectionProps {
  departments: DepartmentItem[];
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ departments }) => {
  const [selectedDept, setSelectedDept] = useState<DepartmentItem | null>(null);
  const [activeTab, setActiveTab] = useState<'departments' | 'curriculum' | 'support' | 'examinations'>('departments');

  const getDeptIcon = (category: string) => {
    switch (category) {
      case 'Sciences':
        return <FlaskConical className="w-5 h-5 text-emerald-700" />;
      case 'Mathematics':
        return <Calculator className="w-5 h-5 text-amber-600" />;
      case 'Languages':
        return <Languages className="w-5 h-5 text-blue-600" />;
      case 'Humanities':
        return <Globe className="w-5 h-5 text-emerald-800" />;
      case 'Technical':
        return <Wrench className="w-5 h-5 text-amber-700" />;
      case 'ICT':
        return <Monitor className="w-5 h-5 text-indigo-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-emerald-700" />;
    }
  };

  const academicCards = [
    {
      id: 'curriculum',
      title: 'Curriculum & Pathways',
      icon: <GraduationCap className="w-5 h-5 text-emerald-700" />,
      desc: 'Instructional coverage conforming to Ministry of Education and KICD requirements, bridging KCSE and CBC Senior Secondary structures.',
    },
    {
      id: 'departments',
      title: 'Academic Departments',
      icon: <BookOpen className="w-5 h-5 text-amber-600" />,
      desc: 'Specialized departmental faculties supervising curriculum delivery, practical exercises, and learner academic tracking.',
    },
    {
      id: 'resources',
      title: 'Learning Resources',
      icon: <FlaskConical className="w-5 h-5 text-emerald-700" />,
      desc: 'Equipped science laboratories, comprehensive library collection, syllabus reference sets, and digital ICT research terminal.',
    },
    {
      id: 'examinations',
      title: 'Examinations & Evaluation',
      icon: <ClipboardList className="w-5 h-5 text-amber-600" />,
      desc: 'Continuous Assessment Tests (CATs), termly joint evaluation exams, and rigorous Form 4 KCSE revision symposiums.',
    },
    {
      id: 'support',
      title: 'Academic Support & Clinics',
      icon: <CheckCircle className="w-5 h-5 text-emerald-700" />,
      desc: 'Targeted morning remedial clinics, peer tutoring circles, and individual subject teacher consultative sessions.',
    },
    {
      id: 'guidance',
      title: 'Career & KUCCPS Guidance',
      icon: <Compass className="w-5 h-5 text-amber-600" />,
      desc: 'Subject selection guidance in Form 2, STEM university mentorship, KUCCPS career placement talks, and university readiness.',
    },
  ];

  return (
    <section id="academics" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
            <span>Scholarly Rigour & Faculty</span>
            <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Academic Excellence & Departments
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Inspired by organized institutional standards, our academic framework ensures disciplined
            teaching, learner-centered pedagogy, and well-rounded intellectual cultivation.
          </p>
        </div>

        {/* 6 Core Academic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {academicCards.map((card) => (
            <div
              key={card.id}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-xs mb-4">
                  {card.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-emerald-800 font-semibold">
                <span>Secondary School Standard</span>
                <span className="font-mono text-slate-400">·</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Academic Departments Showcase */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 border border-emerald-900 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Instructional Faculty
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  Academic Departments & Subjects
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200/80 mt-1 max-w-xl">
                  * Note: Department details are structured for school verification. Click any department to view subjects and curriculum scope.
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-200 bg-emerald-900/60 border border-emerald-800 px-3 py-1.5 rounded-lg">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>6 Core Instructional Departments</span>
              </div>
            </div>

            {/* Department Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {departments.map((dept) => (
                <div
                  key={dept.id}
                  onClick={() => setSelectedDept(dept)}
                  className="bg-emerald-900/40 hover:bg-emerald-900/80 border border-emerald-800/80 hover:border-amber-400/50 rounded-2xl p-5 cursor-pointer transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-800 flex items-center justify-center">
                        {getDeptIcon(dept.category)}
                      </div>
                      <span className="text-[11px] font-mono text-amber-400/90 group-hover:text-amber-300">
                        {dept.category}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-white group-hover:text-amber-200 transition-colors mb-2">
                      {dept.name}
                    </h4>

                    <p className="text-xs text-emerald-100/70 leading-relaxed mb-4 line-clamp-2">
                      {dept.description}
                    </p>

                    {/* Subject Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {dept.subjects.slice(0, 3).map((sub) => (
                        <span
                          key={sub}
                          className="text-[10px] bg-emerald-950/60 text-emerald-200 px-2 py-0.5 rounded border border-emerald-800"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-emerald-800/60 flex items-center justify-between text-xs text-amber-300 group-hover:text-amber-200">
                    <span className="text-[11px]">View Department Info</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Academic CTA */}
            <div className="mt-10 pt-6 border-t border-emerald-900 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-emerald-300">
                Adhering to Kenya National Examinations Council (KNEC) & KICD regulations
              </span>
              <a
                href="#admissions"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow transition-colors"
              >
                <span>Explore Admissions Process</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Department Detail Modal */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  {getDeptIcon(selectedDept.category)}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-slate-900">
                    {selectedDept.name}
                  </h3>
                  <span className="text-xs text-emerald-800 font-semibold">
                    {selectedDept.category} Division
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedDept(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
                  Departmental Scope
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedDept.description}
                </p>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                  Key Subjects Taught
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedDept.subjects.map((sub) => (
                    <span
                      key={sub}
                      className="px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-900 rounded-md border border-emerald-200"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <p className="font-semibold text-slate-800">Faculty Leadership Notice:</p>
                <p className="mt-0.5">{selectedDept.hodPlaceholder}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedDept(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg"
              >
                Close Department
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
