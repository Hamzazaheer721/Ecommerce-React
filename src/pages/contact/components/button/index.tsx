import { FC, memo, MouseEvent, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { faSave } from '@fortawesome/pro-light-svg-icons'
import { ButtonLayout } from './index.styled'
import ButtonComponent from '../../../../components/genericButton'
import { ButtonContainer } from '../../../../styles/global'

interface IButtonProps {
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<IButtonProps> = memo(({ handleSubmit }) => {
  const theme = useContext(ThemeContext)
  return (
    <ButtonLayout>
      <ButtonContainer>
        <ButtonComponent
          icon={faSave}
          label="Save"
          color={theme.color.primary}
          type="submit"
          handleSubmit={handleSubmit}
        />
      </ButtonContainer>
    </ButtonLayout>
  )
})

export default Button
