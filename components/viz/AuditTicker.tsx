'use client'

import { useEffect, useRef, useState } from 'react'

/** Lines visible in the viewport at once. */
const VISIBLE = 8
/** Interval between appended lines, ms. */
const TICK_MS = 1700
/** Row height, keep in sync with h-[1.4rem] and the keyframes below. */
const ROW_H = '1.4rem'

type Verdict = 'ALLOW' | 'DENY' | 'REDACT' | 'BUDGET'

interface Seg {
  text: string
  /** Render in text-ink (key strings) instead of text-muted. */
  ink?: boolean
}

interface AuditLine {
  t: string
  verdict: Verdict
  segs: Seg[]
}

const VERDICT_TONE: Record<Verdict, string> = {
  ALLOW: 'text-success',
  DENY: 'text-danger',
  REDACT: 'text-warning',
  BUDGET: 'text-warning',
}

/** Fixed cycle of realistic Gateway audit events. */
const LINES: AuditLine[] = [
  {
    t: '12:04:11Z',
    verdict: 'ALLOW',
    segs: [
      { text: 'key=' },
      { text: 'sk-gw-3d69…1156', ink: true },
      { text: '  openai/gpt-4o-mini  412 tok  policy=prod-allow' },
    ],
  },
  {
    t: '12:04:13Z',
    verdict: 'DENY',
    segs: [
      { text: 'key=' },
      { text: 'sk-gw-16f4…7047', ink: true },
      { text: '  anthropic/claude-opus  model_not_in_scope' },
    ],
  },
  {
    t: '12:04:15Z',
    verdict: 'REDACT',
    segs: [{ text: 'guardrail=pii-default  entity=email  action=masked' }],
  },
  {
    t: '12:04:18Z',
    verdict: 'ALLOW',
    segs: [
      { text: 'key=' },
      { text: 'sk-gw-bc9c…d3c2', ink: true },
      { text: '  groq/llama-3.3-70b  1.2k tok  policy=research' },
    ],
  },
  {
    t: '12:04:21Z',
    verdict: 'BUDGET',
    segs: [
      { text: 'key=' },
      { text: 'sk-gw-c5a9…16b', ink: true },
      { text: '  hard-limit 100%, request blocked' },
    ],
  },
  {
    t: '12:04:24Z',
    verdict: 'ALLOW',
    segs: [
      { text: 'key=' },
      { text: 'sk-gw-8a21…09e4', ink: true },
      { text: '  gemini/gemini-2.0-flash  288 tok  policy=prod-allow' },
    ],
  },
  {
    t: '12:04:26Z',
    verdict: 'DENY',
    segs: [
      { text: 'key=' },
      { text: 'sk-gw-77b0…31ad', ink: true },
      { text: '  rate_limit 60k tpm exceeded' },
    ],
  },
  {
    t: '12:04:29Z',
    verdict: 'ALLOW',
    segs: [
      { text: 'key=' },
      { text: 'sk-gw-4fe2…8c1d', ink: true },
      { text: '  mcp/jira.search_issues  tool_scope=granted' },
    ],
  },
  {
    t: '12:04:31Z',
    verdict: 'REDACT',
    segs: [{ text: 'guardrail=pii-default  entity=phone_number  action=masked' }],
  },
  {
    t: '12:04:34Z',
    verdict: 'ALLOW',
    segs: [
      { text: 'key=' },
      { text: 'sk-gw-d410…52aa', ink: true },
      { text: '  together/qwen-2.5-72b  964 tok  policy=research' },
    ],
  },
  {
    t: '12:04:37Z',
    verdict: 'DENY',
    segs: [
      { text: 'key=' },
      { text: 'sk-gw-16f4…7047', ink: true },
      { text: '  mcp/github.create_pr  principal_not_authorized' },
    ],
  },
  {
    t: '12:04:40Z',
    verdict: 'ALLOW',
    segs: [
      { text: 'key=' },
      { text: 'sk-gw-0b7d…e9c3', ink: true },
      { text: '  bedrock/claude-sonnet  1.8k tok  policy=prod-allow' },
    ],
  },
]

interface Row {
  line: AuditLine
  id: number
  fresh: boolean
}

interface AuditTickerProps {
  className?: string
}

/**
 * Live-looking terminal panel of Gateway audit-log lines. Appends a line every
 * ~1.7s from a fixed cycle; the oldest scrolls off smoothly (the new row grows
 * from 0 height in a bottom-anchored, clipped viewport). The interval pauses
 * while the panel is off-screen and never starts under prefers-reduced-motion,
 * which instead shows a static list.
 */
export default function AuditTicker({ className = '' }: AuditTickerProps) {
  const [rows, setRows] = useState<Row[]>(() =>
    LINES.slice(0, VISIBLE).map((line, i) => ({ line, id: i, fresh: false }))
  )
  const rootRef = useRef<HTMLDivElement>(null)
  const nextLine = useRef(VISIBLE)
  const nextId = useRef(VISIBLE)

  useEffect(() => {
    // Static list under reduced motion: no interval, no entry animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let timer: ReturnType<typeof setInterval> | null = null

    const tick = () => {
      setRows((prev) => {
        const line = LINES[nextLine.current % LINES.length]
        nextLine.current += 1
        // Keep one extra row: it is fully clipped above the viewport before
        // being pruned, so removal is invisible.
        return [...prev, { line, id: nextId.current++, fresh: true }].slice(-(VISIBLE + 1))
      })
    }
    const start = () => {
      if (timer === null) timer = setInterval(tick, TICK_MS)
    }
    const stop = () => {
      if (timer !== null) {
        clearInterval(timer)
        timer = null
      }
    }

    const el = rootRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      start()
      return stop
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start()
        else stop()
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => {
      stop()
      obs.disconnect()
    }
  }, [])

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label="Simulated Gateway audit log streaming allow, deny, redact and budget events"
      className={`overflow-hidden rounded-card-md border border-white/[0.07] bg-[#0d0d14] ${className}`}
    >
      <style>{`
        @keyframes audit-line-in {
          from { height: 0; opacity: 0; }
          to { height: ${ROW_H}; opacity: 1; }
        }
        .audit-line-in { animation: audit-line-in 450ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        @media (prefers-reduced-motion: reduce) {
          .audit-line-in { animation: none; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.03] px-4 py-2"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60 motion-safe:animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
        </span>
        <span className="font-mono text-[0.7rem] text-[#9090b0]">audit.log · live</span>
      </div>

      <div aria-hidden="true" className="px-4 py-3 font-mono text-[0.72rem]">
        <div className="flex h-[11.2rem] flex-col justify-end overflow-hidden">
          {rows.map((row) => (
            <div
              key={row.id}
              className={`h-[1.4rem] overflow-hidden whitespace-pre leading-[1.4rem] ${
                row.fresh ? 'audit-line-in' : ''
              }`}
            >
              <span className="text-[#9090b0]">{row.line.t + ' '}</span>
              <span className={VERDICT_TONE[row.line.verdict]}>
                {row.line.verdict.padEnd(6, ' ') + ' '}
              </span>
              {row.line.segs.map((seg, i) => (
                <span key={i} className={seg.ink ? 'text-[#f0f0f8]' : 'text-[#9090b0]'}>
                  {seg.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
