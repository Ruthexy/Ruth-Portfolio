import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'React Router',
      'Redux Toolkit',
      'TanStack Query',
      'React Hook Form',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'JWT Authentication',
      'Axios',
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      'Git & GitHub',
      'Vite',
      'Figma',
      'Postman',
      'VS Code',
      'npm',
      'Vercel',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Skills & Tools</h2>
          <p className="text-gray-400 text-lg">Technologies I work with regularly</p>
        </motion.div>

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Skill pills */}
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                {group.skills.map(skill => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: 'rgba(99, 102, 241, 0.2)',
                      boxShadow: '0 0 18px rgba(99, 102, 241, 0.28)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.25, type: 'spring', stiffness: 300 }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm cursor-default relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: ['100%', '-100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                    />
                    <span className="relative z-10 text-gray-300">{skill}</span>
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
