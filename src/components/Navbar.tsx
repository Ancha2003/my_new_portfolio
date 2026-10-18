import React, { useState, useEffect } from 'react';
import { Menu, X, Command, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active section spy
      const sections = ['contact', 'projects', 'experience', 'skills', 'about', 'home'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        if (sectionId === 'home' && window.scrollY < 300) {
          setActiveSection('home');
          break;
        }
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06070a]/80 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar 3-Zone Contract: Brand — 5 Nav Links — 1 Primary Action */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 group"
            >
              <span className="font-display">ANCHAL</span>
              <span className="text-cyan-400 text-xl font-bold transition-transform duration-200 group-hover:scale-125">.</span>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`whitespace-nowrap shrink-0 transition-colors relative py-1 ${
                      isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 Primary Action & Mobile Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Quick Command Palette Button */}
              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-400 hover:text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-lg transition-colors"
                title="Open Command Palette (or press ⌘K or /)"
                aria-label="Open Command Palette"
              >
                <Command className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-mono text-[11px] text-slate-400">⌘K</span>
              </button>

              {/* Primary CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-indigo-300 rounded-lg shadow-sm hover:shadow-cyan-500/25 transition-all duration-200 whitespace-nowrap shrink-0 group active:scale-95"
              >
                <span className="flex items-center gap-1.5 font-semibold">
                  Hire Me
                  <Sparkles className="w-3.5 h-3.5 text-slate-900 group-hover:rotate-12 transition-transform" />
                </span>
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg border border-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] z-30 md:hidden bg-[#090b11]/95 backdrop-blur-xl border-b border-white/10 p-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-slate-500 font-mono">→</span>
              </a>
            ))}

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
              >
                <Command className="w-3.5 h-3.5 text-cyan-400" />
                <span>Search / Commands (⌘K)</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
