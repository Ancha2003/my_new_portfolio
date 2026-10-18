import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, MapPin, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>05. CREDENTIALS & ACADEMICS</span>
            <span className="w-8 h-px bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            A solid academic foundation in Information Technology combined with verified industry engineering credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Education Card (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden shadow-xl">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                    {education.highlight}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                <span>{education.period}</span>
                <span aria-hidden="true">·</span>
                <span>{education.location}</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white">
                {education.degree} in {education.field}
              </h3>

              <div className="text-sm font-semibold text-cyan-300 mt-1">
                {education.institution}
              </div>

              <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-mono block">Academic Merit</span>
                  <span className="text-lg font-bold font-display text-white tabular-nums">
                    CGPA: {education.cgpa} <span className="text-xs font-normal text-slate-400">/ 10</span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 font-mono block">Batch Percentile</span>
                  <span className="text-sm font-semibold text-emerald-400">Top 5% Cohort</span>
                </div>
              </div>

              <div className="mt-5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  Core Foundational Subjects
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Full Degree Program Completed with Distinction</span>
            </div>
          </div>

          {/* Certifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {certifications.map((cert, idx) => (
              <div
                key={cert.name}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-200 relative group"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {cert.badgeCode}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cert.name}
                </h4>

                <div className="text-xs font-semibold text-slate-300 mt-0.5">
                  Issuer: {cert.issuer}
                </div>

                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{cert.category}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Validated
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
