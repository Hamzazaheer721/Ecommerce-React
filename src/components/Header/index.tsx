import { memo, useCallback, useState } from 'react'
import InputComponent from './components/InputField'
import {
  HeaderContainer,
  HeaderIconContainer,
  HeaderInputContainer,
  HeaderRightIconsContainer
} from './index.styled'
import SidebarComponent from '../Sidebar'

const HeaderComponent = memo(() => {
  const [visible, setVisible] = useState<boolean>(false)

  const handleDrawer = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return (
    <>
      <HeaderContainer>
        <HeaderIconContainer onClick={handleDrawer}>
          Click me
          {visible && (
            <SidebarComponent
              handleDrawer={handleDrawer}
              visible={visible}
            />
          )}
        </HeaderIconContainer>
        <HeaderInputContainer>
          <InputComponent />
        </HeaderInputContainer>
        <HeaderRightIconsContainer>
          icons
        </HeaderRightIconsContainer>
      </HeaderContainer>
    </>
  )
})

export default HeaderComponent
