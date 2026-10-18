import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  ArrowRight,
  Code2,
  Briefcase,
  Layers,
  GraduationCap,
  Mail,
  Linkedin,
  Github,
  Play,
  Copy,
  Check,
  Sparkles,
  Command as CommandIcon,
  X
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onReplayIntro: () => void;
  onTriggerKonami?: () => void;
}

interface CommandAction {
  id: string;
  title: string;
  subtitle: string;
  category: 'Navigation' | 'Contact' | 'Social' | 'Actions';
  icon: React.ReactNode;
  perform: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onReplayIntro,
  onTriggerKonami,
}) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText(null);
      onClose();
    }, 1200);
  };

  const actions: CommandAction[] = [
    {
      id: 'nav-home',
      title: 'Go to Home / Hero',
      subtitle: 'Jump to the top banner and overview',
      category: 'Navigation',
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      perform: () => scrollTo('home'),
    },
    {
      id: 'nav-about',
      title: 'About Anchal',
      subtitle: 'Background, identity, and developer philosophy',
      category: 'Navigation',
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
      perform: () => scrollTo('about'),
    },
    {
      id: 'nav-skills',
      title: 'Technical Skills Toolkit',
      subtitle: 'Frontend, Shopify Liquid, Backend, AI, and Tools',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      perform: () => scrollTo('skills'),
    },
    {
      id: 'nav-experience',
      title: 'Career & Experience Timeline',
      subtitle: 'Ninton Technology, K Y Holidays, Infotact Solutions',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-cyan-400" />,
      perform: () => scrollTo('experience'),
    },
    {
      id: 'nav-projects',
      title: 'Featured Projects & Research',
      subtitle: 'AI Fairness Paper, IoT Onion Storage, Hotel Booking',
      category: 'Navigation',
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
      perform: () => scrollTo('projects'),
    },
    {
      id: 'nav-contact',
      title: 'Contact & Hire Me',
      subtitle: 'Send an inquiry or view communication channels',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      perform: () => scrollTo('contact'),
    },
    {
      id: 'act-copy-email',
      title: `Copy Email (${PORTFOLIO_DATA.profile.email})`,
      subtitle: 'Copies direct address to clipboard',
      category: 'Contact',
      icon: <Copy className="w-4 h-4 text-indigo-400" />,
      perform: () => copyToClipboard(PORTFOLIO_DATA.profile.email, 'Email copied!'),
    },
    {
      id: 'act-copy-phone',
      title: `Copy Phone (${PORTFOLIO_DATA.profile.phone})`,
      subtitle: 'Copies direct mobile/WhatsApp number to clipboard',
      category: 'Contact',
      icon: <Copy className="w-4 h-4 text-indigo-400" />,
      perform: () => copyToClipboard(PORTFOLIO_DATA.profile.phone, 'Phone copied!'),
    },
    {
      id: 'act-linkedin',
      title: 'Visit LinkedIn Profile',
      subtitle: 'Connect on professional network',
      category: 'Social',
      icon: <Linkedin className="w-4 h-4 text-[#38bdf8]" />,
      perform: () => {
        const link = document.createElement('a');
        link.href = PORTFOLIO_DATA.profile.linkedin;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onClose();
      },
    },
    {
      id: 'act-github',
      title: 'Visit GitHub Profile',
      subtitle: 'Explore source code repositories and commits',
      category: 'Social',
      icon: <Github className="w-4 h-4 text-slate-200" />,
      perform: () => {
        const link = document.createElement('a');
        link.href = PORTFOLIO_DATA.profile.github;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onClose();
      },
    },
    {
      id: 'act-replay-intro',
      title: 'Replay Terminal Intro Experience',
      subtitle: 'Re-runs the opening animation sequence',
      category: 'Actions',
      icon: <Play className="w-4 h-4 text-amber-400" />,
      perform: () => {
        onClose();
        onReplayIntro();
      },
    },
    {
      id: 'act-arcade-mode',
      title: 'Unlock Arcade Secret Level (Konami Code)',
      subtitle: 'Cheat code easter egg with retro developer stats',
      category: 'Actions',
      icon: <Sparkles className="w-4 h-4 text-lime-400" />,
      perform: () => {
        onClose();
        if (onTriggerKonami) onTriggerKonami();
      },
    },
  ];

  const filteredActions = actions.filter((act) => {
    const q = search.toLowerCase();
    return (
      act.title.toLowerCase().includes(q) ||
      act.subtitle.toLowerCase().includes(q) ||
      act.category.toLowerCase().includes(q)
    );
  });

  // Global keydown listener for palette toggle & navigation
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Toggle with ⌘K, Ctrl+K, or slash "/" when not in an input
      if (
        (e.key === 'k' && (e.metaKey || e.ctrlKey)) ||
        (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA')
      ) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setSearch('');
          setSelectedIndex(0);
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredActions.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + Math.max(1, filteredActions.length)) % Math.max(1, filteredActions.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].perform();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Palette Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -10 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-xl glass-panel rounded-2xl border border-white/20 shadow-2xl overflow-hidden bg-[#0c0f18] z-10"
      >
        {/* Search Input Box */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Status Toast when copied */}
        {copiedText && (
          <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-4 py-2 text-xs text-emerald-300 flex items-center gap-2">
            <Check className="w-3.5 h-3.5" />
            <span>{copiedText}</span>
          </div>
        )}

        {/* List of actions */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.map((action, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <div
                key={action.id}
                onClick={() => action.perform()}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`p-3 rounded-xl cursor-pointer flex items-center justify-between text-left transition-colors ${
                  isSelected
                    ? 'bg-cyan-500/15 border border-cyan-500/30 text-white'
                    : 'text-slate-300 hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-white/5 shrink-0">
                    {action.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-semibold truncate flex items-center gap-2">
                      <span>{action.title}</span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase px-1.5 py-0.2 rounded bg-white/5">
                        {action.category}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      {action.subtitle}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 pl-2">
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'
                    }`}
                  />
                </div>
              </div>
            );
          })}

          {filteredActions.length === 0 && (
            <div className="p-8 text-center text-xs text-slate-500">
              No matching commands found for "{search}".
            </div>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-cyan-400 font-semibold">Anchal Chaurasiya</span>
        </div>
      </motion.div>
    </div>
  );
};
