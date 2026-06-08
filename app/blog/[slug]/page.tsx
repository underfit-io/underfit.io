import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import CtaBand from '@/components/sections/CtaBand'
import { blogPosts, getPostBySlug } from '@/content/blog-posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.blurb,
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 28px 70px rgba(0,0,0,0.44)',
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <>
      {/* Header */}
      <section className="max-w-container mx-auto px-6 pt-20 pb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[0.875rem] text-muted hover:text-ink transition-colors mb-8"
        >
          ← Back to Insights
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
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

        <h1
          className="font-bold text-ink mb-5"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.05em', maxWidth: '20ch' }}
        >
          {post.title}
        </h1>

        <p className="text-[1.05rem] text-muted leading-relaxed max-w-[58ch] mb-6">{post.blurb}</p>

        <div className="flex items-center gap-4 text-[0.82rem] text-muted-2">
          <time>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime} read</span>
          <span>·</span>
          <span>underfit team</span>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-container mx-auto px-6 pb-16">
        <div className="max-w-[720px]">
          {post.fullContent ? (
            <div
              className="prose-custom"
              style={{ color: '#b4b4ae' }}
              dangerouslySetInnerHTML={{ __html: post.fullContent }}
            />
          ) : (
            <div className="rounded-card p-10 text-center" style={cardStyle}>
              <p className="text-[0.78rem] font-semibold text-accent uppercase tracking-[0.1em] mb-3">Coming soon</p>
              <h2 className="text-[1.3rem] font-bold text-ink mb-3 tracking-[-0.03em]">
                Full article in progress
              </h2>
              <p className="text-[0.93rem] text-muted leading-relaxed max-w-[42ch] mx-auto mb-6">
                This post is in our editorial queue. Get in touch if you'd like to be notified when it's published, or if you have thoughts on this topic.
              </p>
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 rounded-full text-[0.875rem] font-semibold bg-accent text-accent-on hover:bg-accent-strong transition-colors"
              >
                Reach out
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related posts */}
      <section className="max-w-container mx-auto px-6 pb-16">
        <p className="text-kicker text-accent mb-6">More from Insights</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogPosts
            .filter((p) => p.slug !== slug)
            .slice(0, 2)
            .map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <div
                  className="rounded-card p-6 transition-all duration-150 group-hover:border-white/[0.16]"
                  style={cardStyle}
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full text-[0.7rem] font-medium text-muted-2"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-[1rem] font-semibold text-ink tracking-[-0.02em] leading-snug mb-2 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[0.84rem] text-muted-2">{p.readingTime} read</p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <CtaBand
        kicker="Liked this?"
        title="Talk to us about your AI security stack."
        description="Whether you're designing your first AI governance model or hardening an existing system, we'd like to hear about your challenge."
        primaryCta={{ label: 'Book a strategy call', href: '/contact' }}
        secondaryCta={{ label: 'See Gateway', href: '/products/gateway' }}
      />

      <style>{`
        .prose-custom h2 {
          color: #f5f5ef;
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin: 2.5rem 0 1rem;
          line-height: 1.3;
        }
        .prose-custom p {
          margin: 0 0 1.25rem;
          font-size: 1.02rem;
          line-height: 1.75;
        }
        .prose-custom strong {
          color: #f5f5ef;
          font-weight: 600;
        }
        .prose-custom ul, .prose-custom ol {
          margin: 0 0 1.25rem;
          padding-left: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .prose-custom li {
          font-size: 1rem;
          line-height: 1.65;
        }
        .prose-custom a {
          color: #7A73FF;
          text-decoration: underline;
        }
        .prose-custom a:hover {
          color: #635BFF;
        }
        .prose-custom em {
          font-style: italic;
        }
      `}</style>
    </>
  )
}
