using AutoMapper;
using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;
using MediatR;
using WalletUp.Application.Account.Dtos;
using WalletUp.Application.Common.Services;

namespace WalletUp.Application.Account.Queries.GetAccounts;

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