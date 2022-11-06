import type { ComponentProps } from 'react'

import { useState } from 'react'

import { VStack } from '@/components/atoms'
import { Timer, TimeForm } from '@/components/organisms'

export const Presenter = ({
  setTime,
  duration,
}: {
  setTime: ComponentProps<typeof TimeForm>['setTime']
  duration: ComponentProps<typeof Timer>['duration']
}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <VStack>
        <TimeForm setTime={setTime} />
        <Timer duration={duration} />
      </VStack>
    </div>
  )
}

export const TimerTemplate = () => {
  const [duration, setDuration] = useState(0)

  const setTimeHandler = (time: number) => setDuration(time)
  return <Presenter setTime={setTimeHandler} duration={duration} />
}
