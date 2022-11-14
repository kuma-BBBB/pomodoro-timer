import type { FC, ComponentProps } from 'react'

import { useAtom } from 'jotai'

import { Button, HStack, IconButton, VStack } from '@/components/atoms'
import { useAudio, useTimer } from '@/hooks'
import { audioSettingsAtom, AudioSetting } from '@/store'
import { dayjs, deepCopy } from '@/utils'

import { FormForTimer } from '../FormForTimer'

export const Presenter: FC<{
  time: string
  muted: boolean
  setTime: ComponentProps<typeof FormForTimer>['setTime']
  onStart: ComponentProps<typeof Button>['onClick']
  onStop: ComponentProps<typeof Button>['onClick']
  onToggleMuted: ComponentProps<typeof Button>['onClick']
}> = ({ time, muted, setTime, onStart, onStop, onToggleMuted }) => {
  return (
    <VStack>
      <FormForTimer setTime={setTime} />
      <VStack className="gap-4 items-center">
        <div className="neumorphism rounded-full w-64 h-64 flex justify-center items-center">
          <div className="rounded-full w-56 h-56 flex justify-center items-center bg-gradient-to-r from-amber-400 to-orange-500">
            <div className="rounded-full w-52 h-52 flex justify-center items-center bg-orange-50">
              <h1 className="font-gradient text-6xl">{time}</h1>
            </div>
          </div>
        </div>
        <HStack justifyContent="center" className="gap-4">
          <IconButton onClick={onStart} aria-label="play">
            <span className="material-icons-outlined font-gradient !text-4xl">
              play_circle_filled
            </span>
          </IconButton>
          <IconButton onClick={onStop} aria-label="pause">
            <span className="material-icons-outlined font-gradient !text-4xl">
              pause_circle_filled
            </span>
          </IconButton>
          <IconButton
            onClick={onToggleMuted}
            aria-label={muted ? 'mute' : 'unmute'}
          >
            <span className="material-icons-outlined font-gradient !text-4xl">
              {muted ? 'volume_off' : 'volume_up'}
            </span>
          </IconButton>
        </HStack>
      </VStack>
    </VStack>
  )
}

export const Timer: FC = () => {
  const timer = useTimer()
  const [audioSetting, setAudioSetting] = useAtom(audioSettingsAtom)
  const audioFilePath = 'src/audio/alerm.mp3'
  const audio = useAudio(audioFilePath)

  const setTimeHandler = (duration: number) => {
    timer.pause()
    timer.init(duration)
  }

  const startHandler = () => {
    const startTime = dayjs()
    void timer.start(startTime).then(() => {
      audio.start()
    })
  }

  const stopHandler = () => {
    timer.pause()
    if (timer.isEnded) {
      audio.pause()
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
      time={timer.format(timer.restTime)}
      muted={audio.audio.muted}
      setTime={setTimeHandler}
      onStart={startHandler}
      onStop={stopHandler}
      onToggleMuted={toggleMutedHandler}
    />
  )
}
