import { FC, memo, MouseEvent } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { CustomButton, IconStyler } from './index.styled'

interface IButtonProps {
  label: string
  icon: IconProp
  type?: 'button' | 'submit' | 'reset' | undefined
  color?: string
  // eslint-disable-next-line no-unused-vars
  handleSubmit?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<IButtonProps> = memo(
  ({ label, icon, type, color, handleSubmit }: IButtonProps) => (
    <CustomButton htmlType={type} color={color} onClick={handleSubmit}>
      <IconStyler icon={icon} />
      {label}
    </CustomButton>
  )
)

export default Button
