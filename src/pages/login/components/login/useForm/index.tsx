import { useCallback, useState } from 'react';
import { validateInputForm } from './helper';
import { IIinputformType, IInputformErrorsType, IInputformInitialValue } from './types';

export const useFormLogin = () => {
  const [inputData, setInputData] = useState<IIinputformType>(IInputformInitialValue);
  const [errors, setErrors] = useState<IInputformErrorsType>({})

  const handleChange = useCallback(((e: any) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value })
  }), [inputData])

  const handleSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    const validateErrors = validateInputForm(inputData);
    if (Object.keys(validateErrors).length > 0) setErrors(validateErrors)
  }, [inputData, errors])

  return {
    inputData,
    errors,
    handleChange,
    handleSubmit
  }
};
