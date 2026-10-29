import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'
import { projectTranslations } from '@/i18n/projectTranslations'

import { ProjectCard } from './ProjectCard'

export function Projects() {
  const { language } = useLanguage()
  const pt = language === 'pt-BR'
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-28"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow={pt ? translations.projects.eyebrow : "02 · Work"}
          title={pt ? translations.projects.title : "Featured projects"}
          description="A selection of products I've built and shipped, from a personal SaaS in progress to platforms used by thousands of customers."
        />

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={pt ? { ...project, ...projectTranslations[project.id as keyof typeof projectTranslations] } : project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}