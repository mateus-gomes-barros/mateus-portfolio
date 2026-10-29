import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { skillGroups } from '@/data/skills'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export function Skills() {
  const { language } = useLanguage()
  const pt = language === 'pt-BR'
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-28"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow={pt ? translations.skills.eyebrow : "04 · Toolkit"}
          title={pt ? translations.skills.title : "Skills & tools"}
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {skillGroups.map((group, index) => (
            <RevealOnScroll
              key={pt ? ({ 'Backend & Integrations': 'Backend e integrações', 'Cloud, AI & Tools': 'Nuvem, IA e ferramentas' } as Record<string, string>)[group.category] ?? group.category : group.category}
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