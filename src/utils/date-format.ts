import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

//东八区  加上8小时utcOffset(8)   utc是0时区
//dayjs本身没有utc
dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}
