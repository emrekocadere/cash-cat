import { useState, useEffect } from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { GoalStatsCards } from '@/components/goals/GoalStatsCards';
import { GoalCard } from '@/components/goals/GoalCard';
import { EmptyGoalsState } from '@/components/goals/EmptyGoalsState';
import { AddGoalModal } from '@/components/goals/AddGoalModal';
import { AddMoneyModal } from '@/components/goals/AddMoneyModal';
import { accountsApi } from '@/api/endpoints/accounts.api';
import { goalsApi } from '@/api/endpoints/goals.api';
import type { Goal } from '@/types/model.types';

export const GoalsPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [accounts, setAccounts] = useState<Array<{ id: string; name: string }>>([]);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAccounts();
    loadGoals();
  }, []);

  const loadAccounts = async () => {
    try {
      const data = await accountsApi.getAll();
      setAccounts(data.map(acc => ({ id: acc.id!, name: acc.name })));
    } catch (error) {
      console.error('Failed to load accounts:', error);
    }
  };

  const loadGoals = async () => {
    try {
      setIsLoading(true);
      const result = await goalsApi.GetAll();
      if (result.isSuccess && result.value) {
        setGoals(result.value);
      } else {
        console.error('Failed to load goals:', result.error);
      }
    } catch (error) {
      console.error('Failed to load goals:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddMoney = (goalId: string) => {
    console.log('Finding goal with ID:', goalId);
    console.log('Available goals:', goals);
    const goal = goals.find(g => g.id === goalId);
    console.log('Found goal:', goal);
    if (goal) {
      setSelectedGoal(goal);
      setShowAddMoneyModal(true);
    } else {
      console.error('Goal not found for ID:', goalId);
    }
  };

  const handleEditGoal = (goalId: string) => {
    console.log('Edit goal:', goalId);
    // TODO: Implement edit goal logic
  };

  const handleGoalCreated = () => {
    console.log('Goal created successfully');
    loadGoals();
  };

  const handleMoneyAdded = () => {
    loadGoals();
  };

  // Transform goals for stats cards
  const goalsForStats = goals.map(goal => ({
    targetAmount: goal.target,
    currentAmount: goal.currentAmount || 0
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <main className="ml-64">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white">Financial Goals</h1>
              <p className="text-gray-400 mt-2">Track your savings goals and stay motivated</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-500/30"
            >
              Add New Goal
            </button>
          </div>

          <GoalStatsCards goals={goalsForStats} />

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Loading goals...</p>
            </div>
          ) : goals.length === 0 ? (
            <EmptyGoalsState onCreateGoal={() => setShowAddModal(true)} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goals.map((goal) => (
                <GoalCard 
                  key={goal.id} 
                  goal={goal} 
                  onAddMoney={handleAddMoney}
                  onEdit={handleEditGoal}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />

      <AddGoalModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={handleGoalCreated}
        accounts={accounts}
      />

      <AddMoneyModal
        isOpen={showAddMoneyModal}
        onClose={() => setShowAddMoneyModal(false)}
        goal={selectedGoal}
        onSuccess={handleMoneyAdded}
      />
    </div>
  );
};