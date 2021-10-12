/* eslint-disable react/require-default-props */
import { FC, memo } from 'react'
import { CloseOutlined } from '@ant-design/icons'
// import { Button } from 'antd'
// import { TabList } from './helper'
import 'antd/dist/antd.css'
import {
  CustomDrawer,
  Header,
  CrossIcon,
  HeaderArea,
  HeaderAreaImage,
  HeaderAreaH1
  // ListArea,
  // ListIcon,
  // ListTitle
} from './index.styled'
import MenuComponent from './components/Menu'
import LogoutButtonComponent from './components/LogoutButton'
import AboutWhatsPaysComponent from './components/AboutWhatsPays'

interface ISidebarComponentProps {
  visible: boolean
  handleDrawer: () => void
}

const SidebarComponent: FC<ISidebarComponentProps> = memo(
  ({ visible, handleDrawer }: ISidebarComponentProps) => {
    console.info('I am rendered')
    return (
      <>
        <CustomDrawer
          placement="left"
          closable={false}
          onClose={handleDrawer}
          visible={visible}
        >
          <Header>
            <CrossIcon>
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
          {/* {TabList.map((item) => (
          <ListArea>
            <ListIcon>
              {' '}
              <CrossIcon />
            </ListIcon>
            <ListTitle>{item.title}</ListTitle>
          </ListArea>
        ))} */}
          <MenuComponent />
          <LogoutButtonComponent />
          <AboutWhatsPaysComponent />
        </CustomDrawer>
      </>
    )
  }
)

export default SidebarComponent
