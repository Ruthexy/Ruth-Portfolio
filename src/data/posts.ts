export interface Post {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readingTime: string
  featured: boolean
  tags: string[]
}

export const posts: Post[] = [
  {
    slug: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications in 2025',
    description: 'How I structure large-scale React projects — from folder architecture to state management patterns that actually scale without becoming a maintenance burden.',
    date: '2025-05-12',
    category: 'React',
    readingTime: '8 min',
    featured: true,
    tags: ['React', 'Architecture', 'TypeScript'],
  },
  {
    slug: 'typescript-patterns-i-use-daily',
    title: 'TypeScript Patterns I Use Every Day',
    description: 'A practical guide to TypeScript patterns that eliminate runtime errors, improve autocomplete, and make refactoring effortless — patterns I actually reach for daily.',
    date: '2025-04-03',
    category: 'TypeScript',
    readingTime: '6 min',
    featured: false,
    tags: ['TypeScript', 'Developer Experience'],
  },
  {
    slug: 'framer-motion-animation-principles',
    title: 'Animation Principles for UI Engineers',
    description: 'Most UI animations are decorative at best and annoying at worst. This post covers the physics and timing principles that make motion feel purposeful and premium.',
    date: '2025-03-18',
    category: 'Design',
    readingTime: '7 min',
    featured: false,
    tags: ['Framer Motion', 'Animation', 'UX'],
  },
  {
    slug: 'react-performance-without-obsessing',
    title: 'React Performance Without Obsessing Over It',
    description: 'A measured approach to performance optimization — when to optimize, what to measure, and which tools make the biggest difference with the least complexity.',
    date: '2025-02-27',
    category: 'React',
    readingTime: '9 min',
    featured: false,
    tags: ['React', 'Performance', 'Web Vitals'],
  },
  {
    slug: 'designing-for-engineers',
    title: 'What Engineers Should Know About Design',
    description: 'Design literacy makes you a better engineer. I share the design principles that changed how I think about component APIs, spacing systems, and interaction design.',
    date: '2025-01-14',
    category: 'Design',
    readingTime: '5 min',
    featured: false,
    tags: ['Design', 'Frontend', 'Product Thinking'],
  },
]

export const categories = [...new Set(posts.map(p => p.category))]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}

export const featuredPost = posts.find(p => p.featured)
