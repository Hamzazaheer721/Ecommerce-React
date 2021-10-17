import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AboutWhatsPaysContainer = styled.div`
  padding: 14px 0;
  background-color: ${(props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    props.theme.sidebarColor.aboutBannerBackground};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`

export const PIcon = styled(FontAwesomeIcon)`
  margin: 0 5px;
`
export const WhatsText = styled.span`
  color: ${(props) => props.theme.sidebarColor.darkBlue};
`
export const PaysText = styled.span`
  color: ${(props) => props.theme.sidebarColor.lightBlue};
`
