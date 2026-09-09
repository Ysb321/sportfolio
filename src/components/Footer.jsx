import { profile } from '../data/content'
import ThemeSwitcher from './ThemeSwitcher'

export default function Footer({ theme, setTheme, auto, setAuto }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">
          {profile.firstName}<span>.</span> <em>{profile.role}</em>
        </p>
        <p className="footer__tag">Requirements · Modelling · Analytics · Agile Delivery</p>
        <p className="footer__meta">© <span id="year">2026</span> {profile.fullName} — designed &amp; written with care. Built with React, Vite &amp; vanilla CSS.</p>
        {theme && setTheme && (
          <div className="footer__themes">
            <ThemeSwitcher theme={theme} setTheme={setTheme} auto={auto} setAuto={setAuto} />
          </div>
        )}
      </div>
    </footer>
  )
}
