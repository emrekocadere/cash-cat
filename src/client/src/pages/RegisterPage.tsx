import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { authApi } from '@/api/endpoints/auth.api';
import { setCredentials, setOnboardingCompleted } from '@/store/slices/authSlice';
import type { RegisterRequest } from '@/types/auth.types';
import type { ApiError } from '@/types/common.types';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (data: RegisterRequest) => {
    setIsLoading(true);
    setError(null);
    console.log(data);
    try {
      const response = await authApi.register(data);

      if (response.value?.accessToken) {
        dispatch(setCredentials({
          accessToken: response.value.accessToken,
        }));
        dispatch(setOnboardingCompleted(false));
        navigate('/onboarding');
      }
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Registration failed. Please try again.');
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
          <img 
            src="/logo.png" 
            alt="WalletUp Logo" 
            className="w-20 h-20 mb-8 object-contain"
          />
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4">WalletUp</h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Take control of your finances with our smart expense tracking app.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Fast & Easy</h3>
                <p className="text-gray-400">Log expenses in seconds</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Smart Analytics</h3>
                <p className="text-gray-400">Understand your spending patterns</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Secure & Private</h3>
                <p className="text-gray-400">Your data is safe with us</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white/5 backdrop-blur-2xl py-8 sm:py-12 px-4 sm:px-10 shadow-2xl rounded-2xl sm:rounded-3xl border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
              <p className="text-gray-300">Start tracking your expenses</p>
            </div>
            <RegisterForm onSubmit={handleRegister} isLoading={isLoading} error={error} />

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-center text-sm text-gray-300">
                Already have an account?{' '}
                <Link to="/login" className="text-primary-400 hover:text-primary-300 font-semibold hover:underline transition-all">
                  Sign in →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
