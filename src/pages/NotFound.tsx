import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  const { language } = useLanguage()
  const pt = language === 'pt-BR'
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-sm text-signal">
        404
      </span>

      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">
        {pt ? translations.notFound.title : 'Page not found'}
      </h1>

      <p className="mt-3 max-w-sm text-ink-muted">
        {pt ? translations.notFound.description : "The page you're looking for doesn't exist or has moved."}
      </p>

      <Button
        href="/"
        variant="secondary"
        className="mt-8"
      >
        {pt ? translations.notFound.home : 'Back Home'}
      </Button>
    </main>
  )
}