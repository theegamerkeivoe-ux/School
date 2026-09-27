import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Settings, Users, GraduationCap } from 'lucide-react';
import { EditableSchoolInfo } from '../types';

interface TopBarProps {
  schoolInfo: EditableSchoolInfo;
  onOpenPortal: (role?: 'student' | 'parent' | 'teacher' | 'admin') => void;
  onOpenAdmin: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ schoolInfo, onOpenPortal, onOpenAdmin }) => {
  return (
    <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left Information Strip */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] sm:text-xs">
          <span className="font-semibold text-white tracking-wide flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Maai-Mahiu Girls High School
          </span>

          <span className="hidden sm:inline text-emerald-700">|</span>

          <span className="flex items-center gap-1 text-emerald-200/90">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Maai-Mahiu, Nakuru County, Kenya</span>
          </span>

          <span className="hidden lg:inline text-emerald-700">|</span>

          <a
            href={`tel:${schoolInfo.phone}`}
            className="hidden lg:flex items-center gap-1 text-emerald-200/80 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate max-w-[160px]">{schoolInfo.phone}</span>
          </a>

          <span className="hidden xl:inline text-emerald-700">|</span>

          <a
            href={`mailto:${schoolInfo.email}`}
            className="hidden xl:flex items-center gap-1 text-emerald-200/80 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate max-w-[200px]">{schoolInfo.email}</span>
          </a>
        </div>

        {/* Right Action & Social Strip */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Social Links */}
          <div className="flex items-center gap-2.5 text-emerald-300">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Page"
              className="hover:text-amber-300 transition-colors p-1"
              title="Official Facebook Page"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube Channel"
              className="hover:text-amber-300 transition-colors p-1"
              title="Official YouTube Channel"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Profile"
              className="hover:text-amber-300 transition-colors p-1"
              title="Official Instagram Profile"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          <div className="h-3.5 w-px bg-emerald-800 hidden sm:block"></div>

          {/* Quick Access Portals */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onOpenPortal('student')}
              className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-emerald-200 bg-emerald-900/80 hover:bg-emerald-800 hover:text-white rounded transition-colors whitespace-nowrap"
            >
              <GraduationCap className="w-3 h-3 text-amber-400" />
              <span>Student</span>
            </button>

            <button
              onClick={() => onOpenPortal('parent')}
              className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-amber-300 bg-amber-950/60 border border-amber-600/40 hover:bg-amber-900/60 hover:text-amber-200 rounded transition-colors whitespace-nowrap"
            >
              <Users className="w-3 h-3 text-amber-400" />
              <span>Parent</span>
            </button>

            <button
              onClick={() => onOpenPortal('teacher')}
              className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-blue-200 bg-blue-950/60 border border-blue-600/40 hover:bg-blue-900/60 hover:text-white rounded transition-colors whitespace-nowrap"
            >
              <span>Teacher</span>
            </button>

            <button
              onClick={() => onOpenPortal('admin')}
              className="hidden md:inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-rose-200 bg-rose-950/60 border border-rose-600/40 hover:bg-rose-900/60 hover:text-white rounded transition-colors whitespace-nowrap"
            >
              <span>Admin</span>
            </button>

            {/* School Admin Content Editor Toggle */}
            <button
              onClick={onOpenAdmin}
              className="p-1 text-emerald-400 hover:text-amber-300 hover:bg-emerald-900/70 rounded transition-colors ml-0.5"
              title="Admin: Edit Placeholder Content"
              aria-label="Admin Edit Placeholders"
            >
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
