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

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const body = [
      `Name: ${name}`,
      `Company: ${String(data.get('company') ?? '')}`,
      `Email: ${String(data.get('email') ?? '')}`,
      `Role: ${String(data.get('role') ?? '')}`,
      `Interest: ${data.getAll('interest').map(String).join(', ') || 'none'}`,
      `Project: ${String(data.get('project') ?? '')}`,
      `AI stack: ${String(data.get('aiStack') ?? '') || 'none'}`,
    ].join('\n')
    const subject = encodeURIComponent(`Underfit inquiry from ${name}`)
    window.location.href = `mailto:info@underfit.io?subject=${subject}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
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
            Thanks. Your email client should open with the inquiry pre-filled, nothing
            is sent until you hit send. If it didn&apos;t open, email{' '}
            <a href="mailto:info@underfit.io" className="accent-link text-accent">
              info@underfit.io
            </a>{' '}
            directly.
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
            className="w-full px-6 py-3 rounded-card-sm text-[0.9rem] font-semibold bg-cta-gradient text-accent-on hover:shadow-accent-glow transition-shadow"
          >
            Send inquiry
          </button>
          <p className="mt-3 text-center text-[0.75rem] text-muted-2">
            Submitting opens your email client with a pre-filled draft, nothing is sent
            until you hit send.
          </p>
        </div>
      </form>
    </div>
  )
}
