import { memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { faSave } from '@fortawesome/pro-light-svg-icons'
import { ButtonLayout } from './index.styled'
import ButtonComponent from '../../../../components/genericButton'
import { ButtonContainer } from '../../../../styles/global'
import useContactFields from '../../useContactField'

const Button = memo(() => {
  const theme = useContext(ThemeContext)
  const { handleSubmit } = useContactFields()
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
