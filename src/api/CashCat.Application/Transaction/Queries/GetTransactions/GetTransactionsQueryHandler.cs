using System;
using AutoMapper;
using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetTransactions;

public class GetTransactionsQueryHandler(
    IMapper mapper,
    ITransactionRepository transactionRepository
)
: IRequestHandler<GetTransactionsQuery, ResultT<List<TransactionDto>>>
{
    public Task<ResultT<List<TransactionDto>>> Handle(GetTransactionsQuery request, CancellationToken cancellationToken)
    {
        var transactions = transactionRepository.GetTransactionsByAccountId(request.AccountId);
        var transactionDtos=mapper.Map<List<TransactionDto>>(transactions);
        return Task.FromResult<ResultT<List<TransactionDto>>>(transactionDtos);
    }
}