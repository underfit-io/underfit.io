'use client'

import { useEffect, useRef, useState } from 'react'

interface RedactionDemoProps {
  className?: string
}

type Segment = { t: string; pii?: boolean }

/** Three sample outbound prompts. `pii: true` segments get flagged then masked. */
const SAMPLES: Segment[][] = [
  [
    { t: 'Summarize the complaint from ' },
    { t: 'anna.reyes@acme.com', pii: true },
    { t: ', callback ' },
    { t: '+1 (415) 555-0142', pii: true },
    { t: '.' },
  ],
  [
    { t: 'Verify coverage for ' },
    { t: 'Marcus Webb', pii: true },
    { t: ', DOB ' },
    { t: '03/14/1987', pii: true },
    { t: ', SSN ' },
    { t: '536-22-8410', pii: true },
    { t: '.' },
  ],
  [
    { t: 'Send the shipping update to ' },
    { t: 'j.okafor@northwind.dev', pii: true },
    { t: ', order for ' },
    { t: '2314 Fell St, Apt 4', pii: true },
    { t: '.' },
  ],
]

/**
 * Cycle phases:
 * 0 enter (prompt hidden) · 1 prompt visible · 2 scan sweep · 3 PII flagged ·
 * 4 PII masked · 5 forwarded clean (hold) · 6 exit fade → next sample
 */
const PHASE_MS = [260, 700, 900, 850, 1000, 2000, 320]

const EASE = 'cubic-bezier(0.22,1,0.36,1)'

const mask = (s: string) => '▮'.repeat(Math.min(7, Math.max(3, Math.round(s.length / 3))))

/**
 * Animated guardrail demo: an outbound prompt is scanned, PII substrings are
 * flagged then masked, and the clean request is forwarded to the provider.
 * Pauses off-screen; renders the final redacted state statically under
 * prefers-reduced-motion.
 */
export default function RedactionDemo({ className = '' }: RedactionDemoProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [sample, setSample] = useState(0)
  const [phase, setPhase] = useState(0)
  const [inView, setInView] = useState(false)
  const [reduced, setReduced] = useState(false)

  // Static final state under prefers-reduced-motion.
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Only run the loop while the card is on screen.
  useEffect(() => {
    const el = rootRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.2,
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (reduced || !inView) return
    const id = window.setTimeout(() => {
      if (phase === 6) {
        setSample((s) => (s + 1) % SAMPLES.length)
        setPhase(0)
      } else {
        setPhase((p) => p + 1)
      }
    }, PHASE_MS[phase])
    return () => window.clearTimeout(id)
  }, [phase, sample, inView, reduced])

  const p = reduced ? 5 : phase
  const promptVisible = p >= 1 && p <= 5
  const flagged = p === 3
  const masked = p >= 4
  const chipVisible = p === 4 || p === 5
  const clean = p === 5

  return (
    <div
      ref={rootRef}
      role="figure"
      aria-label="Demo: an outbound prompt is scanned, PII is masked, and the clean request is forwarded to the provider."
      className={`bg-surface border border-line/[0.07] rounded-card-md overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-line/[0.06]">
        <span className="text-eyebrow font-mono text-muted-2">guardrail · pii-default</span>
        <span
          className="font-mono text-[0.6rem] tracking-wider px-1.5 py-0.5 rounded-[4px] bg-warning/10 text-warning border border-warning/25 transition-opacity duration-300"
          style={{ opacity: chipVisible ? 1 : 0 }}
        >
          PII · MASKED
        </span>
      </div>

      {/* Body, cycling content is decorative for screen readers */}
      <div className="px-4 py-4" aria-hidden="true">
        <div className="font-mono text-[0.62rem] tracking-wide text-muted-2 mb-2">
          outbound · POST /v1/chat/completions
        </div>

        {/* Prompt zone */}
        <div className="relative overflow-hidden rounded-card-sm bg-line/[0.02] border border-line/[0.05] px-3.5 py-3 min-h-[74px]">
          <p
            className="font-mono text-[0.78rem] leading-[1.7] text-ink transition-opacity duration-300"
            style={{ opacity: promptVisible ? 1 : 0 }}
          >
            {SAMPLES[sample].map((seg, i) =>
              seg.pii ? (
                <span
                  key={i}
                  className={`rounded-[3px] px-[3px] transition-colors duration-300 ${
                    masked
                      ? 'bg-line/[0.05] text-muted-2'
                      : flagged
                        ? 'bg-warning/15 text-warning'
                        : ''
                  }`}
                >
                  {masked ? mask(seg.t) : seg.t}
                </span>
              ) : (
                <span key={i}>{seg.t}</span>
              )
            )}
          </p>

          {/* Scanning bar */}
          <span
            className="absolute top-0 bottom-0 w-[2px] bg-accent pointer-events-none"
            style={{
              left: p === 2 ? 'calc(100% + 2px)' : '-2px',
              opacity: p === 2 ? 1 : 0,
              boxShadow: '0 0 12px rgba(99,91,255,0.8)',
              transition:
                p === 2
                  ? `left ${PHASE_MS[2] - 40}ms ${EASE}, opacity 150ms ease`
                  : 'opacity 150ms ease',
            }}
          />
        </div>

        {/* Status row */}
        <div className="mt-3 flex items-center justify-between gap-3">
          <div
            className="font-mono text-[0.72rem] text-muted-2 transition-opacity duration-500"
            style={{ opacity: clean ? 1 : 0 }}
          >
            → forwarded to provider · <span className="text-success/80">clean</span>
          </div>
          <div className="font-mono text-[0.65rem] text-muted-2 tabular">
            {String(sample + 1).padStart(2, '0')} / {String(SAMPLES.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  )
}
