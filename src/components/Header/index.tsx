import { memo, useCallback, useState } from 'react'
import InputComponent from './components/InputField'
import {
  HeaderContainer,
  HeaderIconContainer,
  HeaderInputContainer,
  HeaderRightIconsContainer,
  ArrowLeftIcon
} from './index.styled'
import SidebarComponent from '../Sidebar'
import HeaderRightComponent from './components/HeaderRightArea'

const HeaderComponent = memo(() => {
  const [visible, setVisible] = useState<boolean>(false)

  const handleDrawer = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return (
    <>
      <HeaderContainer>
        <HeaderIconContainer onClick={handleDrawer}>
          <ArrowLeftIcon />

          <SidebarComponent
            handleDrawer={handleDrawer}
            visible={visible}
          />
        </HeaderIconContainer>
        <HeaderInputContainer>
          <InputComponent />
        </HeaderInputContainer>
        <HeaderRightIconsContainer>
          <HeaderRightComponent />
        </HeaderRightIconsContainer>
      </HeaderContainer>
    </>
  )
})

export default HeaderComponent
