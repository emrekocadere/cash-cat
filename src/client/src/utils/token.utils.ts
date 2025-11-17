import { jwtDecode } from 'jwt-decode';
import type { TokenPayload } from '@/types/auth.types';

const TOKEN_KEY = 'authToken';

export const tokenUtils = {
  saveToken: (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  },

  decodeToken: (token: string): TokenPayload | null => {
    try {
      return jwtDecode<TokenPayload>(token);
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  },

  isTokenExpired: (token: string): boolean => {
    const decoded = tokenUtils.decodeToken(token);
    if (!decoded) return true;
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  },

  isAuthenticated: (): boolean => {
    const token = tokenUtils.getToken();
    if (!token) return false;
    return !tokenUtils.isTokenExpired(token);
  },
};
