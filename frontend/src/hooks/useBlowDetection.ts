import { useCallback, useEffect, useRef, useState } from 'react'
import type { BlowState } from '../types/birthday'

const BLOW_THRESHOLD = 0.17
const HOLD_MS = 280

interface UseBlowDetectionOptions {
  onBlow: () => void
}

/**
 * Listens for a sustained breath of air through the microphone and calls
 * `onBlow` once. The visitor always has a click fallback; microphone access
 * is only requested after they press the microphone button.
 */
export function useBlowDetection({ onBlow }: UseBlowDetectionOptions) {
  const [state, setState] = useState<BlowState>('idle')
  const onBlowRef = useRef(onBlow)
  const streamRef = useRef<MediaStream | null>(null)
  const contextRef = useRef<AudioContext | null>(null)
  const frameRef = useRef<number | null>(null)
  const firedRef = useRef(false)

  useEffect(() => {
    onBlowRef.current = onBlow
  }, [onBlow])

  const teardown = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = null
    }
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
    const context = contextRef.current
    contextRef.current = null
    if (context && context.state !== 'closed') {
      void context.close().catch(() => undefined)
    }
  }, [])

  const stop = useCallback(() => {
    teardown()
    setState((current) => (current === 'blown' ? current : 'idle'))
  }, [teardown])

  const reset = useCallback(() => {
    firedRef.current = false
    teardown()
    setState('idle')
  }, [teardown])

  const start = useCallback(async () => {
    if (firedRef.current) return
    if (!navigator.mediaDevices?.getUserMedia) {
      setState('unsupported')
      return
    }

    const AudioContextCtor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext

    if (!AudioContextCtor) {
      setState('unsupported')
      return
    }

    setState('requesting')

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
        },
      })
      streamRef.current = stream

      const context = new AudioContextCtor()
      contextRef.current = context
      await context.resume()

      const source = context.createMediaStreamSource(stream)
      const analyser = context.createAnalyser()
      analyser.fftSize = 1024
      analyser.smoothingTimeConstant = 0.6
      source.connect(analyser)

      const data = new Uint8Array(analyser.fftSize)
      let loudSince: number | null = null
      setState('listening')

      const tick = () => {
        analyser.getByteTimeDomainData(data)
        let sum = 0
        for (let i = 0; i < data.length; i += 1) {
          const value = (data[i] - 128) / 128
          sum += value * value
        }
        const rms = Math.sqrt(sum / data.length)

        if (rms > BLOW_THRESHOLD) {
          loudSince ??= performance.now()
          if (performance.now() - loudSince > HOLD_MS && !firedRef.current) {
            firedRef.current = true
            setState('blown')
            teardown()
            onBlowRef.current()
            return
          }
        } else {
          loudSince = null
        }

        frameRef.current = requestAnimationFrame(tick)
      }

      frameRef.current = requestAnimationFrame(tick)
    } catch {
      teardown()
      setState('denied')
    }
  }, [teardown])

  useEffect(() => {
    return () => teardown()
  }, [teardown])

  return { state, start, stop, reset }
}
