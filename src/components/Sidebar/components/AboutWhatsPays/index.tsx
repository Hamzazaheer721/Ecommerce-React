import { memo } from 'react'
import {
  AboutWhatsPaysContainer,
  PIcon,
  WhatsText,
  PaysText
} from './index.styled'

const AboutWhatsPaysComponent = memo(() => (
  <AboutWhatsPaysContainer>
    About
    <PIcon />
    <WhatsText> What</WhatsText>
    <PaysText> Pays </PaysText>
  </AboutWhatsPaysContainer>
))
export default AboutWhatsPaysComponent
