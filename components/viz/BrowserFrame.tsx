interface BrowserFrameProps {
  src: string
  alt: string
  /** URL shown in the fake address bar */
  url?: string
  className?: string
}

/**
 * Product screenshot in a minimal browser chrome. Screenshots live in
 * /public/product/ (dark UI) with light-theme captures in /public/product/light/.
 * The visible image follows the site theme via the .theme-dark-only /
 * .theme-light-only utilities in globals.css.
 */
export default function BrowserFrame({ src, alt, url = 'gateway.underfit.io', className = '' }: BrowserFrameProps) {
  const lightSrc = src.replace('/product/', '/product/light/')
  return (
    <figure
      className={`rounded-card overflow-hidden border border-line/[0.09] shadow-card ${className}`}
      style={{ background: 'var(--c-surface)' }}
    >
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-line/[0.07]" style={{ background: 'var(--c-surface-2)' }}>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-line/[0.12]" />
          <span className="w-2.5 h-2.5 rounded-full bg-line/[0.12]" />
          <span className="w-2.5 h-2.5 rounded-full bg-line/[0.12]" />
        </div>
        <span className="flex-1 max-w-[280px] mx-auto text-center text-[0.7rem] font-mono text-muted-2 bg-line/[0.04] rounded-md px-3 py-1 truncate">
          {url}
        </span>
        <span className="w-[46px]" aria-hidden="true" />
      </div>
      <img src={src} alt={alt} className="theme-dark-only block w-full h-auto" loading="lazy" />
      <img src={lightSrc} alt={alt} className="theme-light-only block w-full h-auto" loading="lazy" />
    </figure>
  )
}
