import { memo } from 'react'
import InputComponent from './components/inputField'
import {
  HeaderContainer,
  HeaderIconContainer,
  HeaderInputContainer,
  HeaderRightIconsContainer
} from './index.styled'
import SidebarComponent from '../sidebar'
import HeaderRightComponent from './components/headerRightArea'

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
