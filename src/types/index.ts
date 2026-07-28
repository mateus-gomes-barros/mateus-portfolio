export interface Project {
  id: string
  title: string
  role: string
  period?: string
  description: string
  features: string[]
  impact: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string

  image: string
  imageAlt: string
}
  
  export interface SkillGroup {
    category: string
    items: string[]
  }
  
  export interface ExperienceItem {
    id: string
    organization: string
    role: string
    period: string
    description: string
    location?: string
    website?: string
    type: 'work' | 'education'
  }
  
  export interface SocialLink {
    label: string
    href: string
    icon: 'github' | 'linkedin' | 'mail' | 'file-text'
    external?: boolean
  }