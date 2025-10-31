using CashCat.Domain.Entities;

namespace CashCat.Domain.Repositories;

public interface IAccountRepository:IRepository<Account>
{
    List<Account> GetByUserId(Guid userId);
}