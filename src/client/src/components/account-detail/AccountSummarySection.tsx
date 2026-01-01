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
  <section className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-6">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase text-gray-400">Balance</p>
        <p className="text-5xl font-bold text-white">{formatBalance(account.balance, account.currency.iso4217Code)}</p>
      </div>
      <div className="text-right space-y-2">
        <span
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase text-white bg-gradient-to-r ${
            typeTone ?? 'from-white/10 to-white/20'
          }`}
        >
          {typeLabel}
        </span>
        <p className="text-xs text-gray-400">Created {formatDate(account.createdAt)}</p>
      </div>
    </div>

    {isLoading && <p className="text-sm text-gray-400">Loading account information...</p>}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10">
        <p className="text-xs uppercase text-gray-400">Currency</p>
        <p className="text-lg font-semibold text-white mt-1">{account.currency.iso4217Code}</p>
      </div>
      <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10">
        <p className="text-xs uppercase text-gray-400">Account Type</p>
        <p className="text-lg font-semibold text-white mt-1">{typeLabel}</p>
      </div>
      <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10">
        <p className="text-xs uppercase text-gray-400">Transaction Count</p>
        <p className="text-lg font-semibold text-white mt-1">{transactionCount}</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-3">
      <button 
        onClick={onAddTransaction}
        className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-2xl text-white font-semibold transition-colors"
      >
        Add Transaction
      </button>
      <button className="px-6 py-3 border border-white/20 rounded-2xl text-white font-semibold">
        Edit Account
      </button>
              <button
                onClick={handleExportCSV}
                className="px-6 py-3 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all border border-white/10 flex items-center gap-2"
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
                    d="M12 16.5V9.75m0 0l-3 3m3-3l3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0111.25 19.5H6.75z"
                  />
                </svg>
                Export CSV
              </button>
    </div>
  </section>
  );
};
