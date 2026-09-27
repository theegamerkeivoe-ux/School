import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Compass,
  MessageSquare,
  Building,
  ExternalLink,
} from 'lucide-react';
import { EditableSchoolInfo } from '../types';

interface ContactSectionProps {
  schoolInfo: EditableSchoolInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ schoolInfo }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setSuccessMessage(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
            <span>Get In Touch</span>
            <span className="w-5 h-0.5 bg-amber-500 inline-block"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Contact & Location
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We welcome inquiries from prospective parents, alumni, educational partners, and the community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Official Contact Information & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider font-semibold text-amber-700">
                  Official Secretariat
                </span>
                <h3 className="font-serif font-bold text-xl text-slate-900 mt-1">
                  Maai-Mahiu Girls High School
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Nakuru County · Naivasha Sub-County · Kenya
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Physical Location</p>
                    <p className="text-slate-600">{schoolInfo.location}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Off Nairobi-Naivasha Highway, at the base of the Great Rift Valley
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Telephone / Enquiries</p>
                    <p className="text-slate-600 font-mono">{schoolInfo.phone}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Available Monday – Friday, 8:00 AM – 5:00 PM EAT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Official Email</p>
                    <p className="text-slate-600">{schoolInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 text-slate-700 flex items-center justify-center shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Postal Address</p>
                    <p className="text-slate-600">{schoolInfo.postalAddress}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Placeholder Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Enquiries Desk</span>
                </a>
              </div>
            </div>

            {/* Interactive Map Card Placeholder for Maai-Mahiu */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm p-4">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-emerald-700" />
                  <span>Interactive Regional Map</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-800 font-semibold">
                  0.9986° S, 36.5924° E
                </span>
              </div>

              {/* Styled Mock Map Frame */}
              <div className="relative h-48 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex flex-col items-center justify-center p-4 text-center">
                {/* Visual topographical overlay */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#14532d_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-emerald-800 text-amber-300 flex items-center justify-center mx-auto mb-2 shadow-md animate-pulse">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="font-serif font-bold text-slate-900 text-sm">
                    Maai-Mahiu, Nakuru County
                  </p>
                  <p className="text-[11px] text-slate-500 max-w-xs mt-0.5">
                    Near Mount Longonot National Park corridor · Rift Valley Highway
                  </p>
                  <a
                    href="https://maps.google.com/?q=Maai-Mahiu+Kenya"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-emerald-800 font-bold mt-2 hover:underline"
                  >
                    <span>View in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <div className="mb-6">
                <h3 className="font-serif font-bold text-2xl text-slate-900 mb-1">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Please fill out the contact form below and our administration desk will respond promptly.
                </p>
              </div>

              {successMessage ? (
                <div className="py-12 text-center bg-emerald-50 rounded-xl border border-emerald-200 p-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto mb-3" />
                  <h4 className="font-serif font-bold text-lg text-emerald-950 mb-1">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you for contacting Maai-Mahiu Girls High School. A representative from the
                    relevant department will follow up with you via your provided contact details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. John Kamau"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. john@example.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="e.g. +254 7XX XXX XXX"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Inquiry Subject *
                      </label>
                      <select
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
                      >
                        <option value="">Select subject category</option>
                        <option value="Admissions & Placement">Admissions & NEMIS Placement</option>
                        <option value="Academic Enquiries">Academic & Curriculum Enquiries</option>
                        <option value="Fee Circular & Accounts">Fee Circular & Accounts Desk</option>
                        <option value="Student Welfare & Boarding">Student Welfare & Boarding</option>
                        <option value="Alumnae & Mentorship">Alumnae & Mentorship</option>
                        <option value="General Enquiries">General Enquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please write your detailed inquiry or message here..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 resize-y"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Your inquiry will be directed to the appropriate department.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded-xl shadow transition-all duration-200 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
