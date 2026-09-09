import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ProgressBar, ToTop } from './components/Chrome'
import { useRevealObserver } from './hooks/hooks'
import { useTheme } from './hooks/useTheme'

const SECTION_IDS = ['about', 'experience', 'skills', 'projects', 'education', 'expertise', 'contact']

export default function App() {
  useRevealObserver()
  const { theme, setTheme, auto, setAuto } = useTheme({ autoInterval: 3800 })

  useEffect(() => {
    const y = document.getElementById('year')
    if (y) y.textContent = new Date().getFullYear()
  }, [])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <ProgressBar />
      <Nav sections={SECTION_IDS} theme={theme} setTheme={setTheme} auto={auto} setAuto={setAuto} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Expertise />
        <Contact />
      </main>
      <Footer theme={theme} setTheme={setTheme} auto={auto} setAuto={setAuto} />
      <ToTop />
    </>
  )
}
