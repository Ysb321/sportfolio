import { marqueeItems } from '../data/content'

export default function Marquee() {
  const group = (hidden) => (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item) => (
        <span key={`${hidden}-${item}`}>{item}</span>
      )).flatMap((el, i) => [el, <i key={`s-${hidden}-${i}`}>✳</i>])}
    </div>
  )
  return (
    <section className="marquee" aria-label="Tools and competencies">
      <div className="marquee__track">
        {group(false)}
        {group(true)}
      </div>
    </section>
  )
}
