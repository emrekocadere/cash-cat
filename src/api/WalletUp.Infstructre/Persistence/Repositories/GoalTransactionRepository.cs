using Microsoft.EntityFrameworkCore;
using WalletUp.Domain.Entities;
using WalletUp.Domain.Repositories;

namespace CashCat.Infstructre.Persistence.Repositories;

public class GoalTransactionRepository:Repository<GoalTransaction>, IGoalTransactionRepository
{
    public GoalTransactionRepository(CashCatDbContext context) : base(context)
    {
    }

    public double GetCurrentAmountByGoalId(Guid goalId)
    {
        return _dbSet.AsNoTracking()
            .Where(x=>x.GoaldId==goalId)
            .Include(x=>x.TransactionType)
            .Sum(x=>x.TransactionType!.Name=="income" ? x.Amount : -x.Amount);
    }
}