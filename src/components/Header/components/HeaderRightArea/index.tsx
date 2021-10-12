import 'antd/dist/antd.css'
import { Menu, Dropdown } from 'antd'
import {
  SearchIconStyle,
  BellhIconStyle,
  ProfileImage,
  Container
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

const HeaderRightComponent = () => (
  <>
    <Container>
      <SearchIconStyle />
      <BellhIconStyle />

      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <ProfileImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      </Dropdown>
    </Container>
  </>
)

export default HeaderRightComponent
