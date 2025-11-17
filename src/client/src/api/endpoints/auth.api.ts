import { apiClient } from '../client/axios.client';
import type { LoginRequest, RegisterRequest, AuthResponse, User } from '@/types/auth.types';
import type { ApiResponse } from '@/types';

export const authApi = {
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>(
      '/identity/login',
      credentials
    );
    return data.data;
  },

  register: async (userData: RegisterRequest): Promise<AuthResponse> => {
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>(
      '/identity/register',
      userData
    );
    return data.data;
  },

  getCurrentUser: async (): Promise<User> => {
    const { data } = await apiClient.get<ApiResponse<User>>('/identity/me');
    return data.data;
  },

  logout: () => {
    localStorage.removeItem('authToken');
  },

  refreshToken: async (refreshToken: string): Promise<AuthResponse> => {
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>('/identity/refresh', {
      refreshToken,
    });
    return data.data;
  },
};
