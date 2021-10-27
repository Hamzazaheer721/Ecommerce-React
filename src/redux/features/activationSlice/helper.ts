import { IActivationStateType } from './types';

export const IActivationUserInitialState = {
  auth_token: '',
  id: '',
  is_user_deactivated: '',
  message: '',
  name: '',
  stores: [{
    store_name: '',
    store_id: '',
     bussiness_url: ''
  }],
  user_status: 0,
  user_type: '',
  wp_num_inc_code: ''
}

export const initialState: IActivationStateType = {
  message: '',
  success: false,
  loading: false,
  user: IActivationUserInitialState
}
