/*eslint-disable*/
import { FC } from 'react'
import {
  Container,
  Name,
  NotificationArea,
  NameArea,
  OrderTitle,
  OrderDescriptioon
} from './index.styled'

const NotificationComponent: FC<{ colorNew: string }> = ({
  colorNew
}) => (
  <>
    <Container changeBackground={false}>
      <NameArea>
        <Name style={{ backgroundColor: colorNew }}>w</Name>
      </NameArea>
      <NotificationArea>
        <OrderTitle>Order #LKHFD093</OrderTitle>
        <OrderDescriptioon>
          Great choice. Your order from WhatsPays has been
          placed. Your order will be delivered shortly after
          confirmation.
        </OrderDescriptioon>
      </NotificationArea>
    </Container>
  </>
)

export default NotificationComponent
