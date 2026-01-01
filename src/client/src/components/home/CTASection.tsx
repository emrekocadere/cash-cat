import { Link } from 'react-router-dom';

export const CTASection = () => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
      <div className="bg-gradient-to-r from-primary-600/20 to-indigo-600/20 backdrop-blur-xl p-12 rounded-3xl border border-white/20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Start Your Financial Journey</h2>
        <p className="text-gray-300 mb-8">Join WalletUp today and experience AI-powered money management</p>
        <Link
          to="/register"
          className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-xl shadow-primary-500/30 hover:shadow-primary-600/40 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Get Started Free →
        </Link>
      </div>
    </div>
  );
};
