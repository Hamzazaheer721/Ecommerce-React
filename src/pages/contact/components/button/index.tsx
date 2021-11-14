import { memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { faSave } from '@fortawesome/pro-light-svg-icons'
import { ButtonLayout } from './index.styled'
import ButtonComponent from '../../../../components/genericButton'
import { ButtonContainer } from '../../../../styles/global'

const Button = memo(() => {
  const theme = useContext(ThemeContext)

  return (
    <ButtonLayout>
      <ButtonContainer>
        <ButtonComponent
          icon={faSave}
          label="Save"
          color={theme.color.primary}
        />
      </ButtonContainer>
    </ButtonLayout>
  )
})

export default Button
