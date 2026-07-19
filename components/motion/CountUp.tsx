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
 * Animated number that counts up the first time it scrolls into view.
 * Uses tabular figures so the layout doesn't shift while counting.
 * Respects prefers-reduced-motion (jumps straight to the final value).
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
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const start = () => {
      if (started.current) return
      started.current = true
      if (reduced) {
        setValue(to)
        return
      }
      const t0 = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1)
        setValue(to * easeOutCubic(p))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    if (typeof IntersectionObserver === 'undefined') {
      start()
      return
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
