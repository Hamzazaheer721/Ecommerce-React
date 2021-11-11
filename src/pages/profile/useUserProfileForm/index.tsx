import { useState, useCallback, ChangeEvent, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { IInputFormInitialValue } from './helper'
import { IInputFormType } from './types'
import { UpdateUserProfile } from '../../../redux/features/updateUserProfileSlice/apiActions'

const useUserProfileForm = () => {
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`
    }

    return config
  })

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

  return { handleChange, handlePhoneChange, handleSubmit }
}

export default useUserProfileForm
