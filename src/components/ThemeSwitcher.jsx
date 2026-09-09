import { THEMES } from '../hooks/useTheme'

export default function ThemeSwitcher({ theme, setTheme, auto, setAuto }) {
  return (
    <div className="theme-switcher" role="group" aria-label="Theme switcher">
      <div className="theme-switcher__list">
        {Object.entries(THEMES).map(([key, t]) => (
          <button
            key={key}
            type="button"
            className={`theme-btn ${theme === key ? 'is-active' : ''}`}
            onClick={() => setTheme(key)}
            aria-label={`Switch to ${t.label} theme — ${t.hint}`}
            aria-pressed={theme === key}
            title={`${t.label} — ${t.hint}`}
          >
            <span className="theme-btn__dot" aria-hidden="true" style={{ background: `linear-gradient(135deg, ${t.colors[0]}, ${t.colors[0]}cc)` }} />
            <span className="theme-btn__label">{t.label}</span>
          </button>
        ))}
      </div>
      {typeof auto === 'boolean' && (
        <div className="theme-auto">
          <label className="theme-auto__label">
            <input
              type="checkbox"
              className="theme-auto__check"
              checked={auto}
              onChange={(e) => setAuto(e.target.checked)}
              aria-label="Auto cycle themes"
            />
            <span className="theme-auto__switch" aria-hidden="true"><i /></span>
            <span>Auto</span>
            <span className={`theme-auto__pulse ${auto ? 'is-on' : ''}`} aria-hidden="true">
              <span className="theme-auto__pulse-dot" />
              {auto ? 'ON • 3.8s' : 'OFF'}
            </span>
          </label>
          <span className="theme-auto__hint">Auto shades beautifully — pause anytime</span>
        </div>
      )}
    </div>
  )
}

// Compact pill for nav — now with auto indicator
export function ThemeToggle({ theme, setTheme, auto, setAuto }) {
  const keys = Object.keys(THEMES)
  const idx = keys.indexOf(theme)
  const safeIdx = idx >= 0 ? idx : 0
  const next = keys[(safeIdx + 1) % keys.length]

  return (
    <div className="theme-toggle-wrap">
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme(next)}
        aria-label={`Theme: ${THEMES[theme]?.label || THEMES.ink.label}. Switch to ${THEMES[next].label}`}
        title={`Theme: ${THEMES[theme]?.label || THEMES.ink.label} → ${THEMES[next].label}`}
      >
        <span className="theme-toggle__icon" aria-hidden="true">
          {theme === 'ocean' ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 12c2.5-2 4.5-3 6-3s3.5 1 6 3 4.5 3 6 3"/><path d="M2 16c2.5-1.5 4.5-2 6-2s3.5.5 6 2 4.5 2 6 2"/><path d="M2 8c2.5-1.2 4.5-1.8 6-1.8S11.5 6.8 14 8s4.5 1.8 6 1.8"/></svg>
          ) : theme === 'ember' ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3c-1 2-3 3.5-3 6a3 3 0 0 0 6 0c0-2.5-2-4-3-6z"/><path d="M12 15a5 5 0 0 0 5 5H7a5 5 0 0 0 5-5z"/></svg>
          ) : theme === 'forest' ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L4 12h3l-2 8 10-10h-3l3-8z"/><path d="M12 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>
          )}
        </span>
        <span className="theme-toggle__label">{THEMES[theme]?.label || THEMES.ink.label}</span>
        <span className="theme-toggle__caret" aria-hidden="true">▾</span>
      </button>
      {typeof auto === 'boolean' && setAuto && (
        <button
          type="button"
          className={`theme-auto-btn ${auto ? 'is-on' : ''}`}
          onClick={() => setAuto(!auto)}
          aria-label={auto ? 'Disable auto theme cycle' : 'Enable auto theme cycle'}
          title={auto ? 'Auto: ON — click to pause' : 'Auto: OFF — click to cycle every 3.8s'}
          aria-pressed={auto}
        >
          <span className="theme-auto-btn__icon" aria-hidden="true">
            {auto ? (
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="6 3 20 12 6 21 6 3" fill="currentColor" stroke="none"/><polygon points="6 3 20 12 6 21 6 3" fill="none" stroke="currentColor"/></svg>
            )}
          </span>
          {auto ? 'Auto' : 'Auto'}
        </button>
      )}
    </div>
  )
}
