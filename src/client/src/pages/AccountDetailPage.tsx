import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { accountsApi } from '@/api/endpoints/accounts.api';
import { transactionsApi } from '@/api/endpoints/transactions.api';
import { AccountSummarySection } from '@/components/account-detail/AccountSummarySection';
import { AccountTransactionsPanel } from '@/components/account-detail/AccountTransactionsPanel';
import { AddTransactionModal } from '@/components/transactions/AddTransactionModal';
import type { Transaction } from '@/types/transaction.types';
import type { Account } from '@/types/account.types';

export const AccountDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { categories } = useSelector((state: RootState) => state.appData);
  const [account, setAccount] = useState<Account | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      
      setIsLoading(true);
      setIsError(false);
      try {
        const [accountData, transactionsData] = await Promise.all([
          accountsApi.getById(id),
          transactionsApi.getByAccountId(id)
        ]);
        console.log('Account API Response:', accountData);
        console.log('Transactions API Response:', transactionsData);
        setAccount(accountData);
        setTransactions(transactionsData);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (!account && isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Header />
        <main className="ml-64">
          <div className="max-w-5xl mx-auto px-8 py-12">
            <div className="text-center text-white text-xl">Loading account details...</div>
          </div>
        </main>
      </div>
    );
  }

  if (!account || isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Header />
        <main className="ml-64">
          <div className="max-w-5xl mx-auto px-8 py-12">
            <div className="text-center">
              <p className="text-red-400 text-xl mb-4">Failed to load account</p>
              <Link to="/accounts" className="text-primary-400 hover:text-primary-300">
                ← Back to Accounts
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const typeLabel = account.accountType.name;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <main className="ml-64">
        <div className="max-w-5xl mx-auto px-8 py-12 space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <Link
                to="/accounts"
                className="text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors"
              >
                ← Back to Accounts
              </Link>
              <h1 className="text-4xl font-bold text-white mt-1">{account.name}</h1>
              <p className="text-gray-400">View your account balance and recent activity details.</p>
            </div>
          </div>

          <AccountSummarySection
            account={account}
            typeLabel={typeLabel}
            transactionCount={transactions.length}
            isLoading={isLoading}
            isError={isError}
            showDemoNotice={false}
            onAddTransaction={() => setShowAddModal(true)}
          />

          <AccountTransactionsPanel transactions={transactions} />
        </div>

        <Footer />
      </main>

      <AddTransactionModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        accounts={[{ id: account.id, name: account.name }]}
        categories={categories}
        defaultAccountId={account.id}
        onSuccess={async () => {
          // Refresh transactions after adding
          try {
            const transactionsData = await transactionsApi.getByAccountId(id!);
            setTransactions(transactionsData);
          } catch (err) {
            console.error('Failed to refresh transactions:', err);
          }
        }}
      />
    </div>
  );
};
