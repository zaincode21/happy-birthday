import { motion, useReducedMotion } from 'motion/react'
import type { CSSProperties } from 'react'
import { birthday } from '../../config/birthday'
import { Container } from '../ui/Container'
import { MemoryCard } from './MemoryCard'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function MemoriesSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="memories"
      className="relative overflow-hidden bg-midnight py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cream/10 to-transparent"
      />

      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[0.96] font-light tracking-[-0.03em] text-cream">
            {birthday.memories.heading}
          </h2>
          <p className="max-w-[32ch] text-sm leading-relaxed text-cream/50 md:text-right">
            {birthday.memories.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {birthday.memories.items.map((memory, index) => (
            <div
              key={memory.id}
              className="pin-item"
              style={
                {
                  '--pin-tilt': `${memory.tilt}deg`,
                  '--pin-offset': `${memory.offset}px`,
                } as CSSProperties
              }
            >
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.04,
                  ease,
                }}
              >
                <MemoryCard memory={memory} />
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
