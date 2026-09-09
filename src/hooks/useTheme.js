import { useEffect, useState, useCallback, useRef } from 'react'

export const THEMES = {
  ink: { label: 'Ink', hint: 'Deep navy', icon: '●', colors: ['#d9b062', '#0a0f1e'] },
  light: { label: 'Light', hint: 'Ivory paper', icon: '○', colors: ['#a9812f', '#faf8f2'] },
  ocean: { label: 'Ocean', hint: 'Teal night', icon: '◐', colors: ['#4ecdc4', '#071a26'] },
  ember: { label: 'Ember', hint: 'Warm dusk', icon: '◎', colors: ['#e8a87c', '#1a0f14'] },
  forest: { label: 'Forest', hint: 'Sage dark', icon: '◑', colors: ['#7bc8a4', '#0f1a15'] }
}

const STORAGE_KEY = 'theme'
const AUTO_KEY = 'themeAuto'
const VALID = new Set(Object.keys(THEMES))

function getInitial() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && VALID.has(saved)) return saved
  } catch {}
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
  return 'ink'
}

function getInitialAuto() {
  try {
    const v = localStorage.getItem(AUTO_KEY)
    if (v === '1') return true
    if (v === '0') return false
    return true // auto ON by default — user can pause
  } catch { return true }
}

export function useTheme({ autoInterval = 3800 } = {}) {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      const attr = document.documentElement.getAttribute('data-theme')
      if (attr && VALID.has(attr)) return attr
    }
    return getInitial()
  })
  const [auto, setAuto] = useState(getInitialAuto)
  const autoRef = useRef(auto)
  autoRef.current = auto

  // apply theme to DOM + storage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem(STORAGE_KEY, theme) } catch {}
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      const colors = { ink: '#0a0f1e', light: '#faf8f2', ocean: '#071a26', ember: '#1a0f14', forest: '#0f1a15' }
      meta.content = colors[theme] || colors.ink
    }
  }, [theme])

  // persist auto
  useEffect(() => {
    try { localStorage.setItem(AUTO_KEY, auto ? '1' : '0') } catch {}
  }, [auto])

  // auto cycle
  useEffect(() => {
    if (!auto) return
    let paused = false
    const onVis = () => {
      paused = document.hidden
    }
    document.addEventListener('visibilitychange', onVis)
    const id = setInterval(() => {
      if (paused || document.hidden) return
      setTheme(prev => {
        const keys = Object.keys(THEMES)
        const idx = keys.indexOf(prev)
        return keys[(idx + 1) % keys.length]
      })
    }, autoInterval)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [auto, autoInterval])

  const cycle = useCallback(() => {
    const keys = Object.keys(THEMES)
    const idx = keys.indexOf(theme)
    setTheme(keys[(idx + 1) % keys.length])
  }, [theme])

  // when user manually picks, keep auto but allow; if they want to pause, they toggle off
  const setThemeManual = useCallback((t) => {
    setTheme(t)
  }, [])

  return { theme, setTheme: setThemeManual, auto, setAuto, cycle }
}
