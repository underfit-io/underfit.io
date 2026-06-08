'use client'

import { useState } from 'react'
import PageHero from '@/components/sections/PageHero'

const topics = [
  'Gateway early access',
  'Data Fabric waitlist',
  'AI System Design',
  'Security & Compliance Audit',
  'AI Deployment Consulting',
  'Partnership or investment',
  'Careers',
  'Other',
]

const whatToExpect = [
  { number: '01', title: 'Response within 1 business day', description: 'We read every message and respond to every genuine inquiry.' },
  { number: '02', title: '30-minute strategy call', description: 'A focused conversation about your environment, your goals, and where we can help.' },
  { number: '03', title: 'A clear path forward', description: 'Whether it\'s early access, a consulting engagement, or an architecture review — you\'ll leave with a concrete next step.' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') || '') as string
    const email = (data.get('email') || '') as string
    const topic = (data.get('topic') || 'General') as string
    const message = (data.get('message') || '') as string
    const subject = encodeURIComponent(`${topic} — Request from ${name || email}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:info@underfit.io?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-[14px] text-[0.95rem] text-ink bg-transparent outline-none transition-all placeholder:text-muted-2 focus:ring-1 focus:ring-accent/40'
  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.10)',
  }

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about what you're building."
        description="Whether you're looking for early access to Gateway, want to discuss a consulting engagement, or just want to share what you're working on — we're interested."
      />

      <section className="max-w-container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
          {/* Form */}
          <div
            className="rounded-card p-8"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 28px 70px rgba(0,0,0,0.44)',
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(99,91,255,0.14)' }}
                >
                  <span className="text-accent text-xl">✓</span>
                </div>
                <h2 className="text-[1.3rem] font-bold text-ink mb-2 tracking-[-0.03em]">Message sent</h2>
                <p className="text-[0.92rem] text-muted max-w-xs">
                  Your email client should have opened. If not, email us directly at{' '}
                  <a href="mailto:info@underfit.io" className="text-accent hover:underline">
                    info@underfit.io
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h2 className="text-[1.2rem] font-bold text-ink tracking-[-0.03em] mb-2">Send us a message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[0.8rem] text-muted-2 mb-1.5">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[0.8rem] text-muted-2 mb-1.5">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="topic" className="block text-[0.8rem] text-muted-2 mb-1.5">Topic</label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    className={inputClass}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="" disabled>Select a topic</option>
                    {topics.map((t) => (
                      <option key={t} value={t} style={{ background: '#13161a', color: '#f5f5ef' }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[0.8rem] text-muted-2 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your stack, your challenge, and what you're hoping to accomplish..."
                    className={inputClass}
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-[0.95rem] font-semibold bg-accent text-accent-on transition-all hover:bg-accent-strong shadow-accent-glow mt-2"
                >
                  Send message
                </button>

                <p className="text-[0.75rem] text-muted-2 text-center">
                  By submitting this form, you'll open your email client with a pre-filled draft.
                </p>
              </form>
            )}
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-kicker text-accent mb-4">What to expect</p>
              <div className="flex flex-col gap-3">
                {whatToExpect.map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-4 p-5 rounded-card"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <span
                      className="w-8 h-8 rounded-full flex-none flex items-center justify-center text-[0.75rem] font-bold text-accent-on"
                      style={{ background: 'linear-gradient(135deg, #635BFF 0%, #A259FF 100%)' }}
                    >
                      {step.number}
                    </span>
                    <div>
                      <p className="text-[0.95rem] font-semibold text-ink mb-1">{step.title}</p>
                      <p className="text-[0.875rem] text-muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
