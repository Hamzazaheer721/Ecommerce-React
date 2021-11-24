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
  gap: 10px;
`
export const PanelCardLeftContainer = styled.div``

export const PanelCardRightContainer = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
`

export const PanelCardRightHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const PanelCardRightContainerDescription = styled.span`
  color: ${(props) => props.theme.color.darkGray};
  padding-right: 3rem;
`
