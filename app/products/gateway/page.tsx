import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import CountUp from '@/components/motion/CountUp'
import Pill from '@/components/ui/Pill'
import BrowserFrame from '@/components/viz/BrowserFrame'
import FlowDiagram from '@/components/viz/FlowDiagram'
import KeyExchange from '@/components/viz/KeyExchange'
import PolicyGate from '@/components/viz/PolicyGate'
import RedactionDemo from '@/components/viz/RedactionDemo'
import AuditTicker from '@/components/viz/AuditTicker'
import TokenChart from '@/components/viz/TokenChart'

export const metadata: Metadata = {
  title: 'Gateway: AI Control Plane for LLM Apps & AI Agents',
  description:
    'Gateway decides what every AI request may do before it reaches a model: policy enforcement, PII guardrails, opaque virtual keys, provider routing, and a full audit trail from one OpenAI-compatible endpoint.',
  alternates: { canonical: '/products/gateway' },
}

const stats = [
  {
    value: 13,
    suffix: '%',
    label: 'Organizations that reported breaches of AI models or applications in the past year.',
    source: 'IBM Cost of a Data Breach Report, 2025',
    sourceUrl:
      'https://newsroom.ibm.com/2025-07-30-ibm-report-13-of-organizations-reported-breaches-of-ai-models-or-applications,-97-of-which-reported-lacking-proper-ai-access-controls',
  },
  {
    value: 97,
    suffix: '%',
    label: 'Of those breached organizations lacked proper AI access controls.',
    source: 'IBM Cost of a Data Breach Report, 2025',
    sourceUrl:
      'https://newsroom.ibm.com/2025-07-30-ibm-report-13-of-organizations-reported-breaches-of-ai-models-or-applications,-97-of-which-reported-lacking-proper-ai-access-controls',
  },
  {
    value: 50,
    suffix: '%',
    label: 'Employees use unapproved AI tools at work, the shadow AI a control plane exists to end.',
    source: 'ISC2 Shadow AI Report, 2025',
    sourceUrl:
      'https://community.isc2.org/t5/Industry-News/Shadow-AI-on-the-Rise-50-of-Employees-Using-Unapproved-AI-Tools/td-p/79019',
  },
]

const whyControlPlane = [
  {
    title: 'Growing AI adoption',
    description:
      'Every team is building with AI. Each agent needs identity management, policy enforcement, and oversight, centrally, not per-project.',
  },
  {
    title: 'Multiple providers',
    description:
      'OpenAI, Anthropic, local models, custom APIs. Gateway routes to any provider while keeping keys opaque and policies uniform.',
  },
  {
    title: 'Central security & observability',
    description:
      'One place to enforce policies, audit interactions, detect anomalies, and maintain compliance across all AI workloads.',
  },
]

const useCases = [
  {
    title: 'Secure multi-provider AI apps',
    description: 'Route to OpenAI, Anthropic, or local models from one endpoint, with uniform policy and audit.',
  },
  {
    title: 'Central control for internal agents',
    description: 'Give every team’s AI agents a single, governed entry point with identity and guardrails.',
  },
  {
    title: 'Regulated industry deployments',
    description: 'Healthcare, finance, defense: full audit trails, policy enforcement, and compliance-ready logging.',
  },
  {
    title: 'AI agent orchestration',
    description: 'Manage complex multi-agent workflows with central routing, failover, and cost controls.',
  },
]

const alphaProgram = [
  {
    title: 'Direct influence',
    description: 'Your feedback shapes the roadmap. Early testers get direct input on features and prioritization.',
  },
  {
    title: 'Hands-on support',
    description: 'Our team works closely with you to integrate Gateway and optimize for your use case.',
  },
  {
    title: 'Founder-level pricing',
    description: 'Early tester pricing is locked in for the first year of production launch.',
  },
]

interface Capability {
  index: string
  title: string
  description: React.ReactNode
  visual: React.ReactNode
}

const mono = (s: string) => (
  <code className="font-mono text-[0.82em] text-ink bg-line/[0.06] px-1.5 py-0.5 rounded">{s}</code>
)

function CapabilityBand({ cap, flip }: { cap: Capability; flip: boolean }) {
  return (
    <Reveal>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center py-12 border-t border-line/[0.06] ${
          flip ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div>
          <p className="text-eyebrow font-mono text-muted-2 mb-3">{cap.index}</p>
          <h3 className="text-[1.35rem] font-display font-bold text-bright tracking-[-0.02em] mb-3">{cap.title}</h3>
          <p className="text-[0.94rem] text-muted leading-[1.7] max-w-[52ch]">{cap.description}</p>
        </div>
        <div>{cap.visual}</div>
      </div>
    </Reveal>
  )
}

export default function GatewayPage() {
  const capabilities: Capability[] = [
    {
      index: '01 / policy',
      title: 'Policy engine',
      description: (
        <>
          The decision happens before the action does. Fine-grained allow/deny rules by principal,
          action, and resource; deny overrides allow, and the default is deny. Test any rule
          against live traffic with the built-in simulator before you enforce it.
        </>
      ),
      visual: <PolicyGate />,
    },
    {
      index: '02 / guardrails',
      title: 'Guardrails & content filtering',
      description: (
        <>
          PII detection and masking on outbound prompts, model restrictions, and content controls,
          all enforced at the gateway instead of left to each app. What reaches the provider is
          clean by construction.
        </>
      ),
      visual: <RedactionDemo />,
    },
    {
      index: '03 / identity',
      title: 'Opaque virtual keys',
      description: (
        <>
          Every caller is someone Gateway knows. Clients authenticate with {mono('sk-gw-*')}{' '}
          virtual keys while real provider credentials stay server-side, vaulted and rotated. They
          never ship in a client, a repo, or a prompt. Each key carries its own model scope, token
          budget, and rate limits.
        </>
      ),
      visual: <KeyExchange />,
    },
    {
      index: '04 / routing',
      title: 'Intelligent routing',
      description: (
        <>
          One OpenAI-compatible endpoint, {mono('POST /v1/chat/completions')}, in front of OpenAI,
          Anthropic, Gemini, Groq, Together AI, AWS Bedrock, and Ollama. Route by policy, cost, or
          rollout strategy without touching client code.
        </>
      ),
      visual: <FlowDiagram variant="gateway" />,
    },
    {
      index: '05 / audit',
      title: 'Full audit trail',
      description: (
        <>
          Every request, verdict, and administrative action is logged: who called what model, with
          which key, under which policy, and what the guardrails did about it. Compliance,
          forensics, and debugging read from the same record.
        </>
      ),
      visual: <AuditTicker />,
    },
    {
      index: '06 / analytics',
      title: 'Usage analytics & budgets',
      description: (
        <>
          Prompt and completion tokens tracked per provider and per key. Set soft and hard
          budgets; a key that hits its hard limit stops spending your money, automatically.
        </>
      ),
      visual: (
        <div className="rounded-card border border-line/[0.07] bg-surface p-6">
          <TokenChart />
        </div>
      ),
    },
  ]

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 pt-16 pb-10">
        <div className="max-w-[720px]">
          <Pill variant="accent">Alpha · Early testers</Pill>
          <h1 className="text-display font-display text-bright mt-6 mb-6" style={{ maxWidth: '15ch' }}>
            Control every AI action. Before it happens.
          </h1>
          <p className="text-[1.08rem] text-muted leading-[1.65] max-w-[58ch] mb-8">
            Gateway is the control plane in front of every AI provider you use. It decides what
            each request may do before it happens: which policy applies, what gets masked, who is
            really calling, where it routes, and what gets logged. One endpoint; every action
            governed.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold bg-cta-gradient text-accent-on hover:shadow-accent-glow transition-shadow"
            >
              Request Gateway access (alpha)
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
          <div className="mt-10">
            <BrowserFrame
              src="/product/dashboard.png"
              alt="Gateway dashboard, virtual keys, request volume, tokens by provider, and guardrails at a glance"
              url="gateway.underfit.io/dashboard"
            />
          </div>
        </Reveal>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <section className="border-y border-line/[0.06]" style={{ background: 'var(--c-band)' }}>
        <div className="max-w-container mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="rounded-card-md p-5 h-full bg-card">
                  <p className="text-[2rem] font-display font-bold leading-none tracking-[-0.03em] text-accent-light mb-3">
                    <CountUp to={s.value} suffix={s.suffix} />
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

      {/* ── Why a control plane ──────────────────────── */}
      <section className="max-w-container mx-auto px-6 py-20">
        <Reveal>
          <div className="mb-10">
            <p className="text-eyebrow font-mono text-muted-2 mb-3">Why a control plane</p>
            <h2 className="text-section font-display text-bright mb-4" style={{ maxWidth: '22ch' }}>
              Without one, AI security is fragile and observability disappears.
            </h2>
            <p className="text-[0.98rem] text-muted leading-relaxed max-w-[62ch]">
              Teams are adopting multiple AI providers and spinning up agents across the
              organization. Per-project security doesn’t scale past the second team.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {whyControlPlane.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="rounded-card-md bg-card p-6 h-full">
                <h3 className="text-[1rem] font-semibold text-ink mb-2">{c.title}</h3>
                <p className="text-[0.88rem] text-muted leading-relaxed">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── How Gateway works ────────────────────────── */}
      <section className="py-20 border-t border-line/[0.06]" style={{ background: 'var(--c-band)' }}>
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <div className="mb-4">
              <p className="text-eyebrow font-mono text-muted-2 mb-3">How Gateway works</p>
              <h2 className="text-section font-display text-bright" style={{ maxWidth: '20ch' }}>
                Six controls. One endpoint.
              </h2>
            </div>
          </Reveal>
          {capabilities.map((cap, i) => (
            <CapabilityBand key={cap.title} cap={cap} flip={i % 2 === 1} />
          ))}

          {/* Real policy UI */}
          <Reveal>
            <div className="pt-12 border-t border-line/[0.06]">
              <p className="text-eyebrow font-mono text-muted-2 mb-4">Straight from the product</p>
              <BrowserFrame
                src="/product/policies.png"
                alt="Gateway access policies, allow and deny rules across LLM, MCP, and agent capabilities, with a policy simulator"
                url="gateway.underfit.io/policies"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Use cases ────────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 py-20">
        <Reveal>
          <div className="mb-10">
            <p className="text-eyebrow font-mono text-muted-2 mb-3">Use cases</p>
            <h2 className="text-section font-display text-bright">Where Gateway fits.</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {useCases.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 80}>
              <div className="rounded-card-md bg-card p-6 h-full">
                <h3 className="text-[1rem] font-semibold text-ink mb-2">{c.title}</h3>
                <p className="text-[0.88rem] text-muted leading-relaxed">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Alpha program ────────────────────────────── */}
      <section className="py-20 border-t border-line/[0.06]" style={{ background: 'var(--c-band)' }}>
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <div className="mb-10">
              <p className="text-eyebrow font-mono text-muted-2 mb-3">Alpha program</p>
              <h2 className="text-section font-display text-bright mb-4" style={{ maxWidth: '24ch' }}>
                Early testers shape what Gateway becomes.
              </h2>
              <p className="text-[0.98rem] text-muted leading-relaxed max-w-[58ch]">
                Gateway is in alpha. We’re looking for teams who want to shape the future of AI
                security infrastructure.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {alphaProgram.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="rounded-card-md bg-card p-6 h-full">
                  <h3 className="text-[1rem] font-semibold text-ink mb-2">{c.title}</h3>
                  <p className="text-[0.88rem] text-muted leading-relaxed">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── End CTA ──────────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-section font-display text-bright mb-4 mx-auto" style={{ maxWidth: '24ch' }}>
            Ready for a control plane your AI agents can trust?
          </h2>
          <p className="text-[1rem] text-muted leading-relaxed max-w-[48ch] mx-auto mb-8">
            Request access to the Gateway alpha and start securing your AI infrastructure.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold bg-cta-gradient text-accent-on hover:shadow-accent-glow transition-shadow"
            >
              Request Gateway access
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold border border-line/[0.12] text-muted hover:text-ink hover:bg-line/[0.04] transition-colors"
            >
              Explore services for custom integrations
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
