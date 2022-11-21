import type { FC } from 'react'

import { useSetAtom } from 'jotai'

import { HStack, IconButton, VStack } from '@/components/atoms'
import { useAudio, useTimer } from '@/hooks'
import { audioSettingsAtom, AudioSetting } from '@/store'
import { dayjs } from '@/utils'

import { FormForTimer } from '../FormForTimer'

export const Timer: FC = () => {
  const timer = useTimer()
  const setAudioSetting = useSetAtom(audioSettingsAtom)
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

  const mutedHandler = () => {
    const setting: AudioSetting = {
      type: 'audioSetting',
      value: false,
    }
    setAudioSetting(setting)
  }

  const unmutedHandler = () => {
    const setting: AudioSetting = {
      type: 'audioSetting',
      value: true,
    }
    setAudioSetting(setting)
  }

  return (
    <VStack>
      <FormForTimer setTime={setTimeHandler} />
      <VStack className="gap-4 items-center">
        <div className="neumorphism rounded-full w-64 h-64 flex justify-center items-center">
          <div className="rounded-full w-56 h-56 flex justify-center items-center bg-gradient-to-r from-amber-400 to-orange-500">
            <div className="rounded-full w-52 h-52 flex justify-center items-center bg-orange-50">
              <h1 className="font-gradient text-6xl">
                {timer.format(timer.restTime)}
              </h1>
            </div>
          </div>
        </div>
        <HStack justifyContent="center" className="gap-4">
          <IconButton onClick={startHandler} aria-label="play">
            <span className="material-icons-outlined font-gradient !text-4xl">
              play_circle_filled
            </span>
          </IconButton>
          <IconButton onClick={stopHandler} aria-label="pause">
            <span className="material-icons-outlined font-gradient !text-4xl">
              pause_circle_filled
            </span>
          </IconButton>
          <IconButton
            onClick={audio.audio.muted ? unmutedHandler : mutedHandler}
            aria-label={audio.audio.muted ? 'unmute' : 'mute'}
          >
            <span
              className="material-icons-outlined font-gradient !text-4xl"
              aria-label="現在のミュート状態"
            >
              {audio.audio.muted ? 'volume_off' : 'volume_up'}
            </span>
          </IconButton>
        </HStack>
      </VStack>
    </VStack>
  )
}
