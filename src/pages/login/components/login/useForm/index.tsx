import {
  ChangeEvent, useCallback, useState
} from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../../../../redux/features/userSigninSlice';
import { validateInputForm } from './helper';
import { IIinputformType, IInputformErrorsType, IInputformInitialValue } from './types';

export const useFormLogin = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState<IIinputformType>(IInputformInitialValue);
  const [errors, setErrors] = useState<IInputformErrorsType>({})

  const handleChange = useCallback(((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value })
  }), [inputData])

  const handleSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    const validateErrors = validateInputForm(inputData);
    setErrors(validateErrors)
    if (!Object.keys(errors).length) dispatch(loginUser(inputData));
  }, [inputData, errors])

  return {
    inputData,
    errors,
    handleChange,
    handleSubmit
  }
};
