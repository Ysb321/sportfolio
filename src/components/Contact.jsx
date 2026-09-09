import { contact, profile } from '../data/content'

export default function Contact() {
  return (
    <section className="contact section section--dark" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__lead" data-reveal>
            <p className="kicker">{contact.kicker}</p>
            <h2 className="contact__title">
              {contact.title[0]}<br /><em>{contact.title[1]}</em><br />{contact.title[2]}
            </h2>
            <p className="contact__sub">{contact.sub}</p>
            <span className="contact__avail"><span className="pulse-dot" aria-hidden="true"></span>{profile.availability}</span>
          </div>

          <div className="contact__card" data-reveal style={{ '--d': 1 }}>
            <a className="contact__row" href={`mailto:${profile.email}`}>
              <span className="contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
              </span>
              <span><small>Email</small><strong>{profile.email}</strong></span>
            </a>

            <a className="contact__row" href={profile.linkedinHref} target="_blank" rel="noopener noreferrer">
              <span className="contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
              </span>
              <span><small>LinkedIn</small><strong>{profile.linkedin}</strong></span>
            </a>

            <a className="contact__row" href={`tel:${profile.phoneHref}`}>
              <span className="contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <span><small>Phone</small><strong>{profile.phone}</strong></span>
            </a>

            <div className="contact__row contact__row--static">
              <span className="contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <span><small>Location</small><strong>{profile.location}</strong></span>
            </div>

            <a href={profile.resume} download="Sheetal_Kirjawalekar_Resume.pdf" className="btn btn--gold btn--full magnetic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Résumé (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
