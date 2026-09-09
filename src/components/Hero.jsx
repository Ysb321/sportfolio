import { profile, hero } from '../data/content'
import { useRotator, useCountUp } from '../hooks/hooks'
import { IconSpark, IconZap, IconLayers, IconTarget, IconDoc } from './Icons'

const statIcons = [
  <IconZap key="zap" width={14} height={14} />,
  <IconLayers key="layers" width={14} height={14} />,
  <IconTarget key="target" width={14} height={14} />,
  <IconDoc key="doc" width={14} height={14} />
]

function Stat({ stat, icon }) {
  const [ref, value] = useCountUp(stat.value)
  return (
    <div className="hero__meta-item">
      <span className="hero__meta-icon" aria-hidden="true">{icon}</span>
      <span className="num" ref={ref}>{value}{stat.suffix}</span>
      <span className="lbl">{stat.label.split('\\n').map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}</span>
    </div>
  )
}

export default function Hero() {
  const wordIdx = useRotator(hero.rotatorWords.length, 2500)

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid"></div>
        <div className="orb orb--1"></div>
        <div className="orb orb--2"></div>
        <svg className="hero__chart" viewBox="0 0 600 220" preserveAspectRatio="none" aria-hidden="true">
          <polyline className="hero__chart-line" points="0,190 60,170 120,175 180,140 240,150 300,110 360,120 420,80 480,95 540,55 600,40" />
          <polyline className="hero__chart-line hero__chart-line--ghost" points="0,200 70,185 140,188 210,160 280,168 350,135 420,142 490,110 560,90 600,75" />
        </svg>
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__eyebrow" data-reveal style={{ '--d': 0 }}>
            <span className="pulse-dot" aria-hidden="true"></span>
            <IconSpark width={12} height={12} style={{ color: 'var(--gold)', flex: 'none' }} aria-hidden="true" />
            {profile.role} · Pune, India
          </p>

          <h1 className="hero__title">
            <span className="line" data-reveal style={{ '--d': 1 }}>{hero.titleTop}</span>
            <span className="line line--accent" data-reveal style={{ '--d': 2 }}>
              <IconSpark width={28} height={28} style={{ display: 'inline', verticalAlign: '-0.12em', marginRight: 8, color: 'var(--gold-bright)', opacity: 0.85 }} aria-hidden="true" />
              {hero.titleAccent}
            </span>
          </h1>

          <p className="hero__sub" data-reveal style={{ '--d': 3 }}>
            I turn complex business needs into elegant,&nbsp;
            <span className="rotator">
              {hero.rotatorWords.map((w, i) => (
                <span key={w} className={`rotator__word ${i === wordIdx ? 'is-active' : ''}`}>{w}</span>
              ))}
            </span>
            <span style={{ display: 'block', marginTop: 8 }}>
              3+ years across <strong>banking, finance, healthcare &amp; ERP</strong> — translating stakeholder intent into requirements, models and shipped software.
            </span>
          </p>

          <div className="hero__cta" data-reveal style={{ '--d': 4 }}>
            <a href="#projects" className="btn btn--gold">
              Explore my work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#contact" className="btn btn--ghost">
              <IconSpark width={14} height={14} aria-hidden="true" />
              Get in touch
            </a>
          </div>

          <div className="hero__meta" data-reveal style={{ '--d': 5 }}>
            {hero.stats.map((s, i) => (
              <div key={i} style={{ display: 'contents' }}>
                {i > 0 && <div className="hero__meta-divider" aria-hidden="true"></div>}
                <Stat stat={s} icon={statIcons[i % statIcons.length]} />
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual" data-reveal style={{ '--d': 3 }}>
          <div className="portrait">
            <div className="portrait__frame" aria-hidden="true"></div>
            <div className="portrait__imgwrap">
              <picture>
                <source srcSet={profile.photoSrcSet} sizes="(max-width: 960px) 70vw, 380px" type="image/webp" />
                <img
                  src={profile.photoFallback || profile.photo}
                  alt="Sheetal Kirjawalekar — Business Analyst"
                  width="640"
                  height="640"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
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
