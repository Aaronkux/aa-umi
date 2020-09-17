import React, { Props } from 'react'
import BasicLayout from './BasicLayout'

type PropsType = {
  children: React.ReactNode
}
export default function Layout({children}: PropsType) {
  return (
  <BasicLayout>{children}</BasicLayout>
  )
}
