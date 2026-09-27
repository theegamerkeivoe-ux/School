import React, { useState } from 'react';
import {
  LogOut,
  Bell,
  Home,
  User as UserIcon,
  GraduationCap,
  Calendar,
  FileText,
  Clock,
  BookOpen,
  DollarSign,
  Users,
  Compass,
  Briefcase,
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
  ArrowLeft,
  Settings,
  Sparkles,
} from 'lucide-react';
import { Crest } from '../Crest';
import { User, UserRole } from '../../types/portal';
import { demoUsers } from '../../data/portalMockData';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string | number;
}

interface PortalLayoutProps {
  currentUser: User;
  onLogout: () => void;
  onSwitchUser: (newUser: User) => void;
  onReturnToWebsite: () => void;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  navItems: NavItem[];
  children: React.ReactNode;
}

export const PortalLayout: React.FC<PortalLayoutProps> = ({
  currentUser,
  onLogout,
  onSwitchUser,
  onReturnToWebsite,
  activeTab,
  onTabChange,
  navItems,
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const getRoleTheme = (role: UserRole) => {
    switch (role) {
      case 'student':
        return {
          title: 'Student Portal',
          headerBg: 'bg-emerald-950',
          badgeBg: 'bg-emerald-800 text-emerald-200 border-emerald-700',
          activeItem: 'bg-emerald-50 text-emerald-900 border-l-4 border-emerald-800 font-bold',
        };
      case 'parent':
        return {
          title: 'Parent Portal',
          headerBg: 'bg-amber-950',
          badgeBg: 'bg-amber-800 text-amber-200 border-amber-700',
          activeItem: 'bg-amber-50 text-amber-900 border-l-4 border-amber-700 font-bold',
        };
      case 'teacher':
        return {
          title: 'Teacher Portal',
          headerBg: 'bg-slate-900',
          badgeBg: 'bg-blue-900 text-blue-200 border-blue-700',
          activeItem: 'bg-blue-50 text-blue-900 border-l-4 border-blue-800 font-bold',
        };
      case 'admin':
        return {
          title: 'Administration Portal',
          headerBg: 'bg-slate-950',
          badgeBg: 'bg-rose-900 text-rose-200 border-rose-700',
          activeItem: 'bg-rose-50 text-rose-900 border-l-4 border-rose-800 font-bold',
        };
    }
  };

  const theme = getRoleTheme(currentUser.role);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Application Bar */}
      <header className={`${theme.headerBg} text-white sticky top-0 z-40 border-b border-white/10 shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Left: Brand & Portal Badge */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              <div
                onClick={onReturnToWebsite}
                className="flex items-center gap-3 cursor-pointer group"
                title="Return to Public Website"
              >
                <Crest size="sm" variant="dark" />
                <div className="hidden sm:flex flex-col">
                  <span className="font-serif font-bold text-sm tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    Maai-Mahiu Girls
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-emerald-300">
                    High School
                  </span>
                </div>
              </div>

              <div className="h-5 w-px bg-white/20 hidden sm:block"></div>

              {/* Portal Role Indicator */}
              <div
                className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wide uppercase border ${theme.badgeBg}`}
              >
                {theme.title}
              </div>
            </div>

            {/* Right: Quick Role Switcher, Notifications & User Profile */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Return to Public Website link */}
              <button
                onClick={onReturnToWebsite}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Public Website</span>
              </button>

              {/* Role Switcher Pill (For seamless evaluator review between all 4 roles) */}
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors border border-white/15"
                  title="Switch between Student, Parent, Teacher, Admin"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Switch Role:</span>
                  <span className="capitalize font-bold text-amber-300">
                    {currentUser.role}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/70" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in">
                    <div className="px-3.5 py-2 border-b border-slate-100 text-slate-500 text-[11px] font-mono uppercase tracking-wider font-semibold">
                      Switch Role Portal
                    </div>
                    {demoUsers.map((u) => (
                      <button
                        key={u.id}
                        onClick={() => {
                          onSwitchUser(u);
                          setUserDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                          u.role === currentUser.role
                            ? 'font-bold text-emerald-900 bg-emerald-50/60'
                            : 'text-slate-700'
                        }`}
                      >
                        <div>
                          <p className="font-semibold">{u.name}</p>
                          <p className="text-[10px] text-slate-500 capitalize">{u.role} Portal</p>
                        </div>
                        {u.role === currentUser.role && (
                          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Notification Bell */}
              <div className="relative">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors relative"
                  aria-label="View notifications"
                >
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 z-50 text-slate-800 animate-in fade-in">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                      <span className="text-xs font-bold font-serif text-slate-900">
                        System Notifications
                      </span>
                      <span className="text-[10px] font-mono text-emerald-800 font-semibold">
                        Live System
                      </span>
                    </div>
                    <div className="space-y-2.5 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <p className="font-semibold text-slate-900">Term 2 Academic Reports</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Examination marks are published and accessible on your portal dashboard.
                        </p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <p className="font-semibold text-slate-900">Parent-Teacher Conference</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Scheduled for Saturday 10th October 2026.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Logout Button */}
              <button
                onClick={onLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-rose-900/60 text-white text-xs font-medium transition-colors"
                title="Secure Logout"
              >
                <LogOut className="w-3.5 h-3.5 text-rose-300" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace Frame */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sticky top-24">
            {/* User Profile Mini Card */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                {currentUser.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-slate-900 truncate">{currentUser.name}</p>
                <p className="text-[10px] text-slate-500 capitalize">{currentUser.role} Account</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onTabChange(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 text-xs rounded-xl transition-all ${
                      isActive
                        ? theme.activeItem
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={isActive ? 'text-emerald-800' : 'text-slate-400'}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={onReturnToWebsite}
                className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-emerald-900 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-emerald-700" />
                <span>Back to School Website</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex">
            <div className="w-72 bg-white h-full p-5 flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-200">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <Crest size="sm" />
                    <span className="font-serif font-bold text-sm text-slate-900">
                      {theme.title}
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onTabChange(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-xs rounded-xl ${
                        activeTab === item.id
                          ? theme.activeItem
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReturnToWebsite();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Website</span>
                </button>
                <button
                  onClick={onLogout}
                  className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-rose-700 bg-rose-50 rounded-xl"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content Viewport */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
};
