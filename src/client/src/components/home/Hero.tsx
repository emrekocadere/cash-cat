import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary-300">✨ AI-Powered Financial Assistant</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-6 leading-tight">
            Smart Money Management
            <br />
            Powered by AI
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Track expenses effortlessly, get intelligent insights, and make better financial decisions with AI-driven recommendations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/register"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-indigo-600 hover:from-primary-600 hover:to-indigo-700 text-white font-bold rounded-xl shadow-xl shadow-primary-500/30 hover:shadow-primary-600/40 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Create Free Account
            </Link>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>


        <div className="relative hidden lg:block">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10">

          </div>
        </div>
      </div>
    </div>
  );
};
