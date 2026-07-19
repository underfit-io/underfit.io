import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="max-w-container mx-auto px-6 pt-32 pb-24 text-center">
      <p className="font-mono text-eyebrow text-accent-light mb-5">404, signal lost</p>
      <h1 className="text-section font-display text-bright mb-4">This page doesn’t exist.</h1>
      <p className="text-[1rem] text-muted mb-10 max-w-sm mx-auto">
        The route you requested isn’t governed by any policy we know of.
      </p>
      <div className="governed-line max-w-[200px] mx-auto mb-10" aria-hidden="true" />
      <div className="flex justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold bg-cta-gradient text-accent-on hover:shadow-accent-glow transition-shadow"
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold border border-line/[0.12] text-muted hover:text-ink hover:bg-line/[0.04] transition-colors"
        >
          Contact us
        </Link>
      </div>
    </section>
  )
}
