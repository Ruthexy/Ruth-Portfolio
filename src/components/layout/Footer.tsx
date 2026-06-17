import { Link } from 'react-router-dom'
import { Mail, ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/stack', label: 'Stack' },
  { href: '/contact', label: 'Contact' },
]

const socials = [
  { href: 'https://github.com/Ruthexy', icon: <FaGithub size={16} />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/ruth-okwuokenye', icon: <FaLinkedinIn size={16} />, label: 'LinkedIn' },
  { href: 'mailto:ruthokwuokenye@gmail.com', icon: <Mail size={16} />, label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line mt-auto">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <Link to="/" className="inline-flex items-center gap-2 mb-3 group">
              <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-bg font-display font-bold text-xs leading-none">RO</span>
              </div>
              <span className="font-display font-semibold text-ink-1 text-sm group-hover:text-accent transition-colors">
                Ruth Okwuokenye
              </span>
            </Link>
            <p className="text-sm text-ink-3 leading-relaxed">
              Frontend engineer crafting scalable digital products and exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            {/* Nav */}
            <div>
              <p className="label text-ink-3 mb-3">Navigation</p>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-ink-2 hover:text-ink-1 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <p className="label text-ink-3 mb-3">Connect</p>
              <ul className="space-y-2">
                {socials.map(s => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-ink-2 hover:text-ink-1 transition-colors group"
                    >
                      {s.icon}
                      {s.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="label text-ink-3">
            © {year} Ruth Okwuokenye. Built with React & TypeScript.
          </p>
          <p className="label text-ink-3">
            Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}
