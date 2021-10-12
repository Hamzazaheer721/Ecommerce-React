import { FC } from 'react'

interface IStyledIconComponentProps {
  Icon: any
}

// eslint-disable-next-line operator-linebreak
const StyledIconComponent: FC<IStyledIconComponentProps> =
  ({ Icon }: IStyledIconComponentProps) => (
    <Icon
      style={{
        fontSize: '20px'
      }}
    />
  )

export default StyledIconComponent
