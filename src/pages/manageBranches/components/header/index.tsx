import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Container, Icon } from './index.styled'

const Header = () => (
  <Container>
    <Icon icon={faTimes} />
    <span>Manage Branches</span>
  </Container>
)

export default Header
