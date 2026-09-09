import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/content'
import { IconDoc, IconLayers, IconChart, IconFlow, IconZap, IconUsers } from './Icons'

const tabIcons = {
  ba: <IconDoc width={14} height={14} />,
  agile: <IconLayers width={14} height={14} />,
  data: <IconChart width={14} height={14} />,
  docs: <IconFlow width={14} height={14} />,
  tools: <IconZap width={14} height={14} />,
  soft: <IconUsers width={14} height={14} />
}

function Panel({ tab, active }) {
  const ref = useRef(null)

  useEffect(() => {
    if (active && ref.current) ref.current.classList.add('is-in')
  }, [active])

  return (
    <div className={`skills__panel ${active ? 'is-active' : ''}`} ref={ref} role="tabpanel" hidden={!active}>
      {tab.bars && (
        <div className="skills__bars">
          {tab.bars.map((b) => (
            <div className="skillbar" key={b.name}>
              <div className="skillbar__head">
                <span>{b.name}</span>
                <span className="skillbar__pct">{b.level}%</span>
              </div>
              <div className="skillbar__track">
                <div className="skillbar__fill" style={{ '--lvl': `${b.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab.pills && (
        <div className={`skills__pills ${tab.pillsBig ? 'skills__pills--big' : ''}`}>
          {tab.pills.map((p) => <span key={p}>{p}</span>)}
        </div>
      )}

      {tab.tools && (
        <div className="toolgrid">
          {tab.tools.map((t) => (
            <div className="tool" key={t.name}>
              <span className="tool__name">{t.name}</span>
              <span className="tool__lvl">{t.level}</span>
            </div>
          ))}
        </div>
      )}

      {tab.note && (
        <div className="skills__note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <p>{tab.note.text}</p>
        </div>
      )}
    </div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skills.tabs[0].id)

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-head">
          <p className="kicker" data-reveal>{skills.kicker}</p>
          <h2 className="section-title" data-reveal style={{ '--d': 1 }}>
            {skills.title[0]}<br /><em>{skills.title[1]}</em>
          </h2>
          <p className="section-sub" data-reveal style={{ '--d': 2 }}>{skills.sub}</p>
        </div>

        <div className="skills__tabs" role="tablist" aria-label="Skill categories" data-reveal>
          {skills.tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`skills__tab ${activeTab === t.id ? 'is-active' : ''}`}
              role="tab"
              aria-selected={activeTab === t.id}
              onClick={() => setActiveTab(t.id)}
            >
              <span className="skills__tab-icon" aria-hidden="true">{tabIcons[t.id]}</span>
              {t.label}
            </button>
          ))}
        </div>

        <div className="skills__stage" data-reveal style={{ '--d': 1 }}>
          {skills.tabs
            .filter((t) => t.id === activeTab)
            .map((t) => (
              <Panel key={t.id} tab={t} active />
            ))}
        </div>

        <div className="domains-wrap" data-reveal>
          <p className="kicker">Domain knowledge</p>
          <div className="domaingrid">
            {skills.domains.map((d) => (
              <div className="domain" key={d.name}>
                <h4>{d.name}</h4>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
