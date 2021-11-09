import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  color: white;
  padding: 20px;
`
export const Icon = styled(FontAwesomeIcon)`
  color: white;
  margin-right: 20px;
`
