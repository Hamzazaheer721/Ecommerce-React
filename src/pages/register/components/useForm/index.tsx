import { useState, useCallback, ChangeEvent, MouseEvent } from 'react'
import { initialState } from './helper'
import { IRegisterType } from './types'

const useForm = () => {
  const [registerData, setRegisterData] = useState<IRegisterType>(initialState)
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

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      console.info(registerData)
    },
    [registerData]
  )

  return { registerData, handleChange, handleSubmit }
}

export default useForm
