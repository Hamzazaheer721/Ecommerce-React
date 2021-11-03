import { useState } from 'react'
import { faImages } from '@fortawesome/pro-light-svg-icons'
import { Upload } from 'antd'
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'

import {
  Container,
  TitleContainer,
  Icon,
  Title,
  ImagesContainer
} from './index.styled'

const CoverImages = () => {
  const [fileListState] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ])

  const onChange = (info: UploadChangeParam<UploadFile<any>>) => {
    const { fileList } = info
    console.info(fileList)
    // setFileListState(fileList)
  }

  const onPreview = async (file: any) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    // const imgWindow = window.open(src)
    // imgWindow.document.write(image.outerHTML)
  }

  return (
    <Container>
      <TitleContainer>
        <Icon icon={faImages} />
        <Title>
          Add Business Cover Images
          <p>*Upto 6 images allowed</p>
        </Title>
      </TitleContainer>
      <ImagesContainer>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          // fileList={fileListState}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileListState.length < 5 && '+ Upload'}
        </Upload>
      </ImagesContainer>
    </Container>
  )
}
export default CoverImages
