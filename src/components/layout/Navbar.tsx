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
  const switcher = (
    <div
      role="group"
      aria-label={pt ? 'Selecionar idioma' : 'Select language'}
      className="relative isolate flex h-10 w-[104px] shrink-0 items-center overflow-hidden rounded-[18px] border border-white/[0.16] bg-white/[0.035] p-[4px] backdrop-blur-2xl"
      style={{
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,.13), inset 0 -3px 9px rgba(0,0,0,.36), 0 3px 12px rgba(0,0,0,.18)',
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-[4px] top-[4px] z-0 h-[calc(100%-8px)] w-[calc(50%-4px)] overflow-hidden rounded-[15px] border border-white/[0.28] backdrop-blur-xl"
        initial={false}
        animate={{
          x: pt ? '100%' : '0%',
          scaleX: [1, 1.12, 0.96, 1],
          scaleY: [1, 0.92, 1.04, 1],
          borderRadius: ['15px', '13px', '17px', '15px'],
        }}
        transition={{
          x: { type: 'spring', stiffness: 290, damping: 23, mass: 0.75 },
          scaleX: { duration: 0.48, ease: 'easeInOut' },
          scaleY: { duration: 0.48, ease: 'easeInOut' },
          borderRadius: { duration: 0.48 },
        }}
        style={{
          background: 'linear-gradient(150deg, rgba(255,255,255,.30) 0%, rgba(209,236,243,.14) 38%, rgba(143,179,195,.12) 65%, rgba(255,255,255,.20) 100%)',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,.58), inset 0 -2px 3px rgba(255,255,255,.10), 0 3px 10px rgba(0,0,0,.26), 0 0 16px rgba(184,226,239,.10)',
        }}
      >
        <span className="absolute -left-2 -top-4 h-9 w-12 rotate-[-28deg] rounded-full bg-white/20 blur-[10px]" />
        <span className="absolute inset-x-2 top-[2px] h-[1px] rounded-full bg-white/50 blur-[.3px]" />
        <span className="absolute -bottom-3 right-0 h-7 w-9 rounded-full bg-signal/15 blur-lg" />
      </motion.span>
      {(['en', 'pt-BR'] as const).map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => setLanguage(value)}
          aria-pressed={language === value}
          aria-label={value === 'en' ? 'English' : 'Português'}
          className={`relative z-10 flex h-full w-1/2 items-center justify-center rounded-[14px] font-mono text-[11px] font-semibold tracking-wider transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal ${language === value ? 'text-ink drop-shadow-[0_1px_2px_rgba(0,0,0,.5)]' : 'text-ink-faint hover:text-ink-muted'}`}
        >
          {value === 'en' ? 'EN' : 'PT'}
        </button>
      ))}
    </div>
  )

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
                  {pt ? labels[link.id] ?? link.label : link.label}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}