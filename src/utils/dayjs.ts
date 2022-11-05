import dayjs, { Dayjs } from 'dayjs'

export type { Dayjs }

const getCurrentTime = (): Dayjs => {
  return dayjs()
}

export { dayjs, getCurrentTime }
