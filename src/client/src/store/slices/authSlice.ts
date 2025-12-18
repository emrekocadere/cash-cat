import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/types/auth.types';

interface AuthState {
  accessToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

// Load token from localStorage on initial load
const loadTokenFromStorage = (): string | null => {
  try {
    return localStorage.getItem('access_token');
  } catch {
    return null;
  }
};

const storedToken = loadTokenFromStorage();

const initialState: AuthState = {
  accessToken: storedToken,
  user: null,
  isAuthenticated: !!storedToken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ accessToken: string; }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
      // Also save to localStorage for persistence
      localStorage.setItem('access_token', action.payload.accessToken);
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
      state.isAuthenticated = false;
      // Clear from localStorage
      localStorage.removeItem('access_token');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
