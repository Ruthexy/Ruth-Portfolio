import { motion } from 'framer-motion'

type EntryType = 'work' | 'education'

const timeline: {
  period: string
  title: string
  company: string
  description: string
  type: EntryType
}[] = [
  {
    period: '2025 – Present',
    title: 'Freelance Frontend Developer',
    company: 'Self-Directed',
    description:
      'Building production-ready web applications, deepening full-stack skills with React, Node.js, and MongoDB, and actively seeking a frontend developer role.',
    type: 'work',
  },
  {
    period: '2023 – 2024',
    title: 'Frontend Engineering Programme',
    company: 'AltSchool Africa',
    description:
      'Completed a structured engineering track covering React, TypeScript, Node.js, Express, and MongoDB — culminating in several full-stack capstone projects.',
    type: 'education',
  },
]

const typeStyles: Record<EntryType, string> = {
  work: 'bg-accent/20 border-accent/50 text-accent',
  education: 'bg-violet-500/20 border-violet-500/50 text-violet-400',
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Experience</h2>
          <p className="text-gray-400 text-lg">Education and work history</p>
        </motion.div>

        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent" />

          <div className="space-y-12">
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full border-2 border-accent/40 bg-background flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>

                <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                        {entry.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-0.5">{entry.company}</p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border ${typeStyles[entry.type]}`}
                      >
                        {entry.type === 'work' ? 'Work' : 'Education'}
                      </span>
                      <span className="text-xs text-gray-500 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                        {entry.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
