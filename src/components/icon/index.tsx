import { FC, memo } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { IconStyle } from './index.styled'

interface IIconComponentProps {
  icon: IconProp
  onClick?: () => void
  color?: string
}
const Icon: FC<IIconComponentProps> = memo(
  ({ icon, onClick, color }: IIconComponentProps) => (
    <>
      <IconStyle
        icon={icon}
        onClick={onClick}
        color={color}
      />
    </>
  )
)
export default Icon
