import { FC, memo } from 'react'

interface IStyledIconComponentProps {
  // i'll change any later
  Icon: any
}

// eslint-disable-next-line operator-linebreak
const StyledIconComponent: FC<IStyledIconComponentProps> =
  memo(({ Icon }: IStyledIconComponentProps) => (
    <Icon
      style={{
        fontSize: '20px'
      }}
    />
  ))
export default StyledIconComponent
