import { memo } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Container, DealImage } from './index.styled'
import { Responsive } from './helper'

const Deals = memo(() => (
  <>
    <Container>
      <Carousel responsive={Responsive}>
        <DealImage src="/images/test-5.jpg" />
        <DealImage src="/images/test-5.jpg" />
        <DealImage src="/images/test-5.jpg" />
        <DealImage src="/images/test-5.jpg" />
        <DealImage src="/images/test-5.jpg" />
        <DealImage src="/images/test-5.jpg" />
        <DealImage src="/images/test-5.jpg" />
        <DealImage src="/images/test-5.jpg" />
        <DealImage src="/images/test-5.jpg" />
        <DealImage src="/images/test-5.jpg" />
        <DealImage src="/images/test-5.jpg" />
        <DealImage src="/images/test-5.jpg" />
      </Carousel>
    </Container>
  </>
))
export default Deals
