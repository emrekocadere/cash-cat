import { useState, useEffect } from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { TransactionTable } from '@/components/transactions/TransactionTable';
import { TransactionFilters } from '@/components/transactions/TransactionFilters';
import { TransactionStats } from '@/components/transactions/TransactionStats';
import { AddTransactionModal } from '@/components/transactions/AddTransactionModal';
import { transactionsApi } from '@/api/endpoints/transactions.api';
import { accountsApi } from '@/api/endpoints/accounts.api';
import type { Transaction } from '@/types/transaction.types';
import type { Account } from '@/types/account.types';

export const TransactionsPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterAccount, setFilterAccount] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterPeriod, setFilterPeriod] = useState<string>('all');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [transactionsData, accountsData] = await Promise.all([
          transactionsApi.getAll(),
          accountsApi.getAll(),
        ]);
        setTransactions(transactionsData);
        setAccounts(accountsData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter transactions based on selected filters
  const filteredTransactions = transactions.filter((transaction) => {
    if (filterAccount !== 'all' && transaction.accountId !== filterAccount) return false;
    if (filterCategory !== 'all' && transaction.category?.id !== filterCategory) return false;
    if (filterType !== 'all' && transaction.transactionType?.name?.toLowerCase() !== filterType.toLowerCase()) return false;
    
    if (filterPeriod !== 'all' && transaction.date) {
      const transactionDate = new Date(transaction.date);
      const now = new Date();
      
      if (filterPeriod === 'week') {
        const weekAgo = new Date(now);
        weekAgo.setDate(now.getDate() - 7);
        if (transactionDate < weekAgo) return false;
      } else if (filterPeriod === 'month') {
        const monthAgo = new Date(now);
        monthAgo.setMonth(now.getMonth() - 1);
        if (transactionDate < monthAgo) return false;
      }
    }
    
    return true;
  });

  // Get unique categories from transactions
  const categories = Array.from(
    new Set(transactions.map((t) => t.category?.name).filter(Boolean))
  ).map((name) => ({
    name: name as string,
    id: transactions.find((t) => t.category?.name === name)?.category?.id || '',
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <main className="ml-64">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Transactions</h1>
              <p className="text-gray-400">Manage and track your transactions</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Transaction
            </button>
          </div>

          {/* Filters */}
          <TransactionFilters
            filterPeriod={filterPeriod}
            setFilterPeriod={setFilterPeriod}
            filterType={filterType}
            setFilterType={setFilterType}
            filterAccount={filterAccount}
            setFilterAccount={setFilterAccount}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            accounts={accounts}
            categories={categories}
            onClearFilters={() => {
              setFilterType('all');
              setFilterAccount('all');
              setFilterCategory('all');
              setFilterPeriod('all');
            }}
          />

          {/* Transactions List */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
            <TransactionTable
              transactions={filteredTransactions}
              isLoading={isLoading}
              accounts={accounts}
              hasFilters={
                filterType !== 'all' ||
                filterAccount !== 'all' ||
                filterCategory !== 'all' ||
                filterPeriod !== 'all'
              }
            />
          </div>

          {/* Summary Stats */}
          <TransactionStats transactions={filteredTransactions} />
        </div>
      </main>

      <Footer />

      {/* Add Transaction Modal */}
      <AddTransactionModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        accounts={accounts}
        categories={categories}
      />
    </div>
  );
};
