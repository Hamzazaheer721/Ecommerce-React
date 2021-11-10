/* eslint-disable react/jsx-wrap-multilines */
import { FC } from 'react'
import { Collapse } from 'antd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCog,
  faShippingTimed,
  faTags
} from '@fortawesome/pro-light-svg-icons'
import { Container, HeaderContainer, Title } from './index.styled'

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const ViewComponent: FC = () => (
  <Container>
    <Collapse expandIconPosition="right" defaultActiveKey={['1']}>
      <Panel
        header={
          <HeaderContainer>
            <FontAwesomeIcon icon={faCog} />
            <Title>Setting</Title>
          </HeaderContainer>
        }
        key="1"
      >
        <p>{text}</p>
      </Panel>
      <Panel
        header={
          <HeaderContainer>
            <FontAwesomeIcon icon={faShippingTimed} />
            <Title>Shipping</Title>
          </HeaderContainer>
        }
        key="2"
      >
        <p>{text}</p>
      </Panel>
      <Panel
        header={
          <HeaderContainer>
            <FontAwesomeIcon icon={faShippingTimed} />
            <Title>Store Timings</Title>
          </HeaderContainer>
        }
        key="3"
      >
        <p>{text}</p>
      </Panel>
      <Panel
        header={
          <HeaderContainer>
            <FontAwesomeIcon icon={faTags} />
            <Title>Other Settings</Title>
          </HeaderContainer>
        }
        key="3"
      >
        <p>{text}</p>
      </Panel>
    </Collapse>
  </Container>
)

export default ViewComponent
