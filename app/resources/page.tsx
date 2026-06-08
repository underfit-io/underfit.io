import type { Metadata } from 'next'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Resources, insights, and pricing for underfit products and services — coming soon.',
}

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 28px 70px rgba(0,0,0,0.44)',
}

const upcoming = [
  {
    label: 'Resources',
    title: 'Guides, templates & checklists',
    description:
      'Practical AI security resources — threat model templates, security checklists, architecture decision frameworks, and reference implementations for teams building with AI.',
  },
  {
    label: 'Insights',
    title: 'Research & industry analysis',
    description:
      'Original research, case studies, and analysis on the AI threat landscape, emerging attack patterns, and best practices from our work in the field.',
  },
  {
    label: 'Pricing',
    title: 'Transparent product pricing',
    description:
      'Clear, usage-based pricing for Gateway and Data Fabric — aligned to the scale and needs of your team, from startups to enterprise.',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <section className="max-w-container mx-auto px-6 pt-20 pb-14">
        <Eyebrow variant="default">Coming soon</Eyebrow>
        <h1 className="text-display font-bold text-ink mb-5" style={{ maxWidth: '12ch' }}>
          Resources
        </h1>
        <p className="text-[1.08rem] text-muted leading-[1.65] max-w-[52ch]">
          We're building a resource hub for AI security practitioners — tools, insights, and
          transparent pricing to help you make the right decisions.
        </p>
      </section>

      <section className="border-t border-white/[0.07]" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {upcoming.map((item) => (
              <div key={item.label} className="rounded-card p-7" style={cardStyle}>
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-[0.68rem] font-bold tracking-[0.1em] uppercase text-muted-2 mb-5"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  Coming soon
                </span>
                <h3 className="text-[0.72rem] font-bold text-accent uppercase tracking-[0.1em] mb-2">{item.label}</h3>
                <h4 className="text-[1.1rem] font-semibold text-ink mb-3 tracking-[-0.02em]">{item.title}</h4>
                <p className="text-[0.88rem] text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 py-16 text-center">
        <p className="text-[1rem] text-muted mb-6 max-w-[44ch] mx-auto">
          In the meantime, reach out directly — we're happy to share relevant material and discuss your specific needs.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 rounded-full text-[0.9rem] font-semibold bg-accent text-accent-on transition-all hover:bg-accent-strong shadow-accent-glow"
        >
          Get in touch
        </Link>
      </section>
    </>
  )
}
