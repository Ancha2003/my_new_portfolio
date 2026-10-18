import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, FastForward, CheckCircle2 } from 'lucide-react';

interface OpeningSequenceProps {
  onComplete: () => void;
}

const STEPS = [
  'Initializing portfolio...',
  'Loading developer profile...',
  'Compiling ideas into experiences...',
  "Welcome to Anchal's digital world.",
];

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({ onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [typedChars, setTypedChars] = useState('');
  const [isFinishing, setIsFinishing] = useState(false);

  // Keyboard escape shortcut to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Typewriter step progression
  useEffect(() => {
    if (currentStepIndex >= STEPS.length) {
      setIsFinishing(true);
      const timer = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(timer);
    }

    const currentText = STEPS[currentStepIndex];
    let charIndex = 0;
    setTypedChars('');

    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setTypedChars(currentText.slice(0, charIndex + 1));
        charIndex += 2; // type 2 chars per tick for snappy feel
      } else {
        clearInterval(typeInterval);
        // Quick pause before next step
        const pauseTimer = setTimeout(() => {
          setCurrentStepIndex((prev) => prev + 1);
        }, 180);
        return () => clearTimeout(pauseTimer);
      }
    }, 12);

    return () => clearInterval(typeInterval);
  }, [currentStepIndex, onComplete]);

  const handleSkip = () => {
    setIsFinishing(true);
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  const progressPercent = Math.min(100, Math.round(((currentStepIndex + 1) / STEPS.length) * 100));

  return (
    <AnimatePresence>
      {!isFinishing && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050609] text-slate-100 px-4"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

          {/* Terminal Box */}
          <div className="relative w-full max-w-lg glass-panel rounded-xl p-6 shadow-2xl border border-white/10">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  anchal@workspace ~ init
                </span>
              </div>
              <button
                onClick={handleSkip}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors px-2.5 py-1 rounded bg-white/5 hover:bg-white/10"
                title="Press ESC to skip"
              >
                <span>Skip</span>
                <FastForward className="w-3 h-3" />
                <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">[ESC]</span>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="space-y-3 font-mono text-sm min-h-[140px]">
              {STEPS.slice(0, currentStepIndex).map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}

              {currentStepIndex < STEPS.length && (
                <div className="flex items-start gap-2.5 text-cyan-300">
                  <span className="text-cyan-400 font-bold shrink-0">{'>'}</span>
                  <span className="text-slate-100 font-medium">
                    {typedChars}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-cyan-400 ml-1 translate-y-0.5"
                    />
                  </span>
                </div>
              )}
            </div>

            {/* Progress line */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Loading experience</span>
                <span className="text-cyan-400 font-semibold">{progressPercent}%</span>
              </div>
              <div className="w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
