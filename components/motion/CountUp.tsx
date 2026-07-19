'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  /** Final value, e.g. 4.44 or 1265 */
  to: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

/**
 * Animated number. The REAL value is server-rendered (initial state = `to`),
 * so crawlers, AI engines, and no-JS visitors always read the actual figure;
 * the count-up from zero only plays client-side once the number scrolls into
 * view. Tabular figures keep the layout stable while counting.
 */
export default function CountUp({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1400,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(to)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || typeof IntersectionObserver === 'undefined') {
      // keep the server-rendered final value
      return
    }

    const start = () => {
      if (started.current) return
      started.current = true
      const t0 = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1)
        setValue(to * easeOutCubic(p))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start()
          obs.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [to, duration])

  const formatted = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={`tabular ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
