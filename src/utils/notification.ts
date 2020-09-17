import { message } from "antd"

type PropsType = {
  title: string
  body?: string
  icon?: string
  delay?: number
}

export default function notification({
  title,
  body,
  icon,
  delay = 0,
}: PropsType): void | number {
  if (!window.Notification) {
    message.info("抱歉！你的浏览器不支持闹钟弹窗")
    return
  }

  if (Notification.permission === 'denied') {
    message.info("通知权限被禁止，请手动更改浏览器通知权限")
    return
  }

  if (Notification.permission !== "granted") {
    message.info("请允许发送通知信息")
    Notification.requestPermission().then((res) => {
      if (res === "granted") {
        return window.setTimeout(() => {
          new Notification(title, {
            body,
            icon,
          })
        }, delay)
      } else {
      }
    })
  } else {
    return window.setTimeout(() => {
      new Notification(title, {
        body,
        icon,
      })
    }, delay)
  }
}
