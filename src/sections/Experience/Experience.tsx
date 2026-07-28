import { Briefcase, GraduationCap } from 'lucide-react'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-28"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="04 · Timeline"
          title="Experience & education"
        />

        <ol className="relative border-l border-border pl-8">
          {experience.map((entry, index) => (
            <RevealOnScroll
              key={entry.id}
              delay={index * 0.08}
              y={14}
            >
              <li className="mb-10 last:mb-0">
                <span
                  className={`absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border ${
                    entry.type === 'work'
                      ? 'border-signal/40 bg-bg text-signal'
                      : 'border-ice/40 bg-bg text-ice'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                </span>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {entry.organization}
                  </h3>

                  {entry.period && (
                    <span className="font-mono text-xs text-ink-faint">
                      {entry.period}
                    </span>
                  )}
                </div>

                <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
                  {entry.type === 'work' ? (
                    <Briefcase
                      size={13}
                      className="text-ink-faint"
                    />
                  ) : (
                    <GraduationCap
                      size={13}
                      className="text-ink-faint"
                    />
                  )}

                  {entry.role}
                </p>

                <p className="mt-3 max-w-2xl text-balance text-sm leading-relaxed text-ink-muted">
                  {entry.description}
                </p>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  )
}