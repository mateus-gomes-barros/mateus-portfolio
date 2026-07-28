import type { SocialLink } from '@/types'

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/mateus-gomes-barros',
    icon: 'github',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mateus-gomes-barros-b90863206/',
    icon: 'linkedin',
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:mateusgomesbarros2@gmail.com',
    icon: 'mail',
    external: false,
  },
  {
    label: 'Resume',
    href: '/Mateus_Gomes_Resume.pdf',
    icon: 'file-text',
    external: false,
  },
]