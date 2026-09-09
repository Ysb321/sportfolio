import { about, profile } from '../data/content'
import { useCountUp } from '../hooks/hooks'

function Fact({ fact }) {
  const [ref, value] = useCountUp(fact.value)
  return (
    <div className="stat-card__row">
      <span className="stat-card__num" ref={ref}>{value}{fact.suffix}</span>
      <p>{fact.text}</p>
    </div>
  )
}

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-head">
          <p className="kicker" data-reveal>{about.kicker}</p>
          <h2 className="section-title" data-reveal style={{ '--d': 1 }}>
            {about.title[0]}<br /><em>{about.title[1]}</em>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__lead" data-reveal style={{ '--d': 1 }}>
            <p className="dropcap">{about.paragraphs[0]}</p>
            <p>{about.paragraphs[1]}</p>
            <p>{about.paragraphs[2]}</p>
            <a href={profile.resume} download="Sheetal_Kirjawalekar_Resume.pdf" className="btn btn--outline magnetic" data-reveal style={{ '--d': 2 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              One-page résumé
            </a>
          </div>

          <div className="about__cards">
            <div className="about__principles" data-reveal style={{ '--d': 2 }}>
              <h3>How I work</h3>
              <ul>
                {about.principles.map((p) => (
                  <li key={p.n}>
                    <span>{p.n}</span>
                    <div>
                      <strong>{p.title}</strong>
                      <small>{p.text}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="stat-card" data-reveal style={{ '--d': 3 }}>
              {about.facts.map((f) => <Fact key={f.text} fact={f} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
