import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { experience, values } from '../data/experience'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function About() {
  useEffect(() => {
    document.title = 'About — Ruth Okwuokenye'
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <section className="pt-20 pb-16 border-b border-line">
        <div className="container">
          <ScrollReveal>
            <span className="label text-ink-3 mb-4 block">About</span>
            <h1
              className="font-display font-extrabold text-ink-1 leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
            >
              Building things that{' '}
              <br className="hidden md:block" />
              <span className="gradient-text">matter to people.</span>
            </h1>
            <div className="flex items-center gap-2 text-ink-3">
              <MapPin size={14} />
              <span className="text-sm font-mono">Lagos, Nigeria</span>
              <span className="w-1 h-1 rounded-full bg-ink-3" />
              <span className="inline-flex items-center gap-1.5 text-sm font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                Open to remote
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad border-b border-line">
        <div className="container">
          <div className="grid md:grid-cols-[1fr,2fr] gap-12">
            <ScrollReveal>
              <span className="label text-ink-3">My story</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-ink-2 leading-relaxed text-[1.05rem]">
                <p>
                  I came to frontend engineering through genuine curiosity — I wanted to understand
                  how the things I used every day on the web actually worked. That curiosity turned
                  into a discipline, and eventually a career.
                </p>
                <p>
                  I completed an intensive engineering program at AltSchool Africa, where I built
                  production-grade applications and developed the habits that define how I work
                  today: thoughtful architecture before code, ruthless simplicity in interfaces,
                  and a deep care for the people who'll actually use what I build.
                </p>
                <p>
                  Since then, I've been working as a frontend engineer, taking on
                  projects across SaaS, fintech, and creative industries. My focus has shifted from
                  "does it work?" to "does it feel right?" and that question drives every
                  decision I make.
                </p>
                <p>
                  I'm particularly interested in the craft of UI, the micro-interactions, the
                  motion, the typography  and the engineering discipline that makes complex
                  applications maintainable at scale.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-pad border-b border-line">
        <div className="container">
          <ScrollReveal>
            <span className="label text-ink-3 mb-12 block">Experience & Education</span>
          </ScrollReveal>

          <div className="space-y-px">
            {experience.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="grid md:grid-cols-[240px,1fr] gap-6 py-8 border-b border-line last:border-0">
                  <div>
                    <p className="font-mono text-xs text-ink-3 mb-1">{exp.period}</p>
                    <span className={`accent-tag ${exp.type === 'education' ? '' : ''}`}>
                      {exp.type === 'education' ? 'Education' : 'Work'}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-ink-1 text-lg mb-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-3">{exp.company}</p>
                    <p className="text-ink-2 text-sm leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-ink-3">
                          <span className="text-accent mt-0.5 flex-shrink-0">—</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad border-b border-line">
        <div className="container">
          <ScrollReveal>
            <span className="label text-ink-3 mb-12 block">How I work</span>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="surface-card p-6 h-full">
                  <h3 className="font-display font-semibold text-ink-1 mb-3">{v.title}</h3>
                  <p className="text-sm text-ink-2 leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-pad border-b border-line">
        <div className="container">
          <ScrollReveal>
            <span className="label text-ink-3 mb-12 block">Skills & Technologies</span>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                category: 'Core',
                skills: ['React', 'TypeScript', 'JavaScript (ES2022+)', 'HTML5 & CSS3'],
              },
              {
                category: 'Frameworks & Libraries',
                skills: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TanStack Query', 'React Hook Form', 'Redux Toolkit'],
              },
              {
                category: 'AI Tools',
                skills: ['Claude Code', 'GitHub Copilot', 'ChatGPT' ],
              },
              {
                category: 'Testing & Quality',
                skills: ['Jest', 'React Testing Library', 'ESLint', 'Prettier'],
              },
              {
                category: 'Tooling & DevOps',
                skills: ['Vite', 'Git & GitHub', 'Vercel', 'GitHub Actions'],
              },
              {
                category: 'Design & Collaboration',
                skills: ['Figma', 'Responsive Design', 'Accessibility (WCAG)', 'Design Systems'],
              },
            ].map((group, i) => (
              <ScrollReveal key={group.category} delay={i * 0.06}>
                <div>
                  <p className="label text-ink-3 mb-3">{group.category}</p>
                  <ul className="space-y-2">
                    {group.skills.map(skill => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-ink-2">
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="font-display font-bold text-2xl text-ink-1 mb-2">
                  Want to work together?
                </h2>
                <p className="text-ink-2">I'm currently available for new projects.</p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-line text-ink-1 text-sm font-medium hover:border-line-hover hover:bg-white/[0.03] transition-all"
                >
                  See my work
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-bg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Get in touch
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
