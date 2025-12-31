using WalletUp.Domain.Entities;

namespace WalletUp.Domain.Repositories;

public interface ITransactionRepository:IRepository<Transaction>
{
     ICollection<Transaction> GetTransactionsByAccountId(Guid accountId);
     ICollection<Transaction> GetByUserId(Guid userId);
     int  GetTransactionQuantityByMonths(Guid userId,int month);
     double  GetIncomesByMonths(Guid userId,int month);
     double  GetExpenseAmountByMonths(Guid userId,int month);
     ICollection<Transaction> GetExpensesByMonths(Guid userId,int month);
}