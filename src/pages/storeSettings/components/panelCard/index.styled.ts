import styled from 'styled-components'
import { device } from '../../../../styles/devices'

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

  @media ${device.mobile}{
    padding: 10px 20px;
  }
  @media ${device.tiny}{
    padding: 10px 20px;
  }
`

export const PanelCardLeftContainer = styled.div`
  flex-basis: 20px;
`

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
  font-size: 12px;
`

export const PanelRightContainerTitle = styled.span`
  font-size: 14px;
  color: #333333;
`

export const PanelCardRightContainerCheckboxContainer = styled.div`
  color: ${(props) => props.theme.color.darkGray};
  font-size: 12px;
  padding-right: 2.5rem;
  display: flex;
  justify-content: space-between;

  @media ${device.mobile}{
    padding-right: 0px;
    flex-direction: column
  }

  @media ${device.tiny}{
    padding-right: 0px;
    flex-direction: column
  }
`
