using AutoMapper;
using WalletUp.Domain.Common;
using WalletUp.Domain.Entities;
using WalletUp.Domain.Repositories;
using MediatR;
using WalletUp.Application.Account.Dtos;

namespace WalletUp.Application.Account.Queries.GetAccountTypes;

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