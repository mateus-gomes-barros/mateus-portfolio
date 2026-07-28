import { ImageIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

interface ProjectImagePlaceholderProps {
  label: string
  className?: string
}

/**
 * Placeholder for a project screenshot.
 * Replace it later with:
 *
 * <img src={project.image} alt={project.imageAlt} />
 */
export function ProjectImagePlaceholder({
  label,
  className,
}: ProjectImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-bg-raised',
        className,
      )}
      role="img"
      aria-label={`${label} screenshot placeholder`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgb(from var(--signal) r g b / 0.08) 0%, transparent 40%, rgb(from var(--ice) r g b / 0.06) 100%)',
        }}
      />

      <div className="relative flex flex-col items-center gap-2 text-ink-faint">
        <ImageIcon size={28} strokeWidth={1.5} />

        <span className="font-mono text-[0.7rem] tracking-wide">
          {label}
        </span>
      </div>
    </div>
  )
}