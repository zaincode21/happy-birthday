import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { birthday } from '../../config/birthday'
import { Container } from '../ui/Container'
import { TornEdge } from '../ui/TornEdge'
import { GiftBox } from './GiftBox'
import { LetterSheet } from './LetterSheet'

export function LetterSection() {
  const [open, setOpen] = useState(false)

  return (
    <section
      id="letter"
      className="on-paper relative bg-cream py-24 text-ink md:py-32"
    >
      <TornEdge className="text-cream" />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.98] font-light tracking-[-0.03em] text-ink">
            {birthday.letter.heading}
          </h2>
        </div>

        <div className="mt-12 flex min-h-[420px] items-center justify-center md:min-h-[500px]">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <LetterSheet
                key="letter"
                onClose={() => setOpen(false)}
              />
            ) : (
              <GiftBox
                key="gift"
                tagLabel={birthday.letter.tagLabel}
                onOpen={() => setOpen(true)}
              />
            )}
          </AnimatePresence>
        </div>

        <p aria-live="polite" className="sr-only">
          {open ? birthday.letter.openAnnouncement : ''}
        </p>
      </Container>
    </section>
  )
}
