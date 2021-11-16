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
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import produce from 'immer'
import { userSignup } from '../../../../../redux/features/userSignupSlice/apiActions'
import { RootState } from '../../../../../redux/store'
import { initialState, errorChecks } from './helper'
import { IRegisterErrorType, IRegisterType } from '../../../../../types/signup'
import { isObjectEmpty } from '../../../../../general/helper'
import { clearMessageStates } from '../../../../../redux/features/userSignupSlice'
import { openModal } from '../../../../../redux/features/modalSlice'

const useForm = () => {
  const [registerData, setRegisterData] = useState<IRegisterType>(initialState)
  const [errors, setErrors] = useState<IRegisterErrorType>({})

  const dispatch = useDispatch()
  const registerState = useSelector((state: RootState) => state.registerUser)
  const { message: registerStateMessage, success: registerStateSuccess } =
    registerState

  const location = useLocation()
  const isCustomer = useMemo<'visitor' | 'company'>(
    () => (location.pathname.includes('customer') ? 'visitor' : 'company'),
    [location]
  )

  const nameRef = useRef<HTMLInputElement>(null)
  const storeNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  useEffect(
    () => () => {
      dispatch(clearMessageStates())
    },
    []
  )

  useEffect(() => {
    registerStateMessage &&
      registerStateSuccess &&
      dispatch(
        openModal({
          modalType: 'success',
          description: registerStateMessage,
          nextScreen: '/activation-code'
        })
      )
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
      setErrors({})
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
    isCustomer,
    nameRef,
    storeNameRef,
    emailRef,
    passwordRef
  }
}

export default useForm
