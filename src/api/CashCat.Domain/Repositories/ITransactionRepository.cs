

using CashCat.Domain.Entities;

namespace CashCat.Domain.Repositories;

public interface ITransactionRepository:IRepository<Transaction>
{
     ICollection<Transaction> GetTransactionsByAccountId(Guid accountId);
}