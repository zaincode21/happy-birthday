import { ArrowDown } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { birthday } from '../../config/birthday'
import { Container } from '../ui/Container'
import { Constellation } from './Constellation'
import { StarField } from './StarField'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-midnight"
    >
      <StarField />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,transparent_30%,#070d15_100%)]"
      />
      <Constellation />

      <div
        aria-hidden="true"
        className="absolute top-24 right-10 z-20 hidden w-max rotate-[-7deg] lg:block xl:right-16"
      >
        <div className="relative w-max bg-paper px-4 py-2.5 whitespace-nowrap text-ink shadow-tag">
          <span className="absolute -top-2 left-1/2 h-4 w-9 -translate-x-1/2 rotate-[-4deg] bg-snap/70" />
          <span className="font-hand text-2xl leading-none">
            {birthday.hero.tag}
          </span>
          <span className="absolute top-1/2 -left-5 h-px w-5 bg-cream/25" />
        </div>
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center pt-24 pb-12 md:pt-28">
        <motion.p
          className="mb-6 flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] text-cream/45 uppercase"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-snap" />
          {birthday.hero.dateLabel}
        </motion.p>

        <h1 className="max-w-[15ch] font-display text-[clamp(2.9rem,9vw,7.4rem)] leading-[0.92] font-light tracking-[-0.035em] text-cream">
          <motion.span
            className="block"
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease }}
          >
            {birthday.hero.headline}
          </motion.span>
          <motion.span
            className="relative mt-1 block w-fit pr-3 italic text-amber"
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
          >
            {birthday.name}.
            <svg
              aria-hidden="true"
              viewBox="0 0 260 14"
              preserveAspectRatio="none"
              className="absolute bottom-[-0.12em] left-0 h-[0.1em] w-[86%] overflow-visible"
            >
              <motion.path
                d="M3 10 C 62 3, 146 2, 256 8"
                fill="none"
                stroke="#F2A44C"
                strokeWidth="4"
                strokeLinecap="round"
                strokeOpacity="0.55"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, delay: 0.9, ease: 'easeInOut' }}
              />
            </svg>
          </motion.span>
        </h1>

        <motion.p
          className="mt-9 max-w-[53ch] text-[15px] leading-relaxed text-cream/65 sm:text-base md:text-[17px]"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
        >
          {birthday.hero.subline}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-cream/10 pt-6 md:mt-20"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <a
            href="#wish"
            className="group inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.24em] text-cream/60 uppercase transition-colors hover:text-cream"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 transition-colors group-hover:border-amber/60 group-hover:text-amber">
              <ArrowDown
                className="motion-safe-only size-3.5 animate-nudge"
                strokeWidth={1.6}
              />
            </span>
            {birthday.hero.scrollCue}
          </a>

          <p className="font-hand text-2xl text-cream/40">
            written by {birthday.sender}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
