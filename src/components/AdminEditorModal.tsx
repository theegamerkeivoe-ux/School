import React, { useState } from 'react';
import {
  Settings,
  X,
  Save,
  RotateCcw,
  CheckCircle,
  HelpCircle,
  ShieldAlert,
} from 'lucide-react';
import { EditableSchoolInfo } from '../types';
import { initialSchoolInfo } from '../data/schoolData';

interface AdminEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  schoolInfo: EditableSchoolInfo;
  onSave: (newInfo: EditableSchoolInfo) => void;
  onReset: () => void;
}

export const AdminEditorModal: React.FC<AdminEditorModalProps> = ({
  isOpen,
  onClose,
  schoolInfo,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<EditableSchoolInfo>(schoolInfo);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetToDefaults = () => {
    if (window.confirm('Reset all placeholder fields to default values?')) {
      onReset();
      setFormData(initialSchoolInfo);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 1200);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 flex items-center justify-between border-b border-slate-800 rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">
                School Administrator Tool
              </span>
              <h2 className="font-serif text-xl font-bold text-white">
                Customize Official Placeholders
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Administrative Replacement Notice</p>
              <p className="mt-0.5">
                Use this control panel to supply verified institutional text (Principal’s Name,
                Official Vision, Mission, Phone numbers, and Email) directly into the website preview.
              </p>
            </div>
          </div>

          {/* Principal Details */}
          <div className="space-y-4 pt-2">
            <h3 className="font-serif font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
              Principal’s Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Principal’s Full Name
                </label>
                <input
                  type="text"
                  value={formData.principalName}
                  onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
                  placeholder="e.g. Mrs. Jane Doe"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Designation / Official Title
                </label>
                <input
                  type="text"
                  value={formData.principalTitle}
                  onChange={(e) => setFormData({ ...formData, principalTitle: e.target.value })}
                  placeholder="e.g. Chief Principal"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Principal’s Welcome Message Excerpt
              </label>
              <textarea
                rows={3}
                value={formData.principalMessage}
                onChange={(e) => setFormData({ ...formData, principalMessage: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700 resize-y"
              />
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="space-y-4 pt-2">
            <h3 className="font-serif font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
              Vision & Mission Statements
            </h3>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Official Vision Statement
              </label>
              <textarea
                rows={2}
                value={formData.vision}
                onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700 resize-y"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Official Mission Statement
              </label>
              <textarea
                rows={2}
                value={formData.mission}
                onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700 resize-y"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 pt-2">
            <h3 className="font-serif font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
              Contact & Location Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Official Phone Number
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Official Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Postal Address
              </label>
              <input
                type="text"
                value={formData.postalAddress}
                onChange={(e) => setFormData({ ...formData, postalAddress: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700"
              />
            </div>
          </div>

          {/* Announcement Bar Customizer */}
          <div className="space-y-4 pt-2">
            <h3 className="font-serif font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
              Banner Announcement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Announcement Headline
                </label>
                <input
                  type="text"
                  value={formData.latestAnnouncement.headline}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      latestAnnouncement: {
                        ...formData.latestAnnouncement,
                        headline: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Date / Term
                </label>
                <input
                  type="text"
                  value={formData.latestAnnouncement.date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      latestAnnouncement: {
                        ...formData.latestAnnouncement,
                        date: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Announcement Message
              </label>
              <input
                type="text"
                value={formData.latestAnnouncement.body}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    latestAnnouncement: {
                      ...formData.latestAnnouncement,
                      body: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={handleResetToDefaults}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
