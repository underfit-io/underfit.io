interface EyebrowProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
}

export default function Eyebrow({ children, variant = 'default' }: EyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full text-[0.82rem] font-medium tracking-[0.01em] mb-5 ${
        variant === 'accent'
          ? 'bg-accent/[0.12] border border-accent/[0.18] text-accent'
          : 'bg-white/[0.03] border border-white/[0.14] text-muted'
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full flex-none ${
          variant === 'accent' ? 'bg-accent' : 'bg-accent'
        }`}
        style={{ boxShadow: '0 0 14px rgba(99,91,255,0.7)' }}
      />
      {children}
    </div>
  )
}
