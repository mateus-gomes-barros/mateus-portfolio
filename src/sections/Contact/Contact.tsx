import {
    BriefcaseBusiness,
    Code2,
    FileText,
    Mail,
  } from 'lucide-react'
  import type { LucideIcon } from 'lucide-react'
  
  import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
  import { Button } from '@/components/ui/Button'
  import { socialLinks } from '@/data/socialLinks'
  import { useLanguage } from '@/i18n/LanguageContext'
  import { translations } from '@/i18n/translations'
  import type { SocialLink } from '@/types'
  
  const icons: Record<SocialLink['icon'], LucideIcon> = {
    github: Code2,
    linkedin: BriefcaseBusiness,
    mail: Mail,
    'file-text': FileText,
  }
  
  export function Contact() {
    const { language } = useLanguage()
    const pt = language === 'pt-BR'
    return (
      <section
        id="contact"
        className="scroll-mt-24 py-28"
      >
        <div className="mx-auto max-w-content px-6">
          <RevealOnScroll>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-surface px-6 py-16 text-center sm:px-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    'radial-gradient(60% 60% at 50% 0%, rgba(255,178,56,0.10) 0%, transparent 70%)',
                }}
              />
  
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                {pt ? translations.contact.eyebrow : '05 · Contact'}
              </span>
  
              <h2 className="mx-auto mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
                {pt ? translations.contact.title : "Let's build something amazing together."}
              </h2>
  
              <p className="mx-auto mt-4 max-w-md text-balance text-ink-muted">
                {pt ? translations.contact.description : "Open to new opportunities and interesting problems. Reach out and let's talk."}
              </p>
  
              <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = icons[link.icon]
  
                  return (
                    <Button
                      key={link.label}
                      href={link.href}
                      variant={
                        link.label === 'Email'
                          ? 'primary'
                          : 'secondary'
                      }
                      icon={<Icon size={16} />}
                    >
                      {pt ? (link.icon === 'mail' ? translations.contact.email : link.icon === 'file-text' ? translations.contact.resume : link.label) : link.label}
                    </Button>
                  )
                })}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    )
  }