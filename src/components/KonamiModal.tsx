import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2, X, Sparkles, Award, Coffee, Terminal, Bug } from 'lucide-react';
import confetti from 'canvas-confetti';

interface KonamiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KONAMI_CODE = [
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

export const KonamiModal: React.FC<KonamiModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#a3e635', '#38bdf8', '#c084fc', '#facc15'],
        });
      } catch {
        // ignore
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-lg glass-panel rounded-2xl border-2 border-lime-400/80 shadow-[0_0_50px_rgba(163,230,53,0.3)] bg-[#070b12] text-slate-100 p-6 sm:p-8 z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-lime-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Gamepad2 className="w-5 h-5 animate-pulse" />
              <span>ARCADE MODE UNLOCKED</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="pt-6 space-y-4 text-center">
            <span className="text-4xl inline-block animate-bounce">👾</span>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
              CHEAT CODE ACTIVATED!
            </h3>

            <p className="text-sm font-mono text-lime-300 font-semibold">
              You found the secret level! 🎮
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
              You entered the legendary Konami Code sequence. You clearly possess exceptional attention to detail — the exact trait needed for a rockstar developer on your team!
            </p>

            {/* Secret Developer Stats */}
            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center font-mono">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <Coffee className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span className="text-xs text-slate-400 block text-[10px]">Caffeine Cap</span>
                <span className="text-sm font-bold text-white">99.8%</span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <Terminal className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                <span className="text-xs text-slate-400 block text-[10px]">Clean Code</span>
                <span className="text-sm font-bold text-white">100%</span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <Bug className="w-4 h-4 text-lime-400 mx-auto mb-1" />
                <span className="text-xs text-slate-400 block text-[10px]">Bugs Fixed</span>
                <span className="text-sm font-bold text-white">404+</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold font-mono text-xs shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                Return to Matrix [ESC]
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
