import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, FileDown, ArrowUpRight, Copy, Check } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import ScrollReveal from '../components/ui/ScrollReveal'
import resumePDF from '../assets/Ruth_Okwuokenye_Frontend_CV (1).pdf'

const EMAIL = 'ruthokwuokenye2019@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'Contact — Ruth Okwuokenye'
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1200))
    setSending(false)
    setSent(true)
  }

  const socials = [
    {
      label: 'GitHub',
      handle: '@Ruthexy',
      href: 'https://github.com/Ruthexy',
      icon: <FaGithub size={18} />,
    },
    {
      label: 'LinkedIn',
      handle: 'Ruth Okwuokenye',
      href: 'https://linkedin.com/in/ruth-okwuokenye',
      icon: <FaLinkedinIn size={18} />,
    },
    {
      label: 'Email',
      handle: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: <Mail size={18} />,
    },
  ]

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
            <span className="label text-ink-3 mb-4 block">Contact</span>
            <h1
              className="font-display font-extrabold text-ink-1 leading-tight mb-4"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 5rem)' }}
            >
              Let's build something{' '}
              <span className="gradient-text">great</span>{' '}
              together.
            </h1>
            <div className="flex items-center gap-2 text-ink-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
              <span className="text-sm font-mono">Available for new projects</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — contact info */}
            <ScrollReveal>
              <div>
                <h2 className="font-display font-semibold text-ink-1 text-xl mb-5">
                  Get in touch
                </h2>
                <p className="text-ink-2 leading-relaxed mb-8">
                  Whether you have a project in mind, want to discuss a role, or just want to say
                  hello — I'm always happy to connect.
                </p>

                {/* Email with copy */}
                <div className="surface-card p-4 mb-5">
                  <p className="label text-ink-3 mb-2">Direct email</p>
                  <div className="flex items-center justify-between gap-3">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-ink-1 font-medium hover:text-accent transition-colors text-sm"
                    >
                      {EMAIL}
                    </a>
                    <button
                      onClick={copyEmail}
                      className="flex items-center gap-1.5 text-xs text-ink-3 hover:text-ink-1 transition-colors px-2 py-1 rounded border border-line hover:border-line-hover"
                    >
                      {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Socials */}
                <div className="space-y-2 mb-8">
                  {socials.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.label !== 'Email' ? '_blank' : undefined}
                      rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-between p-3 rounded-lg border border-line hover:border-line-hover hover:bg-white/[0.03] transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-ink-3 group-hover:text-ink-1 transition-colors">
                          {s.icon}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-ink-1">{s.label}</p>
                          <p className="text-xs text-ink-3">{s.handle}</p>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={15}
                        className="text-ink-3 group-hover:text-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ))}
                </div>

                {/* Resume */}
                <div className="surface-card p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="label text-ink-3 mb-0.5">Resume</p>
                      <p className="text-sm text-ink-2">Ruth Okwuokenye — Frontend Engineer</p>
                    </div>
                    <a
                      href={resumePDF}
                      download
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs font-medium hover:bg-accent/15 transition-all"
                    >
                      <FileDown size={14} />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — form */}
            <ScrollReveal delay={0.15}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="surface-card p-8 flex flex-col items-center justify-center text-center min-h-[400px]"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                    <Check size={22} className="text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-ink-1 text-xl mb-2">Message sent</h3>
                  <p className="text-ink-2 text-sm max-w-xs">
                    Thanks for reaching out! I'll get back to you within 24–48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="label text-ink-3 mb-1.5 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-bg-2 border border-line text-ink-1 placeholder-ink-3 text-sm outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label text-ink-3 mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-bg-2 border border-line text-ink-1 placeholder-ink-3 text-sm outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label text-ink-3 mb-1.5 block">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      placeholder="Project inquiry, collaboration..."
                      className="w-full px-4 py-3 rounded-lg bg-bg-2 border border-line text-ink-1 placeholder-ink-3 text-sm outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label text-ink-3 mb-1.5 block">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your project or idea..."
                      className="w-full px-4 py-3 rounded-lg bg-bg-2 border border-line text-ink-1 placeholder-ink-3 text-sm outline-none focus:border-accent/40 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3 rounded-lg gradient-bg text-bg font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {sending ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
