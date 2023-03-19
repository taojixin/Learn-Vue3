import dayjs from 'dayjs'

export function formatMonthDay(date) {
  return dayjs(date).format("MM月DD日")
}

export function getDiffDate (startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day")
}