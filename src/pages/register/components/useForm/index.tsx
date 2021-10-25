/* eslint-disable no-param-reassign */
import {
  useState,
  useCallback,
  useMemo,
  useEffect,
  ChangeEvent,
  MouseEvent,
  useRef
} from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import produce from 'immer'
import { userSignup } from '../../../../redux/features/userSignupSlice/apiActions'
import { RootState } from '../../../../redux/store'
import { initialState, errorChecks } from './helper'
import { IRegisterErrorType, IRegisterType } from '../../../../types/signup'

const useForm = () => {
  const [registerData, setRegisterData] = useState<IRegisterType>(initialState)
  const [errors, setErrors] = useState<IRegisterErrorType>({})

  const dispatch = useDispatch()
  const registerState = useSelector((state: RootState) => state.registerUser)

  const location = useLocation()
  const isCustomer = useMemo<'visitor' | 'company'>(
    () => (location.pathname.includes('customer') ? 'visitor' : 'company'),
    [location]
  )

  const redirectTimeInterval = useRef<NodeJS.Timer>()
  const history = useHistory()

  useEffect(
    () => () => {
      redirectTimeInterval.current && clearTimeout(redirectTimeInterval.current)
    },
    []
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

  const giveDelay = useCallback(() => {
    redirectTimeInterval.current = setInterval(() => {
      history.push('/activation-code')
      redirectTimeInterval.current = undefined
    }, 5000)
  }, [history, redirectTimeInterval])

  const makeApiCall = useCallback(async () => {
    const data = produce(registerData, (draft) => {
      draft.user_type = isCustomer
    })
    dispatch(userSignup(data))
    giveDelay()
  }, [registerData])

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const updatedErrors = errorChecks(registerData, isCustomer)
      setErrors(updatedErrors)
      !Object.keys(errors).length &&
        !Object.keys(updatedErrors).length &&
        makeApiCall()
    },
    [registerData, errors]
  )

  return {
    registerData,
    registerState,
    handleChange,
    errors,
    handleSubmit,
    handlePhoneChange,
    isCustomer
  }
}

export default useForm
