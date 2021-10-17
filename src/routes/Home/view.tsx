import { FC, memo } from 'react'

import HeaderComponent from '../../components/header'
import StoreCardComponent from '../../components/storeCard'
// import StoreCard2 from '../../components/storeCard2'

const ViewComponent: FC<{}> = memo(() => (
  <>
    <HeaderComponent />
    <StoreCardComponent />
    {/* <StoreCard2 /> */}
  </>
))
export default ViewComponent
