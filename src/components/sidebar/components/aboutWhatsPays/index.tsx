import { memo } from 'react'

import {
  AboutWhatsPaysContainer,
  WhatsPaysImage
  // WhatsText,
  // PaysText
} from './index.styled'

const AboutWhatsPaysComponent = memo(() => (
  <AboutWhatsPaysContainer>
    <span>About</span>
    {/* <WhatsText> What</WhatsText>
    <PaysText> Pays </PaysText> */}
    <WhatsPaysImage src="/images/whatspays-logo.png" alt="Whatspays" />
  </AboutWhatsPaysContainer>
))
export default AboutWhatsPaysComponent
