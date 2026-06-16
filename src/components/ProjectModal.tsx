import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../Data/Projects'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0f0f17] border border-white/10 rounded-2xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Gradient header */}
            <div
              className="h-44 relative overflow-hidden rounded-t-2xl flex items-end p-6"
              style={{ background: project.gradient }}
            >
              <div className="absolute inset-0 bg-black/25" />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                }}
              />
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative z-10 text-2xl font-bold text-white"
              >
                {project.title}
              </motion.h2>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors text-sm"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <h3 className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                  Overview
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                  Key Highlights
                </h3>
                <ul className="space-y-2.5">
                  {project.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + i * 0.07 }}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white font-bold"
                        style={{
                          background: 'rgba(99,102,241,0.25)',
                          border: '1px solid rgba(99,102,241,0.5)',
                        }}
                      >
                        ✓
                      </span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex gap-3 pt-2"
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90"
                  style={{ background: project.gradient }}
                >
                  Live Demo ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center rounded-xl font-semibold text-gray-300 text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  GitHub →
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
