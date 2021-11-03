import { memo, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { PrimaryButton } from './index.styled'

interface IButtonProps {
  icon: IconProp
  text: String
}

const ButtonComponent: FC<IButtonProps> = memo(
  ({ icon, text }: IButtonProps) => (
    <PrimaryButton style={{ backgroundColor: '#1B90C7' }}>
      <FontAwesomeIcon icon={icon} style={{ marginRight: '5px' }} />
      {text}
    </PrimaryButton>
  )
)
export default ButtonComponent
