using CashCat.Domain.Entities;
using CashCat.Domain.Repositories;
using Microsoft.EntityFrameworkCore;


namespace CashCat.Infstructre.Persistence.Repositories;

public class TransactionRepository:Repository<Transaction>,ITransactionRepository
{
    public TransactionRepository(CashCatDbContext context) : base(context)
    {
    }

    public ICollection<Transaction> GetTransactionsByAccountId(Guid accountId)
    {
        var transactions = _dbSet
            .AsNoTracking()
            .Where(x=>x.AccountId==accountId)
            .Include(x=>x.TransactionType)
            .Include(x=>x.Category)
            .ToList();
        return transactions;
    }
}