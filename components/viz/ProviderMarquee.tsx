import { Fragment } from 'react'

interface ProviderMarqueeProps {
  className?: string
}

const PROVIDERS = [
  'OpenAI',
  'Anthropic',
  'Gemini',
  'Groq',
  'Together AI',
  'AWS Bedrock',
  'Ollama',
  'MCP Tools',
]

const EDGE_FADE =
  'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'

/** One full pass of the provider sequence. Rendered twice for a seamless loop. */
function Sequence() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-muted-2">
      {PROVIDERS.map((name) => (
        <Fragment key={name}>
          <span className="whitespace-nowrap">{name}</span>
          <span className="h-[3px] w-[3px] shrink-0 bg-accent/50" />
        </Fragment>
      ))}
    </div>
  )
}

/**
 * Full-width scrolling strip of supported providers. CSS-only: the track holds
 * two copies of the sequence and `animate-marquee` translates it -50%, so the
 * loop is seamless. Hovering the strip pauses the animation; globals.css
 * disables it entirely under prefers-reduced-motion.
 */
export default function ProviderMarquee({ className = '' }: ProviderMarqueeProps) {
  return (
    <div
      className={`group overflow-hidden border-y border-line/[0.06] py-4 ${className}`}
      style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
    >
      <p className="sr-only">
        Gateway routes to OpenAI, Anthropic, Gemini, Groq, Together AI, AWS
        Bedrock, Ollama, and MCP tools.
      </p>
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
      >
        <Sequence />
        <Sequence />
      </div>
    </div>
  )
}
