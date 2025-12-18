import type { Transaction } from '@/types/transaction.types';
import { formatBalance, formatDate, formatCurrency } from '@/utils/formatters';

interface TransactionTableProps {
  transactions: Transaction[];
  isLoading: boolean;
  accounts: Array<{ id: string; name: string }>;
  hasFilters: boolean;
}

export const TransactionTable = ({
  transactions,
  isLoading,
  accounts,
  hasFilters,
}: TransactionTableProps) => {
  if (isLoading) {
    return <div className="text-center py-12 text-gray-400">Loading transactions...</div>;
  }

  if (transactions.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="w-16 h-16 text-gray-600 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <p className="text-gray-400 mb-2">No transactions found</p>
        <p className="text-gray-500 text-sm">
          {hasFilters ? 'Try adjusting your filters' : 'Start by adding your first transaction'}
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-white/5 border-b border-white/10">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Title</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Category</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Account</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Type</th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">Amount</th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-white/5 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-300">{formatDate(transaction.date)}</td>
              <td className="px-6 py-4">
                <div>
                  <p className="text-white font-medium">{transaction.title || 'Untitled'}</p>
                  {transaction.description && (
                    <p className="text-gray-500 text-sm">{transaction.description}</p>
                  )}
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/20 text-primary-400 rounded-lg text-sm">
                  {transaction.category?.name || 'No category'}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">
                {accounts.find((a) => a.id === transaction.accountId)?.name || 'Unknown'}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium ${
                    transaction.transactionType?.name === 'Income'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {transaction.transactionType?.name === 'Income' ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 11l5-5m0 0l5 5m-5-5v12"
                      />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 13l-5 5m0 0l-5-5m5 5V6"
                      />
                    </svg>
                  )}
                  {transaction.transactionType?.name || 'Unknown'}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <span
                  className={`text-lg font-bold ${
                    transaction.transactionType?.name === 'Income' ? 'text-green-400' : 'text-white'
                  }`}
                >
                  {transaction.transactionType?.name === 'Income' ? '+' : '-'}
                  {formatCurrency(transaction.amount)}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
