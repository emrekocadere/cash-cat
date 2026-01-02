using WalletUp.Domain.Entities;

namespace WalletUp.Domain.Repositories;

public interface IGoalRepository:IRepository<Goal>
{
    ICollection<Goal> GetAllGoalsByUserId(Guid userId);
    int GetGoalQuantityByUser(Guid userId);
}