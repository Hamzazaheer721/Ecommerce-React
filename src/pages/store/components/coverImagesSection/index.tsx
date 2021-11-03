import { useState } from 'react'
import { faImages } from '@fortawesome/pro-light-svg-icons'
import { Upload } from 'antd'

import {
  Container,
  TitleContainer,
  Icon,
  Title,
  ImagesContainer
} from './index.styled'

const CoverImages = () => {
  const [fileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ])

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
          // fileList={fileList}
          // onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && '+ Upload'}
        </Upload>
      </ImagesContainer>
    </Container>
  )
}
export default CoverImages
