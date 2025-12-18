import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/store/store';
import { fetchAppData } from '@/store/slices/appDataSlice';
import { HomePage } from '@/pages/HomePage';
import { RegisterPage } from '@/pages/RegisterPage';
import { LoginPage } from '@/pages/LoginPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { TransactionsPage } from '@/pages/TransactionsPage';
import { AccountsPage } from '@/pages/AccountsPage';
import { AccountDetailPage } from '@/pages/AccountDetailPage';
import { GoalsPage } from '@/pages/GoalsPage';

export const AppRoutes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoaded } = useSelector((state: RootState) => state.appData);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchAppData());
    }
  }, [dispatch, isLoaded]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/accounts" element={<AccountsPage />} />
      <Route path="/accounts/:id" element={<AccountDetailPage />} />
      <Route path="/goals" element={<GoalsPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
