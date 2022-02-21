import { useState, useEffect } from 'react'
import useSound from 'use-sound'
import coherenceCardiaqueSound from '../../public/coherence-cardiaque.mp3'

export default function PlaySoundSwitch() {
  const [hasStarted, setHasStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [hasStopped, setHasStopped] = useState(false)
  const [play, { stop, pause }] = useSound(coherenceCardiaqueSound)

  useEffect(() => {
    if (hasStarted && !isPaused) {
      play()
    } else if (hasStarted && isPaused) {
      pause()
    } else if (hasStopped) {
      stop()
    } else {
      return () => {
        stop()
      }
    }
  }, [hasStarted, isPaused, hasStopped])

  return (
    <div className="mt-8 flex justify-center">
      <div className="inline-flex rounded-md shadow">
        <a
          onClick={() => {
            setHasStarted(true)
            setIsPaused(false)
            setHasStopped(false)
          }}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
        >
          Start
        </a>
      </div>

      <div className="ml-3 inline-flex">
        <a
          onClick={() => {
            setIsPaused(!isPaused)
          }}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200"
        >
          Pause
        </a>
      </div>

      <div className="ml-3 inline-flex">
        <a
          onClick={() => {
            setHasStarted(false)
            setHasStopped(true)
          }}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-100 px-5 py-3 text-base font-medium text-red-700 hover:bg-red-200"
        >
          Stop
        </a>
      </div>
    </div>
  )
}
