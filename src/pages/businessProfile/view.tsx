import { memo } from 'react'
import { TabsContainer } from './index.styled'
import Profile from '../profile'
import Contact from '../contact'

const { TabPane } = TabsContainer

const ViewComponent = memo(() => (
  <div>
    <TabsContainer
      tabBarStyle={{
        backgroundColor: '#1B9BD7',
        color: 'white',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px'
      }}
      defaultActiveKey="1"
      centered
    >
      <TabPane tab="Profile" key="1">
        <Profile />
      </TabPane>
      <TabPane tab="Contact" key="2">
        <Contact />
      </TabPane>
      <TabPane tab="Bank" key="3">
        Content of Tab Pane 3
      </TabPane>
    </TabsContainer>
  </div>
))

export default ViewComponent
