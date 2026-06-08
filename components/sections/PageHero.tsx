import Eyebrow from '@/components/ui/Eyebrow'
import Link from 'next/link'

interface PageHeroProps {
  eyebrow?: string
  eyebrowVariant?: 'default' | 'accent'
  title: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function PageHero({
  eyebrow,
  eyebrowVariant = 'default',
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="max-w-container mx-auto px-6 pt-20 pb-14">
      {eyebrow && <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow>}
      <h1 className="text-display font-bold text-ink mb-5" style={{ maxWidth: '16ch' }}>
        {title}
      </h1>
      {description && (
        <p className="text-[1.08rem] text-muted leading-[1.65] max-w-[60ch]">{description}</p>
      )}
      {(primaryCta || secondaryCta) && (
        <div className="flex flex-wrap gap-3.5 mt-7">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="px-5 py-3 rounded-full text-[0.9rem] font-semibold bg-accent text-accent-on transition-all hover:bg-accent-strong shadow-accent-glow"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="px-5 py-3 rounded-full text-[0.9rem] font-semibold bg-white/[0.03] text-ink border border-white/[0.14] transition-all hover:bg-white/[0.06] hover:border-white/[0.22]"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      )}
    </section>
  )
}
