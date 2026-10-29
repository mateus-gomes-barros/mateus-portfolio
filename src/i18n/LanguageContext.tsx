import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'en' | 'pt-BR'
const STORAGE_KEY = 'mateus-portfolio-language'

function detectLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'pt-BR') return saved
  } catch { /* Storage may be blocked */ }

  const preferences = navigator.languages?.length ? navigator.languages : [navigator.language]
  return preferences.some((language) => language.toLowerCase().split('-')[0] === 'pt') ? 'pt-BR' : 'en'
}

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void } | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(detectLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try { window.localStorage.setItem(STORAGE_KEY, language) } catch { /* Ignore blocked storage */ }
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
