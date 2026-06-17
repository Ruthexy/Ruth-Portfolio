import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  const { pathname } = useLocation()

  const isWritingPost = pathname.startsWith('/writing/') && pathname !== '/writing'

  useEffect(() => {
    if (!isWritingPost) return

    const onScroll = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      if (scrollHeight <= 0) return
      setProgress(Math.min(100, (scrollTop / scrollHeight) * 100))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isWritingPost])

  if (!isWritingPost) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-px bg-line">
      <div
        className="h-full gradient-bg transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
