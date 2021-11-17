/* eslint-disable no-undef */
import { useState, useCallback, ChangeEvent, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { IInputFormInitialValue } from './helper'
import { IInputFormType } from './types'
import { UpdateUserProfile } from '../../../redux/features/updateUserProfileSlice/apiActions'
import { openModal } from '../../../redux/features/modalSlice'

const useUserProfileForm = () => {
  const [inputData, setInputData] = useState<IInputFormType>(
    IInputFormInitialValue
  )

  const dispatch = useDispatch()
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
      dispatch(UpdateUserProfile(inputData))
    },
    [inputData]
  )

  const deactivateHandler = useCallback(
    // eslint-disable-next-line no-unused-vars
    (e: MouseEvent<HTMLHeadingElement>) => {
      dispatch(
        openModal({
          modalType: 'alert',
          description: 'You want to deactivate your account',
          nextScreen: '/login'
        })
      )
    },
    []
  )

  return { handleChange, handlePhoneChange, handleSubmit, deactivateHandler }
}

export default useUserProfileForm
