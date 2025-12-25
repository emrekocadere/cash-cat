import { useState } from 'react';
import { goalsApi } from '@/api/endpoints/goals.api';

interface AddGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  accounts?: Array<{ id: string; name: string }>;
}

export const AddGoalModal = ({ isOpen, onClose, onSuccess, accounts = [] }: AddGoalModalProps) => {
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [accountId, setAccountId] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const amount = parseFloat(targetAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid target amount');
      return;
    }

    if (!name.trim()) {
      alert('Please enter a goal name');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await goalsApi.create({
        title: name,
        amount: amount,
        description: description || '',
        accountIds: accountId ? [accountId] : [],
      });

      if (result.isSuccess) {
        // Reset form
        setName('');
        setTargetAmount('');
        setAccountId('');
        setDescription('');

        onSuccess?.();
        onClose();
      } else {
        alert(result.error || 'Failed to create goal');
      }
    } catch (err) {
      console.error('Failed to create goal:', err);
      alert('Failed to create goal. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Create New Goal</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Goal Name</label>
                <input
                  type="text"
                  placeholder="e.g., Emergency Fund"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Target Amount</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Linked Account (optional)
              </label>
              <select
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-800/80 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 hover:bg-slate-800 transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="" className="bg-slate-800 text-white">Select account</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.id} className="bg-slate-800 text-white">
                    {account.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description (optional)</label>
              <textarea
                rows={3}
                placeholder="Add some details about your goal..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Creating...' : 'Create Goal'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
