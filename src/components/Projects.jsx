import { useEffect, useState } from 'react'
import { projects, education } from '../data/content'

function CaseModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${project.title} case study`}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
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
              className="case"
              key={p.id}
              onClick={() => setOpenId(p.id)}
              data-reveal
              style={{ '--d': i % 2 }}
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

        {/* Education & snapshot */}
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

      {openProject && <CaseModal project={openProject} onClose={() => setOpenId(null)} />}
    </section>
  )
}
