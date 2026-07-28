import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeading } from '@/components/ui/SectionHeading'

const facts = [
  {
    label: 'Background',
    value: 'Computer Science graduate',
  },
  {
    label: 'Focus',
    value: 'Scalable, real-world SaaS products',
  },
  {
    label: 'Approach',
    value: 'Solving business problems, not just shipping code',
  },
  {
    label: 'Right now',
    value: 'Building my own SaaS product',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-28"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="01 · About"
          title="A bit about how I work"
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <RevealOnScroll>
            <p className="text-balance text-lg leading-relaxed text-ink-muted">
              I'm a Computer Science graduate and Software Engineer who
              cares about the outcome behind the code. Most of my work
              over the past five years has gone into products used by
              thousands of real customers, which taught me to think in
              terms of business impact first and implementation second.
            </p>

            <p className="mt-5 text-balance text-lg leading-relaxed text-ink-muted">
              I'm a continuous learner by habit, not obligation, and I'm
              currently building my own SaaS product from the ground up:
              designing it, writing it, and shipping it the same way I'd
              approach it for a team serving thousands of users.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <dl className="grid gap-4 rounded-2xl border border-border bg-bg-surface p-6 sm:grid-cols-2 lg:grid-cols-1">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-border-subtle pb-4 last:border-0 last:pb-0"
                >
                  <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                    {fact.label}
                  </dt>

                  <dd className="mt-1.5 text-sm text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}