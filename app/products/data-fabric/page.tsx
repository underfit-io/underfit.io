import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import CountUp from '@/components/motion/CountUp'
import Pill from '@/components/ui/Pill'
import FabricLayer from '@/components/viz/FabricLayer'

export const metadata: Metadata = {
  title: 'Data Fabric: AI-Ready Data Layer for Business Insights',
  alternates: { canonical: '/products/data-fabric' },
  description:
    'Data Fabric unifies tickets, CRM, inventory, ERP, and internal systems into a single AI-ready data layer, the clean, governed foundation that makes AI accurate.',
}

const stats = [
  {
    value: 60,
    suffix: '%',
    label: 'Of AI projects will be abandoned through 2026 when unsupported by AI-ready data.',
    source: 'Gartner, 2025',
    sourceUrl: 'https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk',
  },
  {
    value: 7,
    suffix: '%',
    label: 'Enterprises that say their data is completely ready for AI adoption.',
    source: 'Cloudera + Harvard Business Review, 2026',
    sourceUrl: 'https://www.cloudera.com/about/news-and-blogs/press-releases/2026-03-05-only-7-percent-of-enterprises-say-their-data-is-completely-ready-for-ai-according-to-new-report-from-cloudera-and-harvard-business-review-analytic-services-reveals.html',
  },
  {
    value: 17,
    prefix: '$',
    suffix: 'B',
    label: 'Projected data fabric market by 2032, growing at 25% CAGR as enterprises unify data for AI.',
    source: 'Coherent Market Insights, 2025',
    sourceUrl: 'https://www.coherentmarketinsights.com/blog/information-and-communication-technology/data-fabric-market-size-forecast-2025-2032-drivers-2476',
  },
]

const whyAiReady = [
  {
    title: 'Data quality = model quality',
    description: 'Clean, consistent, governed data reduces hallucinations and improves model accuracy across every use case.',
  },
  {
    title: 'Data silos kill insights',
    description: 'When data is scattered across tickets, CRM, ERP, and internal systems, building AI is slow and brittle.',
  },
  {
    title: 'Governance at scale',
    description: 'Automated lineage tracking, access control, and compliance across all sources, without manual effort.',
  },
]

const whatItDoes = [
  { title: 'Multi-source connectors', description: 'Connect to tickets, CRM, inventory, ERP, and internal systems out of the box.' },
  { title: 'Canonical data models', description: 'Define unified schemas across disparate sources. One model for customer, product, transaction.' },
  { title: 'AI-ready views & APIs', description: 'Automatically generate clean, normalized views optimized for ML training and inference.' },
  { title: 'Reduced hallucinations', description: 'Provide models with consistent, verified data, reducing false or confabulated outputs.' },
  { title: 'Lineage & governance', description: 'Track data provenance, transformations, and access. Comply with regulations automatically.' },
  { title: 'Flexible integration', description: 'REST, GraphQL, and streaming interfaces. Feeds your agents, BI stack, and dashboards.' },
]

export default function DataFabricPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 pt-16 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          <div>
            <Pill variant="default">Coming soon · Alpha waitlist</Pill>
            <h1 className="text-display font-display text-bright mt-6 mb-6" style={{ maxWidth: '17ch' }}>
              One intelligence layer for every data source.
            </h1>
            <p className="text-[1.08rem] text-muted leading-[1.65] max-w-[56ch] mb-8">
              Unify tickets, CRM, inventory, ERP, and internal systems into a single AI-ready data
              layer, and turn what your business already runs on into actionable insight for every
              level, from managers to executives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold bg-cta-gradient text-accent-on hover:shadow-accent-glow transition-shadow"
              >
                Join the alpha waitlist
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold border border-line/[0.12] text-muted hover:text-ink hover:bg-line/[0.04] transition-colors"
              >
                Talk to us about your data stack
              </Link>
            </div>
          </div>
          <Reveal delay={120}>
            <FabricLayer />
          </Reveal>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <section className="border-y border-line/[0.06]" style={{ background: 'var(--c-band)' }}>
        <div className="max-w-container mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="rounded-card-md p-5 h-full bg-card">
                  <p className="text-[2rem] font-display font-bold leading-none tracking-[-0.03em] text-accent-light mb-3">
                    <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </p>
                  <p className="text-[0.82rem] text-muted leading-snug mb-3">{s.label}</p>
                  <p className="text-[0.7rem] font-mono text-muted-2">
                    Source:{' '}
                    <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors">
                      {s.source}
                    </a>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why AI-ready data ────────────────────────── */}
      <section className="max-w-container mx-auto px-6 py-20">
        <Reveal>
          <div className="mb-10">
            <p className="text-eyebrow font-mono text-muted-2 mb-3">Why an AI-ready data layer</p>
            <h2 className="text-section font-display text-bright mb-4" style={{ maxWidth: '22ch' }}>
              AI quality depends on data quality.
            </h2>
            <p className="text-[0.98rem] text-muted leading-relaxed max-w-[62ch]">
              Siloed, inconsistent data leads to poor outputs, hallucinations, and compliance risk.
              Data Fabric solves this at the architecture level.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {whyAiReady.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="rounded-card-md bg-card p-6 h-full">
                <h3 className="text-[1rem] font-semibold text-ink mb-2">{c.title}</h3>
                <p className="text-[0.88rem] text-muted leading-relaxed">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── What Data Fabric does ────────────────────── */}
      <section className="py-20 border-t border-line/[0.06]" style={{ background: 'var(--c-band)' }}>
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <div className="mb-10">
              <p className="text-eyebrow font-mono text-muted-2 mb-3">What Data Fabric does</p>
              <h2 className="text-section font-display text-bright">From scattered systems to one governed layer.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatItDoes.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 80}>
                <div className="rounded-card-md bg-card p-6 h-full">
                  <p className="text-eyebrow font-mono text-muted-2 mb-3">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="text-[1rem] font-semibold text-ink mb-2">{c.title}</h3>
                  <p className="text-[0.88rem] text-muted leading-relaxed">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture ─────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 py-20">
        <Reveal>
          <div className="mb-10">
            <p className="text-eyebrow font-mono text-muted-2 mb-3">Architecture</p>
            <h2 className="text-section font-display text-bright mb-4" style={{ maxWidth: '24ch' }}>
              From your systems to decisions.
            </h2>
            <p className="text-[0.98rem] text-muted leading-relaxed max-w-[62ch]">
              Whatever your business runs on (CRM, ticketing, ERP, inventory, internal tools),
              Data Fabric consumes it, governs it, and serves it back as insight anyone can act on,
              from a team lead’s dashboard to the executive view.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <FabricLayer />
        </Reveal>
      </section>

      {/* ── Status & collaboration ───────────────────── */}
      <section className="py-20 border-t border-line/[0.06]" style={{ background: 'var(--c-band)' }}>
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <div className="max-w-[640px]">
              <p className="text-eyebrow font-mono text-muted-2 mb-3">Status & collaboration</p>
              <h2 className="text-section font-display text-bright mb-4">Approaching alpha.</h2>
              <p className="text-[0.98rem] text-muted leading-relaxed">
                Data Fabric is in development. We’re seeking design partners who want to shape how
                AI-ready data works. You get early access; we get real-world feedback.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── End CTA ──────────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-section font-display text-bright mb-4 mx-auto" style={{ maxWidth: '24ch' }}>
            Need help designing your data layer?
          </h2>
          <p className="text-[1rem] text-muted leading-relaxed max-w-[48ch] mx-auto mb-8">
            Our services team can help you design and build a data fabric tailored to your AI use cases.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services"
              className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold bg-cta-gradient text-accent-on hover:shadow-accent-glow transition-shadow"
            >
              Explore our services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold border border-line/[0.12] text-muted hover:text-ink hover:bg-line/[0.04] transition-colors"
            >
              Request collaboration on Data Fabric
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
