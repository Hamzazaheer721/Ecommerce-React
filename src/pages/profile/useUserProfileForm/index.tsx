import { useState, useCallback, ChangeEvent } from 'react'
import { IInputFormInitialValue } from './helper'
import { IInputFormType } from './types'

const useUserProfileForm = () => {
  const [inputData, setInputData] = useState<IInputFormType>(
    IInputFormInitialValue
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setInputData({ ...inputData, [name]: value })
    },
    [inputData]
  )
  const handlePhoneChange = useCallback(
    (_val, _data) => {
      const { dialCode } = _data
      setInputData({
        ...inputData,
        phone: _val,
        // eslint-disable-next-line prefer-template
        country_code: '+' + dialCode
      })
    },
    [inputData]
  )
  return { handleChange, handlePhoneChange }
}

export default useUserProfileForm
