/*eslint-disable*/
import { FC, memo } from 'react'
import {
  Container,
  Name,
  NotificationArea,
  NameArea,
  OrderTitle,
  OrderDescriptioon
} from './index.styled'

const NotificationComponent: FC<{
  nameColor: string
  giveBackgrounColor: boolean
}> = memo(({ nameColor, giveBackgrounColor }) => {
  return (
    <>
      <Container changeBackground={giveBackgrounColor}>
        <NameArea>
          <Name style={{ backgroundColor: nameColor }}>
            w
          </Name>
        </NameArea>
        <NotificationArea>
          <OrderTitle>Order #LKHFD093</OrderTitle>
          <OrderDescriptioon>
            Great choice. Your order from WhatsPays has been
            placed. Your order will be delivered shortly
            after confirmation.
          </OrderDescriptioon>
        </NotificationArea>
      </Container>
    </>
  )
})
export default NotificationComponent
