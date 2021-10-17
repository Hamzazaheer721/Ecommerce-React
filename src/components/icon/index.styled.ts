import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IIconStyle {
  color?: string
}
export const IconStyle = styled(
  FontAwesomeIcon
)<IIconStyle>`
  font-size: 20px;
  color: ${({ color }) => color};
  cursor: pointer;
`
