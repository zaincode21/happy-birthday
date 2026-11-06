interface TornEdgeProps {
  className?: string
}

/**
 * A torn paper edge that sits on top of a section, pointing up into the
 * section above it.
 */
export function TornEdge({ className = '' }: TornEdgeProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-0 h-4 -translate-y-[99%] md:h-5 ${className}`}
    >
      <svg
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0 32 L0 26 L40 22 L85 27 L130 20 L178 26 L225 21 L270 27 L318 22 L365 28 L410 21 L458 26 L505 20 L552 27 L600 23 L648 28 L695 22 L742 26 L790 20 L838 27 L885 23 L932 28 L980 21 L1028 26 L1075 22 L1122 27 L1170 21 L1200 25 L1200 32 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
