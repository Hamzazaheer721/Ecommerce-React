import { memo, useEffect, useState } from 'react'
import { TabsContainer } from './index.styled'
import Contact from '../contact'
import Store from '../store'
import Bank from '../bank'
import HeaderComponent from '../../components/header'
import { loadMapApi } from '../../general/helper'

const ViewComponent = memo(() => {
  const { TabPane } = TabsContainer

  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false)

  useEffect(() => {
    const googleMapScript = loadMapApi()
    googleMapScript.addEventListener('load', () => {
      setScriptLoaded(true)
    })
  }, [])

  return (
    <>
      {scriptLoaded && (
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
      )}
    </>
  )
})

export default ViewComponent
