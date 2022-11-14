import { useCallback, useState } from 'react'

import { getCurrentTime } from '@/utils'

import type { Dayjs } from '@/utils'

type Return = {
  readonly restTime: number
  readonly isEnded: boolean
  init: (duration: number) => void
  start: (startTime: Dayjs) => Promise<void>
  pause: () => void
  format: (time: number) => string
}

export const useTimer = (): Return => {
  const [initTime, setInitTime] = useState<number>(0)
  const [restTime, setRestTime] = useState<number>(0)

  const [timerId, setTimerId] = useState<NodeJS.Timer>()
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>()

  const [isEnded, setIsEnded] = useState<boolean>(false)

  const _getRestTime = (duration: number, startTime?: Dayjs): number => {
    if (startTime == null) {
      return duration
    }
    return Math.max(duration + startTime.diff(getCurrentTime()), 0)
  }

  const _countTime = useCallback(
    async (startTime: Dayjs) =>
      await new Promise<void>((resolve) => {
        setIsEnded(false)

        const id = setInterval(() => {
          setRestTime(_getRestTime(restTime, startTime))
        }, 1000)
        setIntervalId(id)

        const currentTimerId = setTimeout(() => {
          clearInterval(id)
          setTimerId(undefined)
          setIntervalId(undefined)
          setIsEnded(true)
          resolve()
        }, restTime)

        setTimerId(currentTimerId)
      }),
    [restTime]
  )

  const init = useCallback((duration: number) => {
    setInitTime(duration)
    setRestTime(_getRestTime(duration))
  }, [])

  const start = useCallback(
    async (startTime: Dayjs) => {
      const isProcessing = timerId !== undefined && intervalId !== undefined
      if (isProcessing) return
      if (restTime < 1) return
      return await _countTime(startTime)
    },
    [_countTime, timerId, intervalId, restTime]
  )

  const pause = useCallback(() => {
    if (timerId !== undefined || intervalId !== undefined) {
      clearInterval(intervalId)
      clearTimeout(timerId)
      setIntervalId(undefined)
      setTimerId(undefined)
      setRestTime((restTime) => {
        const roundedTime = Math.round(restTime / 1000) * 1000
        return roundedTime
      })
    }
    if (isEnded) {
      setRestTime(initTime)
    }
  }, [timerId, intervalId, initTime, isEnded])

  const format = (number: number): string => {
    const second = Math.round(number / 1000)
    return (
      `${Math.floor(second / 60)}`.padStart(2, '0') +
      ':' +
      `${second % 60}`.padStart(2, '0')
    )
  }

  return { restTime, isEnded, init, start, pause, format }
}
