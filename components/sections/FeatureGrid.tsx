interface Feature {
  title: string
  description: string
  accent?: boolean
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3
}

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 28px 70px rgba(0,0,0,0.44)',
}

const accentCardStyle = {
  background: 'linear-gradient(135deg, #635BFF 0%, #A259FF 100%)',
  boxShadow: '0 24px 70px rgba(99,91,255,0.22)',
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridClass = columns === 2
    ? 'grid grid-cols-1 sm:grid-cols-2 gap-4'
    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'

  return (
    <div className={gridClass}>
      {features.map((f, i) => (
        <article
          key={i}
          className="rounded-card p-7"
          style={f.accent ? accentCardStyle : cardStyle}
        >
          <h3 className={`text-[1.08rem] font-semibold tracking-[-0.02em] mb-2.5 ${f.accent ? 'text-accent-on' : 'text-ink'}`}>
            {f.title}
          </h3>
          <p className={`text-[0.92rem] leading-relaxed ${f.accent ? 'text-accent-on/70' : 'text-muted'}`}>
            {f.description}
          </p>
        </article>
      ))}
    </div>
  )
}
