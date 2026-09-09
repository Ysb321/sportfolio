import { useRef } from 'react'
import { profile, hero } from '../data/content'
import { useRotator, useCountUp } from '../hooks/hooks'

function Stat({ stat }) {
  const [ref, value] = useCountUp(stat.value)
  return (
    <div className="hero__meta-item">
      <span className="num" ref={ref}>{value}{stat.suffix}</span>
      <span className="lbl">{stat.label.split('\n').map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}</span>
    </div>
  )
}

export default function Hero() {
  const wordIdx = useRotator(hero.rotatorWords.length, 2500)
  const portraitRef = useRef(null)

  const onMouseMove = (e) => {
    const el = portraitRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.querySelectorAll('[data-depth]').forEach((chip) => {
      const d = parseFloat(chip.dataset.depth) || 10
      chip.style.translate = `${x * d}px ${y * d}px`
    })
  }

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid"></div>
        <div className="orb orb--1"></div>
        <div className="orb orb--2"></div>
        <svg className="hero__chart" viewBox="0 0 600 220" preserveAspectRatio="none">
          <polyline className="hero__chart-line" points="0,190 60,170 120,175 180,140 240,150 300,110 360,120 420,80 480,95 540,55 600,40" />
          <polyline className="hero__chart-line hero__chart-line--ghost" points="0,200 70,185 140,188 210,160 280,168 350,135 420,142 490,110 560,90 600,75" />
        </svg>
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__eyebrow" data-reveal style={{ '--d': 0 }}>
            <span className="pulse-dot" aria-hidden="true"></span>
            {profile.role} · Pune, India
          </p>

          <h1 className="hero__title">
            <span className="line" data-reveal style={{ '--d': 1 }}>{hero.titleTop}</span>
            <span className="line line--accent" data-reveal style={{ '--d': 2 }}>{hero.titleAccent}</span>
          </h1>

          <p className="hero__sub" data-reveal style={{ '--d': 3 }}>
            I turn complex business needs into elegant,&nbsp;
            <span className="rotator">
              {hero.rotatorWords.map((w, i) => (
                <span key={w} className={`rotator__word ${i === wordIdx ? 'is-active' : ''}`}>{w}</span>
              ))}
            </span>
            <span style={{ display: 'block', marginTop: 10 }}>
              3+ years across <strong>banking, finance, healthcare &amp; ERP</strong> — translating stakeholder intent into requirements, models and shipped software.
            </span>
          </p>

          <div className="hero__cta" data-reveal style={{ '--d': 4 }}>
            <a href={profile.resume} download="Sheetal_Kirjawalekar_Resume.pdf" className="btn btn--gold magnetic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Résumé
            </a>
            <a href="#projects" className="btn btn--ghost magnetic">
              Explore my work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>

          <div className="hero__meta" data-reveal style={{ '--d': 5 }}>
            {hero.stats.map((s, i) => (
              <div key={i} style={{ display: 'contents' }}>
                {i > 0 && <div className="hero__meta-divider" aria-hidden="true"></div>}
                <Stat stat={s} />
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual" data-reveal style={{ '--d': 3 }}>
          <div className="portrait" ref={portraitRef} onMouseMove={onMouseMove}>
            <div className="portrait__frame" aria-hidden="true"></div>
            <div className="portrait__imgwrap">
              <img src={profile.photo} alt="Sheetal Kirjawalekar — Business Analyst" width="640" height="800" fetchPriority="high" />
            </div>

            <div className="chip chip--tl" data-depth="18">
              <span className="chip__icon">SQL</span>
              <span className="chip__txt">{hero.chips.top.text}</span>
            </div>
            <div className="chip chip--br" data-depth="26">
              <span className="chip__icon">{hero.chips.bottom.tag}</span>
              <span className="chip__txt">{hero.chips.bottom.text}</span>
            </div>
            <div className="badge" data-depth="10">
              <span className="badge__num">{hero.badge.num}</span>
              <span className="badge__lbl" dangerouslySetInnerHTML={{ __html: hero.badge.label.replace('\n', '<br>') }} />
            </div>
          </div>
          <p className="hero__visual-caption">— Analyst · modeller · bridge between business &amp; build teams</p>
        </div>
      </div>

      <a href="#about" className="hero__scrollcue" aria-label="Scroll down">
        <span className="hero__scrollcue-mouse"><span></span></span>
        <span className="hero__scrollcue-txt">scroll</span>
      </a>
    </section>
  )
}
