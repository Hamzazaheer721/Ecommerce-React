import { FC, memo } from 'react'
import { CustomSwitch, SwitchContainer } from './index.styled'

interface ISwitchButtonProps {
  size?: 'small' | 'default'
}

export const SwitchButton: FC<ISwitchButtonProps> = memo(({ size }) => (
  <SwitchContainer>
    <CustomSwitch size={size} />
  </SwitchContainer>
))

export default SwitchButton
