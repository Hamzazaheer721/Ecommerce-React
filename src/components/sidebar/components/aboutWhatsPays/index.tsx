import { memo } from 'react'
import { faSignOut } from '@fortawesome/pro-light-svg-icons'
import {
  AboutWhatsPaysContainer,
  PIcon,
  WhatsText,
  PaysText
} from './index.styled'

const AboutWhatsPaysComponent = memo(() => (
  <AboutWhatsPaysContainer>
    About
    <PIcon icon={faSignOut} />
    <WhatsText> What</WhatsText>
    <PaysText> Pays </PaysText>
  </AboutWhatsPaysContainer>
))
export default AboutWhatsPaysComponent
