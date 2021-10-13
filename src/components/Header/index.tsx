import { memo } from 'react'
import InputComponent from './components/InputField'
import {
  HeaderContainer,
  HeaderIconContainer,
  HeaderInputContainer,
  HeaderRightIconsContainer
} from './index.styled'
import SidebarComponent from '../Sidebar'
import HeaderRightComponent from './components/HeaderRightArea'

const HeaderComponent = memo(() => (
  <>
    <HeaderContainer>
      <HeaderIconContainer>
        <SidebarComponent />
      </HeaderIconContainer>
      <HeaderInputContainer>
        <InputComponent />
      </HeaderInputContainer>
      <HeaderRightIconsContainer>
        <HeaderRightComponent />
      </HeaderRightIconsContainer>
    </HeaderContainer>
  </>
))

export default HeaderComponent
