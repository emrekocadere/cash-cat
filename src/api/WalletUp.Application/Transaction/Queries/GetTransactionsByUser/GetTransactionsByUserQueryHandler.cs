using AutoMapper;
using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;
using MediatR;
using WalletUp.Application.Common.Services;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetTransactionsByUser;

public class GetTransactionsByUserQueryHandler(
    IMapper mapper,
    ITransactionRepository transactionRepository,
    IUserContext userContext)
    :IRequestHandler<GetTransactionsByUserQuery,ResultT<ICollection<TransactionDto>>>
{
    public Task<ResultT<ICollection<TransactionDto>>> Handle(GetTransactionsByUserQuery request, CancellationToken cancellationToken)
    {
       var transactions = transactionRepository.GetByUserId(
           userContext.UserId,
           request.CategoryId,
           request.TransactionTypeId,
           request.AccountId,
           request.StartDate,
           request.EndDate
       );
       var transactionDtos = mapper.Map<List<TransactionDto>>(transactions);
       return Task.FromResult<ResultT<ICollection<TransactionDto>>>(transactionDtos);
    }
}