import { apiClient } from '../client/axios.client';
import type { LoginRequest, RegisterRequest, AuthResponse } from '@/types/auth.types';
import type { ResultT } from '@/types/common.types';

export const authApi = {

  login: async (credentials: LoginRequest): Promise<ResultT<AuthResponse>> => {
    const { data } = await apiClient.post<ResultT<AuthResponse>>(
      '/Identity/login',
      credentials
    );
    return data;
  },

  register: async (userData: RegisterRequest): Promise<ResultT<AuthResponse>> => {
    const { data } = await apiClient.post<ResultT<AuthResponse>>(
      '/Identity/register',
      userData
    );
    return data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post('/Identity/logout');
  },

};



