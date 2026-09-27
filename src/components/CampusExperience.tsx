import React from 'react';
import {
  BookOpen,
  FlaskConical,
  Library,
  UtensilsCrossed,
  Home,
  Trophy,
  Monitor,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { FacilityItem } from '../types';

interface CampusExperienceProps {
  facilities: FacilityItem[];
}

export const CampusExperience: React.FC<CampusExperienceProps> = ({ facilities }) => {
  const getFacilityIcon = (icon: string) => {
    switch (icon) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-emerald-700" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-amber-600" />;
      case 'Library':
        return <Library className="w-5 h-5 text-blue-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-emerald-800" />;
      case 'Home':
        return <Home className="w-5 h-5 text-amber-700" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-emerald-700" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-indigo-600" />;
      default:
        return <Building2 className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section id="campus" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              <Building2 className="w-4 h-4" />
              <span>Infrastructure & Learning Amenities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
              Campus Environment & Facilities
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Designed to foster focused concentration, scientific inquiry, physical wellness,
              and wholesome boarding life in Nakuru County.
            </p>
          </div>

          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 max-w-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Campus Infrastructure Standards</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Purpose-built facilities combining modern STEM laboratories, digital lecture rooms, secure boarding hostels, and championship sports fields.
            </p>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-700/80 flex items-center justify-center border border-slate-600 group-hover:scale-105 transition-transform">
                    {getFacilityIcon(fac.icon)}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-700">
                    {fac.tag}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {fac.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {fac.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span className="truncate">{fac.statusNote}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
