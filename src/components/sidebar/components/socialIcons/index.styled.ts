import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialIconStyle = styled(FontAwesomeIcon)`
  font-size: 18px;
  cursor: pointer;
`

export const SocialIconsContainer = styled.div`
  padding: 0 5px;
  margin: 17px 0;
  ${SocialIconStyle} {
    width: 16.6%;
    text-align: center;
    display: inline-block;
    display: -moz-inline-box;
  }
`
