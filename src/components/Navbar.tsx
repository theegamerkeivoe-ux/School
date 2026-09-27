import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Search, ChevronDown } from 'lucide-react';
import { Crest } from './Crest';

interface NavbarProps {
  onOpenPortal: (role?: 'student' | 'parent' | 'teacher' | 'admin') => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortal, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

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

  // Close more menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(e.target as Node)) {
        setMoreMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Academics', href: '#academics', id: 'academics' },
    { label: 'Admissions', href: '#admissions', id: 'admissions' },
    { label: 'Student Life', href: '#student-life', id: 'student-life' },
    { label: 'News & Events', href: '#news', id: 'news' },
  ];

  const secondaryLinks = [
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Downloads', href: '#downloads', id: 'downloads' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const allNavLinks = [...primaryLinks, ...secondaryLinks];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3 sm:gap-4">
          {/* Brand Wordmark & Crest (STRICTLY shrink-0 & whitespace-nowrap so it NEVER gets overlaid) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-md select-none"
            aria-label="Maai-Mahiu Girls High School Home"
          >
            <Crest size="md" className="shrink-0" />
            <div className="flex flex-col shrink-0 min-w-max">
              <span className="font-serif font-bold text-base sm:text-lg lg:text-xl text-emerald-950 tracking-tight group-hover:text-emerald-800 transition-colors leading-tight whitespace-nowrap">
                Maai-Mahiu Girls
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-700 font-sans whitespace-nowrap">
                High School · Extra-County
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Responsive spacing with min-w-0 to protect school name) */}
          <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 2xl:gap-1.5 text-xs xl:text-[13px] font-medium text-slate-700 min-w-0 flex-1 px-2">
            {/* Primary links always visible on lg and above */}
            {primaryLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-2 xl:px-2.5 py-1.5 rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-emerald-900 font-bold bg-emerald-50'
                      : 'hover:text-emerald-800 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* On 2xl screens (wide desktop), show secondary links inline */}
            <div className="hidden 2xl:flex items-center gap-0.5 2xl:gap-1.5 shrink-0">
              {secondaryLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`px-2 xl:px-2.5 py-1.5 rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-emerald-900 font-bold bg-emerald-50'
                        : 'hover:text-emerald-800 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* On lg to xl screens (standard fullscreen/laptop), show "More" dropdown */}
            <div className="relative 2xl:hidden shrink-0" ref={moreMenuRef}>
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className={`inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  secondaryLinks.some((l) => activeSection === l.id)
                    ? 'text-emerald-900 font-bold bg-emerald-50'
                    : 'text-slate-700 hover:text-emerald-800 hover:bg-slate-50'
                }`}
                aria-expanded={moreMenuOpen}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in duration-150">
                  {secondaryLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className={`block px-3.5 py-2 text-xs font-medium transition-colors ${
                        activeSection === link.id
                          ? 'bg-emerald-50 text-emerald-900 font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-900'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Action CTAs (Strictly shrink-0) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search School Portal"
                className="hidden xl:flex p-2 text-slate-500 hover:text-emerald-900 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                title="Search documents and news"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            {/* Prominent PORTAL LOGIN Button (Top Requirement) */}
            <button
              onClick={() => onOpenPortal()}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-xs hover:shadow transition-all duration-200 whitespace-nowrap shrink-0 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              title="Access Student, Parent, Teacher & Admin Portals"
            >
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
              <span>PORTAL LOGIN</span>
            </button>

            {/* Admissions button - shown on extra large screens */}
            <a
              href="#admissions"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#admissions');
              }}
              className="hidden 2xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded-lg shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap shrink-0 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              <span>Admissions</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-slate-700 hover:text-emerald-900 hover:bg-slate-100 rounded-lg shrink-0 focus:outline-none focus:ring-2 focus:ring-emerald-700"
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl">
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
            {allNavLinks.map((link) => (
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
