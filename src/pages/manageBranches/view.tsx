import { FC, memo } from 'react'
import Card from './components/card'
import Header from './components/header'

const ViewComponent: FC = memo(() => (
  <>
    <Header />
    <Card />
  </>
))

export default ViewComponent
