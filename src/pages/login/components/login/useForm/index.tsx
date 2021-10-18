import {
  ChangeEvent, useCallback, useEffect, useState
} from 'react';
import { AxiosResponse } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAction } from '../../../../../redux/features/userSigninSlice';
import { IUserLoginRtnResponse } from '../../../../../types/user';
import { SERVER_IP } from '../../../../../config/constants';
import { Instance } from '../../../../../config/axios';

// import { loginUser } from '../../../../../redux/features/userSigninSlice';
import { validateInputForm } from './helper';
import { IIinputformType, IInputformErrorsType, IInputformInitialValue } from './types';
import { RootState } from '../../../../../redux/store';

export const useFormLogin = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState<IIinputformType>(IInputformInitialValue);

  const [errors, setErrors] = useState<IInputformErrorsType>({})

  const loginState = useSelector((state: RootState) => state.user)

  useEffect(() => {
    loginState && localStorage.setItem('token', JSON.stringify(loginState.user?.auth_token))
  }, [loginState])

  const handleChange = useCallback(((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value })
  }), [inputData])

  const makeApiCall = useCallback(async () => {
    await Instance.post<any>(`${SERVER_IP}/user/login`, inputData).then((res: AxiosResponse<IUserLoginRtnResponse>) => {
      if (res.data) {
        dispatch(addUserAction(res.data.data))
      }
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
  }, [inputData, errors])

  return {
    inputData,
    errors,
    handleChange,
    handleSubmit
  }
};
