import { Briefcase, GraduationCap } from 'lucide-react'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experience } from '@/data/experience'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'
import { experienceTranslations } from '@/i18n/experienceTranslations'

export function Experience() {
  const { language } = useLanguage()
  const pt = language === 'pt-BR'
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-28"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow={pt ? translations.experience.eyebrow : "04 · Timeline"}
          title={pt ? translations.experience.title : "Experience & education"}
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
                      {pt ? experienceTranslations[entry.id as keyof typeof experienceTranslations]?.period ?? entry.period : entry.period}
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

                  {pt ? experienceTranslations[entry.id as keyof typeof experienceTranslations]?.role ?? entry.role : entry.role}
                </p>

                <p className="mt-3 max-w-2xl text-balance text-sm leading-relaxed text-ink-muted">
                  {pt ? experienceTranslations[entry.id as keyof typeof experienceTranslations]?.description ?? entry.description : entry.description}
                </p>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  )
}