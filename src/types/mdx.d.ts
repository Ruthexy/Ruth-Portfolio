declare module '*.mdx' {
  import type { FC } from 'react'
  const Component: FC
  export const frontmatter: {
    title: string
    date: string
    category: string
    description: string
    readingTime: string
    featured?: boolean
    slug?: string
  }
  export default Component
}
