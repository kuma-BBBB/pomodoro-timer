import { useState } from 'react'

import { VStack } from '@/components/atoms'
import { Timer, TimeForm } from '@/components/organisms'

const Presenter = () => {
  const [duration, setDuration] = useState(0)

  const setTimeHandler = (time: number) => setDuration(time)

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <VStack>
        <TimeForm setTime={setTimeHandler} />
        <Timer duration={duration} />
      </VStack>
    </div>
  )
}

export const TimerTemplate = () => {
  return <Presenter />
}
