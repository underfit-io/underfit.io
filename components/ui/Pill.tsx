interface PillProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'muted'
}

export default function Pill({ children, variant = 'default' }: PillProps) {
  const styles = {
    default: 'bg-line/[0.04] border border-line/[0.06] text-muted',
    accent: 'bg-accent/[0.12] border border-accent/[0.18] text-accent',
    muted: 'bg-line/[0.02] border border-line/[0.05] text-muted-2',
  }
  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[0.78rem] font-semibold ${styles[variant]}`}>
      {children}
    </span>
  )
}
