import { useEffect, useState } from 'react'
import { profile } from '../data/content'
import { useActiveSection, useScrolledPast } from '../hooks/hooks'

const ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

export default function Nav({ sections }) {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolledPast(30)
  const [hidden, setHidden] = useState(false)
  const active = useActiveSection(sections)

  // hide on scroll-down, reveal on scroll-up
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > 240 && y > last)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${hidden && !open ? 'is-hidden' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={close} aria-label="Sheetal Kirjawalekar — home">
          <span className="nav__mark">S<span style={{ color: 'var(--teal)' }}>.</span></span>
          <span className="nav__brand-text">
            {profile.displayName}
            <em>Business Analyst</em>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {sections.map((s) => (
            <a key={s} href={`#${s}`} className={`nav__link ${active === s ? 'is-active' : ''}`} onClick={close}>
              {s === 'projects' ? 'Work' : s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href={profile.resume} download="Sheetal_Kirjawalekar_Resume.pdf" className="btn btn--gold btn--sm magnetic">
            {ICON}
            <span>Résumé</span>
          </a>
          <button
            className={`nav__toggle ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
