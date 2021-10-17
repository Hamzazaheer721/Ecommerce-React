/* eslint-disable arrow-body-style */
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Menu, Dropdown } from 'antd'
import {
  faSearch,
  faBell
} from '@fortawesome/pro-light-svg-icons'
import ButtonComponent from '../../../button'
import NotificationComponent from './notificationsComponent'
import { userNotifications } from './Helper'
import {
  ProfileImage,
  Container,
  CustomMenu,
  ButtonContainer,
  IconContainer
} from './index.styled'

import Icon from '../../../icon'

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

const NotificationsMenu = (
  <CustomMenu>
    {userNotifications.map((userNotification, index) => {
      if (index <= 3) {
        return (
          <CustomMenu.Item>
            <NotificationComponent
              nameColor="#243d82"
              giveBackgrounColor={!!(index % 2)}
            />
          </CustomMenu.Item>
        )
      }
      return null
    })}
    {userNotifications.length >= 3 && (
      <ButtonContainer>
        <ButtonComponent />
      </ButtonContainer>
    )}
  </CustomMenu>
)

const HeaderRightComponent = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Container>
        <IconContainer>
          <Icon
            icon={faSearch}
            color={theme.color.primary}
          />
        </IconContainer>
        <Dropdown
          overlay={NotificationsMenu}
          placement="bottomLeft"
          trigger={['click']}
          arrow
        >
          <IconContainer>
            <Icon
              icon={faBell}
              color={theme.color.primary}
            />
          </IconContainer>
        </Dropdown>
        <Dropdown
          overlay={menu}
          placement="bottomLeft"
          arrow
        >
          <IconContainer>
            <ProfileImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          </IconContainer>
        </Dropdown>
      </Container>
    </>
  )
}

export default HeaderRightComponent
