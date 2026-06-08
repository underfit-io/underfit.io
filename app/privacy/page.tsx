import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy — underfit',
  description: 'underfit Privacy Policy.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: June 2026"
      />
      <section className="max-w-container mx-auto px-6 pb-20">
        <div
          className="max-w-2xl rounded-card p-8 text-[0.95rem] text-muted leading-[1.75] space-y-6"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p>
            This privacy policy describes how underfit (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, and protects information you share with us through this website or any of our products and services.
          </p>
          <div>
            <h2 className="text-[1rem] font-semibold text-ink mb-2">Information we collect</h2>
            <p>We collect information you provide directly — name, email address, and message content when you use our contact form or sign up for early access.</p>
          </div>
          <div>
            <h2 className="text-[1rem] font-semibold text-ink mb-2">How we use it</h2>
            <p>We use your information solely to respond to your inquiry, onboard you as a product tester, or deliver consulting services. We do not sell or share your data with third parties for marketing purposes.</p>
          </div>
          <div>
            <h2 className="text-[1rem] font-semibold text-ink mb-2">Data retention</h2>
            <p>We retain your information only as long as needed to maintain our relationship or fulfill legal obligations. You may request deletion at any time by emailing info@underfit.io.</p>
          </div>
          <div>
            <h2 className="text-[1rem] font-semibold text-ink mb-2">Contact</h2>
            <p>For privacy-related questions or requests, email <a href="mailto:info@underfit.io" className="text-accent hover:underline">info@underfit.io</a>.</p>
          </div>
          <p className="text-[0.82rem] text-muted-2 pt-4 border-t border-white/[0.06]">
            This is a summary document. A full legal privacy policy will be published ahead of our general availability launch.
          </p>
        </div>
      </section>
    </>
  )
}
