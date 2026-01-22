interface Goal {
  id: string;
  label: string;
  icon: string;
}

const goals: Goal[] = [
  { id: 'save', label: 'Build Savings', icon: '💰' },
  { id: 'budget', label: 'Stick to Budget', icon: '📊' },
  { id: 'debt', label: 'Pay Off Debt', icon: '💳' },
  { id: 'invest', label: 'Start Investing', icon: '📈' },
  { id: 'track', label: 'Track Spending', icon: '🔍' },
  { id: 'plan', label: 'Plan for Future', icon: '🎯' },
];

interface GoalsStepProps {
  selectedGoals: string[];
  onGoalToggle: (goalId: string) => void;
}

export const GoalsStep = ({ selectedGoals, onGoalToggle }: GoalsStepProps) => {
  return (
    <div className="flex-1">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Financial Goals</h2>
        <p className="text-gray-400">Select all that apply</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {goals.map((goal) => (
          <button
            key={goal.id}
            onClick={() => onGoalToggle(goal.id)}
            className={`p-4 rounded-xl border transition-all ${
              selectedGoals.includes(goal.id)
                ? 'border-primary-500/50 bg-primary-500/10'
                : 'border-slate-700 bg-slate-800/30 hover:border-slate-600'
            }`}
          >
            {selectedGoals.includes(goal.id) && (
              <div className="flex justify-end mb-1">
                <div className="w-4 h-4 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
            <div className="text-3xl mb-2">{goal.icon}</div>
            <p className="text-xs font-semibold text-white">{goal.label}</p>
          </button>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          {selectedGoals.length} goal{selectedGoals.length !== 1 ? 's' : ''} selected
        </p>
      </div>
    </div>
  );
};
