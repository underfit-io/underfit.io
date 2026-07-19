import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of the Underfit website and services.',
}

const sections = [
  {
    title: 'Use of services',
    body: 'You agree to use Underfit services in compliance with all applicable laws and regulations.',
  },
  {
    title: 'Intellectual property',
    body: 'All content, trademarks, and intellectual property on this site are owned by Underfit.',
  },
  {
    title: 'Contact',
    body: 'Questions? Reach out at info@underfit.io.',
  },
]

export default function TermsPage() {
  return (
    <section className="max-w-[760px] mx-auto px-6 pt-16 pb-24">
      <p className="text-eyebrow font-mono text-muted-2 mb-4">Legal</p>
      <h1 className="text-section font-display text-bright mb-3">Terms of Service</h1>
      <p className="text-[0.85rem] font-mono text-muted-2 mb-10">Last updated: July 2026</p>
      <div className="governed-line mb-10" aria-hidden="true" />
      <p className="text-[0.98rem] text-muted leading-[1.75] mb-10">
        These terms govern your use of the Underfit website and services. By using our site, you
        agree to these terms.
      </p>
      {sections.map((s, i) => (
        <div key={s.title} className="mb-9">
          <p className="text-eyebrow font-mono text-muted-2 mb-2">{String(i + 1).padStart(2, '0')}</p>
          <h2 className="text-[1.15rem] font-display font-bold text-ink mb-3">{s.title}</h2>
          <p className="text-[0.95rem] text-muted leading-[1.75]">{s.body}</p>
        </div>
      ))}
    </section>
  )
}
