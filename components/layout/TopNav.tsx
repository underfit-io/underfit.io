'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from '@/content/nav'
import AnnouncementBanner from './AnnouncementBanner'
import ThemeToggle from './ThemeToggle'

function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="underfit home">
      <img src="/logomark.svg" alt="" className="h-8 w-8 flex-none" />
      <span className="text-[1rem] font-display font-semibold tracking-[-0.02em] text-ink">
        underfit
      </span>
    </Link>
  )
}

function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href!}
          className={`relative px-3.5 py-2.5 text-[0.875rem] font-medium transition-colors duration-150 ${
            pathname.startsWith(item.href!)
              ? 'text-ink'
              : 'text-muted hover:text-ink'
          }`}
        >
          {item.label}
          {/* governed line, active indicator */}
          <span
            className={`absolute left-3.5 right-3.5 -bottom-px h-[2px] bg-accent transition-transform duration-200 origin-left ${
              pathname.startsWith(item.href!) ? 'scale-x-100' : 'scale-x-0'
            }`}
            aria-hidden="true"
          />
        </Link>
      ))}

      <Link
        href="/contact"
        className="ml-3 px-5 py-2.5 rounded-card-sm text-[0.875rem] font-semibold bg-cta-gradient text-accent-on transition-shadow duration-150 hover:shadow-accent-glow"
      >
        Contact
      </Link>
      <span className="ml-2">
        <ThemeToggle />
      </span>
    </nav>
  )
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col pt-[114px]"
      style={{ background: 'var(--c-nav-solid)', backdropFilter: 'blur(20px)' }}
    >
      <nav className="flex flex-col gap-1 p-5 overflow-y-auto" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href!}
            onClick={onClose}
            className={`px-3 py-3.5 rounded-card-sm text-[1rem] font-medium transition-colors ${
              pathname.startsWith(item.href!)
                ? 'bg-line/[0.07] text-ink'
                : 'text-muted hover:text-ink hover:bg-line/[0.04]'
            }`}
          >
            {item.label}
          </Link>
        ))}

        <div className="pt-4 mt-2 border-t border-line/[0.08]">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center px-4 py-3.5 rounded-card-sm font-semibold bg-cta-gradient text-accent-on text-[1rem]"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header
        className="sticky top-0 z-50"
        style={{
          background: 'var(--c-nav)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <AnnouncementBanner />
        <div className="max-w-container mx-auto px-6 h-[72px] flex items-center justify-between gap-6">
          <BrandMark />
          <DesktopNav />

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="flex flex-col gap-1.5 p-2 text-muted hover:text-ink transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-px bg-current transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-px bg-current transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-current transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
