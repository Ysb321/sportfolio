import { about } from '../data/content'
import { useCountUp } from '../hooks/hooks'
import { IconUsers, IconFlow, IconTarget, IconDoc } from './Icons'

const principleIcons = [
  <IconUsers key="u" width={14} height={14} />,
  <IconFlow key="f" width={14} height={14} />,
  <IconTarget key="t" width={14} height={14} />,
  <IconDoc key="d" width={14} height={14} />
]

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
          </div>

          <div className="about__cards">
            <div className="about__principles" data-reveal style={{ '--d': 2 }}>
              <h3>How I work</h3>
              <ul>
                {about.principles.map((p, i) => (
                  <li key={p.n}>
                    <span className="about__prin-icon" aria-hidden="true">{principleIcons[i % principleIcons.length]}</span>
                    <span className="about__prin-num">{p.n}</span>
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
