// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { Instance } from '../../../config/axios';
// import { SERVER_IP } from '../../../config/constants';
// import { userSignupSlice } from '../userSignupSlice';

// export const loginUser = createAsyncThunk(('user-signin/loginUser'), async ({ name, password }:ILoginUserTypes) => {
//   // try {
//   //   const response = await Instance({
//   //     method: 'POST',
//   //     baseURL: `${SERVER_IP}/user/login`,
//   //     headers: {
//   //       Accept: 'application/json',
//   //       'Content-Type': 'application/json'
//   //     },
//   //     data: { name, password }
//   //   })
//   //   const data = response;
//   //   if (response.status === 200) {
//   //     localStorage.setItem('User');
//   //   }
//   // } catch (err : any) {
//   //   console.info('error')
//   // } finally(err) {
//   //   console.error("finally")
//   // }
// })

// export interface ILoginUserTypes {
//   name: string,
//   password: string,
//   loading?: boolean,
//   success?: boolean,
//   error?: boolean
// }
// export const initialState = {
//   name: '',
//   password: '',
//   loading: false,
//   success: false,
//   error: false
// }

// export const userSigninSlice = createSlice({
//   name: 'user-signin',
//   initialState,
//   reducers: {},
//   extraReducers: {

//   }
// })

// // export const {} = userSignupSlice.actions;

export default {}
