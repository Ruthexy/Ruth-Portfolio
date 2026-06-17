import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects, type ProjectCategory } from '../data/projects'
import ScrollReveal from '../components/ui/ScrollReveal'

const filters: (ProjectCategory | 'All')[] = ['All', 'Frontend', 'Landing Page']

export default function Work() {
  const [active, setActive] = useState<ProjectCategory | 'All'>('All')

  useEffect(() => {
    document.title = 'Work — Ruth Okwuokenye'
  }, [])

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <section className="pt-20 pb-14 border-b border-line">
        <div className="container">
          <ScrollReveal>
            <span className="label text-ink-3 mb-4 block">Work</span>
            <h1
              className="font-display font-extrabold text-ink-1 leading-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
            >
              Selected projects.
            </h1>
            <p className="text-ink-2 text-lg max-w-lg">
              A collection of work that reflects how I think about product, engineering, and craft.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-16 z-20 bg-bg/90 backdrop-blur-md border-b border-line">
        <div className="container">
          <div className="flex items-center gap-1 py-3 overflow-x-auto no-scrollbar">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  active === filter ? 'text-ink-1' : 'text-ink-3 hover:text-ink-2'
                }`}
              >
                {active === filter && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-md bg-white/6 border border-line"
                    transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                  />
                )}
                <span className="relative">{filter}</span>
              </button>
            ))}
            <span className="ml-auto label text-ink-3 whitespace-nowrap">
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <section className="section-pad">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 gap-5"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={`/work/${project.slug}`}
                    className="group block surface-card overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden bg-bg-3 aspect-[16/9]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-3/50 to-transparent" />
                      <div className="absolute top-3 right-3 flex gap-1.5">
                        <span className="tech-tag">{project.category}</span>
                        <span className="tech-tag">{project.year}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h2 className="font-display font-semibold text-ink-1 text-xl group-hover:text-accent transition-colors">
                          {project.title}
                        </h2>
                        <ArrowUpRight
                          size={18}
                          className="text-ink-3 group-hover:text-accent flex-shrink-0 mt-0.5 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                      <p className="text-sm text-ink-2 leading-relaxed mb-4">
                        {project.tagline}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 5).map(t => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="tech-tag">+{project.tech.length - 5}</span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  )
}
