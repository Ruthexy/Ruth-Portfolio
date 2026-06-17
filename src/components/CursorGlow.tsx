import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    let rafId: number
    let ringX = 0
    let ringY = 0
    let dotX = 0
    let dotY = 0
    let mouseX = 0
    let mouseY = 0
    let isHovering = false

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dotX = mouseX
      dotY = mouseY

      const target = e.target as HTMLElement
      isHovering = !!(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea')
      )
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      const dot = dotRef.current
      const ring = ringRef.current

      if (dot) {
        dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`
        dot.style.opacity = '1'
      }

      if (ring) {
        ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${isHovering ? 1.5 : 1})`
        ring.style.opacity = isHovering ? '0.6' : '0.35'
      }

      rafId = requestAnimationFrame(animate)
    }

    const onMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0'
      if (ringRef.current) ringRef.current.style.opacity = '0'
    }

    const onMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1'
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-accent opacity-0"
        style={{ transition: 'opacity 0.2s', willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border border-accent/50 opacity-0"
        style={{ transition: 'opacity 0.3s, transform 0.08s', willChange: 'transform' }}
      />
    </>
  )
}
