import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'
export function Footer() {
    const { language } = useLanguage()
    const pt = language === 'pt-BR'
    const year = new Date().getFullYear()
  
    return (
      <footer className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-content flex-col items-center gap-3 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-mono text-xs text-ink-faint">
            © {year} Mateus Gomes. {pt ? translations.footer.built : 'Built with React & Tailwind CSS.'}
          </p>
  
          <p className="font-mono text-xs text-ink-faint">
            {pt ? translations.footer.rights : 'Designed & developed by Mateus Gomes. All rights reserved.'}
          </p>
        </div>
      </footer>
    )
  }