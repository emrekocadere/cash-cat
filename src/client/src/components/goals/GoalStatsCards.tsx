interface Goal {
  targetAmount: number;
  currentAmount: number;
}

interface GoalStatsCardsProps {
  goals: Goal[];
}

export const GoalStatsCards = ({ goals }: GoalStatsCardsProps) => {
  const totalTarget = goals.reduce((sum, g) => sum + g.targetAmount, 0);
  const totalSaved = goals.reduce((sum, g) => sum + g.currentAmount, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
        <h3 className="text-gray-400 text-sm font-medium mb-2">Active Goals</h3>
        <p className="text-3xl font-bold text-white">{goals.length}</p>
      </div>
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
        <h3 className="text-gray-400 text-sm font-medium mb-2">Total Target</h3>
        <p className="text-3xl font-bold text-white">
          ₺{totalTarget.toLocaleString('tr-TR')}
        </p>
      </div>
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
        <h3 className="text-gray-400 text-sm font-medium mb-2">Total Saved</h3>
        <p className="text-3xl font-bold text-green-400">
          ₺{totalSaved.toLocaleString('tr-TR')}
        </p>
      </div>
    </div>
  );
};
