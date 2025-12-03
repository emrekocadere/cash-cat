import type { TokenPayload } from '@/types/auth.types';
import { store } from '@/store/store';

export const tokenUtils = {
  getToken: (): string | null => {
    return store.getState().auth.accessToken;
  },

  decodeToken: (token: string): TokenPayload | null => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
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
