'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from '@/content/nav'
import AnnouncementBanner from './AnnouncementBanner'

function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="underfit home">
      <img
        src="/logomark.svg"
        alt=""
        className="h-8 w-8 flex-none"
      />
      <span className="text-[0.97rem] font-semibold tracking-[-0.02em] text-ink">
        underfit
      </span>
    </Link>
  )
}

function ChevronDown() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
      <path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
      {navItems.map((item) =>
        item.children ? (
          <div key={item.label} className="relative group">
            <button
              className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-[0.875rem] font-medium transition-all duration-150 ${
                item.children.some((c) => pathname.startsWith(c.href))
                  ? 'text-ink bg-white/[0.06]'
                  : 'text-muted hover:text-ink hover:bg-white/[0.05]'
              }`}
            >
              {item.label}
              <ChevronDown />
            </button>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div
                className="rounded-card-sm p-1.5"
                style={{ background: '#13161a', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}
              >
                {item.children.map((child, i) => {
                  const prevCategory = i > 0 ? item.children![i - 1].category : undefined
                  const showHeader = child.category && child.category !== prevCategory
                  return (
                    <div key={child.href}>
                      {showHeader && (
                        <p className={`text-[0.66rem] font-bold text-muted-2 uppercase tracking-[0.12em] px-3 pb-1 ${i === 0 ? 'pt-2' : 'pt-3.5 border-t border-white/[0.07] mt-1'}`}>
                          {child.category}
                        </p>
                      )}
                      <Link
                        href={child.href}
                        className={`flex flex-col gap-0.5 px-3 py-2.5 rounded-[10px] transition-colors duration-100 ${
                          pathname.startsWith(child.href)
                            ? 'bg-white/[0.07] text-ink'
                            : 'hover:bg-white/[0.05] text-muted hover:text-ink'
                        }`}
                      >
                        <span className="text-[0.875rem] font-medium text-ink">{child.label}</span>
                        <span className="text-[0.78rem] text-muted-2">{child.desc}</span>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ) : (
          <Link
            key={item.label}
            href={item.href!}
            className={`px-3.5 py-2.5 rounded-full text-[0.875rem] font-medium transition-all duration-150 ${
              pathname === item.href
                ? 'text-ink bg-white/[0.06]'
                : 'text-muted hover:text-ink hover:bg-white/[0.05]'
            }`}
          >
            {item.label}
          </Link>
        )
      )}

      <Link
        href="/contact"
        className="ml-2 px-4 py-2.5 rounded-full text-[0.875rem] font-semibold bg-accent text-accent-on transition-all duration-150 hover:bg-accent-strong shadow-accent-glow"
      >
        Contact us
      </Link>
    </nav>
  )
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col pt-[114px]"
      style={{ background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(20px)' }}
    >
      <nav className="flex flex-col gap-1 p-5 overflow-y-auto" aria-label="Mobile navigation">
        {navItems.map((item) =>
          item.children ? (
            <div key={item.label}>
              <p className="text-kicker text-muted-2 px-3 pt-5 pb-2">{item.label}</p>
              {item.children.map((child, i) => {
                const prevCategory = i > 0 ? item.children![i - 1].category : undefined
                const showHeader = child.category && child.category !== prevCategory
                return (
                  <div key={child.href}>
                    {showHeader && i > 0 && (
                      <p className="text-[0.68rem] font-bold text-muted-2 uppercase tracking-widest px-3 pt-4 pb-1">
                        {child.category}
                      </p>
                    )}
                    <Link
                      href={child.href}
                      onClick={onClose}
                      className={`flex flex-col gap-0.5 px-3 py-3 rounded-[14px] transition-colors ${
                        pathname.startsWith(child.href)
                          ? 'bg-white/[0.07] text-ink'
                          : 'text-muted hover:text-ink hover:bg-white/[0.04]'
                      }`}
                    >
                      <span className="text-[1rem] font-medium text-ink">{child.label}</span>
                      <span className="text-[0.84rem] text-muted-2">{child.desc}</span>
                    </Link>
                  </div>
                )
              })}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href!}
              onClick={onClose}
              className={`px-3 py-3.5 rounded-[14px] text-[1rem] font-medium transition-colors ${
                pathname === item.href
                  ? 'bg-white/[0.07] text-ink'
                  : 'text-muted hover:text-ink hover:bg-white/[0.04]'
              }`}
            >
              {item.label}
            </Link>
          )
        )}

        <div className="pt-4 mt-2 border-t border-white/[0.08]">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center px-4 py-3.5 rounded-[14px] font-semibold bg-accent text-accent-on text-[1rem] transition-colors hover:bg-accent-strong"
          >
            Contact us
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
          background: 'rgba(5,5,5,0.88)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <AnnouncementBanner />
        <div className="max-w-container mx-auto px-6 h-[82px] flex items-center justify-between gap-6">
          <BrandMark />
          <DesktopNav />

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-muted hover:text-ink transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-5 h-px bg-current transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
            />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
