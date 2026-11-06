import { useCallback, useState } from 'react'
import { ClosingSection } from './components/closing/ClosingSection'
import { HeroSection } from './components/hero/HeroSection'
import { LetterSection } from './components/letter/LetterSection'
import { MemoriesSection } from './components/memories/MemoriesSection'
import { WishSection } from './components/wish/WishSection'

function App() {
  const [relightKey, setRelightKey] = useState(0)

  const handleRelight = useCallback(() => {
    setRelightKey((value) => value + 1)
    const wish = document.getElementById('wish')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    wish?.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [])

  return (
    <div className="min-h-svh bg-midnight">
      <a
        href="#wish"
        className="sr-only rounded-pill bg-amber px-4 py-2 text-sm font-semibold text-midnight focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to the candles
      </a>

      <main>
        <HeroSection />
        <WishSection key={relightKey} />
        <MemoriesSection />
        <LetterSection />
      </main>

      <ClosingSection onRelight={handleRelight} />
    </div>
  )
}

export default App
