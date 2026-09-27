import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { HeroSlide } from '../types';

interface HeroProps {
  slides: HeroSlide[];
}

export const Hero: React.FC<HeroProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const active = slides[currentSlide];

  return (
    <section
      id="home"
      aria-label="Welcome Hero"
      className="relative w-full h-[580px] sm:h-[640px] lg:h-[720px] bg-slate-950 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[8000ms] ease-out"
          />
          {/* Subtle Dark Institutional Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-950/75 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl pt-10 sm:pt-0">
          {/* Official Badge / Subtitle */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{active.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-4 drop-shadow-sm text-balance">
            {active.title}
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-emerald-100/90 font-normal leading-relaxed mb-4 max-w-2xl drop-shadow">
            "{active.subtitle}"
          </p>

          <p className="text-xs sm:text-sm text-slate-300 mb-8 max-w-xl leading-normal">
            {active.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#welcome"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#welcome')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-900/30 transition-all duration-200 focus:ring-2 focus:ring-amber-400"
            >
              <span>{active.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </a>

            <a
              href="#admissions"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition-all duration-200 focus:ring-2 focus:ring-white"
            >
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>{active.secondaryCtaText}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute z-20 bottom-8 right-4 sm:right-8 flex items-center gap-3">
        {/* Previous / Next buttons */}
        <div className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md rounded-lg p-1 border border-white/10">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono tabular-nums text-emerald-200 px-1">
            0{currentSlide + 1} / 0{slides.length}
          </span>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div className="hidden sm:flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#welcome"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#welcome')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll down to welcome section"
        className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[11px] uppercase tracking-widest font-medium">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-amber-400 group-hover:translate-y-0.5 transition-transform" />
      </a>
    </section>
  );
};
