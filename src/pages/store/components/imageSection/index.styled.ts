import styled from 'styled-components'
import { Upload } from 'antd'
import { device } from '../../../../styles/devices'

export const ImageSectionContainer = styled.div`
  flex: 1 1 25%;
`
export const ImagesContainer = styled.div`
  text-align: right;
  margin-top: 10px;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobile} {
    text-align: center;
  }
  @media ${device.tiny} {
    text-align: center;
  }
`

export const UploadImage = styled(Upload)`
  .ant-upload-list-picture-card-container {
    width: 90% !important;
    height: 300px !important;
  }
  .ant-upload.ant-upload-select-picture-card {
    width: 90%;
    height: 300px !important;
  }

  @media ${device.mobile} {
    .ant-upload-list-picture-card-container {
      width: 47% !important;
      height: 200px !important;
    }
    .ant-upload.ant-upload-select-picture-card {
      width: 47%;
      height: 200px !important;
    }
  }
  @media ${device.tiny} {
    .ant-upload-list-picture-card-container {
      width: 46% !important;
      height: 200px !important;
    }
    .ant-upload.ant-upload-select-picture-card {
      width: 46%;
      height: 200px !important;
    }
  }
`
