import { useRef } from 'react'
import { experience } from '../data/content'
import { useTimelineProgress } from '../hooks/hooks'

export default function Experience() {
  const timelineRef = useRef(null)
  const progress = useTimelineProgress(timelineRef)

  return (
    <section className="experience section section--dark" id="experience">
      <div className="container">
        <div className="section-head">
          <p className="kicker" data-reveal>{experience.kicker}</p>
          <h2 className="section-title" data-reveal style={{ '--d': 1 }}>
            {experience.title[0]}<br /><em>{experience.title[1]}</em>
          </h2>
        </div>

        <div className="timeline" ref={timelineRef} style={{ '--p': progress }}>
          <div className="timeline__line" aria-hidden="true">
            <span className="timeline__line-fill"></span>
          </div>

          {experience.items.map((item, i) => (
            <article className="t-item" key={item.org} data-reveal style={{ '--d': Math.min(i, 3) }}>
              <div className="t-item__dot" aria-hidden="true"></div>
              <div className="t-item__card">
                <div className="t-item__meta">
                  <span className="t-item__period">{item.period}</span>
                  <span className="t-item__type">{item.type}</span>
                </div>
                <h3 className="t-item__role">{item.role}</h3>
                <p className="t-item__org">{item.org}{item.location && <span> · {item.location}</span>}</p>
                <ul className="t-item__points">
                  {item.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
                <ul className="t-item__tags">{item.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
