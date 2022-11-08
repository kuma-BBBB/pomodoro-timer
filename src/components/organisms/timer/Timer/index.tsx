import type { FC, ComponentProps } from 'react'

import { useAtom } from 'jotai'
import { useState } from 'react'

import { Button, HStack, IconButton, VStack } from '@/components/atoms'
import { useAudio, useTimer } from '@/hooks'
import { audioSettingsAtom, AudioSetting } from '@/store'
import { dayjs, deepCopy } from '@/utils'

export const Presenter: FC<{
  time: string
  muted: boolean
  onStart: ComponentProps<typeof Button>['onClick']
  onStop: ComponentProps<typeof Button>['onClick']
  onToggleMuted: ComponentProps<typeof Button>['onClick']
}> = ({ time, muted, onStart, onStop, onToggleMuted }) => {
  return (
    <VStack className="gap-4 items-center">
      <div className="rounded-full neumorphism w-64 h-64 flex justify-center items-center">
        <div className="rounded-full w-56 h-56 flex justify-center items-center bg-gradient-to-r from-amber-400 to-orange-500">
          <div className="rounded-full w-52 h-52 flex justify-center items-center bg-orange-50">
            <h1 className="text-6xl font-gradient">{time}</h1>
          </div>
        </div>
      </div>
      <HStack justifyContent="center" className="gap-4">
        <IconButton onClick={onStart}>
          <span className="material-icons-outlined !text-4xl font-gradient">
            play_circle_filled
          </span>
        </IconButton>
        <IconButton onClick={onStop}>
          <span className="material-icons-outlined !text-4xl font-gradient">
            pause_circle_filled
          </span>
        </IconButton>
        <IconButton onClick={onToggleMuted}>
          <span className="material-icons-outlined !text-4xl font-gradient">
            {muted ? 'volume_off' : 'volume_up'}
          </span>
        </IconButton>
      </HStack>
    </VStack>
  )
}

type Props = {
  duration: number
}
export const Timer: FC<Props> = ({ duration }) => {
  const [isPaused, setIsPaused] = useState(false)
  const [audioSetting, setAudioSetting] = useAtom(audioSettingsAtom)
  const audioFilePath = 'src/audio/alerm.mp3'
  const audio = useAudio(audioFilePath)
  const timer = useTimer(duration)

  const startHandler = () => {
    if (timer.time < 1) return
    const startTime = dayjs()
    if (isPaused) {
      setIsPaused(false)
      void timer.unpause(startTime).then(() => {
        audio.start()
      })
    } else {
      void timer.start(startTime).then(() => {
        audio.start()
      })
    }
  }

  const stopHandler = () => {
    if (isPaused) return
    timer.pause()
    if (timer.isEnded) {
      audio.pause()
    } else {
      setIsPaused(true)
    }
  }

  const toggleMutedHandler = () => {
    const oldSetting = deepCopy(audioSetting)
    if (oldSetting !== undefined) {
      const setting: AudioSetting = {
        type: 'audio',
        value: !oldSetting?.value,
      }
      setAudioSetting(setting)
    }
  }

  return (
    <Presenter
      time={timer.format(timer.time)}
      muted={audio.audio.muted}
      onStart={startHandler}
      onStop={stopHandler}
      onToggleMuted={toggleMutedHandler}
    />
  )
}
