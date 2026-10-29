import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import { navigationLinks } from '@/data/navigation'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useLanguage } from '@/i18n/LanguageContext'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const pt = language === 'pt-BR'
  const labels: Record<string, string> = { about: 'Sobre', projects: 'Projetos', 'other-projects': 'Outros projetos', skills: 'Habilidades', experience: 'Experiência', contact: 'Contato' }
  const switcher = <div className="flex shrink-0 items-center rounded-full border border-border bg-bg-raised/70 p-0.5" role="group" aria-label={pt ? 'Selecionar idioma' : 'Select language'}>{(['en', 'pt-BR'] as const).map((value) => <button key={value} type="button" onClick={() => setLanguage(value)} aria-pressed={language === value} className={`rounded-full px-2.5 py-1 text-xs font-mono transition-colors ${language === value ? 'bg-signal text-bg' : 'text-ink-muted hover:text-ink'}`}>{value === 'en' ? 'EN' : 'PT'}</button>)}</div>

  const activeId = useActiveSection(
    navigationLinks.map((link) => link.id),
  )

  function handleNavigate(id: string) {
    setOpen(false)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-bg"
      >
        {pt ? 'Ir para o conteúdo' : 'Skip to content'}
      </a>

      <div className="mx-auto max-w-content px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-border/80 bg-bg-surface/70 px-4 py-3 backdrop-blur-md sm:px-5">
          <a
            href="#hero"
            onClick={(event) => {
              event.preventDefault()
              handleNavigate('hero')
            }}
            className="font-display text-sm font-semibold tracking-tight text-ink"
          >
            Mateus Gomes
          </a>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label={pt ? 'Navegação principal' : 'Primary navigation'}
          >
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigate(link.id)}
                aria-current={
                  activeId === link.id ? 'page' : undefined
                }
                className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  activeId === link.id
                    ? 'text-ink'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {pt ? labels[link.id] ?? link.label : link.label}
              </button>
            ))}
          </nav>

          <div className="ml-auto mr-2 md:ml-3 md:mr-0">{switcher}</div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="rounded-lg p-2 text-ink md:hidden"
            aria-label={open ? (pt ? 'Fechar menu' : 'Close menu') : (pt ? 'Abrir menu' : 'Open menu')}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              aria-label={pt ? 'Navegação móvel' : 'Mobile navigation'}
              className="mt-2 flex flex-col gap-1 rounded-2xl border border-border/80 bg-bg-surface/95 p-3 backdrop-blur-md md:hidden"
            >
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavigate(link.id)}
                  aria-current={
                    activeId === link.id ? 'page' : undefined
                  }
                  className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    activeId === link.id
                      ? 'bg-bg-raised text-ink'
                      : 'text-ink-muted hover:bg-bg-raised hover:text-ink'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}