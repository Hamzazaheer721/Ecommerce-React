import { memo } from 'react'
import { FundViewOutlined } from '@ant-design/icons'
import { PrimaryButton } from './index.styled'

const ButtonComponent = memo(() => (
  <PrimaryButton style={{ backgroundColor: '#1B90C7' }}>
    <FundViewOutlined style={{ marginRight: '5px' }} />
    View All
  </PrimaryButton>
))
export default ButtonComponent
