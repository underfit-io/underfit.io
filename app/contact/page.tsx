import type { Metadata } from 'next'
import Reveal from '@/components/motion/Reveal'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact: Gateway Alpha Access & AI Security Consulting',
  alternates: { canonical: '/contact' },
  description:
    'Tell us about your project and we’ll get back to you with next steps, Gateway alpha access, Data Fabric waitlist, or consulting.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 pt-16 pb-10 text-center">
        <h1 className="text-display font-display text-bright mb-5 mx-auto" style={{ maxWidth: '16ch' }}>
          Let’s make your AI stack safe.
        </h1>
        <p className="text-[1.05rem] text-muted leading-[1.65] max-w-[46ch] mx-auto">
          Tell us a bit about your project, and we’ll get back to you with next steps.
        </p>
      </section>

      {/* ── Form ─────────────────────────────────────── */}
      <section className="max-w-[560px] mx-auto px-6 pb-24">
        <Reveal>
          <ContactForm />
        </Reveal>

        {/* Alt contact */}
        <Reveal delay={120}>
          <div className="mt-12 rounded-card-md bg-card p-6">
            <h2 className="text-[1rem] font-semibold text-ink mb-2">Prefer email?</h2>
            <p className="text-[0.9rem] text-muted">
              Reach out directly at{' '}
              <a href="mailto:info@underfit.io" className="accent-link text-accent-light font-medium">
                info@underfit.io
              </a>
              . We respond to every genuine inquiry within one business day.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
