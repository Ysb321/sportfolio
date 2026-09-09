import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ProgressBar, ToTop } from './components/Chrome'
import { useRevealObserver, useMagnetic } from './hooks/hooks'

const SECTION_IDS = ['about', 'expertise', 'skills', 'experience', 'projects', 'contact']

export default function App() {
  useRevealObserver()
  useMagnetic()

  useEffect(() => {
    document.getElementById('year')?.replaceChildren(document.createTextNode(new Date().getFullYear()))
  }, [])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <ProgressBar />
      <Nav sections={SECTION_IDS} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Expertise />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ToTop />
    </>
  )
}
