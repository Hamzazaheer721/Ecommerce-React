/* eslint-disable react/require-default-props */
import { useState, memo } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import {
  CustomDrawer,
  Header,
  CrossIcon,
  HeaderArea,
  HeaderAreaImage,
  HeaderAreaH1,
  ArrowLeftIcon
} from './index.styled'
import MenuComponent from './components/Menu'
import LogoutButtonComponent from './components/LogoutButton'
import AboutWhatsPaysComponent from './components/AboutWhatsPays'

const SidebarComponent = memo(() => {
  const [visible, setVisible] = useState<boolean>(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <ArrowLeftIcon onClick={showDrawer} />

      <CustomDrawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Header>
          <CrossIcon onClick={onClose}>
            <CloseOutlined />
          </CrossIcon>
          <br />
          <HeaderArea>
            <HeaderAreaImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <HeaderAreaH1>
              Glen Maxwel l
              <br />
              0322-4991944
            </HeaderAreaH1>
          </HeaderArea>
        </Header>
        <MenuComponent />
        <LogoutButtonComponent />
        <AboutWhatsPaysComponent />
      </CustomDrawer>
    </>
  )
})

export default SidebarComponent
