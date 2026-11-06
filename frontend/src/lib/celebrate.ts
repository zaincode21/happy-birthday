import confetti from 'canvas-confetti'

const CONFETTI_COLORS = ['#FFE24A', '#F2A44C', '#E0687A', '#F4EDE1']

/**
 * Fires two small bursts of confetti from the middle of the given element.
 * Does nothing when the visitor prefers reduced motion.
 */
export function fireConfetti(originEl: HTMLElement | null) {
  if (!originEl || typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const rect = originEl.getBoundingClientRect()
  const origin = {
    x: (rect.left + rect.width / 2) / window.innerWidth,
    y: (rect.top + rect.height * 0.5) / window.innerHeight,
  }

  confetti({
    particleCount: 70,
    spread: 68,
    startVelocity: 38,
    origin,
    colors: CONFETTI_COLORS,
    scalar: 0.9,
    ticks: 230,
    zIndex: 60,
    disableForReducedMotion: true,
  })

  window.setTimeout(() => {
    confetti({
      particleCount: 34,
      angle: 58,
      spread: 52,
      startVelocity: 32,
      origin,
      colors: CONFETTI_COLORS,
      scalar: 0.8,
      zIndex: 60,
      disableForReducedMotion: true,
    })
    confetti({
      particleCount: 34,
      angle: 122,
      spread: 52,
      startVelocity: 32,
      origin,
      colors: CONFETTI_COLORS,
      scalar: 0.8,
      zIndex: 60,
      disableForReducedMotion: true,
    })
  }, 150)
}
