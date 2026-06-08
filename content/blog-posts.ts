export interface BlogPost {
  slug: string
  title: string
  date: string
  blurb: string
  tags: string[]
  readingTime: string
  fullContent?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-agents-are-digital-identities',
    title: 'AI Agents Are Digital Identities — Here\'s How to Govern Them',
    date: '2026-01-15',
    blurb:
      'AI agents now outnumber human users 82:1 in enterprise environments. Without dedicated IAM controls, they become your largest unmonitored attack surface.',
    tags: ['IAM', 'AI Governance', 'Security'],
    readingTime: '6 min',
  },
  {
    slug: 'phishing-82-percent-ai',
    title: 'Why 82% of Phishing Emails Now Use AI — And What That Means for Your Stack',
    date: '2026-01-08',
    blurb:
      'AI-generated phishing attacks have surged 1,265% since 2023. Traditional signature-based detection is obsolete. Here\'s how AI-aware security changes the response.',
    tags: ['Phishing', 'AI Threats', 'Cybersecurity'],
    readingTime: '5 min',
  },
  {
    slug: 'hidden-cost-of-siloed-data',
    title: 'The Hidden Cost of Siloed Data: What SMBs Lose Every Quarter',
    date: '2025-12-28',
    blurb:
      'Data-driven companies are 23× more likely to acquire customers. For most SMBs, the gap isn\'t strategy — it\'s siloed data that no one has time to unify.',
    tags: ['Data Integration', 'SMB', 'Analytics'],
    readingTime: '5 min',
  },
  {
    slug: 'ai-ready-iam-90-days',
    title: 'AI-Ready IAM in 90 Days: A Practical Playbook for Mid-Market Teams',
    date: '2025-12-20',
    blurb:
      'Most IAM projects fail because they treat AI agents like human users. This 90-day playbook shows you how to build a governance model that accounts for non-human identities from day one.',
    tags: ['IAM', 'Playbook', 'AI Governance'],
    readingTime: '8 min',
  },
  {
    slug: 'chaos',
    title: 'The "Brittleness" Trap',
    date: '2025-12-14',
    blurb:
      'Why agentic AI fails to handle the messy, chaotic reality of production environments — and what it takes to build systems that actually survive.',
    tags: ['AI Agents', 'Production', 'Architecture'],
    readingTime: '8 min',
    fullContent: `
<h2>The "Happy Path" Fallacy</h2>
<p>Most AI agents are tested on what engineers call the "happy path" — an idealized scenario where APIs respond instantly, data is clean, and users ask clear questions. Real-world business environments, however, are defined by their chaos.</p>
<p>When an agent encounters an edge case — like a changing data format or a system outage — it often doesn't just fail; it breaks catastrophically. This <strong>"brittleness"</strong> occurs because agents lack a robust "world model." They don't understand <em>why</em> they are doing a task, only the statistical likelihood of the next step.</p>

<h2>The Hallucination "Snowball Effect"</h2>
<p>In a standard chat session, a single hallucination is annoying but manageable. In an autonomous agentic loop, it can be fatal. Because agents function sequentially (Step A → Step B → Step C), a minor error in Step A becomes the <em>ground truth</em> for Step B.</p>
<p>This leads to <strong>error propagation</strong>, where the agent confidently spirals into a state of complete delusion, compounding the initial mistake with every subsequent action. Without a human in the loop to catch that first error, the agent can waste hours of compute time or, worse, corrupt database records.</p>

<h2>The "Context Drift" Problem</h2>
<p>Humans are excellent at keeping a long-term goal in mind while dealing with short-term distractions. LLM-based agents, however, struggle with long-horizon planning. As an agent works through a complex task, the "context window" fills up with logs, tool outputs, and error messages.</p>
<p>Research shows that models suffer from <strong>"context drift"</strong> or the "lost in the middle" phenomenon, where they begin to forget the original instruction or lose track of the overarching strategy. The result: agents that get stuck in infinite loops because they've lost the thread of the narrative.</p>

<h2>Open-Ended Environments and Negative Side Effects</h2>
<p>Perhaps the most subtle failure mode is the <strong>Negative Side Effect (NSE)</strong>. In a closed game like Chess, the rules are finite. In the open world, actions have infinite ripple effects. An agent optimized to "clean a folder" might delete critical system files because no one explicitly told it <em>not</em> to.</p>
<p>Because agents lack common sense and ethical grounding, they often achieve their goals in ways that are technically correct but practically disastrous.</p>

<h2>The Integration Gap</h2>
<p>Finally, there is the boring but fatal problem of plumbing. It is easy to build an agent that works in a Python notebook. It is incredibly hard to build one that navigates legacy enterprise software — ERPs, CRMs — that wasn't built for AI. Most agents assume a clean API interface. Real-world software is messy: authentication flows, rate limits, and unstandardized data formats block the way.</p>

<h2>The Path Forward</h2>
<p>Does this mean agentic AI is a dead end? No. But it means we need to shift our mental model. The most successful implementations today aren't "fully autonomous employees." They are <strong>supervised systems</strong> — agents that handle narrow, well-defined tasks with rigorous guardrails and human oversight. Generalization will come, but not from simply making the models bigger. It will come from better cognitive architectures, memory management, and robust control planes that treat failure not as an anomaly, but as an expectation.</p>
    `,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
