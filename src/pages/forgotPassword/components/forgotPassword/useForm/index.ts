import { useRef, useState, useCallback, ChangeEvent, MouseEvent } from 'react'
import { isObjectEmpty } from '../../../../../general/helper';
import { validateError } from './helper';
import { IForgotPasswordErrorsType } from './types';

const useForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)

  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<IForgotPasswordErrorsType>({})
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {value} = e.target;
    setUsername(value)
  }, [username])

  const makeApiCall = useCallback(async () => {

  }, [])

  const handleSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const checkError = validateError(username);
    setError(checkError);
    isObjectEmpty(checkError) && makeApiCall();
  }, [username])

  return {
    usernameRef,
    username,
    handleChange,
    handleSubmit,
    error
  }
}

export default useForm
