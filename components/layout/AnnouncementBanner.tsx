'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const announcements = [
  { text: 'Gateway is now in alpha', cta: 'Become an early tester', href: '/products/gateway' },
  { text: 'Data Fabric approaching alpha — shape what we build', cta: 'Join the waitlist', href: '/contact' },
  { text: 'AI-assisted cyberattacks up 72% since 2024', cta: 'See how we help', href: '/products/gateway' },
]

export default function AnnouncementBanner() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % announcements.length)
        setVisible(true)
      }, 280)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const a = announcements[current]

  return (
    <div
      className="w-full py-2 px-4 text-center"
      style={{
        background: 'linear-gradient(90deg, rgba(99,91,255,0.10) 0%, rgba(162,89,255,0.07) 100%)',
        borderBottom: '1px solid rgba(99,91,255,0.18)',
      }}
    >
      <div
        className="flex items-center justify-center gap-2.5 text-[0.76rem] font-medium transition-opacity duration-280"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full flex-none"
          style={{ background: '#635BFF', boxShadow: '0 0 6px rgba(99,91,255,0.8)' }}
        />
        <span className="text-muted">{a.text}</span>
        <span className="text-muted-2 select-none">·</span>
        <Link
          href={a.href}
          className="text-accent font-semibold hover:underline transition-colors"
        >
          {a.cta} →
        </Link>
      </div>
    </div>
  )
}
