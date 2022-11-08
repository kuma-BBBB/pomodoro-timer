import { useAtom } from 'jotai'
import { useCallback, useMemo } from 'react'

import { audioSettingsAtom } from '@/store'

type Return = {
  readonly audio: HTMLAudioElement
  start: () => void
  pause: () => void
}

export const useAudio = (audioFilePath: string): Return => {
  const [setting] = useAtom(audioSettingsAtom)
  const audio = useMemo(() => {
    const audio = new Audio(audioFilePath)
    audio.loop = true
    audio.defaultMuted = true
    if (setting !== undefined) {
      audio.muted = !setting.value
    }
    return audio
  }, [audioFilePath, setting])

  const start = useCallback(() => {
    audio.load()
    void audio.play()
  }, [audio])

  const pause = useCallback(() => {
    audio.pause()
  }, [audio])

  return { audio, start, pause }
}
