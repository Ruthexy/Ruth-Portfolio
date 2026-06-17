import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'accent' | 'neutral' | 'available'
  className?: string
}

export default function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  const styles = {
    accent: 'accent-tag',
    neutral: 'tech-tag',
    available:
      'inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent/8 text-accent text-xs font-medium font-mono tracking-wide',
  }

  if (variant === 'available') {
    return (
      <span className={`${styles.available} ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
        {children}
      </span>
    )
  }

  return (
    <span className={`${styles[variant]} ${className}`}>
      {children}
    </span>
  )
}
