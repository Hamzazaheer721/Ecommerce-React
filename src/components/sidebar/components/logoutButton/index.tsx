import { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/pro-light-svg-icons'
import { useHistory } from 'react-router-dom'
import { LogoutButton, WrapContainer } from './index.styled'

const LogoutButtonComponent = memo(() => {
  const history = useHistory()
  return (
    <>
      <WrapContainer>
        <LogoutButton onClick={() => history.push('/login')}>
          <FontAwesomeIcon icon={faSignOut} style={{ marginRight: '4px' }} />
          Logout
        </LogoutButton>
      </WrapContainer>
    </>
  )
})
export default LogoutButtonComponent
