import { Goal } from "@/types/goal.types";

interface GoalCardProps {
  goal: Goal;
  onAddMoney?: (goalId: string) => void;
  onEdit?: (goalId: string) => void;
}

export const GoalCard = ({ goal, onAddMoney, onEdit }: GoalCardProps) => {
  const progress = (goal.currentAmount / goal.targetAmount) * 100;
  const remaining = goal.targetAmount - goal.currentAmount;
  const daysLeft = Math.ceil(
    (new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{goal.name}</h3>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Progress</span>
          <span className="text-sm font-bold text-white">{progress.toFixed(0)}%</span>
        </div>
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-500`}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      {/* Amounts */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Current</span>
          <span className="text-sm font-bold text-white">
            ₺{goal.currentAmount.toLocaleString('tr-TR')}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Target</span>
          <span className="text-sm font-bold text-white">
            ₺{goal.targetAmount.toLocaleString('tr-TR')}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Remaining</span>
          <span className="text-sm font-bold text-primary-400">
            ₺{remaining.toLocaleString('tr-TR')}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4">
        <button 
          onClick={() => onAddMoney?.(goal.id)}
          className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Add Money
        </button>
        <button 
          onClick={() => onEdit?.(goal.id)}
          className="px-4 py-2 border border-white/20 hover:border-white/30 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
