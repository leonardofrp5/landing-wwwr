import { DateTime } from 'luxon'

const currentTime = DateTime.utc()

export const getScheduleTime = (minutes: string) => {
  return currentTime.plus({ minutes: Number(minutes) }).toJSDate()
}
