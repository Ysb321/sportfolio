import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">
          {profile.firstName}<span>.</span> <em>{profile.role}</em>
        </p>
        <p className="footer__tag">Requirements · Modelling · Analytics · Agile Delivery</p>
        <p className="footer__meta">© <span id="year">2026</span> {profile.fullName} — designed &amp; written with care. Built with React, Vite &amp; vanilla CSS.</p>
      </div>
    </footer>
  )
}
