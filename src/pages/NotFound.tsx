import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Ruth Okwuokenye'
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-8xl font-bold text-ink-3/30 select-none block mb-6">
            404
          </span>
          <h1 className="font-display font-bold text-3xl text-ink-1 mb-3">
            This page doesn't exist.
          </h1>
          <p className="text-ink-2 mb-8 max-w-sm">
            The page you're looking for may have moved or never existed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-bg text-bg text-sm font-medium hover:opacity-90 transition-opacity group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
