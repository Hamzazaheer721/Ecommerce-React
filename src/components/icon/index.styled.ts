import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IIconStyle {
  color?: string
}
export const IconStyle = styled(FontAwesomeIcon)<IIconStyle>`
  width: 25px !important;
  height: 25px !important;
  vertical-align: middle;
  text-align: center;
  padding: 3px;
  font-size: 20px;
  background-color: white;
  border-radius: 50%;
  color: ${({ color }) => color};
  cursor: pointer;
`
