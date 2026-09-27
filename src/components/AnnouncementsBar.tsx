import React, { useState } from 'react';
import { Bell, ArrowRight, X, AlertCircle } from 'lucide-react';
import { EditableSchoolInfo } from '../types';

interface AnnouncementsBarProps {
  schoolInfo: EditableSchoolInfo;
  onOpenNews: () => void;
}

export const AnnouncementsBar: React.FC<AnnouncementsBarProps> = ({
  schoolInfo,
  onOpenNews,
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (!schoolInfo.latestAnnouncement.active || isDismissed) {
    return null;
  }

  return (
    <aside aria-label="School Announcements" className="bg-amber-400 text-slate-950 py-2.5 px-4 sm:px-6 lg:px-8 shadow-xs border-b border-amber-500/40 select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-left">
          <div className="w-7 h-7 rounded-lg bg-slate-950 text-amber-400 flex items-center justify-center shrink-0">
            <Bell className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs uppercase tracking-wider text-slate-950 font-mono">
                Official Notice
              </span>
              <span className="text-[11px] text-slate-800 font-medium hidden md:inline">
                · {schoolInfo.latestAnnouncement.date}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 line-clamp-1">
              {schoolInfo.latestAnnouncement.headline}: {schoolInfo.latestAnnouncement.body}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenNews}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>View Announcements</span>
            <ArrowRight className="w-3 h-3 text-amber-300" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss announcement"
            className="p-1 text-slate-800 hover:text-slate-950 rounded hover:bg-amber-500/40 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
