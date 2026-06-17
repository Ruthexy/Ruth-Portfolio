import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const stats = [
  { value: '6+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies' },
  { value: '∞', label: 'Passion for Code' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Gradient orb — top left */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(99, 102, 241, 0.15)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gradient orb — bottom right */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(167, 139, 250, 0.09)' }}
        animate={{ scale: [1, 1.15, 1], x: [0, -18, 0], y: [0, 18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl text-center"
      >
        {/* Available badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Available for work
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Hi, I'm{' '}
            <motion.span
              className="inline-block"
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #6366f1, #a78bfa, #6366f1)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Ruth Okwuokenye
            </motion.span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mt-3">
            Frontend Developer
          </h2>
        </motion.div>

        {/* Description — one sharp sentence (Alex Naraghi #6 pattern) */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          I turn ideas into fast, accessible web experiences — clean code, pixel-perfect UI,
          and a user-first mindset in every project.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition shadow-lg shadow-accent/25"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Stats row — social proof (Gift Egwuenu #11, Stereo Creative #20) */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-white/10 flex justify-center gap-10 flex-wrap"
        >
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-accent">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="mt-12 flex justify-center">
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500 hover:text-accent transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
