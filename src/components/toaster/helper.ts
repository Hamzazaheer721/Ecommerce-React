import { IColorObjectProp } from './types'
import { defaultTheme } from '../../styles/theme'

const initialValue = {
  statusColor: '',
  backgroundColor: ''
}

export const filterColor = (toastType: string) => {
  const colorObj: IColorObjectProp = initialValue
  switch (toastType) {
    case 'success':
      colorObj.backgroundColor = defaultTheme.color.lightGreen
      colorObj.statusColor = defaultTheme.color.darkGreen
      return colorObj
    case 'info':
      colorObj.backgroundColor = defaultTheme.color.lightBlue
      colorObj.statusColor = defaultTheme.color.blue
      return colorObj
    case 'error':
      colorObj.backgroundColor = defaultTheme.color.lightRed
      colorObj.statusColor = defaultTheme.color.red
      return colorObj
    default:
      return colorObj
  }
}

export const htmlTexts = {
  forgotPassword: 'Enter your WhatsApp Number or Email Address',
  resetPassword: 'Enter your New Password'
}
