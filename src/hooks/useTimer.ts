import { useEffect, useCallback, useState, useMemo } from 'react'

import { getCurrentTime } from '@/utils'

import type { Dayjs } from '@/utils'

type Return = {
  time: number
  start: (startTime: Dayjs) => void
  pause: () => void
  unpause: (startTime: Dayjs) => void
  format: (time: number) => string
  isEnded: boolean
}

export const useTimer = (duration: number): Return => {
  const [time, setTime] = useState<number>(0)
  const [timerId, setTimerId] = useState<NodeJS.Timer>()
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>()
  const [isEnded, setIsEnded] = useState<boolean>(false)
  const audio = useMemo(() => new Audio('src/audio/alerm.mp3'), [])
  audio.loop = true

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
    (startTime: Dayjs, time: number) => {
      setIsEnded(false)
      audio.load()

      const id = setInterval(() => {
        setTime(_getTime(time, startTime))
      }, 1000)
      setIntervalId(id)

      const currentTimerId = setTimeout(() => {
        clearInterval(id)
        setTimerId(undefined)
        setIntervalId(undefined)
        setIsEnded(true)
        void audio.play()
      }, time)

      setTimerId(currentTimerId)
    },
    [audio]
  )

  const start = useCallback(
    (startTime: Dayjs) => {
      if (timerId !== undefined && intervalId !== undefined) return
      if (time < 1) {
        console.warn('required set time `> 0`')
        return
      }
      _countTime(startTime, duration)
    },
    [duration, _countTime, timerId, intervalId, time]
  )

  const unpause = useCallback(
    (startTime: Dayjs) => {
      if (timerId !== undefined && intervalId !== undefined) {
        return
      }
      _countTime(startTime, time)
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
      audio.pause()
    }
  }, [timerId, intervalId, time, duration, audio])

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
