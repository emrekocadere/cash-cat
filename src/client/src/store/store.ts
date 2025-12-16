import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appDataReducer from './slices/appDataSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appData: appDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
