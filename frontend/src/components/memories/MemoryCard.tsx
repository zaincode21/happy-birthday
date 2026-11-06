import { Repeat2 } from 'lucide-react'
import { useState } from 'react'
import type { Memory } from '../../types/birthday'

interface MemoryCardProps {
  memory: Memory
}

export function MemoryCard({ memory }: MemoryCardProps) {
  const [flipped, setFlipped] = useState(false)

  const action = flipped
    ? 'Showing the memory. Turn back to the front.'
    : 'Turn over to read the memory.'

  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label={`${memory.label}, ${memory.date}. ${action}`}
      onClick={() => setFlipped((value) => !value)}
      className="memory-card group relative block w-full aspect-[4/5] cursor-pointer rounded-card text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
    >
      <span className="memory-inner relative block h-full w-full">
        {/* Front */}
        <span className="memory-face flex flex-col rounded-card bg-cream/[0.06] p-3 ring-1 ring-cream/10 shadow-card backdrop-blur-md">
          {memory.kind === 'photo' ? (
            <>
              <span className="relative block flex-1 overflow-hidden rounded-photo bg-midnight-3">
                <img
                  src={memory.photo.src}
                  alt={memory.photo.alt}
                  width={memory.photo.width}
                  height={memory.photo.height}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
                />
                <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-midnight/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-midnight/60 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-cream/80 uppercase backdrop-blur-sm">
                  {memory.date}
                </span>
              </span>
              <span className="flex items-end justify-between gap-2 px-1 pt-3 pb-1">
                <span className="block text-[13px] font-semibold text-cream">
                  {memory.label}
                </span>
                <span className="flex shrink-0 items-center gap-1.5 pb-0.5 text-[10px] tracking-[0.1em] text-cream/40 uppercase">
                  Turn over
                  <Repeat2 className="size-3.5" strokeWidth={1.6} />
                </span>
              </span>
            </>
          ) : (
            <>
              <span className="flex items-center justify-between px-1 pt-1">
                <span className="text-[10px] tracking-[0.16em] text-cream/40 uppercase">
                  {memory.date}
                </span>
                <span className="size-1.5 rounded-full bg-snap" />
              </span>
              <span className="flex flex-1 flex-col justify-center gap-4 px-2 py-6">
                {memory.lines.map((line) => (
                  <span key={line} className="flex items-start gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-amber/70" />
                    <span className="text-[15px] leading-snug font-medium text-cream/85 sm:text-base">
                      {line}
                    </span>
                  </span>
                ))}
              </span>
              <span className="flex items-end justify-between gap-2 px-1 pb-1">
                <span className="font-display text-xl text-cream/75 italic">
                  {memory.label}
                </span>
                <span className="flex shrink-0 items-center gap-1.5 pb-1 text-[10px] tracking-[0.1em] text-cream/40 uppercase">
                  Turn over
                  <Repeat2 className="size-3.5" strokeWidth={1.6} />
                </span>
              </span>
            </>
          )}
        </span>

        {/* Back */}
        <span className="memory-face memory-back paper-grain flex flex-col justify-between rounded-card bg-paper p-6 text-ink shadow-card sm:p-7">
          <span className="flex items-center justify-between">
            <span className="text-[10px] tracking-[0.16em] text-ink/40 uppercase">
              {memory.date}
            </span>
            <span className="font-hand text-xl text-rose">memory</span>
          </span>

          <span className="font-display text-[18px] leading-[1.5] text-ink/85 sm:text-[19px]">
            {memory.note}
          </span>

          <span className="flex items-center gap-2 text-[10px] tracking-[0.14em] text-ink/35 uppercase">
            <Repeat2 className="size-3.5" strokeWidth={1.6} />
            Turn back
          </span>
        </span>
      </span>
    </button>
  )
}
