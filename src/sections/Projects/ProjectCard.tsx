import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, TrendingUp } from 'lucide-react'

import type { Project } from '@/types'

import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'

interface ProjectCardProps {
  project: Project
  index: number
}

const ease = [0.16, 1, 0.3, 1] as const

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const reversed = index % 2 === 1

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-80px',
      }}
      transition={{
        duration: 0.6,
        ease,
      }}
      className="group grid items-center gap-8 rounded-2xl border border-border bg-bg-surface p-6 transition-colors duration-300 hover:border-ink/20 sm:p-8 lg:grid-cols-2 lg:gap-12"
    >
      {/* Image */}
      <div className={reversed ? 'lg:order-2' : ''}>
        <div className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-bg-raised p-3">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="max-h-full max-w-full rounded-lg object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? 'lg:order-1' : ''}>
        <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
          {String(index + 1).padStart(2, '0')} · {project.role}
        </span>

        <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 text-balance leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-impact/20 bg-impact/[0.06] p-3.5">
          <TrendingUp
            size={16}
            className="mt-0.5 shrink-0 text-impact"
          />

          <p className="text-sm leading-relaxed text-ink">
            {project.impact}
          </p>
        </div>

        <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-ink-muted"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech}>
              {tech}
            </Tag>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
  {project.githubUrl && (
    <Button
      href={project.githubUrl}
      variant="secondary"
      icon={<Code2 size={15} />}
    >
      GitHub
    </Button>
  )}

  {project.liveUrl && project.liveUrl !== '#' && (
    <Button
      href={project.liveUrl}
      variant="ghost"
      icon={<ArrowUpRight size={15} />}
    >
      Live App
    </Button>
  )}
</div>
      </div>
    </motion.article>
  )
}