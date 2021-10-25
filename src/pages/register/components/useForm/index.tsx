/* eslint-disable no-param-reassign */
import produce from 'immer'
import { useState, useCallback, useMemo, ChangeEvent, MouseEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userSignup } from '../../../../redux/features/userSignupSlice/apiActions'
import { RootState } from '../../../../redux/store'
import { initialState, errorChecks } from './helper'
import { IRegisterErrorType, IRegisterType } from '../../../../types/signup'

const useForm = () => {
  const [registerData, setRegisterData] = useState<IRegisterType>(initialState)
  const [errors, setErrors] = useState<IRegisterErrorType>({})
  const [, setLoading] = useState<boolean>(false)

  const dispatch = useDispatch()
  const registerState = useSelector((state: RootState) => state.registerUser)

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

  const makeApiCall = useCallback(async () => {
    const data = produce(registerData, (draft) => {
      draft.user_type = isCustomer
    })
    dispatch(userSignup(data))
    setLoading(true)
  }, [registerData])

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const updatedErrors = errorChecks(registerData, isCustomer)
      setErrors(updatedErrors)
      makeApiCall()
    },
    [registerData, errors]
  )

  return {
    registerData,
    registerState,
    handleChange,
    handleSubmit,
    handlePhoneChange
  }
}

export default useForm
