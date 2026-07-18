import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react'
import { featuredProjects } from '../data/projects'
import { posts } from '../data/posts'

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-xs text-accent">{number}</span>
      <div className="w-10 h-px bg-line" />
      <span className="label text-ink-3">{label}</span>
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = 'Ruth Okwuokenye — Frontend Engineer'
  }, [])

  const recentPosts = posts.slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="min-h-[92vh] flex flex-col justify-center pt-12 pb-20">
        <div className="container">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            {/* Availability badge */}
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/8 text-accent text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={item}
              className="font-display font-extrabold leading-[1.0] tracking-tight mb-6"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
            >
              <span className="text-ink-1 block">I build</span>
              <span className="text-ink-1 block">
                products that{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 gradient-text">feel right.</span>
                </span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-ink-2 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
            >
              Ruth Okwuokenye — Frontend engineer crafting scalable digital products and
              exceptional user experiences with React & TypeScript.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-bg text-bg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View my work
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-line text-ink-1 font-medium text-sm hover:border-line-hover hover:bg-white/[0.03] transition-all"
              >
                About me
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="mt-16 pt-8 border-t border-line grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { value: '12+', label: 'Projects delivered' },
                { value: '2+', label: 'Years building' },
                { value: '15+', label: 'Technologies' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-2xl text-ink-1 mb-0.5">{stat.value}</div>
                  <div className="text-xs text-ink-3">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section-pad border-t border-line">
        <div className="container">
          <SectionLabel number="01" label="Selected Work" />

          <div className="grid md:grid-cols-2 gap-5">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-3/60 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="tech-tag">{project.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display font-semibold text-ink-1 text-lg group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={16}
                        className="text-ink-3 group-hover:text-accent transition-all -translate-y-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0 mt-1"
                      />
                    </div>
                    <p className="text-sm text-ink-2 leading-relaxed mb-4">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="tech-tag">+{project.tech.length - 4}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-ink-3">
              Showing {featuredProjects.length} of 6 projects
            </p>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-accent transition-colors group"
            >
              View all work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="section-pad border-t border-line">
        <div className="container">
          <SectionLabel number="02" label="About" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-ink-1 mb-5 leading-tight">
                Engineer with a{' '}
                <span className="gradient-text">product mindset.</span>
              </h2>
              <p className="text-ink-2 leading-relaxed mb-4">
                I'm a frontend engineer based in Lagos, Nigeria. I care about the intersection of
                engineering precision and product thinking — building interfaces that are not just
                functional, but genuinely pleasant to use.
              </p>
              <p className="text-ink-2 leading-relaxed mb-7">
                My work spans the full frontend stack: from component architecture and state
                management to animation systems and performance optimization.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors group font-medium"
              >
                More about me
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { label: 'Primary', items: ['Next', 'React', 'TypeScript', 'Tailwind CSS'] },
                { label: 'AI Tools', items: ['Claude Code', 'Codex', 'GitHub Copilot'] },
                { label: 'Motion', items: ['Framer Motion', 'CSS Animations'] },
                { label: 'Tooling', items: ['Vite', 'Git', 'Figma'] },
              ].map(group => (
                <div key={group.label} className="surface-card p-4">
                  <p className="label text-ink-3 mb-2">{group.label}</p>
                  {group.items.map(item => (
                    <p key={item} className="text-sm text-ink-2 py-0.5">{item}</p>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Writing */}
      <section className="section-pad border-t border-line">
        <div className="container">
          <SectionLabel number="03" label="Writing" />

          <div className="grid md:grid-cols-3 gap-4">
            {recentPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/writing/${post.slug}`}
                  className="group block surface-card p-5 h-full"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="accent-tag">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-ink-3 font-mono">
                      <Clock size={11} />
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-ink-1 text-base mb-2 leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink-3 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-ink-3 font-mono">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              to="/writing"
              className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-accent transition-colors group"
            >
              All articles
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="border-t border-line">
        <div className="container py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div>
              <h2
                className="font-display font-bold text-ink-1 leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
              >
                Have a project in mind?
              </h2>
              <p className="text-ink-2 mt-2 text-lg">Let's build something great together.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg gradient-bg text-bg font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Start a conversation
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
