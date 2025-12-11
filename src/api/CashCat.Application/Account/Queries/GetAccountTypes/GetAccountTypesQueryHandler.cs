using AutoMapper;
using CashCat.Application.Account.Dtos;
using CashCat.Domain.Common;
using CashCat.Domain.Entities;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Account.Queries.GetAccountTypes;

public class GetAccountTypesQueryHandler(
    IMapper mapper,
    IRepository<AccountType> accountTypeRepository)
    :IRequestHandler<GetAccountTypesQuery, ResultT<ICollection<AccountTypeDto>>>
{
    public Task<ResultT<ICollection<AccountTypeDto>>> Handle(GetAccountTypesQuery request, CancellationToken cancellationToken)
    {
        var accountTypes=accountTypeRepository.GetAll();
        var accountTypeDtos=mapper.Map<List<AccountTypeDto>>(accountTypes);
        return Task.FromResult<ResultT<ICollection<AccountTypeDto>>>(accountTypeDtos);
    }
}