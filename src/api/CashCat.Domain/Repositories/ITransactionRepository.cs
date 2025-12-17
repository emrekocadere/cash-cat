

using CashCat.Domain.Entities;

namespace CashCat.Domain.Repositories;

public interface ITransactionRepository:IRepository<Transaction>
{
     ICollection<Transaction> GetTransactionsByAccountId(Guid accountId);
     ICollection<Transaction> GetByUserId(Guid userId);
     int  GetTransactionQuantityByMonths(Guid userId,int month);
     double  GetIncomesByMonths(Guid userId,int month);
     double  GetExpenseByMonths(Guid userId,int month);
}