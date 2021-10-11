import { LogoutOutlined } from '@ant-design/icons'
import { LogoutButton, WrapContainer } from './index.styled'

const LogoutButtonComponent = () => (
  <>
    <WrapContainer>
      <LogoutButton>
        <LogoutOutlined />
        Logoout
      </LogoutButton>
    </WrapContainer>
  </>
)

export default LogoutButtonComponent
