/* eslint-disable no-param-reassign */
import produce from 'immer'
import { useState, useCallback, useMemo, ChangeEvent, MouseEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { initialState, errorChecks } from './helper'
import { IRegisterErrorType, IRegisterType } from './types'

const useForm = () => {
  const [registerData, setRegisterData] = useState<IRegisterType>(initialState)
  const [errors, setErrors] = useState<IRegisterErrorType>({})
  const [loading, setLoading] = useState<boolean>(false)
  const location = useLocation()
  const isCustomer = useMemo(
    () => (location.pathname.includes('customer') ? 'visitor' : 'company'),
    [location]
  )
  console.log(errors, setErrors)
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

  const makeApiCall = useCallback(async () => {
    const data = produce(registerData, (draft) => {
      draft.userType = isCustomer
    })

    setLoading(true)
    console.info(data, loading)
  }, [registerData])

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const updatedErrors = errorChecks(registerData)
      console.info(updatedErrors)
      makeApiCall()
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
