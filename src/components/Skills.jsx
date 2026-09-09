import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/content'
import { IconDoc, IconLayers, IconChart, IconFlow, IconZap, IconUsers, IconAward, IconBook, IconDatabase, IconCode, IconBriefcase, IconStar, IconCheckCircle, IconShield, IconTarget, IconTrending } from './Icons'

const tabMeta = {
  ba: { Icon: IconDoc, gradient: 'linear-gradient(135deg, #d9b062, #eccd8f)', accent: '#d9b062' },
  agile: { Icon: IconLayers, gradient: 'linear-gradient(135deg, #5fc9ab, #4ecdc4)', accent: '#5fc9ab' },
  data: { Icon: IconDatabase, gradient: 'linear-gradient(135deg, #6aa9ff, #60a5fa)', accent: '#6aa9ff' },
  docs: { Icon: IconBook, gradient: 'linear-gradient(135deg, #c084fc, #a78bfa)', accent: '#c084fc' },
  tools: { Icon: IconBriefcase, gradient: 'linear-gradient(135deg, #fb7185, #f59e0b)', accent: '#fb7185' },
  soft: { Icon: IconAward, gradient: 'linear-gradient(135deg, #f43f5e, #ec4899)', accent: '#f43f5e' }
}

const tabIcons = {
  ba: <IconDoc width={14} height={14} />,
  agile: <IconLayers width={14} height={14} />,
  data: <IconChart width={14} height={14} />,
  docs: <IconFlow width={14} height={14} />,
  tools: <IconZap width={14} height={14} />,
  soft: <IconUsers width={14} height={14} />
}

function levelLabel(lvl) {
  const n = typeof lvl === 'number' ? lvl : 0
  if (n >= 92) return 'Expert'
  if (n >= 85) return 'Advanced'
  if (n >= 78) return 'Proficient'
  if (n >= 70) return 'Working'
  return 'Foundation'
}

function SkillModal({ data, onClose }) {
  if (!data) return null
  const { type, title, level, desc, artifacts, usedIn, methodology, icon, gradient, accent } = data
  return (
    <div className="modal-overlay skills-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal skills-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div className="skills-modal__head">
          <span className="skills-modal__icon" style={{ background: gradient, color: '#fff' }} aria-hidden="true">
            {icon}
          </span>
          <div>
            <span className="modal__tag" style={{ borderColor: `color-mix(in srgb, ${accent} 30%, transparent)`, background: `color-mix(in srgb, ${accent} 14%, transparent)`, color: accent }}>
              {type}
            </span>
            <h3 className="modal__title" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>{title}</h3>
            {level && (
              <p className="skills-modal__level">
                <span className="skills-modal__level-badge" style={{ background: accent, color: '#fff' }}>{typeof level === 'number' ? `${level}%` : level}</span>
                {typeof level === 'number' && <span className="skills-modal__level-label">{levelLabel(level)} · {level >= 90 ? 'Battle-tested across 4 platforms' : level >= 80 ? 'Applied on live delivery' : 'Growing & mentored'}</span>}
              </p>
            )}
          </div>
        </div>

        {desc && <p className="modal__desc" style={{ fontFamily: 'var(--font-body)', marginTop: 14 }}>{desc}</p>}

        {methodology && (
          <>
            <h4 className="modal__h">Methodology</h4>
            <p className="skills-modal__method">{methodology}</p>
          </>
        )}

        {artifacts && artifacts.length > 0 && (
          <>
            <h4 className="modal__h">Key artifacts</h4>
            <div className="modal__chips">
              {artifacts.map((a) => <span key={a}>{a}</span>)}
            </div>
          </>
        )}

        {usedIn && usedIn.length > 0 && (
          <>
            <h4 className="modal__h">Used in</h4>
            <div className="modal__chips modal__chips--int">
              {usedIn.map((u) => <span key={u}>{u}</span>)}
            </div>
          </>
        )}

        <div className="skills-modal__foot">
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--muted)', fontSize: '0.86rem' }}>“Click outside or press Esc to close — explore another skill to see depth.”</p>
        </div>
      </div>
    </div>
  )
}

function Panel({ tab, active, onSelect }) {
  const ref = useRef(null)
  const meta = tabMeta[tab.id] || tabMeta.ba

  useEffect(() => {
    if (active && ref.current) {
      // trigger is-in for bars
      requestAnimationFrame(() => ref.current?.classList.add('is-in'))
    }
  }, [active])

  const avg = tab.bars ? Math.round(tab.bars.reduce((s, b) => s + b.level, 0) / tab.bars.length) : null

  return (
    <div className={`skills__panel ${active ? 'is-active' : ''}`} ref={ref} role="tabpanel" hidden={!active}>
      {/* Attractive header */}
      <div className="skills__panel-header" style={{ '--accent': meta.accent }}>
        <span className="skills__panel-icon" style={{ background: meta.gradient, color: '#fff' }} aria-hidden="true">
          <meta.Icon width={22} height={22} />
        </span>
        <div className="skills__panel-headtext">
          <h3 className="skills__panel-title">{tab.label}</h3>
          <p className="skills__panel-intro">{tab.intro}</p>
          {tab.bars && (
            <div className="skills__panel-stats">
              <span><strong style={{ color: meta.accent }}>{tab.bars.length}</strong> core skills</span>
              <span className="dot">·</span>
              <span><strong style={{ color: meta.accent }}>{avg}%</strong> avg proficiency</span>
              <span className="dot">·</span>
              <span className="skills__panel-hint">Click a card for detail →</span>
            </div>
          )}
          {tab.tools && (
            <div className="skills__panel-stats">
              <span><strong style={{ color: meta.accent }}>{tab.tools.length}</strong> tools</span>
              <span className="dot">·</span>
              <span className="skills__panel-hint">Click any tool for proficiency, years & project use</span>
            </div>
          )}
        </div>
      </div>

      {tab.bars && (
        <div className="skills__bars skills__bars--detailed">
          {tab.bars.map((b, idx) => {
            const Icon = idx % 2 === 0 ? IconStar : IconCheckCircle
            return (
              <button
                key={b.name}
                type="button"
                className="skill-card"
                onClick={() => onSelect({
                  type: tab.label,
                  title: b.name,
                  level: b.level,
                  desc: b.desc,
                  artifacts: b.artifacts,
                  usedIn: b.usedIn,
                  methodology: b.methodology,
                  icon: <Icon width={16} height={16} />,
                  gradient: meta.gradient,
                  accent: meta.accent
                })}
                aria-label={`View details for ${b.name}`}
              >
                <div className="skill-card__top">
                  <span className="skill-card__icon" style={{ background: `color-mix(in srgb, ${meta.accent} 16%, transparent)`, color: meta.accent, borderColor: `color-mix(in srgb, ${meta.accent} 28%, transparent)` }}>
                    <Icon width={14} height={14} />
                  </span>
                  <span className="skill-card__lvl" style={{ color: meta.accent }}>{b.level}% <em>{levelLabel(b.level)}</em></span>
                </div>
                <h4 className="skill-card__name">{b.name}</h4>
                <p className="skill-card__desc">{b.desc}</p>
                <div className="skillbar__track" aria-hidden="true">
                  <div className="skillbar__fill" style={{ '--lvl': `${b.level}%`, background: meta.accent }}></div>
                </div>
                {b.artifacts && (
                  <div className="skill-card__artifacts">
                    {b.artifacts.slice(0, 3).map((a) => <span key={a}>{a}</span>)}
                    {b.artifacts.length > 3 && <span className="more">+{b.artifacts.length - 3}</span>}
                  </div>
                )}
                <span className="skill-card__cta">View detail →</span>
              </button>
            )
          })}
        </div>
      )}

      {tab.pills && !tab.pillsBig && (
        <div className="skills__pills-wrap">
          <h4 className="skills__pills-title"><IconTarget width={12} height={12} style={{ color: meta.accent }} /> Core competencies</h4>
          <div className="skills__pills">
            {tab.pills.map((p) => (
              <button
                key={p}
                type="button"
                className="skills__pill"
                onClick={() => onSelect({
                  type: tab.label,
                  title: p,
                  level: null,
                  desc: tab.pillDetails?.[p] || `Applied as part of ${tab.label} — proven on Healthcare Plus, Bureau Chief and ERP delivery with 100% traceability and stakeholder sign-off.`,
                  artifacts: ['Hands-on', 'Template-driven', 'Reviewed'],
                  usedIn: ['Healthcare Plus', 'Bureau Chief', 'Pair My Trip'],
                  methodology: 'Elicitation · Modelling · Review · Traceability',
                  icon: <IconTrending width={14} height={14} />,
                  gradient: meta.gradient,
                  accent: meta.accent
                })}
                aria-label={`View ${p} details`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {tab.pillsBig && (
        <div className="skills__pills-wrap">
          <h4 className="skills__pills-title"><IconAward width={14} height={14} style={{ color: meta.accent }} /> Power skills</h4>
          <div className="skills__pills skills__pills--big">
            {tab.pillsBig.map((p) => (
              <button
                key={p}
                type="button"
                className="skills__pill skills__pill--big"
                onClick={() => onSelect({
                  type: 'Power Skills',
                  title: p,
                  level: null,
                  desc: tab.pillDetails?.[p] || `${p} — practiced across 3+ years of cross-functional delivery, stakeholder workshops and pre-sales engagements.`,
                  artifacts: ['Facilitation', 'Feedback', 'Outcomes'],
                  usedIn: ['Techno Cipher', 'Neilsoft QBRs'],
                  methodology: 'Listen · Frame · Align · Follow-through',
                  icon: <IconUsers width={14} height={14} />,
                  gradient: meta.gradient,
                  accent: meta.accent
                })}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {tab.tools && (
        <div className="toolgrid">
          {tab.tools.map((t) => {
            const lvlColor = t.level === 'Expert' ? '#d9b062' : t.level === 'Advanced' ? '#5fc9ab' : t.level === 'Proficient' ? '#6aa9ff' : t.level === 'Working+' ? '#c084fc' : '#9ca3af'
            const ToolIcon = t.name.includes('JIRA') ? IconLayers : t.name.includes('Excel') ? IconChart : t.name.includes('SQL') ? IconDatabase : t.name.includes('Figma') ? IconStar : t.name.includes('Confluence') ? IconBook : t.name.includes('Postman') ? IconCode : IconBriefcase
            return (
              <button
                key={t.name}
                type="button"
                className="tool tool--clickable"
                onClick={() => onSelect({
                  type: 'Tool',
                  title: t.name,
                  level: t.level,
                  desc: t.desc,
                  artifacts: t.artifacts,
                  usedIn: t.usedIn,
                  methodology: `${t.years} of hands-on use · ${t.level} proficiency`,
                  icon: <ToolIcon width={14} height={14} />,
                  gradient: `linear-gradient(135deg, ${lvlColor}, color-mix(in srgb, ${lvlColor} 72%, white))`,
                  accent: lvlColor
                })}
                aria-label={`View ${t.name} details`}
              >
                <span className="tool__icon" style={{ background: `color-mix(in srgb, ${lvlColor} 14%, transparent)`, color: lvlColor, borderColor: `color-mix(in srgb, ${lvlColor} 22%, transparent)` }}>
                  <ToolIcon width={12} height={12} />
                </span>
                <span className="tool__main">
                  <span className="tool__name">{t.name}</span>
                  <span className="tool__years">{t.years}</span>
                </span>
                <span className="tool__lvl" style={{ color: lvlColor }}>{t.level}</span>
              </button>
            )
          })}
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
  const [modal, setModal] = useState(null)

  // close on Esc and lock scroll
  useEffect(() => {
    if (!modal) return
    const onKey = (e) => e.key === 'Escape' && setModal(null)
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [modal])

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
              <Panel key={t.id} tab={t} active onSelect={setModal} />
            ))}
        </div>

        <div className="domains-wrap" data-reveal>
          <p className="kicker">Domain knowledge — click for detail</p>
          <div className="domaingrid">
            {skills.domains.map((d) => {
              const Icon = d.icon === 'shield' ? IconShield : d.icon === 'chart' ? IconChart : d.icon === 'users' ? IconUsers : IconLayers
              return (
                <button
                  key={d.name}
                  type="button"
                  className="domain domain--clickable"
                  onClick={() => setModal({
                    type: 'Domain',
                    title: d.name,
                    level: null,
                    desc: d.detail,
                    artifacts: d.metrics,
                    usedIn: [d.name + ' platforms'],
                    methodology: d.text,
                    icon: <Icon width={16} height={16} />,
                    gradient: `linear-gradient(135deg, ${d.color}, color-mix(in srgb, ${d.color} 70%, white))`,
                    accent: d.color
                  })}
                  aria-label={`View ${d.name} domain details`}
                >
                  <span className="domain__icon" style={{ background: `color-mix(in srgb, ${d.color} 14%, transparent)`, color: d.color, borderColor: `color-mix(in srgb, ${d.color} 22%, transparent)` }}>
                    <Icon width={14} height={14} />
                  </span>
                  <div className="domain__text">
                    <h4>{d.name}</h4>
                    <p>{d.text}</p>
                    <span className="domain__cta">View detail →</span>
                  </div>
                  <div className="domain__metrics" aria-hidden="true">
                    {d.metrics.map((m) => <span key={m}>{m}</span>)}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {modal && <SkillModal data={modal} onClose={() => setModal(null)} />}
      </div>
    </section>
  )
}
