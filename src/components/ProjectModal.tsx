import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, FileText, ArrowRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-white/20 shadow-2xl z-10 bg-[#0a0d14]"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-[#0a0d14]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{project.tag}</span>
              {project.isResearch && (
                <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  Academic Paper
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-cyan-300 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Mockup Preview with Browser Frame */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-lg">
              <div className="px-3 py-2 bg-white/5 border-b border-white/10 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                <span className="text-[11px] font-mono text-slate-500 ml-2 truncate">
                  project://{project.id}/production_inspection
                </span>
              </div>
              <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Metric Callout */}
            {project.metrics && (
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Key Impact Metric</span>
                <span className="text-sm font-bold font-mono text-white">{project.metrics}</span>
              </div>
            )}

            {/* Overview & Problem Statement */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">The Challenge</h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                {project.problem}
              </p>
            </div>

            {/* My Contribution */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">My Contribution</h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-cyan-950/10 p-4 rounded-xl border border-cyan-500/20">
                {project.contribution}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Key Capabilities</h3>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* System Architecture Details */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Architecture Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.architectureDetails.map((item, idx) => (
                  <div key={idx} className="text-xs font-mono text-slate-300 p-3 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
                    <span className="text-cyan-400">#</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-200" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demonstration</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
