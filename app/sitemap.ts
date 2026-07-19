import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://underfit.io'
  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/products/gateway', priority: 0.9 },
    { path: '/products/data-fabric', priority: 0.9 },
    { path: '/services', priority: 0.8 },
    { path: '/resources', priority: 0.6 },
    { path: '/contact', priority: 0.7 },
    { path: '/privacy', priority: 0.2 },
    { path: '/terms', priority: 0.2 },
    { path: '/responsible-ai', priority: 0.3 },
  ]
  return routes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    changeFrequency: 'monthly' as const,
    priority,
  }))
}
