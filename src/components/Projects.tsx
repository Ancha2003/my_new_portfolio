import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Layers, CheckCircle2, BookOpen, Info } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>04. FEATURED SYSTEMS & RESEARCH</span>
            <span className="w-8 h-px bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Selected Works & Applications
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Each project demonstrates intentional architecture, verified deliverables, and real-world engineering problem solving.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-14">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredProjectId === project.id;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
                  isHovered
                    ? `${project.accentBorder} shadow-2xl bg-[#0c101a]/95`
                    : 'border-white/10 bg-[#080b12]/80 hover:border-white/20'
                } backdrop-blur-xl group`}
              >
                {/* Subtle Ambient Glow on Hover */}
                {isHovered && (
                  <div className={`absolute inset-0 rounded-2xl pointer-events-none opacity-20 ${project.accentBg} blur-xl`} />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Visual Preview / Browser Window Frame */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group/mockup rounded-xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
                      {/* Browser Mockup Top Bar */}
                      <div className="px-3.5 py-2.5 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                          <span className="text-[11px] font-mono text-slate-400 ml-2 truncate max-w-[200px]">
                            preview://{project.id}/spec
                          </span>
                        </div>
                        <div className={`text-[10px] font-mono px-2 py-0.5 rounded border ${project.accentBadge}`}>
                          {project.previewBadge}
                        </div>
                      </div>

                      {/* Image Frame */}
                      <div
                        className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/mockup:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/mockup:opacity-40 transition-opacity" />

                        {/* Interactive Click Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/mockup:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs">
                          <span className="px-4 py-2 rounded-xl bg-white text-slate-950 text-xs font-bold font-mono flex items-center gap-1.5 shadow-xl transition-transform group-hover/mockup:scale-105">
                            <span>Explore Deep Dive Specs</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>

                      {/* Mockup Footer Metric */}
                      {project.metrics && (
                        <div className="px-4 py-2 bg-black/70 border-t border-white/5 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                          <span className={`flex items-center gap-1 font-semibold ${project.accentColor}`}>
                            <Sparkles className="w-3 h-3" />
                            {project.metrics}
                          </span>
                          <span className="text-slate-400">Click to inspect</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Info Column */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Clean unboxed metadata with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <span className={`font-semibold ${project.accentColor}`}>{project.tag}</span>
                      <span aria-hidden="true">·</span>
                      <span>Verified Architecture</span>
                      {project.isResearch && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-violet-400 flex items-center gap-1">
                            <BookOpen className="w-3 h-3" /> Co-Authored Paper
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                      {project.title}
                    </h3>

                    <p className={`text-xs sm:text-sm font-medium ${project.accentColor}`}>
                      {project.subtitle}
                    </p>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                      <p className="text-slate-400">
                        <strong className="text-slate-200 font-medium">Problem Statement:</strong> {project.problem}
                      </p>
                      <p className="text-slate-300">
                        <strong className="text-white font-medium">My Contribution:</strong> {project.contribution}
                      </p>
                    </div>

                    {/* Technologies tags with animated reveal */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-slate-300 group-hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-white hover:bg-slate-200 transition-colors shadow-sm cursor-pointer"
                      >
                        <span>View Deep Dive Modal</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code Repository</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Deep Dive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
