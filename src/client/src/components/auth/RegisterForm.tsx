import { useState } from 'react';
import type { RegisterRequest } from '@/types/auth.types';

interface RegisterFormProps {
  onSubmit: (data: RegisterRequest) => void;
  isLoading?: boolean;
  error?: string | null;
}

export const RegisterForm = ({ onSubmit, isLoading = false, error }: RegisterFormProps) => {
  const [formData, setFormData] = useState<RegisterRequest>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });



  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof RegisterRequest, string>> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }


    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-200">
          Name 
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
          className="mt-1 block w-full rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-500/20 disabled:bg-white/5 disabled:cursor-not-allowed transition-all duration-200 hover:border-white/30"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-200">
          Email 
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-1 disabled:bg-gray-100 disabled:cursor-not-allowed `}
          placeholder="you@example.com"
        />

      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-200">
          Password 
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          disabled={isLoading}
          className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 disabled:bg-gray-100 disabled:cursor-not-allowed`}
          placeholder="••••••••"
        />

      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-200">
          Confirm Password 
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          disabled={isLoading}
          className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 disabled:bg-gray-100 disabled:cursor-not-allowed`}
          placeholder="••••••••"
        />
        
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 px-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-xl shadow-primary-500/30 hover:shadow-primary-600/40 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] hover:-translate-y-0.5"
      >
        {isLoading ? 'Creating account...' : 'Create Account'}
      </button>
    </form>
  );
};
