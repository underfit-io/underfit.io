interface FabricLayerProps {
  className?: string
}

const VB_W = 720
const VB_H = 430

const LAYER_X = 120
const LAYER_W = 480
const LAYER_TOP = 196
const LAYER_BOTTOM = 258
const LAYER_H = LAYER_BOTTOM - LAYER_TOP

const SRC_Y = 384
const CON_Y = 46

/** Vertical cubic with vertical tangents at both ends. */
function riser(x1: number, y1: number, x2: number, y2: number): string {
  const dy = Math.round((y2 - y1) * 0.55 * 10) / 10
  return `M ${x1} ${y1} C ${x1} ${y1 + dy}, ${x2} ${y2 - dy}, ${x2} ${y2}`
}

/** Pull a column position toward the center by factor f. */
const toward = (x: number, f: number) => Math.round(360 + (x - 360) * f)

const sources = [
  { label: 'Tickets', x: 96 },
  { label: 'CRM', x: 228 },
  { label: 'ERP', x: 360 },
  { label: 'Inventory', x: 492 },
  { label: 'Internal APIs', x: 624 },
]

const consumers = [
  { label: 'AI Agents', x: 132 },
  { label: 'Analysts', x: 294 },
  { label: 'Managers', x: 442 },
  { label: 'Executives', x: 596 },
]

const entryXs = sources.map((s) => toward(s.x, 0.7))
const exitXs = consumers.map((c) => toward(c.x, 0.55))

const KEYFRAMES = `
@keyframes fabric-rise {
  0% { offset-distance: 0%; opacity: 0; }
  12% { opacity: 1; }
  85% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}
@keyframes fabric-cell {
  0%, 100% { opacity: 0.18; }
  50% { opacity: 0.75; }
}
@keyframes fabric-scan {
  0% { transform: translateX(0); }
  100% { transform: translateX(${LAYER_W - 96}px); }
}
`

/**
 * The Data Fabric as an intelligence layer: scattered business systems feed
 * raw data upward into one wide governed plane, and refined insight rises
 * from it to every level of the organization. Deliberately vertical and
 * stratified, so it reads as a layer everyone draws from, not a gateway in
 * a pipe. Pure CSS animations; the global reduced-motion kill-switch applies.
 */
export default function FabricLayer({ className = '' }: FabricLayerProps) {
  const inPaths = sources.map((s, i) => riser(s.x, SRC_Y - 15, entryXs[i], LAYER_BOTTOM + 11))
  const outPaths = consumers.map((c, i) => riser(exitXs[i], LAYER_TOP - 11, c.x, CON_Y + 15))

  // woven cells inside the plane, leaving a clear well for the label
  const cells: { x: number; y: number; d: number }[] = []
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 23; c++) {
      const x = 142 + c * 20
      const y = 212 + r * 15
      if (x > 258 && x < 462) continue
      cells.push({ x, y, d: (r * 23 + c * 7) % 32 })
    }
  }

  return (
    <div className={`relative overflow-hidden rounded-card border border-line/[0.07] bg-surface ${className}`}>
      <div className="sr-only">
        Diagram of the Data Fabric intelligence layer. Business systems (tickets, CRM, ERP,
        inventory, internal APIs) feed raw data upward into one governed layer, and everyone in the
        organization draws insight from it: AI agents, analysts, managers, and executives.
      </div>
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="block w-full h-auto" aria-hidden="true" focusable="false">
        <style>{KEYFRAMES}</style>
        <defs>
          <radialGradient id="fabric-glow">
            <stop offset="0%" stopColor="rgba(99,91,255,0.15)" />
            <stop offset="100%" stopColor="rgba(99,91,255,0)" />
          </radialGradient>
          <linearGradient id="fabric-slab" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(99,91,255,0.14)" />
            <stop offset="100%" stopColor="rgba(99,91,255,0.05)" />
          </linearGradient>
          <linearGradient id="fabric-sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(99,91,255,0)" />
            <stop offset="50%" stopColor="rgba(129,140,248,0.16)" />
            <stop offset="100%" stopColor="rgba(99,91,255,0)" />
          </linearGradient>
        </defs>

        {/* corner labels, same treatment as the Gateway diagram headings */}
        <text x={26} y={24} className="font-mono" fontSize={9} letterSpacing="0.14em" fill="var(--c-muted-2)">
          PEOPLE
        </text>
        <text x={26} y={VB_H - 14} className="font-mono" fontSize={9} letterSpacing="0.14em" fill="var(--c-muted-2)">
          SYSTEMS
        </text>

        {/* risers: raw data in (muted) */}
        {inPaths.map((d) => (
          <path key={d} d={d} fill="none" stroke="var(--border-strong)" strokeWidth={1} />
        ))}
        {/* risers: insight out (faint accent) */}
        {outPaths.map((d) => (
          <path key={d} d={d} fill="none" stroke="rgba(99,91,255,0.30)" strokeWidth={1} />
        ))}

        {/* ambient glow behind the slab */}
        <ellipse cx={VB_W / 2} cy={(LAYER_TOP + LAYER_BOTTOM) / 2} rx={290} ry={92} fill="url(#fabric-glow)" />

        {/* the slab: three plies make it read as a fabric of layers */}
        <rect x={LAYER_X + 16} y={LAYER_TOP - 11} width={LAYER_W - 32} height={LAYER_H} rx={12} fill="rgba(99,91,255,0.04)" stroke="rgba(99,91,255,0.18)" />
        <rect x={LAYER_X + 16} y={LAYER_TOP + 11} width={LAYER_W - 32} height={LAYER_H} rx={12} fill="rgba(99,91,255,0.03)" stroke="rgba(99,91,255,0.14)" />
        <rect x={LAYER_X} y={LAYER_TOP} width={LAYER_W} height={LAYER_H} rx={12} fill="url(#fabric-slab)" stroke="rgba(99,91,255,0.55)" />
        {/* top edge highlight */}
        <line x1={LAYER_X + 12} y1={LAYER_TOP + 1} x2={LAYER_X + LAYER_W - 12} y2={LAYER_TOP + 1} stroke="rgba(129,140,248,0.35)" strokeWidth={1} />

        {/* processing sweep across the plane */}
        <g clipPath="none">
          <rect
            x={LAYER_X + 4}
            y={LAYER_TOP + 4}
            width={88}
            height={LAYER_H - 8}
            rx={8}
            fill="url(#fabric-sweep)"
            style={{ animation: 'fabric-scan 4.2s ease-in-out infinite alternate' }}
          />
        </g>

        {/* woven cells: raw data becoming structure */}
        {cells.map((c) => (
          <circle
            key={`${c.x}-${c.y}`}
            cx={c.x}
            cy={c.y}
            r={1.6}
            fill="#818cf8"
            opacity={0.3}
            style={{ animation: 'fabric-cell 3.4s ease-in-out infinite', animationDelay: `${(c.d / 10).toFixed(1)}s` }}
          />
        ))}

        {/* label, set directly into the cleared well of the plane */}
        <text x={VB_W / 2} y={224} textAnchor="middle" fontSize={14.5} fontWeight={700} fill="var(--c-bright)" letterSpacing="-0.02em">
          Data Fabric
        </text>
        <text x={VB_W / 2} y={240} textAnchor="middle" className="font-mono" fontSize={8.5} letterSpacing="0.1em" fill="var(--c-muted)">
          one governed intelligence layer
        </text>

        {/* ports where risers meet the plane */}
        {entryXs.map((x) => (
          <circle key={`p-in-${x}`} cx={x} cy={LAYER_BOTTOM + 11} r={2.6} fill="var(--c-surface)" stroke="rgba(99,91,255,0.55)" strokeWidth={1} />
        ))}
        {exitXs.map((x) => (
          <circle key={`p-out-${x}`} cx={x} cy={LAYER_TOP - 11} r={2.6} fill="var(--c-surface)" stroke="rgba(99,91,255,0.55)" strokeWidth={1} />
        ))}

        {/* raw data particles rising in: muted */}
        {inPaths.map((d, i) => (
          <circle
            key={`in-${i}`}
            r={2.4}
            fill="var(--c-muted-2)"
            opacity={0}
            style={{
              offsetPath: `path('${d}')`,
              animation: `fabric-rise ${(3.1 + ((i * 41) % 80) / 100).toFixed(2)}s ease-in-out infinite`,
              animationDelay: `${(-((i * 67) % 310) / 100).toFixed(2)}s`,
            }}
          />
        ))}
        {/* insight particles rising out: accent */}
        {outPaths.map((d, i) => (
          <circle
            key={`out-${i}`}
            r={2.6}
            fill="#7A73FF"
            opacity={0}
            style={{
              offsetPath: `path('${d}')`,
              animation: `fabric-rise ${(2.9 + ((i * 53) % 70) / 100).toFixed(2)}s ease-in-out infinite`,
              animationDelay: `${(-((i * 83) % 290) / 100).toFixed(2)}s`,
            }}
          />
        ))}

        {/* source chips */}
        {sources.map((s) => (
          <g key={s.label}>
            <rect x={s.x - 52} y={SRC_Y - 15} width={104} height={30} rx={8} fill="var(--c-surface-2)" stroke="var(--border-strong)" />
            <text x={s.x} y={SRC_Y + 3.5} textAnchor="middle" className="font-mono" fontSize={10.5} fill="var(--c-ink)">
              {s.label}
            </text>
          </g>
        ))}

        {/* consumer chips */}
        {consumers.map((c) => (
          <g key={c.label}>
            <rect x={c.x - 50} y={CON_Y - 15} width={100} height={30} rx={15} fill="var(--c-surface-2)" stroke="rgba(99,91,255,0.35)" />
            <text x={c.x} y={CON_Y + 3.5} textAnchor="middle" className="font-mono" fontSize={10.5} fill="var(--c-ink)">
              {c.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
