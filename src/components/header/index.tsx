import { memo, useCallback, useContext, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'
import { ThemeContext } from 'styled-components'
import Icon from '../icon'
import SidebarComponent from '../sidebar'
import InputComponent from './components/inputField'
import HeaderRightComponent from './components/headerRightArea'
import {
  HeaderContainer,
  HeaderIconContainer,
  HeaderInputContainer,
  HeaderRightIconsContainer
} from './index.styled'

const HeaderComponent = memo(() => {
  const theme = useContext(ThemeContext)

  const { goBack } = useHistory()
  const { location } = window

  const isHomePage = useMemo(() => location.pathname === '/', [location])

  const handlebackIconClick = useCallback(() => {
    goBack()
  }, [])

  return (
    <>
      <HeaderContainer>
        <HeaderIconContainer>
          {isHomePage ? (
            <SidebarComponent />
          ) : (
            <Icon
              onClick={handlebackIconClick}
              icon={faArrowLeft}
              color={theme.color.primary}
            />
          )}
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
