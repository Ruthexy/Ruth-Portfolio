import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
  external?: boolean
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const base =
  'inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 focus-ring select-none'

const variants = {
  primary:
    'gradient-bg text-bg-2 hover:opacity-90 active:scale-[0.98]',
  ghost:
    'text-ink-2 hover:text-ink-1 hover:bg-white/5 active:scale-[0.98]',
  outline:
    'border border-line text-ink-1 hover:border-line-hover hover:bg-white/[0.03] active:scale-[0.98]',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  children,
  variant = 'outline',
  size = 'md',
  href,
  to,
  external,
  onClick,
  className = '',
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-40 pointer-events-none' : ''}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
