import axios from 'axios'
import { SERVER_IP } from './constants'

export const Instance = axios.create({
  baseURL: `${SERVER_IP}`
})

// const token = localStorage.getItem('token')

// export const config = {
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// }
