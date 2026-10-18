import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(PORTFOLIO_DATA.experiences[0].id);

  const selectedExp =
    PORTFOLIO_DATA.experiences.find((exp) => exp.id === selectedExpId) ||
    PORTFOLIO_DATA.experiences[0];

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>03. CAREER MILESTONES</span>
            <span className="w-8 h-px bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            A track record of shipping production code, optimizing e-commerce conversions, and engineering scalable web systems.
          </p>
        </div>

        {/* Desktop Split & Timeline Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation / Timeline Selector */}
          <div className="lg:col-span-5 space-y-3">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => {
              const isSelected = exp.id === selectedExpId;
              return (
                <div
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all duration-200 text-left relative overflow-hidden group ${
                    isSelected
                      ? 'bg-white/[0.06] border-cyan-400/50 shadow-lg shadow-cyan-500/10'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  {/* Subtle active left highlight hairline */}
                  {isSelected && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-cyan-400 to-indigo-500" />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>

                  <div className="text-xs text-slate-300 font-medium mt-0.5">
                    {exp.company}
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.location}
                    </span>
                    <span className="text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Details <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Detailed Experience Panel */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-cyan-400 tracking-wide uppercase">
                  {selectedExp.type} Experience
                </span>
                <h3 className="text-2xl font-bold font-display text-white mt-1">
                  {selectedExp.role}
                </h3>
                <div className="text-sm font-semibold text-cyan-300 mt-0.5">
                  {selectedExp.company}
                </div>
              </div>

              <div className="flex sm:flex-col sm:items-end text-xs font-mono text-slate-400 gap-3 sm:gap-1">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {selectedExp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {selectedExp.location}
                </span>
              </div>
            </div>

            {/* Core Responsibilities & Impact */}
            <div className="py-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                Key Contributions & Deliverables
              </h4>

              <ul className="space-y-3">
                {selectedExp.achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies Applied */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                Technologies & Tools Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedExp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
