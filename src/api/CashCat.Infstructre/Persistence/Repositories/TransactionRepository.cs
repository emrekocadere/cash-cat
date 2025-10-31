using CashCat.Domain.Entities;
using CashCat.Domain.Repositories;

namespace CashCat.Infstructre.Persistence.Repositories;

public class TransactionRepository:Repository<Transaction>,ITransactionRepository
{
    public TransactionRepository(CashCatDbContext context) : base(context)
    {
    }

    public List<Transaction> GetAllTransactionsByUserId(Guid userId, int pageNumber)
    {
        return _dbSet.Where(x=>x.Account.UserId==userId)
            .Skip((pageNumber-1)*10)
            .Take(10)
            .ToList();
    }
}