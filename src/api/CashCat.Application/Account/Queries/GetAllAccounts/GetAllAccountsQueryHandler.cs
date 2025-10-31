using AutoMapper;
using CashCat.Application.Account.Dtos;
using CashCat.Application.Common.Services;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Account.Queries.GetAllAccounts;

public class GetAllAccountsQueryHandler(
    IAccountRepository accountRepository,
    IMapper mapper,
    IUserContext userContext
    ):IRequestHandler<GetAllAccountsQuery, ResultT<List<AccountDto>>>
{
    public  async Task<ResultT<List<AccountDto>>> Handle(GetAllAccountsQuery request, CancellationToken cancellationToken) // async yi silince hata veriyor neden
    {
        var userId = userContext.UserId;
        var accounts=  accountRepository.GetByUserId(userId);
        var accountDtos = mapper.Map<List<AccountDto>>(accounts); // buna bak çoklugöndermreyi analiz et . okey
        return  accountDtos;
    }
}