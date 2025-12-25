using CashCat.Application.Common.Services;
using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetDashboard;

public class GetDashboardQueryHandler(
    IUserContext userContext,
    ITransactionRepository transactionRepository)
    :IRequestHandler<GetDashboardQuery, ResultT<TransactionDashboardDto>>
{
    public Task<ResultT<TransactionDashboardDto>> Handle(GetDashboardQuery request, CancellationToken cancellationToken)
    {
        var transactionQuantity = transactionRepository.GetTransactionQuantityByMonths(userContext.UserId,request.Month);
        var ıncomeAmount = transactionRepository.GetIncomesByMonths(userContext.UserId,request.Month);
        var expenseAmount = transactionRepository.GetExpenseAmountByMonths(userContext.UserId,request.Month);
        
        var expenses = transactionRepository.GetExpensesByMonths(userContext.UserId,request.Month);
        
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
            CategoryExpenses = categoryExpenses
        };
        
        return Task.FromResult<ResultT<TransactionDashboardDto>>(dto);

    }
}