/* eslint-disable */
import { memo } from 'react'
import Menu from 'antd/es/menu'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import {
  faUser,
  faTachometerAltFast,
  faFileUser,
  faPlus,
  faEye,
  faBellOn,
  faSlidersV,
  faTasks,
  faFileAlt,
  faFile,
  faCommentsAlt,
  faUsers,
  faListUl,
  faBox,
  faUserFriends,
  faUserGraduate,
  faBadgeCheck,
  faBadgePercent
} from '@fortawesome/pro-light-svg-icons'
import Icon from '../../../icon'
import { SubMenuItem, CustomMenu, IconContainer } from './index.styled'

const MenuComponent = memo(() => {
  const { SubMenu } = Menu

  return (
    <>
      <CustomMenu style={{ width: 250 }} defaultOpenKeys={['']} mode="inline">
        <Menu.Item
          key="1"
          icon={
            <IconContainer>
              <Icon icon={faUser} />
            </IconContainer>
          }
        >
          <Link to={'/user-profile'}>Profile</Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={
            <IconContainer>
              <Icon icon={faTachometerAltFast} />
            </IconContainer>
          }
        >
          Dashboard
        </Menu.Item>
        <SubMenu
          key="sub4"
          icon={
            <IconContainer>
              <Icon icon={faFileUser} />
            </IconContainer>
          }
          title="Business Profile"
        >
          <SubMenuItem
            icon={
              <IconContainer>
                <Icon icon={faPlus} />
              </IconContainer>
            }
            key="15"
          >
            <Link to="/business-profile">Create</Link>
          </SubMenuItem>
          <SubMenuItem
            icon={
              <IconContainer>
                <Icon icon={faEye} />
              </IconContainer>
            }
            key="16"
          >
            View
          </SubMenuItem>
        </SubMenu>
        <Menu.Item
          key="3"
          icon={
            <IconContainer>
              <Icon icon={faBellOn} />
            </IconContainer>
          }
        >
          Subscription
        </Menu.Item>
        <Menu.Item
          key="15"
          icon={
            <IconContainer>
              <Icon icon={faSlidersV} />
            </IconContainer>
          }
        >
          Setting
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={
            <IconContainer>
              <Icon icon={faTasks} />
            </IconContainer>
          }
        >
          Orders
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={
            <IconContainer>
              <Icon icon={faFileAlt} />
            </IconContainer>
          }
        >
          Invoices
        </Menu.Item>
        <Menu.Item
          key="6"
          icon={
            <IconContainer>
              <Icon icon={faFile} />
            </IconContainer>
          }
        >
          Transitions
        </Menu.Item>
        <Menu.Item
          key="7"
          icon={
            <IconContainer>
              <Icon icon={faCommentsAlt} />
            </IconContainer>
          }
        >
          Chat
        </Menu.Item>
        <Menu.Item
          key="8"
          icon={
            <IconContainer>
              <Icon icon={faUsers} />
            </IconContainer>
          }
        >
          Users
        </Menu.Item>
        <Menu.Item
          key="9"
          icon={
            <IconContainer>
              <Icon icon={faListUl} />
            </IconContainer>
          }
        >
          Categories
        </Menu.Item>
        <Menu.Item
          key="10"
          icon={
            <IconContainer>
              <Icon icon={faBox} />
            </IconContainer>
          }
        >
          Products
        </Menu.Item>
        <Menu.Item
          key="11"
          icon={
            <IconContainer>
              <Icon icon={faUserFriends} />
            </IconContainer>
          }
        >
          Classes
        </Menu.Item>
        <Menu.Item
          key="12"
          icon={
            <IconContainer>
              <Icon icon={faUserGraduate} />
            </IconContainer>
          }
        >
          Students
        </Menu.Item>
        <Menu.Item
          key="13"
          icon={
            <IconContainer>
              <Icon icon={faBadgeCheck} />
            </IconContainer>
          }
        >
          Deals/Promotions
        </Menu.Item>
        <Menu.Item
          key="14"
          icon={
            <IconContainer>
              <Icon icon={faBadgePercent} />
            </IconContainer>
          }
        >
          Voucher
        </Menu.Item>
      </CustomMenu>
    </>
  )
})
export default MenuComponent
