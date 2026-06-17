import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { getProjectBySlug, projects } from '../data/projects'
import ScrollReveal from '../components/ui/ScrollReveal'

function SectionBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <ScrollReveal>
      <div className="grid md:grid-cols-[220px,1fr] gap-6 py-10 border-b border-line last:border-0">
        <div>
          <span className="label text-ink-3">{label}</span>
        </div>
        <div>{children}</div>
      </div>
    </ScrollReveal>
  )
}

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug ?? '')

  const currentIndex = projects.findIndex(p => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Ruth Okwuokenye`
    }
  }, [project])

  if (!project) return <Navigate to="/work" replace />

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back */}
      <div className="border-b border-line">
        <div className="container py-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-ink-3 hover:text-ink-1 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            All work
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-14 pb-10 border-b border-line">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-5">
              <span className="tech-tag">{project.category}</span>
              <span className="tech-tag">{project.year}</span>
            </div>
            <h1
              className="font-display font-extrabold text-ink-1 leading-tight mb-4"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 5rem)' }}
            >
              {project.title}
            </h1>
            <p className="text-ink-2 text-xl max-w-xl mb-8">{project.tagline}</p>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-bg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={14} />
                Live demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-line text-ink-1 text-sm font-medium hover:border-line-hover hover:bg-white/[0.03] transition-all"
              >
                <ExternalLink size={14} />
                GitHub
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero image */}
      <div className="border-b border-line">
        <div className="container py-8">
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden bg-bg-3 border border-line aspect-[16/8]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Case study content */}
      <section className="section-pad">
        <div className="container">
          <SectionBlock label="Overview">
            <p className="text-ink-2 leading-relaxed text-[1.05rem]">{project.overview}</p>
          </SectionBlock>

          <SectionBlock label="The Problem">
            <p className="text-ink-2 leading-relaxed">{project.problem}</p>
          </SectionBlock>

          <SectionBlock label="The Solution">
            <p className="text-ink-2 leading-relaxed">{project.solution}</p>
          </SectionBlock>

          <SectionBlock label="Key Features">
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-ink-2">
                  <span className="text-accent font-mono text-sm mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock label="Technical Challenges">
            <div className="space-y-4">
              {project.challenges.map((c, i) => (
                <div key={i} className="surface-card p-4">
                  <p className="text-ink-2 text-sm leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock label="Outcome">
            <p className="text-ink-2 leading-relaxed">{project.outcome}</p>
          </SectionBlock>

          <SectionBlock label="Technologies Used">
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </SectionBlock>
        </div>
      </section>

      {/* Next project */}
      {nextProject && (
        <section className="border-t border-line">
          <div className="container py-12">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="label text-ink-3 mb-2 block">Next Project</span>
                  <h3 className="font-display font-bold text-2xl text-ink-1">
                    {nextProject.title}
                  </h3>
                  <p className="text-ink-3 text-sm mt-1">{nextProject.tagline}</p>
                </div>
                <Link
                  to={`/work/${nextProject.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-line text-ink-1 font-medium text-sm hover:border-line-hover hover:bg-white/[0.03] transition-all whitespace-nowrap group"
                >
                  View project
                  <ArrowUpRight
                    size={15}
                    className="transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}
    </motion.div>
  )
}
