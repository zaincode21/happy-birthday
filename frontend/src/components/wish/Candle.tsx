import { motion } from 'motion/react'

interface CandleProps {
  lit: boolean
  showSmoke: boolean
  index: number
}

const heights = [50, 58, 46, 56, 52]

export function Candle({ lit, showSmoke, index }: CandleProps) {
  return (
    <div
      className="relative flex w-[7px] shrink-0 flex-col items-center sm:w-2"
      style={{ height: heights[index % heights.length] }}
      aria-hidden="true"
    >
      <span className="absolute bottom-full left-1/2 h-[7px] w-px -translate-x-1/2 bg-[#3a2b23]" />
      <span className="h-full w-full rounded-[3px] bg-[#f6f0e2] shadow-[inset_-2px_0_3px_rgba(40,20,10,0.22),0_1px_2px_rgba(0,0,0,0.3)]">
        <span className="candle-stripe block h-full w-full rounded-[3px]" />
      </span>

      <span
        className={`absolute bottom-[calc(100%+4px)] left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-amber/25 blur-xl transition-opacity duration-500 ${
          lit ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <span
        className={`flame-shape motion-safe-only absolute bottom-[calc(100%+6px)] left-1/2 h-[21px] w-[11px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_68%,#FFFDF2_0%,#FFE9AE_30%,#FFB24D_58%,#F08A2E_78%,rgba(240,138,46,0)_100%)] shadow-[0_0_12px_rgba(242,164,76,0.55)] transition-all duration-500 ${
          lit
            ? 'animate-flicker scale-100 opacity-100'
            : 'scale-50 opacity-0'
        }`}
        style={{ animationDelay: `${index * 0.17}s` }}
      />

      {showSmoke && (
        <span className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2">
          {[0, 1].map((wisp) => (
            <motion.span
              key={wisp}
              className="absolute left-0 h-4 w-1.5 rounded-full bg-cream/35 blur-[2px]"
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.6 }}
              animate={{
                x: wisp === 0 ? -7 : 5,
                y: -30 - wisp * 14,
                opacity: [0, 0.65, 0],
                scale: 1.8,
              }}
              transition={{
                duration: 1.7,
                delay: index * 0.06 + wisp * 0.18,
                ease: 'easeOut',
              }}
            />
          ))}
        </span>
      )}
    </div>
  )
}
