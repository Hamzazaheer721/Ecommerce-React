export type IStoreType = {
  store_id: string,
  store_name: string,
  bussiness_url : string
  pivot? : {
    user_id: string
    store_id: string
  }
}
