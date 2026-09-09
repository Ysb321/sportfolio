import { contact, profile } from '../data/content'
import { IconMail, IconPhone, IconMap, IconDownload } from './Icons'

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
              <span className="contact__icon" aria-hidden="true" style={{ background: 'linear-gradient(135deg, #d9b062, #eccd8f)', color: '#fff', borderColor: 'transparent' }}>
                <IconMail width={19} height={19} />
              </span>
              <span><small>Email</small><strong>{profile.email}</strong></span>
            </a>

            <a className="contact__row" href={profile.linkedinHref} target="_blank" rel="noopener noreferrer">
              <span className="contact__icon" aria-hidden="true" style={{ background: 'linear-gradient(135deg, #0a66c2, #0e8af0)', color: '#fff', borderColor: 'transparent' }}>
                <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
              </span>
              <span><small>LinkedIn</small><strong>{profile.linkedin}</strong></span>
            </a>

            <a className="contact__row" href={`tel:${profile.phoneHref}`}>
              <span className="contact__icon" aria-hidden="true" style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: '#fff', borderColor: 'transparent' }}>
                <IconPhone width={18} height={18} />
              </span>
              <span><small>Phone</small><strong>{profile.phone}</strong></span>
            </a>

            <div className="contact__row contact__row--static">
              <span className="contact__icon" aria-hidden="true" style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)', color: '#fff', borderColor: 'transparent' }}>
                <IconMap width={18} height={18} />
              </span>
              <span><small>Location</small><strong>{profile.location}</strong></span>
            </div>

            <a href={`mailto:${profile.email}`} className="btn btn--gold btn--full" style={{ marginTop: 8 }}>
              <IconMail width={18} height={18} aria-hidden="true" />
              Send me an email
            </a>
            <a href={profile.resume} download="Sheetal_Kirjawalekar_Resume.pdf" className="btn btn--ghost btn--full">
              <IconDownload width={18} height={18} aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
