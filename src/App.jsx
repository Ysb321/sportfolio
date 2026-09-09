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
import { useRevealObserver } from './hooks/hooks'
import { useTheme } from './hooks/useTheme'

const SECTION_IDS = ['about', 'expertise', 'skills', 'experience', 'projects', 'contact']

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
        <Expertise />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer theme={theme} setTheme={setTheme} auto={auto} setAuto={setAuto} />
      <ToTop />
    </>
  )
}
