import type { Metadata } from 'next'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import FeatureGrid from '@/components/sections/FeatureGrid'
import CtaBand from '@/components/sections/CtaBand'

export const metadata: Metadata = {
  title: 'Consulting Services — AI Security',
  description:
    'We help startups and enterprises design, build, and secure AI solutions — from early experiments to production systems.',
}

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 28px 70px rgba(0,0,0,0.44)',
}

const stats = [
  {
    value: '1,265%',
    label: 'AI-generated phishing attacks surged since 2023.',
    source: 'Brightside AI',
    sourceUrl: 'https://www.brside.com/blog/ai-generated-phishing-vs-human-attacks-2025-risk-analysis',
  },
  {
    value: '82.6%',
    label: 'Of phishing emails now use AI for generation or obfuscation.',
    source: 'Deepstrike',
    sourceUrl: 'https://deepstrike.io/blog/ai-cyber-attack-statistics-2025',
  },
  {
    value: '$28.5B',
    label: 'AI cybersecurity market at $28.5B in 2025, growing 24% CAGR.',
    source: 'Research and Markets',
    sourceUrl: 'https://www.researchandmarkets.com/report/artificial-intelligence-based-cybersecurity',
  },
  {
    value: '87%',
    label: 'Of organizations experienced an AI-driven cyberattack in the past year.',
    source: 'Deepstrike',
    sourceUrl: 'https://deepstrike.io/blog/ai-cyber-attack-statistics-2025',
  },
]

const services = [
  {
    title: 'Secure-by-Design AI Architecture',
    description:
      'We embed security from the ground up — building threat models, risk assessments, and architecture decisions that prevent vulnerabilities before they exist. Whether you\'re designing a new AI system or hardening an existing one, we map attack surfaces using MITRE ATLAS and OWASP LLM Top 10, then design controls that hold up under real adversarial conditions.',
  },
  {
    title: 'Guardrailed LLM Applications',
    description:
      'Production LLMs need more than a system prompt. We implement multi-layer guardrails — prompt injection detection, content filtering, output constraints, PII redaction, and policy enforcement that operates at the inference layer. Your product ships securely; your users stay protected.',
  },
  {
    title: 'AI-Ready Data Pipelines',
    description:
      'Poor data quality is the silent killer of AI initiatives. We design and build unified, governed data pipelines — multi-source connectors, canonical data models, lineage tracking, and quality assurance — so your models and agents always have clean, verified data to work with.',
  },
  {
    title: 'Implementation & Enablement',
    description:
      'We don\'t just advise — we build. Hands-on implementation of Gateway, custom security controls, runbooks, and team training. We take you from zero to a secure, production-ready AI system, and leave your team equipped to maintain and evolve it independently.',
  },
]

const deliverables = [
  {
    title: 'AI Threat Models',
    description: 'Documented threat models covering your specific AI workloads, data flows, and attack surfaces — ready for compliance or internal review.',
  },
  {
    title: 'Architecture Blueprints',
    description: 'Secure-by-design architecture diagrams and decision records for AI systems, integrations, and data pipelines.',
  },
  {
    title: 'Policy & Guardrail Configs',
    description: 'Deployable Gateway policy configurations, guardrail implementations, and content filter rules tailored to your use cases.',
  },
  {
    title: 'Compliance Readiness',
    description: 'Controls mapped to SOC 2, ISO 27001, HIPAA, or GDPR requirements — giving your security team a clear compliance posture.',
  },
  {
    title: 'Runbooks & Incident Playbooks',
    description: 'Step-by-step operational runbooks and incident response playbooks for AI-specific scenarios your team can act on immediately.',
  },
  {
    title: 'Team Enablement',
    description: 'Workshops, documentation, and live sessions to upskill your engineering and security teams on AI security fundamentals and tooling.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-container mx-auto px-6 pt-20 pb-14">
        <Eyebrow variant="default">Consulting services</Eyebrow>
        <h1 className="text-display font-bold text-ink mb-5" style={{ maxWidth: '14ch' }}>
          Got an idea? Ship it securely.
        </h1>
        <p className="text-[1.08rem] text-muted leading-[1.65] max-w-[54ch] mb-7">
          We help startups and enterprises design, build, and secure AI solutions — from early experiments to production systems. Security-first, from day one.
        </p>
        <Link href="/contact" className="px-5 py-3 rounded-full text-[0.9rem] font-semibold bg-accent text-accent-on transition-all hover:bg-accent-strong shadow-accent-glow">
          Talk to us about your project
        </Link>
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

      {/* What we do */}
      <section className="max-w-container mx-auto px-6 py-16">
        <div className="max-w-[640px] mx-auto text-center mb-10">
          <h2 className="text-section font-bold text-ink mb-3">What we do</h2>
          <p className="text-[1rem] text-muted leading-relaxed">
            Four practice areas covering the full spectrum of AI security — from architecture to deployment to ongoing operations.
          </p>
        </div>
        <FeatureGrid features={services} columns={2} />
      </section>

      {/* What we provide */}
      <section className="py-16" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-10">
            <h2 className="text-section font-bold text-ink mb-3">What you walk away with</h2>
            <p className="text-[1rem] text-muted leading-relaxed">
              Concrete, actionable deliverables — not slide decks. Everything your team needs to build and operate AI securely.
            </p>
          </div>
          <FeatureGrid features={deliverables} />
        </div>
      </section>

      <CtaBand
        kicker="Get started"
        title="Have an AI idea or security concern?"
        description="We offer free initial consultations. Tell us what you're building and we'll help you figure out the right path."
        primaryCta={{ label: 'Contact us', href: '/contact' }}
        secondaryCta={{ label: 'Learn about Gateway', href: '/products/gateway' }}
      />
    </>
  )
}
