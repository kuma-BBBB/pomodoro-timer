import { useEffect, useCallback, useState } from 'react'

import { getCurrentTime } from '@/utils'

import type { Dayjs } from '@/utils'

type Return = {
  readonly time: number
  readonly isEnded: boolean
  start: (startTime: Dayjs) => Promise<void>
  pause: () => void
  unpause: (startTime: Dayjs) => Promise<void>
  format: (time: number) => string
}

export const useTimer = (duration: number): Return => {
  const [time, setTime] = useState<number>(0)
  const [timerId, setTimerId] = useState<NodeJS.Timer>()
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>()
  const [isEnded, setIsEnded] = useState<boolean>(false)

  useEffect(() => {
    setTime(_getTime(duration))
  }, [duration])

  const _getTime = (duration: number, startTime?: Dayjs): number => {
    if (startTime == null) {
      return duration
    }
    return Math.max(duration + startTime.diff(getCurrentTime()), 0)
  }

  const _countTime = useCallback(
    async (startTime: Dayjs, time: number) =>
      await new Promise<void>((resolve) => {
        setIsEnded(false)

        const id = setInterval(() => {
          setTime(_getTime(time, startTime))
        }, 1000)
        setIntervalId(id)

        const currentTimerId = setTimeout(() => {
          clearInterval(id)
          setTimerId(undefined)
          setIntervalId(undefined)
          setIsEnded(true)
          resolve()
        }, time)

        setTimerId(currentTimerId)
      }),
    []
  )

  const start = useCallback(
    async (startTime: Dayjs) => {
      if (timerId !== undefined && intervalId !== undefined) return
      if (time < 1) {
        console.warn('required set time `> 0`')
        return
      }
      return await _countTime(startTime, duration)
    },
    [duration, _countTime, timerId, intervalId, time]
  )

  const unpause = useCallback(
    async (startTime: Dayjs) => {
      if (timerId !== undefined && intervalId !== undefined) {
        return
      }
      return await _countTime(startTime, time)
    },
    [time, _countTime, timerId, intervalId]
  )

  const pause = useCallback(() => {
    if (timerId !== undefined || intervalId !== undefined) {
      clearInterval(intervalId)
      clearTimeout(timerId)
      setIntervalId(undefined)
      setTimerId(undefined)
    }
    if (time === 0) {
      // タイマーのカウントが0の場合リセットする
      setTime(duration)
    }
  }, [timerId, intervalId, time, duration])

  const format = (number: number): string => {
    const second = Math.round(number / 1000)
    return (
      `${Math.floor(second / 60)}`.padStart(2, '0') +
      ':' +
      `${second % 60}`.padStart(2, '0')
    )
  }

  return { time, start, pause, unpause, format, isEnded }
}
