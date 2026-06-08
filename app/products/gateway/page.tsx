import type { Metadata } from 'next'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import FeatureGrid from '@/components/sections/FeatureGrid'

export const metadata: Metadata = {
  title: 'Gateway — AI Control Plane | underfit',
  description:
    'Gateway is the control plane for your AI agents. Virtual keys, policy enforcement, guardrails, provider routing, and a full audit trail — all from one endpoint.',
}

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 28px 70px rgba(0,0,0,0.44)',
}

const stats = [
  {
    value: '50%',
    label: 'Employees use AI tools not sanctioned by their employer — shadow AI operating outside IT visibility.',
    source: 'ISC2, 2025',
    sourceUrl: 'https://community.isc2.org/t5/Industry-News/Shadow-AI-on-the-Rise-50-of-Employees-Using-Unapproved-AI-Tools/td-p/79019',
  },
  {
    value: '25%',
    label: 'Organizations with fully implemented AI governance programs — despite 88% reporting active AI use.',
    source: 'Multiple surveys, 2025',
    sourceUrl: 'https://www.knostic.ai/blog/ai-governance-statistics',
  },
  {
    value: '13%',
    label: 'Organizations that reported breaches of AI models or applications in 2025.',
    source: 'IBM Cost of a Data Breach Report, 2025',
    sourceUrl: 'https://newsroom.ibm.com/2025-07-30-ibm-report-13-of-organizations-reported-breaches-of-ai-models-or-applications,-97-of-which-reported-lacking-proper-ai-access-controls',
  },
  {
    value: '97%',
    label: 'Of AI model breaches involved organizations that lacked proper AI access controls.',
    source: 'IBM Cost of a Data Breach Report, 2025',
    sourceUrl: 'https://newsroom.ibm.com/2025-07-30-ibm-report-13-of-organizations-reported-breaches-of-ai-models-or-applications,-97-of-which-reported-lacking-proper-ai-access-controls',
  },
]

const whyControlPlane = [
  {
    title: 'Growing AI Adoption',
    description: 'Every team is building with AI. Each agent needs identity management, policy enforcement, and oversight — centrally, not per-project.',
  },
  {
    title: 'Multiple Providers',
    description: 'OpenAI, Anthropic, local models, custom APIs — Gateway routes to any provider while keeping keys opaque and policies uniform.',
  },
  {
    title: 'Central Security & Observability',
    description: 'One place to enforce policies, audit interactions, detect anomalies, and maintain compliance across all AI workloads.',
  },
]

const capabilities = [
  {
    title: 'Identity & Authentication',
    description: 'Verify and authenticate every client, agent, and service connecting through Gateway.',
  },
  {
    title: 'Opaque Virtual Keys',
    description: 'Clients never see raw API keys. Gateway manages and rotates credentials securely.',
  },
  {
    title: 'Policy Engine',
    description: 'Define rules: which models, prompts, data access, rate limits, and cost controls are allowed.',
  },
  {
    title: 'Guardrails',
    description: 'Content filtering, jailbreak detection, prompt injection protection, output constraints.',
  },
  {
    title: 'Routing',
    description: 'Route requests to different providers based on policy, load, cost, or rollout strategy.',
  },
  {
    title: 'Audit Trail',
    description: 'Complete immutable logs of every interaction for compliance, forensics, and debugging.',
  },
]

const useCases = [
  {
    title: 'Secure Multi-Provider AI Apps',
    description: 'Route to OpenAI, Anthropic, or local models from one endpoint — with uniform policy and audit.',
  },
  {
    title: 'Central Control for Internal Agents',
    description: "Give every team's AI agents a single, governed entry point with identity and guardrails.",
  },
  {
    title: 'Regulated Industry Deployments',
    description: 'Healthcare, finance, defense — full audit trails, policy enforcement, and compliance-ready logging.',
  },
  {
    title: 'AI Agent Orchestration',
    description: 'Manage complex multi-agent workflows with central routing, failover, and cost controls.',
  },
]

const alphaPerks = [
  {
    title: 'Direct Influence',
    description: 'Your feedback shapes the roadmap. Early testers get direct input on features and prioritization.',
  },
  {
    title: 'Hands-On Support',
    description: 'Our team works closely with you to integrate Gateway and optimize for your use case.',
  },
  {
    title: 'Founder-Level Pricing',
    description: 'Early tester pricing is locked in for the first year of production launch.',
  },
]

export default function GatewayPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-container mx-auto px-6 pt-20 pb-14">
        <Eyebrow variant="accent">Alpha · Early testers</Eyebrow>
        <h1 className="text-display font-bold text-ink mb-5" style={{ maxWidth: '14ch' }}>
          Gateway: Your AI control plane.
        </h1>
        <p className="text-[1.08rem] text-muted leading-[1.65] max-w-[54ch] mb-7">
          Gateway sits between your clients and every AI provider. It authenticates with opaque virtual keys, enforces policy, applies guardrails, routes to the right provider, and keeps a full audit trail — from one endpoint.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Link href="/contact" className="px-5 py-3 rounded-full text-[0.9rem] font-semibold bg-accent text-accent-on transition-all hover:bg-accent-strong shadow-accent-glow">
            Request Gateway Access (Alpha)
          </Link>
          <Link href="/contact" className="px-5 py-3 rounded-full text-[0.9rem] font-semibold bg-white/[0.03] text-ink border border-white/[0.14] transition-all hover:bg-white/[0.06] hover:border-white/[0.22]">
            Talk to us about your AI stack
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

      {/* Why a control plane */}
      <section className="max-w-container mx-auto px-6 py-16">
        <div className="max-w-[640px] mx-auto text-center mb-10">
          <h2 className="text-section font-bold text-ink mb-4">Why a control plane?</h2>
          <p className="text-[1rem] text-muted leading-relaxed">
            Teams are adopting multiple AI providers and spinning up agents across the organization. Without a central control plane, security becomes fragile and observability disappears.
          </p>
        </div>
        <FeatureGrid features={whyControlPlane} />
      </section>

      {/* How Gateway works */}
      <section className="py-16" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-10">
            <h2 className="text-section font-bold text-ink">How Gateway works</h2>
          </div>
          <FeatureGrid features={capabilities} />
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-container mx-auto px-6 py-16">
        <div className="max-w-[640px] mx-auto text-center mb-10">
          <h2 className="text-section font-bold text-ink">Use cases</h2>
        </div>
        <FeatureGrid features={useCases} columns={2} />
      </section>

      {/* Alpha Program */}
      <section className="py-16" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-10">
            <h2 className="text-section font-bold text-ink mb-4">Alpha Program</h2>
            <p className="text-[1rem] text-muted leading-relaxed">
              Gateway is in alpha. We're looking for early testers who want to shape the future of AI security infrastructure.
            </p>
          </div>
          <FeatureGrid features={alphaPerks} />
          <div className="text-center mt-10">
            <Link href="/contact" className="px-6 py-3 rounded-full text-[0.9rem] font-semibold bg-accent text-accent-on transition-all hover:bg-accent-strong shadow-accent-glow">
              Become an early tester
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
