import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { otherProjects } from '@/data/otherProjects'

export function OtherProjects() {
  return (
    <section
      id="other-projects"
      className="scroll-mt-24 py-28"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="03 · Other Projects"
          title="Other projects I'm building"
          description="A selection of personal products focused on developer growth, reading, and immersive media experiences."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <RevealOnScroll
              key={project.id}
              delay={index * 0.08}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-surface transition-colors duration-300 hover:border-ink/20">
                <div className="flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-bg-raised p-3">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                    {project.role}
                  </span>

                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Tag key={technology}>
                        {technology}
                      </Tag>
                    ))}
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
