import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'minimal-productivity-app',
    title: 'Minimal Productivity App',
    role: 'Full Stack Developer',
    description:
      'A modern productivity platform designed to help users build consistent habits through a minimalist experience. Built from scratch using modern software engineering principles and continuously evolving as a real-world product.',
    features: [
      'Daily task management',
      'Habit streaks',
      'Pomodoro timer',
      'Time tracking',
      'Productivity analytics',
      'Project organization',
      'Responsive UI',
    ],
    impact:
      'Designed as a long-term SaaS product with a strong focus on scalability, maintainability, performance, and user experience.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript',
      'REST APIs',
      'Git',
    ],
    image: '/projects/productivity-app.jpeg',
imageAlt: 'Minimal Productivity App dashboard preview',
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
      'React',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript',
      'Git',
    ],
    image: '/projects/turbgen.jpeg',
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
      'React',
      'TypeScript',
      'Node.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Git',
    ],
    image: '/projects/vturb-marketing-website.jpeg',
    imageAlt: 'VTurb marketing website preview',
    liveUrl: 'https://www.vturb.com/',
  },
]