import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Responsible AI & security commitment',
  description: 'The principles behind everything Underfit builds and advises.',
}

const principles = [
  'Security by design in every product and recommendation.',
  'Transparency in data handling, AI interactions, and audit logging.',
  'Governance-first approach to data access and model behavior.',
  'Continuous monitoring and improvement of security posture.',
  'Respect for privacy and compliance with applicable regulations.',
]

export default function ResponsibleAIPage() {
  return (
    <section className="max-w-[760px] mx-auto px-6 pt-16 pb-24">
      <p className="text-eyebrow font-mono text-muted-2 mb-4">Legal</p>
      <h1 className="text-section font-display text-bright mb-3">
        Responsible AI &amp; security commitment
      </h1>
      <p className="text-[0.85rem] font-mono text-muted-2 mb-10">Last updated: July 2026</p>
      <div className="governed-line mb-10" aria-hidden="true" />
      <p className="text-[0.98rem] text-muted leading-[1.75] mb-10">
        At Underfit, responsible AI is not a checkbox. It is foundational to everything we build
        and advise.
      </p>

      <div className="mb-9">
        <p className="text-eyebrow font-mono text-muted-2 mb-2">01</p>
        <h2 className="text-[1.15rem] font-display font-bold text-ink mb-4">Our principles</h2>
        <ul className="flex flex-col gap-3">
          {principles.map((p) => (
            <li key={p} className="flex gap-3 text-[0.95rem] text-muted leading-[1.7]">
              <span className="mt-[0.55em] w-2 h-2 bg-accent flex-none" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-9">
        <p className="text-eyebrow font-mono text-muted-2 mb-2">02</p>
        <h2 className="text-[1.15rem] font-display font-bold text-ink mb-3">Security disclosures</h2>
        <p className="text-[0.95rem] text-muted leading-[1.75]">
          Found a vulnerability in one of our products or this site? We welcome responsible
          disclosures at{' '}
          <a href="mailto:info@underfit.io" className="accent-link text-accent-light">
            info@underfit.io
          </a>
          . We read every report and respond to every genuine one.
        </p>
      </div>

      <div>
        <p className="text-eyebrow font-mono text-muted-2 mb-2">03</p>
        <h2 className="text-[1.15rem] font-display font-bold text-ink mb-3">Contact</h2>
        <p className="text-[0.95rem] text-muted leading-[1.75]">
          Questions about our security practices? Reach out at info@underfit.io.
        </p>
      </div>
    </section>
  )
}
