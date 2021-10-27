/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'antd'
import { device } from '../../../../styles/devices'

interface IGenericProps {
  color: string
  isSelected: boolean
}
export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

export const CustomizeModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
  }

  @media ${device.mobile} {
    .ant-modal {
      padding: 0 40px !important;
    }
  }
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
export const PendingContainer = styled.div<IGenericProps>`
  display: inline-block;
  /* background-color: ${({ isSelected, color }) =>
    isSelected ? color : '#00000'}; */

  ${Icon} {
    background-color: ${({ isSelected, color }) => (isSelected ? color : '')};
    color: ${({ isSelected }) => (isSelected ? 'white' : '')};
    border: 1px solid
      ${({ isSelected, color }) => (isSelected ? color : '#00000')};
  }
  ${Status} {
    color: ${({ isSelected }) => (isSelected ? 'black' : '')};
  }
`
export const ConfirmedContainer = styled.div<IGenericProps>`
  display: inline-block;

  ${Icon} {
    background-color: ${({ isSelected, color }) => (isSelected ? color : '')};
    color: ${({ isSelected }) => (isSelected ? 'white' : '')};
    border: 1px solid
      ${({ isSelected, color }) => (isSelected ? color : '#00000')};
  }
  ${Status} {
    color: ${({ isSelected }) => (isSelected ? 'black' : '')};
  }
`

export const ProcessingContainer = styled.div<IGenericProps>`
  display: inline-block;

  ${Icon} {
    background-color: ${({ isSelected, color }) => (isSelected ? color : '')};
    color: ${({ isSelected }) => (isSelected ? 'white' : '')};
    border: 1px solid
      ${({ isSelected, color }) => (isSelected ? color : '#00000')};
  }
  ${Status} {
    color: ${({ isSelected }) => (isSelected ? 'black' : '')};
  }
`

export const CompletedContainer = styled.div<IGenericProps>`
  display: inline-block;

  ${Icon} {
    background-color: ${({ isSelected, color }) => (isSelected ? color : '')};
    color: ${({ isSelected }) => (isSelected ? 'white' : '')};
    border: 1px solid
      ${({ isSelected, color }) => (isSelected ? color : '#00000')};
  }
  ${Status} {
    color: ${({ isSelected }) => (isSelected ? 'black' : '')};
  }
`

export const CancelledContainer = styled.div<IGenericProps>`
  display: inline-block;

  ${Icon} {
    background-color: ${({ isSelected, color }) => (isSelected ? color : '')};
    color: ${({ isSelected }) => (isSelected ? 'white' : '')};
    border: 1px solid
      ${({ isSelected, color }) => (isSelected ? color : '#00000')};
  }
  ${Status} {
    color: ${({ isSelected }) => (isSelected ? 'black' : '')};
  }
`

export const RefundContainer = styled.div<IGenericProps>`
  display: inline-block;

  ${Icon} {
    background-color: ${({ isSelected, color }) => (isSelected ? color : '')};
    color: ${({ isSelected }) => (isSelected ? 'white' : '')};
    border: 1px solid
      ${({ isSelected, color }) => (isSelected ? color : '#00000')};
  }
  ${Status} {
    color: ${({ isSelected }) => (isSelected ? 'black' : '')};
  }
`
export const DoneButton = styled.button`
  background: ${(props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    props.theme.gradientButton.green};
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  width: 156px;
  padding: 0;
  margin: 18px auto 0 auto;
`
