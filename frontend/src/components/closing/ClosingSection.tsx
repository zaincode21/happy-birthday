import { ArrowUp, Flame, Heart } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import { birthday } from '../../config/birthday'
import { Container } from '../ui/Container'

interface ClosingSectionProps {
  onRelight: () => void
}

export function ClosingSection({ onRelight }: ClosingSectionProps) {
  const reduce = useReducedMotion()

  return (
    <footer className="relative border-t border-cream/10 bg-midnight-2 py-14">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-3.5">
          <Heart
            className="motion-safe-only mt-1 size-4 shrink-0 animate-heart text-rose"
            fill="currentColor"
            strokeWidth={0}
          />
          <div>
            <p className="max-w-[42ch] text-sm leading-relaxed text-cream/60">
              {birthday.closing.note}
            </p>
            <p className="mt-2 font-hand text-2xl text-cream/40">
              — {birthday.sender}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onRelight}
            className="inline-flex h-10 items-center gap-2 rounded-pill border border-cream/15 px-4 text-xs font-medium text-cream/70 transition-colors hover:border-amber/50 hover:text-cream"
          >
            <Flame className="size-3.5" strokeWidth={1.8} />
            {birthday.closing.againLabel}
          </button>
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: reduce ? 'auto' : 'smooth',
              })
            }
            className="inline-flex h-10 items-center gap-2 rounded-pill px-3 text-xs font-medium text-cream/45 transition-colors hover:text-cream"
          >
            {birthday.closing.backToTopLabel}
            <ArrowUp className="size-3.5" strokeWidth={1.8} />
          </button>
        </div>
      </Container>
    </footer>
  )
}
