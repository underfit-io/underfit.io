interface CalloutProps {
  children: React.ReactNode
  className?: string
}

export default function Callout({ children, className = '' }: CalloutProps) {
  return (
    <div
      className={`px-5 py-4 rounded-[16px] text-[0.95rem] leading-relaxed text-ink ${className}`}
      style={{
        background: 'rgba(99,91,255,0.07)',
        border: '1px solid rgba(99,91,255,0.18)',
      }}
    >
      {children}
    </div>
  )
}
