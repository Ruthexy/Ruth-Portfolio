import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, FileText, Layers, User, Mail, Cpu, Home, X } from 'lucide-react'

interface Command {
  id: string
  label: string
  description?: string
  icon: React.ReactNode
  action: () => void
  group: string
}

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function CommandPalette({ isOpen, onClose }: Props) {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  const go = (path: string) => {
    navigate(path)
    onClose()
    setQuery('')
  }

  const commands: Command[] = [
    { id: 'home', label: 'Home', description: 'Go to homepage', icon: <Home size={15} />, action: () => go('/'), group: 'Navigation' },
    { id: 'work', label: 'Work', description: 'View projects', icon: <Layers size={15} />, action: () => go('/work'), group: 'Navigation' },
    { id: 'about', label: 'About', description: 'Learn about me', icon: <User size={15} />, action: () => go('/about'), group: 'Navigation' },
    { id: 'writing', label: 'Writing', description: 'Read articles', icon: <FileText size={15} />, action: () => go('/writing'), group: 'Navigation' },
    { id: 'stack', label: 'Stack', description: 'Tools I use', icon: <Cpu size={15} />, action: () => go('/stack'), group: 'Navigation' },
    { id: 'contact', label: 'Contact', description: 'Get in touch', icon: <Mail size={15} />, action: () => go('/contact'), group: 'Navigation' },
    {
      id: 'github',
      label: 'GitHub',
      description: 'github.com/Ruthexy',
      icon: <ArrowRight size={15} />,
      action: () => { window.open('https://github.com/Ruthexy', '_blank'); onClose() },
      group: 'Links',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      description: 'View LinkedIn profile',
      icon: <ArrowRight size={15} />,
      action: () => { window.open('https://linkedin.com/in/ruth-okwuokenye', '_blank'); onClose() },
      group: 'Links',
    },
  ]

  const filtered = query
    ? commands.filter(
        c =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.description?.toLowerCase().includes(query.toLowerCase()),
      )
    : commands

  const grouped = filtered.reduce<Record<string, Command[]>>((acc, cmd) => {
    if (!acc[cmd.group]) acc[cmd.group] = []
    acc[cmd.group].push(cmd)
    return acc
  }, {})

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex(i => Math.min(i + 1, filtered.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex(i => Math.max(i - 1, 0))
      }
      if (e.key === 'Enter') {
        e.preventDefault()
        filtered[activeIndex]?.action()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, filtered, activeIndex])

  let flatIndex = 0

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-[20vh] left-1/2 z-[201] w-full max-w-[560px] -translate-x-1/2 px-4"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-xl border border-line bg-bg-2 shadow-2xl overflow-hidden">
              {/* Search bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-line">
                <Search size={16} className="text-ink-3 flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-ink-1 placeholder-ink-3 text-sm outline-none"
                />
                <button onClick={onClose} className="text-ink-3 hover:text-ink-2 transition-colors">
                  <X size={15} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[340px] overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="px-4 py-6 text-center text-ink-3 text-sm">
                    No results for "{query}"
                  </div>
                ) : (
                  Object.entries(grouped).map(([group, items]) => (
                    <div key={group}>
                      <div className="px-4 py-1.5">
                        <span className="label text-ink-3">{group}</span>
                      </div>
                      {items.map(cmd => {
                        const currentIndex = flatIndex++
                        return (
                          <button
                            key={cmd.id}
                            onClick={cmd.action}
                            onMouseEnter={() => setActiveIndex(currentIndex)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                              activeIndex === currentIndex
                                ? 'bg-white/5 text-ink-1'
                                : 'text-ink-2 hover:text-ink-1'
                            }`}
                          >
                            <span className={activeIndex === currentIndex ? 'text-accent' : 'text-ink-3'}>
                              {cmd.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium">{cmd.label}</div>
                              {cmd.description && (
                                <div className="text-xs text-ink-3 truncate">{cmd.description}</div>
                              )}
                            </div>
                            {activeIndex === currentIndex && (
                              <ArrowRight size={13} className="text-ink-3 flex-shrink-0" />
                            )}
                          </button>
                        )
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-line flex items-center gap-3">
                <span className="label text-ink-3">↑↓ navigate</span>
                <span className="label text-ink-3">↵ select</span>
                <span className="label text-ink-3">esc close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
