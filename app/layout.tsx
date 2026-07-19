import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import TopNav from '@/components/layout/TopNav'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Underfit | AI Security, LLM Gateway & Data Fabric',
    template: '%s | Underfit',
  },
  description:
    'Underfit builds AI security infrastructure: Gateway, an AI control plane with virtual keys, policy enforcement and guardrails for LLM apps, and Data Fabric, an AI-ready data layer for business insights.',
  metadataBase: new URL('https://underfit.io'),
  keywords: [
    'AI security',
    'LLM gateway',
    'AI control plane',
    'AI governance',
    'LLM guardrails',
    'virtual API keys',
    'data fabric',
    'AI-ready data',
    'AI audit trail',
    'prompt injection protection',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://underfit.io',
    siteName: 'Underfit',
    title: 'Underfit | AI Security, LLM Gateway & Data Fabric',
    description:
      'The control plane for enterprise AI. Virtual keys, policy enforcement, guardrails, and a full audit trail for every AI interaction, plus an AI-ready data layer.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Underfit',
      url: 'https://underfit.io',
      logo: 'https://underfit.io/logomark.svg',
      email: 'info@underfit.io',
      description:
        'AI cybersecurity and research company. We help teams design, deploy, and defend AI agents, LLM apps, and data pipelines.',
      sameAs: ['https://github.com/underfit-io', 'https://linkedin.com/company/underfit-io'],
    },
    {
      '@type': 'WebSite',
      name: 'Underfit',
      url: 'https://underfit.io',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Underfit Gateway',
      applicationCategory: 'SecurityApplication',
      operatingSystem: 'Cloud, self-hosted',
      url: 'https://underfit.io/products/gateway',
      description:
        'AI control plane that sits between clients and AI providers: opaque virtual keys, policy enforcement, guardrails, provider routing, and a full audit trail from one endpoint.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Alpha program for early testers' },
    },
  ],
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
}

const themeInit = `(function(){document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-canvas text-ink font-sans antialiased overflow-x-hidden">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="relative z-10 min-h-screen flex flex-col">
          <TopNav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
