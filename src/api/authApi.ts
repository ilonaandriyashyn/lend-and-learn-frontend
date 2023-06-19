import axios from 'axios';
import { ApiResponse } from './types';
import { User } from '../modules/users/types';

export interface Auth {
  accessToken: string;
  user: User;
}

export const loginRequest = async (code: string): Promise<ApiResponse<Auth>> => axios.get(`http://localhost:3000/?code=${code}`);
