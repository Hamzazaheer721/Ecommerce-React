import {
  MouseEvent,
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
  useRef
} from 'react'
import { useHistory } from 'react-router-dom'
import { AxiosResponse } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import produce from 'immer'
import { addUserAction } from '../../../../../redux/features/userSigninSlice'
import { IUserLoginRtnResponse } from '../../../../../types/user'
import { SERVER_IP } from '../../../../../config/constants'
import { Instance } from '../../../../../config/axios'
import { validateInputForm } from './helper'
import {
  IInputformType,
  IInputformErrorsType,
  IInputformInitialValue,
  IResponseMessageType
} from './types'
import { RootState } from '../../../../../redux/store'
import { isObjectEmpty } from '../../../../../general/helper'

export const useFormLogin = () => {
  const dispatch = useDispatch()
  const { push } = useHistory()
  const [inputData, setInputData] = useState<IInputformType>(
    IInputformInitialValue
  )
  const { remember } = inputData

  const [errors, setErrors] = useState<IInputformErrorsType>({})

  const [response, setResponse] = useState<IResponseMessageType>({})

  const { user } = useSelector((state: RootState) => state.user)

  const timeRef = useRef<NodeJS.Timer>()

  // const {loading, success, message} = useSelector((state: RootState) => state.activation)

  useEffect(
    () => () => {
      timeRef.current && clearTimeout(timeRef.current)
    },
    []
  )

  useEffect(() => {
    if (user && remember) {
      localStorage.setItem('token', JSON.stringify(user.auth_token))
      localStorage.setItem('user', JSON.stringify(user))
    }
    if (response.success === 'Your account has been logged in.') {
      timeRef.current = setTimeout(() => {
        push('/')
      }, 2000)
    }
  }, [user, remember, response])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      name === 'remember'
        ? setInputData({
            ...inputData,
            [name]: e.target.checked
          })
        : setInputData({ ...inputData, [name]: value })
    },
    [inputData]
  )

  const makeApiCall = useCallback(async () => {
    const updatedData: Omit<IInputformType, 'remember'> = produce(
      inputData,
      (draft) => {
        delete draft.remember
        return draft
      }
    )
    await Instance.post<any>(`${SERVER_IP}/user/login`, updatedData)
      .then((res: AxiosResponse<IUserLoginRtnResponse>) => {
        if (res.data) {
          dispatch(addUserAction(res.data.data))
          setResponse({ success: res.data.message, error: '' })
        }
      })
      .catch((error) => {
        if (error) {
          setResponse({ error: error.response.data.message, success: '' })
          // eslint-disable-next-line no-console
          console.error(error.response.data)
        }
      })
  }, [inputData, response, errors])

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const validateErrors = validateInputForm(inputData)
      setErrors(validateErrors)
      isObjectEmpty(validateErrors) && makeApiCall()
    },
    [inputData, errors]
  )

  return {
    inputData,
    response,
    errors,
    handleChange,
    handleSubmit
  }
}
