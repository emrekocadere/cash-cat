using System;
using AutoMapper;
using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;
using MediatR;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetTransactions;

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