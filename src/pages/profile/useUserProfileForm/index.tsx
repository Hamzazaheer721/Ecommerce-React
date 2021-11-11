import { useState, useCallback, ChangeEvent, MouseEvent } from 'react'
import { IInputFormInitialValue } from './helper'
import { IInputFormType } from './types'
// import { useDispatch } from 'react-redux'
// import { updateUserProfileSlice } from '../../../redux/features/updateUserProfileSlice'

const useUserProfileForm = () => {
  const [inputData, setInputData] = useState<IInputFormType>(
    IInputFormInitialValue
  )

  // const dispatch = useDispatch()
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
  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      // dispatch(updateUserProfileSlice(inputData))
      console.info('handleSubmit working', inputData.email)
    },
    [inputData]
  )

  return { handleChange, handlePhoneChange, handleSubmit }
}

export default useUserProfileForm
