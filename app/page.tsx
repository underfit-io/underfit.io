import type { Metadata } from 'next'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import StepGrid from '@/components/sections/StepGrid'
import Pill from '@/components/ui/Pill'

export const metadata: Metadata = {
  title: 'underfit.io',
  description:
    'Underfit is a research company at the intersection of AI and cybersecurity — engineers, data scientists, and security experts building the infrastructure enterprises need.',
}

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 28px 70px rgba(0,0,0,0.44)',
}

const stats = [
  {
    value: '$28.5B',
    label: 'AI cybersecurity market in 2025, projected to reach $85B by 2030 at 24% CAGR.',
    source: 'Research and Markets',
    sourceUrl: 'https://www.researchandmarkets.com/report/artificial-intelligence-based-cybersecurity',
  },
  {
    value: '87%',
    label: 'Of organizations experienced an AI-driven cyberattack in the past year.',
    source: 'Deepstrike (2025)',
    sourceUrl: 'https://deepstrike.io/blog/ai-cyber-attack-statistics-2025',
  },
  {
    value: '$4.88M',
    label: 'Average cost of a data breach in 2024 — the highest on record.',
    source: 'IBM Cost of a Data Breach Report',
    sourceUrl: 'https://www.ibm.com/reports/data-breach',
  },
  {
    value: '78%',
    label: 'Of organizations now use AI in at least one business function, up from 55% in 2023.',
    source: 'McKinsey (2024)',
    sourceUrl: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
  },
]

const methodologySteps = [
  {
    number: '01',
    title: 'Discover & Inventory',
    description: 'Map all AI systems, data sources, identities, and access patterns across your environment. Grounded in NIST CSF Identify and ISO/IEC 42001 AI asset management.',
  },
  {
    number: '02',
    title: 'Threat Model',
    description: 'Identify AI-specific attack vectors — prompt injection, data poisoning, model inversion, and credential sprawl. Built on MITRE ATLAS and OWASP LLM Top 10.',
  },
  {
    number: '03',
    title: 'Govern & Control',
    description: 'Deploy identity controls, policy engines, and access governance for every AI agent and integration. Aligned with Zero Trust Architecture (NIST SP 800-207).',
  },
  {
    number: '04',
    title: 'Secure & Protect',
    description: 'Implement guardrails, encryption, audit trails, and secure data pipelines across all AI touchpoints. Built on NIST CSF Protect and ISO/IEC 27001:2022 controls.',
  },
  {
    number: '05',
    title: 'Detect & Monitor',
    description: 'Establish behavioral baselines, anomaly detection, and continuous monitoring for AI agents and data flows. Following NIST CSF Detect and SIEM best practices.',
  },
  {
    number: '06',
    title: 'Respond & Evolve',
    description: 'Structured incident response, policy updates, and continuous improvement cycles — keeping your AI posture resilient as threats evolve. Based on NIST CSF Respond/Recover and PDCA.',
  },
]

const products = [
  {
    pill: 'Alpha · Early testers',
    pillVariant: 'accent' as const,
    title: 'Gateway',
    description:
      'The control plane for your AI agents. Gateway sits between clients and every AI provider — authenticating with opaque virtual keys, enforcing policy, applying guardrails, routing traffic, and keeping a full audit trail from one endpoint.',
    href: '/products/gateway',
  },
  {
    pill: 'Coming soon · Alpha waitlist',
    pillVariant: 'default' as const,
    title: 'Data Fabric',
    description:
      'One intelligence layer for every data source. Data Fabric unifies tickets, CRM, inventory, ERP, and internal systems into a single AI-ready data layer — giving teams the clean, governed foundation that makes AI accurate and reliable.',
    href: '/products/data-fabric',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero — company story */}
      <section className="max-w-container mx-auto px-6 pt-20 pb-14">
        <Eyebrow variant="default">AI Security Research</Eyebrow>
        <h1 className="text-display font-bold text-ink mb-5" style={{ maxWidth: '18ch' }}>
          Engineers, researchers, and defenders — building AI security infrastructure.
        </h1>
        <p className="text-[1.08rem] text-muted leading-[1.65] max-w-[58ch] mb-5">
          Underfit is a research company at the intersection of AI and cybersecurity. Our team of
          engineers, data scientists, and cybersecurity experts builds the security infrastructure
          that AI-driven enterprises need — from control planes and identity governance to unified
          data layers and hands-on implementation.
        </p>
        <p className="text-[1rem] text-muted leading-[1.65] max-w-[56ch] mb-8">
          We work from first principles: study the threat landscape, design around real attack
          vectors, and ship tools that hold up in production.
        </p>
        <Link
          href="#products"
          className="px-5 py-3 rounded-full text-[0.9rem] font-semibold bg-accent text-accent-on transition-all hover:bg-accent-strong shadow-accent-glow"
        >
          Explore products & services
        </Link>
      </section>

      {/* Stats strip */}
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

      {/* Methodology */}
      <section className="py-16" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-10">
            <h2 className="text-section font-bold text-ink mb-3">Our methodology</h2>
            <p className="text-[0.95rem] text-muted leading-relaxed">
              Built on proven frameworks — NIST CSF, MITRE ATLAS, Zero Trust, ISO 27001, and OWASP — adapted for
              the realities of AI-native systems.
            </p>
          </div>
          <StepGrid steps={methodologySteps} />
        </div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-container mx-auto px-6 py-16">
        <div className="max-w-[640px] mx-auto text-center mb-10">
          <h2 className="text-section font-bold text-ink mb-3">Our products</h2>
          <p className="text-[1rem] text-muted">Purpose-built infrastructure for AI security and data governance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((p) => (
            <div key={p.title} className="rounded-card p-7 flex flex-col" style={cardStyle}>
              <Pill variant={p.pillVariant}>{p.pill}</Pill>
              <h3 className="text-[1.3rem] font-bold text-ink mt-5 mb-3 tracking-[-0.03em]">{p.title}</h3>
              <p className="text-[0.92rem] text-muted leading-relaxed flex-1">{p.description}</p>
              <Link href={p.href} className="inline-block mt-6 text-[0.88rem] font-semibold text-accent hover:underline">
                Learn more about {p.title} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Got an idea? */}
      <section
        className="py-16"
        style={{
          background: 'rgba(255,255,255,0.015)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-section font-bold text-ink mb-4">Got an idea? Ship it with us.</h2>
          <p className="text-[1.05rem] text-muted leading-relaxed max-w-[52ch] mx-auto mb-8">
            Our consulting team helps you design, build, and secure AI solutions — from early-stage
            architecture to production deployment.
          </p>
          <Link
            href="/services"
            className="inline-block px-6 py-3 rounded-full text-[0.9rem] font-semibold bg-accent text-accent-on transition-all hover:bg-accent-strong shadow-accent-glow"
          >
            Explore consulting services
          </Link>
        </div>
      </section>
    </>
  )
}
