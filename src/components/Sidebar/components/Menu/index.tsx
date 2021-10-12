/* eslint-disable */
import { memo } from 'react'
import { Menu } from 'antd'
import {
  SettingOutlined,
  PlusOutlined,
  EyeOutlined,
  UserOutlined,
  DashboardOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import { SubMenuItem } from './index.styled'
import StyledIconComponent from './styleIcon'

const { SubMenu } = Menu
// const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

const MenuComponent = memo(() => {
  return (
    <>
      <Menu
        style={{ width: 250 }}
        defaultOpenKeys={['']}
        mode="inline"
      >
        <Menu.Item
          key="1"
          icon={<StyledIconComponent Icon={UserOutlined} />}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={
            <StyledIconComponent Icon={DashboardOutlined} />
          }
        >
          Dashboard
        </Menu.Item>
        <SubMenu
          key="sub4"
          icon={
            <StyledIconComponent Icon={SettingOutlined} />
          }
          title="Business Profile"
        >
          <SubMenuItem
            icon={
              <StyledIconComponent Icon={PlusOutlined} />
            }
            key="15"
          >
            Create
          </SubMenuItem>
          <SubMenuItem
            icon={
              <StyledIconComponent Icon={EyeOutlined} />
            }
            key="16"
          >
            View
          </SubMenuItem>
        </SubMenu>
        <Menu.Item
          key="3"
          icon={
            <StyledIconComponent Icon={DashboardOutlined} />
          }
        >
          Subscription
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={
            <StyledIconComponent Icon={DashboardOutlined} />
          }
        >
          Orders
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={
            <StyledIconComponent Icon={DashboardOutlined} />
          }
        >
          Invoices
        </Menu.Item>
        <Menu.Item
          key="6"
          icon={
            <StyledIconComponent Icon={DashboardOutlined} />
          }
        >
          Transitions
        </Menu.Item>
        <Menu.Item
          key="7"
          icon={
            <StyledIconComponent Icon={DashboardOutlined} />
          }
        >
          Chat
        </Menu.Item>
        <Menu.Item
          key="8"
          icon={
            <StyledIconComponent Icon={DashboardOutlined} />
          }
        >
          Users
        </Menu.Item>
        <Menu.Item
          key="9"
          icon={
            <StyledIconComponent Icon={DashboardOutlined} />
          }
        >
          Categories
        </Menu.Item>
        <Menu.Item
          key="10"
          icon={
            <StyledIconComponent Icon={DashboardOutlined} />
          }
        >
          Products
        </Menu.Item>
        <Menu.Item
          key="11"
          icon={<StyledIconComponent Icon={UserOutlined} />}
        >
          Classes
        </Menu.Item>
        <Menu.Item
          key="12"
          icon={
            <StyledIconComponent Icon={DashboardOutlined} />
          }
        >
          Students
        </Menu.Item>
        <Menu.Item
          key="13"
          icon={<StyledIconComponent Icon={UserOutlined} />}
        >
          Deals/Promotions
        </Menu.Item>
        <Menu.Item
          key="14"
          icon={
            <StyledIconComponent Icon={DashboardOutlined} />
          }
        >
          Voucher
        </Menu.Item>
      </Menu>
    </>
  )
})
export default MenuComponent
