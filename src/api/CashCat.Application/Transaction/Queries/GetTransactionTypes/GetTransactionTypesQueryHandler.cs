using AutoMapper;
using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using CashCat.Domain.Entities;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetTransactionTypes;

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