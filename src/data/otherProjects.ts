import type { Project } from '../types'

export const otherProjects: Project[] = [
  {
    id: 'madev',
    title: 'MaDev',
    role: 'Full Stack Developer',
    description:
      'MaDev — a name combining “Mateus” and “Development” — is a developer growth platform built to answer a simple question: what should I learn next? Unlike traditional roadmaps, it tracks knowledge, practice, evidence, and professional readiness separately, combining career journeys, skills, projects, GitHub evidence, achievements, and AI-powered recommendations into a personalized development path.',
    features: [
      'Career journeys and phases',
      'Skill mastery tracking',
      'Evidence and achievements',
      'AI-powered recommendations',
      'Personalized development plans',
      'Job description analysis',
      'Web and mobile experience',
    ],
    impact:
      'Designed to turn continuous learning into measurable career progress through structured development paths, real evidence, and AI-assisted guidance.',
    technologies: [
      'Next.js',
      'React Native',
      'Expo',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'OpenAI API',
      'AI',
    ],
    image: '/projects/madev.webp',
    imageAlt: 'MaDev developer growth platform preview',
  },

  {
    id: 'music-player',
    title: 'Music Player',
    role: 'iOS Developer',
    description:
      'A personal iOS music player built to organize and enjoy a library of 1,000+ songs through an immersive everyday experience. Inspired by Apple Music and Spotify Canvas, it combines offline playback, listening statistics, smart library filters, immersive artist and album pages, and online-only animated artwork.',
    features: [
      'Offline music playback',
      '1,000+ song library',
      'Listening statistics and scrobbling',
      'Favorites and smart filters',
      'Immersive artist and album pages',
      'Online-only animated artwork',
      'iPhone and iPad support',
    ],
    impact:
      'Built to balance immersive visuals with practical daily use, keeping music available offline while avoiding unnecessary storage from animated media.',
    technologies: [
      'Swift',
      'SwiftUI',
      'iOS',
      'Xcode',
      'Offline Storage',
    ],
    image: '/projects/music-player.webp',
    imageAlt: 'Music Player iOS application preview',
  },

  {
    id: 'reading-app',
    title: 'Reading App',
    role: 'Full Stack Developer',
    description:
      'A personal reading tracker designed to bring the simplicity of my productivity tools to reading. It combines automatic book discovery, reading sessions, progress and streak tracking, statistics, a visual reading calendar, notes, achievements, and social sharing in a calm experience built for everyday use.',
    features: [
      'Automatic book discovery',
      'Reading sessions and progress tracking',
      'Streaks, goals, and statistics',
      'Visual reading calendar',
      'Notes and quotes',
      'Lock Screen reading activity',
      'High-resolution social sharing',
    ],
    impact:
      'Designed as a low-friction daily reading companion that turns long-term reading activity into a meaningful visual history across web and mobile.',
    technologies: [
      'Angular',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'AWS',
      'REST APIs',
      'Web',
      'iOS',
    ],
    image: '/projects/reading-app.webp',
    imageAlt: 'Reading App dashboard preview',
  },
]
