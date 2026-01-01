import type { Transaction, Account } from '@/types/model.types';

export const exportTransactionsToCSV = (
  transactions: Transaction[],
  accounts: Account[],
  filename?: string
): void => {
  if (transactions.length === 0) {
    console.warn('No transactions to export');
    return;
  }

  const headers = ['Date', 'Description', 'Category', 'Type', 'Account', 'Amount'];

  const rows = transactions.map((transaction) => {
    const accountName = accounts.find(acc => acc.id === transaction.accountId)?.name || '';
    return [
      new Date(transaction.date || '').toLocaleDateString('tr-TR'),
      transaction.description || '',
      transaction.category?.name || '',
      transaction.transactionType?.name || '',
      accountName,
      transaction.amount || ''
    ];
  });

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename || `transactions-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
