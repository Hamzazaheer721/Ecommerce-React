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

const { SubMenu } = Menu
// const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

const MenuComponent = memo(() => {
  return (
    <>
      <Menu style={{ width: 250 }} defaultOpenKeys={['']} mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="2" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Business Profile">
          <SubMenuItem icon={<PlusOutlined />} key="15">
            Create
          </SubMenuItem>
          <SubMenuItem icon={<EyeOutlined />} key="16">
            View
          </SubMenuItem>
        </SubMenu>
        <Menu.Item key="3" icon={<UserOutlined />}>
          Subscription
        </Menu.Item>
        <Menu.Item key="4" icon={<DashboardOutlined />}>
          Orders
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          Invoices
        </Menu.Item>
        <Menu.Item key="6" icon={<DashboardOutlined />}>
          Transitions
        </Menu.Item>
        <Menu.Item key="7" icon={<UserOutlined />}>
          Chat
        </Menu.Item>
        <Menu.Item key="8" icon={<DashboardOutlined />}>
          Users
        </Menu.Item>
        <Menu.Item key="9" icon={<UserOutlined />}>
          Categories
        </Menu.Item>
        <Menu.Item key="10" icon={<DashboardOutlined />}>
          Products
        </Menu.Item>
        <Menu.Item key="11" icon={<UserOutlined />}>
          Classes
        </Menu.Item>
        <Menu.Item key="12" icon={<DashboardOutlined />}>
          Students
        </Menu.Item>
        <Menu.Item key="13" icon={<UserOutlined />}>
          Deals/Promotions
        </Menu.Item>
        <Menu.Item key="14" icon={<DashboardOutlined />}>
          Voucher
        </Menu.Item>
      </Menu>
    </>
  )
})
export default MenuComponent
