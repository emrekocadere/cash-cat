using CashCat.Domain.Entities;
using CashCat.Domain.Repositories;

namespace CashCat.Infstructre.Persistence.Repositories;

public class AccountRepository:Repository<Account>,IAccountRepository
{
    public AccountRepository(CashCatDbContext context) : base(context)
    {
    }

    public List<Account> GetByUserId(Guid userId)
    {
        var accounts= _dbSet.Where(x=>x.UserId==userId).ToList();
        return accounts;
    }
}