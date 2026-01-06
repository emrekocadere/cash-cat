using WalletUp.Domain.Entities;

namespace WalletUp.Domain.Repositories;

public interface IGoalTransactionRepository:IRepository<GoalTransaction>
{
    double GetCurrentAmountByGoalId(Guid goalId);
}