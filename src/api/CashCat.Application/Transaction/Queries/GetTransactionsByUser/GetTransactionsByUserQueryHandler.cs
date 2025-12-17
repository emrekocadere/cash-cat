using AutoMapper;
using CashCat.Application.Common.Services;
using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetTransactionsByUser;

public class GetTransactionsByUserQueryHandler(
    IMapper mapper,
    ITransactionRepository transactionRepository,
    IUserContext userContext)
    :IRequestHandler<GetTransactionsByUserQuery,ResultT<ICollection<TransactionDto>>>
{
    public Task<ResultT<ICollection<TransactionDto>>> Handle(GetTransactionsByUserQuery request, CancellationToken cancellationToken)
    {
       var transactions= transactionRepository.GetByUserId(userContext.UserId);
       var transactionDtos = mapper.Map<List<TransactionDto>>(transactions);
         return Task.FromResult<ResultT<ICollection<TransactionDto>>>(transactionDtos);

    }
}