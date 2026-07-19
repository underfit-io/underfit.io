import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import CountUp from '@/components/motion/CountUp'
import FlowDiagram from '@/components/viz/FlowDiagram'
import FabricLayer from '@/components/viz/FabricLayer'
import ProviderMarquee from '@/components/viz/ProviderMarquee'
import BrowserFrame from '@/components/viz/BrowserFrame'
import StepGrid from '@/components/sections/StepGrid'
import Pill from '@/components/ui/Pill'

export const metadata: Metadata = {
  title: { absolute: 'Underfit | AI Security Company: LLM Gateway & Data Fabric' },
  description:
    'Underfit is an AI cybersecurity and research company. We secure AI agents, LLM apps, and data pipelines with Gateway, an AI control plane, and Data Fabric, an AI-ready data layer.',
  alternates: { canonical: '/' },
}

const stats = [
  {
    value: 88,
    suffix: '%',
    decimals: 0,
    label: 'Organizations now use AI in at least one business function, up from 50% in 2022.',
    source: 'McKinsey State of AI, 2025',
    sourceUrl: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
  },
  {
    value: 4.44,
    prefix: '$',
    suffix: 'M',
    decimals: 2,
    label: 'Global average cost of a data breach in 2025, highest ever recorded.',
    source: 'IBM Cost of a Data Breach Report, 2025',
    sourceUrl: 'https://www.ibm.com/reports/data-breach',
  },
  {
    value: 51.3,
    prefix: '$',
    suffix: 'B',
    decimals: 1,
    label: 'AI-specific cybersecurity market projected for 2026, nearly doubling from $25.9B in 2025.',
    source: 'Gartner, 2025',
    sourceUrl: 'https://www.gartner.com/en/newsroom/press-releases/2025-07-29-gartner-forecasts-worldwide-end-user-spending-on-information-security-to-total-213-billion-us-dollars-in-2025',
  },
  {
    value: 2.5,
    prefix: '$',
    suffix: 'T',
    decimals: 1,
    label: 'Worldwide AI spending forecast for 2026, a 47% increase from $1.5T in 2025.',
    source: 'Gartner, 2026',
    sourceUrl: 'https://www.gartner.com/en/newsroom/press-releases/2026-1-15-gartner-says-worldwide-ai-spending-will-total-2-point-5-trillion-dollars-in-2026',
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
    description: 'Identify AI-specific attack vectors, prompt injection, data poisoning, model inversion, and credential sprawl. Built on MITRE ATLAS and OWASP LLM Top 10.',
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
    description: 'Structured incident response, policy updates, and continuous improvement cycles, keeping your AI posture resilient as threats evolve. Based on NIST CSF Respond/Recover and PDCA.',
  },
]

const services = [
  { title: 'Secure AI Architecture', desc: 'Threat modeling, risk assessment, and security-first design for AI systems.' },
  { title: 'Guardrailed LLM Apps', desc: 'Build LLM applications with content filtering, prompt safety, and policy enforcement.' },
  { title: 'AI-Ready Data Pipelines', desc: 'Design and implement clean, governed data pipelines that feed AI models reliably.' },
  { title: 'Implementation & Enablement', desc: 'End-to-end deployment, runbooks, and training to get your team running securely.' },
]

function SectionHeader({ index, kicker, title, sub }: { index: string; kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-10">
      <p className="text-eyebrow font-mono text-muted-2 mb-3">
        {index} / {kicker}
      </p>
      <h2 className="text-section font-display text-bright" style={{ maxWidth: '24ch' }}>
        {title}
      </h2>
      {sub && (
        <p className="text-[0.98rem] text-muted leading-relaxed mt-4 max-w-[62ch]">{sub}</p>
      )}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 pt-16 pb-14 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          <div>
            <h1 className="text-display font-display text-bright mb-6" style={{ maxWidth: '16ch' }}>
              Secure the AI your business actually runs.
            </h1>
            <p className="text-[1.08rem] text-muted leading-[1.65] max-w-[54ch] mb-7">
              Underfit is an AI cybersecurity and research company helping teams design, deploy,
              and defend AI agents, LLM apps, and data pipelines.
            </p>
            <ul className="flex flex-col gap-3 mb-9">
              {[
                ['Gateway', 'The control plane for your AI agents.'],
                ['Data Fabric', 'One intelligence layer for every data source.'],
                ['Services', 'From idea to secure deployment with a clear methodology.'],
              ].map(([lead, rest]) => (
                <li key={lead} className="flex gap-3 text-[0.95rem] text-muted">
                  <span className="text-accent-light font-bold flex-none" aria-hidden="true">▸</span>
                  <span>
                    <strong className="text-ink font-semibold">{lead}: </strong>
                    {rest}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold bg-cta-gradient text-accent-on hover:shadow-accent-glow transition-shadow"
              >
                Request Gateway access
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold border border-line/[0.12] text-muted hover:text-ink hover:bg-line/[0.04] transition-colors"
              >
                Talk to us about your AI stack
              </Link>
            </div>
          </div>
          <Reveal delay={120}>
            <FlowDiagram variant="gateway" />
          </Reveal>
        </div>
      </section>

      {/* ── Provider marquee ─────────────────────────── */}
      <ProviderMarquee />

      {/* ── Stats strip ──────────────────────────────── */}
      <section className="border-b border-line/[0.06]" style={{ background: 'var(--c-band)' }}>
        <div className="max-w-container mx-auto px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.source + s.value} delay={i * 80}>
                <div className="rounded-card-md p-5 h-full bg-card">
                  <p className="text-[2rem] font-display font-bold leading-none tracking-[-0.03em] text-accent-light mb-3">
                    <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
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

      {/* ── Who we are ───────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 py-20">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">
            <p className="text-eyebrow font-mono text-muted-2">01 / Who we are</p>
            <div>
              <h2 className="text-section font-display text-bright mb-5">AI security for real teams.</h2>
              <p className="text-[1.02rem] text-muted leading-[1.7] max-w-[58ch] mb-5">
                Underfit is an AI tech, cybersecurity, and research company. We help startups and
                enterprises build secure AI systems, from control planes and data governance to
                hands-on implementation. Not generic tools; real methodology, practical results.
              </p>
              <p className="text-[1.02rem] text-muted leading-[1.7] max-w-[58ch]">
                We’re engineers and builders from India. We grew up watching good technology stay
                out of reach for the people who needed it most, so we’re making security and
                innovation accessible to everyone, one step at a time.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Methodology ──────────────────────────────── */}
      <section className="py-20 border-y border-line/[0.06]" style={{ background: 'var(--c-band)' }}>
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader
              index="02"
              kicker="Methodology"
              title="Built on proven frameworks."
              sub="NIST CSF, MITRE ATLAS, Zero Trust, ISO 27001, and OWASP: adapted for the realities of AI-native systems."
            />
          </Reveal>
          <Reveal delay={100}>
            <StepGrid steps={methodologySteps} />
          </Reveal>
        </div>
      </section>

      {/* ── Products ─────────────────────────────────── */}
      <section id="products" className="max-w-container mx-auto px-6 py-20">
        <Reveal>
          <SectionHeader
            index="03"
            kicker="Products"
            title="Infrastructure for AI security and data governance."
          />
        </Reveal>

        {/* Gateway */}
        <Reveal>
          <div className="rounded-card bg-card p-7 md:p-10 mb-6 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10 items-center">
            <div>
              <Pill variant="accent">Alpha · Early testers</Pill>
              <h3 className="text-[1.5rem] font-display font-bold text-bright mt-5 mb-3 tracking-[-0.02em]">Gateway</h3>
              <p className="text-[0.94rem] text-muted leading-relaxed mb-5">
                The control plane for your AI agents. Gateway sits between clients and every AI
                provider, authenticating with opaque virtual keys, enforcing policy, applying
                guardrails, routing traffic, and keeping a full audit trail from one endpoint.
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {['Identity & authentication', 'Opaque virtual keys', 'Policy engine', 'Guardrails & content filtering', 'Intelligent routing', 'Full audit trail'].map((b) => (
                  <li key={b} className="flex gap-2.5 text-[0.86rem] text-muted">
                    <span className="text-accent-light font-bold flex-none" aria-hidden="true">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/products/gateway" className="accent-link text-[0.9rem] font-semibold text-accent-light">
                Learn more about Gateway →
              </Link>
            </div>
            <BrowserFrame
              src="/product/dashboard.png"
              alt="Gateway dashboard, virtual keys, request volume, token usage, and guardrails at a glance"
              url="gateway.underfit.io/dashboard"
            />
          </div>
        </Reveal>

        {/* Data Fabric */}
        <Reveal>
          <div className="rounded-card bg-card p-7 md:p-10 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10 items-center">
            <div>
              <Pill variant="default">Coming soon · Alpha waitlist</Pill>
              <h3 className="text-[1.5rem] font-display font-bold text-bright mt-5 mb-3 tracking-[-0.02em]">Data Fabric</h3>
              <p className="text-[0.94rem] text-muted leading-relaxed mb-5">
                One intelligence layer for every data source. Data Fabric unifies tickets, CRM,
                inventory, ERP, and internal systems into a single AI-ready layer, actionable
                insight for every level of your organization, from managers to executives.
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {['Multi-source connectors', 'Canonical data models', 'AI-ready views & APIs', 'Reduced hallucinations', 'Lineage & governance'].map((b) => (
                  <li key={b} className="flex gap-2.5 text-[0.86rem] text-muted">
                    <span className="text-accent-light font-bold flex-none" aria-hidden="true">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/products/data-fabric" className="accent-link text-[0.9rem] font-semibold text-accent-light">
                Learn more about Data Fabric →
              </Link>
            </div>
            <FabricLayer />
          </div>
        </Reveal>
      </section>

      {/* ── Services preview ─────────────────────────── */}
      <section className="py-20 border-t border-line/[0.06]" style={{ background: 'var(--c-band)' }}>
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader
              index="04"
              kicker="Services"
              title="Got an idea? Ship it safely."
              sub="Our services help you design, build, and secure AI solutions from concept to production."
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="rounded-card-md bg-card p-6 h-full">
                  <h3 className="text-[1rem] font-semibold text-ink mb-2 tracking-[-0.01em]">{s.title}</h3>
                  <p className="text-[0.86rem] text-muted leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10">
              <Link
                href="/services"
                className="inline-block px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold bg-cta-gradient text-accent-on hover:shadow-accent-glow transition-shadow"
              >
                Explore our services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
