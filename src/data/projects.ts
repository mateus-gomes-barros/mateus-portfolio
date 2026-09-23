import type { Project } from '../types'

export const projects: Project[] = [
    {
      id: 'minimal-productivity-app',
      title: 'Focus — Multiplatform Productivity App',
      role: 'Full Stack Developer · Product Creator',
      description:
        'Created Focus to organize my own daily routine and make it easier to turn plans into focused work. After using it every day and refining the experience based on real needs, I expanded it into a multiplatform productivity product for web, iOS, Android, macOS, Windows, and Wear OS. Focus brings task planning, focus sessions, and progress tracking together in one connected experience.',
      features: [
        'Personalized dashboard with daily planning, priorities, upcoming tasks, and deadlines',
        'Pomodoro timer connected to tasks, with automatic focus-time tracking',
        'Project and task management with scheduling and progress tracking',
        'Goals, productivity analytics, habit streaks, and achievement badges',
        'Cross-device experience across web, mobile, desktop, and Wear OS',
        'Focus Pulse: a dedicated smartwatch timer with Android integration',
        'Responsive interfaces, language options, and platform-specific notifications',
      ],
      impact:
        'Built and continuously improved through daily personal use, evolving from a focused productivity tool into a multiplatform product with connected task management, time tracking, and device-specific experiences.',
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'Capacitor',
        'Tauri 2',
        'Kotlin',
        'Jetpack Compose',
        'Supabase',
        'REST APIs',
        'Git',
      ],
      image: '/projects/productivity-app.jpeg',
      imageAlt: 'Focus productivity app dashboard preview',
      liveUrl: 'https://pomodoro-1ktl-theta.vercel.app/',
    },

  {
    id: 'turbgen',
    title: 'TurbGen',
    role: 'Frontend Developer · Project Owner',
    description:
      'Designed and developed a platform that generates production-ready JavaScript code through a simple form-based interface, allowing VTurb customers to configure advanced video player behaviors without writing code.',
    features: [
      'Video delay generator',
      'Fullscreen behavior',
      'Dynamic forms',
      'CTA generation',
      'Custom player interactions',
    ],
    impact:
      'Adopted by nearly 200 customers within the first two months, reducing support complaints related to JavaScript implementations by approximately 40%.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript',
      'Git',
    ],
    image: '/projects/turbgen.webp',
imageAlt: 'platform that generates production-ready JavaScript',
    liveUrl: 'https://turbgen.vercel.app/',
  },

  {
    id: 'vturb-marketing-website',
    title: 'VTurb Marketing Website',
    role: 'Frontend Developer',
    description:
      "Contributed to the development of VTurb's marketing website for a SaaS platform serving more than 10,000 customers worldwide, delivering scalable features focused on customer acquisition and engagement.",
    features: [
      'AI-powered chatbot',
      'Personalized discount flows',
      'Remarketing visitor tracking',
    ],
    impact:
      'Contributed to approximately 10% higher customer retention through engagement and marketing-focused features.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Git',
    ],
    image: '/projects/vturb-marketing-website.webp',
    imageAlt: 'VTurb marketing website preview',
    liveUrl: 'https://www.vturb.com/',
  },
]