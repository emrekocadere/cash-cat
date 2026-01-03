import { Header } from '../components/home/Header';
import { Hero } from '../components/home/Hero';
import { CombinedFeaturesSection } from '../components/home/CombinedFeaturesSection';
import { AppShowcaseSection } from '../components/home/AppShowcaseSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { CTASection } from '../components/home/CTASection';
import { Footer } from '../components/home/Footer';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <Header />
      <Hero />
      <CombinedFeaturesSection />
      <FeaturesSection />
      <AppShowcaseSection />
      <CTASection />
      <Footer />
    </div>
  );
};
