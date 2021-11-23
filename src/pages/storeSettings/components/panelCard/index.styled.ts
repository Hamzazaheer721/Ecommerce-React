import styled from 'styled-components'

interface IPanelCardContainerProps {
  $grayColor?: boolean
}

export const PanelCardContainer = styled.div<IPanelCardContainerProps>`
  display: flex;
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: ${({ $grayColor }) => ($grayColor ? '#F8F8F8' : '#FFFFFF')};
  padding: 10px 30px;
`
