using CashCat.Domain.Entities;
using CashCat.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace CashCat.Infstructre.Persistence.Repositories;

public class GoalRepository:Repository<Goal>,IGoalRepository
{
    public GoalRepository(CashCatDbContext context) : base(context)
    {
    }

    public ICollection<Goal> GetAllGoalsByUserId(Guid userId)
    {
        return _dbSet
            .AsNoTracking()
            .Where(g => g.UserId == userId)
            .ToList();
    }
}