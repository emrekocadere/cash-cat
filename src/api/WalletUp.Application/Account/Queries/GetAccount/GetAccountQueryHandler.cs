using AutoMapper;
using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;
using MediatR;
using WalletUp.Application.Account.Dtos;

namespace WalletUp.Application.Account.Queries.GetAccount;

public class GetAccountQueryHandler(
    IMapper mapper,
    IAccountRepository accountRepository)
    : IRequestHandler<GetAccountQuery, ResultT<AccountDto>>
{
    public async Task<ResultT<AccountDto>> Handle(GetAccountQuery request, CancellationToken cancellationToken)
    {
        var account = accountRepository.GetAccountById(request.AccountId);
        var accountDto = mapper.Map<AccountDto>(account);
        return accountDto;
    }
}