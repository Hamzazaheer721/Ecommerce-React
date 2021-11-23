/* eslint-disable react/jsx-wrap-multilines */
import { FC, memo } from 'react'
import { Collapse } from 'antd'
import { faCog, faShippingTimed, faTag } from '@fortawesome/pro-light-svg-icons'
import { Container } from './index.styled'
import Header from './components/header'

const ViewComponent: FC = memo(() => {
  const { Panel } = Collapse

  return (
    <Container>
      <Collapse expandIconPosition="right" defaultActiveKey={['1']} accordion>
        <Panel header={<Header icon={faCog} title="Setting" />} key="1">
          <p>test</p>
        </Panel>
        <Panel
          header={<Header icon={faShippingTimed} title="Shipping" />}
          key="2"
        >
          <p>test</p>
        </Panel>
        <Panel
          header={<Header icon={faShippingTimed} title="Store Timings" />}
          key="3"
        >
          <p>test</p>
        </Panel>
        <Panel header={<Header icon={faTag} title="Other Timings" />} key="4">
          <p>test</p>
        </Panel>
      </Collapse>
    </Container>
  )
})

export default ViewComponent
