import { FC, memo } from 'react'
import ActivationCodeComponent from './components/activationCode/index'

const ViewComponent: FC = memo((props) => (
  <ActivationCodeComponent {...props} />
))

export default ViewComponent
