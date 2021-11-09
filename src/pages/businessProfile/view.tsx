import { memo } from 'react'
import { TabsContainer } from './index.styled'
import Profile from '../profile'
import Contact from '../contact'
import Bank from '../bank'
import HeaderComponent from '../../components/header'

const { TabPane } = TabsContainer

const ViewComponent = memo(() => (
  <>
    <HeaderComponent />
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
        <Bank />
      </TabPane>
    </TabsContainer>
  </>
))

export default ViewComponent
