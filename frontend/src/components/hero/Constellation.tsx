import { motion, useReducedMotion } from 'motion/react'

const points = [
  [40, 250],
  [112, 188],
  [182, 232],
  [252, 148],
  [342, 176],
  [420, 96],
  [502, 142],
] as const

const path = points
  .map(([x, y], index) => `${index === 0 ? 'M' : 'L'}${x} ${y}`)
  .join(' ')

const branch = 'M252 148 L300 262 L376 286'

export function Constellation() {
  const reduce = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-[16%] right-[1%] hidden w-[44%] max-w-[620px] opacity-100 lg:block"
    >
      <svg viewBox="0 0 560 340" className="h-auto w-full">
        {reduce ? (
          <path
            d={path}
            fill="none"
            stroke="#F4EDE1"
            strokeOpacity="0.42"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        ) : (
          <motion.path
            d={path}
            fill="none"
            stroke="#F4EDE1"
            strokeOpacity="0.42"
            strokeWidth="1.2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.6, delay: 0.35, ease: 'easeInOut' }}
          />
        )}
        <path
          d={branch}
          fill="none"
          stroke="#F4EDE1"
          strokeOpacity="0.14"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {points.map(([x, y], index) => {
          const bright = index === 5
          return (
            <g key={`${x}-${y}`}>
              {bright && (
                <circle cx={x} cy={y} r="13" fill="#F2A44C" opacity="0.12" />
              )}
              <circle
                cx={x}
                cy={y}
                r={bright ? 3.6 : 2.2}
                fill={bright ? '#F2A44C' : '#F4EDE1'}
                opacity={bright ? 1 : 0.7}
              />
              {bright && (
                <circle
                  cx={x}
                  cy={y}
                  r="7"
                  fill="none"
                  stroke="#F2A44C"
                  strokeOpacity="0.4"
                  strokeWidth="1"
                />
              )}
            </g>
          )
        })}

        <circle cx="376" cy="286" r="1.8" fill="#F4EDE1" opacity="0.5" />
        <circle cx="300" cy="262" r="1.5" fill="#F4EDE1" opacity="0.4" />
      </svg>
    </div>
  )
}
