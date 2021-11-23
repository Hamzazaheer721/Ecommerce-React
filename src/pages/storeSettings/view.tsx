/* eslint-disable react/jsx-wrap-multilines */
import { FC, memo } from 'react'
import { Collapse } from 'antd'
import { faCog, faShippingTimed, faTag } from '@fortawesome/pro-light-svg-icons'
import { Container } from './index.styled'
import PanelHeader from './components/panelHeader'
import PanelCard from './components/panelCard'

const ViewComponent: FC = memo(() => {
  const { Panel } = Collapse

  return (
    <Container>
      <Collapse expandIconPosition="right" defaultActiveKey={['1']} accordion>
        <Panel header={<PanelHeader icon={faCog} title="Setting" />} key="1">
          <PanelCard />
        </Panel>
        <Panel
          header={<PanelHeader icon={faShippingTimed} title="Shipping" />}
          key="2"
        >
          <p>test</p>
        </Panel>
        <Panel
          header={<PanelHeader icon={faShippingTimed} title="Store Timings" />}
          key="3"
        >
          <p>test</p>
        </Panel>
        <Panel
          header={<PanelHeader icon={faTag} title="Other Timings" />}
          key="4"
        >
          <p>test</p>
        </Panel>
      </Collapse>
    </Container>
  )
})

export default ViewComponent
