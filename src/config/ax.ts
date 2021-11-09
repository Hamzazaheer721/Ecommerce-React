import axios from 'axios';
import { SERVER_IP } from './constants';

export const Instance = axios.create({
  baseURL: `${SERVER_IP}`
});
