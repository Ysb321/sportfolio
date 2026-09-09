import { useScrollProgress, useScrolledPast } from '../hooks/hooks'

export function ProgressBar() {
  const p = useScrollProgress()
  return <div className="progress-bar" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />
}

export function ToTop() {
  const visible = useScrolledPast(600)
  return (
    <button
      className={`to-top ${visible ? 'is-visible' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
  )
}
