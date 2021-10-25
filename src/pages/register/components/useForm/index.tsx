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
import { isObjectEmpty } from '../../../../general/helper'

const useForm = () => {
  const history = useHistory()

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

  useEffect(
    () => () => {
      redirectTimeInterval.current && clearTimeout(redirectTimeInterval.current)
    },
    []
  )

  const giveDelay = useCallback(() => {
    redirectTimeInterval.current = setTimeout(() => {
      history.push('/activation-code')
      redirectTimeInterval.current = undefined
    }, 5000)
  }, [history, redirectTimeInterval])

  useEffect(() => {
    if (registerState) {
      const { success, message } = registerState
      if (success && message) {
        giveDelay()
      }
    }
  }, [registerState])

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
  }, [registerData, errors])

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const updatedErrors = errorChecks(registerData, isCustomer)
      setErrors(updatedErrors)
      isObjectEmpty(updatedErrors) && makeApiCall()
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
