/* eslint-disable no-param-reassign */
import produce from 'immer'
import { useState, useCallback, useMemo, ChangeEvent, MouseEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { initialState } from './helper'
import { IRegisterType } from './types'

const useForm = () => {
  const [registerData, setRegisterData] = useState<IRegisterType>(initialState)

  const location = useLocation()
  const isCustomer = useMemo(
    () => (location.pathname.includes('customer') ? 'visitor' : 'company'),
    [location]
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      name === 'checkbox'
        ? setRegisterData({
            ...registerData,
            [name]: e.target.checked
          })
        : setRegisterData({
            ...registerData,
            [name]: value
          })
    },
    [registerData]
  )

  const handlePhoneChange = useCallback(
    (_val, _data) => {
      const { dialCode } = _data
      setRegisterData({
        ...registerData,
        phone: _val,
        // eslint-disable-next-line prefer-template
        country_code: '+' + dialCode
      })
    },
    [registerData]
  )

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const data = produce(registerData, (draft) => {
        draft.userType = isCustomer
      })
      console.info(data)
    },
    [registerData]
  )

  return {
    registerData,
    handleChange,
    handleSubmit,
    handlePhoneChange
  }
}

export default useForm
