import React, { useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Sparkles, Terminal, Coffee } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onReplayIntro: () => void;
  onOpenCommandPalette: () => void;
  onTriggerKonami?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onReplayIntro,
  onOpenCommandPalette,
  onTriggerKonami,
}) => {
  const { profile } = PORTFOLIO_DATA;
  const [tapCount, setTapCount] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoTap = () => {
    const next = tapCount + 1;
    setTapCount(next);
    if (next >= 5) {
      setTapCount(0);
      if (onTriggerKonami) onTriggerKonami();
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#040508] py-12 sm:py-16 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          {/* Brand & Identity with 5-tap easter egg */}
          <div className="text-center md:text-left">
            <button
              type="button"
              onClick={handleLogoTap}
              className="text-xl font-bold tracking-tight text-white inline-flex items-center gap-1 font-display group cursor-pointer text-left"
              title="Tip: Tap 5 times for a surprise!"
            >
              <span>ANCHAL</span>
              <span className="text-lime-400 group-hover:scale-125 transition-transform">.</span>
            </button>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Software Developer & Shopify Developer crafting fast, memorable digital experiences.
            </p>
            <p className="text-[11px] font-mono text-slate-400 mt-2 flex items-center gap-1.5 justify-center md:justify-start">
              <Coffee className="w-3.5 h-3.5 text-amber-400" />
              <span>Made with curiosity, caffeine, and a suspicious number of console.log() statements.</span>
            </p>
          </div>

          {/* Social Channels */}
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Email Anchal"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
              title="Open Command Palette (⌘K or /)"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>⌘K</span>
            </button>
          </div>

          {/* Back to top button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 border border-white/10 transition-colors group cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Interactive Actions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1 text-slate-300">
            <span>Designed & Developed by</span>
            <strong className="text-cyan-400 font-semibold ml-1">Anchal Chaurasiya</strong>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button
              type="button"
              onClick={onReplayIntro}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Replay Terminal Intro</span>
            </button>
            <span>·</span>
            <span>© {new Date().getFullYear()} All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
