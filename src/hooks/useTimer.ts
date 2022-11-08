import { useEffect, useCallback, useState } from 'react'

import { getCurrentTime } from '@/utils'

import type { Dayjs } from '@/utils'

type Return = {
  time: number
  start: (startTime: Dayjs) => void
  pause: () => void
  unpause: (startTime: Dayjs) => void
  format: (time: number) => string
}

export const useTimer = (duration: number): Return => {
  const [time, setTime] = useState<number>(0)
  const [timerId, setTimerId] = useState<NodeJS.Timer>()
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>()

  useEffect(() => {
    setTime(_getTime(duration))
  }, [duration])

  const _getTime = (duration: number, startTime?: Dayjs): number => {
    if (startTime == null) {
      return duration
    }
    return Math.max(duration + startTime.diff(getCurrentTime()), 0)
  }

  const _countTime = useCallback((startTime: Dayjs, time: number) => {
    const id = setInterval(() => {
      setTime(_getTime(time, startTime))
    }, 1000)
    setIntervalId(id)

    const audio = new Audio('src/audio/alerm.mp3')
    const currentTimerId = setTimeout(() => {
      clearInterval(id)
      setTimerId(undefined)
      setIntervalId(undefined)
      void audio.play()
    }, time + 1000)

    setTimerId(currentTimerId)
  }, [])

  const start = useCallback(
    (startTime: Dayjs) => {
      if (timerId === undefined && intervalId === undefined) {
        _countTime(startTime, duration)
      }
    },
    [duration, _countTime, timerId, intervalId]
  )

  const unpause = useCallback(
    (startTime: Dayjs) => {
      if (timerId === undefined && intervalId === undefined) {
        _countTime(startTime, time)
      }
    },
    [time, _countTime, timerId, intervalId]
  )

  const pause = useCallback(() => {
    if (timerId !== undefined) {
      clearInterval(intervalId)
      clearTimeout(timerId)
      setIntervalId(undefined)
      setTimerId(undefined)
    } else {
      if (time === 0) {
        // タイマーのカウントが0の場合リセットする
        setTime(duration)
      }
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

  return { time, start, pause, unpause, format }
}
