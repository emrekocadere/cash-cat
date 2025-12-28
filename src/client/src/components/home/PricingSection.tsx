export const PricingSection = () => {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 text-lg">Start free, upgrade when you need more power</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Plan */}
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
          <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$0</span>
            <span className="text-gray-400 ml-2">forever</span>
          </div>
          <p className="text-gray-400 mb-6">Perfect for getting started with expense tracking</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Unlimited expense tracking</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Basic analytics</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Multiple accounts</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Manual categorization</span>
            </li>
          </ul>
        </div>

        {/* Plus Plan */}
        <div className="bg-gradient-to-br from-primary-500/20 to-indigo-500/20 backdrop-blur-xl p-8 rounded-2xl border-2 border-primary-500/50 hover:border-primary-500/70 transition-all relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-gradient-to-r from-primary-500 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
              2 MONTHS FREE TRIAL
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Plus</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">€7</span>
            <span className="text-gray-400 ml-2">/ month</span>
          </div>
          <p className="text-gray-400 mb-6">Advanced AI features for smarter money management</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white font-semibold">Everything in Free, plus:</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300"><strong className="text-white">AI-powered categorization</strong> - Automatic & smart</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300"><strong className="text-white">Predictive analytics</strong> - Forecast spending</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300"><strong className="text-white">Personalized insights</strong> - Custom recommendations</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300"><strong className="text-white">Budget optimization</strong> - AI-driven savings</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Priority support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
