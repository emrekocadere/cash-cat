using AutoMapper;
using CashCat.Application.Account.Dtos;
using CashCat.Application.Common.Services;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Account.Queries.GetAccounts;

public class GetAccountsQueryHandler(
    IMapper mapper,
    IAccountRepository accountRepository,
    IUserContext userContext)
    :IRequestHandler<GetAccountsQuery,ResultT<ICollection<AccountDto>>> 
{
    public Task<ResultT<ICollection<AccountDto>>> Handle(GetAccountsQuery request, CancellationToken cancellationToken)
    {
        var accounts = accountRepository.GetAllAccountsByUserId(userContext.UserId);
        var accountDtos = mapper.Map<List<AccountDto>>(accounts);

        return Task.FromResult<ResultT<ICollection<AccountDto>>>(accountDtos);

    }
    
}