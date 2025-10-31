using CashCat.Domain.Entities;

namespace CashCat.Domain.Repositories;

public interface ITransactionRepository:IRepository<Transaction>
{
    public List<Transaction> GetAllTransactionsByUserId(Guid userId,int pageNumber);
}