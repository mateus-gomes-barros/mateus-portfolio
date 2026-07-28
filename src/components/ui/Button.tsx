import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
  Ref,
} from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/utils/cn'

const buttonStyles = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-full font-medium',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-signal focus-visible:ring-offset-2',
    'focus-visible:ring-offset-bg',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary:
          'border border-ink bg-ink text-bg hover:bg-ink/90',
        secondary:
          'border border-border bg-transparent text-ink hover:border-ink/40 hover:bg-bg-raised',
        ghost:
          'border border-transparent bg-transparent text-ink-muted hover:text-ink',
      },
      size: {
        sm: 'px-4 py-1.5 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  },
)

type ButtonVariants = VariantProps<typeof buttonStyles>

function isExternalHref(href: string) {
  return /^(https?:)?\/\//.test(href)
}

interface SharedProps extends ButtonVariants {
  children: ReactNode
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  className?: string
}

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & {
    href?: undefined
    ref?: Ref<HTMLButtonElement>
  }

type ButtonAsAnchor = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> & {
    href: string
    ref?: Ref<HTMLAnchorElement>
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

function ButtonContent({
  loading,
  icon,
  iconPosition,
  children,
}: Pick<
  SharedProps,
  'loading' | 'icon' | 'iconPosition' | 'children'
>) {
  const resolvedIcon = loading ? (
    <Loader2
      size={16}
      className="animate-spin"
      aria-hidden="true"
    />
  ) : (
    icon
  )

  return (
    <>
      {resolvedIcon && iconPosition !== 'right' && resolvedIcon}
      <span>{children}</span>
      {resolvedIcon && iconPosition === 'right' && resolvedIcon}
    </>
  )
}

export function Button({
  variant,
  size,
  fullWidth,
  icon,
  iconPosition = 'left',
  loading = false,
  className,
  children,
  ref,
  ...props
}: ButtonProps) {
  const classes = cn(
    buttonStyles({
      variant,
      size,
      fullWidth,
    }),
    loading && 'cursor-wait opacity-60',
    className,
  )

  if ('href' in props && props.href) {
    const {
      href,
      onClick,
      tabIndex,
      ...anchorProps
    } = props as ButtonAsAnchor

    const external = isExternalHref(href)

    const handleClick = (
      event: MouseEvent<HTMLAnchorElement>,
    ) => {
      if (loading) {
        event.preventDefault()
        return
      }

      onClick?.(event)
    }

    return (
      <a
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-busy={loading || undefined}
        aria-disabled={loading || undefined}
        tabIndex={loading ? -1 : tabIndex}
        onClick={handleClick}
        {...anchorProps}
      >
        <ButtonContent
          loading={loading}
          icon={icon}
          iconPosition={iconPosition}
        >
          {children}
        </ButtonContent>
      </a>
    )
  }

  const {
    type = 'button',
    disabled,
    ...buttonProps
  } = props as ButtonAsButton

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes}
      {...buttonProps}
    >
      <ButtonContent
        loading={loading}
        icon={icon}
        iconPosition={iconPosition}
      >
        {children}
      </ButtonContent>
    </button>
  )
}