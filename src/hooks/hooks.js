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
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* Animated counter that starts when scrolled into view. */
export function useCountUp(end, duration = 1600) {
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
        const eased = 1 - Math.pow(2, -10 * p) // easeOutExpo
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

/* Scroll progress 0..1 for the top bar. */
export function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight
        setP(h > 0 ? Math.min(window.scrollY / h, 1) : 0)
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

/* Which section is currently in the viewport (for nav highlighting). */
export function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
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
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [ids])
  return active
}

/* Scrolled-past-Y boolean (for nav background). */
export function useScrolledPast(offset = 30) {
  const [past, setPast] = useState(false)
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > offset)
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

/* Timeline fill progress relative to the timeline element. */
export function useTimelineProgress(ref) {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const anchor = window.innerHeight * 0.65
        const total = rect.height + window.innerHeight * 0.3
        const passed = Math.min(Math.max(anchor - rect.top, 0), total)
        setP(total > 0 ? passed / total : 0)
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

/* Magnetic hover effect for buttons. */
export function useMagnetic() {
  useEffect(() => {
    const strength = 14
    const move = (e) => {
      const el = e.currentTarget
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2
      el.style.setProperty('--tx', `${x * strength}px`)
      el.style.setProperty('--ty', `${y * strength}px`)
    }
    const clear = (e) => {
      e.currentTarget.style.setProperty('--tx', '0px')
      e.currentTarget.style.setProperty('--ty', '0px')
    }
    const els = Array.from(document.querySelectorAll('.magnetic'))
    els.forEach((el) => {
      el.addEventListener('mousemove', move)
      el.addEventListener('mouseleave', clear)
    })
    return () => {
      els.forEach((el) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', clear)
      })
    }
  }, [])
}
