import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

import { SocialIconStyle, SocialIconsContainer } from './index.styled'

const SocialIcons = () => (
  <>
    <SocialIconsContainer>
      <SocialIconStyle icon={faWhatsapp} />
      <SocialIconStyle icon={faFacebookF} />
      <SocialIconStyle icon={faInstagram} />
      <SocialIconStyle icon={faTwitter} />
      <SocialIconStyle icon={faLinkedinIn} />
      <SocialIconStyle icon={faYoutube} />
    </SocialIconsContainer>
  </>
)

export default SocialIcons
