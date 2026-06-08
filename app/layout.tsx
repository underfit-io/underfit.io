import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import TopNav from '@/components/layout/TopNav'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'underfit.io',
    template: '%s | underfit.io',
  },
  description:
    'AI-powered cybersecurity, identity & access management, and data integration platforms for small and mid-sized enterprises.',
  metadataBase: new URL('https://underfit.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://underfit.io',
    siteName: 'underfit',
    title: 'underfit — AI-native security & data platforms',
    description:
      'AI-powered cybersecurity, identity & access management, and data integration platforms for small and mid-sized enterprises.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-canvas text-ink font-sans antialiased overflow-x-hidden">
        <div className="relative z-10 min-h-screen flex flex-col">
          <TopNav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
