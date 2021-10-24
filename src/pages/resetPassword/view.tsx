import { FC, memo } from 'react'
import ResetPasswordComponent from './components/resetPassword/index'

const ViewComponent: FC = memo((props) => (
  <ResetPasswordComponent {...props} />
))

export default ViewComponent
