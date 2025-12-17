using AutoMapper;
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
        var ıncomes = transactionRepository.GetIncomesByMonths(userContext.UserId,request.Month);
        var expenses = transactionRepository.GetExpenseByMonths(userContext.UserId,request.Month);

        TransactionDashboardDto dto = new()
        {
            Quantity = transactionQuantity,
            Income = ıncomes,
            Expense = expenses
        };
        
        return Task.FromResult<ResultT<TransactionDashboardDto>>(dto);

    }
}