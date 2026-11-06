import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'

interface GiftBoxProps {
  tagLabel: string
  onOpen: () => void
}

export function GiftBox({ tagLabel, onOpen }: GiftBoxProps) {
  const [opening, setOpening] = useState(false)
  const reduce = useReducedMotion()

  return (
    <motion.button
      type="button"
      aria-label="Open the letter"
      disabled={opening}
      onClick={() => setOpening(true)}
      initial={false}
      animate={opening ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.01 : 0.5, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        if (opening) onOpen()
      }}
      className="group relative block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ink"
    >
      <span className="relative mt-6 block h-[188px] w-[236px] sm:h-[238px] sm:w-[312px]">
        {/* Box body */}
        <span className="absolute inset-x-0 bottom-0 block h-[64%] rounded-[10px] bg-linear-to-b from-[#e0687a] to-[#b84459] shadow-[0_26px_42px_-24px_rgba(4,10,18,0.65)]">
          <span className="absolute inset-x-0 top-0 h-2 rounded-t-[10px] bg-[#a83a4e]/45" />
          <span className="absolute inset-y-0 right-0 w-[16%] rounded-r-[10px] bg-black/10" />
          <span className="absolute inset-y-0 left-1/2 w-5 -translate-x-1/2 bg-snap" />
          <span className="absolute inset-x-0 top-[30%] h-4 bg-snap" />
          <span className="absolute inset-x-0 top-[30%] h-4 bg-linear-to-b from-white/25 to-transparent opacity-60" />
          <span className="absolute inset-y-0 left-0 w-[16%] rounded-l-[10px] bg-white/5" />
        </span>

        {/* Lid and bow */}
        <motion.span
          className="absolute top-[6%] left-1/2 block h-[30%] w-[108%] -translate-x-1/2 rounded-[8px] bg-linear-to-b from-[#ee8494] to-[#d4576b] shadow-[0_10px_18px_-10px_rgba(4,10,18,0.6)]"
          animate={opening ? { y: -78, rotate: -10 } : { y: 0, rotate: 0 }}
          transition={{ duration: reduce ? 0.01 : 0.55, ease: 'easeInOut' }}
        >
          <span className="absolute inset-y-0 left-1/2 w-5 -translate-x-1/2 bg-snap" />
          <span className="absolute -top-[54%] left-1/2 block h-9 w-9 -translate-x-1/2">
            <span className="absolute top-0 left-0 h-7 w-10 origin-bottom-right rotate-[-24deg] rounded-[50%] bg-linear-to-b from-[#ffe24a] to-[#eccf2f]" />
            <span className="absolute top-0 right-0 h-7 w-10 origin-bottom-left rotate-[24deg] rounded-[50%] bg-linear-to-b from-[#ffe24a] to-[#e8ca24]" />
            <span className="absolute top-[8px] left-1/2 block size-4 -translate-x-1/2 rounded-full bg-[#e9cd33] shadow-[inset_0_-2px_3px_rgba(120,95,0,0.25)]" />
          </span>
        </motion.span>

        {/* Gift tag */}
        <span className="absolute right-[-6%] bottom-[23%] block rotate-[-8deg] bg-paper px-3.5 py-2 text-ink shadow-tag transition-transform duration-300 group-hover:-translate-y-1">
          <span className="absolute top-1/2 -left-[18px] block h-px w-[18px] bg-ink/25" />
          <span className="absolute top-1.5 left-1.5 block size-1.5 rounded-full bg-cream ring-1 ring-ink/25" />
          <span className="block pl-2 font-hand text-xl leading-none">
            {tagLabel}
          </span>
        </span>
      </span>
    </motion.button>
  )
}
