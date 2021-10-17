import { FC, memo } from 'react'
import HeaderComponent from '../../components/header'

import StoreCardComponent from '../../components/storeCard'

const ViewComponent: FC<{}> = memo(() => (
  <>
    <HeaderComponent />
    <StoreCardComponent />
  </>
))
export default ViewComponent
