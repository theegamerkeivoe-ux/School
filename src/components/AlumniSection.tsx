import React, { useState } from 'react';
import {
  Users,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Heart,
  CheckCircle2,
  Calendar,
  X,
  Send,
} from 'lucide-react';

export const AlumniSection: React.FC = () => {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    completionYear: '',
    email: '',
    phone: '',
    profession: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowJoinModal(false);
      setFormData({
        name: '',
        completionYear: '',
        email: '',
        phone: '',
        profession: '',
        location: '',
      });
    }, 2200);
  };

  const alumniCards = [
    {
      name: 'Dr. Mary Muthoni, MBChB',
      classYear: 'Class of 2017',
      role: 'Medical Practitioner & Public Health Advocate',
      story:
        'Foundational secondary education at Maai-Mahiu Girls High School nurtured her passion for chemistry and biology, leading to a distinguished healthcare career in Nakuru County.',
    },
    {
      name: 'Eng. Grace Wambui',
      classYear: 'Class of 2016',
      role: 'Renewable Energy Systems Engineer (KenGen Olkaria)',
      story:
        'Inspired by the school science congress, she now champions clean energy innovations and coding initiatives for young African women in high schools across Kenya.',
    },
    {
      name: 'Adv. Sarah Kerubo, LL.B',
      classYear: 'Class of 2018',
      role: 'Legal Practitioner & Environmental Governance Counsel',
      story:
        'Developed poise and advocacy skills through the school debating society, currently serving as a legal advisor in regional environmental and land governance.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
              <span>Enduring Sisterhood</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Our Alumni
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              "Celebrating the women who continue to make a difference beyond the school gates."
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Our graduates are leaders, innovators, educators, healthcare pioneers, and public servants
              transforming communities across Nakuru County, Kenya, and internationally. The Maai-Mahiu
              Girls High School Alumnae Association provides mentorship to current students, university
              pathway guidance, and bursary contributions for deserving girls.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowJoinModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <Users className="w-4 h-4 text-amber-300" />
                <span>Join Alumni Network</span>
              </button>

              <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                Official MMGHS Alumni Association
              </span>
            </div>
          </div>

          {/* Quick Association Fact Box */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-8 border border-slate-200/90 shadow-sm">
            <h3 className="font-serif font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-amber-600" />
              <span>Alumnae Association Pillars</span>
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-100">
                <Heart className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Student Mentorship Clinics</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Termly visits by past scholars offering guidance to Form 3 and Form 4 learners on career combinations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-100">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Annual Alumnae Homecoming</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    A celebratory day of fellowship, inter-generational dialogue, and institutional development fundraising.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Sisterhood Endowment Fund</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Supporting vulnerable learners with uniform necessities, books, and boarding amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alumniCards.map((alumna, i) => (
            <div
              key={i}
              className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-emerald-800">{alumna.classYear}</span>
                  <span className="text-[11px] text-slate-400 font-mono">Maai-Mahiu</span>
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900 mb-1">
                  {alumna.name}
                </h4>
                <p className="text-xs font-medium text-amber-700 mb-3">
                  {alumna.role}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{alumna.story}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-400">
                Alumna Profile Placeholder
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Alumni Network Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-800" />
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  Alumnae Registry
                </h3>
              </div>
              <button
                onClick={() => setShowJoinModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-slate-900 mb-1">
                  Welcome to the Network!
                </h4>
                <p className="text-xs text-slate-600">
                  Your information has been logged. The Alumnae Secretariat will be in touch for upcoming events.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="py-4 space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Wanjiku"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Year Completed (Form 4) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.completionYear}
                      onChange={(e) => setFormData({ ...formData, completionYear: e.target.value })}
                      placeholder="e.g. 2022"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +254 7XX XXX XXX"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@example.com"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Profession / University
                  </label>
                  <input
                    type="text"
                    value={formData.profession}
                    onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                    placeholder="e.g. University Student / Teacher / Accountant"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowJoinModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Details</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
