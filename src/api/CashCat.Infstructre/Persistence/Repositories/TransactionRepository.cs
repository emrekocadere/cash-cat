using CashCat.Domain.Entities;
using CashCat.Domain.Repositories;
using Microsoft.EntityFrameworkCore;


namespace CashCat.Infstructre.Persistence.Repositories;

public class TransactionRepository : Repository<Transaction>, ITransactionRepository
{
    public TransactionRepository(CashCatDbContext context) : base(context)
    {
    }

    public ICollection<Transaction> GetTransactionsByAccountId(Guid accountId)
    {
        var transactions = _dbSet
            .AsNoTracking()
            .Where(x => x.AccountId == accountId)
            .Include(x => x.TransactionType)
            .Include(x => x.Category)
            .ToList();
        return transactions;
    }

    public ICollection<Transaction> GetByUserId(Guid userId)
    {
        var transactions = _dbSet
            .AsNoTracking()
            .Include(x => x.Account)
            .Where(x => x.Account.UserId == userId)
            .Include(x => x.TransactionType)
            .Include(x => x.Category)
            .ToList();
        return transactions;
    }

    public int GetTransactionQuantityByMonths(Guid userId,int month)
    {
        return _dbSet
            .AsNoTracking()
            .Include(x=>x.Account)
            .Count(x => x.Account.UserId == userId && x.Date.Month==month);
    }

    public double GetIncomesByMonths(Guid userId, int month)
    {
        return _dbSet
            .AsNoTracking()
            .Include(x=>x.Account)
            .Include(x=>x.TransactionType)
            .Where(x=>x.Account.UserId==userId && x.TransactionType.Name=="income" && x.Date.Month==month)
            .Sum(x=>x.Amount);
    }

    public double GetExpenseByMonths(Guid userId, int month) 
    {
        return _dbSet
            .AsNoTracking()
            .Include(x=>x.Account)
            .Include(x=>x.TransactionType)
            .Where(x=>x.Account.UserId==userId && x.TransactionType.Name=="expense" && x.Date.Month==month)
            .Sum(x=>x.Amount);
    }
}