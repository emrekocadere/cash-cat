import { formatBalance, formatCurrency } from '@/utils/formatters';

interface TransactionFiltersProps {
  filterPeriod: string;
  setFilterPeriod: (value: string) => void;
  filterType: string;
  setFilterType: (value: string) => void;
  filterAccount: string;
  setFilterAccount: (value: string) => void;
  filterCategory: string;
  setFilterCategory: (value: string) => void;
  accounts: Array<{ id: string; name: string; balance: number }>;
  categories: Array<{ id: string; name: string }>;
  onClearFilters: () => void;
}

export const TransactionFilters = ({
  filterPeriod,
  setFilterPeriod,
  filterType,
  setFilterType,
  filterAccount,
  setFilterAccount,
  filterCategory,
  setFilterCategory,
  accounts,
  categories,
  onClearFilters,
}: TransactionFiltersProps) => {
  const hasActiveFilters =
    filterType !== 'all' ||
    filterAccount !== 'all' ||
    filterCategory !== 'all' ||
    filterPeriod !== 'all';

  return (
    <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 mb-8">
      <h3 className="text-white font-semibold mb-4">Filters</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Period Filter */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Period</label>
          <select
            value={filterPeriod}
            onChange={(e) => setFilterPeriod(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-800/80 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 hover:bg-slate-800 transition-colors appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.5rem center',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            <option value="all" className="bg-slate-800 text-white">All Time</option>
            <option value="week" className="bg-slate-800 text-white">Last 7 Days</option>
            <option value="month" className="bg-slate-800 text-white">Last 30 Days</option>
          </select>
        </div>

        {/* Type Filter */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Type</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-800/80 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 hover:bg-slate-800 transition-colors appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.5rem center',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            <option value="all" className="bg-slate-800 text-white">All Types</option>
            <option value="Income" className="bg-slate-800 text-white">Income</option>
            <option value="Expense" className="bg-slate-800 text-white">Expense</option>
          </select>
        </div>

        {/* Account Filter */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Account</label>
          <select
            value={filterAccount}
            onChange={(e) => setFilterAccount(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-800/80 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 hover:bg-slate-800 transition-colors appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.5rem center',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            <option value="all" className="bg-slate-800 text-white">All Accounts</option>
            {accounts.map((account) => (
              <option key={account.id} value={account.id} className="bg-slate-800 text-white">
                {account.name} ({formatCurrency(account.balance)})
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Category</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-800/80 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 hover:bg-slate-800 transition-colors appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.5rem center',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            <option value="all" className="bg-slate-800 text-white">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="mt-4 text-sm text-primary-400 hover:text-primary-300 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
};
