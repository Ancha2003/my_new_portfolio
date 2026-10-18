import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, X, Sparkles } from 'lucide-react';

export const AchievementToast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if previously dismissed in this session
    if (sessionStorage.getItem('anchal_scroll_achievement_seen')) {
      return;
    }

    const handleScroll = () => {
      if (dismissed) return;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercent = (window.scrollY / scrollHeight) * 100;

      // Trigger around 55% down the page (exploring projects/experience)
      if (scrollPercent > 55 && !isVisible) {
        setIsVisible(true);
        sessionStorage.setItem('anchal_scroll_achievement_seen', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, dismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-40 max-w-sm w-full mx-auto p-4 rounded-xl glass-panel border border-amber-400/40 shadow-2xl bg-[#0b0f19]/95 text-slate-100 flex items-start gap-3.5 backdrop-blur-xl"
        >
          <div className="w-10 h-10 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
            <Trophy className="w-5 h-5 animate-bounce" />
          </div>

          <div className="flex-1 min-w-0 pr-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Achievement Unlocked</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-white mt-0.5 leading-snug">
              You scrolled further than 90% of internet users. 🏆
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Recruiters who reach this point are 10x more likely to hire Anchal!
            </p>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
