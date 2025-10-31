using CashCat.Application.Account.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Account.Queries.GetAllAccounts;

public class GetAllAccountsQuery:IRequest<ResultT<List<AccountDto>>>
{
    
}