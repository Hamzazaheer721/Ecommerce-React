import { useRef, useState, useCallback, MouseEvent, ChangeEvent } from 'react'
import { IResetPasswordInitialState } from './helper'
import { IResetPasswordStateTypes } from './types'

const useForm = () => {
  const [resetPasswordData, setResetPasswordData] =
    useState<IResetPasswordStateTypes>(IResetPasswordInitialState)

  const activationRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  }, [])

  const handleSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
   }, [])

  return {
    resetPasswordData,
    setResetPasswordData,
    activationRef,
    passwordRef,
    confirmPasswordRef,
    handleChange,
    handleSubmit
  }
}

export default useForm
