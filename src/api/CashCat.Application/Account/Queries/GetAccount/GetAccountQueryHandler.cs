using AutoMapper;
using CashCat.Application.Account.Dtos;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Account.Queries.GetAccount;

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