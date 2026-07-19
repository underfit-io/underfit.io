interface FlowDiagramProps {
  variant: 'gateway'
  className?: string
}

interface VariantConfig {
  leftHeading: string
  rightHeading: string
  left: string[]
  right: string[]
  leftX: number
  leftW: number
  rightX: number
  rightW: number
  /** vertical span [from, to] for node centers in each column */
  leftRange: [number, number]
  rightRange: [number, number]
  center: { title: string; sublines: string[]; w: number; h: number }
  footnote?: string
  description: string
}

const VB_W = 720
const VB_H = 400
const CX = 360
const CY = 200
const NODE_H = 32

const CONFIGS: Record<FlowDiagramProps['variant'], VariantConfig> = {
  gateway: {
    leftHeading: 'CLIENTS',
    rightHeading: 'PROVIDERS',
    left: ['SDK', 'Dashboard', 'CLI', 'Agent'],
    right: ['OpenAI', 'Anthropic', 'Gemini', 'Groq', 'Bedrock', 'Ollama'],
    leftX: 40,
    leftW: 96,
    rightX: 584,
    rightW: 96,
    leftRange: [90, 310],
    rightRange: [70, 330],
    center: {
      title: 'Gateway',
      sublines: ['identity · policy', 'guardrails · audit'],
      w: 190,
      h: 76,
    },
    footnote: 'POST /v1/chat/completions',
    description:
      'Request flow diagram. Client applications, SDK, dashboard, CLI, and agents, send requests to the Underfit Gateway, which applies identity, policy, guardrails, and audit controls before routing traffic to AI providers: OpenAI, Anthropic, Gemini, Groq, Bedrock, and Ollama.',
  },
}

/** Evenly spaced positions from `from` to `to`, inclusive. */
function spread(count: number, from: number, to: number): number[] {
  if (count === 1) return [(from + to) / 2]
  const step = (to - from) / (count - 1)
  return Array.from({ length: count }, (_, i) => Math.round((from + i * step) * 10) / 10)
}

/** Horizontal-tangent cubic between two points. */
function curve(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.round((x2 - x1) * 0.45 * 10) / 10
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`
}

/** Deterministic per-packet duration (3.0 to 3.9s) and negative delay so traffic is mid-flight on load. */
function packetTiming(i: number): { duration: string; delay: string } {
  return {
    duration: (3 + ((i * 37) % 90) / 100).toFixed(2),
    delay: (-((i * 53) % 370) / 100).toFixed(2),
  }
}

const KEYFRAMES = `
@keyframes fd-flow {
  0% { offset-distance: 0%; opacity: 0; }
  8% { opacity: 1; }
  90% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}
`

/**
 * Animated request-flow diagram. Packets travel along the connection paths via
 * CSS offset-path keyframes (no SMIL), so the global prefers-reduced-motion
 * kill-switch in globals.css stops them.
 */
export default function FlowDiagram({ variant, className = '' }: FlowDiagramProps) {
  const cfg = CONFIGS[variant]
  const glowId = `fd-glow-${variant}`

  const leftYs = spread(cfg.left.length, cfg.leftRange[0], cfg.leftRange[1])
  const rightYs = spread(cfg.right.length, cfg.rightRange[0], cfg.rightRange[1])

  const cLeft = CX - cfg.center.w / 2
  const cRight = CX + cfg.center.w / 2
  const cTop = CY - cfg.center.h / 2
  const fan = cfg.center.h / 2 - 16
  const entryYs = spread(cfg.left.length, CY - fan, CY + fan)
  const exitYs = spread(cfg.right.length, CY - fan, CY + fan)

  const paths = [
    ...leftYs.map((y, i) => curve(cfg.leftX + cfg.leftW, y, cLeft, entryYs[i])),
    ...exitYs.map((y, i) => curve(cRight, y, cfg.rightX, rightYs[i])),
  ]

  const twoSublines = cfg.center.sublines.length > 1
  const titleY = twoSublines ? CY - 13 : CY - 6
  const sublineYs = twoSublines ? [CY + 7, CY + 20] : [CY + 14]

  return (
    <div
      className={`relative overflow-hidden rounded-card border border-line/[0.07] bg-surface ${className}`}
    >
      <div className="sr-only">{cfg.description}</div>
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="block w-full h-auto"
        aria-hidden="true"
        focusable="false"
      >
        <style>{KEYFRAMES}</style>
        <defs>
          <radialGradient id={glowId}>
            <stop offset="0%" stopColor="rgba(99,91,255,0.16)" />
            <stop offset="100%" stopColor="rgba(99,91,255,0)" />
          </radialGradient>
        </defs>

        {/* column headings */}
        <text
          x={cfg.leftX + cfg.leftW / 2}
          y={40}
          textAnchor="middle"
          className="font-mono"
          fontSize={9}
          letterSpacing="0.14em"
          fill="var(--c-muted-2)"
        >
          {cfg.leftHeading}
        </text>
        <text
          x={cfg.rightX + cfg.rightW / 2}
          y={40}
          textAnchor="middle"
          className="font-mono"
          fontSize={9}
          letterSpacing="0.14em"
          fill="var(--c-muted-2)"
        >
          {cfg.rightHeading}
        </text>

        {/* connection paths */}
        {paths.map((d) => (
          <path key={d} d={d} fill="none" stroke="var(--border-strong)" strokeWidth={1} />
        ))}

        {/* left column nodes */}
        {cfg.left.map((label, i) => (
          <g key={label}>
            <rect
              x={cfg.leftX}
              y={leftYs[i] - NODE_H / 2}
              width={cfg.leftW}
              height={NODE_H}
              rx={8}
              fill="var(--c-surface-2)"
              stroke="var(--border-strong)"
            />
            <text
              x={cfg.leftX + cfg.leftW / 2}
              y={leftYs[i] + 3.5}
              textAnchor="middle"
              className="font-mono"
              fontSize={10.5}
              fill="var(--c-ink)"
            >
              {label}
            </text>
          </g>
        ))}

        {/* right column nodes */}
        {cfg.right.map((label, i) => (
          <g key={label}>
            <rect
              x={cfg.rightX}
              y={rightYs[i] - NODE_H / 2}
              width={cfg.rightW}
              height={NODE_H}
              rx={8}
              fill="var(--c-surface-2)"
              stroke="var(--border-strong)"
            />
            <text
              x={cfg.rightX + cfg.rightW / 2}
              y={rightYs[i] + 3.5}
              textAnchor="middle"
              className="font-mono"
              fontSize={10.5}
              fill="var(--c-ink)"
            >
              {label}
            </text>
          </g>
        ))}

        {/* center node, the one accented element */}
        <ellipse cx={CX} cy={CY} rx={150} ry={92} fill={`url(#${glowId})`} />
        <rect
          x={cLeft}
          y={cTop}
          width={cfg.center.w}
          height={cfg.center.h}
          rx={10}
          fill="rgba(99,91,255,0.08)"
          stroke="rgba(99,91,255,0.55)"
        />
        <text
          x={CX}
          y={titleY}
          textAnchor="middle"
          className="font-display"
          fontSize={14}
          fontWeight={600}
          fill="var(--c-bright)"
        >
          {cfg.center.title}
        </text>
        {cfg.center.sublines.map((line, i) => (
          <text
            key={line}
            x={CX}
            y={sublineYs[i]}
            textAnchor="middle"
            className="font-mono"
            fontSize={9}
            fill="var(--c-muted)"
          >
            {line}
          </text>
        ))}
        {cfg.footnote && (
          <text
            x={CX}
            y={cTop + cfg.center.h + 24}
            textAnchor="middle"
            className="font-mono"
            fontSize={9}
            fill="var(--c-muted-2)"
          >
            {cfg.footnote}
          </text>
        )}

        {/* packets, one per path, CSS offset-path animation */}
        {paths.map((d, i) => {
          const { duration, delay } = packetTiming(i)
          return (
            <circle
              key={d}
              r={3}
              fill="#7A73FF"
              opacity={0}
              style={{
                offsetPath: `path('${d}')`,
                offsetRotate: '0deg',
                animation: `fd-flow ${duration}s ease-in-out ${delay}s infinite`,
                filter: 'drop-shadow(0 0 4px rgba(99,91,255,0.9))',
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}
