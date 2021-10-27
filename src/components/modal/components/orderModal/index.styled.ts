import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  font-weight: 600;
`
export const Icon = styled(FontAwesomeIcon)`
  width: 30px !important;
  height: 30px !important;
  padding: 5px;
  align-items: center;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  color: ${(props) => props.theme.color.lightGray};
`

export const Status = styled.span`
  margin-left: 20px;
  color: ${(props) => props.theme.color.lightGray};
`
export const BorderLine = styled.div`
  margin-left: 15px;
  color: ${(props) => props.theme.color.lightGray};
  height: 25px;
  border-left: 1px solid ${(props) => props.theme.color.lightGray};
`
export const PendingContainer = styled.div<{ colors: string }>`
  display: inline-block;
  :hover {
    ${Icon} {
      color: ${({ colors }) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        colors && 'green'};
      border: 1px solid red;
    }
    ${Status} {
      color: red;
    }
  }
`
export const ConfirmedContainer = styled.div<{ colors: string }>`
  display: inline-block;
  :hover {
    ${Icon} {
      color: ${({ colors }) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        colors && 'green'};
      border: 1px solid red;
    }
    ${Status} {
      color: red;
    }
  }
`

export const ProcessingContainer = styled.div<{ colors: string }>`
  display: inline-block;
  :hover {
    ${Icon} {
      color: ${({ colors }) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        colors && 'green'};
      border: 1px solid red;
    }
    ${Status} {
      color: red;
    }
  }
`
