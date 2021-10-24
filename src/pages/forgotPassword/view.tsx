import { FC, memo } from 'react'
import ForgotPasswordComponent from './components/forgotPassword/index'

const ViewComponent: FC = memo((props) => (
  <ForgotPasswordComponent {...props} />
))

export default ViewComponent
