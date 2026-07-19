'use client'

import { useState } from 'react'
import Link from 'next/link'

const ROLES = [
  'Founder / CEO',
  'CTO / VP Engineering',
  'Security Lead',
  'Engineer',
  'Product Manager',
  'Data Engineer',
  'Other',
]

const INTERESTS = [
  'Gateway (Alpha)',
  'Data Fabric (Alpha / Coming soon)',
  'Services / Consulting',
  'Other',
]

const labelClass =
  'block font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted-2 mb-2'

const inputClass =
  'w-full px-4 py-3 rounded-card-sm bg-surface-2 border border-line/[0.07] text-[0.95rem] text-ink placeholder:text-muted-2 outline-none transition-[border-color,box-shadow] duration-200 focus:border-accent focus:shadow-[0_0_0_3px_rgba(99,91,255,0.18)]'

/**
 * Form backend. The email-style Formspree endpoint forwards submissions to
 * info@underfit.io (first submission triggers a one-time confirmation email).
 * After registering a Formspree/Basin form, replace this with the project
 * endpoint, e.g. 'https://formspree.io/f/abcdwxyz'.
 */
const FORM_ENDPOINT = 'https://formspree.io/info@underfit.io'

type Status = 'idle' | 'sending' | 'sent' | 'fallback'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const submitted = status === 'sent' || status === 'fallback'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const payload = {
      name,
      company: String(data.get('company') ?? ''),
      email: String(data.get('email') ?? ''),
      role: String(data.get('role') ?? ''),
      interest: data.getAll('interest').map(String).join(', ') || 'none',
      project: String(data.get('project') ?? ''),
      aiStack: String(data.get('aiStack') ?? '') || 'none',
      _subject: `Underfit inquiry from ${name}`,
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`form endpoint responded ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      // network or endpoint failure: fall back to a pre-filled email draft
      const body = [
        `Name: ${payload.name}`,
        `Company: ${payload.company}`,
        `Email: ${payload.email}`,
        `Role: ${payload.role}`,
        `Interest: ${payload.interest}`,
        `Project: ${payload.project}`,
        `AI stack: ${payload.aiStack}`,
      ].join('\n')
      window.location.href = `mailto:info@underfit.io?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`
      setStatus('fallback')
    }
  }

  return (
    <div>
      {submitted && (
        <div
          role="status"
          className="mb-8 flex items-start gap-3 rounded-card-sm border border-success/30 bg-success/[0.08] px-4 py-3.5"
        >
          <svg
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 flex-none text-success"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M5 8.2 7.1 10.3 11 6.2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[0.9rem] leading-relaxed text-ink">
            {status === 'sent' ? (
              <>Thanks, we got your inquiry. We reply to every genuine message within one business day.</>
            ) : (
              <>
                We couldn&apos;t reach the form service, so your email client should have opened
                with the inquiry pre-filled. If it didn&apos;t, email{' '}
                <a href="mailto:info@underfit.io" className="accent-link text-accent">
                  info@underfit.io
                </a>{' '}
                directly.
              </>
            )}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate={false}>
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company / Organization <span className="text-accent">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder="Acme Corp"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="role" className={labelClass}>
            Role <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <select
              id="role"
              name="role"
              required
              defaultValue=""
              className={`${inputClass} appearance-none pr-10 cursor-pointer`}
            >
              <option value="" disabled className="bg-surface-2 text-muted-2">
                Select a role…
              </option>
              {ROLES.map((role) => (
                <option key={role} value={role} className="bg-surface-2 text-ink">
                  {role}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-2"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6.5 8 10.5 12 6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <fieldset>
          <legend className={labelClass}>
            Interest <span className="normal-case tracking-normal">(select all that apply)</span>
          </legend>
          <div className="flex flex-col gap-2.5">
            {INTERESTS.map((opt) => (
              <label
                key={opt}
                className="flex cursor-pointer items-center gap-3 rounded-card-sm border border-line/[0.07] bg-surface-2 px-4 py-3 transition-colors hover:border-line/[0.14] has-[:checked]:border-accent/50"
              >
                <input
                  type="checkbox"
                  name="interest"
                  value={opt}
                  className="h-4 w-4 flex-none accent-accent"
                />
                <span className="text-[0.9rem] text-ink">{opt}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="project" className={labelClass}>
            Tell us about your project <span className="text-accent">*</span>
          </label>
          <textarea
            id="project"
            name="project"
            required
            rows={5}
            placeholder="What are you building? What security challenges are you facing?"
            className={`${inputClass} resize-y`}
          />
        </div>

        <div>
          <label htmlFor="aiStack" className={labelClass}>
            Current AI stack <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <textarea
            id="aiStack"
            name="aiStack"
            rows={3}
            placeholder="E.g., OpenAI API, Claude, local LLaMA, vector DB…"
            className={`${inputClass} resize-y`}
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="privacy"
            required
            className="mt-0.5 h-4 w-4 flex-none accent-accent"
          />
          <span className="text-[0.85rem] text-muted">
            I agree to the{' '}
            <Link href="/privacy" className="accent-link text-accent">
              Privacy Policy
            </Link>
            . <span className="text-accent">*</span>
          </span>
        </label>

        <div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold bg-cta-gradient text-accent-on hover:shadow-accent-glow transition-shadow disabled:opacity-60 disabled:cursor-wait"
          >
            {status === 'sending' ? 'Sending…' : 'Send inquiry'}
          </button>
          <p className="mt-3 text-center text-[0.75rem] text-muted-2">
            Goes straight to the team. We reply within one business day.
          </p>
        </div>
      </form>
    </div>
  )
}
