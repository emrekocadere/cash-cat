using CashCat.Domain.Entities;
using CashCat.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace CashCat.Infstructre.Persistence.Repositories;

public class AccountRepository:Repository<Account>,IAccountRepository
{
    public AccountRepository(CashCatDbContext context) : base(context)
    {
    }

    public ICollection<Account> GetAllAccountsByUserId(Guid userId)
    {
        var accounts = _dbSet
            .Where(x => x.UserId == userId)
            .Include(x=>x.AccountType)
            .Include(x=>x.Currency)
            .ToList();
        return accounts;
    }

    public Account GetAccountById(Guid accountId)
    {
        var account = _dbSet
            .Include(x => x.AccountType)
            .Include(x => x.Currency)
            .FirstOrDefault(x => x.Id == accountId);
        return account;
    }
}