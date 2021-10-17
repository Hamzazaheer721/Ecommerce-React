/* eslint-disable react/require-default-props */
import { useState, memo, useContext } from 'react'
import {
  faBars,
  faTimes
} from '@fortawesome/pro-light-svg-icons'
import { ThemeContext } from 'styled-components'
import MenuComponent from './components/menu'
import LogoutButtonComponent from './components/logoutButton'
import AboutWhatsPaysComponent from './components/aboutWhatsPays'
import Icon from '../icon'
import 'antd/dist/antd.css'
import {
  CustomDrawer,
  Header,
  CrossIcon,
  HeaderArea,
  HeaderAreaImage,
  HeaderAreaH1
} from './index.styled'

const SidebarComponent = memo(() => {
  const [visible, setVisible] = useState<boolean>(false)
  const theme = useContext(ThemeContext)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Icon
        onClick={showDrawer}
        icon={faBars}
        color={theme.color.primary}
      />
      <CustomDrawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Header>
          <CrossIcon onClick={onClose}>
            <Icon
              icon={faTimes}
              color={theme.color.primary}
            />
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
