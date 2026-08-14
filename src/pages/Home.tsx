import { About } from '@/sections/About/About'
import { Contact } from '@/sections/Contact/Contact'
import { Experience } from '@/sections/Experience/Experience'
import { Hero } from '@/sections/Hero/Hero'
import { OtherProjects } from '@/sections/OtherProjects/OtherProjects'
import { Projects } from '@/sections/Projects/Projects'
import { Skills } from '@/sections/Skills/Skills'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Projects />
      <OtherProjects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
