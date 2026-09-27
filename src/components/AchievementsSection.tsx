import React from 'react';
import {
  Award,
  Trophy,
  GraduationCap,
  Music,
  Compass,
  Star,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { AchievementItem } from '../types';

interface AchievementsProps {
  achievements: AchievementItem[];
}

export const AchievementsSection: React.FC<AchievementsProps> = ({ achievements }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic':
        return <GraduationCap className="w-5 h-5 text-emerald-700" />;
      case 'Sports':
        return <Trophy className="w-5 h-5 text-amber-600" />;
      case 'Arts & Culture':
        return <Music className="w-5 h-5 text-rose-600" />;
      case 'Leadership':
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 'Competitions':
        return <Award className="w-5 h-5 text-emerald-800" />;
      case 'Alumni':
        return <Star className="w-5 h-5 text-amber-500" />;
      default:
        return <Award className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
            <span>Honours & Milestones</span>
            <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Celebrating Excellence
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Recognizing dedicated effort and holistic accomplishments across scholarly pursuits,
            athletics, drama, and regional competitions.
          </p>
          <p className="text-xs text-slate-400 mt-2 italic">
            * Note: Content structured for continuous update by the school administration without fabricated statistical claims.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="font-bold text-amber-700">{item.year}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500">{item.category}</span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.recognitionLevel}</span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
