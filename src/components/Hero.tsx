import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Send, Eye, Sparkles, Coffee } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [showClickHint, setShowClickHint] = useState(true);
  const roles = PORTFOLIO_DATA.profile.titles;

  // Cycle role
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  // Dismiss hint on any interaction
  useEffect(() => {
    const handleFirstClick = () => {
      setShowClickHint(false);
    };
    window.addEventListener('click', handleFirstClick, { once: true });
    return () => window.removeEventListener('click', handleFirstClick);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] ambient-glow-cyan blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] ambient-glow-violet blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & Personality */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Playful Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
              <span>{PORTFOLIO_DATA.profile.statusBadge}</span>
            </motion.div>

            {/* Bold Headline Line by Line */}
            <div className="space-y-1 mb-5">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight"
              >
                {PORTFOLIO_DATA.profile.headlineLine1}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-300 to-lime-300 bg-clip-text text-transparent leading-tight"
              >
                {PORTFOLIO_DATA.profile.headlineLine2}
              </motion.h2>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-200 leading-tight"
              >
                {PORTFOLIO_DATA.profile.headlineLine3}
              </motion.h2>
            </div>

            {/* Dynamic Role Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 text-base sm:text-lg text-slate-400 font-mono mb-6 min-h-[32px]"
            >
              <span className="text-slate-500">{'>'} I am a</span>
              <div className="relative inline-block overflow-hidden h-7">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block font-semibold text-lime-400"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Brief Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mb-8"
            >
              Specializing in high-performance web applications, responsive Shopify Liquid theme engineering, and elegant full-stack solutions built with care and developer craftsmanship.
            </motion.p>

            {/* Buttons with Magnetic-style hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 relative"
            >
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-lime-400 via-cyan-400 to-cyan-300 hover:from-lime-300 hover:to-cyan-200 rounded-xl shadow-lg shadow-cyan-500/15 hover:shadow-lime-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>See My Work ↓</span>
                <Eye className="w-4 h-4 text-slate-900" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Let's Talk ↗</span>
                <Send className="w-4 h-4 text-cyan-400" />
              </button>

              {/* Playful hint */}
              <AnimatePresence>
                {showClickHint && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-xs font-mono text-lime-400/90 hidden sm:inline-flex items-center gap-1.5 animate-pulse"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Psst... try clicking things</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Custom Interactive Terminal with Typing & Bug Easter Egg */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <InteractiveTerminal />
          </div>
        </div>

        {/* Full-Width Proof Metric Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {PORTFOLIO_DATA.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight tabular-nums flex items-center gap-1">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-cyan-400 mt-0.5">
                {metric.label}
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                {metric.detail}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors group cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors">
              Explore
            </span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};
