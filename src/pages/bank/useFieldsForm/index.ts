import { useState, useCallback, ChangeEvent, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { IInputFormInitialValue } from './helper'
import { IInputFormType } from './types'
import { updateBankInfo } from '../../../redux/features/updateBankInfo/apiActions'

const useBankForm = () => {
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
      let str: any = _val
      if (str.includes(dialCode)) {
        str = str.replace(dialCode, '')
        str = str.trim()
      }
      if (str && `+${_val}` !== inputData.acc_holder_mobile_number) {
        setInputData({ ...inputData, acc_holder_mobile_number: `+${_val}` })
      }
    },
    [inputData.acc_holder_mobile_number]
  )

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      dispatch(updateBankInfo(inputData))
    },
    [inputData]
  )

  return { handleChange, handlePhoneChange, handleSubmit, inputData }
}

export default useBankForm
