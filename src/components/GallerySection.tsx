import React, { useState } from 'react';
import {
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  photos: GalleryPhoto[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ photos }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'School Life',
    'Academics',
    'Sports',
    'Events',
    'Campus',
    'Student Activities',
  ];

  const filteredPhotos =
    activeCategory === 'All'
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
            <span>Visual Archive</span>
            <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Life at Maai-Mahiu Girls
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Moments of academic inquiry, joyful friendship, sportsmanship, and institutional milestones.
          </p>
        </div>

        {/* Category Filters (Anti-slop compliant button elements) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-3xl mx-auto mb-12 border border-slate-200/70">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* View Overlay Button */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Details at bottom (Unboxed clean metadata) */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-[11px] text-amber-300 font-semibold mb-1">
                  <span>{photo.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{photo.year}</span>
                </div>
                <h3 className="font-serif font-bold text-base text-white group-hover:text-amber-200 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="text-center">
          <button
            onClick={() => setActiveCategory('All')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-6 py-3 rounded-lg border border-emerald-200 transition-colors"
          >
            <ImageIcon className="w-4 h-4 text-emerald-700" />
            <span>View Full Gallery Archive</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Frame */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black">
              <img
                src={filteredPhotos[lightboxIndex].imageUrl}
                alt={filteredPhotos[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Caption & Metadata */}
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <div className="flex items-center justify-center gap-2 text-xs text-amber-300 font-semibold mb-1">
                <span>{filteredPhotos[lightboxIndex].category}</span>
                <span aria-hidden="true">·</span>
                <span>{filteredPhotos[lightboxIndex].year}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">
                  {lightboxIndex + 1} of {filteredPhotos.length}
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-white mb-1">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {filteredPhotos[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
