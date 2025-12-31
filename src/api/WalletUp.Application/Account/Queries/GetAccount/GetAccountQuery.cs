using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Account.Dtos;

namespace WalletUp.Application.Account.Queries.GetAccount;

public record GetAccountQuery(Guid AccountId):IRequest<ResultT<AccountDto>>;