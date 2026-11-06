import { useMemo } from 'react'

function mulberry32(seed: number) {
  let value = seed
  return () => {
    value += 0x6d2b79f5
    let t = value
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function StarField() {
  const stars = useMemo(() => {
    const random = mulberry32(26)
    return Array.from({ length: 72 }, (_, index) => {
      const warmth = random()
      return {
        id: index,
        x: Math.round(random() * 1200),
        y: Math.round(random() * 800),
        r: Number((0.6 + random() * 1.5).toFixed(2)),
        opacity: Number((0.25 + random() * 0.5).toFixed(2)),
        delay: Number((random() * 7).toFixed(2)),
        duration: Number((5 + random() * 5).toFixed(2)),
        fill: warmth > 0.9 ? '#F2C07C' : '#E9E4D8',
      }
    })
  }, [])

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {stars.map((star) => (
        <circle
          key={star.id}
          cx={star.x}
          cy={star.y}
          r={star.r}
          fill={star.fill}
          opacity={star.opacity}
          className="motion-safe-only animate-twinkle"
          style={{
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </svg>
  )
}
