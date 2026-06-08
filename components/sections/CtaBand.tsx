import Link from 'next/link'

interface CtaBandProps {
  kicker?: string
  title: string
  description?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function CtaBand({ kicker, title, description, primaryCta, secondaryCta }: CtaBandProps) {
  return (
    <section className="max-w-container mx-auto px-6 pb-20">
      <div
        className="rounded-card p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8"
        style={{ background: 'linear-gradient(135deg, #635BFF 0%, #A259FF 100%)', boxShadow: '0 24px 70px rgba(99,91,255,0.22)' }}
      >
        <div className="flex-1">
          {kicker && (
            <p className="text-kicker text-accent-on/60 mb-3">{kicker}</p>
          )}
          <h2 className="text-section font-bold text-accent-on mb-0" style={{ maxWidth: '24ch' }}>
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-[0.98rem] text-accent-on/70 leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-3 flex-none">
          <Link
            href={primaryCta.href}
            className="px-6 py-3 rounded-full text-[0.9rem] font-semibold bg-accent-on text-accent transition-all duration-150 hover:bg-accent-on/90 whitespace-nowrap"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="px-6 py-3 rounded-full text-[0.9rem] font-semibold bg-accent-on/[0.08] text-accent-on border border-accent-on/[0.12] transition-all duration-150 hover:bg-accent-on/[0.12] whitespace-nowrap"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
