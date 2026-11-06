import { Mic, MicOff, RotateCcw, Wind } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { birthday } from '../../config/birthday'
import { useBlowDetection } from '../../hooks/useBlowDetection'
import { fireConfetti } from '../../lib/celebrate'
import { Container } from '../ui/Container'
import { Cake } from './Cake'

export function WishSection() {
  const [blown, setBlown] = useState(false)
  const [showSmoke, setShowSmoke] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const blownRef = useRef(false)
  const smokeTimer = useRef<number | null>(null)
  const reduce = useReducedMotion()

  function handleBlow() {
    if (blownRef.current) return
    blownRef.current = true
    setBlown(true)
    setShowSmoke(true)
    fireConfetti(stageRef.current)

    if (smokeTimer.current !== null) window.clearTimeout(smokeTimer.current)
    smokeTimer.current = window.setTimeout(() => setShowSmoke(false), 1900)
  }

  const {
    state,
    start,
    stop: stopMic,
    reset: resetMic,
  } = useBlowDetection({ onBlow: handleBlow })

  useEffect(() => {
    if (blown) stopMic()
  }, [blown, stopMic])

  useEffect(() => {
    return () => {
      if (smokeTimer.current !== null) window.clearTimeout(smokeTimer.current)
    }
  }, [])

  function relight() {
    blownRef.current = false
    setBlown(false)
    setShowSmoke(false)
    resetMic()
  }

  const statusText = blown
    ? birthday.wish.blownStatus
    : state === 'requesting'
      ? birthday.wish.micRequesting
      : state === 'listening'
        ? birthday.wish.listeningStatus
        : state === 'denied'
          ? birthday.wish.deniedLabel
          : state === 'unsupported'
            ? birthday.wish.unsupportedLabel
            : birthday.wish.litStatus

  return (
    <section
      id="wish"
      className="relative overflow-hidden bg-midnight-2 py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="night-grain pointer-events-none absolute inset-0 opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cream/15 to-transparent"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <motion.h2
            className="font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[0.96] font-light tracking-[-0.03em] text-cream"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {birthday.wish.heading}
          </motion.h2>

          <p className="mt-4 max-w-[36ch] font-display text-lg leading-relaxed text-cream/55 italic">
            {birthday.wish.intro}
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <motion.button
              type="button"
              onClick={blown ? relight : handleBlow}
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { y: 1 }}
              className={`inline-flex h-12 items-center gap-2.5 rounded-pill px-6 text-sm font-semibold transition-colors ${
                blown
                  ? 'border border-cream/25 text-cream hover:border-cream/45'
                  : 'bg-amber text-midnight shadow-[0_14px_30px_-18px_rgba(242,164,76,0.9)] hover:bg-[#f6b168]'
              }`}
            >
              {blown ? (
                <RotateCcw className="size-4" strokeWidth={2} />
              ) : (
                <Wind className="size-4" strokeWidth={2.2} />
              )}
              {blown ? birthday.wish.againLabel : birthday.wish.blowLabel}
            </motion.button>

            {!blown && (
              <button
                type="button"
                onClick={() => (state === 'listening' ? stopMic() : void start())}
                aria-pressed={state === 'listening'}
                className="inline-flex h-10 items-center gap-2.5 rounded-pill border border-cream/15 px-4 text-xs font-medium text-cream/65 transition-colors hover:border-cream/30 hover:text-cream"
              >
                {state === 'listening' ? (
                  <MicOff className="size-3.5" strokeWidth={1.8} />
                ) : (
                  <Mic className="size-3.5" strokeWidth={1.8} />
                )}
                {state === 'listening'
                  ? birthday.wish.micStopLabel
                  : birthday.wish.micLabel}
                {state === 'listening' && (
                  <span className="motion-safe-only size-1.5 animate-pulse rounded-full bg-amber" />
                )}
              </button>
            )}
          </div>

          <p
            aria-live="polite"
            className="mt-6 flex min-h-5 items-center gap-2.5 text-[13px] text-cream/55"
          >
            <span
              className={`size-1.5 shrink-0 rounded-full transition-colors ${
                blown ? 'bg-amber' : 'bg-snap'
              }`}
            />
            {statusText}
          </p>
        </div>

        <div className="relative">
          <Cake blown={blown} showSmoke={showSmoke} stageRef={stageRef} />
        </div>
      </Container>
    </section>
  )
}
