using CashCat.Application.Account.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Account.Queries.GetAccounts;

public record GetAccountsQuery():IRequest<ResultT<ICollection<AccountDto>>>;