import React, { useState } from 'react';
import { Bell, ArrowRight, X, AlertCircle, Calendar } from 'lucide-react';
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
    <aside aria-label="School Announcements" className="bg-amber-500 text-slate-950 py-3 px-4 sm:px-6 lg:px-8 shadow-sm border-y border-amber-600/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-left">
          <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0">
            <Bell className="w-4 h-4 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs uppercase tracking-wider text-slate-950 font-mono">
                Latest Announcement
              </span>
              <span className="text-[11px] text-slate-800 font-medium hidden md:inline">
                · {schoolInfo.latestAnnouncement.date}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-900 line-clamp-1">
              {schoolInfo.latestAnnouncement.headline}: {schoolInfo.latestAnnouncement.body}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenNews}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap"
          >
            <span>View Announcements</span>
            <ArrowRight className="w-3 h-3 text-amber-300" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss announcement"
            className="p-1 text-slate-800 hover:text-slate-950 rounded hover:bg-amber-600/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
