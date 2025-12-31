using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Account.Dtos;

namespace WalletUp.Application.Account.Queries.GetAccountTypes;

public record GetAccountTypesQuery(): IRequest<ResultT<ICollection<AccountTypeDto>>>;