import { useEffect, useState, useRef } from 'react'
import { profile } from '../data/content'
import { useActiveSection, useScrolledPast } from '../hooks/hooks'
import { ThemeToggle } from './ThemeSwitcher'
import ThemeSwitcher from './ThemeSwitcher'

export default function Nav({ sections, theme, setTheme, auto, setAuto }) {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolledPast(30)
  const [hidden, setHidden] = useState(false)
  const active = useActiveSection(sections)
  const drawerRef = useRef(null)

  // hide on scroll-down, reveal on scroll-up
  useEffect(() => {
    let last = window.scrollY
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        if (!open) setHidden(y > 240 && y > last)
        last = y
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  const close = () => setOpen(false)

  // lock scroll + compensate scrollbar
  useEffect(() => {
    if (open) {
      const sb = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      if (sb > 0) document.body.style.paddingRight = sb + 'px'
      const nav = document.querySelector('.nav')
      if (nav && sb > 0) nav.style.paddingRight = sb + 'px'
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      const nav = document.querySelector('.nav')
      if (nav) nav.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      const nav = document.querySelector('.nav')
      if (nav) nav.style.paddingRight = ''
    }
  }, [open])

  // close on ESC
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // focus trap basic: focus first link when opened
  useEffect(() => {
    if (open) {
      const el = drawerRef.current?.querySelector('a, button')
      el?.focus()
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${hidden && !open ? 'is-hidden' : ''}`}>
        <div className="nav__inner">
          <a href="#top" className="nav__brand" onClick={close} aria-label="Sheetal Kirjawalekar — home">
            <span className="nav__mark">S<span style={{ color: 'var(--teal)' }}>.</span></span>
            <span className="nav__brand-text">
              {profile.displayName}
              <em>Business Analyst</em>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {sections.map((s) => (
              <a key={s} href={`#${s}`} className={`nav__link ${active === s ? 'is-active' : ''}`} aria-current={active === s ? 'page' : undefined}>
                {s === 'projects' ? 'Work' : s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <div className="nav__theme-desktop">
              <ThemeToggle theme={theme} setTheme={setTheme} auto={auto} setAuto={setAuto} />
            </div>
            <button
              type="button"
              className={`nav__toggle ${open ? 'is-open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`nav__backdrop ${open ? 'is-open' : ''}`}
        onClick={close}
        aria-hidden={!open}
      />

      {/* Drawer */}
      <aside
        id="mobile-drawer"
        ref={drawerRef}
        className={`nav__drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        aria-label="Mobile navigation"
        inert={!open ? true : undefined}
      >
        <div className="nav__drawer-header">
          <a href="#top" className="nav__brand" onClick={close}>
            <span className="nav__mark">S<span style={{ color: 'var(--teal)' }}>.</span></span>
            <span className="nav__brand-text">
              {profile.displayName}
              <em>Business Analyst</em>
            </span>
          </a>
          <button type="button" className="nav__drawer-close" onClick={close} aria-label="Close menu">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <nav className="nav__drawer-links" aria-label="Mobile primary">
          {sections.map((s) => (
            <a key={s} href={`#${s}`} className={`nav__drawer-link ${active === s ? 'is-active' : ''}`} onClick={close}>
              <span className="nav__drawer-link-label">{s === 'projects' ? 'Work' : s.charAt(0).toUpperCase() + s.slice(1)}</span>
              <span className="nav__drawer-link-arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </nav>

        <div className="nav__drawer-footer">
          <div className="nav__drawer-themes">
            <p className="nav__drawer-kicker">Theme • {auto ? 'Auto cycling' : 'Manual'}</p>
            <ThemeSwitcher theme={theme} setTheme={setTheme} auto={auto} setAuto={setAuto} />
          </div>
          <a href="#contact" className="btn btn--gold btn--full" onClick={close}>
            Let’s talk
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div className="nav__drawer-meta">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>·</span>
            <a href={profile.linkedinHref} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </aside>
    </>
  )
}
