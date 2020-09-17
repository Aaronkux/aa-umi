export type Time = {
  day: number
  hours: number
  minutes: number
  seconds: number
}

export type TargetTime = Time & { last?: number }
type TempDate = {
  tempDate: Date
  last: number
}

export function getProgress(targetTimes: TargetTime[], currentTime: Date) {
  let nowCopy = new Date(currentTime.getTime())
  let checkingDay = currentTime.getUTCDay()
  let passedTimes: TempDate[] = []
  while (
    currentTime.getUTCDay() - checkingDay < 8 &&
    passedTimes.length === 0
  ) {
    for (let target of targetTimes) {
      if ((target.day === 7 || target.day === checkingDay % 7) && target.last) {
        const tempDate = new Date(
          new Date(nowCopy.getTime()).setUTCHours(
            target.hours,
            target.minutes,
            target.seconds
          )
        )
        if (tempDate <= currentTime) {
          passedTimes.push({ tempDate, last: target.last })
        }
      }
    }
    nowCopy = new Date(nowCopy.getTime() - 86400000)
    checkingDay--
  }
  if (passedTimes.length > 0) {
    let closestTime = passedTimes[0]
    for (let passDate of passedTimes) {
      if (passDate.tempDate.getTime() > closestTime.tempDate.getTime())
        closestTime = passDate
    }
    const lastMinutes = closestTime.last
    const finishTime =
      closestTime.tempDate.getTime() +
      lastMinutes * 60000
    if (currentTime.getTime() >= finishTime) {
      return -1
    } else {
      return finishTime - currentTime.getTime()
    }
  } else {
    return -1
  }
}

export function getClosestTimes(
  targetTimes: TargetTime[],
  currentTime: Date,
  expectOutputNumbers: number
) {
  let output: Date[] = []
  let nowCopy = new Date(currentTime.getTime())
  let checkingDay = currentTime.getUTCDay()
  while (
    output.length < expectOutputNumbers &&
    checkingDay - currentTime.getUTCDay() < 8
  ) {
    targetTimes.forEach((target) => {
      if (target.day === 7 || target.day === checkingDay % 7) {
        const tempDate = new Date(
          new Date(nowCopy.getTime()).setUTCHours(
            target.hours,
            target.minutes,
            target.seconds
          )
        )
        if (tempDate > currentTime) {
          output.push(tempDate)
        }

        if (output.length >= expectOutputNumbers) {
          return output
        }
      }
    })
    nowCopy = new Date(nowCopy.getTime() + 86400000)
    checkingDay++
  }
  if (output.length > expectOutputNumbers) {
    return output.slice(0, expectOutputNumbers)
  } else {
    return output
  }
}

export function secondsToRemain(milisecondsLeft: number): number[]
export function secondsToRemain(
  milisecondsLeft: number,
  format: Boolean
): string
export function secondsToRemain(
  milisecondsLeft: number,
  format?: Boolean
): number[] | string {
  let secondsLeft = Math.round(milisecondsLeft / 1000)
  const days = Math.floor(secondsLeft / 86400)
  const hours = Math.floor((secondsLeft - 86400 * days) / 3600)
  const minutes = Math.floor((secondsLeft - 86400 * days - 3600 * hours) / 60)
  const seconds = secondsLeft - 86400 * days - 3600 * hours - 60 * minutes
  if (format) {
    let res = ""
    res += days === 0 ? "" : days + ":"
    res += hours === 0 ? (days === 0 ? "" : "00:") : timeFormat(hours) + ":"
    res += timeFormat(minutes) + ":"
    res += timeFormat(seconds)
    return res
  }
  return [days, hours, minutes, seconds]
}

export function timeFormat(timeNum: number) {
  return timeNum < 10 ? "0" + timeNum : timeNum.toString()
}

export function getDayInChinese(date: Date) {
  const day = date.getDay()
  return ["日", "一", "二", "三", "四", "五", "六"][day]
}

export function useGameTime(now: Date) {
  let nowCopy = new Date(now.getTime());
  nowCopy.setUTCHours(2, 20, 0);

  const gap = ((+now - +nowCopy) / 1000 + 14400) % 14400;
  const gapInGame = gap * 6 * 1000;
  const [, hour, minutes] = secondsToRemain(gapInGame);
  const zone = now.getTimezoneOffset() / 60;
  const zoneCHS =
    zone === 0
      ? '格林尼治时间'
      : zone < 0
      ? `东${Math.abs(zone)}区`
      : `西${Math.abs(zone)}区`;
  return {
    hour: timeFormat(hour),
    minutes: timeFormat(minutes),
    timezone: zoneCHS,
  };
}
