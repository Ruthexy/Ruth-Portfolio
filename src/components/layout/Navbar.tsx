import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Command, Menu, X } from 'lucide-react'
import { useCommandPalette } from '../../hooks/useCommandPalette'
import CommandPalette from '../CommandPalette'

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/stack', label: 'Stack' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isOpen, open, close } = useCommandPalette()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
            >
              <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-bg font-display font-bold text-xs leading-none">RO</span>
              </div>
              <span className="font-display font-semibold text-ink-1 text-sm hidden sm:block group-hover:text-accent transition-colors">
                Ruth Okwuokenye
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                      isActive ? 'text-ink-1' : 'text-ink-2 hover:text-ink-1'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-md bg-white/5"
                        transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={open}
                className="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-line text-ink-3 hover:text-ink-2 hover:border-line-hover transition-all text-xs font-mono"
                aria-label="Open command palette"
              >
                <Command size={12} />
                <span>K</span>
              </button>

              <Link
                to="/contact"
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs font-medium hover:bg-accent/15 transition-all"
              >
                Get in touch
              </Link>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(v => !v)}
                className="md:hidden p-2 text-ink-2 hover:text-ink-1 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-bg md:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container pt-24 pb-8">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      to={link.href}
                      className={`block py-3 text-2xl font-display font-semibold border-b border-line transition-colors ${
                        pathname === link.href ? 'text-accent' : 'text-ink-1 hover:text-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => { open(); setMobileOpen(false) }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-line text-ink-2 text-sm"
                >
                  <Command size={14} />
                  Command palette
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CommandPalette isOpen={isOpen} onClose={close} />
    </>
  )
}
