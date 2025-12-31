using AutoMapper;
using WalletUp.Domain.Common;
using WalletUp.Domain.Entities;
using WalletUp.Domain.Repositories;
using MediatR;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetTransactionTypes;

public class GetTransactionTypesQueryHandler(
    IMapper mapper, 
    IRepository<TransactionType> repository)
    :IRequestHandler<GetTransactionTypesQuery,ResultT<ICollection<TransactionTypeDto>>>
{
    public Task<ResultT<ICollection<TransactionTypeDto>>> Handle(GetTransactionTypesQuery request, CancellationToken cancellationToken)
    {
        var transactionTypes = repository.GetAll();
        var transactionTypeDtos = mapper.Map<List<TransactionTypeDto>>(transactionTypes);
        return Task.FromResult<ResultT<ICollection<TransactionTypeDto>>>(transactionTypeDtos);
    }
}