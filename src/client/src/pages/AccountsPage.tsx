import { useState, useEffect } from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { accountsApi } from '@/api/endpoints/accounts.api';
import { AccountsHeroStats } from '@/components/accounts/AccountsHeroStats';
import { AccountListSection } from '@/components/accounts/AccountListSection';
import { AddAccountModal } from '@/components/accounts/AddAccountModal';
import type { Account } from '@/types/account.types';

export const AccountsPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAccounts = async () => {
      setIsLoading(true);

      try {
        const result = await accountsApi.getAll();
        console.log('Accounts API Response:', result);
        setAccounts(result);
      } catch (err) {
        console.error('Failed to fetch accounts:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <main className="ml-64">
        <div className="max-w-[1400px] mx-auto px-8 py-12 space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">Accounts</h1>
              <p className="text-gray-400">
                Track your finances with multiple accounts. Each account can be customized with a name and type (Bank Card, Credit Card, Cash, etc.).
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-500/30"
            >
              Add Account
            </button>
          </div>

          <AccountsHeroStats
            totalBalance={accounts.reduce((sum, acc) => sum + (acc.balance || 0), 0)}
            totalAccounts={accounts.length}
          />

          <AccountListSection accounts={accounts} isLoading={isLoading} currencies={{}} />
        </div>

        <Footer />
      </main>

      <AddAccountModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={async (accountData) => {
          try {

            const result = await accountsApi.create(accountData);

            
            if (result.isSuccess && result.value) {
              setAccounts([...accounts, result.value]);
            }
          } catch (err) {
            alert('Failed to create account. Please try again.');
          }
        }}
      />
    </div>
  );
};