import type { FC, ComponentProps } from 'react'

import { useState } from 'react'

import { Button, HStack, IconButton, VStack } from '@/components/atoms'
import { useTimer } from '@/hooks'
import { dayjs } from '@/utils'

export const Presenter: FC<{
  time: string
  onStart: ComponentProps<typeof Button>['onClick']
  onStop: ComponentProps<typeof Button>['onClick']
}> = ({ time, onStart, onStop }) => {
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
        <IconButton onClick={onStop}>
          <span className="material-icons-outlined !text-4xl font-gradient">
            {/* volume_up */}
            volume_off
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
  const { time, start, pause, unpause, format, isEnded } = useTimer(duration)
  const startHandler = () => {
    if (time < 1) return
    const startTime = dayjs()
    if (isPaused) {
      unpause(startTime)
      setIsPaused(false)
    } else {
      start(startTime)
    }
  }

  const stopHandler = () => {
    if (isPaused) return
    if (!isEnded) {
      setIsPaused(true)
    }
    pause()
  }

  return (
    <Presenter
      time={format(time)}
      onStart={startHandler}
      onStop={stopHandler}
    />
  )
}
