import {
  Container,
  Card,
  CardHeader,
  SubHeader,
  SubHeaderIcons,
  CardHeaderImage,
  CardBody,
  CardBodyImage,
  Tag
} from './index.styled'

const StoreCard2 = () => (
  <Container>
    <Card>
      <CardHeader>
        <SubHeader>Technology</SubHeader>
        <SubHeaderIcons>Technolog</SubHeaderIcons>
        <CardHeaderImage src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" />
      </CardHeader>
      <CardBody>
        <p>
          <CardBodyImage src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" />
        </p>
        <p>
          <Tag>Technology</Tag>
        </p>
      </CardBody>
    </Card>
  </Container>
)

export default StoreCard2
