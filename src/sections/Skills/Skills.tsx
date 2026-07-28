import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { skillGroups } from '@/data/skills'

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-28"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="03 · Toolkit"
          title="Skills & tools"
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {skillGroups.map((group, index) => (
            <RevealOnScroll
              key={group.category}
              delay={index * 0.08}
            >
              <div className="h-full rounded-2xl border border-border bg-bg-surface p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                  {group.category}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag
                      key={item}
                      tone={
                        group.category === 'Frontend'
                          ? 'signal'
                          : 'default'
                      }
                    >
                      {item}
                    </Tag>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}