/* eslint-disable arrow-body-style */

import { Menu, Dropdown } from 'antd'
import ButtonComponent from '../../../button'
import NotificationComponent from './NotificationsComponent'
import { userNotifications } from './Helper'
import {
  SearchIconStyle,
  BellhIconStyle,
  ProfileImage,
  Container,
  CustomMenu,
  ButtonContainer
} from './index.styled'

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

const HeaderRightComponent = () => (
  <>
    <Container>
      <SearchIconStyle />
      <Dropdown
        overlay={NotificationsMenu}
        placement="bottomLeft"
        trigger={['click']}
        arrow
      >
        <BellhIconStyle />
      </Dropdown>
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <ProfileImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      </Dropdown>
    </Container>
  </>
)

export default HeaderRightComponent
