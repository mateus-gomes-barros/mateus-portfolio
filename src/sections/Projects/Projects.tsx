import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'

import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-28"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="02 · Work"
          title="Featured projects"
          description="A selection of products I've built and shipped, from a personal SaaS in progress to platforms used by thousands of customers."
        />

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}