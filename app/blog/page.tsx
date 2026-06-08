import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import { blogPosts } from '@/content/blog-posts'

export const metadata: Metadata = {
  title: 'Insights — AI Security, Governance & Data',
  description:
    'Short, practical notes from underfit on AI governance, identity and access management, cybersecurity, and data strategy for production teams.',
}

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 28px 70px rgba(0,0,0,0.44)',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Short, practical notes on AI control and production systems."
        description="The product is the core story. These posts support teams who want to understand how underfit thinks about governance, security, and deployment."
      />

      <section className="max-w-container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article
                className="rounded-card p-7 h-full flex flex-col transition-all duration-150 group-hover:border-white/[0.16]"
                style={cardStyle}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[0.72rem] font-medium text-muted-2"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-[1.08rem] font-semibold text-ink tracking-[-0.02em] leading-snug mb-3 group-hover:text-accent transition-colors flex-1">
                  {post.title}
                </h2>

                {/* Blurb */}
                <p className="text-[0.88rem] text-muted leading-relaxed mb-5">{post.blurb}</p>

                {/* Meta */}
                <div className="flex items-center justify-between mt-auto">
                  <time className="text-[0.78rem] text-muted-2">{formatDate(post.date)}</time>
                  <span className="text-[0.78rem] text-muted-2">{post.readingTime} read</span>
                </div>

                {/* Read more */}
                <p className="mt-4 text-[0.84rem] font-medium text-accent">Read post →</p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        kicker="Stay in the loop"
        title="Get insights on AI governance straight to your inbox."
        description="New posts on AI security, identity management, and data strategy — a few times a month, no fluff."
        primaryCta={{ label: 'Get in touch', href: '/contact' }}
        secondaryCta={{ label: 'See our products', href: '/products/gateway' }}
      />
    </>
  )
}
