import { useEffect, useState } from 'react'
import { projects } from '../data/content'

function CaseModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)

    // lock scroll + compensate scrollbar to prevent layout shift
    const sb = window.innerWidth - document.documentElement.clientWidth
    const prevOverflow = document.body.style.overflow
    const prevPadding = document.body.style.paddingRight
    document.body.style.overflow = 'hidden'
    if (sb > 0) document.body.style.paddingRight = sb + 'px'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPadding
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${project.title} case study`}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="document">
        <button className="modal__close" onClick={onClose} aria-label="Close case study">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <span className="modal__tag">{project.tag}</span>
        <h3 className="modal__title">{project.title}</h3>
        <p className="modal__subtitle">{project.subtitle}</p>
        <p className="modal__desc">{project.blurb}</p>

        <div className="modal__role"><strong>My role —&nbsp;</strong>{project.role}</div>

        <p className="modal__h">Modules</p>
        <div className="modal__chips">{project.modules.map((m) => <span key={m}>{m}</span>)}</div>

        {project.integrations && (
          <>
            <p className="modal__h">Integrations specified</p>
            <div className="modal__chips modal__chips--int">{project.integrations.map((m) => <span key={m}>{m}</span>)}</div>
          </>
        )}

        <p className="modal__h">What I did</p>
        <ul className="modal__highlights">
          {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>

        <p className="modal__h">Tech stack</p>
        <div className="modal__chips">{project.tech.map((t) => <span key={t}>{t}</span>)}</div>

        <div className="modal__kpis">{project.kpis.map((k) => <span key={k}>◆ {k}</span>)}</div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [openId, setOpenId] = useState(null)
  const openProject = projects.items.find((p) => p.id === openId)

  return (
    <section className="impact section" id="projects">
      <div className="container">
        <div className="section-head">
          <p className="kicker" data-reveal>{projects.kicker}</p>
          <h2 className="section-title" data-reveal style={{ '--d': 1 }}>
            {projects.title[0]}<br /><em>{projects.title[1]}</em>
          </h2>
          <p className="section-sub" data-reveal style={{ '--d': 2 }}>{projects.sub}</p>
        </div>

        <div className="impact__grid">
          {projects.items.map((p, i) => (
            <button
              type="button"
              className="case"
              key={p.id}
              onClick={() => setOpenId(p.id)}
              data-reveal
              style={{ '--d': i % 2 }}
              aria-label={`View ${p.title} case study`}
            >
              <span className="case__num" aria-hidden="true">{p.num}</span>
              <span className="case__tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <h4>{p.subtitle}</h4>
              <p>{p.blurb}</p>
              <div className="case__kpis">{p.kpis.map((k) => <span key={k}>◆ {k}</span>)}</div>
            </button>
          ))}
        </div>
      </div>

      {openProject && <CaseModal project={openProject} onClose={() => setOpenId(null)} />}
    </section>
  )
}
