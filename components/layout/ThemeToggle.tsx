'use client'

import { useEffect, useState } from 'react'

/**
 * Dark/light theme switch. The current theme lives on <html data-theme>;
 * an inline script in the root layout applies the saved choice before paint,
 * so this component only needs to read and flip it.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme')
    if (current === 'light') setTheme('light')
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* private mode */
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
      className="w-9 h-9 rounded-card-sm border border-line/[0.12] flex items-center justify-center text-muted hover:text-ink hover:bg-line/[0.05] transition-colors"
    >
      {theme === 'dark' ? (
        /* sun */
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="w-4 h-4" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
        </svg>
      ) : (
        /* moon */
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
        </svg>
      )}
    </button>
  )
}
