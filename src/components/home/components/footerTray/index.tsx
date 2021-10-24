import {
  faHomeAlt,
  faShoppingCart,
  faQrcode,
  faBallotCheck,
  faComments
} from '@fortawesome/pro-light-svg-icons'
import { Container, IconsStyle } from './index.styled'

const FooterTray = () => (
  <Container>
    <IconsStyle icon={faHomeAlt} />
    <IconsStyle icon={faShoppingCart} />
    <IconsStyle icon={faQrcode} />
    <IconsStyle icon={faBallotCheck} />
    <IconsStyle icon={faComments} />
  </Container>
)

export default FooterTray
