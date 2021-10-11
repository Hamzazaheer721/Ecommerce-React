import { FC } from 'react'
import SidebarComponent from '../../components/Sidebar/index'
import WelcomeComponent from '../../components/Welcome'

const ViewComponent: FC<{}> = () => (
  <>
    <WelcomeComponent />
    <SidebarComponent />
  </>
)

export default ViewComponent
