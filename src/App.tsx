/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { OpeningSequence } from './components/OpeningSequence';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { CustomCursor } from './components/CustomCursor';
import { AchievementToast } from './components/AchievementToast';
import { KonamiModal } from './components/KonamiModal';

const KONAMI_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Only auto-show intro once per session, but allow replay
    if (typeof window !== 'undefined') {
      const hasSeen = sessionStorage.getItem('anchal_portfolio_intro_seen');
      return !hasSeen;
    }
    return true;
  });

  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isKonamiOpen, setIsKonamiOpen] = useState(false);
  const [konamiProgress, setKonamiProgress] = useState(0);

  // Top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Global Konami Code Key Sequence Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is currently typing in an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = KONAMI_SEQUENCE[konamiProgress];

      if (key === expectedKey) {
        const nextProgress = konamiProgress + 1;
        if (nextProgress === KONAMI_SEQUENCE.length) {
          setIsKonamiOpen(true);
          setKonamiProgress(0);
        } else {
          setKonamiProgress(nextProgress);
        }
      } else {
        // Reset sequence on mismatch
        setKonamiProgress(key === KONAMI_SEQUENCE[0] ? 1 : 0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiProgress]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('anchal_portfolio_intro_seen', 'true');
  };

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowIntro(true);
  };

  return (
    <div className="relative min-h-screen bg-[#06070a] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Delicate Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-lime-400 via-cyan-400 to-violet-500 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Opening Terminal Experience (Skippable / Replayable) */}
      {showIntro && <OpeningSequence onComplete={handleIntroComplete} />}

      {/* Primary Sticky Navbar */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Scroll Achievement Toast */}
      <AchievementToast />

      {/* Konami Arcade Easter Egg Modal */}
      <KonamiModal
        isOpen={isKonamiOpen}
        onClose={() => setIsKonamiOpen(false)}
      />

      {/* Footer */}
      <Footer
        onReplayIntro={handleReplayIntro}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onTriggerKonami={() => setIsKonamiOpen(true)}
      />

      {/* Interactive Command Palette (Opened via ⌘K or /) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onReplayIntro={handleReplayIntro}
        onTriggerKonami={() => setIsKonamiOpen(true)}
      />
    </div>
  );
}
