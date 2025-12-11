import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';

interface AddAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    name: string;
    accountTypeId: string;
    balance: number;
    currencyId: string;
  }) => void;
}

export const AddAccountModal = ({ isOpen, onClose, onSubmit }: AddAccountModalProps) => {
  const { accountTypes, currencies } = useSelector((state: RootState) => state.appData);
  
  const [accountName, setAccountName] = useState('');
  const [accountTypeId, setAccountTypeId] = useState('');
  const [accountBalance, setAccountBalance] = useState('0');
  const [currencyId, setCurrencyId] = useState('');

  useEffect(() => {
    if (accountTypes.length > 0 && !accountTypeId) {
      setAccountTypeId(accountTypes[0].id);
    }
    if (currencies.length > 0 && !currencyId) {
      setCurrencyId(currencies[0].id);
    }
  }, [accountTypes, accountTypeId, currencies, currencyId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const balanceValue = parseFloat(accountBalance);
    if (isNaN(balanceValue)) {
      alert('Invalid balance');
      return;
    }
    onSubmit?.({
      name: accountName,
      accountTypeId: accountTypeId,
      balance: balanceValue,
      currencyId: currencyId,
    });
    // Reset form
    setAccountName('');
    if (accountTypes.length > 0) {
      setAccountTypeId(accountTypes[0].id);
    }
    if (currencies.length > 0) {
      setCurrencyId(currencies[0].id);
    }
    setAccountBalance('0');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-white/10 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Add New Account</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Account Name</label>
              <input
                type="text"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                placeholder="e.g., Main Checking, Savings, etc."
                required
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Account Type</label>
              <select
                value={accountTypeId}
                onChange={(e) => setAccountTypeId(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {accountTypes.length > 0 ? (
                  accountTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))
                ) : (
                  <option value="">Loading...</option>
                )}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
              <select
                value={currencyId}
                onChange={(e) => setCurrencyId(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {currencies.length > 0 ? (
                  currencies.map((currency) => (
                    <option key={currency.id} value={currency.id} className="bg-slate-800 text-white">
                      {currency.iso4217Code || 'Unknown'}
                    </option>
                  ))
                ) : (
                  <option value="" className="bg-slate-800 text-white">Loading...</option>
                )}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Initial Balance</label>
              <input
                type="number"
                value={accountBalance}
                onChange={(e) => setAccountBalance(e.target.value)}
                step="0.01"
                placeholder="0.00"
                required
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-500/30"
              >
                Add Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
