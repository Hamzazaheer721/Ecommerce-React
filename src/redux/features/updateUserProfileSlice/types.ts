export type IUpdateProfilePayloadRtn = {
  success: boolean
  data: {
    id: string
    parent_id: string
    user_type: string
    user_status: string
    country_code: string
    wp_num_inc_code: {
      with_cc: string
      without_cc: string
    }
    wp_num_exc_code: string
    image: string
    is_user_deactivated: string
    name: string
    email: string
    email_verified_at: string
    created_at: string
    updated_at: string
    deleted_at: string
  }
  message: string
}

export type IUpdateUserProfilePayloadArg = {
  name: string
  email: string
  phone: string
  country_code: string
}

export type IUpdateUserProfileRejectPayload = {
  success: boolean
  message: string
}

export type IUpdateUserProfileStateType = {
  name: string
  email: string
  phone: string
  country_code: string
  loading: boolean
  success: boolean
  message: string
}
