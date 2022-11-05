import type { FC, ComponentProps } from 'react'

import { useState } from 'react'

import { Button, HStack, IconButton, VStack } from '@/components/atoms'
import { useTimer } from '@/hooks'
import { dayjs } from '@/utils'

type Props = {
  time: string
  onStart: ComponentProps<typeof Button>['onClick']
  onStop: ComponentProps<typeof Button>['onClick']
}

export const Presenter: FC<Props> = ({ time, onStart, onStop }) => {
  return (
    <VStack gap={4}>
      <div className="rounded-full neumorphism w-64 h-64 flex justify-center items-center mb-4">
        <div className="rounded-full w-56 h-56 flex justify-center items-center bg-gradient-to-r from-amber-400 to-orange-500">
          <div className="rounded-full w-52 h-52 flex justify-center items-center bg-orange-50">
            <h1 className="text-6xl font-gradient">{time}</h1>
          </div>
        </div>
      </div>
      <HStack justifyContent="center" gap={4}>
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
      </HStack>
    </VStack>
  )
}

export const Timer = () => {
  const [isPaused, setIsPaused] = useState(false)
  const { time, start, pause, unpause, format } = useTimer(50000)
  const startHandler = () => {
    const startTime = dayjs()
    if (isPaused) {
      unpause(startTime)
      setIsPaused(false)
    } else {
      start(startTime)
    }
  }

  const stopHandler = () => {
    if (!isPaused) {
      pause()
      setIsPaused(true)
    }
  }

  return (
    <Presenter
      time={format(time)}
      onStart={startHandler}
      onStop={stopHandler}
    />
  )
}
