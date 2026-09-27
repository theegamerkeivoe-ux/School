import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Users,
  Briefcase,
  Lock,
  Layers,
  Sparkles,
} from 'lucide-react';
import { HeroSlide } from '../types';

interface HeroProps {
  slides: HeroSlide[];
  onOpenPortal?: (role?: 'student' | 'parent' | 'teacher' | 'admin') => void;
}

export const Hero: React.FC<HeroProps> = ({ slides, onOpenPortal }) => {
  // Completely fixed, rock-solid presentation with user-controlled tabs (NO sliding or automatic shifts)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const activePhoto = slides[selectedPhotoIndex] || slides[0];

  const photoOptions = [
    { label: 'Academic & STEM', subtitle: 'Modern Science & ICT Labs', icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { label: 'Sports & Athletics', subtitle: 'Championship Track & Fields', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: 'Campus Grounds', subtitle: 'Great Rift Valley Setting', icon: <Layers className="w-3.5 h-3.5" /> },
  ];

  return (
    <section
      id="home"
      aria-label="Official Welcome"
      className="relative w-full bg-gradient-to-b from-emerald-950 via-slate-950 to-emerald-950 text-white py-14 sm:py-20 lg:py-24 border-b border-emerald-900/60"
    >
      {/* Background Architectural Watermark / Atmosphere */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ca8a04_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authoritative Institutional Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* National Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-900/80 border border-emerald-600/40 text-emerald-200 text-xs font-semibold tracking-wider uppercase mb-5 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Nakuru County · Extra-County Girls High School · MoE Registered</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-5 text-balance">
              Nurturing Excellence. Inspiring Futures.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-emerald-100/90 font-normal leading-relaxed mb-4 max-w-2xl">
              "Empowering young women through academic excellence, character, leadership and opportunity."
            </p>

            <p className="text-xs sm:text-sm text-slate-300 mb-8 max-w-xl leading-relaxed">
              Situated in Maai-Mahiu against the majestic scenery of the Great Rift Valley, our institution
              provides a secure, spiritually grounded, and technologically enabled learning sanctuary for scholars across Kenya.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#welcome"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#welcome')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <span>Explore Our School</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#admissions"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Admissions 2026</span>
              </a>

              {onOpenPortal && (
                <button
                  onClick={() => onOpenPortal()}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white border border-emerald-600/50 shadow-sm transition-all duration-200"
                >
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>Portal Login</span>
                </button>
              )}
            </div>

            {/* Direct Access to the 4 School Portals */}
            <div className="mb-8 p-3.5 rounded-2xl bg-emerald-950/70 border border-emerald-800/80 backdrop-blur-xs">
              <p className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>Secure Role Portals (Instant 1-Click Access)</span>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => onOpenPortal?.('student')}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-left border border-emerald-700/60 transition-all text-white text-xs font-semibold"
                >
                  <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">Student</span>
                </button>

                <button
                  onClick={() => onOpenPortal?.('parent')}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-950/80 hover:bg-amber-900 text-left border border-amber-600/60 transition-all text-amber-100 text-xs font-semibold"
                >
                  <Users className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">Parent</span>
                </button>

                <button
                  onClick={() => onOpenPortal?.('teacher')}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-950/80 hover:bg-blue-900 text-left border border-blue-600/60 transition-all text-blue-100 text-xs font-semibold"
                >
                  <Briefcase className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="truncate">Teacher</span>
                </button>

                <button
                  onClick={() => onOpenPortal?.('admin')}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-rose-950/80 hover:bg-rose-900 text-left border border-rose-600/60 transition-all text-rose-100 text-xs font-semibold"
                >
                  <ShieldCheck className="w-4 h-4 text-rose-300 shrink-0" />
                  <span className="truncate">Admin</span>
                </button>
              </div>
            </div>

            {/* Fixed Institutional Badges Strip (Stable, not shifting) */}
            <div className="pt-6 border-t border-emerald-900/80 grid grid-cols-3 gap-3 text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">MoE Approved</span>
                  <span className="text-[11px] text-emerald-300">Public Extra-County</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">KCSE & CBC</span>
                  <span className="text-[11px] text-emerald-300">Senior Pathways</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">All-Girls Boarding</span>
                  <span className="text-[11px] text-emerald-300">Secure Environment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fixed High-Fidelity Photographic Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-800/60 bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              {/* Floating Verified Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                <span>Empowering Young Women</span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif font-bold text-base sm:text-lg drop-shadow">
                  {activePhoto.title}
                </p>
                <p className="text-xs text-emerald-200 drop-shadow line-clamp-1">
                  {activePhoto.subtitle}
                </p>
              </div>
            </div>

            {/* Manual Photo Switcher (Completely Fixed, No Auto-Sliding or Shift) */}
            <div className="mt-3 p-1.5 bg-emerald-950/90 rounded-2xl border border-emerald-900/90 flex items-center justify-between gap-1 shadow-sm">
              {photoOptions.map((opt, idx) => (
                <button
                  key={opt.label}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`flex-1 py-2 px-2 text-center rounded-xl text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    selectedPhotoIndex === idx
                      ? 'bg-amber-400 text-slate-950 shadow-xs'
                      : 'text-emerald-200/80 hover:text-white hover:bg-emerald-900/60'
                  }`}
                >
                  {opt.icon}
                  <span className="block truncate">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="text-center mt-10">
        <a
          href="#welcome"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#welcome')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-1.5 text-xs text-emerald-300/80 hover:text-white transition-colors cursor-pointer"
        >
          <span>Explore School Profile</span>
          <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
        </a>
      </div>
    </section>
  );
};
