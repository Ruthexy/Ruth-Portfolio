import { useEffect, lazy, Suspense } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { getPostBySlug, posts } from '../data/posts'

const postModules = import.meta.glob('../content/posts/*.mdx')

function getModule(slug: string) {
  const key = `../content/posts/${slug}.mdx`
  const loader = postModules[key]
  if (!loader) return null
  return lazy(loader as () => Promise<{ default: React.ComponentType }>)
}

export default function WritingPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = getPostBySlug(slug ?? '')

  const currentIndex = posts.findIndex(p => p.slug === slug)
  const nextPost = posts[(currentIndex + 1) % posts.length]

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Ruth Okwuokenye`
    }
  }, [post])

  if (!post) return <Navigate to="/writing" replace />

  const MDXContent = getModule(slug ?? '')

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
            to="/writing"
            className="inline-flex items-center gap-2 text-sm text-ink-3 hover:text-ink-1 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            All writing
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="pt-12 pb-10 border-b border-line">
        <div className="container max-w-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="accent-tag">{post.category}</span>
              {post.tags.slice(1).map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
            <h1 className="font-display font-extrabold text-ink-1 text-3xl md:text-4xl lg:text-5xl leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-ink-2 text-lg leading-relaxed mb-6">{post.description}</p>
            <div className="flex items-center gap-5 text-xs text-ink-3 font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {post.readingTime} read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad">
        <div className="container max-w-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose-dark"
          >
            {MDXContent ? (
              <Suspense
                fallback={
                  <div className="space-y-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-4 rounded bg-bg-3 animate-pulse" />
                    ))}
                  </div>
                }
              >
                <MDXContent />
              </Suspense>
            ) : (
              <div className="text-ink-3 text-sm">Content loading...</div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Next article */}
      {nextPost && nextPost.slug !== slug && (
        <section className="border-t border-line">
          <div className="container max-w-[720px] py-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <span className="label text-ink-3 mb-1.5 block">Next article</span>
                <h3 className="font-display font-semibold text-ink-1 text-lg">
                  {nextPost.title}
                </h3>
              </div>
              <Link
                to={`/writing/${nextPost.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-line text-ink-1 text-sm font-medium hover:border-line-hover hover:bg-white/[0.03] transition-all whitespace-nowrap group"
              >
                Read article
                <ArrowLeft
                  size={14}
                  className="rotate-180 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>
      )}
    </motion.div>
  )
}
