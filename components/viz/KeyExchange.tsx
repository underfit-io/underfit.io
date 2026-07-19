interface KeyExchangeProps {
  className?: string
}

/**
 * Animated virtual-key exchange diagram: a request carrying an opaque
 * `sk-gw-*` key travels from the client to the Gateway, is swapped for the
 * real provider credential inside the key vault, and continues to the
 * provider. A response pulse returns right-to-left.
 *
 * Pure CSS keyframe loop (~5.5s). All moving parts rest at `opacity: 0`,
 * so with reduced motion (globals.css freezes animations) the diagram
 * settles into a clean static three-station layout. On mobile the stations
 * stack vertically and the animation path is hidden.
 */
export default function KeyExchange({ className = '' }: KeyExchangeProps) {
  return (
    <figure className={`w-full ${className}`}>
      <style>{`
        @keyframes kxchg-chip-a {
          0%        { left: 0%; opacity: 0; }
          5%        { left: 0%; opacity: 1; }
          36%       { left: 100%; opacity: 1; }
          43%, 100% { left: 100%; opacity: 0; }
        }
        @keyframes kxchg-ring {
          0%, 34%   { opacity: 0; }
          43%       { opacity: 1; }
          56%, 100% { opacity: 0; }
        }
        @keyframes kxchg-chip-b {
          0%, 43%   { left: 0%; opacity: 0; }
          50%       { left: 0%; opacity: 1; }
          78%       { left: 100%; opacity: 1; }
          85%, 100% { left: 100%; opacity: 0; }
        }
        @keyframes kxchg-pulse-b {
          0%, 86%   { left: 100%; opacity: 0; }
          88%       { opacity: 0.85; }
          93%       { left: 0%; opacity: 0.85; }
          94%, 100% { left: 0%; opacity: 0; }
        }
        @keyframes kxchg-pulse-a {
          0%, 92%   { left: 100%; opacity: 0; }
          94%       { opacity: 0.85; }
          99%       { left: 0%; opacity: 0.85; }
          100%      { left: 0%; opacity: 0; }
        }
        .kxchg-chip-a  { animation: kxchg-chip-a 5.5s ease-in-out infinite; }
        .kxchg-ring    { animation: kxchg-ring 5.5s ease-in-out infinite; }
        .kxchg-chip-b  { animation: kxchg-chip-b 5.5s ease-in-out infinite; }
        .kxchg-pulse-b { animation: kxchg-pulse-b 5.5s ease-in-out infinite; }
        .kxchg-pulse-a { animation: kxchg-pulse-a 5.5s ease-in-out infinite; }
      `}</style>

      <div className="rounded-card border border-line/[0.07] bg-surface p-5 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
          {/* Station: Your app */}
          <div className="min-w-0 md:basis-0 md:grow-[1.6] rounded-card-md border border-line/[0.08] bg-surface-2 px-4 py-3.5">
            <div className="text-eyebrow font-mono text-muted-2">Your app</div>
            <div className="mt-1.5 font-mono text-[0.75rem] text-ink truncate">sk-gw-3d69&hellip;56b6</div>
          </div>

          {/* Mobile connector */}
          <div className="md:hidden self-center h-5 w-px bg-line/[0.10]" aria-hidden="true" />

          {/* Path: app -> gateway (request chip carries the virtual key) */}
          <div className="relative hidden md:block flex-1 min-w-[40px] h-px bg-line/[0.08] pointer-events-none" aria-hidden="true">
            <span className="kxchg-chip-a absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-card-sm border border-accent/30 bg-surface-3 px-2 py-1 font-mono text-[0.65rem] text-accent-light opacity-0">
              sk-gw-3d69&hellip;
            </span>
            <span className="kxchg-pulse-a absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-success opacity-0" />
          </div>

          {/* Station: Gateway */}
          <div className="relative min-w-0 md:basis-0 md:grow-[1.6] rounded-card-md border border-accent/40 bg-surface-2 px-4 py-3.5">
            <span
              className="kxchg-ring pointer-events-none absolute -inset-px rounded-card-md border border-accent/60 shadow-accent-glow opacity-0"
              aria-hidden="true"
            />
            <div className="text-eyebrow font-mono text-accent-light">Gateway</div>
            <div className="mt-1.5 font-mono text-[0.75rem] text-muted truncate">key vault &middot; rotation</div>
          </div>

          {/* Mobile connector */}
          <div className="md:hidden self-center h-5 w-px bg-line/[0.10]" aria-hidden="true" />

          {/* Path: gateway -> provider (swapped to the real credential) */}
          <div className="relative hidden md:block flex-1 min-w-[40px] h-px bg-line/[0.08] pointer-events-none" aria-hidden="true">
            <span className="kxchg-chip-b absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-card-sm border border-line/[0.10] bg-surface-3 px-2 py-1 font-mono text-[0.65rem] text-muted opacity-0">
              sk-&bull;&bull;&bull;&bull;&bull;&bull;&bull;
            </span>
            <span className="kxchg-pulse-b absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-success opacity-0" />
          </div>

          {/* Station: Provider */}
          <div className="min-w-0 md:basis-0 md:grow-[1.6] rounded-card-md border border-line/[0.08] bg-surface-2 px-4 py-3.5">
            <div className="text-eyebrow font-mono text-muted-2">Provider</div>
            <div className="mt-1.5 font-mono text-[0.75rem] text-muted truncate">
              sk-&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
            </div>
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-[0.8rem] text-muted">
        Clients hold opaque virtual keys. Real provider credentials never leave the server.
      </figcaption>
    </figure>
  )
}
