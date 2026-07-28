import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-sm text-signal">
        404
      </span>

      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">
        Page not found
      </h1>

      <p className="mt-3 max-w-sm text-ink-muted">
        The page you're looking for doesn't exist or has moved.
      </p>

      <Button
        href="/"
        variant="secondary"
        className="mt-8"
      >
        Back Home
      </Button>
    </main>
  )
}