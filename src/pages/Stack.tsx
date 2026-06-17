import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stackCategories, getStackByCategory, type StackCategory } from '../data/stack'
import ScrollReveal from '../components/ui/ScrollReveal'

const categoryIcons: Record<StackCategory, string> = {
  Languages: '{ }',
  Frontend: '◈',
  Backend: '◇',
  Cloud: '◯',
  Tools: '⌘',
  AI: '✦',
}

export default function Stack() {
  const [active, setActive] = useState<StackCategory>('Frontend')

  useEffect(() => {
    document.title = 'Stack — Ruth Okwuokenye'
  }, [])

  const items = getStackByCategory(active)

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
            <span className="label text-ink-3 mb-4 block">Stack</span>
            <h1
              className="font-display font-extrabold text-ink-1 leading-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
            >
              The tools I use.
            </h1>
            <p className="text-ink-2 text-lg max-w-lg">
              Not just what I use — but why. Every tool here has earned its place through
              real-world use and deliberate evaluation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad">
        <div className="container">
          <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
            {/* Category sidebar */}
            <ScrollReveal>
              <div className="flex md:flex-col gap-1 overflow-x-auto no-scrollbar md:sticky md:top-28">
                {stackCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`relative flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition-colors text-sm whitespace-nowrap ${
                      active === cat
                        ? 'text-ink-1'
                        : 'text-ink-3 hover:text-ink-2'
                    }`}
                  >
                    {active === cat && (
                      <motion.span
                        layoutId="stack-indicator"
                        className="absolute inset-0 rounded-lg bg-white/5 border border-line"
                        transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                      />
                    )}
                    <span className="relative font-mono text-xs text-ink-3">
                      {categoryIcons[cat]}
                    </span>
                    <span className="relative font-medium">{cat}</span>
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Items */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="divide-y divide-line"
                >
                  {items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.35 }}
                      className="py-6"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-display font-semibold text-ink-1 text-lg">
                            {item.name}
                          </h3>
                          <p className="text-sm text-ink-3 mt-0.5">{item.description}</p>
                        </div>
                        <span className="tech-tag flex-shrink-0">{active}</span>
                      </div>
                      <div className="border-l-2 border-accent/20 pl-4">
                        <p className="text-sm text-ink-2 leading-relaxed">{item.why}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
