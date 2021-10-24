import { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/pro-light-svg-icons'
import { LogoutButton, WrapContainer } from './index.styled'

const LogoutButtonComponent = memo(() => (
  <>
    <WrapContainer>
      <LogoutButton>
        <FontAwesomeIcon icon={faSignOut} style={{ marginRight: '4px' }} />
        Logout
      </LogoutButton>
    </WrapContainer>
  </>
))
export default LogoutButtonComponent
