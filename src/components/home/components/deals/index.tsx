import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Container, DealImage } from './index.styled'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
}

const Deals = () => (
  <>
    <Container>
      <Carousel responsive={responsive}>
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
)
export default Deals
