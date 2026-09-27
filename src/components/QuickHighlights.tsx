import React from 'react';
import { GraduationCap, Award, Trophy, HeartHandshake, ArrowUpRight } from 'lucide-react';
import { HighlightCard } from '../types';

interface QuickHighlightsProps {
  highlights: HighlightCard[];
}

export const QuickHighlights: React.FC<QuickHighlightsProps> = ({ highlights }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-emerald-700" />;
      case 'Award':
        return <Award className="w-7 h-7 text-amber-600" />;
      case 'Trophy':
        return <Trophy className="w-7 h-7 text-emerald-700" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-amber-600" />;
      default:
        return <GraduationCap className="w-7 h-7 text-emerald-700" />;
    }
  };

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with subtle background */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-xl bg-slate-50 group-hover:bg-emerald-50 border border-slate-100 flex items-center justify-center transition-colors duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-emerald-700 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative accent bar at bottom */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                <span className="group-hover:translate-x-0.5 transition-transform">Institutional Pillar</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 group-hover:rotate-45 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
