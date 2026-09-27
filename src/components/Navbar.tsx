import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search } from 'lucide-react';
import { Crest } from './Crest';

interface NavbarProps {
  onOpenPortal: (role?: 'student' | 'parent' | 'teacher' | 'admin') => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortal, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = [
        'home',
        'about',
        'academics',
        'admissions',
        'student-life',
        'news',
        'gallery',
        'downloads',
        'contact',
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Academics', href: '#academics', id: 'academics' },
    { label: 'Admissions', href: '#admissions', id: 'admissions' },
    { label: 'Student Life', href: '#student-life', id: 'student-life' },
    { label: 'News & Events', href: '#news', id: 'news' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Downloads', href: '#downloads', id: 'downloads' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80'
          : 'bg-white py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Wordmark & Crest */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-md"
          >
            <Crest size="md" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg lg:text-xl text-emerald-950 tracking-tight group-hover:text-emerald-800 transition-colors leading-tight">
                Maai-Mahiu Girls
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-700 font-sans">
                High School · Extra-County
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-2.5 py-1.5 rounded-md transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? 'text-emerald-900 font-semibold bg-emerald-50'
                      : 'hover:text-emerald-800 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search School Portal"
                className="hidden xl:flex p-2 text-slate-500 hover:text-emerald-900 hover:bg-slate-100 rounded-lg transition-colors"
                title="Search documents and news"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            {/* Prominent PORTAL LOGIN Button (Top Requirement) */}
            <button
              onClick={() => onOpenPortal()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-xs hover:shadow transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              title="Access Student, Parent, Teacher & Admin Portals"
            >
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
              <span>PORTAL LOGIN</span>
            </button>

            <a
              href="#admissions"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#admissions');
              }}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded-lg shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              <span>Admissions</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-slate-700 hover:text-emerald-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {/* Prominent Mobile Portal Login */}
          <div className="p-3 mb-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-900">Official Portals Access</p>
              <p className="text-[11px] text-slate-600">Student · Parent · Teacher · Admin</p>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="px-3 py-1.5 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg"
            >
              PORTAL LOGIN
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-emerald-900 font-semibold border-l-4 border-emerald-700'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal('student');
              }}
              className="px-3 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 rounded-lg text-center"
            >
              Student Portal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal('parent');
              }}
              className="px-3 py-2 text-xs font-semibold text-amber-900 bg-amber-50 rounded-lg text-center"
            >
              Parent Portal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal('teacher');
              }}
              className="px-3 py-2 text-xs font-semibold text-blue-900 bg-blue-50 rounded-lg text-center"
            >
              Teacher Portal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal('admin');
              }}
              className="px-3 py-2 text-xs font-semibold text-rose-900 bg-rose-50 rounded-lg text-center"
            >
              Admin Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
