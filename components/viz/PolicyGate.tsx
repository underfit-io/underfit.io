'use client'

import { useEffect, useRef, useState } from 'react'

interface PolicyGateProps {
  className?: string
}

interface PolicyRequest {
  subject: string
  resource: string
  verdict: 'ALLOW' | 'DENY'
  reason?: string
}

const REQUESTS: PolicyRequest[] = [
  { subject: 'prod-agent', resource: 'openai/gpt-4o-mini', verdict: 'ALLOW' },
  { subject: 'support-copilot', resource: 'anthropic/claude-sonnet', verdict: 'ALLOW' },
  { subject: 'research-sandbox', resource: 'bedrock/titan', verdict: 'DENY', reason: 'model_not_in_scope' },
  { subject: 'unknown-svc', resource: 'openai/gpt-4o', verdict: 'DENY', reason: 'no_matching_policy' },
]

/**
 * Step machine over one loop:
 *   step 0           , all rows idle
 *   step 2i + 1      , row i evaluating (highlighted)
 *   step 2i + 2      , row i decided (verdict chip shown)
 *   step FINAL_STEP  , every verdict visible, hold, then reset to 0
 * Hold times below sum to ~7.4s per loop.
 */
const FINAL_STEP = REQUESTS.length * 2
const HOLD_MS = [400, 550, 850, 550, 850, 550, 850, 550, 2300]

type RowStatus = 'idle' | 'evaluating' | 'decided'

function rowStatus(step: number, index: number): RowStatus {
  if (step >= 2 * index + 2) return 'decided'
  if (step === 2 * index + 1) return 'evaluating'
  return 'idle'
}

const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]'

/**
 * Animated policy-decision panel. Requests are evaluated one at a time and
 * stamped ALLOW or DENY, deny overrides allow, default is deny. Pauses while
 * off-screen; renders the final (all-decided) state under reduced motion.
 */
export default function PolicyGate({ className = '' }: PolicyGateProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)
  const [active, setActive] = useState(false)
  const [reduced, setReduced] = useState(false)

  // Static final state when the user prefers reduced motion.
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  // Pause the loop while the panel is off-screen.
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setActive(true)
      return
    }
    const obs = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Advance the step machine.
  useEffect(() => {
    if (!active || reduced) return
    const t = window.setTimeout(() => setStep((s) => (s + 1) % (FINAL_STEP + 1)), HOLD_MS[step])
    return () => window.clearTimeout(t)
  }, [step, active, reduced])

  const shownStep = reduced ? FINAL_STEP : step

  return (
    <div
      ref={rootRef}
      className={`bg-surface border border-line/[0.07] rounded-card-md overflow-hidden ${className}`}
    >
      <style>{`
        @keyframes pg-chip-snap {
          0% { opacity: 0; transform: scale(1.35); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes pg-soft-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>

      <div className="px-5 py-4 border-b border-line/[0.07]">
        <p className="text-eyebrow font-mono text-muted-2">policy engine</p>
        <p className="mt-1 text-[0.78rem] text-muted">Deny overrides allow · default is deny</p>
      </div>

      <ul className="font-mono text-[0.75rem] divide-y divide-line/[0.05]">
        {REQUESTS.map((req, i) => {
          const status = rowStatus(shownStep, i)
          const decided = status === 'decided'
          const evaluating = status === 'evaluating'
          const denied = req.verdict === 'DENY'
          const deniedRow = decided && denied
          const allowedRow = decided && !denied

          return (
            <li
              key={req.subject}
              className={[
                'flex items-center gap-3 px-5 py-3 border-l-2 transition-all duration-300',
                EASE,
                allowedRow ? 'border-l-success/70 bg-success/[0.04]' : 'border-l-transparent',
                evaluating ? 'bg-line/[0.04]' : '',
                deniedRow ? 'opacity-60' : '',
              ].join(' ')}
            >
              <span className={`min-w-0 flex-1 truncate ${deniedRow ? 'line-through decoration-muted-2' : ''}`}>
                <span className={deniedRow ? 'text-muted-2' : evaluating ? 'text-bright' : 'text-ink'}>
                  {req.subject}
                </span>
                <span className="text-muted-2" aria-hidden="true">
                  {' '}&rarr;{' '}
                </span>
                <span className={deniedRow ? 'text-muted-2' : 'text-muted'}>{req.resource}</span>
              </span>

              <span className="flex items-center gap-2 shrink-0">
                {evaluating && (
                  <span
                    className="text-[0.68rem] text-muted-2"
                    style={reduced ? undefined : { animation: 'pg-soft-pulse 900ms ease-in-out infinite' }}
                  >
                    evaluating
                  </span>
                )}
                {deniedRow && req.reason && (
                  <span className="hidden sm:inline text-[0.68rem] text-muted-2">{req.reason}</span>
                )}
                {decided && (
                  <span
                    className={[
                      'inline-block px-1.5 py-0.5 rounded text-[0.62rem] font-semibold tracking-[0.08em] border',
                      denied
                        ? 'text-danger bg-danger/10 border-danger/25'
                        : 'text-success bg-success/10 border-success/25',
                    ].join(' ')}
                    style={reduced ? undefined : { animation: 'pg-chip-snap 240ms cubic-bezier(0.22,1,0.36,1) both' }}
                  >
                    {req.verdict}
                  </span>
                )}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
