using CashCat.Domain.Entities;

namespace CashCat.Domain.Repositories;

public interface IGoalRepository:IRepository<Goal>
{
    ICollection<Goal> GetAllGoalsByUserId(Guid userId);
}