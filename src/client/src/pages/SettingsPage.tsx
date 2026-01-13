import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Toast } from '@/components/common/Toast';
import { BaseCurrencySection } from '@/components/settings/BaseCurrencySection';
import { CountrySection } from '@/components/settings/CountrySection';
import { AISettingsSection } from '@/components/settings/AISettingsSection';
import { ChangePasswordSection } from '@/components/settings/ChangePasswordSection';
import { DeleteAccountSection } from '@/components/settings/DeleteAccountSection';

export const SettingsPage = () => {
  const { currencies } = useSelector((state: RootState) => state.appData);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [settings, setSettings] = useState({
    baseCurrency: 'TRY',
    country: 'TR',
    aiEnabled: true,
    aiInsightsFrequency: 'daily',
    aiAutoAnalyze: true,
  });

  useEffect(() => {

    const saved = localStorage.getItem('walletup-settings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('walletup-settings', JSON.stringify(settings));
    setToast({ message: 'Settings saved successfully', type: 'success' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <main className="lg:ml-64">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 pt-16 lg:pt-12">
          {/* Page Header */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Settings</h1>
            <p className="text-sm sm:text-base text-gray-400">Customize the application according to your preferences</p>
          </div>

          {/* Settings Cards - responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <BaseCurrencySection
                value={settings.baseCurrency}
                onChange={(currency) => setSettings({ ...settings, baseCurrency: currency })}
                currencies={currencies}
              />
            </div>

            <div>
              <CountrySection
                value={settings.country}
                onChange={(country) => setSettings({ ...settings, country })}
              />
            </div>

            <div className="md:col-span-2">
              <AISettingsSection
                aiEnabled={settings.aiEnabled}
                aiAutoAnalyze={settings.aiAutoAnalyze}
                aiInsightsFrequency={settings.aiInsightsFrequency}
                onAIEnabledChange={(enabled) => setSettings({ ...settings, aiEnabled: enabled })}
                onAutoAnalyzeChange={(enabled) => setSettings({ ...settings, aiAutoAnalyze: enabled })}
                onFrequencyChange={(frequency) => setSettings({ ...settings, aiInsightsFrequency: frequency })}
              />
            </div>

            <div className="md:col-span-2">
              <ChangePasswordSection onToast={setToast} />
            </div>

            <div className="md:col-span-2">
              <DeleteAccountSection onToast={setToast} />
            </div>
          </div>
            {/* Save Button */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-800/50 hover:bg-slate-800 text-white text-sm sm:text-base font-semibold rounded-xl transition-colors border border-white/10"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm sm:text-base font-semibold rounded-xl transition-all shadow-lg shadow-primary-500/30"
            >
              Save
            </button>
          </div>
        </div>
      </main>

      <Footer />

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};
