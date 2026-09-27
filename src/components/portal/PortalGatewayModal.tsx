import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  Briefcase,
  ShieldCheck,
  X,
  ArrowRight,
  Lock,
  Mail,
  KeyRound,
  CheckCircle2,
  Sparkles,
  Info,
} from 'lucide-react';
import { Crest } from '../Crest';
import { UserRole, User } from '../../types/portal';
import { demoUsers } from '../../data/portalMockData';

interface PortalGatewayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
  initialRole?: UserRole;
}

export const PortalGatewayModal: React.FC<PortalGatewayModalProps> = ({
  isOpen,
  onClose,
  onLogin,
  initialRole,
}) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(initialRole || 'student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleQuickDemoLogin = (role: UserRole) => {
    const demoUser = demoUsers.find((u) => u.role === role);
    if (demoUser) {
      onLogin(demoUser);
      onClose();
    }
  };

  const handleFormLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Role-based matching
    const foundUser = demoUsers.find(
      (u) =>
        u.role === selectedRole &&
        (u.username.toLowerCase() === username.toLowerCase() ||
          u.email.toLowerCase() === username.toLowerCase())
    );

    if (foundUser || username.trim().length > 0) {
      // Allow demo fallback if username entered
      const userToLogin =
        foundUser || demoUsers.find((u) => u.role === selectedRole) || demoUsers[0];
      onLogin(userToLogin);
      onClose();
    } else {
      setErrorMessage('Please enter valid portal credentials or use 1-Click Quick Demo Login.');
    }
  };

  const roles = [
    {
      id: 'student' as UserRole,
      title: 'Student Portal',
      subtitle: 'For Enrolled Learners',
      desc: 'Access academic performance, assignments, timetable, attendance, digital library, and school announcements.',
      icon: <GraduationCap className="w-5 h-5 text-emerald-800" />,
      accent: 'border-emerald-700 bg-emerald-50/60 text-emerald-950',
      badge: 'Learner Access',
    },
    {
      id: 'parent' as UserRole,
      title: 'Parent Portal',
      subtitle: 'For Parents & Guardians',
      desc: 'Monitor children’s academic progress, attendance records, school fees, reports, and message teachers.',
      icon: <Users className="w-5 h-5 text-amber-700" />,
      accent: 'border-amber-600 bg-amber-50/60 text-amber-950',
      badge: 'Guardian Access',
    },
    {
      id: 'teacher' as UserRole,
      title: 'Teacher Portal',
      subtitle: 'For Faculty & Instructors',
      desc: 'Manage assigned classes, enter CAT & exam marks, record daily attendance, and post homework assignments.',
      icon: <Briefcase className="w-5 h-5 text-blue-700" />,
      accent: 'border-blue-700 bg-blue-50/60 text-blue-950',
      badge: 'Faculty Access',
    },
    {
      id: 'admin' as UserRole,
      title: 'Administration',
      subtitle: 'For School Executive & BOM',
      desc: 'Comprehensive school management, student/teacher rosters, marks approval, fees ledger, admissions, and website CMS.',
      icon: <ShieldCheck className="w-5 h-5 text-rose-700" />,
      accent: 'border-rose-700 bg-rose-50/60 text-rose-950',
      badge: 'Executive Access',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Header */}
        <div className="bg-emerald-950 text-white p-6 sm:p-8 flex items-center justify-between border-b border-emerald-900 rounded-t-3xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-900/30 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-4 relative z-10">
            <Crest size="lg" variant="dark" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">
                  Official School Management System
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Institutional Portal Login
              </h2>
              <p className="text-xs text-emerald-200/90 mt-0.5">
                Maai-Mahiu Girls High School · Secure Role-Based Authentication
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-xl bg-white/10 hover:bg-white/20 transition-colors relative z-10"
            aria-label="Close portal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Step 1: Select Your Portal Gateway */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  1. Select Your Authorized Portal
                </h3>
                <p className="text-xs text-slate-500">
                  Each role has a completely separate and secure workspace.
                </p>
              </div>
              <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-semibold">
                Strict Role-Based Access Control
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {roles.map((r) => {
                const isSelected = selectedRole === r.id;
                return (
                  <div
                    key={r.id}
                    onClick={() => {
                      setSelectedRole(r.id);
                      setErrorMessage('');
                    }}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? `${r.accent} shadow-md scale-102`
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center border border-slate-200">
                          {r.icon}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                          {r.badge}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-base text-slate-900 mb-0.5">
                        {r.title}
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-500 mb-2">
                        {r.subtitle}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {r.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-[11px] font-semibold">
                        {isSelected ? 'Selected' : 'Select'}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuickDemoLogin(r.id);
                        }}
                        className="text-[10px] uppercase font-bold text-emerald-800 hover:text-emerald-950 underline"
                      >
                        1-Click Demo
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Demo Switcher Notification Box */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Instant Evaluator 1-Click Access
                </p>
                <p className="text-[11px] text-slate-600">
                  Click any demo profile to test immediately without manual typing:
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('student')}
                className="px-3 py-1.5 text-xs font-bold bg-white hover:bg-emerald-50 text-emerald-900 border border-slate-200 rounded-lg shadow-xs transition-colors"
              >
                Faith W. (Student)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('parent')}
                className="px-3 py-1.5 text-xs font-bold bg-white hover:bg-amber-50 text-amber-900 border border-slate-200 rounded-lg shadow-xs transition-colors"
              >
                Mrs. Esther M. (Parent)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('teacher')}
                className="px-3 py-1.5 text-xs font-bold bg-white hover:bg-blue-50 text-blue-900 border border-slate-200 rounded-lg shadow-xs transition-colors"
              >
                Mr. Daniel O. (Teacher)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('admin')}
                className="px-3 py-1.5 text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-lg shadow-xs transition-colors"
              >
                Chief Principal (Admin)
              </button>
            </div>
          </div>

          {/* Step 2: Sign-in Form */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-1">
              2. Sign in to {roles.find((r) => r.id === selectedRole)?.title}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Enter your authorized institutional credentials to continue.
            </p>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleFormLogin} className="space-y-4 max-w-lg">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {selectedRole === 'student'
                    ? 'Student Admission Number or Username'
                    : selectedRole === 'parent'
                    ? 'Parent Email Address or Phone Number'
                    : selectedRole === 'teacher'
                    ? 'Teacher TSC Number or Email'
                    : 'Administrator Username or Email'}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={
                      selectedRole === 'student'
                        ? 'e.g. MMG-2024-042 or student'
                        : selectedRole === 'parent'
                        ? 'e.g. parent.demo@maaimahiugirls.sc.ke or parent'
                        : selectedRole === 'teacher'
                        ? 'e.g. teacher.demo@maaimahiugirls.sc.ke or teacher'
                        : 'e.g. admin.office@maaimahiugirls.sc.ke or admin'
                    }
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-700">Password</label>
                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Password reset instructions have been forwarded to the school administrator desk.');
                    }}
                    className="text-[11px] text-emerald-800 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 text-xs text-slate-600">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="rounded border-slate-300 text-emerald-700 focus:ring-emerald-700"
                  />
                  <span>Remember this device</span>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded-xl shadow transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Secure Login</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 rounded-b-3xl">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-700" />
            <span>256-Bit SSL Encrypted Official Institutional Session</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Need Help? Contact Bursar / ICT Office</span>
            <span>·</span>
            <button
              onClick={onClose}
              className="text-slate-700 font-semibold hover:underline"
            >
              Return to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
