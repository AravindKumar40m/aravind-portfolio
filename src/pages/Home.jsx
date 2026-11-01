import { useEffect } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  useEffect(() => {
    document.title = 'Aravind Kumar M | Software Engineer'
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  )
}
