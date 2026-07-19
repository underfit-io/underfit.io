import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Underfit collects, uses, and protects your personal information.',
}

const sections = [
  {
    title: 'Information we collect',
    body: 'We collect information you provide directly to us, such as when you fill out a contact form, request access to our products, or communicate with us via email.',
  },
  {
    title: 'How we use your information',
    body: 'We use your information to respond to your inquiries, provide services, improve our products, and communicate updates about Underfit.',
  },
  {
    title: 'Data security',
    body: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.',
  },
  {
    title: 'Contact',
    body: 'Questions about this policy? Reach out at info@underfit.io.',
  },
]

export default function PrivacyPage() {
  return (
    <section className="max-w-[760px] mx-auto px-6 pt-16 pb-24">
      <p className="text-eyebrow font-mono text-muted-2 mb-4">Legal</p>
      <h1 className="text-section font-display text-bright mb-3">Privacy Policy</h1>
      <p className="text-[0.85rem] font-mono text-muted-2 mb-10">Last updated: July 2026</p>
      <div className="governed-line mb-10" aria-hidden="true" />
      <p className="text-[0.98rem] text-muted leading-[1.75] mb-10">
        Your privacy is important to us. This Privacy Policy explains how Underfit collects, uses,
        and protects your personal information when you use our website and services.
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
