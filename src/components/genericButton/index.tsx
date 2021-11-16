import { FC, memo, MouseEvent } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { CustomButton, IconStyler } from './index.styled'

interface IButtonProps {
  label: string
  icon?: IconProp
  type?: 'button' | 'submit' | 'reset' | undefined
  // eslint-disable-next-line react/no-unused-prop-types
  color?: string
  // eslint-disable-next-line no-unused-vars
  handleSubmit?: (e: MouseEvent<HTMLButtonElement>) => void
  _disabled?: boolean
}

const Button: FC<IButtonProps> = memo(
  ({ label, icon, type, color, handleSubmit, _disabled }: IButtonProps) => (
    <CustomButton
      htmlType={type}
      color={color}
      onClick={handleSubmit}
      disabled={_disabled}
    >
      {icon && <IconStyler icon={icon} />}
      {label}
    </CustomButton>
  )
)

export default Button
