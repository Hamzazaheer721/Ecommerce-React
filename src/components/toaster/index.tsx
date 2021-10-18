import { faCheck, faTimes } from '@fortawesome/pro-light-svg-icons'
import {
  ToastContainer,
  CheckIcon,
  TitleContainer,
  CrossIcon,
  Description
} from './index.styled'

const ToastComponent = () => (
  <ToastContainer>
    <h2>
      <CheckIcon icon={faCheck} />
    </h2>
    <TitleContainer>
      <h2>
        Congratulation
        <CrossIcon icon={faTimes} />
      </h2>
      <Description>Your Account has been successfully activated!</Description>
    </TitleContainer>
  </ToastContainer>
)

export default ToastComponent
