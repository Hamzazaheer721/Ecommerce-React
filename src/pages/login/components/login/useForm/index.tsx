import {
  ChangeEvent, useCallback, useState
} from 'react';
import { AxiosResponse } from 'axios';
import { IUserLoginRtnData } from '../../../../../types/user';
import { SERVER_IP } from '../../../../../config/constants';
import { Instance } from '../../../../../config/axios';
// import { useDispatch } from 'react-redux';

// import { loginUser } from '../../../../../redux/features/userSigninSlice';
import { validateInputForm } from './helper';
import { IIinputformType, IInputformErrorsType, IInputformInitialValue } from './types';

export const useFormLogin = () => {
  // const dispatch = useDispatch();
  const [inputData, setInputData] = useState<IIinputformType>(IInputformInitialValue);

  const [errors, setErrors] = useState<IInputformErrorsType>({})

  const handleChange = useCallback(((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value })
  }), [inputData])

  const makeApiCall = useCallback(async () => {
    await Instance.post<any>(`${SERVER_IP}/user/login`, inputData).then((res: AxiosResponse<IUserLoginRtnData>) => {
      // eslint-disable-next-line no-console
      if (res.status === 200) console.info(res.data)
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error.response.data)
    })
  }, [inputData])

  const handleSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    const validateErrors = validateInputForm(inputData);
    setErrors(validateErrors)
    if (!Object.keys(errors).length) makeApiCall();
    // if (!Object.keys(errors).length) dispatch(loginUser(inputData));
  }, [inputData, errors])

  return {
    inputData,
    errors,
    handleChange,
    handleSubmit
  }
};
