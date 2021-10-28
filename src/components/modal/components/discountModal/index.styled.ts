import styled from 'styled-components'
import { Modal, Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from '../../../../styles/devices'

export const ModalContentContainer = styled.div``
export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
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

export const CustomizeModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
  }
`

export const Title = styled.p`
  font-weight: 500;
`
export const InputContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border: ${(props) => props.theme.borderColor.gray};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  transition: 0.4s;
  padding: 5px;
  margin-bottom: 15px;

  p {
    top: 0;
    left: 0.8rem;
    font-size: 0.8rem;
    background: white;
    opacity: 1;
    color: ${(props) => props.theme.color.lightGray};
  }

  @media ${device.mobile} {
    font-size: 1rem;
  }

  @media ${device.tiny} {
    font-size: 1rem;
  }
`
export const Prefix = styled(FontAwesomeIcon)`
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;

  @media ${device.mobile} {
    font-size: 1rem;
  }

  @media ${device.tiny} {
    font-size: 1rem;
  }
`

export const Suffix = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.6rem;
  right: 0.8rem;
  width: 22px;
  color: ${(props) => props.theme.color.lightGray};

  @media ${device.mobile} {
    font-size: 1rem;
  }

  @media ${device.tiny} {
    font-size: 1rem;
  }
`

export const Label = styled.p`
  color: #c5c5c5;
  font-size: 1rem;
  position: absolute;
  opacity: 0.6;
  pointer-events: none;
  transition: all 0.22s;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  padding: 0 7px;

  @media ${device.mobile} {
    font-size: 12px;
  }
  @media ${device.tiny} {
    font-size: 12px;
  }
`
export const SelectField = styled(Select)`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  box-shadow: none !important;

  .ant-select-selection-item {
    margin-left: 20px !important;
    margin-top: 1.5px;
  }

  .ant-select-selector {
    border: none !important;
    box-shadow: none !important;

    :focus {
      outline: none;
    }
    :focus {
      outline: none;
    }
  }

  ${Label} {
    top: 0;
    left: 0.8rem;
    font-size: 0.8rem;
    opacity: 1;
    color: ${(props) => props.theme.color.lightGray};
  }

  @media ${device.mobile} {
    padding-left: 2.5rem;
    :focus ~ ${Label} {
      left: 0.5rem;
      font-size: 0.8rem;
    }
  }

  @media ${device.tiny} {
    padding-left: 2.5rem;
    :focus ~ ${Label} {
      left: 0.5rem;
      font-size: 0.8rem;
    }
  }
`
export const InputField = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  box-shadow: none !important;
  padding: 8px 0 8px 31px;
  ${Label} {
    top: 0;
    left: 0.8rem;
    font-size: 0.8rem;
    opacity: 1;
    color: ${(props) => props.theme.color.lightGray};
  }

  @media ${device.mobile} {
    padding-left: 2.5rem;
    :focus ~ ${Label} {
      left: 0.5rem;
      font-size: 0.8rem;
    }
  }

  @media ${device.tiny} {
    padding-left: 2.5rem;
    :focus ~ ${Label} {
      left: 0.5rem;
      font-size: 0.8rem;
    }
  }
`
