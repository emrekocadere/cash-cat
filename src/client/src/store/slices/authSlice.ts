import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/types/auth.types';
import { authService } from '@/services/auth.service';

interface AuthState {
  accessToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
  onboarding_completed: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
  isAuthenticated: false,
  onboarding_completed: false,
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

      authService.setAccessToken(action.payload.accessToken);
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
      state.isAuthenticated = false;
      state.onboarding_completed = false;

      authService.clearAccessToken();
    },
    setOnboardingCompleted: (state, action: PayloadAction<boolean>) => {
      state.onboarding_completed = action.payload;
    },
  },
});

export const { setCredentials, logout, setOnboardingCompleted } = authSlice.actions;
export default authSlice.reducer;
