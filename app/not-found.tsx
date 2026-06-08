import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="max-w-container mx-auto px-6 pt-32 pb-20 text-center">
      <p className="text-kicker text-accent mb-4">404</p>
      <h1 className="text-section font-bold text-ink mb-4">Page not found.</h1>
      <p className="text-[1rem] text-muted mb-8 max-w-xs mx-auto">
        This page doesn't exist or has moved. Let's get you back to somewhere useful.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/"
          className="px-5 py-3 rounded-full text-[0.9rem] font-semibold bg-accent text-accent-on hover:bg-accent-strong transition-colors"
        >
          Go home
        </Link>
        <Link
          href="/contact"
          className="px-5 py-3 rounded-full text-[0.9rem] font-semibold bg-white/[0.03] text-ink border border-white/[0.14] hover:bg-white/[0.06] transition-colors"
        >
          Contact us
        </Link>
      </div>
    </section>
  )
}
