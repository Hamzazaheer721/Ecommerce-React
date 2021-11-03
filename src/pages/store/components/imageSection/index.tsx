import { FC, memo, useState } from 'react'
import ImgCrop from 'antd-img-crop'
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'

import {
  ImageSectionContainer,
  ImagesContainer,
  UploadImage
} from './index.styled'

const ImageSection: FC = memo(() => {
  const [fileListState, setFileListState] = useState<any>([])

  const onChange = (info: UploadChangeParam<UploadFile<any>>) => {
    const { fileList } = info
    console.info(fileList)
    setFileListState(fileList)
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
    <ImageSectionContainer>
      <ImagesContainer>
        <ImgCrop rotate>
          <UploadImage
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileListState}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileListState.length < 1 && '+ Upload'}
          </UploadImage>
        </ImgCrop>
      </ImagesContainer>
    </ImageSectionContainer>
  )
})

export default ImageSection
