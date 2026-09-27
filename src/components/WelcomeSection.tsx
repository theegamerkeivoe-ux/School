import React from 'react';
import { ArrowRight, Compass, Sparkles, BookOpenCheck } from 'lucide-react';
import { EditableSchoolInfo } from '../types';

interface WelcomeSectionProps {
  schoolInfo: EditableSchoolInfo;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ schoolInfo }) => {
  return (
    <section id="welcome" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Campus Imagery with Elegant Institutional Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="/src/assets/images/hero_school_campus_1790533272059.jpg"
                alt="Maai-Mahiu Girls High School Campus and Facilities"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />

              {/* Floating Institutional Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-emerald-100 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-emerald-800">
                    Nakuru County · Kenya
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    A Conducive Environment in the Rift Valley
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Subtle decorative geometric background element */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 bg-amber-100/50 rounded-2xl -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-emerald-50 rounded-2xl -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category / Sub-heading */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3">
              <span className="w-6 h-0.5 bg-amber-500 inline-block"></span>
              <span>Institutional Overview</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-6 text-balance">
              Welcome to Maai-Mahiu Girls High School
            </h2>

            {/* Introductory Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
              Maai-Mahiu Girls High School provides a disciplined, supportive, and intellectually
              stimulating environment where young women develop academically, socially, creatively,
              and as visionary leaders. Situated against the majestic backdrop of Nakuru County's
              Great Rift Valley, our school is dedicated to cultivating self-reliant, morally
              grounded, and forward-thinking individuals prepared for higher learning and societal impact.
            </p>

            {/* The Highlight Card */}
            <div className="p-5 rounded-xl bg-emerald-50/80 border-l-4 border-emerald-700 mb-8 flex items-start gap-4 shadow-sm">
              <Sparkles className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-serif font-bold text-emerald-950 text-base sm:text-lg leading-snug">
                  "A place to learn. A place to grow. A place to lead."
                </p>
                <p className="text-xs text-emerald-800 mt-1">
                  Guiding girls from across Kenya to achieve their highest academic potential and character.
                </p>
              </div>
            </div>

            {/* Key Academic Pillars */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <BookOpenCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">Rigorous Academic Standards</span>
              </div>
              <div className="flex items-center gap-2.5">
                <BookOpenCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">Character & Moral Integrity</span>
              </div>
              <div className="flex items-center gap-2.5">
                <BookOpenCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">STEM & Creative Literacy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <BookOpenCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">Safe & Caring Boarding Life</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 hover:bg-emerald-200 active:bg-emerald-300 rounded-lg transition-all duration-200 group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-emerald-800 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
