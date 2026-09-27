import React from 'react';
import { Eye, Target, Compass, Edit3, Shield, Star, BookOpen, Clock, Heart } from 'lucide-react';
import { EditableSchoolInfo, CoreValue } from '../types';

interface AboutSectionProps {
  schoolInfo: EditableSchoolInfo;
  coreValues: CoreValue[];
  onOpenAdmin: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  schoolInfo,
  coreValues,
  onOpenAdmin,
}) => {
  const getValueIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'excellence':
        return <Star className="w-5 h-5 text-amber-500" />;
      case 'integrity':
        return <Shield className="w-5 h-5 text-emerald-600" />;
      case 'discipline':
        return <Clock className="w-5 h-5 text-emerald-700" />;
      case 'leadership':
        return <Compass className="w-5 h-5 text-amber-600" />;
      case 'respect':
        return <Heart className="w-5 h-5 text-rose-500" />;
      case 'responsibility':
        return <BookOpen className="w-5 h-5 text-emerald-600" />;
      default:
        return <Star className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
            <span>Identity & Heritage</span>
            <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            About Our Institution
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Founded to expand secondary educational opportunities for young women in Nakuru County,
            Maai-Mahiu Girls High School stands as a dedicated Extra-County center for holistic development.
          </p>
        </div>

        {/* Part 1: History Section */}
        <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200/80 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono">
                Historical Context & Mission
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2 mb-4">
                Our History & Journey
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Established within the bustling gateway region of Maai-Mahiu in Nakuru County,
                the school emerged from a profound community and governmental commitment to enhance
                girls’ secondary education within the Rift Valley. As an Extra-County public boarding institution,
                the school has progressively built its academic infrastructure, science laboratories, and boarding facilities
                to accommodate aspiring scholars from diverse counties across the Republic of Kenya.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Over the years, the institution has steadfastly prioritized gender equity in STEM education,
                cultivating a disciplined academic ethos, spiritual nurture, and empowering young women
                to break systemic barriers and take up leadership roles across Kenya and the globe.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-amber-700 block mb-1">
                  Institutional Classification
                </span>
                <p className="font-serif text-lg font-bold text-slate-900 mb-3">
                  Girls’ Extra-County Secondary School
                </p>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Ministry Category:</span>
                    <span className="font-semibold text-slate-800">Public Extra-County</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Gender:</span>
                    <span className="font-semibold text-slate-800">All-Girls Boarding</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">County / Sub-County:</span>
                    <span className="font-semibold text-slate-800">Nakuru / Naivasha</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Curriculum:</span>
                    <span className="font-semibold text-slate-800">KCSE & CBC Senior School</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-emerald-800 font-medium">Under Naivasha Sub-County MoE</span>
                <span className="text-[11px] text-slate-500">Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Vision Card */}
          <div className="relative bg-emerald-950 text-white rounded-2xl p-8 sm:p-10 shadow-lg overflow-hidden border border-emerald-800 flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-800/80 border border-emerald-700/60 flex items-center justify-center text-amber-300">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-[11px] tracking-wider uppercase font-semibold text-amber-300 bg-amber-950/60 border border-amber-600/40 px-2.5 py-1 rounded-md">
                  Strategic Vision
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-3">Our Vision</h3>

              <div className="p-5 rounded-xl bg-emerald-900/60 border border-emerald-800/70 mb-4">
                <p className="text-sm sm:text-base text-emerald-100 leading-relaxed italic">
                  "{schoolInfo.vision}"
                </p>
              </div>

              <p className="text-xs text-emerald-300/90 font-medium">
                Guiding institutional excellence, national leadership, and holistic transformation.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-800/80 flex items-center justify-between">
              <span className="text-xs text-emerald-200">Vision Statement Desk</span>
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-medium"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Customize Text</span>
              </button>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg overflow-hidden border border-slate-800 flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-amber-300">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-[11px] tracking-wider uppercase font-semibold text-amber-300 bg-amber-950/60 border border-amber-600/40 px-2.5 py-1 rounded-md">
                  Institutional Mission
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-3">Our Mission</h3>

              <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/70 mb-4">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  "{schoolInfo.mission}"
                </p>
              </div>

              <p className="text-xs text-slate-300 font-medium">
                Delivering high-quality curriculum, character moulding, and values-led scholarship.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-300">Mission Statement Desk</span>
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-medium"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Customize Text</span>
              </button>
            </div>
          </div>
        </div>

        {/* Part 3: Core Values */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono">
                Foundational Principles
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Institutional Core Values
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-600 font-medium">
                Pillars of Character & Integrity
              </span>
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <Edit3 className="w-3 h-3 text-amber-600" />
                <span>Edit Values</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={val.name}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                    {getValueIcon(val.name)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-slate-900">
                      {val.name}
                    </h4>
                    <span className="text-[11px] text-emerald-700 font-medium">
                      Pillar 0{idx + 1}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  {val.description}
                </p>
                {val.verseOrMottoPlaceholder && (
                  <div className="pt-2 border-t border-slate-100 text-[11px] text-amber-700 font-medium italic">
                    "{val.verseOrMottoPlaceholder}"
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
