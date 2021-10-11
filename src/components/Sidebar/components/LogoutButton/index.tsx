import { LogoutOutlined } from '@ant-design/icons'
import { memo } from 'react'
import { LogoutButton, WrapContainer } from './index.styled'

const LogoutButtonComponent = memo(() => (
  <>
    <WrapContainer>
      <LogoutButton>
        <LogoutOutlined />
        Logoout
      </LogoutButton>
    </WrapContainer>
  </>
))
export default LogoutButtonComponent
