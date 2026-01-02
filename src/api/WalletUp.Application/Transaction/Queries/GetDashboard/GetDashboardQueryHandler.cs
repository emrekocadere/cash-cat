using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;
using MediatR;
using WalletUp.Application.Common.Services;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetDashboard;

public class GetDashboardQueryHandler(
    IUserContext userContext,
    ITransactionRepository transactionRepository,
    IGoalRepository goalRepository)
    :IRequestHandler<GetDashboardQuery, ResultT<TransactionDashboardDto>>
{
    public Task<ResultT<TransactionDashboardDto>> Handle(GetDashboardQuery request, CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;
        var transactionQuantity = transactionRepository.GetTransactionQuantityByMonths(userId,request.Month);
        var ıncomeAmount = transactionRepository.GetIncomesByMonths(userId,request.Month);
        var expenseAmount = transactionRepository.GetExpenseAmountByMonths(userId,request.Month);
        var goalQuantity = goalRepository.GetGoalQuantityByUser(userId);
        var expenses = transactionRepository.GetExpensesByMonths(userId,request.Month);
        var currentTotalBalance = transactionRepository.GetTotalBalanceByUser(userId);
        
        var categoryExpenses = expenses
            .GroupBy(e => new { e.CategoryId, e.Category!.Name })
            .Select(g => new CategoryExpenseDto
            {
                CategoryId = g.Key.CategoryId,
                CategoryName = g.Key.Name,
                Amount = g.Sum(e => e.Amount),
                Percentage = 0
            })
            .ToList();
        
        if (expenseAmount > 0)
        {
            foreach (var categoryExpense in categoryExpenses)
            {
                categoryExpense.Percentage = Math.Round((categoryExpense.Amount / expenseAmount) * 100, 2);
            }
        }

        TransactionDashboardDto dto = new()
        {
            Quantity = transactionQuantity,
            Income = ıncomeAmount,
            Expense = expenseAmount,
            CategoryExpenses = categoryExpenses,
            GoalQuantity = goalQuantity,
            CurrentTotalBalance = currentTotalBalance
        };
        
        return Task.FromResult<ResultT<TransactionDashboardDto>>(dto);

    }
}