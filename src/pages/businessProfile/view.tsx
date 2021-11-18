import { memo } from 'react'
import { TabsContainer } from './index.styled'
import Contact from '../contact'
import Store from '../store'
import Bank from '../bank'
import HeaderComponent from '../../components/header'
import { tabStyle } from './helper'

const ViewComponent = memo(() => {
  const { TabPane } = TabsContainer
  return (
    <>
      <>
        <HeaderComponent />
        <TabsContainer tabBarStyle={tabStyle} defaultActiveKey="1" centered>
          <TabPane tab="Profile" key="1">
            <Store />
          </TabPane>
          <TabPane tab="Contact" key="2">
            <Contact />
          </TabPane>
          <TabPane tab="Bank" key="3">
            <Bank />
          </TabPane>
        </TabsContainer>
      </>
    </>
  )
})

export default ViewComponent
