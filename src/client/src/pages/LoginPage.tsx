import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginForm } from '@/components/auth/LoginForm';
import { authApi } from '@/api/endpoints/auth.api';
import { setCredentials } from '@/store/slices/authSlice';
import type { LoginRequest } from '@/types/auth.types';
import type { ApiError } from '@/types/common.types';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (data: LoginRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authApi.login(data);

      if (response.value?.accessToken) {

        dispatch(setCredentials({ accessToken: response.value.accessToken }));

        navigate('/dashboard');
      }

    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="hidden md:block">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 via-purple-500 to-indigo-600 rounded-3xl mb-8 shadow-2xl shadow-primary-500/50">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4">
            WalletUp
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Welcome back! Manage your finances with ease.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Secure Access</h3>
                <p className="text-gray-400">Your account is protected</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Quick Access</h3>
                <p className="text-gray-400">Login instantly to your dashboard</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Your Data</h3>
                <p className="text-gray-400">All your expenses in one place</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white/5 backdrop-blur-2xl py-8 sm:py-12 px-4 sm:px-10 shadow-2xl rounded-2xl sm:rounded-3xl border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
              <p className="text-gray-300">Welcome back to WalletUp</p>
            </div>

            <LoginForm onSubmit={handleLogin} isLoading={isLoading} error={error} />

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-center text-sm text-gray-300">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="text-primary-400 hover:text-primary-300 font-semibold hover:underline transition-all"
                >
                  Create one →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
