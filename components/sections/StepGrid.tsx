interface Step {
  number: string | number
  title: string
  description: string
  outputs?: string[]
}

interface StepGridProps {
  steps: Step[]
  variant?: 'default' | 'large'
}

export default function StepGrid({ steps, variant = 'default' }: StepGridProps) {
  const cardStyle = {
    background: 'var(--c-surface)',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow-card)',
  }

  const gridClass = variant === 'large'
    ? 'grid grid-cols-1 md:grid-cols-2 gap-5'
    : 'grid grid-cols-1 sm:grid-cols-2 gap-4'

  return (
    <div className={gridClass}>
      {steps.map((step, i) => (
        <div key={i} className="rounded-card p-7" style={cardStyle}>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-8 h-8 rounded-full flex-none flex items-center justify-center text-[0.8rem] font-bold text-accent-on"
              style={{ background: 'linear-gradient(135deg, #635BFF 0%, #A259FF 100%)' }}
            >
              {String(step.number).padStart(2, '0')}
            </span>
            <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-ink">
              {step.title}
            </h3>
          </div>
          <p className="text-[0.9rem] text-muted leading-relaxed mb-0">
            {step.description}
          </p>
          {step.outputs && step.outputs.length > 0 && (
            <ul className="mt-4 flex flex-col gap-1.5">
              {step.outputs.map((o, j) => (
                <li key={j} className="flex items-start gap-2 text-[0.84rem] text-muted-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-none" />
                  {o}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
