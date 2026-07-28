import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const tagStyles = cva(
  [
    'inline-flex items-center rounded-md border',
    'px-2.5 py-1',
    'font-mono text-[0.7rem] leading-none tracking-tight',
    'transition-colors duration-200',
  ],
  {
    variants: {
      tone: {
        default:
          'border-border bg-bg-raised text-ink-muted',
        signal:
          'border-signal/30 bg-signal/10 text-signal',
        success:
          'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
        warning:
          'border-amber-500/30 bg-amber-500/10 text-amber-400',
        danger:
          'border-red-500/30 bg-red-500/10 text-red-400',
      },
    },
    defaultVariants: {
      tone: 'default',
    },
  },
)

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagStyles> {}

export function Tag({
  tone,
  className,
  children,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(tagStyles({ tone }), className)}
      {...props}
    >
      {children}
    </span>
  )
}