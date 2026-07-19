'use client'

import { useEffect, useRef, useState } from 'react'

interface TokenChartProps {
  className?: string
}

interface Datum {
  provider: string
  value: number
  label: string
}

const DATA: Datum[] = [
  { provider: 'openai', value: 48200, label: '48.2k' },
  { provider: 'anthropic', value: 31700, label: '31.7k' },
  { provider: 'gemini', value: 12400, label: '12.4k' },
  { provider: 'groq', value: 8100, label: '8.1k' },
  { provider: 'bedrock', value: 5300, label: '5.3k' },
  { provider: 'ollama', value: 2200, label: '2.2k' },
]

// Chart geometry (SVG user units, the whole chart scales together)
const W = 640
const H = 300
const M = { top: 34, right: 8, bottom: 28, left: 42 }
const PLOT_W = W - M.left - M.right
const PLOT_H = H - M.top - M.bottom
const BASELINE = H - M.bottom
const Y_MAX = 50000
const TICKS = [0, 10000, 20000, 30000, 40000, 50000]
const COL_W = PLOT_W / DATA.length
const BAR_W = 30
const R = 4 // rounded top radius

// Design tokens (see DESIGN-CONTRACT)
const ACCENT = '#635BFF'
const ACCENT_STRONG = '#7A73FF'
const MUTED = '#9090b0'
const MUTED_2 = 'var(--c-muted-2)'

const barTop = (value: number) => BASELINE - (value / Y_MAX) * PLOT_H
const colX = (i: number) => M.left + COL_W * i
const barX = (i: number) => colX(i) + (COL_W - BAR_W) / 2

/** Bar path: 4px rounded top data-end, square corners anchored to the baseline. */
function barPath(i: number, value: number) {
  const x = barX(i)
  const y = barTop(value)
  return [
    `M ${x} ${BASELINE}`,
    `V ${y + R}`,
    `A ${R} ${R} 0 0 1 ${x + R} ${y}`,
    `H ${x + BAR_W - R}`,
    `A ${R} ${R} 0 0 1 ${x + BAR_W} ${y + R}`,
    `V ${BASELINE}`,
    'Z',
  ].join(' ')
}

const exact = (v: number) => v.toLocaleString('en-US')

/**
 * Token usage by provider, single-series SVG bar chart (demo data).
 * Bars grow from the baseline on first viewport entry; hover any column for
 * the exact value. Screen readers get the data as a table instead.
 */
export default function TokenChart({ className = '' }: TokenChartProps) {
  const rootRef = useRef<HTMLElement>(null)
  const [hover, setHover] = useState<number | null>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('tc-in')
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('tc-in')
          obs.unobserve(el)
        }
      },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const hovered = hover === null ? null : DATA[hover]

  return (
    <figure ref={rootRef} className={className}>
      <style>{`
        .tc-bar {
          transform-box: fill-box;
          transform-origin: bottom;
          transform: scaleY(0);
          transition:
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1) var(--tc-delay, 0ms),
            fill 150ms ease 0ms;
        }
        .tc-val {
          opacity: 0;
          transition: opacity 400ms ease calc(var(--tc-delay, 0ms) + 250ms);
        }
        .tc-in .tc-bar { transform: scaleY(1); }
        .tc-in .tc-val { opacity: 1; }
        @media (prefers-reduced-motion: reduce) {
          .tc-bar { transform: none; transition: fill 150ms ease; }
          .tc-val { opacity: 1; transition: none; }
        }
      `}</style>

      <figcaption className="flex items-baseline justify-between gap-4">
        <span className="text-[0.95rem] font-semibold text-ink">Tokens by provider</span>
        <span className="font-mono text-[0.68rem] text-muted-2">last 30 days</span>
      </figcaption>

      <div className="relative mt-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" aria-hidden="true">
          {/* Gridlines + tick labels */}
          {TICKS.map((t) => {
            const y = barTop(t)
            return (
              <g key={t}>
                <line
                  x1={M.left}
                  x2={W - M.right}
                  y1={y}
                  y2={y}
                  stroke={t === 0 ? 'var(--border-strong)' : 'var(--border)'}
                  strokeWidth={1}
                />
                <text
                  x={M.left - 8}
                  y={y + 3.5}
                  textAnchor="end"
                  fontSize={10}
                  fill={MUTED_2}
                  className="tabular font-mono"
                >
                  {t === 0 ? '0' : `${t / 1000}k`}
                </text>
              </g>
            )
          })}

          {/* Bars, one series, one hue */}
          {DATA.map((d, i) => (
            <path
              key={d.provider}
              className="tc-bar"
              d={barPath(i, d.value)}
              fill={hover === i ? ACCENT_STRONG : ACCENT}
              style={{ '--tc-delay': `${i * 60}ms` } as React.CSSProperties}
            />
          ))}

          {/* Direct value labels */}
          {DATA.map((d, i) => (
            <text
              key={d.provider}
              className="tc-val tabular font-mono"
              x={colX(i) + COL_W / 2}
              y={barTop(d.value) - 8}
              textAnchor="middle"
              fontSize={11}
              fill={MUTED}
              style={{ '--tc-delay': `${i * 60}ms` } as React.CSSProperties}
            >
              {d.label}
            </text>
          ))}

          {/* Provider x-labels */}
          {DATA.map((d, i) => (
            <text
              key={d.provider}
              x={colX(i) + COL_W / 2}
              y={BASELINE + 17}
              textAnchor="middle"
              fontSize={11}
              fill={MUTED}
              className="font-mono"
            >
              {d.provider}
            </text>
          ))}

          {/* Hover hit targets, full column width, full plot height */}
          {DATA.map((d, i) => (
            <rect
              key={d.provider}
              x={colX(i)}
              y={M.top - 14}
              width={COL_W}
              height={BASELINE - M.top + 14}
              fill="transparent"
              onPointerEnter={() => setHover(i)}
              onPointerLeave={() => setHover(null)}
            />
          ))}
        </svg>

        {/* Tooltip */}
        {hovered !== null && hover !== null && (
          <div
            className="pointer-events-none absolute z-10 whitespace-nowrap rounded-card-sm border border-line/[0.12] bg-surface-2 px-2.5 py-1.5 font-mono text-[0.68rem] shadow-card"
            style={{
              left: `${((colX(hover) + COL_W / 2) / W) * 100}%`,
              top: `${(barTop(hovered.value) / H) * 100}%`,
              transform: 'translate(-50%, calc(-100% - 10px))',
            }}
          >
            <span className="text-ink">{hovered.provider}</span>
            <span className="tabular text-muted"> · {exact(hovered.value)} tokens</span>
          </div>
        )}
      </div>

      {/* Data for screen readers */}
      <table className="sr-only">
        <caption>Token usage by provider, last 30 days</caption>
        <thead>
          <tr>
            <th scope="col">Provider</th>
            <th scope="col">Tokens</th>
          </tr>
        </thead>
        <tbody>
          {DATA.map((d) => (
            <tr key={d.provider}>
              <th scope="row">{d.provider}</th>
              <td>{exact(d.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}
