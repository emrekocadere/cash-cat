import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
      <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/Logo2.svg" 
            alt="WalletUp Logo" 
            className="h-16 w-32 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </Link>



        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden sm:block text-gray-300 hover:text-white transition-colors font-medium px-4 py-2 hover:bg-white/5 rounded-lg"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-indigo-600 hover:from-primary-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary-500/30"
          >
            Get Started
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium py-2">
              Features
            </a>
            <a href="#showcase" className="text-gray-300 hover:text-white transition-colors font-medium py-2">
              How It Works
            </a>
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition-colors font-medium py-2"
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
