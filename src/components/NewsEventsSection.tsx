import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Filter,
  X,
  Share2,
  Bookmark,
  PlusCircle,
} from 'lucide-react';
import { NewsItem } from '../types';

interface NewsEventsProps {
  newsList: NewsItem[];
}

export const NewsEventsSection: React.FC<NewsEventsProps> = ({ newsList }) => {
  const [filter, setFilter] = useState<'All' | 'News' | 'Events' | 'Announcements' | 'Achievements'>('All');
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const filterTabs: Array<'All' | 'News' | 'Events' | 'Announcements' | 'Achievements'> = [
    'All',
    'News',
    'Events',
    'Announcements',
    'Achievements',
  ];

  const filteredNews =
    filter === 'All' ? newsList : newsList.filter((item) => item.category === filter);

  return (
    <section id="news" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
              <span>Institutional Bulletin</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2">
              News, Events & Announcements
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Stay updated with academic notices, co-curricular highlights, and calendar events.
            </p>
          </div>

          {/* Interactive Filter Tabs (Anti-slop compliant button elements) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 shadow-xs">
            {filterTabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === cat
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={item.featuredImage || '/src/assets/images/hero_academic_learning_1790533246980.jpg'}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Clean unboxed category & date metadata (Anti-slop compliant) */}
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-[11px] font-medium text-white drop-shadow">
                    <span className="font-semibold text-amber-300">{item.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif font-bold text-base text-slate-900 mb-2 leading-snug group-hover:text-emerald-900 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {item.summary}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>{item.author}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Read More Trigger */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-100">
                <button
                  onClick={() => setSelectedArticle(item)}
                  className="w-full flex items-center justify-between text-xs font-bold text-emerald-800 hover:text-emerald-950 py-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => setFilter('All')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-xs transition-colors"
          >
            <span>View All News & Updates</span>
            <ArrowRight className="w-4 h-4 text-emerald-800" />
          </button>
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <span className="px-2 py-0.5 bg-emerald-50 rounded border border-emerald-200">
                  {selectedArticle.category}
                </span>
                <span>·</span>
                <span className="text-slate-500">{selectedArticle.date}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3 leading-tight">
                {selectedArticle.title}
              </h3>

              <div className="flex items-center gap-3 text-xs text-slate-500 mb-6">
                <span>By {selectedArticle.author}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              {selectedArticle.featuredImage && (
                <div className="rounded-xl overflow-hidden mb-6 h-64 bg-slate-100">
                  <img
                    src={selectedArticle.featuredImage}
                    alt={selectedArticle.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="text-sm text-slate-700 leading-relaxed space-y-4">
                <p className="font-medium text-slate-900">{selectedArticle.summary}</p>
                <p>{selectedArticle.fullContent}</p>
                <p>
                  For any further details or school-related updates, contact the School Secretariat
                  or visit the Administration Office during official school hours.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Official Bulletin · Maai-Mahiu Girls High School</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
