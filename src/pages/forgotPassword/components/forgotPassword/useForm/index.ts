import { useRef, useState, useCallback, ChangeEvent, MouseEvent } from 'react'

const useForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)

  const [username, setUsername] = useState<string>('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {value} = e.target;
    setUsername(value)
  }, [username])

  const handleSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }, [username])

  return {
    usernameRef,
    username,
    handleChange,
    handleSubmit
  }
}

export default useForm
