import { useReducedMotion } from 'motion/react'
import type { CSSProperties, RefObject } from 'react'
import { Candle } from './Candle'

interface CakeProps {
  blown: boolean
  showSmoke: boolean
  stageRef: RefObject<HTMLDivElement | null>
}

interface Sprinkle {
  left: string
  top: string
  rotate: number
  color: string
}

const bottomSprinkles: Sprinkle[] = [
  { left: '14%', top: '52%', rotate: 28, color: 'bg-rose' },
  { left: '30%', top: '68%', rotate: -14, color: 'bg-snap' },
  { left: '47%', top: '55%', rotate: 62, color: 'bg-amber' },
  { left: '63%', top: '74%', rotate: 8, color: 'bg-rose' },
  { left: '79%', top: '58%', rotate: -38, color: 'bg-snap' },
  { left: '22%', top: '82%', rotate: 48, color: 'bg-amber' },
  { left: '55%', top: '86%', rotate: -22, color: 'bg-cream/70' },
  { left: '87%', top: '80%', rotate: 16, color: 'bg-rose' },
]

const topSprinkles: Sprinkle[] = [
  { left: '18%', top: '58%', rotate: 22, color: 'bg-amber' },
  { left: '38%', top: '74%', rotate: -32, color: 'bg-snap' },
  { left: '58%', top: '56%', rotate: 48, color: 'bg-rose' },
  { left: '76%', top: '78%', rotate: -12, color: 'bg-snap' },
]

const dust = [
  { left: '14%', top: '26%', size: 2, delay: 0.4 },
  { left: '78%', top: '18%', size: 2.5, delay: 1.8 },
  { left: '88%', top: '44%', size: 1.6, delay: 3.1 },
  { left: '8%', top: '56%', size: 1.8, delay: 2.4 },
  { left: '68%', top: '34%', size: 1.4, delay: 0.9 },
  { left: '24%', top: '12%', size: 1.5, delay: 4.2 },
]

function Drips({ count = 7, tint }: { count?: number; tint: string }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-full flex justify-around">
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className={`w-[7%] rounded-b-full ${tint}`}
          style={{ height: 9 + ((index * 7) % 12) }}
        />
      ))}
    </div>
  )
}

export function Cake({ blown, showSmoke, stageRef }: CakeProps) {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-full bg-amber/5 blur-2xl"
      />
      <div
        ref={stageRef}
        className="relative aspect-square w-full overflow-hidden rounded-full border border-cream/10 shadow-[inset_0_-30px_80px_rgba(0,0,0,0.55)]"
        style={
          {
            background:
              'radial-gradient(circle at 50% 44%, #1d3550 0%, #122234 46%, #0a111b 100%)',
          } as CSSProperties
        }
      >
        <div
          aria-hidden="true"
          className="night-grain absolute inset-0 opacity-30"
        />

        {dust.map((dot, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="motion-safe-only animate-twinkle absolute rounded-full bg-cream"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}

        <div
          aria-hidden="true"
          className="absolute inset-x-[20%] bottom-[16%] h-[22%] rounded-[50%] bg-amber/10 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[12%] left-1/2 h-px w-[58%] -translate-x-1/2 bg-cream/10"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[11%] left-1/2 h-[5%] w-[72%] -translate-x-1/2 rounded-[50%] bg-cream/15"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[9%] left-1/2 h-[9%] w-[60%] -translate-x-1/2 rounded-[50%] bg-cream/[0.06] blur-[2px]"
        />

        {/* Bottom tier */}
        <div
          aria-hidden="true"
          className="absolute bottom-[15%] left-1/2 h-[29%] w-[66%] -translate-x-1/2 rounded-[16px_16px_32px_32px] shadow-[0_18px_30px_-18px_rgba(0,0,0,0.8)]"
          style={{
            background:
              'linear-gradient(180deg, #f8f1e3 0%, #f0e4cf 62%, #ddcbae 100%)',
          }}
        >
          <div className="absolute inset-x-0 top-0 h-[30%] rounded-t-[16px] bg-linear-to-b from-[#e97b8b] to-[#d9586d]">
            <Drips tint="bg-[#d9586d]" />
          </div>
          {bottomSprinkles.map((sprinkle, index) => (
            <span
              key={index}
              className={`absolute h-[7px] w-[2.5px] rounded-full ${sprinkle.color}`}
              style={{
                left: sprinkle.left,
                top: sprinkle.top,
                transform: `rotate(${sprinkle.rotate}deg)`,
              }}
            />
          ))}
          <span className="absolute inset-x-0 bottom-0 h-[5px] rounded-b-[32px] bg-amber/80" />
        </div>

        {/* Top tier */}
        <div
          aria-hidden="true"
          className="absolute bottom-[42%] left-1/2 h-[21%] w-[48%] -translate-x-1/2 rounded-[14px_14px_26px_26px] shadow-[0_10px_18px_-12px_rgba(0,0,0,0.7)]"
          style={{
            background:
              'linear-gradient(180deg, #fbf5e9 0%, #f3e8d5 68%, #e4d4ba 100%)',
          }}
        >
          <div className="absolute inset-x-0 top-0 h-[32%] rounded-t-[14px] bg-linear-to-b from-[#f7e9d6] to-[#efd9bd]">
            <Drips count={6} tint="bg-[#efd9bd]" />
          </div>
          {topSprinkles.map((sprinkle, index) => (
            <span
              key={index}
              className={`absolute h-[6px] w-[2.5px] rounded-full ${sprinkle.color}`}
              style={{
                left: sprinkle.left,
                top: sprinkle.top,
                transform: `rotate(${sprinkle.rotate}deg)`,
              }}
            />
          ))}
        </div>

        {/* Candles */}
        <div className="absolute bottom-[61.5%] left-1/2 z-20 flex -translate-x-1/2 items-end gap-2 sm:gap-2.5">
          {[0, 1, 2, 3, 4].map((index) => (
            <Candle
              key={index}
              index={index}
              lit={!blown}
              showSmoke={showSmoke && !reduce}
            />
          ))}
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[18%] bg-linear-to-t from-[#070c12]/80 to-transparent"
        />
      </div>
    </div>
  )
}
