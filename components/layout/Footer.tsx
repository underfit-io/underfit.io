import Link from 'next/link'

const productLinks = [
  { label: 'Gateway', href: '/products/gateway' },
  { label: 'Data Fabric', href: '/products/data-fabric' },
]

const serviceLinks = [
  { label: 'Consulting', href: '/services' },
  { label: 'Resources', href: '/resources' },
]

const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Security', href: '/security' },
  { label: 'Contact', href: '/contact' },
]

const sources = [
  { name: 'IBM Cost of a Data Breach Report, 2025', url: 'https://www.ibm.com/reports/data-breach' },
  { name: 'IBM: AI Model Breaches & Access Controls, 2025', url: 'https://newsroom.ibm.com/2025-07-30-ibm-report-13-of-organizations-reported-breaches-of-ai-models-or-applications,-97-of-which-reported-lacking-proper-ai-access-controls' },
  { name: 'McKinsey State of AI, 2025', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
  { name: 'Gartner: Information Security & AI Cybersecurity Spending, 2025', url: 'https://www.gartner.com/en/newsroom/press-releases/2025-07-29-gartner-forecasts-worldwide-end-user-spending-on-information-security-to-total-213-billion-us-dollars-in-2025' },
  { name: 'Gartner: Worldwide AI Spending $2.5T, 2026', url: 'https://www.gartner.com/en/newsroom/press-releases/2026-1-15-gartner-says-worldwide-ai-spending-will-total-2-point-5-trillion-dollars-in-2026' },
  { name: 'Gartner: Lack of AI-Ready Data Puts AI Projects at Risk, 2025', url: 'https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk' },
  { name: 'Gartner CxO Survey: AI Skills Gap, 2025', url: 'https://www.gartner.com/en/newsroom/press-releases/2026-05-13-gartner-predicts-by-2027-50-percent-of-enterprises-without-a-people-centric-ai-strategy-will-lose-their-top-ai-talent' },
  { name: 'ISC2: Shadow AI Report, 2025', url: 'https://community.isc2.org/t5/Industry-News/Shadow-AI-on-the-Rise-50-of-Employees-Using-Unapproved-AI-Tools/td-p/79019' },
  { name: 'Cloudera + Harvard Business Review: AI Data Readiness, 2026', url: 'https://www.cloudera.com/about/news-and-blogs/press-releases/2026-03-05-only-7-percent-of-enterprises-say-their-data-is-completely-ready-for-ai-according-to-new-report-from-cloudera-and-harvard-business-review-analytic-services-reveals.html' },
]

function LinkGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-kicker text-muted-2 mb-4">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[0.875rem] text-muted-2 hover:text-muted transition-colors duration-100"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08]" style={{ background: '#050505' }}>
      <div className="max-w-container mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-12 md:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logomark.svg" alt="" className="h-7 w-7 flex-none" />
              <span className="text-[0.97rem] font-semibold tracking-[-0.02em] text-ink">underfit</span>
            </div>
            <p className="text-[0.875rem] text-muted-2 leading-relaxed">
              Research company building AI security infrastructure for enterprises that take AI seriously.
            </p>
            <a
              href="mailto:info@underfit.io"
              className="inline-block mt-4 text-[0.875rem] text-muted hover:text-accent transition-colors"
            >
              info@underfit.io
            </a>
          </div>

          <LinkGroup title="Products" links={productLinks} />
          <LinkGroup title="Services" links={serviceLinks} />
          <LinkGroup title="Legal" links={legalLinks} />
        </div>

        {/* Sources */}
        <div className="py-6 border-b border-white/[0.06]">
          <p className="text-[0.72rem] text-muted-2 mb-2 font-medium uppercase tracking-[0.08em]">Data sources</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {sources.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.72rem] text-muted-2 hover:text-muted transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-6">
          <p className="text-[0.8rem] text-muted-2">
            © {new Date().getFullYear()} underfit. All rights reserved.
          </p>
          <p className="text-[0.72rem] text-muted-2">
            All statistics reflect 2024–2025 published research.
          </p>
        </div>
      </div>
    </footer>
  )
}
