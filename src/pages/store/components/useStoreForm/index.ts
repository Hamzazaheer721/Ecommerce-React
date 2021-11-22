import { useState, useCallback, ChangeEvent, MouseEvent } from 'react'
import { IInputFormInitialValue } from './helper'
import { IInputFormType } from './types'

const useStoreForm = () => {
  const [inputData, setInputData] = useState<IInputFormType>(
    IInputFormInitialValue
  )

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
      let str: any = _val
      if (str.includes(dialCode)) {
        str = str.replace(dialCode, '')
        str = str.trim()
      }
      if (str && `+${_val}` !== inputData.whatsapp) {
        setInputData({ ...inputData, whatsapp: `+${_val}` })
      }
    },
    [inputData.whatsapp]
  )

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      // dispatch(updateBankInfo(inputData))
    },
    [inputData]
  )

  return { handleChange, inputData, handlePhoneChange, handleSubmit }
}

export default useStoreForm
