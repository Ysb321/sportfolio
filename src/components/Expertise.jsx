import { expertise } from '../data/content'
import { IconDoc, IconFlow, IconChart, IconLayers } from './Icons'

const icons = {
  doc: <IconDoc width={22} height={22} />,
  flow: <IconFlow width={22} height={22} />,
  chart: <IconChart width={22} height={22} />,
  agile: <IconLayers width={22} height={22} />
}

const gradients = {
  doc: 'linear-gradient(135deg, #d9b062 0%, #eccd8f 100%)',
  flow: 'linear-gradient(135deg, #5fc9ab 0%, #3a9e86 100%)',
  chart: 'linear-gradient(135deg, #6aa9ff 0%, #3a6bdc 100%)',
  agile: 'linear-gradient(135deg, #c084fc 0%, #7c3aed 100%)'
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
              <div
                className="exp-card__icon"
                aria-hidden="true"
                style={{ background: gradients[c.icon], color: '#fff', borderColor: 'transparent', boxShadow: '0 10px 24px -14px rgba(0,0,0,0.45)' }}
              >
                {icons[c.icon]}
              </div>
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
