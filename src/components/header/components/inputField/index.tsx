import { memo } from 'react'
import { HeaderInputField } from './index.styled'

const InputComponent = memo(() => (
  <>
    <form>
      <HeaderInputField
        placeholder="Chose Location"
        type="search"
        name="search"
      />
    </form>
  </>
))
export default InputComponent
