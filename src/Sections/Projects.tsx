import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { Projects as projects, type Project } from '../Data/Projects'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
          <p className="text-gray-400 text-lg">A selection of things I've built recently</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map(project => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard
                project={project}
                onViewOverview={() => setSelected(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
