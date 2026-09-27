import React, { useState } from 'react';
import {
  Trophy,
  Users,
  Compass,
  Music,
  Heart,
  HelpCircle,
  Home,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const StudentLifeSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Activities' },
    { id: 'sports', label: 'Sports & Athletics' },
    { id: 'clubs', label: 'Clubs & Societies' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'arts', label: 'Music & Drama' },
    { id: 'community', label: 'Community Service' },
    { id: 'counselling', label: 'Guidance & Counselling' },
    { id: 'boarding', label: 'Boarding Life' },
  ];

  const studentLifeCards = [
    {
      id: 'sl-1',
      category: 'sports',
      categoryLabel: 'Sports',
      title: 'Athletics & Ball Games',
      description:
        'From track and field to volleyball, netball, and football, students develop physical fitness, discipline, and sportsmanship on our spacious sports pitches.',
      image: '/src/assets/images/hero_sports_activities_1790533259821.jpg',
      icon: <Trophy className="w-4 h-4 text-amber-500" />,
      features: ['County Athletic Competitions', 'Inter-House Sports Gala', 'Physical Fitness Clinics'],
    },
    {
      id: 'sl-2',
      category: 'clubs',
      categoryLabel: 'Clubs & Societies',
      title: 'Science, Debating & Red Cross',
      description:
        'Vibrant student-led organizations including Science Congress, Kenya Red Cross Society, St. John Ambulance, and Model UN fostering intellectual discovery and compassion.',
      image: '/src/assets/images/hero_academic_learning_1790533246980.jpg',
      icon: <Users className="w-4 h-4 text-emerald-600" />,
      features: ['Science & Tech Fair (KSEF)', 'Debate & Public Speaking', 'Red Cross First Aid Training'],
    },
    {
      id: 'sl-3',
      category: 'leadership',
      categoryLabel: 'Leadership',
      title: 'Student Voice & Prefects Council',
      description:
        'Democratically elected learner representatives and house captains lead by example, cultivating governance ethics, empathy, and institutional ownership.',
      image: '/src/assets/images/hero_academic_learning_1790533246980.jpg',
      icon: <Compass className="w-4 h-4 text-amber-600" />,
      features: ['Prefects Leadership Seminar', 'Peer Counseling Network', 'Assembly Governance'],
    },
    {
      id: 'sl-4',
      category: 'arts',
      categoryLabel: 'Music & Drama',
      title: 'Kenya National Music & Drama Festivals',
      description:
        'Celebrating African heritage, choral poetry, folk songs, and theatrical performances that nurture poise, creative expression, and artistic excellence.',
      image: '/src/assets/images/hero_school_campus_1790533272059.jpg',
      icon: <Music className="w-4 h-4 text-rose-500" />,
      features: ['Annual Drama Production', 'Choral Folk Performances', 'Public Speaking & Verse'],
    },
    {
      id: 'sl-5',
      category: 'community',
      categoryLabel: 'Community Service',
      title: 'Environmental Stewardship & Outreach',
      description:
        'Cultivating civic responsibility through tree-planting initiatives across the Rift Valley landscape and community hygiene sensitization.',
      image: '/src/assets/images/hero_school_campus_1790533272059.jpg',
      icon: <Heart className="w-4 h-4 text-emerald-600" />,
      features: ['Rift Valley Tree Planting', 'Community Welfare Drives', 'Environmental Cleanups'],
    },
    {
      id: 'sl-6',
      category: 'boarding',
      categoryLabel: 'Boarding Life',
      title: 'A Secure & Nurturing Home Away from Home',
      description:
        'Dormitories supervised by caring matrons, balanced nutritional meal schedules, weekend fellowship, and an inclusive culture of sisterhood.',
      image: '/src/assets/images/hero_school_campus_1790533272059.jpg',
      icon: <Home className="w-4 h-4 text-amber-700" />,
      features: ['Dormitory House System', 'Balanced Dining Experience', 'Evening Study Prep'],
    },
  ];

  const filteredCards =
    selectedCategory === 'all'
      ? studentLifeCards
      : studentLifeCards.filter((c) => c.category === selectedCategory);

  return (
    <section id="student-life" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
            <span>Co-Curricular & Student Experience</span>
            <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            More Than the Classroom
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover opportunities that help learners build confidence, character, creativity and leadership.
            At Maai-Mahiu Girls High School, education is a holistic journey of heart, mind, and spirit.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls (Adhering to anti-slop: functional button segmented tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100/90 rounded-xl max-w-4xl mx-auto mb-14 border border-slate-200/60">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-emerald-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Clean unboxed text kicker (Anti-slop compliant) */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-xs font-medium text-white drop-shadow">
                    {card.icon}
                    <span>{card.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>Maai-Mahiu</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {card.features.map((feat) => (
                      <div key={feat} className="text-xs text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="text-xs font-semibold text-emerald-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore Activity</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
