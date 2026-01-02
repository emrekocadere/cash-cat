using WalletUp.Domain.Entities;

namespace WalletUp.Domain.Repositories;

public interface ITransactionRepository:IRepository<Transaction>
{
     ICollection<Transaction> GetTransactionsByAccountId(
          Guid accountId,
          Guid? categoryId = null,
          Guid? transactionTypeId = null,
          DateTime? startDate = null,
          DateTime? endDate = null);
     ICollection<Transaction> GetByUserId(
          Guid userId,
          Guid? categoryId = null,
          Guid? transactionTypeId = null,
          Guid? accountId = null,
          DateTime? startDate = null,
          DateTime? endDate = null);
     int  GetTransactionQuantityByMonths(Guid userId,int month);
     double  GetIncomesByMonths(Guid userId,int month);
     double  GetExpenseAmountByMonths(Guid userId,int month);
     ICollection<Transaction> GetExpensesByMonths(Guid userId,int month);
     double  GetTotalBalanceByUser(Guid userId);
}