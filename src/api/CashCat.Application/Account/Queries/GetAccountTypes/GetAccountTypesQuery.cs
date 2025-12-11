using CashCat.Application.Account.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Account.Queries.GetAccountTypes;

public record GetAccountTypesQuery(): IRequest<ResultT<ICollection<AccountTypeDto>>>;