import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Toast } from '@/components/common/Toast';
import { TransactionTable } from '@/components/transactions/TransactionTable';
import { TransactionFilters } from '@/components/transactions/TransactionFilters';
import { AddTransactionModal } from '@/components/transactions/AddTransactionModal';
import { transactionsApi } from '@/api/endpoints/transactions.api';
import { accountsApi } from '@/api/endpoints/accounts.api';
import type { Transaction, Account } from '@/types/model.types';


export const TransactionsPage = () => {

  const { categories, transactionTypes } = useSelector((state: RootState) => state.appData);

  const [showAddModal, setShowAddModal] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterAccount, setFilterAccount] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterPeriod, setFilterPeriod] = useState<string>('all');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        const filters: Record<string, string> = {};
        
        if (filterCategory !== 'all') {
          filters.categoryId = filterCategory;
        }
        
        if (filterType !== 'all') {
          const typeObj = transactionTypes.find(t => t.name?.toLowerCase() === filterType.toLowerCase());
          if (typeObj?.id) {
            filters.transactionTypeId = typeObj.id;
          }
        }
        
        if (filterAccount !== 'all') {
          filters.accountId = filterAccount;
        }
        
        if (filterPeriod !== 'all') {
          const now = new Date();
          if (filterPeriod === 'week') {
            const weekAgo = new Date(now);
            weekAgo.setDate(now.getDate() - 7);
            filters.startDate = weekAgo.toISOString().split('T')[0];
          } else if (filterPeriod === 'month') {
            const monthAgo = new Date(now);
            monthAgo.setMonth(now.getMonth() - 1);
            filters.startDate = monthAgo.toISOString().split('T')[0];
          }
          filters.endDate = now.toISOString().split('T')[0];
        }

        console.log('Aktif Filtreler:', {
          category: filterCategory !== 'all' ? filterCategory : 'Yok',
          account: filterAccount !== 'all' ? filterAccount : 'Yok',
          type: filterType !== 'all' ? filterType : 'Yok',
          period: filterPeriod !== 'all' ? filterPeriod : 'Yok'
        });
        console.log('API Parametreleri:', filters);
        
        const [transactionsData, accountsData] = await Promise.all([
          transactionsApi.getAll(Object.keys(filters).length > 0 ? filters : undefined),
          accountsApi.getAll(),
        ]);
        
        console.log('İstek başarılı. Gelen işlem sayısı:', transactionsData.length);
        
        setTransactions(transactionsData);
        setAccounts(accountsData);
      } catch (error) {
        console.error('stek başarısız:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filterType, filterAccount, filterCategory, filterPeriod, transactionTypes]);


  const filteredTransactions = transactions;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <main className="ml-64">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Transactions</h1>
              <p className="text-gray-400">Manage and track your transactions</p>
            </div>
            <div className="flex items-center gap-3">
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
          </div>

  
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
        </div>
      </main>

      <Footer />

      <AddTransactionModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        accounts={accounts}
        categories={categories}
        onSuccess={async () => {

          try {
            const updatedTransactions = await transactionsApi.getAll();
            setTransactions(updatedTransactions);
          } catch (error) {
            console.error('Failed to reload transactions:', error);
          }
        }}
        onShowToast={(message, type) => setToast({ message, type })}
      />

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
