import { Heart, X } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { birthday } from '../../config/birthday'

interface LetterSheetProps {
  onClose: () => void
}

export function LetterSheet({ onClose }: LetterSheetProps) {
  const reduce = useReducedMotion()
  const [greeting, ...body] = birthday.letter.paragraphs

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 26, rotate: -0.6 }}
      animate={{ opacity: 1, y: 0, rotate: -0.4 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="paper-grain relative w-full max-w-[620px] rounded-[10px] bg-paper px-6 py-10 text-ink shadow-paper sm:px-10 sm:py-12"
    >
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-2deg] bg-snap/75 shadow-[0_2px_6px_rgba(4,10,18,0.12)]"
      />

      <button
        type="button"
        onClick={onClose}
        autoFocus
        aria-label={birthday.letter.closeLabel}
        className="absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-full text-ink/45 transition-colors hover:bg-ink/5 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        <X className="size-4" strokeWidth={1.8} />
      </button>

      <div className="flex items-center gap-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-rose text-paper">
          <Heart className="size-3.5" fill="currentColor" strokeWidth={0} />
        </span>
        <span className="font-hand text-xl text-ink/45">
          for {birthday.name}
        </span>
      </div>

      <h3 className="mt-6 max-w-[16ch] font-display text-[clamp(1.8rem,4vw,2.4rem)] leading-[1.12] font-light tracking-[-0.02em] text-ink">
        {greeting}
      </h3>

      <div className="mt-6 space-y-4 text-[15.5px] leading-[1.75] text-ink/80 sm:text-base">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="my-7 h-px w-full bg-ink/15" />

      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium tracking-[0.18em] text-ink/40 uppercase">
            {birthday.letter.signOff}
          </p>
          <p className="mt-1 font-hand text-4xl leading-none text-ink">
            {birthday.sender}
          </p>
        </div>
        <Heart className="mb-1 size-5 text-rose" fill="currentColor" strokeWidth={0} />
      </div>
    </motion.article>
  )
}
