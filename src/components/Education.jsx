import { education } from '../data/content'

export default function Education() {
  return (
    <section className="section section--tint" id="education">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="kicker">{education.kicker}</p>
          <h2 className="section-title">
            {education.title ? (
              <>
                {education.title[0]}<br /><em>{education.title[1]}</em>
              </>
            ) : (
              <>Education &amp; <em>foundations.</em></>
            )}
          </h2>
          {education.sub && <p className="section-sub">{education.sub}</p>}
        </div>

        <div className="cred">
          <div className="cred__col" data-reveal>
            <h3 className="cred__title">Education</h3>
            <div className="cred__item">
              <div className="cred__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>
              </div>
              <div>
                <strong>{education.degree}</strong>
                <small>{education.period}</small>
              </div>
            </div>
            <p className="cred__note">{education.note}</p>
          </div>

          <div className="cred__col" data-reveal style={{ '--d': 1 }}>
            <h3 className="cred__title">Snapshot</h3>
            <ul className="snapshot">
              {education.snapshot.map((s) => (
                <li key={s.label}><span className="lbl">{s.label}</span><span className="val">{s.value}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
