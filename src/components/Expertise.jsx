import { expertise } from '../data/content'

const icons = {
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
  ),
  flow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="8" height="5" rx="1.5"/><rect x="14" y="15" width="8" height="5" rx="1.5"/><path d="M6 9v4a2 2 0 0 0 2 2h6"/><circle cx="14" cy="15" r="1.6"/></svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><path d="M3 20h18"/></svg>
  ),
  agile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
  )
}

export default function Expertise() {
  return (
    <section className="expertise section section--tint" id="expertise">
      <div className="container">
        <div className="section-head">
          <p className="kicker" data-reveal>{expertise.kicker}</p>
          <h2 className="section-title" data-reveal style={{ '--d': 1 }}>
            {expertise.title[0]}<br /><em>{expertise.title[1]}</em>
          </h2>
        </div>

        <div className="expertise__grid">
          {expertise.cards.map((c, i) => (
            <article className="exp-card" key={c.title} data-reveal style={{ '--d': i }}>
              <div className="exp-card__icon" aria-hidden="true">{icons[c.icon]}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <ul className="exp-card__tags">{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
