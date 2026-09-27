import React, { useState } from 'react';
import { Play, Sparkles, Youtube, ExternalLink, X, Film, CheckCircle2 } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
            <Film className="w-4 h-4" />
            <span>Documentary & Campus Tour</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Experience Maai-Mahiu Girls
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Step onto our campus grounds, tour our learning blocks, and hear the voices of our
            learners and dedicated faculty in Nakuru County.
          </p>
        </div>

        {/* Video Player Display Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 aspect-video group">
            {!isPlaying ? (
              <>
                {/* Poster Image */}
                <img
                  src="/src/assets/images/hero_school_campus_1790533272059.jpg"
                  alt="Experience Maai-Mahiu Girls High School Video Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/50 transition-colors flex flex-col items-center justify-center p-6 text-center" />

                {/* Big Animated Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play School Video"
                  className="absolute z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-400"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current text-white translate-x-1" />
                </button>

                {/* Video Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white/90">
                  <div className="text-left">
                    <p className="font-serif font-bold text-base sm:text-lg text-white">
                      Maai-Mahiu Girls High School Official Overview
                    </p>
                    <p className="text-xs text-emerald-300">
                      Curated Tour · Academic Rigour & Student Life
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/50 backdrop-blur-sm border border-white/10">
                    <Youtube className="w-4 h-4 text-red-500" />
                    <span>School Media Channel</span>
                  </div>
                </div>
              </>
            ) : (
              /* Simulated High-Definition Video Player Experience */
              <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-8 relative">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-lg bg-white/10 hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="max-w-md text-center">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-amber-300 mx-auto flex items-center justify-center mb-4">
                    <Youtube className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    Official School Video Stream
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-6">
                    [Official School YouTube Video Integration: Video placeholder configured. The school administration can embed the official YouTube URL or Vimeo link here.]
                  </p>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg"
                    >
                      Back to Preview
                    </button>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg"
                    >
                      <span>Open YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Watch Our Videos Link */}
          <div className="mt-8 text-center">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
            >
              <span>Watch Our Videos & Student Documentaries →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
