import { memo } from 'react'
import InputComponent from './components/newInputField'
import {
  HeaderContainer,
  HeaderIconContainer,
  HeaderInputContainer,
  HeaderRightIconsContainer
} from './index.styled'
import SidebarComponent from '../newSidebar'
// import HeaderRightComponent from './components/headerRightArea'

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
        {/* <HeaderRightComponent /> */}
      </HeaderRightIconsContainer>
    </HeaderContainer>
  </>
))

export default HeaderComponent
