import { memo } from 'react'
import { faUser } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PrimaryButton } from './index.styled'

const ButtonComponent = memo(() => (
  <PrimaryButton style={{ backgroundColor: '#1B90C7' }}>
    <FontAwesomeIcon
      icon={faUser}
      style={{ marginRight: '5px' }}
    />
    View All
  </PrimaryButton>
))
export default ButtonComponent
