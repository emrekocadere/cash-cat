import { useState, useEffect } from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { transactionsApi } from '@/api/endpoints/transactions.api';
import { RecentTransactionsPanel } from '@/components/dashboard/RecentTransactionsPanel';
import { StatCard } from '@/components/dashboard/StatCard';
import { SpendingByCategoryPanel } from '@/components/dashboard/SpendingByCategoryPanel';
import type { Transaction, CategoryExpense } from '@/types/model.types';

export const DashboardPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [monthlySpending, setMonthlySpending] = useState(0);
  const [transactionCount, setTransactionCount] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [categoryExpenses, setCategoryExpenses] = useState<CategoryExpense[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const currentMonth = new Date().getMonth() + 1;
        
        // Fetch both transactions and dashboard data in parallel
        const [transactionsResult, dashboardResult] = await Promise.all([
          transactionsApi.getAll(),
          transactionsApi.getDashboard(currentMonth),
        ]);

        setTransactions(transactionsResult);
        setMonthlySpending(dashboardResult.expense);
        setMonthlyIncome(dashboardResult.income);
        setTransactionCount(dashboardResult.quantity);
        setCategoryExpenses(dashboardResult.categoryExpenses || []);
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Map API category data to component format
  const categoryData = categoryExpenses.map((cat, index) => {
    const gradients = [
      'from-orange-500 to-orange-400',
      'from-blue-500 to-blue-400',
      'from-cyan-500 to-cyan-400',
      'from-yellow-500 to-yellow-400',
      'from-pink-500 to-pink-400',
      'from-purple-500 to-purple-400',
      'from-green-500 to-green-400',
      'from-red-500 to-red-400',
    ];
    return {
      name: cat.categoryName,
      percentage: cat.percentage,
      gradient: gradients[index % gradients.length],
    };
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <Header />

      {/* Main Content */}
      <main className="ml-64">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome back, User!</h1>
            <p className="text-gray-400">Here's your financial overview</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <StatCard
              title="Total Balance"
              value="$12,450.50"
              subtitle="+2.5% from last month"
              iconBgColor="bg-primary-500/20"
              iconColor="text-primary-400"
              borderHoverColor="primary-500/50"
              subtitleColor="text-green-400"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />

            <StatCard
              title="Monthly Spending"
              value={`$${monthlySpending.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
              subtitle={monthlyIncome > 0 ? `-${((monthlySpending / monthlyIncome) * 100).toFixed(1)}% of income` : 'No income this month'}
              iconBgColor="bg-red-500/20"
              iconColor="text-red-400"
              borderHoverColor="red-500/50"
              subtitleColor="text-red-400"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />

            <StatCard
              title="Goals"
              value="3"
              subtitle="Active goals"
              iconBgColor="bg-purple-500/20"
              iconColor="text-purple-400"
              borderHoverColor="purple-500/50"
              subtitleColor="text-purple-400"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              }
            />

            <StatCard
              title="Transactions"
              value={transactionCount.toString()}
              subtitle="This month"
              iconBgColor="bg-indigo-500/20"
              iconColor="text-indigo-400"
              borderHoverColor="indigo-500/50"
              subtitleColor="text-indigo-400"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>

          {/* Recent Transactions Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Transactions */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
                <a href="/transactions" className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
                  View all →
                </a>
              </div>

              <RecentTransactionsPanel transactions={transactions} isLoading={isLoading} />
            </div>

            {/* Spending by Category */}
            <SpendingByCategoryPanel categories={categoryData} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
