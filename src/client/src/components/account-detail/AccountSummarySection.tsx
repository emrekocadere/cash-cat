import { formatBalance, formatDate } from '@/utils/formatters';
import { exportTransactionsToCSV } from '@/utils/exportToCSV';
import type { Account, Transaction } from '@/types/model.types';

type AccountSummarySectionProps = {
  account: Account;
  typeLabel: string;
  typeTone?: string;
  createdAt?: string;
  transactionCount: number;
  isLoading: boolean;
  isError: boolean;
  showDemoNotice: boolean;
  onAddTransaction?: () => void;
  onEditAccount?: () => void;
  onDeleteAccount?: () => void;
  transactions?: Transaction[];
  accounts?: Account[];
  onShowToast?: (message: string, type: 'success' | 'error') => void;
};

export const AccountSummarySection = ({
  account,
  typeLabel,
  typeTone,
  transactionCount,
  isLoading,
  onAddTransaction,
  onEditAccount,
  onDeleteAccount,
  transactions = [],
  accounts = [],
  onShowToast,
}: AccountSummarySectionProps) => {
  const handleExportCSV = () => {
    if (!transactions || transactions.length === 0) {
      onShowToast?.('No transactions to export', 'error');
      return;
    }
    if (!accounts || accounts.length === 0) {
      onShowToast?.('No accounts available', 'error');
      return;
    }
    exportTransactionsToCSV(transactions, accounts);
    onShowToast?.('Transactions exported as CSV', 'success');
  };

  return (
  <section className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-5">
    <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase text-gray-400">Balance</p>
        <p className="text-4xl sm:text-5xl font-bold text-white">{formatBalance(account.balance, account.currency.iso4217Code)}</p>
      </div>
      <div className="text-right space-y-1.5 sm:space-y-2">
        <span
          className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold uppercase text-white bg-gradient-to-r ${
            typeTone ?? 'from-white/10 to-white/20'
          }`}
        >
          {typeLabel}
        </span>
        <p className="text-xs text-gray-400">Created {formatDate(account.createdAt)}</p>
      </div>
    </div>

    {isLoading && <p className="text-sm text-gray-400">Loading account information...</p>}

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-white/10">
        <p className="text-xs uppercase text-gray-400">Currency</p>
        <p className="text-base sm:text-lg font-semibold text-white mt-0.5 sm:mt-1">{account.currency.iso4217Code}</p>
      </div>
      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-white/10">
        <p className="text-xs uppercase text-gray-400">Account Type</p>
        <p className="text-base sm:text-lg font-semibold text-white mt-0.5 sm:mt-1">{typeLabel}</p>
      </div>
      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-white/10">
        <p className="text-xs uppercase text-gray-400">Transaction Count</p>
        <p className="text-base sm:text-lg font-semibold text-white mt-0.5 sm:mt-1">{transactionCount}</p>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
      <button 
        onClick={onAddTransaction}
        className="px-4 sm:px-6 py-2 sm:py-3 bg-primary-600 hover:bg-primary-700 rounded-lg sm:rounded-2xl text-white text-sm sm:text-base font-semibold transition-colors"
      >
        Add Transaction
      </button>
      <button 
        onClick={onEditAccount}
        className="px-4 sm:px-6 py-2 sm:py-3 border border-white/20 rounded-lg sm:rounded-2xl text-white text-sm sm:text-base font-semibold hover:bg-white/10 transition-colors"
      >
        Edit Account
      </button>
      <button
        onClick={handleExportCSV}
        className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-800/50 hover:bg-slate-800 text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition-all border border-white/10 flex items-center justify-center sm:justify-start gap-2"
      >
        <svg
          className="w-4 sm:w-5 h-4 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 16.5V9.75m0 0l-3 3m3-3l3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0111.25 19.5H6.75z"
          />
        </svg>
        <span className="hidden sm:inline">Export CSV</span>
        <span className="sm:hidden">Export</span>
      </button>
      <button 
        onClick={onDeleteAccount}
        className="px-4 sm:px-6 py-2 sm:py-3 border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 rounded-lg sm:rounded-2xl text-red-400 text-sm sm:text-base font-semibold transition-colors flex items-center justify-center sm:justify-start gap-2"
      >
        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        <span className="hidden sm:inline">Delete Account</span>
        <span className="sm:hidden">Delete</span>
      </button>
    </div>
  </section>
  );
};
