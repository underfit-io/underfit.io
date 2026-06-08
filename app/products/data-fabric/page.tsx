import type { Metadata } from 'next'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import FeatureGrid from '@/components/sections/FeatureGrid'

export const metadata: Metadata = {
  title: 'Data Fabric — AI-Ready Data Layer',
  description:
    'Data Fabric unifies tickets, CRM, inventory, ERP, and internal systems into a single AI-ready intelligence layer for better business decisions.',
}

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 28px 70px rgba(0,0,0,0.44)',
}

const stats = [
  {
    value: '7%',
    label: 'Enterprises that say their data is completely ready for AI adoption.',
    source: 'Cloudera + Harvard Business Review, 2026',
    sourceUrl: 'https://www.cloudera.com/about/news-and-blogs/press-releases/2026-03-05-only-7-percent-of-enterprises-say-their-data-is-completely-ready-for-ai-according-to-new-report-from-cloudera-and-harvard-business-review-analytic-services-reveals.html',
  },
  {
    value: '60%',
    label: 'AI projects unsupported by AI-ready data are predicted to be abandoned through 2026.',
    source: 'Gartner, 2025',
    sourceUrl: 'https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk',
  },
  {
    value: '80%',
    label: 'Of a data scientist\'s time is spent preparing and cleaning data — not building models.',
    source: 'IBM / Anaconda Developer Survey, 2025',
    sourceUrl: 'https://www.ibm.com/think/insights/cost-of-poor-data-quality',
  },
  {
    value: '73%',
    label: 'Organizations say they should prioritize AI data quality more than they currently do.',
    source: 'Cloudera + Harvard Business Review, 2026',
    sourceUrl: 'https://www.cloudera.com/about/news-and-blogs/press-releases/2026-03-05-only-7-percent-of-enterprises-say-their-data-is-completely-ready-for-ai-according-to-new-report-from-cloudera-and-harvard-business-review-analytic-services-reveals.html',
  },
]

const whyAIData = [
  {
    title: 'Data Quality = Model Quality',
    description: 'Clean, consistent, governed data reduces hallucinations and improves model accuracy across every use case.',
  },
  {
    title: 'Data Silos Kill Insights',
    description: 'When data is scattered across tickets, CRM, ERP, and internal systems, building AI is slow and brittle.',
  },
  {
    title: 'Governance at Scale',
    description: 'Automated lineage tracking, access control, and compliance across all sources — without manual effort.',
  },
]

const capabilities = [
  {
    title: 'Multi-Source Connectors',
    description: 'Connect to tickets, CRM, inventory, ERP, and internal systems out of the box.',
  },
  {
    title: 'Canonical Data Models',
    description: 'Define unified schemas across disparate sources. One model for customer, product, transaction.',
  },
  {
    title: 'AI-Ready Views & APIs',
    description: 'Automatically generate clean, normalized views optimized for ML training and inference.',
  },
  {
    title: 'Reduced Hallucinations',
    description: 'Provide models with consistent, verified data — reducing false or confabulated outputs.',
  },
  {
    title: 'Lineage & Governance',
    description: 'Track data provenance, transformations, and access. Comply with regulations automatically.',
  },
  {
    title: 'Flexible Integration',
    description: 'Works with Gateway and standalone. REST, GraphQL, and streaming interfaces.',
  },
]

export default function DataFabricPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-container mx-auto px-6 pt-20 pb-14">
        <Eyebrow variant="default">Coming soon · Alpha waitlist</Eyebrow>
        <h1 className="text-display font-bold text-ink mb-5" style={{ maxWidth: '16ch' }}>
          Data Fabric: One intelligence layer for every data source.
        </h1>
        <p className="text-[1.08rem] text-muted leading-[1.65] max-w-[54ch] mb-7">
          Unify tickets, CRM, inventory, ERP, and internal systems into a single AI-ready data layer — giving teams the clean, structured foundation needed for real decisions.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Link href="/contact" className="px-5 py-3 rounded-full text-[0.9rem] font-semibold bg-accent text-accent-on transition-all hover:bg-accent-strong shadow-accent-glow">
            Join Data Fabric Alpha Waitlist
          </Link>
          <Link href="/contact" className="px-5 py-3 rounded-full text-[0.9rem] font-semibold bg-white/[0.03] text-ink border border-white/[0.14] transition-all hover:bg-white/[0.06] hover:border-white/[0.22]">
            Talk to us about your data stack
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/[0.07]" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <div key={i} className="rounded-card-sm p-5" style={cardStyle}>
                <p className="text-[2rem] font-bold leading-none tracking-[-0.04em] text-accent mb-2">{s.value}</p>
                <p className="text-[0.82rem] text-muted leading-snug mb-2">{s.label}</p>
                <p className="text-[0.7rem] text-muted-2">
                  Source:{' '}
                  <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    {s.source}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI-ready data */}
      <section className="max-w-container mx-auto px-6 py-16">
        <div className="max-w-[640px] mx-auto text-center mb-10">
          <h2 className="text-section font-bold text-ink mb-4">Why an AI-ready data layer?</h2>
          <p className="text-[1rem] text-muted leading-relaxed">
            AI quality depends on data quality. Siloed, inconsistent data leads to poor outputs, hallucinations, and compliance risk. Data Fabric solves this at the architecture level.
          </p>
        </div>
        <FeatureGrid features={whyAIData} />
      </section>

      {/* What Data Fabric does */}
      <section className="py-16" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-10">
            <h2 className="text-section font-bold text-ink">What Data Fabric does</h2>
          </div>
          <FeatureGrid features={capabilities} />
        </div>
      </section>

      {/* Status & CTA */}
      <section className="max-w-container mx-auto px-6 py-16">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="text-section font-bold text-ink mb-4">Status & Collaboration</h2>
          <p className="text-[1rem] text-muted leading-relaxed mb-8">
            Data Fabric is in development, approaching alpha. We're seeking design partners who want to shape how AI-ready data works.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-full text-[0.9rem] font-semibold bg-accent text-accent-on transition-all hover:bg-accent-strong shadow-accent-glow">
            Join the Alpha Waitlist
          </Link>
        </div>
      </section>
    </>
  )
}
