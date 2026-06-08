import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Security — underfit',
  description: 'underfit security practices and disclosure policy.',
}

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="Security practices and disclosure."
        description="How we approach security in our products and what to do if you find a vulnerability."
      />
      <section className="max-w-container mx-auto px-6 pb-20">
        <div
          className="max-w-2xl rounded-card p-8 text-[0.95rem] text-muted leading-[1.75] space-y-6"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div>
            <h2 className="text-[1rem] font-semibold text-ink mb-2">Reporting a vulnerability</h2>
            <p>If you believe you've found a security vulnerability in any underfit product or infrastructure, please disclose it responsibly by emailing <a href="mailto:info@underfit.io" className="text-accent hover:underline">info@underfit.io</a> with &ldquo;Security Disclosure&rdquo; in the subject line.</p>
          </div>
          <div>
            <h2 className="text-[1rem] font-semibold text-ink mb-2">What we ask</h2>
            <ul className="flex flex-col gap-2 mt-2">
              {[
                'Give us reasonable time to investigate and remediate before public disclosure.',
                'Do not access, modify, or delete customer data as part of testing.',
                'Do not disrupt service availability.',
                'Act in good faith and do not exploit the vulnerability for personal gain.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-none" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[1rem] font-semibold text-ink mb-2">Our commitment</h2>
            <p>We will acknowledge your report within 2 business days, keep you informed of our progress, and credit you in any public disclosure if you wish.</p>
          </div>
          <div>
            <h2 className="text-[1rem] font-semibold text-ink mb-2">Product security</h2>
            <p>Gateway is designed with security as its primary function: credential isolation via virtual keys, deny-first policy evaluation, audit logging of all access, and guardrail enforcement before any AI provider call. A full security whitepaper will be published ahead of GA.</p>
          </div>
          <p className="text-[0.82rem] text-muted-2 pt-4 border-t border-white/[0.06]">
            This page will be expanded with our full security practices documentation ahead of general availability.
          </p>
        </div>
      </section>
    </>
  )
}
