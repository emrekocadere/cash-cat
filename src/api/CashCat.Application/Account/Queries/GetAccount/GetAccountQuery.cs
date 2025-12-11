using CashCat.Application.Account.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Account.Queries.GetAccount;

public record GetAccountQuery(Guid AccountId):IRequest<ResultT<AccountDto>>;