import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 group">
        <img 
          src="/logo.png" 
          alt="WalletUp Logo" 
          className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
        />
        <span className="text-xl font-bold text-white">WalletUp</span>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to="/login"
          className="text-gray-300 hover:text-white transition-colors font-medium"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};
