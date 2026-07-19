import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'

export const metadata: Metadata = {
  title: 'AI Security Resources: Videos, Case Studies & Whitepapers',
  alternates: { canonical: '/resources' },
  description:
    'Videos, case studies, whitepapers, and curated research on AI security, control planes, and data governance.',
}

const upcoming = [
  {
    title: 'Videos',
    description: 'Product walkthroughs, threat-model deep dives, and build-along sessions.',
  },
  {
    title: 'Case studies',
    description: 'How real teams deploy Gateway and Data Fabric, documented with our partners.',
  },
  {
    title: 'Whitepapers',
    description: 'Our research on AI attack surfaces, control planes, and AI-ready data.',
  },
]

const readingList = [
  { title: 'IBM Cost of a Data Breach Report 2025', domain: 'ibm.com', url: 'https://www.ibm.com/reports/data-breach' },
  { title: 'McKinsey: The State of AI 2025', domain: 'mckinsey.com', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
  { title: 'Gartner: Worldwide AI Spending Forecast 2026', domain: 'gartner.com', url: 'https://www.gartner.com/en/newsroom/press-releases/2026-1-15-gartner-says-worldwide-ai-spending-will-total-2-point-5-trillion-dollars-in-2026' },
  { title: 'Gartner: Lack of AI-Ready Data Puts AI Projects at Risk', domain: 'gartner.com', url: 'https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk' },
  { title: 'ISC2: Shadow AI Report 2025', domain: 'isc2.org', url: 'https://community.isc2.org/t5/Industry-News/Shadow-AI-on-the-Rise-50-of-Employees-Using-Unapproved-AI-Tools/td-p/79019' },
  { title: 'Deepstrike: AI Cyberattack Statistics 2025', domain: 'deepstrike.io', url: 'https://deepstrike.io/blog/ai-cyber-attack-statistics-2025' },
  { title: 'MITRE ATLAS: Adversarial Threat Landscape for AI Systems', domain: 'atlas.mitre.org', url: 'https://atlas.mitre.org' },
  { title: 'OWASP Top 10 for LLM Applications', domain: 'owasp.org', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
  { title: 'NIST AI Risk Management Framework', domain: 'nist.gov', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
]

export default function ResourcesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 pt-16 pb-12">
        <h1 className="text-display font-display text-bright mb-5" style={{ maxWidth: '16ch' }}>
          Resources
        </h1>
        <p className="text-[1.05rem] text-muted leading-[1.65] max-w-[56ch]">
          Videos, case studies, whitepapers, and curated research on AI security, control planes,
          and data governance.
        </p>
      </section>

      {/* ── What's coming ────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {upcoming.map((u, i) => (
            <Reveal key={u.title} delay={i * 80}>
              <div className="rounded-card-md bg-card p-6 h-full">
                <p className="text-eyebrow font-mono text-muted-2 mb-3">Coming soon</p>
                <h2 className="text-[1.05rem] font-display font-bold text-ink mb-2">{u.title}</h2>
                <p className="text-[0.88rem] text-muted leading-relaxed">{u.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="rounded-card-md bg-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-[0.92rem] text-muted">
              We’re producing these with our early partners. Want them as they land?
            </p>
            <Link
              href="/contact"
              className="flex-none px-5 py-2.5 rounded-card-sm text-[0.88rem] font-semibold bg-cta-gradient text-accent-on hover:shadow-accent-glow transition-shadow"
            >
              Get early access
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Reading list ─────────────────────────────── */}
      <section className="py-20 border-t border-line/[0.06]" style={{ background: 'var(--c-band)' }}>
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <div className="mb-8">
              <p className="text-eyebrow font-mono text-muted-2 mb-3">Curated sources</p>
              <h2 className="text-section font-display text-bright mb-3">The reading list.</h2>
              <p className="text-[0.95rem] text-muted max-w-[60ch]">
                The research and frameworks our methodology, and this site’s numbers, are built on.
              </p>
            </div>
          </Reveal>
          <div className="max-w-[780px]">
            {readingList.map((r, i) => (
              <Reveal key={r.url} delay={(i % 4) * 60}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 py-4 border-b border-line/[0.06] hover:border-line/[0.14] transition-colors"
                >
                  <span className="text-[0.95rem] font-medium text-ink group-hover:text-accent-light transition-colors">
                    {r.title}
                  </span>
                  <span className="flex items-baseline gap-3 flex-none">
                    <span className="text-[0.75rem] font-mono text-muted-2">{r.domain}</span>
                    <span className="text-[0.8rem] text-muted-2 group-hover:text-accent-light group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform inline-block" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
