import { useState } from 'react';
import type { Transaction } from '@/types/model.types';
import { formatDate, formatCurrency } from '@/utils/formatters';
import { DropdownMenu } from '@/components/common/DropdownMenu';

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
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handleEdit = (transaction: Transaction) => {
    console.log('Edit transaction:', transaction);
  };

  const handleDelete = (transaction: Transaction) => {
    console.log('Delete transaction:', transaction);
  };
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
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/15 text-purple-300 rounded-lg text-sm border border-purple-500/20 hover:border-purple-400/40 transition-all">
                  {transaction.category?.name || 'No category'}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">
                {accounts.find((a) => a.id === transaction.accountId)?.name || 'Unknown'}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium ${
                    transaction.transactionType?.name?.toLowerCase() === 'income'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {transaction.transactionType?.name?.toLowerCase() === 'income' ? (
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
                    transaction.transactionType?.name?.toLowerCase() === 'income' ? 'text-green-400' : 'text-white'
                  }`}
                >
                  {transaction.transactionType?.name?.toLowerCase() === 'income' ? '+' : '-'}
                  {formatCurrency(transaction.amount)}
                </span>
              </td>
              <td className="px-6 py-4 text-center relative">
                <div
                  className="inline-block"
                  onClick={() => transaction.id && setOpenMenuId(openMenuId === transaction.id ? null : transaction.id)}
                >
                  <DropdownMenu
                    isOpen={openMenuId === transaction.id}
                    menuItems={[
                      {
                        label: 'Edit',
                        icon: (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        ),
                        onClick: () => {
                          handleEdit(transaction);
                          setOpenMenuId(null);
                        },
                      },
                      {
                        label: 'Delete',
                        icon: (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        ),
                        onClick: () => {
                          handleDelete(transaction);
                          setOpenMenuId(null);
                        },
                        variant: 'danger',
                      },
                    ]}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
