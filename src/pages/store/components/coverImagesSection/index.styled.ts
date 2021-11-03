import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Upload } from 'antd'
import { device } from '../../../../styles/devices'

export const Container = styled.div`
  border: 0.5px solid #dddddd;
  border-radius: 8px;
  padding: 15px;
  background: #ffffff 0% 0% no-repeat padding-box;
`
export const TitleContainer = styled.div`
  display: flex;
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin: 3px 7px 0 3px;
`
export const Title = styled.p`
  line-height: 17px;
  margin-top: 2px;
  color: black;
  font-weight: 500;
  font-size: 14px;
  p {
    font-size: 12px;
    padding: 0;
    color: ${(props) => props.theme.color.darkGray};
  }
`
export const ImagesContainer = styled.div``

export const UploadImage = styled(Upload)`
  @media ${device.mobile} {
    .ant-upload-list-picture-card-container {
      width: 47% !important;
    }
    .ant-upload.ant-upload-select-picture-card {
      width: 47%;
    }
  }
  @media ${device.tiny} {
    .ant-upload-list-picture-card-container {
      width: 46% !important;
    }
    .ant-upload.ant-upload-select-picture-card {
      width: 46%;
    }
  }
`
