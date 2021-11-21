import { ChangeEvent, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setContactFields } from '../../../../../../../redux/features/contactFieldsSlice'
import { IContactType } from '../../../../../../../redux/features/contactFieldsSlice/types'
import { RootState } from '../../../../../../../redux/store/index'

const useContactForm = () => {
  const dispatch = useDispatch()

  const contactFieldsState = useSelector(
    (state: RootState) => state.contactFields
  )
  const { email, phone_number, mobile_number, website, ntn_num } =
    contactFieldsState

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const { name, value } = e.target
    const _key: keyof IContactType = name as keyof IContactType
    dispatch(setContactFields({ name: _key, value }))
  }, [])

  const handlePhoneChange = useCallback(
    (_val, _data) => {
      const { dialCode } = _data
      let str: string = _val
      if (str.includes(dialCode)) {
        str = str.replace(dialCode, '')
        str = str.trim()
      }
      if (str && `+${_val}` !== phone_number) {
        dispatch(setContactFields({ name: 'phone_number', value: `+${_val}` }))
      }
    },
    [phone_number]
  )

  const handleMobileChange = useCallback((_val, _data) => {
    const { dialCode } = _data
    let str: string = _val
    if (str.includes(dialCode)) {
      str = str.replace(dialCode, '')
      str = str.trim()
    }
    if (str && `+${_val}` !== mobile_number) {
      dispatch(setContactFields({ name: 'mobile_number', value: `+${_val}` }))
    }
  }, [mobile_number])

  return {
    handleChange,
    handlePhoneChange,
    handleMobileChange,
    email,
    phone_number,
    mobile_number,
    ntn_num,
    website
  }
}

export default useContactForm
