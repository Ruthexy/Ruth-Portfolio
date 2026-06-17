import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { Projects as projects, type Project, type ProjectCategory } from '../Data/Projects'

type Filter = 'All' | ProjectCategory
const filters: Filter[] = ['All', 'Full Stack', 'Frontend', 'Landing Page']

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered =
    activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
          <p className="text-gray-400 text-lg">A curated selection of things I've built</p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-accent rounded-xl"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </motion.div>

        {/* Grid — key on activeFilter so cards re-animate on each filter change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.08 }}
              >
                <ProjectCard
                  project={project}
                  onViewOverview={() => setSelected(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
