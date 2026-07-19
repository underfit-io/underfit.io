'use client'

import { useEffect, useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** Stagger delay in ms, becomes --reveal-delay */
  delay?: number
  style?: React.CSSProperties
}

/**
 * Scroll-reveal wrapper. Children fade/slide in the first time they enter the
 * viewport. Motion is defined in globals.css (.reveal / .visible) and disabled
 * automatically under prefers-reduced-motion.
 */
export default function Reveal({ children, className = '', delay = 0, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('visible')
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ ...style, ...(delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : {}) }}
    >
      {children}
    </div>
  )
}
