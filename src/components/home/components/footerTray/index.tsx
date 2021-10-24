import { useEffect, useRef, memo } from 'react'
import {
  faHomeAlt,
  faShoppingCart,
  faBallotCheck,
  faComments
} from '@fortawesome/pro-light-svg-icons'

import {
  Container,
  IconsStyle,
  QRImage,
  QRImageContainer
} from './index.styled'

const FooterTray = memo(() => {
  const focusDiv = useRef<any>()

  useEffect(() => {
    if (focusDiv.current) focusDiv.current.focus()
  }, [focusDiv])

  return (
    <Container>
      <IconsStyle icon={faHomeAlt} />
      <IconsStyle icon={faShoppingCart} />
      <QRImageContainer>
        <QRImage src="/images/whatspays-qr-code-scanner.gif" />
      </QRImageContainer>
      <IconsStyle icon={faBallotCheck} />
      <IconsStyle icon={faComments} />
    </Container>
  )
})

export default FooterTray
