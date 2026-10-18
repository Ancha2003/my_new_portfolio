import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Code2,
  Server,
  Database,
  ShoppingBag,
  Sparkles,
  Wrench,
  Palette,
  Terminal,
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface SkillItem {
  name: string;
  category: string;
  iconType: string;
  highlight?: boolean;
}

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Flattened skills with categories
  const allSkills: SkillItem[] = useMemo(() => {
    const list: SkillItem[] = [];
    PORTFOLIO_DATA.skillCategories.forEach((cat) => {
      cat.skills.forEach((s) => {
        list.push({
          name: s,
          category: cat.category,
          iconType: cat.category,
          highlight: ['Shopify', 'Shopify Liquid', 'React.js', 'Claude AI', 'Node.js', 'Python', 'Tailwind CSS'].includes(s),
        });
      });
    });
    return list;
  }, []);

  const categories = useMemo(() => {
    return ['All', ...PORTFOLIO_DATA.skillCategories.map((c) => c.category)];
  }, []);

  const filteredSkills = useMemo(() => {
    return allSkills.filter((skill) => {
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allSkills, selectedCategory, searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'E-commerce & CMS':
        return <ShoppingBag className="w-4 h-4 text-emerald-400" />;
      case 'Backend & APIs':
        return <Server className="w-4 h-4 text-indigo-400" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-blue-400" />;
      case 'AI & Development':
        return <Sparkles className="w-4 h-4 text-violet-400" />;
      case 'Core Programming':
        return <Terminal className="w-4 h-4 text-amber-400" />;
      case 'Tools & DevOps':
        return <Wrench className="w-4 h-4 text-teal-400" />;
      case 'Creative Multimedia':
        return <Palette className="w-4 h-4 text-pink-400" />;
      default:
        return <Cpu className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>02. TECHNICAL PROFICIENCY</span>
              <span className="w-8 h-px bg-cyan-500/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Skills & Development Toolkit
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-xl">
              Curated technologies and development workflows applied across client e-commerce platforms, research pipelines, and production web applications.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Liquid, React)..."
              className="w-full bg-[#0d101a] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills (Functional interactive tab buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-cyan-400 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={`${skill.category}-${skill.name}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`glass-panel p-4 rounded-xl border transition-all duration-200 group hover:-translate-y-0.5 ${
                  skill.highlight
                    ? 'border-cyan-500/30 hover:border-cyan-400/60 bg-cyan-950/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(skill.category)}
                  </div>
                  {skill.highlight && (
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      Core
                    </span>
                  )}
                </div>

                <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </div>

                <div className="text-[11px] text-slate-400 mt-0.5">
                  {skill.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-xl border border-white/10">
            <p className="text-sm text-slate-400">No skills matching "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Skills Category Overview Summary */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-mono text-cyan-400">STOREFRONT & UI</span>
            <h4 className="text-base font-bold text-white mt-1">Shopify Liquid & Modern Web</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Theme schema tailoring, responsive UI development with React & Tailwind, and seamless checkout optimization.
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-indigo-400">DATA & ENDPOINTS</span>
            <h4 className="text-base font-bold text-white mt-1">APIs, Node & Databases</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              RESTful services, JWT token authorization, MongoDB document modeling, and structured relational MySQL queries.
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-violet-400">MODERN SPEED</span>
            <h4 className="text-base font-bold text-white mt-1">AI-Powered Engineering</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Deep research into algorithmic evaluation, statistical Python data analysis, and prompt-driven productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
