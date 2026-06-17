import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Clock, ArrowUpRight } from 'lucide-react'
import { posts, categories } from '../data/posts'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function Writing() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    document.title = 'Writing — Ruth Okwuokenye'
  }, [])

  const allCategories = ['All', ...categories]
  const featuredPost = posts.find(p => p.featured)

  const filtered = (activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory))
    .filter(
      p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()),
    )

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
            <span className="label text-ink-3 mb-4 block">Writing</span>
            <h1
              className="font-display font-extrabold text-ink-1 leading-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
            >
              Notes on building.
            </h1>
            <p className="text-ink-2 text-lg max-w-lg">
              Thoughts on React, TypeScript, design systems, and the craft of frontend engineering.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured */}
      {featuredPost && (
        <section className="border-b border-line">
          <div className="container py-10">
            <ScrollReveal>
              <span className="label text-ink-3 mb-5 block">Featured</span>
              <Link
                to={`/writing/${featuredPost.slug}`}
                className="group block surface-card p-6 md:p-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="accent-tag">{featuredPost.category}</span>
                  <span className="tech-tag">Featured</span>
                </div>
                <h2 className="font-display font-bold text-ink-1 text-2xl md:text-3xl mb-3 leading-tight group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-ink-2 leading-relaxed mb-5 max-w-2xl">
                  {featuredPost.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-ink-3 font-mono">
                    <span>
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {featuredPost.readingTime}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-ink-3 group-hover:text-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Search + Filter */}
      <div className="sticky top-16 z-20 bg-bg/90 backdrop-blur-md border-b border-line">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 py-3">
            {/* Search */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-line bg-bg-2 flex-1 max-w-xs">
              <Search size={14} className="text-ink-3 flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="bg-transparent text-sm text-ink-1 placeholder-ink-3 outline-none flex-1"
              />
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                    activeCategory === cat ? 'text-ink-1' : 'text-ink-3 hover:text-ink-2'
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="writing-filter"
                      className="absolute inset-0 rounded-md bg-white/6 border border-line"
                      transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                    />
                  )}
                  <span className="relative">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Articles list */}
      <section className="section-pad">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + query}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.length === 0 ? (
                <div className="text-center py-20 text-ink-3">
                  <p className="text-lg mb-2">No articles found</p>
                  <p className="text-sm">Try a different search or category</p>
                </div>
              ) : (
                <div className="divide-y divide-line">
                  {filtered.map((post, i) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                    >
                      <Link
                        to={`/writing/${post.slug}`}
                        className="group flex items-start justify-between gap-6 py-6"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="accent-tag">{post.category}</span>
                            <span className="flex items-center gap-1 text-xs text-ink-3 font-mono">
                              <Clock size={11} />
                              {post.readingTime}
                            </span>
                          </div>
                          <h2 className="font-display font-semibold text-ink-1 text-lg mb-1 group-hover:text-accent transition-colors leading-snug">
                            {post.title}
                          </h2>
                          <p className="text-sm text-ink-3 line-clamp-2 leading-relaxed">
                            {post.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <ArrowUpRight
                            size={18}
                            className="text-ink-3 group-hover:text-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                          <span className="text-xs text-ink-3 font-mono whitespace-nowrap">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  )
}
