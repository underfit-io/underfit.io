import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import CountUp from '@/components/motion/CountUp'
import StepGrid from '@/components/sections/StepGrid'

export const metadata: Metadata = {
  title: 'AI Security Consulting & Implementation Services',
  alternates: { canonical: '/services' },
  description:
    'We help startups and enterprises design, build, and secure AI solutions, from early experiments to production systems.',
}

const stats = [
  {
    value: 1265,
    suffix: '%',
    label: 'Surge in AI-generated phishing attacks since 2023, now the top enterprise email threat.',
    source: 'Brightside AI, 2025',
    sourceUrl: 'https://www.brside.com/blog/ai-generated-phishing-vs-human-attacks-2025-risk-analysis',
  },
  {
    value: 87,
    suffix: '%',
    label: 'Organizations that experienced an AI-driven cyberattack in the past year.',
    source: 'Deepstrike, 2025',
    sourceUrl: 'https://deepstrike.io/blog/ai-cyber-attack-statistics-2025',
  },
  {
    value: 213,
    prefix: '$',
    suffix: 'B',
    label: 'Worldwide end-user spending on information security in 2025.',
    source: 'Gartner, 2025',
    sourceUrl: 'https://www.gartner.com/en/newsroom/press-releases/2025-07-29-gartner-forecasts-worldwide-end-user-spending-on-information-security-to-total-213-billion-us-dollars-in-2025',
  },
]

const whatWeDo = [
  {
    title: 'Secure-by-design AI architecture',
    description:
      'Design AI systems with security as a first-class concern. We build threat models, risk assessments, and architecture decisions that prevent problems before they start.',
  },
  {
    title: 'Guardrailed LLM applications',
    description:
      'Build LLM apps with prompt safety, content filtering, output constraints, and policy enforcement. We handle the guardrails; you focus on your product.',
  },
  {
    title: 'AI-ready data pipelines',
    description:
      'Unify and clean operational data for AI agents. Data modeling, multi-source connectors, quality assurance, and governance built in from day one.',
  },
  {
    title: 'Implementation & enablement',
    description:
      'Hands-on implementation of Gateway, custom security controls, runbooks, and training. We get your team from zero to secure production.',
  },
]

const process = [
  { title: 'Discover', desc: 'Goals, constraints, current stack, and risk profile.' },
  { title: 'Model & threat design', desc: 'Map AI use cases, risks, and attack surfaces.' },
  { title: 'Control plane & guardrails', desc: 'Deploy Gateway and guardrails across AI interactions.' },
  { title: 'Data fabric', desc: 'Unify data into a single AI-ready layer.' },
  { title: 'Operate & improve', desc: 'Monitoring, audits, and iteration.' },
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
    description: 'Identify AI-specific attack vectors: prompt injection, data poisoning, model inversion, and credential sprawl. Built on MITRE ATLAS and OWASP LLM Top 10.',
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

function ProcessTimeline() {
  return (
    <div className="rounded-card bg-card p-8">
      <p className="text-eyebrow font-mono text-muted-2 mb-6">Our process</p>
      <ol className="relative">
        {process.map((s, i) => (
          <Reveal key={s.title} delay={i * 120}>
            <li className="relative grid grid-cols-[40px_1fr] gap-4 pb-7 last:pb-0">
              {/* connector */}
              {i < process.length - 1 && (
                <span
                  className="absolute left-[19px] top-[40px] bottom-0 w-px bg-line/[0.1]"
                  aria-hidden="true"
                />
              )}
              <span className="w-10 h-10 rounded-full flex items-center justify-center text-[0.8rem] font-mono font-bold text-accent-light bg-accent/[0.12] border border-accent/[0.35] flex-none relative z-10">
                {i + 1}
              </span>
              <span className="pt-1.5">
                <span className="block text-[0.95rem] font-semibold text-ink mb-0.5">{s.title}</span>
                <span className="block text-[0.84rem] text-muted leading-relaxed">{s.desc}</span>
              </span>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 pt-16 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 items-start">
          <div className="lg:pt-6">
            <h1 className="text-display font-display text-bright mb-6" style={{ maxWidth: '14ch' }}>
              Got an idea? Ship it securely.
            </h1>
            <p className="text-[1.08rem] text-muted leading-[1.65] max-w-[54ch] mb-8">
              We help startups and enterprises design, build, and secure AI solutions, from early
              experiments to production systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold bg-cta-gradient text-accent-on hover:shadow-accent-glow transition-shadow"
              >
                Talk to us about your project
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold border border-line/[0.12] text-muted hover:text-ink hover:bg-line/[0.04] transition-colors"
              >
                Request a security review
              </Link>
            </div>
          </div>
          <ProcessTimeline />
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

      {/* ── What we do ───────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 py-20">
        <Reveal>
          <div className="mb-10">
            <p className="text-eyebrow font-mono text-muted-2 mb-3">What we do</p>
            <h2 className="text-section font-display text-bright">Four ways we work.</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {whatWeDo.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 80}>
              <div className="rounded-card-md bg-card p-7 h-full">
                <p className="text-eyebrow font-mono text-muted-2 mb-3">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="text-[1.1rem] font-display font-bold text-ink mb-3 tracking-[-0.01em]">{c.title}</h3>
                <p className="text-[0.9rem] text-muted leading-[1.7]">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Security methodology ─────────────────────── */}
      <section className="py-20 border-t border-line/[0.06]" style={{ background: 'var(--c-band)' }}>
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <div className="mb-10">
              <p className="text-eyebrow font-mono text-muted-2 mb-3">Security methodology</p>
              <h2 className="text-section font-display text-bright mb-4" style={{ maxWidth: '22ch' }}>
                Built on proven frameworks.
              </h2>
              <p className="text-[0.98rem] text-muted leading-relaxed max-w-[62ch]">
                NIST CSF, MITRE ATLAS, Zero Trust, ISO 27001, and OWASP: adapted for the realities
                of AI-native systems. Every engagement works through these six steps.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <StepGrid steps={methodologySteps} />
          </Reveal>
        </div>
      </section>

      {/* ── End CTA ──────────────────────────────────── */}
      <section className="py-24 border-t border-line/[0.06] text-center">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <h2 className="text-section font-display text-bright mb-4 mx-auto" style={{ maxWidth: '24ch' }}>
              Have an AI idea or security concern?
            </h2>
            <p className="text-[1rem] text-muted leading-relaxed max-w-[52ch] mx-auto mb-8">
              We offer free initial consultations. Tell us what you’re building and we’ll help you
              figure out the right path.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold bg-cta-gradient text-accent-on hover:shadow-accent-glow transition-shadow"
              >
                Contact us
              </Link>
              <Link
                href="/products/gateway"
                className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold border border-line/[0.12] text-muted hover:text-ink hover:bg-line/[0.04] transition-colors"
              >
                Learn about Gateway
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
