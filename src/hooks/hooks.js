import { useEffect, useRef, useState } from 'react'

/* Global reveal-on-scroll: observes every [data-reveal] element once. */
export function useRevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    els.forEach((el) => io.observe(el))
    // observe future elements added after lazy load
    const mo = new MutationObserver((muts) => {
      muts.forEach((m) => m.addedNodes.forEach((n) => {
        if (n.nodeType === 1) {
          if (n.matches && n.matches('[data-reveal]')) io.observe(n)
          n.querySelectorAll && n.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
        }
      }))
    })
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [])
}

/* Animated counter that starts when scrolled into view. */
export function useCountUp(end, duration = 1400) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const run = () => {
      if (started.current) return
      started.current = true
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min((t - t0) / duration, 1)
        const eased = 1 - Math.pow(2, -10 * p)
        setValue(Math.round(end * (p === 1 ? 1 : eased)))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
    if (!('IntersectionObserver' in window)) {
      run()
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end, duration])

  return [ref, value]
}

/* Scroll progress 0..1 for the top bar - RAF throttled */
export function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight
        setP(h > 0 ? Math.min(window.scrollY / h, 1) : 0)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
  return p
}

/* Which section is currently in the viewport - uses IntersectionObserver for perf */
export function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      // fallback to scroll
      let raf = 0
      const onScroll = () => {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          const probe = window.innerHeight * 0.35
          let current = ''
          for (const id of ids) {
            const el = document.getElementById(id)
            if (el && el.getBoundingClientRect().top <= probe) current = id
          }
          setActive(current)
        })
      }
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
    }

    const map = new Map()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => map.set(e.target.id, e.intersectionRatio))
      // pick the entry with highest ratio that is intersecting, else closest to top
      let best = ''
      let bestRatio = 0
      for (const [id, ratio] of map) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        // consider only sections that are near viewport
        if (ratio > bestRatio && rect.top < window.innerHeight * 0.6) {
          bestRatio = ratio
          best = id
        }
      }
      if (!best) {
        // fallback to scroll position probe
        const probe = window.innerHeight * 0.35
        for (const id of ids) {
          const el = document.getElementById(id)
          if (el && el.getBoundingClientRect().top <= probe) best = id
        }
      }
      if (best) setActive(best)
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.2, 0.5, 0.8, 1] })

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}

/* Scrolled-past-Y boolean (for nav background). */
export function useScrolledPast(offset = 30) {
  const [past, setPast] = useState(false)
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setPast(window.scrollY > offset)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return past
}

/* Rotating word cycler. */
export function useRotator(count, interval = 2600) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % count), interval)
    return () => clearInterval(t)
  }, [count, interval])
  return i
}

/* Timeline fill progress relative to the timeline element - RAF throttled */
export function useTimelineProgress(ref) {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) { ticking = false; return }
        const rect = el.getBoundingClientRect()
        const anchor = window.innerHeight * 0.65
        const total = rect.height + window.innerHeight * 0.3
        const passed = Math.min(Math.max(anchor - rect.top, 0), total)
        setP(total > 0 ? passed / total : 0)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [ref])
  return p
}
