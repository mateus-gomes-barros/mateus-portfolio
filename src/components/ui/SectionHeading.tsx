import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { cn } from '@/utils/cn'

export interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  as = 'h2',
}: SectionHeadingProps) {
  const Heading = as

  return (
    <RevealOnScroll className={cn('mb-12 max-w-2xl', className)}>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
        {eyebrow}
      </span>

      <Heading className="mt-3 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </Heading>

      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </RevealOnScroll>
  )
}