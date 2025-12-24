import { formatBalance, formatDate } from '@/utils/formatters';
import type { Account } from '@/types/model.types';

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
};

export const AccountSummarySection = ({
  account,
  typeLabel,
  typeTone,
  transactionCount,
  isLoading,
  onAddTransaction,
}: AccountSummarySectionProps) => (
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
      <button className="px-6 py-3 border border-dashed border-white/30 rounded-2xl text-sm text-gray-300 font-semibold">
        Download Summary
      </button>
    </div>
  </section>
);
