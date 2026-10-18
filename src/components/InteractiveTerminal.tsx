import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, RotateCcw, Sparkles, Check, Bug } from 'lucide-react';

const SCRIPT_LINES = [
  '> npm run awesome',
  '> Building something unexpected...',
  '> Developer detected: Anchal',
  '> Result: Looks pretty good ✨',
];

export const InteractiveTerminal: React.FC = () => {
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentTypedText, setCurrentTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Bug character state
  const [bugPosition, setBugPosition] = useState({ x: 20, y: 70 });
  const [bugReaction, setBugReaction] = useState<string | null>(null);
  const [bugClicks, setBugClicks] = useState(0);

  // Run typing animation
  useEffect(() => {
    if (!isTyping) return;

    if (currentLineIndex >= SCRIPT_LINES.length) {
      setIsTyping(false);
      return;
    }

    const targetLine = SCRIPT_LINES[currentLineIndex];
    let charIdx = 0;
    setCurrentTypedText('');

    const interval = setInterval(() => {
      if (charIdx < targetLine.length) {
        setCurrentTypedText(targetLine.slice(0, charIdx + 1));
        charIdx++;
      } else {
        clearInterval(interval);
        const pause = setTimeout(() => {
          setCompletedLines((prev) => [...prev, targetLine]);
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentTypedText('');
        }, 320);
        return () => clearTimeout(pause);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [currentLineIndex, isTyping]);

  // Wandering bug movement timer
  useEffect(() => {
    const moveTimer = setInterval(() => {
      // Random coordinates within terminal card
      const newX = 15 + Math.random() * 65;
      const newY = 25 + Math.random() * 55;
      setBugPosition({ x: newX, y: newY });
    }, 4500);

    return () => clearInterval(moveTimer);
  }, []);

  const handleReplay = () => {
    setCompletedLines([]);
    setCurrentLineIndex(0);
    setCurrentTypedText('');
    setIsTyping(true);
  };

  const handleBugClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newClicks = bugClicks + 1;
    setBugClicks(newClicks);

    const responses = [
      'Hey! I was a feature, not a bug.',
      'Ouch! That was undocumented behavior.',
      'Caught in production! 🐛💨',
      'Deploying hotfix: still a feature!',
      'Achievement: Bug Hunter Extraordinaire! 🎖️',
    ];

    setBugReaction(responses[(newClicks - 1) % responses.length]);
    setTimeout(() => {
      setBugReaction(null);
    }, 3200);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-lime-500/20 rounded-2xl blur-xl opacity-70 animate-pulse pointer-events-none" />

      {/* Terminal Card */}
      <div className="relative glass-panel rounded-2xl border border-white/15 shadow-2xl bg-[#080b12] overflow-hidden">
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              anchal@portfolio ~ bash
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleReplay}
              disabled={isTyping}
              className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 disabled:opacity-40 transition-colors"
              title="Replay terminal animation"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="text-[10px]">Replay</span>
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 font-mono text-xs sm:text-sm min-h-[220px] flex flex-col justify-between relative select-none">
          {/* Wandering Bug Easter Egg */}
          <motion.div
            animate={{
              left: `${bugPosition.x}%`,
              top: `${bugPosition.y}%`,
            }}
            transition={{
              duration: 1.8,
              ease: 'easeInOut',
            }}
            onClick={handleBugClick}
            className="absolute cursor-pointer z-30 p-1.5 rounded-full hover:bg-white/10 transition-transform hover:scale-125 group active:scale-95"
            title="Click me!"
          >
            <span className="text-sm select-none inline-block animate-bounce">🐛</span>
          </motion.div>

          {/* Bug Reaction Toast */}
          <AnimatePresence>
            {bugReaction && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute top-3 right-4 z-40 bg-lime-400 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-mono font-bold shadow-lg flex items-center gap-1.5 border border-lime-300"
              >
                <Bug className="w-3.5 h-3.5 shrink-0" />
                <span>{bugReaction}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Typed script lines */}
          <div className="space-y-2.5">
            {completedLines.map((line, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className={idx === 3 ? 'text-lime-400 font-semibold' : 'text-cyan-300'}>
                  {line}
                </span>
                {idx === 3 && <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />}
              </div>
            ))}

            {isTyping && currentLineIndex < SCRIPT_LINES.length && (
              <div className="flex items-start gap-2 text-cyan-300">
                <span>{currentTypedText}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-cyan-400 translate-y-0.5"
                />
              </div>
            )}

            {!isTyping && (
              <div className="pt-2 text-slate-500 text-xs flex items-center gap-2">
                <span className="text-emerald-400">●</span>
                <span>Ready for high-impact production engineering</span>
              </div>
            )}
          </div>

          {/* Quick interactive mini buttons inside terminal */}
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Interactive playground</span>
            </span>
            <span className="text-slate-400">status: 200 OK</span>
          </div>
        </div>
      </div>
    </div>
  );
};
