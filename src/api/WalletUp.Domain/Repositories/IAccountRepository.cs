using WalletUp.Domain.Entities;

namespace WalletUp.Domain.Repositories;

public interface IAccountRepository:IRepository<Account>
{
    ICollection<Account>GetAllAccountsByUserId(Guid userId);
    Account GetAccountById(Guid accountId);
    ICollection<Account>GetByIdsAsync(ICollection<Guid> AccountIds); 
}