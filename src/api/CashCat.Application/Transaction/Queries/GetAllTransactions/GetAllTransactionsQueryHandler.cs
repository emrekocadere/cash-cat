using AutoMapper;
using CashCat.Application.Common.Services;
using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetAllTransactions;

public class GetAllTransactionsQueryHandler(
    IMapper mapper,
    IUserContext userContext,
    ITransactionRepository transactionRepository
    ):IRequestHandler<GetAllTransactionsQuery,ResultT<List<TransactionDto>>>
{
    public async Task<ResultT<List<TransactionDto>>> Handle(GetAllTransactionsQuery request, CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;
        var transactions = transactionRepository.GetAllTransactionsByUserId(userId,request.PageNumber);
        var transactionsDtos= mapper.Map<List<TransactionDto>>(transactions);
        return transactionsDtos;

    }
}